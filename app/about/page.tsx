import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Award, Clock, Target, Eye, Lightbulb, Compass, Wrench } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Us | RJ INTERIORS & CONSTRUCTIONS",
  description:
    "Learn about RJ INTERIORS & CONSTRUCTIONS' history, values, and our expert team dedicated to excellence in GRC & FRP construction.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col page-transition">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden mt-20">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image src="/images/about-team.png" alt="Construction team" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About RJ INTERIORS</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Crafting durability with elegance through innovative GRC & FRP solutions and unwavering commitment to our
            clients.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
              Our Purpose
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Mission & Vision</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Guided by our core principles, we strive to transform the construction industry and create lasting value
              for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 dark:bg-amber-900 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To deliver exceptional GRC & FRP construction services that exceed client expectations through
                innovation, integrity, and craftsmanship. We are committed to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Creating durable, sustainable, and functional architectural elements that enhance the quality of
                    spaces
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Fostering a culture of excellence, continuous improvement, and professional growth among our team
                    members
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Building lasting relationships with clients, partners, and communities through transparent
                    communication and ethical practices
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 dark:bg-amber-900 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To be the most trusted and innovative GRC & FRP construction company in Bangalore, recognized for:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Setting new standards of excellence in GRC & FRP construction quality, safety, and client
                    satisfaction
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Pioneering sustainable building practices that minimize environmental impact while maximizing
                    efficiency and durability
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Creating positive change in the communities where we work through responsible business practices and
                    meaningful engagement
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-amber-50 dark:bg-amber-900/30 p-8 rounded-2xl max-w-3xl mx-auto">
              <div className="bg-amber-100 dark:bg-amber-900 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-7 w-7 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Approach</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                We believe that successful construction is built on a foundation of collaboration, innovation, and
                attention to detail. By combining traditional craftsmanship with cutting-edge GRC & FRP technology, we
                deliver projects that stand the test of time.
              </p>
              <Link href="/#contact">
                <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
                Our Story
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Building a Legacy of Excellence</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                RJ INTERIORS & CONSTRUCTIONS began as a specialized company with a vision to transform the architectural
                landscape through innovative GRC & FRP solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Over the years, we've grown into a leading GRC & FRP construction firm in Bangalore, completing numerous
                projects across residential, commercial, and industrial sectors. Our success is built on our commitment
                to excellence, integrity, and client satisfaction.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Today, RJ INTERIORS continues to push the boundaries of construction, embracing new technologies and
                sustainable practices to deliver exceptional results for our clients.
              </p>
              <Link href="/#contact">
                <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/about-story.png" alt="Company history" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
              Our Values
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">What Drives Us</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Our core values guide everything we do, from how we interact with clients to how we approach each project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Excellence</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We strive for excellence in every aspect of our work, from planning to execution and beyond.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Integrity</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We conduct our business with honesty, transparency, and ethical practices at all times.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We embrace new technologies and methods to deliver innovative GRC & FRP solutions for our clients.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-amber-100 dark:bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Reliability</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We deliver on our promises, meeting deadlines and exceeding expectations consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-500 dark:bg-amber-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <p className="text-black dark:text-gray-100 font-medium">Projects Completed</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <p className="text-black dark:text-gray-100 font-medium">Years Experience</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <p className="text-black dark:text-gray-100 font-medium">Expert Team Members</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <p className="text-black dark:text-gray-100 font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Contact us today to discuss your project needs and discover how RJ INTERIORS can bring your vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/#gallery">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 font-semibold px-8 bg-transparent"
              >
                View Our Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
