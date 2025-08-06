"use client"
import { Shield, Clock, Users, Award, Wrench, Leaf } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { CountUp } from "@/components/animations/count-up"

const differentiators = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control at every stage of production",
    stats: "100% Quality Tested",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "On-time project completion with efficient project management",
    stats: "95% On-Time Delivery",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled craftsmen and engineers with decades of experience",
    stats: "50+ Professionals",
  },
  {
    icon: Award,
    title: "Premium Materials",
    description: "Only the finest materials sourced from trusted suppliers",
    stats: "Grade A Materials",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description: "Tailored designs and manufacturing for unique requirements",
    stats: "100% Customizable",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable practices and environmentally conscious manufacturing",
    stats: "Green Certified",
  },
]

const achievements = [
  {
    number: 15,
    suffix: "+",
    label: "Years of Excellence",
    description: "Established in 2008, we've been serving clients with dedication",
  },
  {
    number: 500,
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully delivered projects across residential, commercial & industrial sectors",
  },
  {
    number: 50,
    suffix: "+",
    label: "Happy Clients",
    description: "Building lasting relationships with satisfied customers",
  },
  {
    number: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Consistently exceeding expectations with quality service",
  },
]

export default function WhyDifferent() {
  return (
    <section className="py-16 md:py-24 bg-dark-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gold-500 text-dark-primary rounded-full text-sm font-bold mb-6 shadow-lg">
              Our Advantage
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-primary">Why We Are Different</h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              What sets RJ INTERIORS & CONSTRUCTIONS apart in the competitive construction industry. Our commitment to
              excellence drives everything we do.
            </p>
          </div>
        </FadeIn>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-dark-secondary p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 shadow-lg border border-dark-accent"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mb-6 shadow-lg"
                >
                  <item.icon className="h-8 w-8 text-dark-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-text-primary">{item.title}</h3>
                <p className="text-text-muted mb-4">{item.description}</p>
                <div className="text-gold-500 font-semibold">{item.stats}</div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Achievements Section */}
        <FadeIn delay={0.6}>
          <div className="bg-gold-500 rounded-2xl p-8 md:p-12 text-dark-primary shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Track Record Speaks</h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and client satisfaction
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    <CountUp end={achievement.number} suffix={achievement.suffix} />
                  </div>
                  <div className="text-lg font-semibold mb-2 opacity-90">{achievement.label}</div>
                  <div className="text-sm opacity-75">{achievement.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Process Section */}
        <FadeIn delay={0.8}>
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">Our Process</h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                From concept to completion, we follow a systematic approach to ensure quality and timely delivery
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Consultation", desc: "Understanding your requirements and vision" },
                { step: "02", title: "Design", desc: "Creating custom designs and technical drawings" },
                {
                  step: "03",
                  title: "Manufacturing",
                  desc: "Precision manufacturing in our state-of-the-art facility",
                },
                { step: "04", title: "Installation", desc: "Professional installation and quality assurance" },
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-dark-secondary p-6 rounded-xl text-center shadow-lg border border-dark-accent">
                    <div className="text-3xl font-bold text-gold-500 mb-3">{process.step}</div>
                    <h4 className="text-lg font-semibold mb-2 text-text-primary">{process.title}</h4>
                    <p className="text-sm text-text-muted">{process.desc}</p>
                  </div>
                  {index < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gold-500" />}
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
