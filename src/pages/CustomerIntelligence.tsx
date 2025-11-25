import { useState, useRef, useEffect } from 'react'
import { Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

interface CustomerIntelligenceProps {
  onNavigate: (page: string) => void
}

type Proposition = 'proposition1' | 'proposition2' | 'proposition3'

interface CustomerData {
  sNo: number
  customerName: string
  parentGroup: string
  retailFormat: string
  regionCountry: string
  storeFootprint: string
  selfScanningStatus: string
  keyContact: string
  designation: string
  emailAddress: string
  phoneWhatsApp: string
  linkedinProfile: string
  websiteURL: string
  primaryMotivation: string
  upcomingTriggers: string
  shrinkRiskSensitivity: string
  // Purchasing Behaviour fields (for Proposition 2 & 3)
  decisionMakers?: string
  procurementModel?: string
  budgetApproach?: string
  // Solution Requirements fields (for Proposition 3)
  preferredSolutionType?: string
  preferredModelType?: string
  preferredTechnology?: string
  integrationRequirements?: string
  deploymentIntensity?: string
  serviceExpectations?: string
  otherConstraints?: string
  // CMI Insights fields (for Proposition 3)
  customerBenchmarking?: string
  additionalComments?: string
}

export function CustomerIntelligence({ onNavigate }: CustomerIntelligenceProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  const [activeProposition, setActiveProposition] = useState<Proposition>('proposition1')
  const topScrollRef = useRef<HTMLDivElement>(null)
  const tableScrollRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const topScroll = topScrollRef.current
    const tableScroll = tableScrollRef.current
    
    if (topScroll && tableScroll) {
      const table = tableScroll.querySelector('table')
      if (table) {
        const scrollContent = topScroll.querySelector('div')
        if (scrollContent) {
          scrollContent.style.width = `${table.scrollWidth}px`
        }
      }
    }
  }, [activeProposition])

  // Sample data based on the image
  const proposition1Data: CustomerData[] = [
    {
      sNo: 1,
      customerName: 'Walmart',
      parentGroup: 'Walmart Inc.',
      retailFormat: 'Supermarket',
      regionCountry: 'USA, Global',
      storeFootprint: '10,500+',
      selfScanningStatus: 'Full Rollout',
      keyContact: 'John Smith',
      designation: 'VP Digital Innovation',
      emailAddress: 'j.smith@walmart.com',
      phoneWhatsApp: '+1-479-273-4000',
      linkedinProfile: 'linkedin.com/in/johnsmith',
      websiteURL: 'www.walmart.com',
      primaryMotivation: 'Labor reduction, Speed',
      upcomingTriggers: 'Store refurb, Digital program',
      shrinkRiskSensitivity: 'High'
    },
    {
      sNo: 2,
      customerName: 'Tesco',
      parentGroup: 'Tesco PLC',
      retailFormat: 'Supermarket',
      regionCountry: 'UK, Europe',
      storeFootprint: '4,600+',
      selfScanningStatus: 'Full Rollout',
      keyContact: 'Sarah Johnson',
      designation: 'Head Store Operations',
      emailAddress: 's.johnson@tesco.com',
      phoneWhatsApp: '+44-800-505-555',
      linkedinProfile: 'linkedin.com/in/sarahjohnson',
      websiteURL: 'www.tesco.com',
      primaryMotivation: 'Contactless, Speed',
      upcomingTriggers: 'Cashless push, Labor constraints',
      shrinkRiskSensitivity: 'Medium'
    },
    {
      sNo: 3,
      customerName: 'Carrefour',
      parentGroup: 'Carrefour Group',
      retailFormat: 'Hypermarket',
      regionCountry: 'France, Global',
      storeFootprint: '12,000+',
      selfScanningStatus: 'Partial Rollout',
      keyContact: 'Pierre Dubois',
      designation: 'CIO',
      emailAddress: 'p.dubois@carrefour.com',
      phoneWhatsApp: '+33-1-5709-3000',
      linkedinProfile: 'linkedin.com/in/pierredubois',
      websiteURL: 'www.carrefour.com',
      primaryMotivation: 'Basket uplift, Loyalty data',
      upcomingTriggers: 'New stores, Digital program',
      shrinkRiskSensitivity: 'High'
    },
    {
      sNo: 4,
      customerName: 'Kroger',
      parentGroup: 'The Kroger Co.',
      retailFormat: 'Supermarket',
      regionCountry: 'USA',
      storeFootprint: '2,800+',
      selfScanningStatus: 'Pilot',
      keyContact: 'Michael Chen',
      designation: 'VP IT-Digital',
      emailAddress: 'm.chen@kroger.com',
      phoneWhatsApp: '+1-513-762-4000',
      linkedinProfile: 'linkedin.com/in/michaelchen',
      websiteURL: 'www.kroger.com',
      primaryMotivation: 'Labor reduction, Speed',
      upcomingTriggers: 'Store refurb, Analytics',
      shrinkRiskSensitivity: 'Medium'
    },
    {
      sNo: 5,
      customerName: 'Aldi',
      parentGroup: 'Aldi Süd',
      retailFormat: 'Discount Store',
      regionCountry: 'Germany, Global',
      storeFootprint: '11,000+',
      selfScanningStatus: 'None',
      keyContact: 'Hans Mueller',
      designation: 'Head Digital',
      emailAddress: 'h.mueller@aldi.com',
      phoneWhatsApp: '+49-201-8593-0',
      linkedinProfile: 'linkedin.com/in/hansmueller',
      websiteURL: 'www.aldi.com',
      primaryMotivation: 'Speed, Labor reduction',
      upcomingTriggers: 'Pilot phased, New stores',
      shrinkRiskSensitivity: 'Low'
    },
    {
      sNo: 6,
      customerName: 'Target',
      parentGroup: 'Target Corporation',
      retailFormat: 'Department Store',
      regionCountry: 'USA',
      storeFootprint: '1,900+',
      selfScanningStatus: 'Full Rollout',
      keyContact: 'Emily Rodriguez',
      designation: 'Chief Innovation Officer',
      emailAddress: 'e.rodriguez@target.com',
      phoneWhatsApp: '+1-612-304-6073',
      linkedinProfile: 'linkedin.com/in/emilyrodriguez',
      websiteURL: 'www.target.com',
      primaryMotivation: 'Contactless, Basket uplift',
      upcomingTriggers: 'Digital program, Cashless push',
      shrinkRiskSensitivity: 'Medium'
    },
    {
      sNo: 7,
      customerName: 'Lidl',
      parentGroup: 'Schwarz Group',
      retailFormat: 'Discount Store',
      regionCountry: 'Germany, Europe',
      storeFootprint: '11,200+',
      selfScanningStatus: 'Partial Rollout',
      keyContact: 'Anna Schmidt',
      designation: 'Head Loss Prevention',
      emailAddress: 'a.schmidt@lidl.com',
      phoneWhatsApp: '+49-7132-30-0',
      linkedinProfile: 'linkedin.com/in/annaschmidt',
      websiteURL: 'www.lidl.com',
      primaryMotivation: 'Speed, Labor reduction',
      upcomingTriggers: 'Store refurb, Labor constraints',
      shrinkRiskSensitivity: 'High'
    },
    {
      sNo: 8,
      customerName: 'Costco',
      parentGroup: 'Costco Wholesale',
      retailFormat: 'Warehouse Club',
      regionCountry: 'USA, Global',
      storeFootprint: '850+',
      selfScanningStatus: 'Pilot',
      keyContact: 'David Lee',
      designation: 'VP Store Operations',
      emailAddress: 'd.lee@costco.com',
      phoneWhatsApp: '+1-425-313-8100',
      linkedinProfile: 'linkedin.com/in/davidlee',
      websiteURL: 'www.costco.com',
      primaryMotivation: 'Loyalty data, Speed',
      upcomingTriggers: 'New stores, Digital program',
      shrinkRiskSensitivity: 'Low'
    },
    {
      sNo: 9,
      customerName: 'Sainsbury\'s',
      parentGroup: 'J Sainsbury plc',
      retailFormat: 'Supermarket',
      regionCountry: 'UK',
      storeFootprint: '1,400+',
      selfScanningStatus: 'Full Rollout',
      keyContact: 'James Wilson',
      designation: 'CTO',
      emailAddress: 'j.wilson@sainsburys.co.uk',
      phoneWhatsApp: '+44-20-7695-6000',
      linkedinProfile: 'linkedin.com/in/jameswilson',
      websiteURL: 'www.sainsburys.co.uk',
      primaryMotivation: 'Contactless, Speed',
      upcomingTriggers: 'Cashless push, Analytics',
      shrinkRiskSensitivity: 'Medium'
    },
    {
      sNo: 10,
      customerName: 'Ahold Delhaize',
      parentGroup: 'Ahold Delhaize Group',
      retailFormat: 'Supermarket',
      regionCountry: 'Netherlands, USA',
      storeFootprint: '7,400+',
      selfScanningStatus: 'Partial Rollout',
      keyContact: 'Maria van Berg',
      designation: 'Head Procurement',
      emailAddress: 'm.vanberg@aholddelhaize.com',
      phoneWhatsApp: '+31-88-659-5100',
      linkedinProfile: 'linkedin.com/in/mariavanberg',
      websiteURL: 'www.aholddelhaize.com',
      primaryMotivation: 'Labor reduction, Loyalty data',
      upcomingTriggers: 'Store refurb, Digital program',
      shrinkRiskSensitivity: 'Medium'
    },
    {
      sNo: 11,
      customerName: 'Whole Foods',
      parentGroup: 'Amazon',
      retailFormat: 'Specialty',
      regionCountry: 'USA, Canada',
      storeFootprint: '500+',
      selfScanningStatus: 'Full Rollout',
      keyContact: 'Robert Taylor',
      designation: 'VP Digital Innovation',
      emailAddress: 'r.taylor@wholefoods.com',
      phoneWhatsApp: '+1-512-477-4455',
      linkedinProfile: 'linkedin.com/in/roberttaylor',
      websiteURL: 'www.wholefoodsmarket.com',
      primaryMotivation: 'Contactless, Basket uplift',
      upcomingTriggers: 'Digital program, New stores',
      shrinkRiskSensitivity: 'Low'
    },
    {
      sNo: 12,
      customerName: 'Albertsons',
      parentGroup: 'Albertsons Companies',
      retailFormat: 'Supermarket',
      regionCountry: 'USA',
      storeFootprint: '2,200+',
      selfScanningStatus: 'Pilot',
      keyContact: 'Jennifer Martinez',
      designation: 'CFO',
      emailAddress: 'j.martinez@albertsons.com',
      phoneWhatsApp: '+1-208-395-6200',
      linkedinProfile: 'linkedin.com/in/jennifermartinez',
      websiteURL: 'www.albertsons.com',
      primaryMotivation: 'Speed, Labor reduction',
      upcomingTriggers: 'Pilot phased, Labor constraints',
      shrinkRiskSensitivity: 'High'
    },
    {
      sNo: 13,
      customerName: 'Rewe Group',
      parentGroup: 'REWE Group',
      retailFormat: 'Supermarket',
      regionCountry: 'Germany, Europe',
      storeFootprint: '15,000+',
      selfScanningStatus: 'Partial Rollout',
      keyContact: 'Thomas Weber',
      designation: 'Head Store Ops',
      emailAddress: 't.weber@rewe.de',
      phoneWhatsApp: '+49-221-149-0',
      linkedinProfile: 'linkedin.com/in/thomasweber',
      websiteURL: 'www.rewe-group.com',
      primaryMotivation: 'Loyalty data, Speed',
      upcomingTriggers: 'Store refurb, Digital program',
      shrinkRiskSensitivity: 'Medium'
    },
    {
      sNo: 14,
      customerName: 'Morrisons',
      parentGroup: 'Wm Morrison Supermarkets',
      retailFormat: 'Supermarket',
      regionCountry: 'UK',
      storeFootprint: '500+',
      selfScanningStatus: 'Full Rollout',
      keyContact: 'Oliver Brown',
      designation: 'Head IT-Digital',
      emailAddress: 'o.brown@morrisons.com',
      phoneWhatsApp: '+44-845-611-6111',
      linkedinProfile: 'linkedin.com/in/oliverbrown',
      websiteURL: 'www.morrisons.com',
      primaryMotivation: 'Contactless, Speed',
      upcomingTriggers: 'Cashless push, Analytics',
      shrinkRiskSensitivity: 'Medium'
    },
    {
      sNo: 15,
      customerName: 'Publix',
      parentGroup: 'Publix Super Markets',
      retailFormat: 'Supermarket',
      regionCountry: 'USA (Southeast)',
      storeFootprint: '1,300+',
      selfScanningStatus: 'None',
      keyContact: 'Amanda Davis',
      designation: 'VP Innovation',
      emailAddress: 'a.davis@publix.com',
      phoneWhatsApp: '+1-863-688-1188',
      linkedinProfile: 'linkedin.com/in/amandadavis',
      websiteURL: 'www.publix.com',
      primaryMotivation: 'Labor reduction, Speed',
      upcomingTriggers: 'Pilot phased, New stores',
      shrinkRiskSensitivity: 'Low'
    },
    {
      sNo: 16,
      customerName: 'Auchan',
      parentGroup: 'Auchan Holding',
      retailFormat: 'Hypermarket',
      regionCountry: 'France, Global',
      storeFootprint: '3,700+',
      selfScanningStatus: 'Partial Rollout',
      keyContact: 'Sophie Laurent',
      designation: 'CEO',
      emailAddress: 's.laurent@auchan.com',
      phoneWhatsApp: '+33-3-2037-2323',
      linkedinProfile: 'linkedin.com/in/sophielaurent',
      websiteURL: 'www.auchan.com',
      primaryMotivation: 'Basket uplift, Loyalty data',
      upcomingTriggers: 'Digital program, Store refurb',
      shrinkRiskSensitivity: 'High'
    },
    {
      sNo: 17,
      customerName: 'Edeka',
      parentGroup: 'Edeka Group',
      retailFormat: 'Supermarket',
      regionCountry: 'Germany',
      storeFootprint: '11,000+',
      selfScanningStatus: 'Pilot',
      keyContact: 'Klaus Fischer',
      designation: 'Head Loss Prevention',
      emailAddress: 'k.fischer@edeka.de',
      phoneWhatsApp: '+49-40-6377-0',
      linkedinProfile: 'linkedin.com/in/klausfischer',
      websiteURL: 'www.edeka.de',
      primaryMotivation: 'Speed, Labor reduction',
      upcomingTriggers: 'Labor constraints, New stores',
      shrinkRiskSensitivity: 'Medium'
    },
    {
      sNo: 18,
      customerName: 'Coles',
      parentGroup: 'Coles Group',
      retailFormat: 'Supermarket',
      regionCountry: 'Australia',
      storeFootprint: '800+',
      selfScanningStatus: 'Full Rollout',
      keyContact: 'Emma Thompson',
      designation: 'CIO',
      emailAddress: 'e.thompson@coles.com.au',
      phoneWhatsApp: '+61-3-9829-5111',
      linkedinProfile: 'linkedin.com/in/emmathompson',
      websiteURL: 'www.coles.com.au',
      primaryMotivation: 'Contactless, Speed',
      upcomingTriggers: 'Cashless push, Digital program',
      shrinkRiskSensitivity: 'High'
    }
  ]

  // Proposition 2 data with Purchasing Behaviour
  const proposition2Data: CustomerData[] = proposition1Data.map((item, index) => ({
    ...item,
    decisionMakers: ['CIO, Head Store Ops', 'CTO, CFO', 'CEO, Digital Lead', 'VP IT, Procurement', 'Head Digital, LP', 'CIO, CEO', 'Head LP, Store Ops', 'VP Store Ops, CFO', 'CTO, Procurement', 'Head Procurement, CIO', 'VP Digital, CEO', 'CFO, Head Store Ops', 'Head Store Ops, CIO', 'Head IT-Digital, CFO', 'VP Innovation, CEO', 'CEO, CTO', 'Head LP, Digital', 'CIO, Head Store Ops'][index],
    procurementModel: ['Direct buy', 'Lease', 'SaaS', 'Managed service', 'via POS integrator', 'Direct buy', 'Lease', 'SaaS', 'Managed service', 'via POS integrator', 'Direct buy', 'Lease', 'SaaS', 'Managed service', 'via POS integrator', 'Direct buy', 'Lease', 'SaaS'][index],
    budgetApproach: ['Capex/Premium', 'Opex/Mid', 'Hybrid/Entry', 'Capex/Mid', 'Opex/Premium', 'Hybrid/Mid', 'Capex/Entry', 'Opex/Mid', 'Hybrid/Premium', 'Capex/Mid', 'Opex/Premium', 'Hybrid/Entry', 'Capex/Mid', 'Opex/Premium', 'Hybrid/Mid', 'Capex/Premium', 'Opex/Entry', 'Hybrid/Mid'][index]
  }))
  
  // Proposition 3 data with Solution Requirements and CMI Insights
  const proposition3Data: CustomerData[] = proposition1Data.map((item, index) => ({
    ...item,
    decisionMakers: ['CIO, Head Store Ops', 'CTO, CFO', 'CEO, Digital Lead', 'VP IT, Procurement', 'Head Digital, LP', 'CIO, CEO', 'Head LP, Store Ops', 'VP Store Ops, CFO', 'CTO, Procurement', 'Head Procurement, CIO', 'VP Digital, CEO', 'CFO, Head Store Ops', 'Head Store Ops, CIO', 'Head IT-Digital, CFO', 'VP Innovation, CEO', 'CEO, CTO', 'Head LP, Digital', 'CIO, Head Store Ops'][index],
    procurementModel: ['Direct buy', 'Lease', 'SaaS', 'Managed service', 'via POS integrator', 'Direct buy', 'Lease', 'SaaS', 'Managed service', 'via POS integrator', 'Direct buy', 'Lease', 'SaaS', 'Managed service', 'via POS integrator', 'Direct buy', 'Lease', 'SaaS'][index],
    budgetApproach: ['Capex/Premium', 'Opex/Mid', 'Hybrid/Entry', 'Capex/Mid', 'Opex/Premium', 'Hybrid/Mid', 'Capex/Entry', 'Opex/Mid', 'Hybrid/Premium', 'Capex/Mid', 'Opex/Premium', 'Hybrid/Entry', 'Capex/Mid', 'Opex/Premium', 'Hybrid/Mid', 'Capex/Premium', 'Opex/Entry', 'Hybrid/Mid'][index],
    preferredSolutionType: ['Fixed kiosk', 'Smartphone', 'Mobile: smart-cart', 'Fixed kiosk', 'Smartphone', 'Mobile: dedicated', 'Fixed kiosk', 'Smartphone', 'Mobile: smart-cart', 'Fixed kiosk', 'Smartphone', 'Mobile: dedicated', 'Fixed kiosk', 'Smartphone', 'Mobile: smart-cart', 'Fixed kiosk', 'Smartphone', 'Mobile: dedicated'][index],
    preferredModelType: ['Cashless', 'Both', 'Cash', 'Cashless', 'Both', 'Cash', 'Cashless', 'Both', 'Cash', 'Cashless', 'Both', 'Cash', 'Cashless', 'Both', 'Cash', 'Cashless', 'Both', 'Cash'][index],
    preferredTechnology: ['Barcode', 'RFID', 'CV-AI', 'NFC', 'Mix', 'Barcode', 'RFID', 'CV-AI', 'NFC', 'Mix', 'Barcode', 'RFID', 'CV-AI', 'NFC', 'Mix', 'Barcode', 'RFID', 'CV-AI'][index],
    integrationRequirements: ['POS/ERP', 'Logging/app', 'Existing vendors', 'POS/ERP', 'Logging/app', 'Existing vendors', 'POS/ERP', 'Logging/app', 'Existing vendors', 'POS/ERP', 'Logging/app', 'Existing vendors', 'POS/ERP', 'Logging/app', 'Existing vendors', 'POS/ERP', 'Logging/app', 'Existing vendors'][index],
    deploymentIntensity: ['Chainwide 1-3 yrs', 'Pilot phased 6-12 mo', 'Chainwide 1-3 yrs', 'Pilot phased 6-12 mo', 'Chainwide 1-3 yrs', 'Pilot phased 6-12 mo', 'Chainwide 1-3 yrs', 'Pilot phased 6-12 mo', 'Chainwide 1-3 yrs', 'Pilot phased 6-12 mo', 'Chainwide 1-3 yrs', 'Pilot phased 6-12 mo', 'Chainwide 1-3 yrs', 'Pilot phased 6-12 mo', 'Chainwide 1-3 yrs', 'Pilot phased 6-12 mo', 'Chainwide 1-3 yrs', 'Pilot phased 6-12 mo'][index],
    serviceExpectations: ['Install, maintenance', 'Analytics, training', 'LP/shrink features', 'Install, maintenance', 'Analytics, training', 'LP/shrink features', 'Install, maintenance', 'Analytics, training', 'LP/shrink features', 'Install, maintenance', 'Analytics, training', 'LP/shrink features', 'Install, maintenance', 'Analytics, training', 'LP/shrink features', 'Install, maintenance', 'Analytics, training', 'LP/shrink features'][index],
    otherConstraints: ['Data privacy', 'Labor rules', 'Accessibility', 'Space constraints', 'Local regulations', 'Data privacy', 'Labor rules', 'Accessibility', 'Space constraints', 'Local regulations', 'Data privacy', 'Labor rules', 'Accessibility', 'Space constraints', 'Local regulations', 'Data privacy', 'Labor rules', 'Accessibility'][index],
    customerBenchmarking: ['Top-tier national', 'Mid-tier regional', 'Emerging player', 'Top-tier national', 'Mid-tier regional', 'Emerging player', 'Top-tier national', 'Mid-tier regional', 'Emerging player', 'Top-tier national', 'Mid-tier regional', 'Emerging player', 'Top-tier national', 'Mid-tier regional', 'Emerging player', 'Top-tier national', 'Mid-tier regional', 'Emerging player'][index],
    additionalComments: ['Strong digital focus', 'Cost-sensitive', 'Innovation leader', 'Expanding rapidly', 'Mature market', 'Growth potential', 'Tech-forward', 'Traditional approach', 'Pilot testing', 'Strategic partner', 'High volume', 'Quality focused', 'Regional leader', 'Market challenger', 'Niche player', 'Global presence', 'Local champion', 'Fast adopter'][index]
  }))

  const getCurrentData = () => {
    if (activeProposition === 'proposition2') {
      return proposition2Data
    }
    if (activeProposition === 'proposition3') {
      return proposition3Data
    }
    return proposition1Data
  }

  const exportToCSV = () => {
    const data = getCurrentData()
    const headers = ['S.No.', 'Customer / Retailer Name', 'Parent Group / Brand', 'Retail Format', 
                     'Region / Country Presence', 'Store Footprint', 'Current Self-Scanning Status',
                     'Key Contact Person', 'Designation / Function', 'Email Address', 
                     'Phone / WhatsApp Number', 'LinkedIn Profile', 'Website URL',
                     'Primary Motivation for Self-Scanning', 'Upcoming Triggers / Initiatives',
                     'Shrink / Fraud Risk Sensitivity']
    
    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        [row.sNo, row.customerName, row.parentGroup, row.retailFormat, row.regionCountry,
         row.storeFootprint, row.selfScanningStatus, row.keyContact, row.designation,
         row.emailAddress, row.phoneWhatsApp, row.linkedinProfile, row.websiteURL,
         row.primaryMotivation, row.upcomingTriggers, row.shrinkRiskSensitivity]
          .map(val => `"${String(val).replace(/"/g, '""')}"`)
          .join(',')
      )
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `customer_intelligence_${activeProposition}.csv`
    link.click()
  }

  return (
    <div className="space-y-8 pb-8">
      {/* Header Section */}
      <div className="flex justify-end items-start mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={exportToCSV}
          className="flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md"
        >
          <Download size={20} />
          Export CSV
        </motion.button>
      </div>

      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-3">
          GLOBAL RETAIL SELF SCANNING SOLUTION MARKET DATABASE
        </h1>
        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
          Comprehensive intelligence on global retail self-scanning solution market
        </p>
      </motion.div>

      {/* Proposition Tabs */}
      <div className={`p-6 rounded-2xl mb-8 shadow-xl ${isDark ? 'bg-navy-card border-2 border-navy-light' : 'bg-white border-2 border-gray-300'}`}>
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveProposition('proposition1')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeProposition === 'proposition1'
                ? 'bg-electric-blue text-white shadow-lg'
                : isDark
                ? 'bg-navy-dark text-text-secondary-dark hover:bg-navy-light'
                : 'bg-gray-100 text-text-secondary-light hover:bg-gray-200'
            }`}
          >
            Proposition 1
          </button>
          <button
            onClick={() => setActiveProposition('proposition2')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeProposition === 'proposition2'
                ? 'bg-electric-blue text-white shadow-lg'
                : isDark
                ? 'bg-navy-dark text-text-secondary-dark hover:bg-navy-light'
                : 'bg-gray-100 text-text-secondary-light hover:bg-gray-200'
            }`}
          >
            Proposition 2
          </button>
          <button
            onClick={() => setActiveProposition('proposition3')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeProposition === 'proposition3'
                ? 'bg-electric-blue text-white shadow-lg'
                : isDark
                ? 'bg-navy-dark text-text-secondary-dark hover:bg-navy-light'
                : 'bg-gray-100 text-text-secondary-light hover:bg-gray-200'
            }`}
          >
            Proposition 3
          </button>
        </div>
      </div>

      {/* Customer Table */}
      <div className={`p-8 rounded-2xl shadow-xl ${isDark ? 'bg-navy-card border-2 border-navy-light' : 'bg-white border-2 border-gray-300'}`}>
        {/* Top Scrollbar */}
        <div 
          ref={topScrollRef}
          className="overflow-x-auto mb-2"
          onScroll={(e) => {
            if (tableScrollRef.current) {
              tableScrollRef.current.scrollLeft = e.currentTarget.scrollLeft
            }
          }}
        >
          <div style={{ height: '1px' }}></div>
        </div>
        
        <div 
          ref={tableScrollRef}
          className="overflow-x-auto"
          onScroll={(e) => {
            if (topScrollRef.current) {
              topScrollRef.current.scrollLeft = e.currentTarget.scrollLeft
            }
          }}
        >
          <table className="w-full border-collapse text-sm min-w-max">
            <thead>
              <tr className={`border-b-2 ${isDark ? 'border-navy-light' : 'border-gray-300'}`}>
                <th colSpan={7} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-purple-200 text-gray-900' : 'bg-purple-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Customer Information
                </th>
                <th colSpan={6} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-cyan-200 text-gray-900' : 'bg-cyan-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Contact Details
                </th>
                <th colSpan={3} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-pink-200 text-gray-900' : 'bg-pink-100 text-gray-900'} ${(activeProposition === 'proposition2' || activeProposition === 'proposition3') ? 'border-r' : ''} ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Personal/ Professional Branding Drivers
                </th>
                {(activeProposition === 'proposition2' || activeProposition === 'proposition3') && (
                  <th colSpan={3} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-orange-200 text-gray-900' : 'bg-orange-100 text-gray-900'} ${activeProposition === 'proposition3' ? 'border-r' : ''} ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Purchasing Behaviour
                  </th>
                )}
                {activeProposition === 'proposition3' && (
                  <>
                    <th colSpan={7} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-yellow-200 text-gray-900' : 'bg-yellow-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      Solution Requirements
                    </th>
                    <th colSpan={2} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-blue-200 text-gray-900' : 'bg-blue-100 text-gray-900'}`}>
                      CMI Insights
                    </th>
                  </>
                )}
              </tr>
              <tr className={`border-b-2 ${isDark ? 'border-navy-light' : 'border-gray-300'}`}>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  S.No.
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Customer / Retailer Name
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Parent Group / Brand
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  <div>Retail Format</div>
                  <div className="text-xs">(Supermarket/Convenience/</div>
                  <div className="text-xs">Specialty/Dept Store/Pharmacy)</div>
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  <div>Region / Country</div>
                  <div>Presence</div>
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  <div>Store Footprint</div>
                  <div className="text-xs">(No. of stores)</div>
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  <div>Current Self-Scanning</div>
                  <div>Status</div>
                  <div className="text-xs">(None / Pilot / Partial</div>
                  <div className="text-xs">Rollout / Full Rollout)</div>
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Key Contact Person
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  <div>Designation / Function</div>
                  <div className="text-xs">(Store Ops / IT-Digital /</div>
                  <div className="text-xs">Innovation / Loss Prevention /</div>
                  <div className="text-xs">Procurement / Finance)</div>
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Email Address
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Phone/ WhatsApp Number
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  LinkedIn Profile
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  Website URL
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  <div>Primary Motivation for</div>
                  <div>Self-Scanning</div>
                  <div className="text-xs">(speed, labor reduction,</div>
                  <div className="text-xs">loyalty data, contactless,</div>
                  <div className="text-xs">basket uplift)</div>
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  <div>Upcoming Triggers /</div>
                  <div>Initiatives</div>
                  <div className="text-xs">(new stores, refurb, digital</div>
                  <div className="text-xs">program, cashless push,</div>
                  <div className="text-xs">labor constraints)</div>
                </th>
                <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'} ${(activeProposition === 'proposition2' || activeProposition === 'proposition3') ? 'border-r' : ''} ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                  <div>Shrink / Fraud Risk</div>
                  <div>Sensitivity</div>
                  <div className="text-xs">(High/Med/Low)</div>
                </th>
                {(activeProposition === 'proposition2' || activeProposition === 'proposition3') && (
                  <>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Decision Makers</div>
                      <div className="text-xs">(CIO/CTO, Head Store Ops,</div>
                      <div className="text-xs">Digital, LP, Procurement,</div>
                      <div className="text-xs">CFO, CEO)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Procurement Model</div>
                      <div className="text-xs">(Direct buy / Lease / SaaS /</div>
                      <div className="text-xs">Managed service /</div>
                      <div className="text-xs">via POS integrator)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} ${activeProposition === 'proposition3' ? 'border-r' : ''} ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Budget Approach / Tier</div>
                      <div className="text-xs">(Capex/Opex/Hybrid;</div>
                      <div className="text-xs">Entry/Mid/Premium)</div>
                    </th>
                  </>
                )}
                {activeProposition === 'proposition3' && (
                  <>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Preferred Solution Type</div>
                      <div className="text-xs">(Fixed kiosk;</div>
                      <div className="text-xs">Smartphone/presentation;</div>
                      <div className="text-xs">Mobile: dedicated/</div>
                      <div className="text-xs">smartphone/smart-cart)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Preferred Model Type</div>
                      <div className="text-xs">(Cash / Cashless / Both)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Preferred Technology</div>
                      <div className="text-xs">(Barcode / RFID /</div>
                      <div className="text-xs">CV-AI / NFC / Mix)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Integration Requirements</div>
                      <div className="text-xs">(POS/ERP/logging/app;</div>
                      <div className="text-xs">existing vendors)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Deployment Intensity /</div>
                      <div>Timeline</div>
                      <div className="text-xs">(Pilot phased 6-12 mo /</div>
                      <div className="text-xs">chainwide 1-3 yrs)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Service Expectations</div>
                      <div className="text-xs">(install, maintenance,</div>
                      <div className="text-xs">analytics, training,</div>
                      <div className="text-xs">LP/shrink features)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Other Constraints</div>
                      <div className="text-xs">(data privacy, onboarding,</div>
                      <div className="text-xs">vs. labor rules,</div>
                      <div className="text-xs">accessibility, space, local)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-blue-100 text-gray-900' : 'bg-blue-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                      <div>Customer Benchmarking</div>
                      <div>Summary</div>
                      <div className="text-xs">(Potential Customers/</div>
                      <div className="text-xs">Peer Group)</div>
                    </th>
                    <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-blue-100 text-gray-900' : 'bg-blue-50 text-gray-900'}`}>
                      <div>Additional Comments/</div>
                      <div>Notes by CMI Team</div>
                    </th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {getCurrentData().map((row, index) => (
                <tr 
                  key={index}
                  className={`border-b ${isDark ? 'border-navy-light hover:bg-navy-dark' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}
                >
                  <td className={`px-3 py-3 text-center text-text-primary-light dark:text-text-primary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.sNo}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.customerName}
                  </td>
                  <td className={`px-3 py-3 text-center text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.parentGroup}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.retailFormat}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.regionCountry}
                  </td>
                  <td className={`px-3 py-3 text-center text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.storeFootprint}
                  </td>
                  <td className={`px-3 py-3 text-center text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.selfScanningStatus}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.keyContact}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.designation}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.emailAddress !== 'xx' ? (
                      <a href={`mailto:${row.emailAddress}`} className="text-electric-blue hover:underline">
                        {row.emailAddress}
                      </a>
                    ) : row.emailAddress}
                  </td>
                  <td className={`px-3 py-3 text-center text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.phoneWhatsApp}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.linkedinProfile !== 'xx' ? (
                      <a href={`https://${row.linkedinProfile}`} target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline text-xs">
                        {row.linkedinProfile}
                      </a>
                    ) : row.linkedinProfile}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.websiteURL !== 'xx' ? (
                      <a href={`https://${row.websiteURL}`} target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline text-xs">
                        {row.websiteURL}
                      </a>
                    ) : row.websiteURL}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.primaryMotivation}
                  </td>
                  <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.upcomingTriggers}
                  </td>
                  <td className={`px-3 py-3 text-center text-text-secondary-light dark:text-text-secondary-dark ${(activeProposition === 'proposition2' || activeProposition === 'proposition3') ? 'border-r' : ''} ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    {row.shrinkRiskSensitivity}
                  </td>
                  {(activeProposition === 'proposition2' || activeProposition === 'proposition3') && (
                    <>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.decisionMakers || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.procurementModel || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-center text-text-secondary-light dark:text-text-secondary-dark ${activeProposition === 'proposition3' ? 'border-r' : ''} ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.budgetApproach || 'xx'}
                      </td>
                    </>
                  )}
                  {activeProposition === 'proposition3' && (
                    <>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.preferredSolutionType || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.preferredModelType || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.preferredTechnology || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.integrationRequirements || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.deploymentIntensity || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.serviceExpectations || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.otherConstraints || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        {row.customerBenchmarking || 'xx'}
                      </td>
                      <td className={`px-3 py-3 text-text-secondary-light dark:text-text-secondary-dark`}>
                        {row.additionalComments || 'xx'}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
