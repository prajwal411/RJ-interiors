"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Filter, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { HoverCard } from "@/components/animations/hover-card"
import { AnimatedButton } from "@/components/ui/animated-button"

const products = [
  {
    id: 1,
    name: "Decorative Jalis",
    category: "GRC",
    image: "/images/Decorative Jalis.png",
    description: "Intricate lattice screens for privacy and aesthetic appeal",
    features: ["Custom patterns", "Weather resistant", "Low maintenance"],
    price: "Starting from ₹2,500/sq ft",
  },
  {
    id: 2,
    name: "Architectural Domes",
    category: "GRC",
    image: "/images/Architectural Domes.jpg",
    description: "Elegant domes and minarets for religious and commercial buildings",
    features: ["Lightweight design", "Earthquake resistant", "Custom sizes"],
    price: "Starting from ₹15,000/piece",
  },
  {
    id: 3,
    name: "Classical Columns",
    category: "GRC",
    image: "/images/Classical Columns.jpg",
    description: "Ornate columns and capitals for grand architectural designs",
    features: ["Various styles", "Load bearing", "Detailed craftsmanship"],
    price: "Starting from ₹8,000/piece",
  },
  {
    id: 4,
    name: "Decorative Cornices",
    category: "GRC",
    image: "/images/Decorative Cornices.jpg",
    description: "Elegant cornices and brackets for building facades",
    features: ["Multiple profiles", "Easy installation", "Durable finish"],
    price: "Starting from ₹1,200/linear ft",
  },
  {
    id: 5,
    name: "Garden Balusters",
    category: "GRC",
    image: "/images/Garden Balusters.jpg",
    description: "Decorative balusters and railings for outdoor spaces",
    features: ["Weather proof", "Elegant designs", "Safety compliant"],
    price: "Starting from ₹800/linear ft",
  },
  {
    id: 6,
    name: "Arched Windows",
    category: "GRC",
    image: "/images/Arched Windows.jpg",
    description: "Beautiful arched windows and decorative screens",
    features: ["Custom arches", "Ventilation friendly", "Artistic appeal"],
    price: "Starting from ₹5,000/piece",
  },
  {
    id: 7,
    name: "MS FRP Tanks",
    category: "FRP",
    image: "/images/MS FRP Tanks.png",
    description: "Corrosion-resistant storage tanks for industrial use",
    features: ["Chemical resistant", "Long lasting", "Custom capacity"],
    price: "Starting from ₹25,000/tank",
  },
  {
    id: 8,
    name: "FRP Facades",
    category: "FRP",
    image: "/images/FRP Facades.jpg",
    description: "Seamless FRP coverings for modern building exteriors",
    features: ["Waterproof", "UV resistant", "Modern aesthetics"],
    price: "Starting from ₹3,500/sq ft",
  },
  {
    id: 9,
    name: "FRP Columns",
    category: "FRP",
    image: "/images/FRP Columns.jpg",
    description: "Lightweight columns and corbels for modern architecture",
    features: ["Lightweight", "High strength", "Corrosion free"],
    price: "Starting from ₹6,000/piece",
  },
  {
    id: 10,
    name: "FRP Gutters",
    category: "FRP",
    image: "/images/FRP Gutters.jpg",
    description: "Durable gutter systems for effective water management",
    features: ["Leak proof", "Easy maintenance", "Long life"],
    price: "Starting from ₹450/linear ft",
  },
  {
    id: 11,
    name: "Decorative Pots",
    category: "FRP",
    image: "/images/Decorative Pots.png",
    description: "Stylish planters and decorative pots for landscaping",
    features: ["Weather resistant", "Lightweight", "Various sizes"],
    price: "Starting from ₹1,500/piece",
  },
  {
    id: 12,
    name: "FRP Arches",
    category: "FRP",
    image: "/images/FRP Arches.jpg",
    description: "Decorative arches and architectural elements",
    features: ["Custom designs", "Easy installation", "Maintenance free"],
    price: "Starting from ₹4,000/piece",
  },
]

const categories = ["All", "GRC", "FRP"]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProducts =
    activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <section id="products" className="py-16 md:py-24 bg-dark-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gold-500 text-dark-primary rounded-full text-sm font-bold mb-6 shadow-lg">
              Our Products
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-primary">Premium Product Range</h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              Explore our comprehensive range of GRC and FRP products, each crafted with precision and designed to meet
              the highest standards of quality and durability.
            </p>
          </div>
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn delay={0.2}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-dark-primary rounded-full p-1 shadow-lg border border-dark-accent">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gold-500 text-dark-primary shadow-md"
                      : "text-text-secondary hover:text-gold-500"
                  }`}
                >
                  <Filter className="h-4 w-4 inline mr-2" />
                  {category}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HoverCard>
                  <div className="bg-dark-primary rounded-xl overflow-hidden shadow-lg hover-lift border border-dark-accent">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-3 right-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            product.category === "GRC"
                              ? "bg-gold-500 text-dark-primary"
                              : "bg-gold-600 text-text-primary"
                          }`}
                        >
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-text-primary">{product.name}</h3>
                      <p className="text-sm text-text-muted mb-4">{product.description}</p>

                      {/* Features */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {product.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-2 py-1 bg-dark-accent text-xs rounded-full text-text-muted"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-lg font-bold text-gold-500 mb-4">{product.price}</div>

                      {/* CTA */}
                      <Link href="#contact">
                        <AnimatedButton
                          size="sm"
                          className="w-full bg-gold-500 hover:bg-gold-600 text-dark-primary shadow-lg"
                          hoverEffect="shine"
                        >
                          Get Quote
                        </AnimatedButton>
                      </Link>
                    </div>
                  </div>
                </HoverCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <FadeIn>
          <div className="bg-gold-500 rounded-2xl p-8 md:p-12 text-center text-dark-primary shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Our expert team can design and manufacture custom GRC and FRP products tailored to your specific
              requirements. Get in touch for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <AnimatedButton
                  size="lg"
                  className="bg-dark-primary text-gold-500 hover:bg-dark-secondary font-bold shadow-lg"
                  hoverEffect="lift"
                >
                  Request Custom Quote
                </AnimatedButton>
              </Link>
              <AnimatedButton
                size="lg"
                variant="outline"
                className="border-dark-primary text-dark-primary hover:bg-dark-primary/10 font-bold shadow-lg"
                hoverEffect="glow"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Full Catalog
              </AnimatedButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
