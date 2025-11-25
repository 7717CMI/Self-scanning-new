import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SimpleListFilterProps {
  label: string
  options: string[]
  value: string[]
  onChange: (value: string[]) => void
}

export function SimpleListFilter({ label, options, value, onChange }: SimpleListFilterProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOption = (option: string) => {
    const newValue = value.includes(option)
      ? value.filter(v => v !== option)
      : [...value, option]
    onChange(newValue)
  }

  const selectedCount = value.length

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-white dark:bg-navy-card border-2 border-gray-300 dark:border-navy-light rounded-lg text-left flex items-center justify-between hover:border-electric-blue dark:hover:border-cyan-accent transition-colors"
      >
        <span className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
          {label}
          {selectedCount > 0 && (
            <span className="ml-2 px-2 py-0.5 bg-electric-blue text-white text-xs rounded-full">
              {selectedCount}
            </span>
          )}
        </span>
        <ChevronDown
          className={`text-text-secondary-light dark:text-text-secondary-dark transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={20}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-2 w-full bg-white dark:bg-navy-card border-2 border-gray-300 dark:border-navy-light rounded-lg shadow-xl max-h-96 overflow-y-auto"
          >
            <div className="p-2">
              {options.map((option) => (
                <div
                  key={option}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-navy-light rounded-md cursor-pointer"
                  onClick={() => toggleOption(option)}
                >
                  <input
                    type="checkbox"
                    checked={value.includes(option)}
                    onChange={() => toggleOption(option)}
                    className="rounded border-gray-300 text-electric-blue focus:ring-electric-blue"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <span className="text-sm text-text-primary-light dark:text-text-primary-dark">
                    {option}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
