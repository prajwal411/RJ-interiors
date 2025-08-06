"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"

const partners = [
  {
    name: "Prestige Group",
    logo: "/placeholder.svg?height=80&width=160",
    category: "Real Estate",
  },
  {
    name: "Brigade Group",
    logo: "/placeholder.svg?height=80&width=160",
    category: "Construction",
  },
  {
    name: "Sobha Limited",
    logo: "/placeholder.svg?height=80&width=160",
    category: "Real Estate",
  },
  {
    name: "Godrej Properties",
    logo: "/placeholder.svg?height=80&width=160",
    category: "Real Estate",
  },
  {
    name: "L&T Construction",
    logo: "/placeholder.svg?height=80&width=160&T+Construction+logo=",
    category: "Infrastructure",
  },
  {
    name: "Puravankara",
    logo: "/placeholder.svg?height=80&width=160",
    category: "Real Estate",
  },
  {
    name: "Embassy Group",
    logo: "/placeholder.svg?height=80&width=160",
    category: "Commercial",
  },
  {
    name: "Mantri Developers",
    logo: "/placeholder.svg?height=80&width=160",
    category: "Real Estate",
  },
]

const clients = [
  {
    name: "Bangalore Metro Rail Corporation",
    logo: "/placeholder.svg?height=80&width=160",
    project: "Metro Station Facades",
  },
  {
    name: "Karnataka Housing Board",
    logo: "/placeholder.svg?height=80&width=160",
    project: "Residential Complex",
  },
  {
    name: "Bangalore Development Authority",
    logo: "/placeholder.svg?height=80&width=160",
    project: "Public Infrastructure",
  },
  {
    name: "Indian Railways",
    logo: "/placeholder.svg?height=80&width=160",
    project: "Railway Station Renovation",
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-primary">Trusted Partners & Clients</h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              We're proud to work with leading developers, contractors, and government organizations across India,
              delivering excellence in every project.
            </p>
          </div>
        </FadeIn>

        {/* Partners Section */}
        <FadeIn delay={0.2}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-text-primary">Development Partners</h3>
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

        {/* Government Clients */}
        <FadeIn delay={0.4}>
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-text-primary">
              Government & Public Sector Clients
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-primary border border-dark-accent p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-32 h-16 relative mx-auto mb-4">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-text-primary text-sm mb-2">{client.name}</h4>
                  <p className="text-xs text-gold-500">{client.project}</p>
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
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-90">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
