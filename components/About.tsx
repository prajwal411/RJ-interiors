"use client"
import Image from "next/image"
import { Users, Award, Clock, Target } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { CountUp } from "@/components/animations/count-up"
import { HoverCard } from "@/components/animations/hover-card"

const stats = [
  { number: 15, suffix: "+", label: "Years Experience", icon: Clock },
  { number: 500, suffix: "+", label: "Projects Completed", icon: Target },
  { number: 50, suffix: "+", label: "Happy Clients", icon: Users },
  { number: 98, suffix: "%", label: "Client Satisfaction", icon: Award },
]

const achievements = [
  {
    title: "State-of-the-Art Manufacturing",
    description: "In-house manufacturing units in Bangalore equipped with latest technology",
    image: "/images/about-team.png",
  },
  {
    title: "Expert Team",
    description: "Skilled craftsmen and engineers with decades of combined experience",
    image: "/images/team-1.png",
  },
  {
    title: "Quality Materials",
    description: "Premium grade materials sourced from trusted suppliers worldwide",
    image: "/images/quality.png",
  },
  {
    title: "Custom Solutions",
    description: "Tailored designs and solutions for every unique project requirement",
    image: "/images/process.png",
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-dark-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gold-500 text-dark-primary rounded-full text-sm font-bold mb-6 shadow-lg">
              About Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-primary">Crafting Excellence Since 2008</h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-4xl mx-auto">
              RJ Interiors & Constructions (RJIC) specializes in Glass Fiber Reinforced Concrete (GRC/GFRC) and Fiber
              Reinforced Plastic (FRP) solutions. With state-of-the-art in-house manufacturing units in Bangalore, we
              deliver custom-designed architectural elements with strength, creativity, and reliability.
            </p>
          </div>
        </FadeIn>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} direction="up" delay={index * 0.1}>
              <div className="text-center p-6 bg-dark-secondary rounded-xl shadow-lg border border-dark-accent">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-gold-500 rounded-full mb-4 shadow-lg"
                >
                  <stat.icon className="h-6 w-6 text-dark-primary" />
                </motion.div>
                <div className="text-2xl md:text-3xl font-bold text-gold-500 mb-2">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-text-muted font-medium">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <FadeIn direction="left">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Our Story & Commitment</h3>
              <div className="space-y-4 text-text-secondary">
                <p>
                  Founded with a vision to revolutionize the construction industry, RJ INTERIORS & CONSTRUCTIONS has
                  grown from a small startup to a leading manufacturer of GRC and FRP products in Bangalore. Our journey
                  began with a simple belief: quality craftsmanship combined with innovative materials can create
                  architectural marvels that stand the test of time.
                </p>
                <p>
                  Today, we serve residential, commercial, and industrial clients across India, delivering
                  custom-designed solutions that exceed expectations. Our state-of-the-art manufacturing facilities are
                  equipped with the latest technology, enabling us to produce high-quality products with precision and
                  efficiency.
                </p>
                <p>
                  What sets us apart is our commitment to understanding each client's unique requirements and
                  translating their vision into reality. From intricate jalis and elegant domes to robust FRP tanks and
                  decorative facades, we handle every project with the same level of dedication and attention to detail.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="relative">
              <Image
                src="/images/about-story.png"
                alt="RJ INTERIORS Manufacturing Facility"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-dark-primary p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Achievements Grid */}
        <FadeIn>
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-text-primary">
              What Makes Us Different
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <HoverCard key={achievement.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-dark-secondary rounded-xl overflow-hidden hover-lift shadow-lg border border-dark-accent"
                  >
                    <div className="relative h-48">
                      <Image
                        src={achievement.image || "/placeholder.svg"}
                        alt={achievement.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold mb-3 text-text-primary">{achievement.title}</h4>
                      <p className="text-sm text-text-muted">{achievement.description}</p>
                    </div>
                  </motion.div>
                </HoverCard>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
