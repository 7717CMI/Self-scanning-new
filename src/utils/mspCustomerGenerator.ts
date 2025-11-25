export interface MSPCustomerData {
  // Customer Name
  customerName: string
  
  // Customer Overview
  companyID: string
  companyName: string
  website: string
  companySizeEmployees: string
  annualRevenue: string
  customerTier: string
  preferredEngagementStyle: string
  existingMSPDependence: string
  
  // Geographical Presence
  headquartersCountry: string
  headquartersCity: string
  regionalOperatingAreas: string
  
  // Product Offering/Business Segments
  keyIndustry: string
  businessFocus: string
  services: string
  
  // Key Stakeholders
  ownerSponsor: string
  providerExecutives: string
  programDirector: string
  directorEstatesFacilities: string
  headOfEngineering: string
  headOfProcurement: string
  contractsCommercialManager: string
  others: string
  
  // Contact Details
  contactWebsite: string
  email: string
  contactDetails: string
  address: string
  
  // IT Strategy & Investment Priorities
  budgetDirection: string
  majorITTransformationDrivers: string
  keyPerformanceMetrics: string
  strategicPartnershipsAnnounced: string
  
  // Innovation & Transformation Focus
  cloudModernizationData: string
  cybersecurityMaturityEvo: string
  investmentInEdgeIoT: string
  openSourceAdoptionLic: string
  
  // Relationship & Partnership Health
  currentEngagementScope: string
  contractValueTrend: string
  renewalProbability: string
  relationshipStrengthScore: string
  
  // SWOT Analysis
  strengths: string
  weaknesses: string
  opportunities: string
  threats: string
}

const companyNames = [
  "TechCorp Global Solutions", "Digital Innovations Inc", "CloudFirst Enterprises",
  "SecureNet Systems", "DataFlow Technologies", "InfraTech Solutions",
  "CyberGuard Services", "NetworkPro International", "ITManaged Corp",
  "CloudScale Systems", "SecureWorks Global", "TechBridge Solutions",
  "DigitalEdge Services", "InfraMax Technologies", "CloudConnect Inc",
  "SecureSphere Systems", "NetworkEdge Solutions", "ITPro Services",
  "CloudVantage Corp", "SecureLink Technologies", "TechFlow Enterprises",
  "DigitalCore Systems", "InfraCloud Solutions", "SecureNet Global",
  "NetworkPro Services", "ITManaged Solutions", "CloudFirst Technologies",
  "SecureWorks Corp", "TechBridge Global", "DigitalEdge Inc",
  "InfraMax Services", "CloudConnect Solutions", "SecureSphere Corp",
  "NetworkEdge Technologies", "ITPro Global", "CloudVantage Services",
  "SecureLink Solutions", "TechFlow Corp", "DigitalCore Technologies",
  "InfraCloud Global", "SecureNet Services", "NetworkPro Solutions",
  "ITManaged Technologies", "CloudFirst Global", "SecureWorks Services",
  "TechBridge Solutions", "DigitalEdge Corp", "InfraMax Technologies",
  "CloudConnect Global", "SecureSphere Services", "NetworkEdge Solutions",
  "ITPro Technologies", "CloudVantage Global", "SecureLink Services",
  "TechFlow Solutions", "DigitalCore Technologies", "InfraCloud Global",
  "SecureNet Services", "NetworkPro Solutions", "ITManaged Technologies",
  "CloudFirst Global", "SecureWorks Services", "TechBridge Solutions",
  "DigitalEdge Corp", "InfraMax Technologies", "CloudConnect Global",
  "SecureSphere Services", "NetworkEdge Solutions", "ITPro Technologies",
  "CloudVantage Global", "SecureLink Services", "TechFlow Solutions",
  "DigitalCore Technologies", "InfraCloud Global", "SecureNet Services",
  "NetworkPro Solutions", "ITManaged Technologies", "CloudFirst Global",
  "SecureWorks Services", "TechBridge Solutions", "DigitalEdge Corp",
  "InfraMax Technologies", "CloudConnect Global", "SecureSphere Services",
  "NetworkEdge Solutions", "ITPro Technologies", "CloudVantage Global",
  "SecureLink Services", "TechFlow Solutions", "DigitalCore Technologies",
  "InfraCloud Global", "SecureNet Services", "NetworkPro Solutions",
  "ITManaged Technologies", "CloudFirst Global", "SecureWorks Services",
  "TechBridge Solutions", "DigitalEdge Corp", "InfraMax Technologies",
  "CloudConnect Global", "SecureSphere Services", "NetworkEdge Solutions",
  "ITPro Technologies", "CloudVantage Global", "SecureLink Services",
  "TechFlow Solutions", "DigitalCore Technologies", "InfraCloud Global",
  "SecureNet Services", "NetworkPro Solutions", "ITManaged Technologies"
]

const companySizes = [
  "1-50", "51-100", "101-250", "251-500", "501-1000",
  "1001-2500", "2501-5000", "5001-10000", "10000+"
]

const annualRevenues = [
  "$1M - $5M", "$5M - $10M", "$10M - $25M", "$25M - $50M",
  "$50M - $100M", "$100M - $250M", "$250M - $500M", "$500M - $1B",
  "$1B - $5B", "$5B+"
]

const customerTiers = [
  "Tier 1 - Strategic", "Tier 2 - Key", "Tier 3 - Standard", "Tier 4 - Emerging"
]

const engagementStyles = [
  "Consultative", "Transactional", "Partnership", "Managed Services",
  "Hybrid", "Project-based", "Retainer-based"
]

const mspDependence = [
  "High", "Medium", "Low", "None", "Evaluating"
]

const countries = {
  global: ["United States", "United Kingdom", "Germany", "France", "Canada", "Australia", "Netherlands", "Sweden", "Switzerland", "Japan"],
  asia: ["China", "Japan", "India", "Singapore", "South Korea", "Hong Kong", "Taiwan", "Malaysia", "Thailand", "Indonesia"],
  india: ["India"]
}

const cities = {
  global: ["New York", "London", "Berlin", "Paris", "Toronto", "Sydney", "Amsterdam", "Stockholm", "Zurich", "Tokyo"],
  asia: ["Beijing", "Tokyo", "Mumbai", "Singapore", "Seoul", "Hong Kong", "Taipei", "Kuala Lumpur", "Bangkok", "Jakarta"],
  india: ["Mumbai", "Bangalore", "Delhi", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad", "Gurgaon", "Noida"]
}

const regionalAreas = {
  global: ["North America, Europe, APAC", "Global", "Americas, EMEA", "North America, Europe", "Global Operations"],
  asia: ["APAC", "Southeast Asia, China", "Asia Pacific", "Greater China, ASEAN", "APAC, Middle East"],
  india: ["India", "India, Middle East", "South Asia", "India, APAC", "Domestic, International"]
}

const industries = [
  "Financial Services", "Healthcare", "Manufacturing", "Retail", "Technology",
  "Telecommunications", "Energy & Utilities", "Government", "Education", "Media & Entertainment"
]

const businessFocus = [
  "Digital Transformation", "Cloud Migration", "Cybersecurity", "Data Analytics",
  "Infrastructure Modernization", "Application Development", "IT Operations",
  "Business Process Automation", "Customer Experience", "Supply Chain Optimization"
]

const services = [
  "Cloud Services, Managed IT, Security", "Infrastructure Management, Help Desk, Network Services",
  "Application Support, Database Management, Backup & Recovery", "Cybersecurity, Compliance, Risk Management",
  "Cloud Migration, DevOps, CI/CD", "Data Analytics, Business Intelligence, AI/ML",
  "IT Consulting, Strategy, Architecture", "Managed Services, 24/7 Support, Monitoring"
]

const firstNames = [
  "James", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas",
  "Christopher", "Charles", "Daniel", "Matthew", "Anthony", "Mark", "Donald",
  "Steven", "Paul", "Andrew", "Joshua", "Kenneth", "Kevin", "Brian", "George",
  "Rajesh", "Amit", "Priya", "Suresh", "Anjali", "Vikram", "Deepak", "Meera"
]

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
  "Rodriguez", "Martinez", "Hernandez", "Lopez", "Wilson", "Anderson", "Thomas",
  "Kumar", "Sharma", "Patel", "Singh", "Gupta", "Reddy", "Mehta", "Verma"
]

const designations = [
  "CEO", "CTO", "CFO", "COO", "CIO", "VP IT", "Director IT", "Head of IT",
  "IT Manager", "Program Director", "Director - Estates/Facilities",
  "Head of Engineering / Chief Engineer", "Head of Procurement",
  "Contracts & Commercial Manager", "IT Director", "VP Technology"
]

const budgetDirections = [
  "Increasing", "Stable", "Decreasing", "Variable", "Strategic Investment"
]

const itTransformationDrivers = [
  "Digital Transformation, Cloud Adoption, Cost Optimization",
  "Security Enhancement, Compliance, Risk Management",
  "Business Agility, Innovation, Competitive Advantage",
  "Customer Experience, Operational Efficiency, Scalability"
]

const performanceMetrics = [
  "Uptime, Response Time, Customer Satisfaction", "Cost per Ticket, Resolution Time, SLA Compliance",
  "Security Incidents, Compliance Score, Risk Reduction", "Cloud Adoption Rate, Cost Savings, ROI"
]

const strategicPartnerships = [
  "Microsoft Azure Partnership", "AWS Strategic Alliance", "Google Cloud Partnership",
  "Cisco Technology Partner", "Dell Technologies Alliance", "VMware Partnership",
  "Oracle Cloud Partnership", "IBM Strategic Alliance"
]

const cloudModernization = [
  "Hybrid Cloud Strategy", "Multi-Cloud Approach", "Cloud-First Initiative",
  "Legacy Modernization", "Cloud Migration in Progress", "Fully Cloud-Native"
]

const cybersecurityMaturity = [
  "Advanced", "Intermediate", "Basic", "Emerging", "Mature"
]

const edgeIoT = [
  "High Investment", "Moderate Investment", "Pilot Programs", "Evaluating", "Not Currently"
]

const openSource = [
  "High Adoption", "Moderate Adoption", "Selective Use", "Evaluating", "Limited"
]

const engagementScopes = [
  "Full IT Outsourcing", "Infrastructure Management", "Application Support",
  "Security Services", "Cloud Management", "Hybrid Model", "Project-based"
]

const contractTrends = [
  "Increasing", "Stable", "Decreasing", "Renewal Pending", "Expanding"
]

const renewalProbabilities = [
  "90-100%", "75-90%", "50-75%", "25-50%", "0-25%"
]

const relationshipScores = [
  "9-10 (Excellent)", "7-8 (Good)", "5-6 (Fair)", "3-4 (Poor)", "1-2 (Critical)"
]

const strengths = [
  "Strong technical capabilities, proven track record", "Excellent customer service, responsive support",
  "Innovative solutions, cutting-edge technology", "Cost-effective, value-driven approach",
  "Strategic partnership, long-term commitment", "Scalable solutions, flexible engagement"
]

const weaknesses = [
  "Limited geographic coverage", "Resource constraints during peak times",
  "Integration challenges with legacy systems", "Learning curve for new technologies",
  "Communication gaps in complex projects", "Pricing competitiveness in some markets"
]

const opportunities = [
  "Expansion into new markets, service offerings", "Digital transformation initiatives",
  "Cloud migration projects", "Security enhancement programs",
  "AI/ML adoption, automation opportunities", "Strategic partnerships, joint ventures"
]

const threats = [
  "Market competition, pricing pressure", "Technology disruption, obsolescence",
  "Economic downturn, budget cuts", "Regulatory changes, compliance requirements",
  "Talent shortage, skill gaps", "Cybersecurity threats, data breaches"
]

function seededRandom(seed: number): () => number {
  let value = seed
  return () => {
    value = (value * 9301 + 49297) % 233280
    return value / 233280
  }
}

function randomElement<T>(arr: T[], random: () => number): T {
  return arr[Math.floor(random() * arr.length)]
}

function randomInt(min: number, max: number, random: () => number): number {
  return Math.floor(random() * (max - min + 1)) + min
}

function generateEmail(firstName: string, lastName: string, companyName: string, random: () => number): string {
  const domain = companyName.toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .substring(0, 20) + '.com'
  const formats = [
    `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`,
    `${firstName[0].toLowerCase()}${lastName.toLowerCase()}@${domain}`,
    `${firstName.toLowerCase()}@${domain}`
  ]
  return randomElement(formats, random)
}

function generatePhone(random: () => number, region: 'global' | 'asia' | 'india'): string {
  if (region === 'india') {
    return `+91-${randomInt(70, 99, random)}-${randomInt(1000, 9999, random)}-${randomInt(1000, 9999, random)}`
  }
  if (region === 'asia') {
    const formats = [
      `+86-${randomInt(10, 99, random)}-${randomInt(1000, 9999, random)}-${randomInt(1000, 9999, random)}`,
      `+81-${randomInt(10, 99, random)}-${randomInt(1000, 9999, random)}-${randomInt(1000, 9999, random)}`,
      `+65-${randomInt(1000, 9999, random)}-${randomInt(1000, 9999, random)}`
    ]
    return randomElement(formats, random)
  }
  const formats = [
    `+1-${randomInt(200, 999, random)}-${randomInt(200, 999, random)}-${randomInt(1000, 9999, random)}`,
    `+44-${randomInt(20, 99, random)}-${randomInt(1000, 9999, random)}-${randomInt(1000, 9999, random)}`,
    `+49-${randomInt(100, 999, random)}-${randomInt(1000, 9999, random)}`
  ]
  return randomElement(formats, random)
}

function generateWebsite(companyName: string): string {
  const domain = companyName.toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .substring(0, 25) + '.com'
  return `https://www.${domain}`
}

function generateAddress(city: string, country: string, random: () => number): string {
  const streetNumbers = randomInt(100, 9999, random)
  const streetNames = ["Main St", "Park Ave", "Tech Blvd", "Business Park", "Innovation Dr", "Corporate Way"]
  const street = randomElement(streetNames, random)
  return `${streetNumbers} ${street}, ${city}, ${country}`
}

export function generateMSPCustomerData(region: 'global' | 'asia' | 'india', count: number): MSPCustomerData[] {
  const data: MSPCustomerData[] = []
  const regionCountries = countries[region]
  const regionCities = cities[region]
  const regionAreas = regionalAreas[region]
  
  for (let i = 0; i < count; i++) {
    const seed = i * 1000 + (region === 'global' ? 10000 : region === 'asia' ? 20000 : 30000)
    const random = seededRandom(seed)
    
    const customerName = `Customer ${i + 1}`
    const companyName = randomElement(companyNames, random)
    const companyID = `COMP-${region.toUpperCase()}-${String(i + 1).padStart(4, '0')}`
    const website = generateWebsite(companyName)
    const companySize = randomElement(companySizes, random)
    const revenue = randomElement(annualRevenues, random)
    const tier = randomElement(customerTiers, random)
    const engagementStyle = randomElement(engagementStyles, random)
    const mspDep = randomElement(mspDependence, random)
    
    const country = randomElement(regionCountries, random)
    const city = randomElement(regionCities, random)
    const operatingAreas = randomElement(regionAreas, random)
    
    const industry = randomElement(industries, random)
    const focus = randomElement(businessFocus, random)
    const serviceList = randomElement(services, random)
    
    const firstName = randomElement(firstNames, random)
    const lastName = randomElement(lastNames, random)
    const email = generateEmail(firstName, lastName, companyName, random)
    const phone = generatePhone(random, region)
    const address = generateAddress(city, country, random)
    
    const owner = `${firstName} ${lastName}`
    const execs = `${randomElement(firstNames, random)} ${randomElement(lastNames, random)} (${randomElement(['CEO', 'COO', 'CFO'], random)})`
    const programDir = `${randomElement(firstNames, random)} ${randomElement(lastNames, random)}`
    const directorEstates = `${randomElement(firstNames, random)} ${randomElement(lastNames, random)}`
    const headEng = `${randomElement(firstNames, random)} ${randomElement(lastNames, random)}`
    const headProc = `${randomElement(firstNames, random)} ${randomElement(lastNames, random)}`
    const contractsMgr = `${randomElement(firstNames, random)} ${randomElement(lastNames, random)}`
    const others = `${randomElement(firstNames, random)} ${randomElement(lastNames, random)} (${randomElement(designations, random)})`
    
    const budgetDir = randomElement(budgetDirections, random)
    const itDrivers = randomElement(itTransformationDrivers, random)
    const metrics = randomElement(performanceMetrics, random)
    const partnerships = randomElement(strategicPartnerships, random)
    
    const cloudMod = randomElement(cloudModernization, random)
    const cyberMaturity = randomElement(cybersecurityMaturity, random)
    const edgeIoTInv = randomElement(edgeIoT, random)
    const openSourceAdopt = randomElement(openSource, random)
    
    const engagementScope = randomElement(engagementScopes, random)
    const contractTrend = randomElement(contractTrends, random)
    const renewalProb = randomElement(renewalProbabilities, random)
    const relScore = randomElement(relationshipScores, random)
    
    const strength = randomElement(strengths, random)
    const weakness = randomElement(weaknesses, random)
    const opportunity = randomElement(opportunities, random)
    const threat = randomElement(threats, random)
    
    data.push({
      customerName,
      companyID,
      companyName,
      website,
      companySizeEmployees: companySize,
      annualRevenue: revenue,
      customerTier: tier,
      preferredEngagementStyle: engagementStyle,
      existingMSPDependence: mspDep,
      headquartersCountry: country,
      headquartersCity: city,
      regionalOperatingAreas: operatingAreas,
      keyIndustry: industry,
      businessFocus: focus,
      services: serviceList,
      ownerSponsor: owner,
      providerExecutives: execs,
      programDirector: programDir,
      directorEstatesFacilities: directorEstates,
      headOfEngineering: headEng,
      headOfProcurement: headProc,
      contractsCommercialManager: contractsMgr,
      others: others,
      contactWebsite: website,
      email,
      contactDetails: phone,
      address,
      budgetDirection: budgetDir,
      majorITTransformationDrivers: itDrivers,
      keyPerformanceMetrics: metrics,
      strategicPartnershipsAnnounced: partnerships,
      cloudModernizationData: cloudMod,
      cybersecurityMaturityEvo: cyberMaturity,
      investmentInEdgeIoT: edgeIoTInv,
      openSourceAdoptionLic: openSourceAdopt,
      currentEngagementScope: engagementScope,
      contractValueTrend: contractTrend,
      renewalProbability: renewalProb,
      relationshipStrengthScore: relScore,
      strengths: strength,
      weaknesses: weakness,
      opportunities: opportunity,
      threats: threat
    })
  }
  
  return data
}

export function getMSPCustomerData(region: 'global' | 'asia' | 'india'): MSPCustomerData[] {
  const counts = {
    global: 200,
    asia: 100,
    india: 50
  }
  return generateMSPCustomerData(region, counts[region])
}

