"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "Project Manager",
    company: "Prestige Group",
    image: "/images/testimonial-1.png",
    rating: 5,
    text: "RJ INTERIORS delivered exceptional GRC work for our luxury residential project. Their attention to detail and timely delivery exceeded our expectations. The jalis and columns they manufactured were of outstanding quality.",
    project: "Prestige Lakeside Habitat",
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Architect",
    company: "Brigade Group",
    image: "/images/testimonial-2.png",
    rating: 5,
    text: "Working with RJ INTERIORS was a pleasure. Their team understood our complex design requirements and delivered custom FRP solutions that perfectly matched our architectural vision. Highly recommended!",
    project: "Brigade Cornerstone Utopia",
  },
  {
    id: 3,
    name: "Mohammed Ali",
    position: "Construction Head",
    company: "L&T Construction",
    image: "/images/testimonial-1.png",
    rating: 5,
    text: "The quality of GRC products from RJ INTERIORS is unmatched. We've used their services for multiple projects and they consistently deliver superior products on time. Their manufacturing facility is world-class.",
    project: "Metro Station Facades",
  },
  {
    id: 4,
    name: "Anita Reddy",
    position: "Interior Designer",
    company: "Sobha Limited",
    image: "/images/testimonial-2.png",
    rating: 5,
    text: "RJ INTERIORS transformed our vision into reality with their beautiful FRP planters and decorative elements. The customization options and quality craftsmanship are exceptional. Will definitely work with them again.",
    project: "Sobha Dream Acres",
  },
  {
    id: 5,
    name: "Vikram Singh",
    position: "Site Engineer",
    company: "Godrej Properties",
    image: "/images/testimonial-1.png",
    rating: 5,
    text: "Professional service from start to finish. RJ INTERIORS provided comprehensive solutions for our commercial project including GRC facades and FRP waterproofing. Their technical expertise is impressive.",
    project: "Godrej Woodsville",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 bg-dark-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gold-500 text-dark-primary rounded-full text-sm font-bold mb-6 shadow-lg">
              Client Reviews
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-primary">What Our Clients Say</h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience
              working with RJ INTERIORS & CONSTRUCTIONS.
            </p>
          </div>
        </FadeIn>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-dark-primary rounded-2xl p-8 md:p-12 shadow-xl border border-dark-accent"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gold-500 p-4 rounded-full shadow-lg">
                    <Quote className="h-8 w-8 text-dark-primary" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-text-secondary text-center mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-text-primary">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-sm text-text-muted">{testimonials[currentTestimonial].position}</p>
                    <p className="text-sm text-gold-500 font-medium">{testimonials[currentTestimonial].company}</p>
                    <p className="text-xs text-text-muted mt-1">Project: {testimonials[currentTestimonial].project}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-dark-secondary border border-dark-accent p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow text-text-secondary hover:text-gold-500"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-dark-secondary border border-dark-accent p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow text-text-secondary hover:text-gold-500"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-gold-500 w-8" : "bg-dark-accent hover:bg-gold-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Reviews Grid */}
        <FadeIn delay={0.4}>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-primary p-6 rounded-xl shadow-lg border border-dark-accent"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-text-muted">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold-500 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-text-muted line-clamp-3">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
