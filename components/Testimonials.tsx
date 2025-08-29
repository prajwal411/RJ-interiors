"use client"
import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"

const testimonials = [
  {
    id: 1,
    name: "Shaji Kaniyaparambil",
    position: "Client",
    company: "Google Reviews",
    rating: 5,
    text: "Their products are very good. For maintenance and repair they respond very soon, so according to me highly recommended.",
    project: "GRC & FRP Products",
  },
  {
    id: 2,
    name: "Jaganathan K.R.",
    position: "Local Guide",
    company: "Google Reviews",
    rating: 5,
    text: "They make very good Glass Fibre Reinforced Concrete panels and FRP panels.",
    project: "GRC & FRP Manufacturing",
  },
  {
    id: 3,
    name: "Scaria Thomas",
    position: "Client",
    company: "Google Reviews",
    rating: 5,
    text: "Varghese service very nice",
    project: "GRC Services",
  },
  {
    id: 4,
    name: "Amal Mathewzzz",
    position: "Client",
    company: "Google Reviews",
    rating: 5,
    text: "Work and service is very good",
    project: "GRC Products & Services",
  },
  {
    id: 5,
    name: "Shreya Theres John",
    position: "Client",
    company: "Google Reviews",
    rating: 5,
    text: "Good work and service",
    project: "GRC Solutions",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Ensure currentTestimonial is within bounds
  useEffect(() => {
    if (currentTestimonial >= testimonials.length) {
      setCurrentTestimonial(0)
    }
  }, [currentTestimonial, testimonials.length])

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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-text-primary">What Our Clients Say</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary max-w-2xl sm:max-w-3xl mx-auto px-2">
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
                  {testimonials[currentTestimonial] && [...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-text-secondary text-center mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial]?.text || ''}"
                </blockquote>

                {/* Client Info */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-text-primary">{testimonials[currentTestimonial]?.name || ''}</h4>
                  <p className="text-sm text-text-muted">{testimonials[currentTestimonial]?.position || ''}</p>
                  <p className="text-sm text-gold-500 font-medium">{testimonials[currentTestimonial]?.company || ''}</p>
                  <p className="text-xs text-text-muted mt-1">Project: {testimonials[currentTestimonial]?.project || ''}</p>
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
                <div className="mb-4">
                  <h4 className="font-semibold text-text-primary text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-text-muted">{testimonial.company}</p>
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
