"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"

const partners = [
  {
    name: "BEARY GROUP",
    logo: "/images/partners/beary-group.png",
    googleUrl: "https://www.google.com/search?q=BEARY+GROUP+logo+official",
    category: "Real Estate",
  },
  {
    name: "BRIGADE GROUP",
    logo: "/images/partners/brigade-group.png",
    googleUrl: "https://www.google.com/search?q=BRIGADE+GROUP+logo+official",
    category: "Real Estate",
  },
  {
    name: "BAGMANE DEVELOPERS",
    logo: "/images/partners/BAGMANE DEVELOPERS.jpg",
    googleUrl: "https://www.google.com/search?q=BAGMANE+DEVELOPERS+logo+official",
    category: "Real Estate",
  },
  {
    name: "MS RAMAIAH",
    logo: "/images/partners/MS RAMAIAH.png",
    googleUrl: "https://www.google.com/search?q=MS+RAMAIAH+logo+official",
    category: "Education",
  },
  {
    name: "VICEROY GROUP",
    logo: "/images/partners/VICEROY GROUP.png",
    googleUrl: "https://www.google.com/search?q=VICEROY+GROUP+logo+official",
    category: "Real Estate",
  },
  {
    name: "LE-CLASSIC GROUP",
    logo: "/images/partners/LE-CLASSIC GROUP.png",
    googleUrl: "https://www.google.com/search?q=LE+CLASSIC+GROUP+logo+official",
    category: "Real Estate",
  },
  {
    name: "MRG GROUP",
    logo: "/images/partners/MRG GROUP.jpg",
    googleUrl: "https://www.google.com/search?q=MRG+GROUP+logo+official",
    category: "Real Estate",
  },
  {
    name: "TAMARA GROUP",
    logo: "/images/partners/TAMARA GROUP.png",
    googleUrl: "https://www.google.com/search?q=TAMARA+GROUP+logo+official",
    category: "Real Estate",
  },
  {
    name: "TAJ GROUP",
    logo: "/images/partners/TAJ GROUP.png",
    googleUrl: "https://www.google.com/search?q=TAJ+GROUP+logo+official",
    category: "Hospitality",
  },
  {
    name: "KIM ARTS",
    logo: "/images/partners/KIM ARTS.jpg",
    googleUrl: "https://www.google.com/search?q=KIM+ARTS+logo+official",
    category: "Design",
  },
  {
    name: "NESTO GROUP",
    logo: "/images/partners/NESTO GROUP.png",
    googleUrl: "https://www.google.com/search?q=NESTO+GROUP+logo+official",
    category: "Real Estate",
  },
  {
    name: "SHILPA ENTERPRISES",
    logo: "/images/partners/SHILPA ENTERPRISES.png",
    googleUrl: "https://www.google.com/search?q=SHILPA+ENTERPRISES+logo+official",
    category: "Construction",
  },
  {
    name: "RASME ENGINEERING",
    logo: "/images/partners/RASME ENGINEERING.jpg",
    googleUrl: "https://www.google.com/search?q=RASME+ENGINEERING+logo+official",
    category: "Engineering",
  },
  {
    name: "GOPALAN ENTERPRISES",
    logo: "/images/partners/GOPALAN ENTERPRISES.jpg",
    googleUrl: "https://www.google.com/search?q=GOPALAN+ENTERPRISES+logo+official",
    category: "Real Estate",
  },
  {
    name: "4 SQUARE REALTY",
    logo: "/images/partners/4 SQUARE REALTY.jpg",
    googleUrl: "https://www.google.com/search?q=4+SQUARE+REALTY+logo+official",
    category: "Real Estate",
  },
  {
    name: "SHRIRAM PROPERTIES",
    logo: "/images/partners/SHRIRAM PROPERTIES.png",
    googleUrl: "https://www.google.com/search?q=SHRIRAM+PROPERTIES+logo+official",
    category: "Real Estate",
  },
  {
    name: "LEROMA HOTEL",
    logo: "/images/partners/LEROMA HOTEL.jpg",
    googleUrl: "https://www.google.com/search?q=LEROMA+HOTEL+logo+official",
    category: "Hospitality",
  },
  {
    name: "ISCKON",
    logo: "/images/partners/ISCKON.png",
    googleUrl: "https://www.google.com/search?q=ISCKON+logo+official",
    category: "Religious",
  },
  {
    name: "AK GROUP HOSPITALITY",
    logo: "/images/partners/AK GROUP HOSPITALITY.jpg",
    googleUrl: "https://www.google.com/search?q=AK+GROUP+HOSPITALITY+logo+official",
    category: "Hospitality",
  },
  {
    name: "ASSETZ GROUP",
    logo: "/images/partners/ASSETZ GROUP.png",
    googleUrl: "https://www.google.com/search?q=ASSETZ+GROUP+logo+official",
    category: "Real Estate",
  },
  {
    name: "INFINIUM SHELTERS",
    logo: "/images/partners/INFINIUM SHELTERS.jpg",
    googleUrl: "https://www.google.com/search?q=INFINIUM+SHELTERS+logo+official",
    category: "Real Estate",
  },
  {
    name: "REGAL JEWELLERS",
    logo: "/images/partners/REGAL JEWELLERS.png",
    googleUrl: "https://www.google.com/search?q=REGAL+JEWELLERS+logo+official",
    category: "Jewelry",
  },
  {
    name: "PRESIDENTS HOTEL GROUP",
    logo: "/images/partners/PRESIDENTS HOTEL GROUP.png",
    googleUrl: "https://www.google.com/search?q=PRESIDENTS+HOTEL+GROUP+logo+official",
    category: "Hospitality",
  },
  {
    name: "SANDEEP BAGEERA DESIGNS",
    logo: "/images/partners/SANDEEP BAGEERA DESIGNS.png",
    googleUrl: "https://www.google.com/search?q=SANDEEP+BAGEERA+DESIGNS+logo+official",
    category: "Design",
  },
  {
    name: "MANYAVAR GROUP",
    logo: "/images/partners/MANYAVAR GROUP.png",
    googleUrl: "https://www.google.com/search?q=MANYAVAR+GROUP+logo+official",
    category: "Fashion",
  },
  {
    name: "RR HOSPITALITY",
    logo: "/images/partners/RR HOSPITALITY.png",
    googleUrl: "https://www.google.com/search?q=RR+HOSPITALITY+logo+official",
    category: "Hospitality",
  },
  {
    name: "CAPSTONE",
    logo: "/images/partners/CAPSTONE.png",
    googleUrl: "https://www.google.com/search?q=CAPSTONE+logo+official",
    category: "Real Estate",
  },
]

const clients = [
  {
    name: "CPWD-CANARA BANK",
    logo: "/placeholder.svg",
    project: "Banking Infrastructure",
  },
  {
    name: "CPWD WORKS",
    logo: "/placeholder.svg",
    project: "Public Works",
  },
  {
    name: "KALYAN DURGA MLA",
    logo: "/placeholder.svg",
    project: "Government Office",
  },
  {
    name: "RK INFRA",
    logo: "/placeholder.svg",
    project: "Infrastructure Development",
  },
  {
    name: "TEMPLE BELLS, BOMMANAHALLI",
    logo: "/placeholder.svg",
    project: "Religious Architecture",
  },
  {
    name: "ECOCITY, HOSAKOTE",
    logo: "/placeholder.svg",
    project: "Eco-Friendly Development",
  },
  {
    name: "VRIKSH",
    logo: "/placeholder.svg",
    project: "Environmental Projects",
  },
  {
    name: "ARABIAN GOLD AND DIAMOND, KOCHI",
    logo: "/placeholder.svg",
    project: "Commercial Interior",
  },
]

export default function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 1
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-dark-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gold-500 text-dark-primary rounded-full text-sm font-medium mb-4">
              Our Network
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-text-primary">Trusted Partners & Clients</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary max-w-2xl sm:max-w-3xl mx-auto px-2">
              We're proud to work with leading developers, contractors, and government organizations across India,
              delivering excellence in every project.
            </p>
          </div>
        </FadeIn>

        {/* Partners Section */}
        <FadeIn delay={0.2}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-text-primary">Development Partners & Clients</h3>
            <div ref={scrollRef} className="flex space-x-8 overflow-hidden" style={{ scrollBehavior: "smooth" }}>
              {[...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 bg-dark-primary border border-dark-accent p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-40 h-20 relative mb-4">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-text-primary text-sm mb-1">{partner.name}</h4>
                    <p className="text-xs text-text-muted">{partner.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>



        {/* Stats */}
        <FadeIn delay={0.6}>
          <div className="mt-16 bg-gold-500 rounded-2xl p-8 md:p-12 text-dark-primary text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Trusted Partners</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
                <div className="text-sm opacity-90">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
                <div className="text-sm opacity-90">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </FadeIn>


      </div>
    </section>
  )
}
