import { useMemo } from 'react'
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { useTheme } from '../context/ThemeContext'
import { formatWithCommas } from '../utils/dataGenerator'
import { getChartColors } from '../utils/chartColors'

interface YoYLineChartProps {
  data: Array<Record<string, number | string>>
  segmentKeys: string[]
  xAxisLabel?: string
  yAxisLabel?: string
  showPercentage?: boolean
}

export function YoYLineChart({
  data,
  segmentKeys,
  xAxisLabel = 'Year',
  yAxisLabel = 'Growth Rate (%)',
  showPercentage = true
}: YoYLineChartProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  if (!data || data.length === 0 || !segmentKeys || segmentKeys.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-text-secondary-light dark:text-text-secondary-dark">
        No data available
      </div>
    )
  }

  const colors = useMemo(() => {
    return getChartColors(segmentKeys.length)
  }, [segmentKeys.length])

  const segmentColors: Record<string, string> = useMemo(() => {
    const colorMap: Record<string, string> = {}
    segmentKeys.forEach((key, index) => {
      colorMap[key] = colors[index % colors.length]
    })
    return colorMap
  }, [segmentKeys, colors])

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={`p-4 rounded-lg border-2 shadow-lg ${
          isDark
            ? 'bg-navy-card border-electric-blue text-white'
            : 'bg-white border-electric-blue text-gray-900'
        }`}>
          <p className="font-bold text-base mb-2">{xAxisLabel}: {label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2 mb-1">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: entry.color }}
              />
              <span className="font-semibold text-sm">{entry.name}:</span>
              <span className="font-bold text-sm">
                {showPercentage && entry.value >= 0 ? '+' : ''}
                {formatWithCommas(entry.value, 2)}
                {showPercentage ? '%' : ''}
              </span>
            </div>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="relative w-full h-full">
      {/* Demo Data Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        style={{ opacity: 0.12 }}
      >
        <span
          className="text-4xl font-bold text-gray-400 dark:text-gray-600 select-none"
          style={{ transform: 'rotate(-45deg)', transformOrigin: 'center' }}
        >
          Demo Data
        </span>
      </div>

      <ResponsiveContainer width="100%" height="100%" className="relative z-10">
        <RechartsLineChart
          data={data}
          margin={{
            top: 20,
            right: 40,
            left: 80,
            bottom: 80,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#4A5568' : '#EAEAEA'} />
          <XAxis
            dataKey="year"
            stroke={isDark ? '#A0AEC0' : '#4A5568'}
            style={{ fontSize: '13px', fontWeight: 500 }}
            angle={0}
            textAnchor="middle"
            height={60}
            interval={0}
            tick={{ fill: isDark ? '#E2E8F0' : '#2D3748' }}
            tickMargin={15}
            label={{
              value: xAxisLabel,
              position: 'insideBottom',
              offset: -10,
              style: {
                fontSize: '14px',
                fontWeight: 500,
                fill: isDark ? '#E2E8F0' : '#2D3748'
              }
            }}
          />
          <YAxis
            stroke={isDark ? '#A0AEC0' : '#4A5568'}
            style={{ fontSize: '13px', fontWeight: 500 }}
            tickFormatter={(value) => showPercentage ? `${formatWithCommas(value, 1)}%` : formatWithCommas(value, 1)}
            width={90}
            tick={{ fill: isDark ? '#E2E8F0' : '#2D3748' }}
            tickMargin={15}
            domain={['auto', 'auto']}
            allowDataOverflow={false}
            label={{
              value: yAxisLabel,
              angle: -90,
              position: 'insideLeft',
              offset: -10,
              style: {
                fontSize: '14px',
                fontWeight: 500,
                fill: isDark ? '#E2E8F0' : '#2D3748',
                textAnchor: 'middle'
              }
            }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ strokeDasharray: '3 3' }}
          />
          <Legend
            wrapperStyle={{
              color: isDark ? '#E2E8F0' : '#2D3748',
              paddingTop: '20px',
              paddingBottom: '10px',
              fontSize: '12px',
              fontWeight: 500
            }}
            iconSize={12}
            iconType="circle"
            verticalAlign="bottom"
            align="center"
            formatter={(value) => {
              // Truncate long labels for better readability
              const maxLength = 30
              const displayValue = typeof value === 'string' && value.length > maxLength
                ? value.substring(0, maxLength) + '...'
                : value
              return (
                <span style={{ fontSize: '12px', fontWeight: 500 }}>{displayValue}</span>
              )
            }}
          />
          {segmentKeys.map((key) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={segmentColors[key]}
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6 }}
              name={key}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}
