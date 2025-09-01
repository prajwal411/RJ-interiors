export const IN_STATES: string[] = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
]

export const IN_UNION_TERRITORIES: string[] = [
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi (NCT)",
  "Jammu & Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
]

export const PRIORITY_CITIES: string[] = [
  "Ahmedabad","Agra","Ajmer","Allahabad/Prayagraj","Amritsar","Aurangabad","Bareilly","Belagavi","Bengaluru","Bhopal","Bhubaneswar","Bilaspur","Chandigarh","Chennai","Coimbatore","Cuttack","Dehradun","Delhi","Dhanbad","Durgapur","Ernakulam","Faridabad","Gandhinagar","Ghaziabad","Guntur","Gurugram","Gwalior","Guwahati","Hubballi","Hyderabad","Indore","Jaipur","Jalandhar","Jalgaon","Jamshedpur","Jodhpur","Kakinada","Kanpur","Karur","Kochi","Kolhapur","Kolkata","Kollam","Kota","Kozhikode","Lucknow","Ludhiana","Madurai","Mangaluru","Meerut","Moradabad","Mumbai","Mysuru","Nagpur","Nashik","Navi Mumbai","Noida","Patna","Pimpri Chinchwad","Puducherry","Pune","Raipur","Rajkot","Ranchi","Rourkela","Salem","Siliguri","Solapur","Srinagar","Surat","Thane","Thiruvananthapuram","Thrissur","Tiruchirappalli","Tirunelveli","Tiruppur","Udaipur","Vadodara","Varanasi","Vijayawada","Visakhapatnam","Warangal"
]

// Extended city data with SEO-friendly information
export const CITY_SEO_DATA: Record<string, {
  state: string
  population: string
  area: string
  famousFor: string[]
  nearbyCities: string[]
  industries: string[]
  seoKeywords: string[]
  localContent: string
}> = {
  bengaluru: {
    state: "Karnataka",
    population: "12.3 million",
    area: "741 sq km",
    famousFor: ["IT Hub", "Garden City", "Startup Capital"],
    nearbyCities: ["Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
    industries: ["Information Technology", "Biotechnology", "Manufacturing"],
    seoKeywords: ["GRC products Bangalore", "FRP solutions Bengaluru", "construction materials Karnataka"],
    localContent: "Bangalore, the Silicon Valley of India, is a major hub for construction and interior projects."
  },
  mumbai: {
    state: "Maharashtra",
    population: "20.4 million",
    area: "603 sq km",
    famousFor: ["Financial Capital", "Film Industry", "Gateway of India"],
    nearbyCities: ["Pune", "Nashik", "Thane", "Navi Mumbai"],
    industries: ["Finance", "Entertainment", "Manufacturing", "Port"],
    seoKeywords: ["GRC products Mumbai", "FRP solutions Maharashtra", "construction materials Mumbai"],
    localContent: "Mumbai, India's financial capital, offers diverse construction opportunities across residential and commercial sectors."
  },
  delhi: {
    state: "Delhi (NCT)",
    population: "20.9 million",
    area: "1,484 sq km",
    famousFor: ["Capital City", "Historical Monuments", "Political Center"],
    nearbyCities: ["Gurugram", "Noida", "Ghaziabad", "Faridabad"],
    industries: ["Government", "Services", "Manufacturing", "Education"],
    seoKeywords: ["GRC products Delhi", "FRP solutions NCR", "construction materials Delhi"],
    localContent: "Delhi NCR is a thriving metropolitan region with extensive construction and development projects."
  },
  hyderabad: {
    state: "Telangana",
    population: "9.7 million",
    area: "650 sq km",
    famousFor: ["Pearl City", "IT Hub", "Biryani"],
    nearbyCities: ["Warangal", "Karimnagar", "Nizamabad", "Adilabad"],
    industries: ["Information Technology", "Pharmaceuticals", "Manufacturing"],
    seoKeywords: ["GRC products Hyderabad", "FRP solutions Telangana", "construction materials Hyderabad"],
    localContent: "Hyderabad combines traditional heritage with modern development, creating unique construction opportunities."
  },
  chennai: {
    state: "Tamil Nadu",
    population: "10.9 million",
    area: "426 sq km",
    famousFor: ["Gateway to South", "Auto Hub", "Beaches"],
    nearbyCities: ["Coimbatore", "Madurai", "Salem", "Tiruchirappalli"],
    industries: ["Automotive", "Manufacturing", "IT", "Textiles"],
    seoKeywords: ["GRC products Chennai", "FRP solutions Tamil Nadu", "construction materials Chennai"],
    localContent: "Chennai is a major industrial and cultural center with diverse construction requirements."
  }
}

// Basic city-to-state mapping for popular cities; can be expanded or sourced from CMS
export const CITY_TO_STATE: Record<string, string> = {
  bengaluru: "Karnataka",
  bangalore: "Karnataka",
  mysuru: "Karnataka",
  mysore: "Karnataka",
  hyderabad: "Telangana",
  chennai: "Tamil Nadu",
  mumbai: "Maharashtra",
  pune: "Maharashtra",
  delhi: "Delhi (NCT)",
  gurugram: "Haryana",
  noida: "Uttar Pradesh",
  kolkata: "West Bengal",
  ahmedabad: "Gujarat",
  jaipur: "Rajasthan",
  lucknow: "Uttar Pradesh",
  kochi: "Kerala",
  ernakulam: "Kerala",
  coimbatore: "Tamil Nadu",
  visakhapatnam: "Andhra Pradesh",
  vijayawada: "Andhra Pradesh",
  varanasi: "Uttar Pradesh",
  indore: "Madhya Pradesh",
  bhopal: "Madhya Pradesh",
  surat: "Gujarat",
  nagpur: "Maharashtra",
}

// South Indian cities organized by state
export const SOUTH_INDIA_CITIES: Record<string, string[]> = {
  "Karnataka": [
    "Bangalore", "Mysore", "Mangalore", "Hubli", "Belgaum", "Davanagere", "Shimoga", "Tumkur", "Udupi", "Hassan",
    "Bengaluru", "Mysuru", "Hubballi", "Belagavi", "Shivamogga", "Tumakuru", "Gulbarga", "Ballari", "Raichur", "Bidar",
    "Mandya", "Chitradurga", "Kolar", "Chikkaballapur", "Chikkamagaluru", "Ramanagara", "Kodagu", "Dakshina Kannada",
    "Uttara Kannada", "Chamrajnagar", "Yadgir", "Gadag", "Haveri", "Vijayapura", "Bagalkot", "Dharwad", "Koppal",
    "Kalaburagi"
  ],
  "Tamil Nadu": [
    "Chennai", "Coimbatore", "Madurai", "Trichy", "Tirunelveli", "Salem", "Vellore", "Erode", "Thanjavur",
    "Tiruchirappalli", "Tiruppur", "Thoothukkudi", "Dindigul", "Kanchipuram", "Sivaganga", "Theni", "Viluppuram",
    "Cuddalore", "Pudukkottai", "Nagapattinam", "Namakkal", "Karur", "Ramanathapuram", "Virudhunagar",
    "Tiruvannamalai", "Krishnagiri", "Dharmapuri", "Ariyalur", "Perambalur", "Tiruvallur"
  ],
  "Kerala": [
    "Kochi", "Trivandrum", "Kozhikode", "Kollam", "Thrissur", "Palakkad", "Alappuzha", "Kannur", "Kottayam",
    "Thiruvananthapuram", "Ernakulam", "Pathanamthitta", "Idukki", "Wayanad", "Malappuram", "Kasaragod"
  ],
  "Andhra Pradesh": [
    "Vijayawada", "Visakhapatnam", "Guntur", "Nellore", "Tirupati", "Kakinada", "Anantapur", "Rajahmundry",
    "Kurnool", "Kadapa", "Eluru", "Ongole", "Chittoor", "Tenali", "Proddatur", "Bhimavaram", "Machilipatnam",
    "Adoni", "Chilakaluripet", "Gudivada", "Narasaraopet", "Srikakulam", "Vizianagaram", "Parvathipuram",
    "Nandyal", "Markapur", "Gudur", "Vinukonda", "Ponnur", "Repalle", "Bapatla", "Chirala", "Piduguralla",
    "Mangalagiri", "Tadepalligudem", "Tadipatri", "Rayachoti", "Kadiri", "Madanapalle", "Puttaparthi",
    "Hindupur", "Dharmavaram"
  ],
  "Telangana": [
    "Hyderabad", "Warangal", "Karimnagar", "Nizamabad", "Khammam", "Mahbubnagar", "Adilabad", "Medak",
    "Nalgonda", "Rangareddy", "Siddipet", "Jagtial", "Peddapalli", "Mancherial", "Asifabad", "Kumuram Bheem",
    "Mulugu", "Bhadradri Kothagudem", "Suryapet", "Yadadri Bhuvanagiri", "Vikarabad", "Sangareddy", "Medchal",
    "Malkajgiri", "Secunderabad", "Quthbullapur", "Serilingampally", "Rajendranagar", "Shamshabad", "Hayathnagar",
    "Ghatkesar", "Uppal", "Lal Bahadur Nagar"
  ]
}

// Priority South Indian cities as specified by the user
export const PRIORITY_SOUTH_INDIA_CITIES: string[] = [
  // Karnataka
  "Bangalore", "Mysore", "Mangalore", "Hubli", "Belgaum", "Davanagere", "Shimoga", "Tumkur", "Udupi", "Hassan",
  // Tamil Nadu
  "Chennai", "Coimbatore", "Madurai", "Trichy", "Tirunelveli", "Salem", "Vellore", "Erode", "Thanjavur",
  // Kerala
  "Kochi", "Trivandrum", "Kozhikode", "Kollam", "Thrissur", "Palakkad", "Alappuzha", "Kannur", "Kottayam",
  // Andhra Pradesh
  "Vijayawada", "Visakhapatnam", "Guntur", "Nellore", "Tirupati", "Kakinada", "Anantapur", "Rajahmundry",
  // Telangana
  "Hyderabad", "Warangal", "Karimnagar", "Nizamabad", "Khammam", "Mahbubnagar"
]

// Flattened list of all South Indian cities
export const ALL_SOUTH_INDIA_CITIES: string[] = Object.values(SOUTH_INDIA_CITIES).flat()


