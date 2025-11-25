interface ShovelMarketData {
  recordId: number
  year: number
  region: string
  country: string
  segment: string
  // Hierarchical fields for By Component
  componentType?: string // Hardware, Software, Services
  componentCategory?: string // e.g., Kiosk Scanner Devices, Handheld Self-scanning Devices
  componentSubCategory?: string // e.g., Single-plane Kiosk Scanners
  // Hierarchical fields for Cross - By Product Type and Technology (3 levels)
  crossLevel1?: string // e.g., Fixed-Position Self-Scanning Kiosks, Mobile Self-Scanning Solutions
  crossLevel2?: string // e.g., Barcode-Based Fixed Kiosks, RFID-Based Fixed Kiosks
  crossLevel3?: string // e.g., Single-Plane Self-Scanning Kiosks, Multi-Plane Self-Scanning Kiosks
  // Hierarchical fields for Cross - By Product Type, by Retail Format (3 levels)
  crossRetailLevel1?: string // e.g., Fixed-Position Self-Scanning Kiosks
  crossRetailLevel2?: string // e.g., Single-Plane Self-Scanning Kiosks
  crossRetailLevel3?: string // e.g., Supermarkets & Hypermarkets
  // Hierarchical fields for By Product Type
  solutionType?: string
  // Hierarchical fields for By Technology
  technologyType?: string
  // Hierarchical fields for By Retail Format
  retailFormat?: string
  // Hierarchical fields for By Model Type
  modelType?: string
  // Original fields (keeping for backward compatibility)
  productType: string
  bladeMaterial: string
  handleLength: string
  application: string
  endUser: string
  distributionChannelType: string
  distributionChannel: string
  brand: string
  company: string
  price: number
  volumeUnits: number
  qty: number
  revenue: number
  marketValueUsd: number
  value: number
  marketSharePct: number
  cagr: number
  yoyGrowth: number
}

const generateComprehensiveData = (): ShovelMarketData[] => {
  const years = Array.from({ length: 15 }, (_, i) => 2021 + i)
  const regions = ["North America", "Europe", "Asia Pacific", "Middle East & Africa", "Latin America", "ASEAN"]

  const segments = [
    "By Component",
    "By Product Type",
    "Cross - By Product Type and Technology",
    "By Technology",
    "By Retail Format",
    "By Model Type",
    "Cross - By Product Type and By Retail Format"
  ]

  const productTypes = ["Digging Shovel", "Snow Shovel", "Trenching Shovel", "Scoop Shovel", "Others"]
  const bladeMaterials = ["Carbon Steel", "Stainless Steel", "Aluminum", "Polycarbonate", "Others"]
  const handleLengths = ["Short Handle", "Medium Handle", "Long Handle", "Adjustable Handle"]
  const applications = [
    "Construction & Infrastructure",
    "Agriculture & Landscaping",
    "Mining & Quarrying",
    "Forestry",
    "Household & Gardening",
    "Snow Removal",
    "Utility & Road Maintenance"
  ]
  const endUsers = ["Commercial/Industrial Users", "Residential Users"]
  
  const distributionChannelTypes = ["Offline", "Online"]
  const offlineChannels = ["Hardware Stores", "Specialty Garden Centers", "Agricultural Supply Stores"]
  const onlineChannels = ["Ecommerce Website", "Brand's/Company's Own Website"]
  
  const brands = [
    "Fiskars", "Bully Tools", "Razor-Back", "Truper", "Ames", 
    "Spear & Jackson", "Radius Garden", "Seymour", "Union Tools", "Garant"
  ]
  
  const companies = [
    "Fiskars Corporation", "Bully Tools Inc", "Razor-Back Tools", "Truper Herramientas",
    "Ames True Temper", "Spear & Jackson", "Radius Garden", "Seymour Manufacturing",
    "Union Tools", "Garant GP"
  ]
  
  const countryMap: Record<string, string[]> = {
    "North America": ["U.S.", "Canada"],
    "Europe": ["U.K.", "Germany", "Italy", "France", "Spain", "Russia", "Netherlands", "Ireland", "Sweden", "Poland", "Hungary", "Slovakia", "Turkey", "Rest of Europe"],
    "Asia Pacific": ["China", "India", "Japan", "South Korea", "ASEAN", "Vietnam", "Singapore", "Thailand", "Indonesia", "Rest of ASEAN", "Australia", "Rest of Asia Pacific"],
    "Latin America": ["Brazil", "Argentina", "Mexico", "Rest of Latin America"],
    "Middle East & Africa": ["GCC", "South Africa", "Rest of Middle East"],
    "ASEAN": ["Vietnam", "Singapore", "Thailand", "Indonesia", "Rest of ASEAN"]
  }

  // Hierarchical data for By Component
  const componentHierarchy = {
    "Hardware": [
      {
        category: "Kiosk Scanner Devices",
        subCategories: ["Single-plane Kiosk Scanners", "Multi-plane (Bioptic) Kiosk Scanners"]
      },
      {
        category: "Handheld Self-scanning Devices",
        subCategories: ["Dedicated Handheld Self-scanning Devices", "Retailer-owned Smartphones / Smart Devices", "Smart-cart Units"]
      },
      {
        category: "Others (kiosk Terminals, Embedded Scan Modules, Payment Units, Scales, Network & Accessories)",
        subCategories: []
      }
    ],
    "Software": [
      {
        category: "Scanning & Decoding software",
        subCategories: []
      },
      {
        category: "Computer Vision Software",
        subCategories: []
      },
      {
        category: "POS & Payment Integration Software",
        subCategories: []
      },
      {
        category: "Store Operations & Workflow Software",
        subCategories: []
      },
      {
        category: "Others (Analytics & Dashboard Software, etc.)",
        subCategories: []
      }
    ],
    "Services": [
      {
        category: "Managed Services",
        subCategories: []
      },
      {
        category: "Professional Services",
        subCategories: []
      }
    ]
  }

  // 3-level hierarchy for Cross - By Product Type and Technology
  const crossProductTechnologyHierarchy = {
    "Fixed-Position Self-Scanning Kiosks": [
      {
        level2: "Barcode-Based Fixed Kiosks",
        level3Options: ["Single-Plane Self-Scanning Kiosks", "Multi-Plane Self-Scanning Kiosks", "Presentation Self-Scanning Kiosks"]
      },
      {
        level2: "RFID-Based Fixed Kiosks",
        level3Options: []
      },
      {
        level2: "Computer Vision / AI-Based Fixed Kiosks",
        level3Options: []
      }
    ],
    "Mobile Self-Scanning Solutions": [
      {
        level2: "Barcode-Based Mobile Self-Scanning",
        level3Options: ["Dedicated Mobile Self-Scanning Devices", "Smartphone-Based Self-Scanning", "Smart-Cart Barcode Self-Scanning"]
      },
      {
        level2: "RFID-Based Mobile Self-Scanning Solutions",
        level3Options: []
      },
      {
        level2: "Computer Vision / AI Smart-Cart Self-Scanning",
        level3Options: []
      }
    ]
  }

  // 3-level hierarchy for Cross - By Product Type, by Retail Format
  const crossRetailFormatHierarchy = {
    "Fixed-Position Self-Scanning Kiosks": [
      {
        level2: "Single-Plane Self-Scanning Kiosks",
        level3Options: ["Supermarkets & Hypermarkets", "Convenience Stores", "Specialty and Discount Stores", "Department Stores", "Warehouse Clubs", "Pharmacies & Drugstores"]
      },
      {
        level2: "Multi-Plane Self-Scanning Kiosks",
        level3Options: ["Supermarkets & Hypermarkets", "Convenience Stores", "Specialty and Discount Stores", "Department Stores", "Warehouse Clubs", "Pharmacies & Drugstores"]
      },
      {
        level2: "Presentation Self-Scanning Kiosks",
        level3Options: ["Supermarkets & Hypermarkets", "Convenience Stores", "Specialty and Discount Stores", "Department Stores", "Warehouse Clubs", "Pharmacies & Drugstores"]
      }
    ],
    "Mobile Self-Scanning Solutions": [
      {
        level2: "Dedicated Mobile Self-Scanning Devices",
        level3Options: ["Supermarkets & Hypermarkets", "Convenience Stores", "Specialty and Discount Stores", "Department Stores", "Warehouse Clubs", "Pharmacies & Drugstores"]
      },
      {
        level2: "Smartphone-Based Self-Scanning",
        level3Options: ["Supermarkets & Hypermarkets", "Convenience Stores", "Specialty and Discount Stores", "Department Stores", "Warehouse Clubs", "Pharmacies & Drugstores"]
      },
      {
        level2: "Smart-Cart-Based Self-Scanning",
        level3Options: ["Supermarkets & Hypermarkets", "Convenience Stores", "Specialty and Discount Stores", "Department Stores", "Warehouse Clubs", "Pharmacies & Drugstores"]
      }
    ]
  }

  // Solution types for By Product Type
  const solutionTypes = [
    "Fixed-Position Self-Scanning Kiosks",
    "Single-Plane Self-Scanning Kiosks",
    "Multi-Plane Self-Scanning Kiosks",
    "Presentation Self-Scanning Kiosks",
    "Mobile Self-Scanning Solutions",
    "Dedicated Mobile Self-Scanning Devices",
    "Smartphone-Based Self-Scanning",
    "Smart-Cart-Based Self-Scanning"
  ]

  // Technology types for By Technology
  const technologyTypes = [
    "Barcode Scanning (1D/2D)",
    "RFID-Based Scanning",
    "Computer Vision and AI Scanning"
  ]

  // Retail formats for By Retail Format
  const retailFormats = [
    "Supermarkets & Hypermarkets",
    "Convenience Stores",
    "Specialty and Discount Stores",
    "Department Stores",
    "Warehouse Clubs",
    "Pharmacies & Drugstores"
  ]

  // Model types for By Model Type
  const modelTypes = [
    "Cash Model",
    "Cashless Model"
  ]

  // Product type multipliers for variation
  const productTypeMultipliers: Record<string, { price: number; volume: number; cagr: number }> = {
    'Digging Shovel': { price: 1.0, volume: 1.2, cagr: 1.1 },
    'Snow Shovel': { price: 0.9, volume: 1.5, cagr: 1.2 },
    'Trenching Shovel': { price: 1.2, volume: 0.8, cagr: 1.0 },
    'Scoop Shovel': { price: 0.8, volume: 1.1, cagr: 0.9 },
    'Others': { price: 1.1, volume: 0.9, cagr: 1.0 }
  }
  
  // Blade material multipliers
  const bladeMaterialMultipliers: Record<string, { price: number; volume: number }> = {
    'Carbon Steel': { price: 0.8, volume: 1.3 },
    'Stainless Steel': { price: 1.3, volume: 1.0 },
    'Aluminum': { price: 1.1, volume: 0.9 },
    'Polycarbonate': { price: 0.9, volume: 1.1 },
    'Others': { price: 1.0, volume: 1.0 }
  }
  
  // Application multipliers
  const applicationMultipliers: Record<string, { volume: number; price: number }> = {
    'Construction & Infrastructure': { volume: 1.4, price: 1.2 },
    'Agriculture & Landscaping': { volume: 1.3, price: 1.0 },
    'Mining & Quarrying': { volume: 0.7, price: 1.4 },
    'Forestry': { volume: 0.8, price: 1.1 },
    'Household & Gardening': { volume: 1.5, price: 0.8 },
    'Snow Removal': { volume: 1.2, price: 0.9 },
    'Utility & Road Maintenance': { volume: 1.0, price: 1.1 }
  }
  
  // End user multipliers
  const endUserMultipliers: Record<string, { volume: number; price: number }> = {
    'Commercial/Industrial Users': { volume: 1.2, price: 1.3 },
    'Residential Users': { volume: 1.5, price: 0.8 }
  }
  
  // Region-specific multipliers
  const regionMultipliers: Record<string, { volume: number; marketShare: number }> = {
    'North America': { volume: 1.5, marketShare: 1.4 },
    'Europe': { volume: 1.3, marketShare: 1.3 },
    'Asia Pacific': { volume: 1.8, marketShare: 1.5 },
    'Latin America': { volume: 1.1, marketShare: 0.9 },
    'Middle East & Africa': { volume: 1.0, marketShare: 0.95 },
    'ASEAN': { volume: 1.6, marketShare: 1.3 }
  }
  
  // Brand-specific multipliers
  const brandPremiumMap: Record<string, number> = {}
  brands.forEach((brand, idx) => {
    brandPremiumMap[brand] = 0.8 + (idx % 3) * 0.4 // Creates 3 tiers: 0.8, 1.2, 1.6
  })

  const data: ShovelMarketData[] = []
  let recordId = 100000
  
  let seed = 42
  const seededRandom = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
  
  for (const year of years) {
    for (const region of regions) {
      const regionMult = regionMultipliers[region]
      const countries = countryMap[region] || []
      
      for (const country of countries) {
        for (const productType of productTypes) {
          const productMult = productTypeMultipliers[productType]
          
          for (const bladeMaterial of bladeMaterials) {
            const bladeMult = bladeMaterialMultipliers[bladeMaterial]
            
            for (const handleLength of handleLengths) {
              // Handle length multiplier
              const handleMult = handleLength === 'Long Handle' ? 1.1 : handleLength === 'Short Handle' ? 0.9 : 1.0
              
              for (const application of applications) {
                const appMult = applicationMultipliers[application]
                
                for (const endUser of endUsers) {
                  const userMult = endUserMultipliers[endUser]
                  
                  // Determine distribution channel type and channel
                  const isOnline = seededRandom() > 0.6 // 40% online, 60% offline
                  const distributionChannelType = isOnline ? 'Online' : 'Offline'
                  const distributionChannel = isOnline
                    ? onlineChannels[Math.floor(seededRandom() * onlineChannels.length)]
                    : offlineChannels[Math.floor(seededRandom() * offlineChannels.length)]
                  
                  const brand = brands[Math.floor(seededRandom() * brands.length)]
                  const brandMult = brandPremiumMap[brand] || 1.0
                  const company = companies[Math.floor(seededRandom() * companies.length)]
                  const segment = segments[Math.floor(seededRandom() * segments.length)]

                  // Assign hierarchical fields based on segment
                  let componentType, componentCategory, componentSubCategory, solutionType, technologyType, retailFormat, modelType
                  let crossLevel1, crossLevel2, crossLevel3
                  let crossRetailLevel1, crossRetailLevel2, crossRetailLevel3

                  if (segment === "By Component") {
                    const types = Object.keys(componentHierarchy)
                    componentType = types[Math.floor(seededRandom() * types.length)]
                    const categories = componentHierarchy[componentType as keyof typeof componentHierarchy]
                    const categoryObj = categories[Math.floor(seededRandom() * categories.length)]
                    componentCategory = categoryObj.category
                    if (categoryObj.subCategories.length > 0) {
                      componentSubCategory = categoryObj.subCategories[Math.floor(seededRandom() * categoryObj.subCategories.length)]
                    }
                  } else if (segment === "Cross - By Product Type and Technology") {
                    const level1Options = Object.keys(crossProductTechnologyHierarchy)
                    crossLevel1 = level1Options[Math.floor(seededRandom() * level1Options.length)]
                    const level2Options = crossProductTechnologyHierarchy[crossLevel1 as keyof typeof crossProductTechnologyHierarchy]
                    const level2Obj = level2Options[Math.floor(seededRandom() * level2Options.length)]
                    crossLevel2 = level2Obj.level2
                    if (level2Obj.level3Options.length > 0) {
                      crossLevel3 = level2Obj.level3Options[Math.floor(seededRandom() * level2Obj.level3Options.length)]
                    }
                  } else if (segment === "Cross - By Product Type and By Retail Format") {
                    const level1Options = Object.keys(crossRetailFormatHierarchy)
                    crossRetailLevel1 = level1Options[Math.floor(seededRandom() * level1Options.length)]
                    const level2Options = crossRetailFormatHierarchy[crossRetailLevel1 as keyof typeof crossRetailFormatHierarchy]
                    const level2Obj = level2Options[Math.floor(seededRandom() * level2Options.length)]
                    crossRetailLevel2 = level2Obj.level2
                    if (level2Obj.level3Options.length > 0) {
                      crossRetailLevel3 = level2Obj.level3Options[Math.floor(seededRandom() * level2Obj.level3Options.length)]
                    }
                  } else if (segment === "By Product Type") {
                    solutionType = solutionTypes[Math.floor(seededRandom() * solutionTypes.length)]
                  } else if (segment === "By Technology") {
                    technologyType = technologyTypes[Math.floor(seededRandom() * technologyTypes.length)]
                  } else if (segment === "By Retail Format") {
                    retailFormat = retailFormats[Math.floor(seededRandom() * retailFormats.length)]
                  } else if (segment === "By Model Type") {
                    modelType = modelTypes[Math.floor(seededRandom() * modelTypes.length)]
                  }

                  // Apply all multipliers for variation
                  const basePrice = 10 + seededRandom() * 90 // $10-$100
                  const price = basePrice * productMult.price * bladeMult.price * brandMult * (1 + (year - 2021) * 0.02)
                  
                  const baseVolume = 100 + seededRandom() * 900 // 100-1000 units
                  const volumeUnits = Math.floor(
                    baseVolume * 
                    regionMult.volume * 
                    productMult.volume * 
                    bladeMult.volume * 
                    appMult.volume * 
                    userMult.volume * 
                    handleMult *
                    (1 + (year - 2021) * 0.05)
                  )
                  
                  const revenue = price * volumeUnits
                  const marketValueUsd = revenue * (0.9 + seededRandom() * 0.2)
                  
                  const baseMarketShare = 1 + seededRandom() * 24
                  const marketSharePct = baseMarketShare * regionMult.marketShare * brandMult
                  
                  const baseCAGR = -2 + seededRandom() * 12
                  const cagr = baseCAGR * productMult.cagr
                  const yoyGrowth = -5 + seededRandom() * 20
                  const qty = Math.floor(volumeUnits * (0.8 + seededRandom() * 0.4))
                  
                  data.push({
                    recordId,
                    year,
                    region,
                    country,
                    segment,
                    componentType,
                    componentCategory,
                    componentSubCategory,
                    crossLevel1,
                    crossLevel2,
                    crossLevel3,
                    crossRetailLevel1,
                    crossRetailLevel2,
                    crossRetailLevel3,
                    solutionType,
                    technologyType,
                    retailFormat,
                    modelType,
                    productType,
                    bladeMaterial,
                    handleLength,
                    application,
                    endUser,
                    distributionChannelType,
                    distributionChannel,
                    brand,
                    company,
                    price: Math.round(price * 100) / 100,
                    volumeUnits,
                    qty,
                    revenue: Math.round(revenue * 100) / 100,
                    marketValueUsd: Math.round(marketValueUsd * 100) / 100,
                    value: Math.round(marketValueUsd * 100) / 100,
                    marketSharePct: Math.round(marketSharePct * 100) / 100,
                    cagr: Math.round(cagr * 100) / 100,
                    yoyGrowth: Math.round(yoyGrowth * 100) / 100,
                  })
                  
                  recordId++
                }
              }
            }
          }
        }
      }
    }
  }
  
  return data
}

let dataCache: ShovelMarketData[] | null = null

export const getData = (): ShovelMarketData[] => {
  if (!dataCache) {
    try {
      dataCache = generateComprehensiveData()
    } catch (error) {
      dataCache = []
    }
  }
  return dataCache
}

// Function to clear cache and regenerate data (for development/testing)
export const clearDataCache = () => {
  dataCache = null
}

export interface FilterOptions {
  year?: number[]
  productType?: string[]
  bladeMaterial?: string[]
  handleLength?: string[]
  application?: string[]
  endUser?: string[]
  distributionChannelType?: string[]
  distributionChannel?: string[]
  region?: string[]
  country?: string[]
  brand?: string[]
  company?: string[]
  [key: string]: any
}

export const filterDataframe = (data: ShovelMarketData[], filters: FilterOptions): ShovelMarketData[] => {
  let filtered = [...data]
  
  for (const [field, values] of Object.entries(filters)) {
    if (values && Array.isArray(values) && values.length > 0) {
      filtered = filtered.filter(item => {
        const itemValue = item[field as keyof ShovelMarketData]
        // Handle number to string conversion for year field
        if (field === 'year' && typeof itemValue === 'number') {
          return values.map(v => String(v)).includes(String(itemValue))
        }
        return values.includes(itemValue as any)
      })
    }
  }
  
  return filtered
}

export const formatNumber = (num: number): string => {
  if (num >= 1_000_000_000) {
    const formatted = (num / 1_000_000_000).toFixed(1)
    return `${parseFloat(formatted).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}B`
  } else if (num >= 1_000_000) {
    const formatted = (num / 1_000_000).toFixed(1)
    return `${parseFloat(formatted).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}M`
  } else if (num >= 1_000) {
    const formatted = (num / 1_000).toFixed(1)
    return `${parseFloat(formatted).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}K`
  }
  return Math.round(num).toLocaleString('en-US')
}

export const formatWithCommas = (num: number, decimals = 1): string => {
  const value = parseFloat(num.toFixed(decimals))
  return value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}

export const addCommas = (num: number | null | undefined): string | number | null | undefined => {
  if (num === null || num === undefined || isNaN(num)) {
    return num
  }
  return Number(num).toLocaleString('en-US', { maximumFractionDigits: 2 })
}

export type { ShovelMarketData }

// Export hierarchy structures for use in UI
export interface ComponentHierarchy {
  [key: string]: Array<{
    category: string
    subCategories: string[]
  }>
}

export const getComponentHierarchy = (): ComponentHierarchy => ({
  "Hardware": [
    {
      category: "Kiosk Scanner Devices",
      subCategories: ["Single-plane Kiosk Scanners", "Multi-plane (Bioptic) Kiosk Scanners"]
    },
    {
      category: "Handheld Self-scanning Devices",
      subCategories: ["Dedicated Handheld Self-scanning Devices", "Retailer-owned Smartphones / Smart Devices", "Smart-cart Units"]
    },
    {
      category: "Others (kiosk Terminals, Embedded Scan Modules, Payment Units, Scales, Network & Accessories)",
      subCategories: []
    }
  ],
  "Software": [
    {
      category: "Scanning & Decoding software",
      subCategories: []
    },
    {
      category: "Computer Vision Software",
      subCategories: []
    },
    {
      category: "POS & Payment Integration Software",
      subCategories: []
    },
    {
      category: "Store Operations & Workflow Software",
      subCategories: []
    },
    {
      category: "Others (Analytics & Dashboard Software, etc.)",
      subCategories: []
    }
  ],
  "Services": [
    {
      category: "Managed Services",
      subCategories: []
    },
    {
      category: "Professional Services",
      subCategories: []
    }
  ]
})

export const getSolutionTypes = (): string[] => [
  "Fixed-Position Self-Scanning Kiosks",
  "Single-Plane Self-Scanning Kiosks",
  "Multi-Plane Self-Scanning Kiosks",
  "Presentation Self-Scanning Kiosks",
  "Mobile Self-Scanning Solutions",
  "Dedicated Mobile Self-Scanning Devices",
  "Smartphone-Based Self-Scanning",
  "Smart-Cart-Based Self-Scanning"
]

export const getTechnologyTypes = (): string[] => [
  "Barcode Scanning (1D/2D)",
  "RFID-Based Scanning",
  "Computer Vision and AI Scanning"
]

export const getRetailFormats = (): string[] => [
  "Supermarkets & Hypermarkets",
  "Convenience Stores",
  "Specialty and Discount Stores",
  "Department Stores",
  "Warehouse Clubs",
  "Pharmacies & Drugstores"
]

export const getModelTypes = (): string[] => [
  "Cash Model",
  "Cashless Model"
]

// 3-level hierarchy interface and export for Cross - By Product Type and Technology
export interface ThreeLevelHierarchyNode {
  level2: string
  level3Options: string[]
}

export interface ThreeLevelHierarchy {
  [key: string]: ThreeLevelHierarchyNode[]
}

export const getCrossProductTechnologyHierarchy = (): ThreeLevelHierarchy => ({
  "Fixed-Position Self-Scanning Kiosks": [
    {
      level2: "Barcode-Based Fixed Kiosks",
      level3Options: ["Single-Plane Self-Scanning Kiosks", "Multi-Plane Self-Scanning Kiosks", "Presentation Self-Scanning Kiosks"]
    },
    {
      level2: "RFID-Based Fixed Kiosks",
      level3Options: []
    },
    {
      level2: "Computer Vision / AI-Based Fixed Kiosks",
      level3Options: []
    }
  ],
  "Mobile Self-Scanning Solutions": [
    {
      level2: "Barcode-Based Mobile Self-Scanning",
      level3Options: ["Dedicated Mobile Self-Scanning Devices", "Smartphone-Based Self-Scanning", "Smart-Cart Barcode Self-Scanning"]
    },
    {
      level2: "RFID-Based Mobile Self-Scanning Solutions",
      level3Options: []
    },
    {
      level2: "Computer Vision / AI Smart-Cart Self-Scanning",
      level3Options: []
    }
  ]
})

export const getCrossRetailFormatHierarchy = (): ThreeLevelHierarchy => ({
  "Fixed-Position Self-Scanning Kiosks": [
    {
      level2: "Single-Plane Self-Scanning Kiosks",
      level3Options: ["Supermarkets & Hypermarkets", "Convenience Stores", "Specialty and Discount Stores", "Department Stores", "Warehouse Clubs", "Pharmacies & Drugstores"]
    },
    {
      level2: "Multi-Plane Self-Scanning Kiosks",
      level3Options: ["Supermarkets & Hypermarkets", "Convenience Stores", "Specialty and Discount Stores", "Department Stores", "Warehouse Clubs", "Pharmacies & Drugstores"]
    },
    {
      level2: "Presentation Self-Scanning Kiosks",
      level3Options: ["Supermarkets & Hypermarkets", "Convenience Stores", "Specialty and Discount Stores", "Department Stores", "Warehouse Clubs", "Pharmacies & Drugstores"]
    }
  ],
  "Mobile Self-Scanning Solutions": [
    {
      level2: "Dedicated Mobile Self-Scanning Devices",
      level3Options: ["Supermarkets & Hypermarkets", "Convenience Stores", "Specialty and Discount Stores", "Department Stores", "Warehouse Clubs", "Pharmacies & Drugstores"]
    },
    {
      level2: "Smartphone-Based Self-Scanning",
      level3Options: ["Supermarkets & Hypermarkets", "Convenience Stores", "Specialty and Discount Stores", "Department Stores", "Warehouse Clubs", "Pharmacies & Drugstores"]
    },
    {
      level2: "Smart-Cart-Based Self-Scanning",
      level3Options: ["Supermarkets & Hypermarkets", "Convenience Stores", "Specialty and Discount Stores", "Department Stores", "Warehouse Clubs", "Pharmacies & Drugstores"]
    }
  ]
})
