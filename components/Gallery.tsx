"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Calendar, User, Building, ZoomIn } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerIn } from "@/components/animations/stagger-in"

interface Project {
  id: number
  title: string
  category: string
  location: string
  year: string
  client: string
  description: string
  images: string[]
  features: string[]
  projectType: string
}

const projects: Project[] = [
  // Government & Institutional Projects
  {
    id: 1,
    title: "Canara Bank Office Complex",
    category: "Government & Institutional",
    location: "Bagalur, Bangalore",
    year: "2023",
    client: "Canara Bank",
    projectType: "Banking Infrastructure",
    description:
      "Modern banking facility featuring elegant GRC facade elements, decorative columns, and architectural panels. The project combines functionality with aesthetic appeal, creating a professional environment that reflects the bank's prestigious image while ensuring durability and low maintenance.",
    images: ["/images/project-1.png", "/images/commercial-1.png", "/images/project-3.png"],
    features: [
      "GRC Facade Panels",
      "Decorative Columns",
      "Weather Resistant Finish",
      "Professional Architecture",
      "Energy Efficient Design",
    ],
  },
  {
    id: 2,
    title: "DRDO Office Complex",
    category: "Government & Institutional",
    location: "HAL, Bangalore",
    year: "2023",
    client: "Defence Research and Development Organisation",
    projectType: "Defence Infrastructure",
    description:
      "High-security government facility featuring specialized GRC and FRP elements designed for defense applications. The project includes blast-resistant architectural elements, security-focused design, and durable construction suitable for sensitive government operations.",
    images: ["/images/project-2.png", "/images/commercial-2.png", "/images/project-4.png"],
    features: [
      "Security-focused Design",
      "Blast-resistant Elements",
      "High-grade GRC Work",
      "Government Standards Compliance",
      "Durable Construction",
    ],
  },
  {
    id: 3,
    title: "TDP Office Complex",
    category: "Government & Institutional",
    location: "Andhra Pradesh",
    year: "2023",
    client: "Telugu Desam Party",
    projectType: "Political Office",
    description:
      "Political party office featuring modern GRC architectural elements, professional facades, and durable construction. The project creates an impressive political headquarters with emphasis on public accessibility and professional appearance.",
    images: ["/images/project-3.png", "/images/project-1.png", "/images/commercial-1.png"],
    features: [
      "Modern Political Architecture",
      "Professional GRC Facades",
      "Public Access Design",
      "Durable Construction",
      "Weather Resistant Elements",
    ],
  },
  {
    id: 4,
    title: "TDP MLA Office",
    category: "Government & Institutional",
    location: "Andhra Pradesh",
    year: "2023",
    client: "Telugu Desam Party MLA",
    projectType: "Legislative Office",
    description:
      "MLA office complex featuring elegant GRC elements, professional architecture, and public-friendly design. The project serves as a constituency office with emphasis on accessibility and professional representation.",
    images: ["/images/project-4.png", "/images/project-2.png", "/images/commercial-2.png"],
    features: [
      "Legislative Architecture",
      "Professional Design",
      "Public Accessibility",
      "GRC Architectural Elements",
      "Constituency Office Standards",
    ],
  },
  {
    id: 5,
    title: "Karnataka High Court",
    category: "Government & Institutional",
    location: "Chikkodi, Karnataka",
    year: "2022",
    client: "Karnataka State Government",
    projectType: "Judicial Infrastructure",
    description:
      "Prestigious judicial complex featuring classical GRC architectural elements including ornate columns, decorative facades, and traditional Indian architectural motifs. The project reflects the dignity and grandeur appropriate for a high court while ensuring structural integrity and longevity.",
    images: ["/images/project-5.png", "/images/project-3.png", "/images/commercial-1.png"],
    features: [
      "Classical Architecture",
      "Ornate GRC Columns",
      "Traditional Motifs",
      "Judicial Standards",
      "Heritage Design Elements",
    ],
  },
  {
    id: 6,
    title: "Janatha Bazar Complex",
    category: "Government & Institutional",
    location: "Hubli, Karnataka",
    year: "2023",
    client: "Hubli Municipal Corporation",
    projectType: "Public Market Infrastructure",
    description:
      "Large-scale public market facility featuring functional GRC and FRP elements designed for high-traffic commercial use. The project includes weather-resistant facades, easy-maintenance surfaces, and architectural elements that enhance the shopping experience while ensuring durability.",
    images: ["/images/project-6.png", "/images/project-4.png", "/images/commercial-2.png"],
    features: [
      "High-traffic Design",
      "Weather Resistant",
      "Easy Maintenance",
      "Commercial Grade Materials",
      "Public Infrastructure Standards",
    ],
  },
  {
    id: 7,
    title: "Janatha Bazar Basavanabagevadi",
    category: "Government & Institutional",
    location: "Basavanabagevadi, Karnataka",
    year: "2023",
    client: "Municipal Corporation",
    projectType: "Public Market Infrastructure",
    description:
      "Community market complex featuring durable GRC elements, functional design, and public-friendly architecture. The project serves as a local commercial hub with emphasis on community needs and sustainable construction.",
    images: ["/images/project-1.png", "/images/project-5.png", "/images/commercial-1.png"],
    features: [
      "Community Market Design",
      "Functional GRC Elements",
      "Public-friendly Architecture",
      "Sustainable Construction",
      "Local Commercial Hub",
    ],
  },

  // Healthcare Projects
  {
    id: 8,
    title: "MVJ Medical College & Hospital",
    category: "Healthcare",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "MVJ Medical College",
    projectType: "Medical Infrastructure",
    description:
      "State-of-the-art medical facility featuring hygienic GRC surfaces, easy-to-clean architectural elements, and hospital-grade finishes. The project prioritizes patient safety, staff efficiency, and maintenance ease while creating a healing environment through thoughtful architectural design.",
    images: ["/images/project-2.png", "/images/project-6.png", "/images/project-1.png"],
    features: [
      "Hygienic GRC Surfaces",
      "Hospital-grade Finishes",
      "Easy-to-clean Design",
      "Patient Safety Focus",
      "Medical Standards Compliance",
    ],
  },
  {
    id: 9,
    title: "CMH Hospital Complex",
    category: "Healthcare",
    location: "Kolar, Karnataka",
    year: "2022",
    client: "Command Hospital",
    projectType: "Military Medical Infrastructure",
    description:
      "Military hospital facility featuring specialized GRC and FRP elements designed for medical applications. The project includes antimicrobial surfaces, chemical-resistant materials, and architectural elements that support the unique requirements of military medical facilities.",
    images: ["/images/project-3.png", "/images/project-4.png", "/images/commercial-1.png"],
    features: [
      "Antimicrobial Surfaces",
      "Chemical Resistant",
      "Military Standards",
      "Medical Grade Materials",
      "Specialized Healthcare Design",
    ],
  },
  {
    id: 10,
    title: "Victoria Hospital Renovation",
    category: "Healthcare",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "Government of Karnataka",
    projectType: "Heritage Hospital Renovation",
    description:
      "Historic hospital renovation featuring heritage-compatible GRC elements that blend seamlessly with existing architecture. The project required careful restoration techniques, color matching, and specialized finishes to preserve the hospital's historical character while upgrading functionality.",
    images: ["/images/project-4.png", "/images/project-5.png", "/images/project-2.png"],
    features: [
      "Heritage Restoration",
      "Color Matching",
      "Historical Preservation",
      "Modern Functionality",
      "Specialized Renovation Techniques",
    ],
  },

  // Education & Research Projects
  {
    id: 11,
    title: "Shilpa Jain Heritage School",
    category: "Education & Research",
    location: "Hoskote, Bangalore",
    year: "2023",
    client: "Shilpa Jain Educational Trust",
    projectType: "Educational Infrastructure",
    description:
      "Modern educational facility featuring child-friendly GRC elements, colorful architectural panels, and safe, durable construction. The project creates an inspiring learning environment through innovative design while ensuring student safety and long-term durability.",
    images: ["/images/project-5.png", "/images/project-1.png", "/images/project-3.png"],
    features: [
      "Child-friendly Design",
      "Colorful Architectural Elements",
      "Safety-focused Construction",
      "Educational Environment",
      "Durable School Infrastructure",
    ],
  },
  {
    id: 12,
    title: "Veterinary College Complex",
    category: "Education & Research",
    location: "Athani, Karnataka",
    year: "2022",
    client: "Karnataka Veterinary University",
    projectType: "Veterinary Education",
    description:
      "Specialized veterinary education facility featuring laboratory-grade GRC elements, research-focused architecture, and animal-friendly design. The project includes specialized surfaces for veterinary applications and research facilities.",
    images: ["/images/project-6.png", "/images/project-2.png", "/images/project-4.png"],
    features: [
      "Laboratory-grade Materials",
      "Research-focused Design",
      "Animal-friendly Architecture",
      "Specialized Veterinary Surfaces",
      "Educational Research Facilities",
    ],
  },

  // Religious & Community Projects
  {
    id: 13,
    title: "Bismilla Green Masjid",
    category: "Religious & Community",
    location: "Bangalore, Karnataka",
    year: "2022",
    client: "Bismilla Green Masjid Trust",
    projectType: "Religious Architecture",
    description:
      "Beautiful mosque featuring traditional Islamic GRC architectural elements including ornate arches, decorative panels, and intricate geometric patterns. The project combines religious architectural traditions with modern construction techniques to create a spiritually inspiring space.",
    images: ["/images/project-1.png", "/images/project-3.png", "/images/project-6.png"],
    features: [
      "Islamic Architecture",
      "Ornate GRC Arches",
      "Geometric Patterns",
      "Traditional Design",
      "Spiritual Environment",
    ],
  },
  {
    id: 14,
    title: "Gokul Foundation Complex",
    category: "Religious & Community",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "Gokul Foundation",
    projectType: "Community Center",
    description:
      "Community foundation building featuring modern GRC elements, multipurpose design, and community-focused architecture. The project serves various community functions with emphasis on accessibility and social interaction.",
    images: ["/images/project-2.png", "/images/project-4.png", "/images/project-1.png"],
    features: [
      "Community-focused Design",
      "Multipurpose Architecture",
      "Modern GRC Elements",
      "Social Interaction Spaces",
      "Accessible Design",
    ],
  },
  {
    id: 15,
    title: "Infant Jesus Church",
    category: "Religious & Community",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "Infant Jesus Church Parish",
    projectType: "Church Architecture",
    description:
      "Sacred church facility featuring Gothic-inspired GRC elements, decorative facades, and architectural details that enhance the spiritual atmosphere. The project includes weather-resistant finishes and traditional church architectural elements adapted for local climate conditions.",
    images: ["/images/project-3.png", "/images/project-5.png", "/images/project-2.png"],
    features: [
      "Gothic-inspired Design",
      "Sacred Architecture",
      "Decorative GRC Facades",
      "Weather Resistant",
      "Traditional Church Elements",
    ],
  },
  {
    id: 16,
    title: "ISKCON Temple Complex",
    category: "Religious & Community",
    location: "Coimbatore, Tamil Nadu",
    year: "2022",
    client: "ISKCON Coimbatore",
    projectType: "Temple Architecture",
    description:
      "Magnificent temple complex featuring traditional Vedic architecture with modern GRC construction. The project includes intricate carved elements, decorative columns, and architectural details that reflect the spiritual and cultural significance of the ISKCON tradition.",
    images: ["/images/project-4.png", "/images/project-6.png", "/images/project-3.png"],
    features: [
      "Vedic Architecture",
      "Intricate GRC Carvings",
      "Traditional Temple Design",
      "Cultural Significance",
      "Spiritual Architecture",
    ],
  },
  {
    id: 17,
    title: "Basil Wood International ISKCON",
    category: "Religious & Community",
    location: "Gumjur, Bangalore",
    year: "2023",
    client: "Basil Wood International",
    projectType: "ISKCON Temple Complex",
    description:
      "International ISKCON temple complex featuring elaborate GRC architectural elements, traditional temple design, and modern construction techniques. The project combines spiritual architecture with contemporary building methods.",
    images: ["/images/project-5.png", "/images/project-1.png", "/images/project-4.png"],
    features: [
      "International Temple Standards",
      "Elaborate GRC Elements",
      "Traditional Temple Architecture",
      "Modern Construction Techniques",
      "Spiritual Design Focus",
    ],
  },

  // Residential & Mixed-Use Projects
  {
    id: 18,
    title: "Brigade Eldorado",
    category: "Residential & Mixed-Use",
    location: "Bagalur, Bangalore",
    year: "2023",
    client: "Brigade Group",
    projectType: "Luxury Residential",
    description:
      "Premium residential complex featuring elegant GRC architectural elements, decorative facades, and luxury finishes. The project combines modern amenities with aesthetic appeal, creating a sophisticated living environment that reflects contemporary lifestyle aspirations.",
    images: ["/images/residential-1.png", "/images/project-2.png", "/images/project-5.png"],
    features: [
      "Luxury GRC Elements",
      "Premium Finishes",
      "Modern Architecture",
      "Residential Amenities",
      "Contemporary Design",
    ],
  },
  {
    id: 19,
    title: "Brigade Komarla Heights",
    category: "Residential & Mixed-Use",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "Brigade Group",
    projectType: "High-rise Residential",
    description:
      "Modern high-rise residential tower featuring sophisticated GRC cladding, balcony elements, and architectural details. The project showcases contemporary urban living with emphasis on quality construction, aesthetic appeal, and long-term durability.",
    images: ["/images/residential-2.png", "/images/project-3.png", "/images/project-1.png"],
    features: [
      "High-rise Construction",
      "GRC Cladding Systems",
      "Balcony Elements",
      "Urban Living Design",
      "Quality Construction",
    ],
  },
  {
    id: 20,
    title: "Zonasha Estates",
    category: "Residential & Mixed-Use",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "Zonasha Developers",
    projectType: "Residential Estate",
    description:
      "Comprehensive residential estate featuring diverse GRC architectural elements, landscaping integration, and community-focused design. The project creates a complete living ecosystem with emphasis on family lifestyle and community interaction.",
    images: ["/images/project-6.png", "/images/residential-1.png", "/images/project-4.png"],
    features: [
      "Estate Living",
      "Community-focused Design",
      "Landscaping Integration",
      "Family Lifestyle",
      "GRC Architectural Diversity",
    ],
  },
  {
    id: 21,
    title: "SB Urbanscapes",
    category: "Residential & Mixed-Use",
    location: "Bommanahalli, Bangalore",
    year: "2022",
    client: "SB Urbanscapes",
    projectType: "Urban Residential",
    description:
      "Urban residential development featuring contemporary GRC elements, modern architecture, and city living amenities. The project addresses urban housing needs with emphasis on space optimization and modern lifestyle requirements.",
    images: ["/images/project-1.png", "/images/project-5.png", "/images/residential-2.png"],
    features: [
      "Urban Living Design",
      "Contemporary GRC Elements",
      "Space Optimization",
      "Modern Amenities",
      "City Lifestyle Focus",
    ],
  },
  {
    id: 22,
    title: "Aashraya Projects",
    category: "Residential & Mixed-Use",
    location: "Hosakote, Bangalore",
    year: "2023",
    client: "Aashraya Developers",
    projectType: "Residential Development",
    description:
      "Residential development featuring affordable luxury GRC elements, practical design, and value-focused construction. The project provides quality housing with emphasis on affordability and long-term value.",
    images: ["/images/project-2.png", "/images/project-6.png", "/images/project-3.png"],
    features: [
      "Affordable Luxury",
      "Value-focused Construction",
      "Practical Design",
      "Quality Housing",
      "Long-term Value",
    ],
  },
  {
    id: 23,
    title: "Gopalan Florenza",
    category: "Residential & Mixed-Use",
    location: "Bangalore, Karnataka",
    year: "2022",
    client: "Gopalan Enterprises",
    projectType: "Residential Complex",
    description:
      "Comprehensive residential development featuring diverse GRC architectural elements, landscaping features, and community amenities. The project creates a complete living ecosystem with emphasis on family-friendly design and community interaction spaces.",
    images: ["/images/project-4.png", "/images/residential-1.png", "/images/project-1.png"],
    features: [
      "Community Living",
      "Landscaping Elements",
      "Family-friendly Design",
      "GRC Architectural Features",
      "Residential Amenities",
    ],
  },
  {
    id: 24,
    title: "Gopalan Olympia",
    category: "Residential & Mixed-Use",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "Gopalan Enterprises",
    projectType: "Premium Residential",
    description:
      "Premium residential complex featuring Olympic-themed architecture, luxury GRC elements, and sports-focused amenities. The project combines residential living with recreational facilities and premium architectural design.",
    images: ["/images/project-5.png", "/images/project-2.png", "/images/residential-2.png"],
    features: [
      "Olympic-themed Architecture",
      "Luxury GRC Elements",
      "Sports-focused Amenities",
      "Premium Design",
      "Recreational Facilities",
    ],
  },
  {
    id: 25,
    title: "4 Square Realty",
    category: "Residential & Mixed-Use",
    location: "Rajarajeshwarinagar, Bangalore",
    year: "2022",
    client: "4 Square Realty",
    projectType: "Residential Project",
    description:
      "Modern residential project featuring geometric GRC design elements, contemporary architecture, and urban living solutions. The project emphasizes modern design principles and efficient space utilization.",
    images: ["/images/project-6.png", "/images/project-3.png", "/images/project-4.png"],
    features: [
      "Geometric Design Elements",
      "Contemporary Architecture",
      "Urban Living Solutions",
      "Modern Design Principles",
      "Efficient Space Utilization",
    ],
  },
  {
    id: 26,
    title: "Shriram Greenfield",
    category: "Residential & Mixed-Use",
    location: "Bidarahalli, Bangalore",
    year: "2023",
    client: "Shriram Properties",
    projectType: "Green Residential",
    description:
      "Eco-friendly residential development featuring sustainable GRC elements, green architecture, and environmentally conscious design. The project emphasizes sustainability and environmental responsibility in residential construction.",
    images: ["/images/project-1.png", "/images/residential-1.png", "/images/project-5.png"],
    features: [
      "Sustainable GRC Elements",
      "Green Architecture",
      "Environmentally Conscious Design",
      "Eco-friendly Construction",
      "Environmental Responsibility",
    ],
  },
  {
    id: 27,
    title: "Jay House",
    category: "Residential & Mixed-Use",
    location: "Coimbatore, Tamil Nadu",
    year: "2022",
    client: "Jay Constructions",
    projectType: "Individual Residence",
    description:
      "Custom individual residence featuring personalized GRC elements, unique architectural design, and luxury residential amenities. The project showcases bespoke residential architecture with attention to individual client requirements.",
    images: ["/images/project-2.png", "/images/project-6.png", "/images/residential-2.png"],
    features: [
      "Personalized GRC Elements",
      "Unique Architectural Design",
      "Luxury Residential Amenities",
      "Bespoke Architecture",
      "Individual Client Focus",
    ],
  },
  {
    id: 28,
    title: "MP Raghavendra House",
    category: "Residential & Mixed-Use",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "MP Raghavendra",
    projectType: "Private Residence",
    description:
      "Private residence featuring elegant GRC architectural elements, traditional design influences, and modern amenities. The project combines classical architectural elements with contemporary living requirements.",
    images: ["/images/project-3.png", "/images/project-1.png", "/images/project-4.png"],
    features: [
      "Elegant GRC Elements",
      "Traditional Design Influences",
      "Modern Amenities",
      "Classical Architecture",
      "Contemporary Living",
    ],
  },
  {
    id: 29,
    title: "Urban Field Realty",
    category: "Residential & Mixed-Use",
    location: "Whitefield, Bangalore",
    year: "2023",
    client: "Urban Field Realty",
    projectType: "Urban Residential",
    description:
      "Urban residential development in Whitefield featuring modern GRC elements, tech-city architecture, and professional living amenities. The project caters to IT professionals and urban lifestyle requirements.",
    images: ["/images/project-5.png", "/images/residential-1.png", "/images/project-2.png"],
    features: [
      "Tech-city Architecture",
      "Professional Living Amenities",
      "Modern GRC Elements",
      "IT Professional Focus",
      "Urban Lifestyle Design",
    ],
  },

  // Commercial & Office Spaces
  {
    id: 30,
    title: "RBR Corporate Office",
    category: "Commercial & Office Spaces",
    location: "Koramangala, Bangalore",
    year: "2023",
    client: "RBR Group",
    projectType: "Corporate Office",
    description:
      "Modern corporate office building featuring professional GRC facades, architectural panels, and contemporary design elements. The project creates an impressive business environment that reflects corporate success while providing functional workspace solutions.",
    images: ["/images/commercial-1.png", "/images/project-2.png", "/images/project-4.png"],
    features: [
      "Corporate Architecture",
      "Professional GRC Facades",
      "Modern Office Design",
      "Business Environment",
      "Contemporary Elements",
    ],
  },
  {
    id: 31,
    title: "Aiykar Bhavan",
    category: "Commercial & Office Spaces",
    location: "Kochi, Kerala",
    year: "2022",
    client: "Income Tax Department",
    projectType: "Government Office",
    description:
      "Government office complex featuring institutional-grade GRC elements, durable finishes, and professional architecture. The project meets government construction standards while creating an efficient workspace environment for public service delivery.",
    images: ["/images/commercial-2.png", "/images/project-5.png", "/images/project-1.png"],
    features: [
      "Government Standards",
      "Institutional Architecture",
      "Durable GRC Elements",
      "Professional Environment",
      "Public Service Design",
    ],
  },
  {
    id: 32,
    title: "Green Finch Properties",
    category: "Commercial & Office Spaces",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "Green Finch Properties Private Ltd",
    projectType: "Commercial Building",
    description:
      "Commercial building featuring eco-friendly GRC elements, sustainable architecture, and green building principles. The project emphasizes environmental responsibility in commercial construction.",
    images: ["/images/project-6.png", "/images/commercial-1.png", "/images/project-3.png"],
    features: [
      "Eco-friendly GRC Elements",
      "Sustainable Architecture",
      "Green Building Principles",
      "Environmental Responsibility",
      "Commercial Sustainability",
    ],
  },
  {
    id: 33,
    title: "Capstone Office Complex",
    category: "Commercial & Office Spaces",
    location: "Bommasandra, Bangalore",
    year: "2022",
    client: "Capstone Developers",
    projectType: "IT Office Complex",
    description:
      "IT office complex featuring modern GRC elements, technology-focused architecture, and professional workspace design. The project caters to technology companies and modern business requirements.",
    images: ["/images/project-1.png", "/images/project-4.png", "/images/commercial-2.png"],
    features: [
      "Technology-focused Architecture",
      "Modern GRC Elements",
      "Professional Workspace Design",
      "IT Company Focus",
      "Modern Business Requirements",
    ],
  },
  {
    id: 34,
    title: "Pavanputra Convention Hall",
    category: "Commercial & Office Spaces",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "Pavanputra Events",
    projectType: "Convention Center",
    description:
      "Convention hall featuring impressive GRC architectural elements, event-focused design, and large-span construction. The project creates a versatile venue for corporate events, conferences, and business gatherings.",
    images: ["/images/project-2.png", "/images/project-5.png", "/images/project-6.png"],
    features: [
      "Event-focused Design",
      "Impressive GRC Elements",
      "Large-span Construction",
      "Versatile Venue",
      "Corporate Event Focus",
    ],
  },

  // Hospitality & Leisure Projects
  {
    id: 35,
    title: "Lamarvella Hotel",
    category: "Hospitality & Leisure",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "Lamarvella Hotels",
    projectType: "Luxury Hotel",
    description:
      "Luxury hotel featuring elegant GRC architectural elements, decorative facades, and hospitality-focused design. The project creates a premium guest experience through sophisticated architecture, attention to detail, and high-quality finishes that reflect luxury hospitality standards.",
    images: ["/images/project-3.png", "/images/project-1.png", "/images/commercial-1.png"],
    features: [
      "Luxury Hotel Design",
      "Elegant GRC Elements",
      "Hospitality Architecture",
      "Premium Guest Experience",
      "Sophisticated Finishes",
    ],
  },
  {
    id: 36,
    title: "Renaissance Hotel",
    category: "Hospitality & Leisure",
    location: "Race Course Road, Bangalore",
    year: "2022",
    client: "Marriott International",
    projectType: "International Hotel Chain",
    description:
      "International standard hotel featuring world-class GRC architectural elements, luxury finishes, and hospitality design excellence. The project meets global hospitality standards while incorporating local architectural influences and climate-appropriate materials.",
    images: ["/images/project-4.png", "/images/commercial-2.png", "/images/project-2.png"],
    features: [
      "International Standards",
      "World-class Architecture",
      "Luxury Hospitality",
      "Global Design Excellence",
      "Climate-appropriate Materials",
    ],
  },
  {
    id: 37,
    title: "Chennai Le-Classic Hotel",
    category: "Hospitality & Leisure",
    location: "Porur, Chennai",
    year: "2023",
    client: "Le-Classic Hotels",
    projectType: "Business Hotel",
    description:
      "Business hotel featuring professional GRC elements, corporate hospitality design, and business traveler amenities. The project caters to business travelers with emphasis on functionality and professional service.",
    images: ["/images/project-5.png", "/images/project-3.png", "/images/project-6.png"],
    features: [
      "Business Hotel Design",
      "Professional GRC Elements",
      "Corporate Hospitality",
      "Business Traveler Focus",
      "Functional Design",
    ],
  },
  {
    id: 38,
    title: "Marriott Courtyard",
    category: "Hospitality & Leisure",
    location: "Bangalore, Karnataka",
    year: "2022",
    client: "Marriott International",
    projectType: "Courtyard Hotel",
    description:
      "Courtyard hotel featuring contemporary GRC elements, modern hospitality design, and international hotel standards. The project provides comfortable accommodation with emphasis on modern amenities and guest satisfaction.",
    images: ["/images/project-1.png", "/images/project-4.png", "/images/commercial-1.png"],
    features: [
      "Contemporary GRC Elements",
      "Modern Hospitality Design",
      "International Standards",
      "Modern Amenities",
      "Guest Satisfaction Focus",
    ],
  },
  {
    id: 39,
    title: "Hilton Hotel",
    category: "Hospitality & Leisure",
    location: "Goa",
    year: "2023",
    client: "Hilton Hotels",
    projectType: "Resort Hotel",
    description:
      "Resort hotel featuring tropical GRC elements, coastal architecture, and luxury resort amenities. The project creates a premium vacation experience with emphasis on tropical luxury and coastal living.",
    images: ["/images/project-2.png", "/images/project-5.png", "/images/project-1.png"],
    features: [
      "Tropical GRC Elements",
      "Coastal Architecture",
      "Luxury Resort Amenities",
      "Premium Vacation Experience",
      "Tropical Luxury Design",
    ],
  },
  {
    id: 40,
    title: "Tamara Resort",
    category: "Hospitality & Leisure",
    location: "Coorg, Karnataka",
    year: "2022",
    client: "Tamara Resorts",
    projectType: "Hill Station Resort",
    description:
      "Hill station resort featuring nature-inspired GRC elements, eco-friendly architecture, and mountain resort amenities. The project blends with natural surroundings while providing luxury accommodation.",
    images: ["/images/project-3.png", "/images/project-6.png", "/images/project-4.png"],
    features: [
      "Nature-inspired GRC Elements",
      "Eco-friendly Architecture",
      "Mountain Resort Amenities",
      "Natural Surroundings Integration",
      "Luxury Mountain Accommodation",
    ],
  },
  {
    id: 41,
    title: "Taj West End",
    category: "Hospitality & Leisure",
    location: "Race Course Road, Bangalore",
    year: "2023",
    client: "Taj Hotels",
    projectType: "Heritage Luxury Hotel",
    description:
      "Prestigious heritage hotel renovation featuring restoration-grade GRC elements, period-appropriate architectural details, and luxury hospitality finishes. The project preserves historical character while upgrading facilities to modern luxury standards.",
    images: ["/images/project-4.png", "/images/project-2.png", "/images/commercial-1.png"],
    features: [
      "Heritage Restoration",
      "Luxury Hotel Standards",
      "Period Architecture",
      "Historical Preservation",
      "Modern Luxury Amenities",
    ],
  },
  {
    id: 42,
    title: "Leroma Hotel",
    category: "Hospitality & Leisure",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "Leroma Hotels",
    projectType: "Boutique Hotel",
    description:
      "Boutique hotel featuring unique GRC elements, personalized hospitality design, and intimate accommodation experience. The project creates a distinctive hotel experience with emphasis on individual character and personalized service.",
    images: ["/images/project-5.png", "/images/project-1.png", "/images/project-3.png"],
    features: [
      "Unique GRC Elements",
      "Personalized Hospitality Design",
      "Intimate Accommodation",
      "Distinctive Hotel Experience",
      "Individual Character",
    ],
  },
  {
    id: 43,
    title: "Hotel Empire",
    category: "Hospitality & Leisure",
    location: "South End Circle, Bangalore",
    year: "2022",
    client: "Hotel Empire",
    projectType: "City Hotel",
    description:
      "City hotel featuring urban GRC elements, metropolitan hospitality design, and city center amenities. The project serves urban travelers with emphasis on convenience and city accessibility.",
    images: ["/images/project-6.png", "/images/project-4.png", "/images/project-2.png"],
    features: [
      "Urban GRC Elements",
      "Metropolitan Hospitality Design",
      "City Center Amenities",
      "Urban Traveler Focus",
      "City Accessibility",
    ],
  },
  {
    id: 44,
    title: "Soho and Sky",
    category: "Hospitality & Leisure",
    location: "Jakkur, Bangalore",
    year: "2023",
    client: "Soho Hospitality",
    projectType: "Modern Hotel",
    description:
      "Modern hotel featuring contemporary GRC elements, sky-themed architecture, and modern hospitality amenities. The project creates a modern accommodation experience with emphasis on contemporary design and amenities.",
    images: ["/images/project-1.png", "/images/project-5.png", "/images/commercial-2.png"],
    features: [
      "Contemporary GRC Elements",
      "Sky-themed Architecture",
      "Modern Hospitality Amenities",
      "Contemporary Design",
      "Modern Accommodation",
    ],
  },
  {
    id: 45,
    title: "Manyavar Showroom",
    category: "Hospitality & Leisure",
    location: "Jayanagar 4th Block, Bangalore",
    year: "2022",
    client: "Manyavar",
    projectType: "Retail Showroom",
    description:
      "Fashion retail showroom featuring elegant GRC elements, luxury retail design, and premium shopping experience. The project creates an upscale shopping environment for traditional Indian fashion.",
    images: ["/images/project-2.png", "/images/project-6.png", "/images/project-3.png"],
    features: [
      "Elegant GRC Elements",
      "Luxury Retail Design",
      "Premium Shopping Experience",
      "Traditional Fashion Focus",
      "Upscale Shopping Environment",
    ],
  },
  {
    id: 46,
    title: "Indian Tiffin Club",
    category: "Hospitality & Leisure",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "Indian Tiffin Club",
    projectType: "Restaurant",
    description:
      "Traditional restaurant featuring cultural GRC elements, Indian architectural design, and authentic dining atmosphere. The project creates an authentic Indian dining experience with emphasis on cultural architecture.",
    images: ["/images/project-3.png", "/images/project-1.png", "/images/project-4.png"],
    features: [
      "Cultural GRC Elements",
      "Indian Architectural Design",
      "Authentic Dining Atmosphere",
      "Traditional Restaurant Design",
      "Cultural Architecture Focus",
    ],
  },

  // Retail, Events & Conventions
  {
    id: 47,
    title: "Nesto Hypermarket",
    category: "Retail, Events & Conventions",
    location: "Kottekal, Kerala",
    year: "2023",
    client: "Nesto Group",
    projectType: "Hypermarket",
    description:
      "Large-scale hypermarket featuring commercial-grade GRC elements, retail architecture, and high-traffic design. The project creates an efficient shopping environment with emphasis on customer flow and retail functionality.",
    images: ["/images/project-4.png", "/images/project-2.png", "/images/commercial-1.png"],
    features: [
      "Commercial-grade GRC Elements",
      "Retail Architecture",
      "High-traffic Design",
      "Efficient Shopping Environment",
      "Retail Functionality Focus",
    ],
  },
  {
    id: 48,
    title: "Royal Convention Hall",
    category: "Retail, Events & Conventions",
    location: "Mysore, Karnataka",
    year: "2023",
    client: "Royal Convention Centre",
    projectType: "Convention Center",
    description:
      "Grand convention center featuring impressive GRC architectural elements, large-span structures, and event-focused design. The project creates a versatile venue suitable for conferences, weddings, and cultural events with emphasis on acoustic performance and visual appeal.",
    images: ["/images/project-5.png", "/images/project-6.png", "/images/project-1.png"],
    features: [
      "Convention Architecture",
      "Large-span Structures",
      "Event-focused Design",
      "Acoustic Performance",
      "Versatile Venue Design",
    ],
  },
  {
    id: 49,
    title: "Regal Jewellers Showroom",
    category: "Retail, Events & Conventions",
    location: "Bangalore, Karnataka",
    year: "2022",
    client: "Regal Jewellers",
    projectType: "Luxury Retail",
    description:
      "Luxury jewelry showroom featuring premium GRC elements, sophisticated display architecture, and high-end retail design. The project creates an exclusive shopping environment that reflects the prestige of fine jewelry while ensuring security and customer comfort.",
    images: ["/images/project-6.png", "/images/project-3.png", "/images/commercial-2.png"],
    features: [
      "Luxury Retail Design",
      "Premium GRC Elements",
      "Sophisticated Architecture",
      "Security-focused Design",
      "Exclusive Shopping Environment",
    ],
  },
  {
    id: 50,
    title: "Arabian Gold and Diamond",
    category: "Retail, Events & Conventions",
    location: "Kochi, Kerala",
    year: "2023",
    client: "Arabian Gold and Diamond",
    projectType: "Jewelry Showroom",
    description:
      "Luxury jewelry showroom featuring Arabian-inspired GRC elements, traditional Middle Eastern architecture, and premium retail design. The project combines cultural architectural elements with modern retail functionality.",
    images: ["/images/project-1.png", "/images/project-4.png", "/images/project-2.png"],
    features: [
      "Arabian-inspired GRC Elements",
      "Traditional Middle Eastern Architecture",
      "Premium Retail Design",
      "Cultural Architecture",
      "Modern Retail Functionality",
    ],
  },
  {
    id: 51,
    title: "Sri Muthalli Party Hall",
    category: "Retail, Events & Conventions",
    location: "Bangalore, Karnataka",
    year: "2022",
    client: "Sri Muthalli Events",
    projectType: "Party Hall",
    description:
      "Party hall featuring festive GRC elements, celebration-focused architecture, and event venue design. The project creates a joyful environment for celebrations with emphasis on cultural events and social gatherings.",
    images: ["/images/project-3.png", "/images/project-5.png", "/images/project-6.png"],
    features: [
      "Festive GRC Elements",
      "Celebration-focused Architecture",
      "Event Venue Design",
      "Cultural Events Focus",
      "Social Gathering Spaces",
    ],
  },
  {
    id: 52,
    title: "Tarangini Complex",
    category: "Retail, Events & Conventions",
    location: "Jayanagar, Bangalore",
    year: "2023",
    client: "Tarangini Developers",
    projectType: "Mixed-use Complex",
    description:
      "Mixed-use complex featuring versatile GRC elements, multi-functional architecture, and commercial-residential integration. The project combines retail, office, and residential spaces in a unified architectural design.",
    images: ["/images/project-4.png", "/images/project-1.png", "/images/project-3.png"],
    features: [
      "Versatile GRC Elements",
      "Multi-functional Architecture",
      "Commercial-residential Integration",
      "Mixed-use Design",
      "Unified Architectural Concept",
    ],
  },
  {
    id: 53,
    title: "B-More Shopping Complex",
    category: "Retail, Events & Conventions",
    location: "Bangalore, Karnataka",
    year: "2022",
    client: "B-More Retail",
    projectType: "Shopping Complex",
    description:
      "Shopping complex featuring modern GRC elements, retail-focused architecture, and customer-centric design. The project creates an engaging shopping experience with emphasis on retail efficiency and customer comfort.",
    images: ["/images/project-5.png", "/images/project-2.png", "/images/commercial-1.png"],
    features: [
      "Modern GRC Elements",
      "Retail-focused Architecture",
      "Customer-centric Design",
      "Engaging Shopping Experience",
      "Retail Efficiency Focus",
    ],
  },

  // Infrastructure & Public Works
  {
    id: 54,
    title: "KBN Infrastructure",
    category: "Infrastructure & Public Works",
    location: "Kalburgi, Karnataka",
    year: "2023",
    client: "Karnataka Building Network",
    projectType: "Public Infrastructure",
    description:
      "Public infrastructure project featuring heavy-duty GRC elements, government construction standards, and public utility design. The project serves community infrastructure needs with emphasis on durability and public service.",
    images: ["/images/project-6.png", "/images/project-4.png", "/images/project-1.png"],
    features: [
      "Heavy-duty GRC Elements",
      "Government Construction Standards",
      "Public Utility Design",
      "Community Infrastructure",
      "Public Service Focus",
    ],
  },
  {
    id: 55,
    title: "Tuticorin Airport Works",
    category: "Infrastructure & Public Works",
    location: "Tuticorin, Tamil Nadu",
    year: "2023",
    client: "Airports Authority of India",
    projectType: "Airport Infrastructure",
    description:
      "Airport terminal facility featuring aviation-grade GRC elements, weather-resistant construction, and infrastructure design standards. The project meets aviation industry requirements while creating a welcoming gateway that reflects regional architectural character.",
    images: ["/images/project-2.png", "/images/project-5.png", "/images/commercial-1.png"],
    features: [
      "Aviation Standards",
      "Weather Resistant Construction",
      "Infrastructure Grade Materials",
      "Regional Architecture",
      "Gateway Design",
    ],
  },
  {
    id: 56,
    title: "Sandur Manganese Iron Ores",
    category: "Infrastructure & Public Works",
    location: "Sandur, Karnataka",
    year: "2022",
    client: "Sandur Manganese & Iron Ores Ltd",
    projectType: "Industrial Infrastructure",
    description:
      "Industrial facility featuring heavy-duty GRC and FRP elements designed for mining industry applications. The project includes chemical-resistant surfaces, industrial-grade construction, and specialized architectural elements suitable for harsh industrial environments.",
    images: ["/images/industrial-1.png", "/images/project-3.png", "/images/project-6.png"],
    features: [
      "Industrial Grade Construction",
      "Chemical Resistant Materials",
      "Mining Industry Standards",
      "Heavy-duty Applications",
      "Harsh Environment Design",
    ],
  },
  {
    id: 57,
    title: "BEL Infrastructure",
    category: "Infrastructure & Public Works",
    location: "Kadubeesenahalli, Bangalore",
    year: "2023",
    client: "Bharat Electronics Limited (RG Infra)",
    projectType: "Defense Infrastructure",
    description:
      "Defense infrastructure project featuring specialized GRC elements, security-focused design, and defense industry standards. The project serves defense manufacturing needs with emphasis on security and industrial functionality.",
    images: ["/images/project-4.png", "/images/project-1.png", "/images/industrial-2.png"],
    features: [
      "Specialized GRC Elements",
      "Security-focused Design",
      "Defense Industry Standards",
      "Defense Manufacturing Focus",
      "Industrial Functionality",
    ],
  },
]

const categories = [
  "All",
  "Government & Institutional",
  "Healthcare",
  "Education & Research",
  "Religious & Community",
  "Residential & Mixed-Use",
  "Commercial & Office Spaces",
  "Hospitality & Leisure",
  "Retail, Events & Conventions",
  "Infrastructure & Public Works",
]

export default function Gallery() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
    }
  }

  const handleContactRedirect = () => {
    closeModal()
    router.push("/contact")
  }

  return (
    <section id="gallery" className="py-16 md:py-24 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gold-500 text-dark-primary rounded-full text-sm font-bold mb-6 shadow-lg">
              Our Portfolio
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-primary">Project Gallery</h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-4xl mx-auto">
              Explore our extensive portfolio of 57+ completed GRC & FRP projects across India, spanning government
              institutions, healthcare facilities, religious complexes, luxury hotels, residential developments, and
              major infrastructure projects including prestigious clients like Brigade Group, Taj Hotels, Marriott,
              Hilton, DRDO, and many more.
            </p>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-6xl mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gold-500 text-dark-primary shadow-lg"
                    : "bg-dark-primary text-text-secondary hover:bg-dark-accent border border-dark-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <StaggerIn direction="up" staggerDelay={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="bg-dark-primary border border-dark-accent rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                        <ZoomIn className="h-8 w-8 mx-auto mb-2" />
                        <p className="text-sm font-medium">View Details</p>
                      </div>
                    </div>

                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-500 text-dark-primary px-3 py-1 rounded-full text-xs font-bold">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">{project.title}</h3>
                      <p className="text-white/80 text-sm flex items-center mb-1">
                        <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                        {project.location}
                      </p>
                      <p className="text-white/70 text-xs">{project.projectType}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-text-secondary text-sm line-clamp-3 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between text-xs text-text-secondary">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {project.year}
                      </span>
                      <span className="flex items-center truncate ml-2">
                        <Building className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span className="truncate">{project.client}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerIn>

        {/* Project Count Display */}
        <div className="text-center mt-12">
          <p className="text-text-secondary">
            Showing <span className="text-gold-500 font-semibold">{filteredProjects.length}</span> projects
            {selectedCategory !== "All" && (
              <span>
                {" "}
                in <span className="text-gold-500 font-semibold">{selectedCategory}</span>
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-primary border border-dark-accent rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between p-4 sm:p-6 border-b border-dark-accent">
                <div className="flex-1 pr-4">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-text-secondary mb-2">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                      {selectedProject.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                      {selectedProject.year}
                    </span>
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1 flex-shrink-0" />
                      {selectedProject.client}
                    </span>
                  </div>
                  <span className="inline-block bg-gold-500 text-dark-primary px-3 py-1 rounded-full text-xs font-bold">
                    {selectedProject.projectType}
                  </span>
                </div>
                <button
                  onClick={closeModal}
                  className="bg-dark-accent hover:bg-red-600 p-2 rounded-full transition-colors flex-shrink-0"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-8 p-4 sm:p-6">
                {/* Image Section */}
                <div className="space-y-4">
                  <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden">
                    <Image
                      src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Navigation Buttons */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 sm:p-3 rounded-full transition-colors"
                        >
                          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 sm:p-3 rounded-full transition-colors"
                        >
                          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-white text-xs sm:text-sm">
                          {currentImageIndex + 1} / {selectedProject.images.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Navigation */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                      {selectedProject.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                            index === currentImageIndex
                              ? "border-gold-500 scale-105"
                              : "border-dark-accent hover:border-gold-500/50"
                          }`}
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <div className="max-h-48 sm:max-h-64 overflow-y-auto">
                      <p className="text-text-secondary leading-relaxed">{selectedProject.description}</p>
                    </div>
                  </div>

                  {/* Project Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-dark-secondary rounded-xl">
                    <div>
                      <h4 className="text-gold-500 font-semibold mb-2">Location</h4>
                      <p className="text-text-secondary text-sm">{selectedProject.location}</p>
                    </div>
                    <div>
                      <h4 className="text-gold-500 font-semibold mb-2">Year</h4>
                      <p className="text-text-secondary text-sm">{selectedProject.year}</p>
                    </div>
                    <div>
                      <h4 className="text-gold-500 font-semibold mb-2">Client</h4>
                      <p className="text-text-secondary text-sm">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h4 className="text-gold-500 font-semibold mb-2">Project Type</h4>
                      <p className="text-text-secondary text-sm">{selectedProject.projectType}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-gold-500 font-semibold mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-text-secondary">
                          <div className="w-2 h-2 bg-gold-500 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-dark-accent">
                    <a
                      href="tel:+917892142197"
                      className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors font-medium"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                    <button
                      onClick={handleContactRedirect}
                      className="flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-dark-primary px-4 py-3 rounded-lg transition-colors font-medium"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
