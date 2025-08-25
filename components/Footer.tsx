"use client"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, ExternalLink, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  "GRC Jalis & Screens",
  "Architectural Domes",
  "Classical Columns",
  "Decorative Cornices",
  "FRP Tanks & Storage",
  "Facade Systems",
  "Custom Manufacturing",
]

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
  // City pages for internal linking
  { name: "Bangalore FRP & GRC", href: "/locations/bangalore" },
  { name: "Delhi FRP & GRC", href: "/locations/delhi" },
  { name: "Mumbai FRP & GRC", href: "/locations/mumbai" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark-deep text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image src="/logo.png" alt="RJ INTERIORS & CONSTRUCTIONS" width={50} height={50} className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-bold text-gold-500">RJ INTERIORS</h3>
                <p className="text-sm text-text-muted">& CONSTRUCTIONS</p>
              </div>
            </Link>
            <p className="text-text-secondary mb-6 text-sm leading-relaxed">
              Crafting Durability with Elegance. Specialists in GRC & FRP solutions with In-House Manufacturing
              in Bangalore since 2008.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="bg-dark-secondary hover:bg-gold-500 p-2 rounded-full transition-all duration-300 shadow-lg"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-500">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-text-secondary hover:text-gold-500 transition-all duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-500">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-gold-500 transition-all duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-gold-500">Visit Our Websites</h5>
              <div className="space-y-2">
                <a
                  href="https://grcbangalore.com"
                  target="_blank"
                  className="flex items-center text-gold-500 hover:text-gold-400 text-sm transition-all duration-300"
                  rel="noreferrer"
                >
                  grcbangalore.com
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                <a
                  href="https://frpbangalore.com"
                  target="_blank"
                  className="flex items-center text-gold-500 hover:text-gold-400 text-sm transition-all duration-300"
                  rel="noreferrer"
                >
                  frpbangalore.com
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-500">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-text-secondary mb-1">Call Us:</p>
                  <div className="space-y-1">
                    <a
                      href="tel:+917892142197"
                      className="text-text-primary hover:text-gold-500 text-sm block transition-all duration-300"
                    >
                      +91 7892142197
                    </a>
                    <a
                      href="tel:+919900579417"
                      className="text-text-primary hover:text-gold-500 text-sm block transition-all duration-300"
                    >
                      +91 9900579417
                    </a>
                    <a
                      href="tel:+916363385312"
                      className="text-text-primary hover:text-gold-500 text-sm block transition-all duration-300"
                    >
                      +91 6363385312
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-text-secondary mb-1">Email Us:</p>
                  <div className="space-y-1">
                    <a
                      href="mailto:grcbanglore@gmail.com"
                      className="text-text-primary hover:text-gold-500 text-sm block transition-all duration-300"
                    >
                      grcbanglore@gmail.com
                    </a>
                    <a
                      href="mailto:sandiil.k@rjinteriors.in"
                      className="text-text-primary hover:text-gold-500 text-sm block transition-all duration-300"
                    >
                      sandiil.k@rjinteriors.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-text-secondary mb-1">Location:</p>
                  <p className="text-white text-sm">
                    Manufacturing Units
                    <br />
                    Bangalore, Karnataka
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-text-secondary mb-1">Business Hours:</p>
                  <p className="text-white text-sm">
                    Mon - Sat: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-muted text-sm mb-4 md:mb-0">
              © 2024 RJ INTERIORS & CONSTRUCTIONS. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-text-muted hover:text-gold-500 transition-all duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-text-muted hover:text-gold-500 transition-all duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-text-muted hover:text-gold-500 transition-all duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
