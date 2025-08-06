"use client"
import Navbar from "@/components/Navbar"
import HeroSlider from "@/components/HeroSlider"
import Services from "@/components/Services"
import About from "@/components/About"
import Products from "@/components/Products"
import WhyDifferent from "@/components/WhyDifferent"
import Gallery from "@/components/Gallery"
import Testimonials from "@/components/Testimonials"
import Partners from "@/components/Partners"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-dark-primary page-transition">
      <Navbar />
      <main>
        <HeroSlider />
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="products">
          <Products />
        </div>
        <WhyDifferent />
        <div id="gallery">
          <Gallery />
        </div>
        <Testimonials />
        <Partners />
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
