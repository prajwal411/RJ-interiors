"use client"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { HoverCard } from "@/components/animations/hover-card"
import { AnimatedButton } from "@/components/ui/animated-button"

const services = [
  {
    title: "GRC/GFRC Products",
    subtitle: "Glass Fiber Reinforced Concrete",
    website: "grcbangalore.com",
    image: "/images/residential-1.png",
    features: [
      "Jalis (Lattice Screens)",
      "Domes & Minarets",
      "Columns & Capitals",
      "Cornices & Brackets",
      "Screens, Arches, Railings",
      "Balusters",
    ],
    benefits: [
      "Lightweight yet durable",
      "Weather-resistant",
      "Low-maintenance",
      "Architecturally aesthetic",
      "Custom designs available",
    ],
    color: "from-gold-600 to-gold-700",
  },
  {
    title: "FRP Products",
    subtitle: "Fiber Reinforced Plastic",
    website: "frpbangalore.com",
    image: "/images/commercial-1.png",
    features: [
      "MS FRP Tanks",
      "FRP Facades & Waterproofing",
      "Cornices, Columns, Corbels",
      "Arches & Decorative Elements",
      "FRP Gutters & Capitals",
      "Custom FRP Pots",
    ],
    benefits: [
      "Corrosion-resistant",
      "Highly customizable",
      "Strong yet lightweight",
      "Perfect for complex designs",
      "Long-lasting durability",
    ],
    color: "from-gold-500 to-gold-600",
  },
]

const whyChooseUs = [
  {
    icon: "🏗️",
    title: "Custom Designs",
    description: "Tailored solutions for every project requirement",
  },
  {
    icon: "🛠️",
    title: "Premium Craftsmanship",
    description: " In-House Manufacturing with attention to detail",
  },
  {
    icon: "🕐",
    title: "Timely Delivery",
    description: "On-schedule project completion guaranteed",
  },
  {
    icon: "🎯",
    title: "End-to-End Services",
    description: "From concept to installation, we handle everything",
  },
  {
    icon: "✅",
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-dark-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gold-500 text-dark-primary rounded-full text-sm font-bold mb-6 shadow-lg">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-primary">Specialized Services</h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              RJ Interiors & Constructions specializes in Glass Fiber Reinforced Concrete (GRC/GFRC) and Fiber
              Reinforced Plastic (FRP) solutions with state-of-the-art in-house manufacturing units in Bangalore.
            </p>
          </div>
        </FadeIn>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <FadeIn key={service.title} direction={index % 2 === 0 ? "left" : "right"} delay={0.2}>
              <HoverCard>
                <div className="bg-dark-primary rounded-2xl shadow-xl overflow-hidden hover-lift border border-dark-accent">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Link
                        href={`https://${service.website}`}
                        target="_blank"
                        className="inline-flex items-center space-x-2 bg-dark-secondary/80 backdrop-blur-sm text-text-primary px-3 py-2 rounded-full text-sm hover:bg-dark-accent/80 transition-colors"
                      >
                        <span>{service.website}</span>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                      <p className="text-white/90">{service.subtitle}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-text-primary">Products & Services</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-gold-500 flex-shrink-0" />
                            <span className="text-sm text-text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-text-primary">Key Benefits</h4>
                      <div className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gold-500 rounded-full flex-shrink-0" />
                            <span className="text-sm text-text-secondary">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link href={`https://${service.website}`} target="_blank">
                      <AnimatedButton
                        className="w-full bg-gold-500 hover:bg-gold-600 text-dark-primary font-bold shadow-lg"
                        hoverEffect="shine"
                      >
                        Visit {service.website}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
              </HoverCard>
            </FadeIn>
          ))}
        </div>

        {/* Why Choose Us */}
        <FadeIn delay={0.4}>
          <div className="bg-dark-primary rounded-2xl p-8 md:p-12 shadow-xl border border-dark-accent">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                Why Choose RJ INTERIORS & CONSTRUCTIONS?
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                We cater to residential, commercial, and industrial projects, turning concepts into lasting impressions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-lg font-semibold mb-2 text-text-primary">{item.title}</h4>
                  <p className="text-sm text-text-muted">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
