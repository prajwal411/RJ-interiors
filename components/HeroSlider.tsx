
"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"

const slides = [
  {
    id: 1,
    image: "/images/hero-1.png",
    title: "Crafting Durability with Elegance",
    subtitle: "GRC & FRP Experts in Bangalore",
    description:
      " In-House Manufacturing units delivering custom-designed architectural elements with strength, creativity, and reliability.",
    cta: "Explore GRC Products",
    link: "#products",
  },
  {
    id: 2,
    image: "/images/hero-2.png",
    title: "Innovative FRP Solutions",
    subtitle: "Corrosion-Resistant & Customizable",
    description:
      "From MS FRP tanks to architectural facades, we deliver lightweight yet strong solutions perfect for complex design requirements.",
    cta: "View FRP Products",
    link: "#products",
  },
  {
    id: 3,
    image: "/images/hero-3.png",
    title: "Premium Craftsmanship",
    subtitle: "Custom Designs & End-to-End Services",
    description:
      "Specializing in jalis, domes, columns, and architectural elements that turn concepts into lasting impressions.",
    cta: "Get Custom Quote",
    link: "#contact",
  },
  {
    id: 4,
    image: "/images/hero-4.png",
    title: "Quality Assurance",
    subtitle: "Timely Delivery & Premium Materials",
    description:
      "15+ years of experience serving residential, commercial, and industrial projects with unmatched quality standards.",
    cta: "Contact Our Team",
    link: "#contact",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-dark-deep">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={slides[currentSlide].title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-dark-deep/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-6 py-3 bg-gold-500 rounded-full text-sm font-bold mb-6 shadow-lg text-dark-primary"
              >
                {slides[currentSlide].subtitle}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg text-text-primary"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md text-text-secondary"
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link href={slides[currentSlide].link}>
                  <AnimatedButton
                    size="lg"
                    className="bg-gold-500 hover:bg-gold-600 text-dark-primary font-bold px-8 py-4 text-lg shadow-xl"
                    hoverEffect="lift"
                  >
                    {slides[currentSlide].cta}
                  </AnimatedButton>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-4">
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 bg-dark-secondary/80 backdrop-blur-sm rounded-full text-text-primary hover:bg-dark-accent/80 transition-colors"
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>

                    {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide ? "bg-gold-500" : "bg-text-muted"
                }`}
                style={{
                  width: index === currentSlide ? '16px' : '8px',
                  height: '8px',
                  borderRadius: index === currentSlide ? '4px' : '50%',
                  minWidth: '2px',
                  minHeight: '2px'
                }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-20 h-1 bg-dark-accent rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gold-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "linear" }}
              key={currentSlide}
            />
          </div>
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-dark-secondary/80 backdrop-blur-sm rounded-full text-text-primary hover:bg-dark-accent/80 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-dark-secondary/80 backdrop-blur-sm rounded-full text-text-primary hover:bg-dark-accent/80 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}