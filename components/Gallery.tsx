"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Calendar, User, Building, ZoomIn, Image as ImageIcon, Video } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerIn } from "@/components/animations/stagger-in"
import VideoSection from "./VideoSection"

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
    title: "TDP Office",
    category: "Government & Institutional",
    location: "Kaliyanadurga, Andhra Pradesh",
    year: "2023",
    client: "Telugu Desam Party",
    projectType: "Political Office",
    description:
      "Political party office featuring modern GRC architectural elements, professional facades, and durable construction. The project creates an impressive political headquarters with emphasis on public accessibility and professional appearance.",
    images: ["/images/tdpoffice1.jpg", "/images/tdpoffice2.jpg", "/images/tdpoffice3.jpg", "/images/tdpoffice4.jpg"],
    features: [
      "Modern Political Architecture",
      "Professional GRC Facades",
      "Public Access Design",
      "Durable Construction",
      "Weather Resistant Elements",
    ],
  },
  {
    id: 2,
    title: "Janatha Bazar – Basavanabagevadi",
    category: "Government & Institutional",
    location: "Basavanabagevadi, Karnataka",
    year: "2023",
    client: "Municipal Corporation",
    projectType: "Public Market Infrastructure",
    description:
      "Community market complex featuring durable GRC elements, functional design, and public-friendly architecture. The project serves as a local commercial hub with emphasis on community needs and sustainable construction.",
    images: ["/images/JanathaB1.jpg", "/images/Janatha2.jpg"],
    features: [
      "Community Market Design",
      "Functional GRC Elements",
      "Public-friendly Architecture",
      "Sustainable Construction",
      "Local Commercial Hub",
    ],
  },
  {
    id: 3,
    title: "Aiykar Bhavan – Kochi",
    category: "Government & Institutional",
    location: "Kochi, Kerala",
    year: "2022",
    client: "Income Tax Department",
    projectType: "Government Office",
    description:
      "Government office complex featuring institutional-grade GRC elements, durable finishes, and professional architecture. The project meets government construction standards while creating an efficient workspace environment for public service delivery.",
    images: ["/images/income1.jpg", "/images/income2.jpg", "/images/income3.jpg", "/images/income4.jpg"],
    features: [
      "Government Standards",
      "Institutional Architecture",
      "Durable GRC Elements",
      "Professional Environment",
      "Public Service Design",
    ],
  },

  // Healthcare Projects
  {
    id: 4,
    title: "CMH Hospital – Kolar",
    category: "Healthcare",
    location: "Kolar, Karnataka",
    year: "2022",
    client: "Command Hospital",
    projectType: "Military Medical Infrastructure",
    description:
      "Military hospital facility featuring specialized GRC and FRP elements designed for medical applications. The project includes antimicrobial surfaces, chemical-resistant materials, and architectural elements that support the unique requirements of military medical facilities.",
    images: ["/images/CMH Hospital .jpg"],
    features: [
      "Antimicrobial Surfaces",
      "Chemical Resistant",
      "Military Standards",
      "Medical Grade Materials",
      "Specialized Healthcare Design",
    ],
  },
  {
    id: 5,
    title: "Victoria Hospital – Bengaluru",
    category: "Healthcare",
    location: "Bengaluru, Karnataka",
    year: "2023",
    client: "Government of Karnataka",
    projectType: "Heritage Hospital Renovation",
    description:
      "Historic hospital renovation featuring heritage-compatible GRC elements that blend seamlessly with existing architecture. The project required careful restoration techniques, color matching, and specialized finishes to preserve the hospital's historical character while upgrading functionality.",
    images: ["/images/victoriahospital.jpg"],
    features: [
      "Heritage Restoration",
      "Color Matching",
      "Historical Preservation",
      "Modern Functionality",
      "Specialized Renovation Techniques",
    ],
  },
  {
    id: 6,
    title: "KBN Hospital – Kalburgi",
    category: "Healthcare",
    location: "Kalburgi, Karnataka",
    year: "2023",
    client: "KBN Hospital Trust",
    projectType: "Multi-specialty Hospital",
    description:
      "Modern multi-specialty hospital featuring advanced medical infrastructure with hygienic GRC elements, specialized healthcare design, and patient-centric architecture. The project creates a comprehensive healthcare facility with emphasis on medical excellence, patient comfort, and modern healthcare standards.",
    images: ["/images/kbn2.jpg", "/images/kbn1.jpg", "/images/kbn3.jpg"],
    features: [
      "Multi-specialty Healthcare Design",
      "Hygienic GRC Elements",
      "Patient-centric Architecture",
      "Medical Excellence Standards",
      "Modern Healthcare Infrastructure",
    ],
  },
  {
    id: 7,
    title: "Veterinary College – Athani",
    category: "Healthcare",
    location: "Athani, Karnataka",
    year: "2022",
    client: "Karnataka Veterinary University",
    projectType: "Veterinary Education",
    description:
      "Specialized veterinary education facility featuring laboratory-grade GRC elements, research-focused architecture, and animal-friendly design. The project includes specialized surfaces for veterinary applications and research facilities.",
    images: ["/images/veterinarycollage.jpg","/images/vc2.png","/images/vc3.png"],
    features: [
      "Laboratory-grade Materials",
      "Research-focused Design",
      "Animal-friendly Architecture",
      "Specialized Veterinary Surfaces",
      "Educational Research Facilities",
    ],
  },

  // Residential & Mixed-Use Projects
  {
    id: 9,
    title: "Shriram Greenfield – Bidarahalli",
    category: "Residential & Mixed-Use",
    location: "Bidarahalli, Bangalore",
    year: "2023",
    client: "Shriram Properties",
    projectType: "Green Residential",
    description:
      "Eco-friendly residential development featuring sustainable GRC elements, green architecture, and environmentally conscious design. The project emphasizes sustainability and environmental responsibility in residential construction.",
    images: ["/images/sriram1.jpg", "/images/sriram2.jpg", "/images/sriram3.jpg"],
    features: [
      "Sustainable GRC Elements",
      "Green Architecture",
      "Environmentally Conscious Design",
      "Eco-friendly Construction",
      "Environmental Responsibility",
    ],
  },
  {
    id: 10,
    title: "Aero One – Devanahalli",
    category: "Residential & Mixed-Use",
    location: "Devanahalli, Bangalore",
    year: "2023",
    client: "Aero One Developers",
    projectType: "Airport City Residential",
    description:
      "Premium residential development near Bangalore International Airport featuring aviation-themed GRC elements, modern architecture, and airport city living amenities. The project creates a unique living experience with emphasis on connectivity, luxury amenities, and contemporary design for airport professionals and travelers.",
    images: ["/images/aero1.jpg", "/images/aero2.jpg", "/images/aero3.jpg", "/images/aero4.jpg"],
    features: [
      "Airport City Living",
      "Aviation-themed GRC Elements",
      "Modern Residential Architecture",
      "Premium Amenities",
      "Airport Connectivity Focus",
    ],
  },

  // Commercial & Office Spaces
  {
    id: 11,
    title: "Courtyard Marriott – Bengaluru",
    category: "Commercial & Office Spaces",
    location: "Bengaluru, Karnataka",
    year: "2023",
    client: "Marriott International",
    projectType: "Hotel & Hospitality",
    description:
      "Premium hotel project featuring elegant GRC architectural elements, luxury hospitality design, and international hotel standards. The project creates a sophisticated accommodation experience with emphasis on modern amenities, professional service, and contemporary architectural excellence.",
    images: ["/images/cym.jpg", "/images/cym2.jpg", "/images/cmy3.jpg"],
    features: [
      "Luxury Hotel Architecture",
      "Professional GRC Facades",
      "International Standards",
      "Hospitality Excellence",
      "Contemporary Design Elements",
    ],
  },

  // Hospitality & Leisure Projects
  {
    id: 12,
    title: "Renaissance – Race Course Road",
    category: "Hospitality & Leisure",
    location: "Race Course Road, Bangalore",
    year: "2022",
    client: "Marriott International",
    projectType: "International Hotel Chain",
    description:
      "International standard hotel featuring world-class GRC architectural elements, luxury finishes, and hospitality design excellence. The project meets global hospitality standards while incorporating local architectural influences and climate-appropriate materials.",
    images: ["/images/racecourse3.jpg"],
    features: [
      "International Standards",
      "World-class Architecture",
      "Luxury Hospitality",
      "Global Design Excellence",
      "Climate-appropriate Materials",
    ],
  },

  {
    id: 14,
    title: "Manyavar – Jayanagar 4th Block",
    category: "Hospitality & Leisure",
    location: "Jayanagar 4th Block, Bangalore",
    year: "2022",
    client: "Manyavar",
    projectType: "Retail Showroom",
    description:
      "Fashion retail showroom featuring elegant GRC elements, luxury retail design, and premium shopping experience. The project creates an upscale shopping environment for traditional Indian fashion.",
    images: ["/images/manyavar.jpg"],
    features: [
      "Elegant GRC Elements",
      "Luxury Retail Design",
      "Premium Shopping Experience",
      "Traditional Fashion Focus",
      "Upscale Shopping Environment",
    ],
  },
  {
    id: 15,
    title: "Indian Tiffen Club",
    category: "Hospitality & Leisure",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "Indian Tiffin Club",
    projectType: "Restaurant",
    description:
      "Traditional restaurant featuring cultural GRC elements, Indian architectural design, and authentic dining atmosphere. The project creates an authentic Indian dining experience with emphasis on cultural architecture.",
    images: ["/images/indian1.jpg", "/images/indian2.jpg", "/images/indian3.jpg"],
    features: [
      "Cultural GRC Elements",
      "Indian Architectural Design",
      "Authentic Dining Atmosphere",
      "Traditional Restaurant Design",
      "Cultural Architecture Focus",
    ],
  },

  // Retail and Conventions
  {
    id: 16,
    title: "Royal Convention Hall – Mysore",
    category: "Retail and Conventions",
    location: "Mysore, Karnataka",
    year: "2023",
    client: "Royal Convention Centre",
    projectType: "Convention Center",
    description:
      "Grand convention center featuring impressive GRC architectural elements, large-span structures, and event-focused design. The project creates a versatile venue suitable for conferences, weddings, and cultural events with emphasis on acoustic performance and visual appeal.",
    images: ["/images/royal1.jpg", "/images/royal2.jpg"],
    features: [
      "Convention Architecture",
      "Large-span Structures",
      "Event-focused Design",
      "Acoustic Performance",
      "Versatile Venue Design",
    ],
  },
  {
    id: 17,
    title: "Regal Jewellers – Bangalore",
    category: "Retail and Conventions",
    location: "Bangalore, Karnataka",
    year: "2022",
    client: "Regal Jewellers",
    projectType: "Luxury Retail",
    description:
      "Luxury jewelry showroom featuring premium GRC elements, sophisticated display architecture, and high-end retail design. The project creates an exclusive shopping environment that reflects the prestige of fine jewelry while ensuring security and customer comfort.",
    images: ["/images/regal1.jpg", "/images/regal2.jpg"],
    features: [
      "Luxury Retail Design",
      "Premium GRC Elements",
      "Sophisticated Architecture",
      "Security-focused Design",
      "Exclusive Shopping Environment",
    ],
  },
  {
    id: 18,
    title: "Arabian Gold & Diamond – Kochi",
    category: "Retail and Conventions",
    location: "Kochi, Kerala",
    year: "2023",
    client: "Arabian Gold and Diamond",
    projectType: "Jewelry Showroom",
    description:
      "Luxury jewelry showroom featuring Arabian-inspired GRC elements, traditional Middle Eastern architecture, and premium retail design. The project combines cultural architectural elements with modern retail functionality.",
    images: ["/images/agd.jpg"],
    features: [
      "Arabian-inspired GRC Elements",
      "Traditional Middle Eastern Architecture",
      "Premium Retail Design",
      "Cultural Architecture",
      "Modern Retail Functionality",
    ],
  },
  {
    id: 19,
    title: "Princess Golf",
    category: "Retail and Conventions",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "Princess Golf Club",
    projectType: "Golf Club & Recreation",
    description:
      "Premium golf club facility featuring elegant GRC architectural elements, sports-focused design, and luxury recreational amenities. The project creates an exclusive sports environment with emphasis on premium facilities and architectural excellence.",
    images: ["/images/princess2.jpg", "/images/princess3.jpg", "/images/princess4.jpg", "/images/princess5.jpg", "/images/princess6.jpg" , "/images/princess7.jpg"],
    features: [
      "Golf Club Architecture",
      "Sports-focused Design",
      "Luxury Recreational Amenities",
      "Exclusive Sports Environment",
      "Premium Facilities",
    ],
  },
  {
    id: 20,
    title: "Venkatamma Ramaiah Kalyana Soudha",
    category: "Retail and Conventions",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "Venkatamma Ramaiah Trust",
    projectType: "Wedding Hall & Event Center",
    description:
      "Traditional wedding hall and event center featuring cultural GRC elements, celebration-focused architecture, and versatile event spaces. The project creates a perfect venue for weddings, cultural events, and social gatherings with emphasis on traditional Indian architectural aesthetics and modern functionality.",
    images: ["/images/vrks1.jpg", "/images/vrks2.jpg", "/images/vrks3.jpg"],
    features: [
      "Traditional Wedding Hall Design",
      "Cultural GRC Elements",
      "Celebration-focused Architecture",
      "Versatile Event Spaces",
      "Traditional Indian Aesthetics",
    ],
  },

  // Infrastructure & Public Works
  {
    id: 21,
    title: "Sandur Manganese Iron Ores Pvt Ltd",
    category: "Infrastructure & Public Works",
    location: "Sandur, Karnataka",
    year: "2022",
    client: "Sandur Manganese & Iron Ores Ltd",
    projectType: "Industrial Infrastructure",
    description:
      "Industrial facility featuring heavy-duty GRC and FRP elements designed for mining industry applications. The project includes chemical-resistant surfaces, industrial-grade construction, and specialized architectural elements suitable for harsh industrial environments.",
    images: ["/images/sunder1.jpg", "/images/sunder2.jpg"],
    features: [
      "Industrial Grade Construction",
      "Chemical Resistant Materials",
      "Mining Industry Standards",
      "Heavy-duty Applications",
      "Harsh Environment Design",
    ],
  },

  {
    id: 23,
    title: "Bismilla Green Masjid",
    category: "Infrastructure & Public Works",
    location: "Bangalore, Karnataka",
    year: "2022",
    client: "Bismilla Green Masjid Trust",
    projectType: "Religious Infrastructure",
    description:
      "Beautiful mosque featuring traditional Islamic GRC architectural elements including ornate arches, decorative panels, and intricate geometric patterns. The project combines religious architectural traditions with modern construction techniques to create a spiritually inspiring space.",
    images: ["/images/bgm1.jpg", "/images/bgm2.jpg", "/images/bgm3.jpg"],
    features: [
      "Islamic Architecture",
      "Ornate GRC Arches",
      "Geometric Patterns",
      "Traditional Design",
      "Spiritual Environment",
    ],
  },
  {
    id: 24,
    title: "Infant Jesus Church",
    category: "Infrastructure & Public Works",
    location: "Viveknagar, Bangalore",
    year: "2023",
    client: "Infant Jesus Church Parish",
    projectType: "Church Infrastructure",
    description:
      "Sacred church facility featuring Gothic-inspired GRC elements, decorative facades, and architectural details that enhance the spiritual atmosphere. The project includes weather-resistant finishes and traditional church architectural elements adapted for local climate conditions.",
    images: ["/images/infant1.jpg", "/images/infant2.jpg", "/images/infant3.jpg"],
    features: [
      "Gothic-inspired Design",
      "Sacred Architecture",
      "Decorative GRC Facades",
      "Weather Resistant",
      "Traditional Church Elements",
    ],
  },
  {
    id: 25,
    title: "Coimbatore ISKCON",
    category: "Infrastructure & Public Works",
    location: "Coimbatore, Tamil Nadu",
    year: "2022",
    client: "ISKCON Coimbatore",
    projectType: "Temple Infrastructure",
    description:
      "Magnificent temple complex featuring traditional Vedic architecture with modern GRC construction. The project includes intricate carved elements, decorative columns, and architectural details that reflect the spiritual and cultural significance of the ISKCON tradition.",
    images: ["/images/iskcon-temple.jpg"],
    features: [
      "Vedic Architecture",
      "Intricate GRC Carvings",
      "Traditional Temple Design",
      "Cultural Significance",
      "Spiritual Architecture",
    ],
  },
  {
    id: 26,
    title: "Basil Wood International – Gunjur (ISKCON)",
    category: "Infrastructure & Public Works",
    location: "Gunjur, Bangalore",
    year: "2023",
    client: "Basil Wood International",
    projectType: "ISKCON Temple Complex",
    description:
      "International ISKCON temple complex featuring elaborate GRC architectural elements, traditional temple design, and modern construction techniques. The project combines spiritual architecture with contemporary building methods.",
    images: ["/images/basil.jpg"],
    features: [
      "International Temple Standards",
      "Elaborate GRC Elements",
      "Traditional Temple Architecture",
      "Modern Construction Techniques",
      "Spiritual Design Focus",
    ],
  },
  {
    id: 27,
    title: "Horow International School",
    category: "Infrastructure & Public Works",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "Horow International School",
    projectType: "International School Infrastructure",
    description:
      "Prestigious international school featuring world-class educational infrastructure with sophisticated GRC elements, modern learning spaces, and international education standards. The project creates an exceptional learning environment with emphasis on academic excellence, cultural diversity, and state-of-the-art facilities for international students.",
    images: ["/images/harrow1.jpg", "/images/harrow2.jpg"],
    features: [
      "International Education Standards",
      "Sophisticated GRC Elements",
      "Modern Learning Spaces",
      "Academic Excellence Focus",
      "Cultural Diversity Design",
    ],
  },
  {
    id: 28,
    title: "1 MG Lido Mall",
    category: "Infrastructure & Public Works",
    location: "Bangalore, Karnataka",
    year: "2023",
    client: "1 MG Lido Mall",
    projectType: "Shopping Mall Infrastructure",
    description:
      "Modern shopping mall featuring contemporary GRC elements, retail-focused architecture, and customer-centric design. The project creates an engaging shopping experience with emphasis on retail efficiency and customer comfort.",
    images: ["/images/mg1.jpg", "/images/mg2.jpg", "/images/mg3.jpg" , "/images/mg5.jpg", "/images/mg4.jpg"],
    features: [
      "Modern GRC Elements",
      "Retail-focused Architecture",
      "Customer-centric Design",
      "Engaging Shopping Experience",
      "Retail Efficiency Focus",
    ],
  },
  {
    id: 29,
    title: "Commercial Complex – Malleswaram",
    category: "Infrastructure & Public Works",
    location: "Malleswaram, Bangalore",
    year: "2023",
    client: "Malleswaram Commercial Complex",
    projectType: "Commercial Infrastructure",
    description:
      "Commercial complex featuring versatile GRC elements, multi-functional architecture, and commercial-residential integration. The project combines retail, office, and residential spaces in a unified architectural design.",
    images: ["/images/complex1.jpg", "/images/racecourse2.jpg" , "/images/racecourse1.jpg"],
    features: [
      "Versatile GRC Elements",
      "Multi-functional Architecture",
      "Commercial-residential Integration",
      "Mixed-use Design",
      "Unified Architectural Concept",
    ],
  },
  {
    id: 30,
    title: "Dharmavaram Saree Manufacturer Office – Dharmavaram",
    category: "Infrastructure & Public Works",
    location: "Dharmavaram, Andhra Pradesh",
    year: "2023",
    client: "Dharmavaram Saree Manufacturers",
    projectType: "Manufacturing Office Infrastructure",
    description:
      "Manufacturing office complex featuring industrial-grade GRC elements, functional design, and manufacturing-focused architecture. The project serves manufacturing industry needs with emphasis on functionality and industrial standards.",
    images: ["/images/dar1.jpg", "/images/dar2.jpg"],
    features: [
      "Industrial-grade GRC Elements",
      "Functional Design",
      "Manufacturing-focused Architecture",
      "Industrial Standards",
      "Manufacturing Industry Focus",
    ],
  },
]

const categories = [
  "All",
  "Government & Institutional",
  "Healthcare",
  "Residential & Mixed-Use",
  "Commercial & Office Spaces",
  "Hospitality & Leisure",
  "Retail and Conventions",
  "Infrastructure & Public Works",
]

export default function Gallery() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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

  if (!isClient) {
    return null // Or a loading spinner
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
              Explore our extensive portfolio of 30 completed GRC & FRP projects across India, spanning government
              institutions, healthcare facilities, religious complexes, luxury hotels, residential developments, and
              major infrastructure projects including prestigious clients like Brigade Group, Taj Hotels, Marriott,
              and many more.
            </p>
          </div>
        </FadeIn>

        {/* Tab Navigation */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center mb-8">
            <div className="bg-dark-secondary border border-dark-accent rounded-full p-1 flex">
              <button
                onClick={() => setActiveTab("images")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "images"
                    ? "bg-gold-500 text-dark-primary shadow-lg"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                <ImageIcon className="h-4 w-4" />
                Project Images
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "videos"
                    ? "bg-gold-500 text-dark-primary shadow-lg"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                <Video className="h-4 w-4" />
                Project Videos
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Conditional Content Based on Active Tab */}
        {activeTab === "images" ? (
          <>
            {/* Category Filter */}
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-8 sm:mb-12 max-w-6xl mx-auto px-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs font-medium transition-all duration-300 ${
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ y: -8 }}
                    className="group cursor-pointer"
                    onClick={() => openModal(project)}
                  >
                    <div className="bg-dark-primary border border-dark-accent rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
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
                Showing <span className="text-gold-500 font-semibold">{filteredProjects.length}</span> of 30 total projects
                {selectedCategory !== "All" && (
                  <span>
                    {" "}
                    in <span className="text-gold-500 font-semibold">{selectedCategory}</span>
                  </span>
                )}
              </p>
            </div>
          </>
        ) : (
          <VideoSection />
        )}
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
