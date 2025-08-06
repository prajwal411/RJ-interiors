"use client"
import { useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, Clock, User, MessageSquare, Briefcase } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerIn } from "@/components/animations/stagger-in"

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    "GRC Products",
    "FRP Solutions",
    "Residential Construction",
    "Commercial Projects",
    "Industrial Solutions",
    "Heritage Restoration",
    "Custom Design",
    "Consultation",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gold-500 text-dark-primary rounded-full text-sm font-bold mb-6 shadow-lg">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-primary">Contact Us</h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              Ready to start your project? Get in touch with our experts for a free consultation and personalized quote.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <FadeIn direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-text-primary">Get in Touch</h3>
                <p className="text-text-secondary mb-8">
                  We're here to help bring your construction vision to life. Contact us through any of the following
                  methods, and our team will respond promptly.
                </p>
              </div>

              <StaggerIn direction="up" staggerDelay={0.1}>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 bg-dark-primary border border-dark-accent rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-amber-400 to-orange-600 p-3 rounded-full shadow-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Phone Numbers</h4>
                      <div className="space-y-1">
                        <a
                          href="tel:+917892142197"
                          className="block text-text-secondary hover:text-gold-500 transition-all duration-300"
                        >
                          +91 78921 42197
                        </a>
                        <a
                          href="tel:+919845120009"
                          className="block text-text-secondary hover:text-gold-500 transition-all duration-300"
                        >
                          +91 98451 20009
                        </a>
                        <a
                          href="tel:+919845062009"
                          className="block text-text-secondary hover:text-gold-500 transition-all duration-300"
                        >
                          +91 98450 62009
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 bg-dark-primary border border-dark-accent rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-full shadow-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Email Addresses</h4>
                      <div className="space-y-1">
                        <a
                          href="mailto:rjinteriors2009@gmail.com"
                          className="block text-text-secondary hover:text-gold-500 transition-all duration-300"
                        >
                          rjinteriors2009@gmail.com
                        </a>
                        <a
                          href="mailto:info@rjinteriors.com"
                          className="block text-text-secondary hover:text-gold-500 transition-all duration-300"
                        >
                          info@rjinteriors.com
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 bg-dark-primary border border-dark-accent rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-green-500 to-teal-600 p-3 rounded-full shadow-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Office Address</h4>
                      <p className="text-text-secondary">
                        #123, Industrial Area, Phase 2<br />
                        Bangalore, Karnataka 560058
                        <br />
                        India
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 bg-dark-primary border border-dark-accent rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-full shadow-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Business Hours</h4>
                      <div className="text-text-secondary">
                        <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </StaggerIn>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-dark-primary border border-dark-accent p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-text-primary">Send us a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Send className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gold-500 mb-2">Message Sent!</h4>
                  <p className="text-gold-500">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gold-500 mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-dark-accent rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-dark-secondary text-text-primary transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gold-500 mb-2">
                        <Mail className="inline h-4 w-4 mr-1" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-dark-accent rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-dark-secondary text-text-primary transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gold-500 mb-2">
                        <Phone className="inline h-4 w-4 mr-1" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-dark-accent rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-dark-secondary text-text-primary transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gold-500 mb-2">
                        <Briefcase className="inline h-4 w-4 mr-1" />
                        Service Required *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-dark-accent rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-dark-secondary text-text-primary transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gold-500 mb-2">
                      <MessageSquare className="inline h-4 w-4 mr-1" />
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-dark-accent rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-dark-secondary text-text-primary transition-all duration-300 resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gold-500 hover:bg-gold-600 text-dark-primary font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
