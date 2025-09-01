import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import SeoJsonLd from "@/components/SeoJsonLd"
import Breadcrumbs from "@/components/Breadcrumbs"
import NearbyCities from "@/components/NearbyCities"
import { CITY_TO_STATE, CITY_SEO_DATA } from "@/lib/india"
import { buildPageMetadata, buildBreadcrumbsJsonLd, buildLocalBusinessJsonLd, toTitleCase } from "@/lib/seo"

type PageProps = {
  params: { city: string }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const citySlug = decodeURIComponent(params.city)
  const state = CITY_TO_STATE[citySlug.toLowerCase()]
  const cityData = CITY_SEO_DATA[citySlug.toLowerCase()]
  
  const meta = buildPageMetadata({
    productOrService: "Construction Services",
    city: citySlug,
    state,
    pathname: `/locations/${citySlug}/`,
  })

  return {
    ...meta,
    title: `Construction Services in ${toTitleCase(citySlug)} | RJ Interiors`,
    description: cityData?.localContent || `Professional construction and interior services in ${toTitleCase(citySlug)}, ${state || "India"}. GRC, FRP, and custom design solutions.`,
    openGraph: {
      ...meta.openGraph,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: `Construction services in ${toTitleCase(citySlug)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/logo.png"],
    },
  }
}

export default function CityPage({ params }: PageProps) {
  const city = decodeURIComponent(params.city)
  const cityTitle = toTitleCase(city)
  const state = CITY_TO_STATE[city.toLowerCase()]
  const cityData = CITY_SEO_DATA[city.toLowerCase()]

  const breadcrumbs = buildBreadcrumbsJsonLd({
    baseUrl: "https://rjinteriors.in",
    pathname: `/locations/${city}/`,
    productOrService: "Construction Services",
    city,
    state,
  })

  const localBusinessJsonLd = buildLocalBusinessJsonLd({
    city,
    state,
    productOrService: "Construction Services",
    baseUrl: "https://rjinteriors.in",
  })

  const services = [
    {
      name: "GRC Products",
      slug: "grc-jali",
      description: "Glass Reinforced Concrete products for architectural applications",
      image: "/images/grc-jali-bengaluru.jpg"
    },
    {
      name: "FRP Solutions",
      slug: "frp-tanks",
      description: "Fiber Reinforced Plastic tanks and structures",
      image: "/images/frp-tanks-delhi.jpg"
    },
    {
      name: "Residential Construction",
      slug: "residential-construction",
      description: "Complete residential construction and interior solutions",
      image: "/images/income2.jpg"
    },
    {
      name: "Commercial Projects",
      slug: "commercial-projects",
      description: "Commercial and institutional construction services",
      image: "/images/income2.jpg"
    }
  ]

  const faqs = [
    {
      q: `What construction services do you offer in ${cityTitle}?`,
      a: `We provide comprehensive construction services in ${cityTitle} including GRC products, FRP solutions, residential construction, commercial projects, and custom design services. Our team serves ${cityTitle} and surrounding areas with professional expertise.`
    },
    {
      q: `Do you have experience working in ${cityTitle}?`,
      a: `Yes, we have extensive experience serving ${cityTitle} and nearby regions. Our local knowledge helps us understand regional requirements, climate considerations, and local building codes for optimal project delivery.`
    },
    {
      q: `What is the typical project timeline in ${cityTitle}?`,
      a: `Project timelines in ${cityTitle} vary based on scope and complexity. Small projects typically take 2-4 weeks, while larger projects may require 8-12 weeks. We provide detailed timelines during project planning.`
    },
    {
      q: `Do you offer maintenance services in ${cityTitle}?`,
      a: `Yes, we provide ongoing maintenance and support services for all our projects in ${cityTitle}. This includes regular inspections, repairs, and preventive maintenance to ensure long-term durability.`
    }
  ]

  return (
    <main className="min-h-[70vh] pt-28 container mx-auto px-4">
      <SeoJsonLd data={breadcrumbs} />
      <SeoJsonLd data={localBusinessJsonLd} />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "India", href: "/in" },
          ...(state ? [{ name: state }] : []),
          { name: cityTitle },
        ]}
      />

      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-text-primary">
        Construction Services in {cityTitle}
      </h1>

      {/* City Introduction */}
      <section className="mb-12 text-text-secondary max-w-4xl space-y-4">
        <p className="text-lg">
          {cityData?.localContent || `Welcome to ${cityTitle}, a vibrant city with diverse construction and development opportunities.`}
        </p>
        {cityData && (
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-dark-secondary p-4 rounded-lg">
              <h3 className="font-semibold text-gold-500 mb-2">Population</h3>
              <p className="text-text-primary">{cityData.population}</p>
            </div>
            <div className="bg-dark-secondary p-4 rounded-lg">
              <h3 className="font-semibold text-gold-500 mb-2">Area</h3>
              <p className="text-text-primary">{cityData.area}</p>
            </div>
            <div className="bg-dark-secondary p-4 rounded-lg">
              <h3 className="font-semibold text-gold-500 mb-2">Famous For</h3>
              <p className="text-text-primary">{cityData.famousFor.join(", ")}</p>
            </div>
          </div>
        )}
      </section>

      {/* Services Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-text-primary">Our Services in {cityTitle}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link 
              key={service.slug} 
              href={`/in/${city}/${service.slug}`}
              className="group block bg-dark-secondary border border-dark-accent rounded-xl overflow-hidden hover:border-gold-500 transition-all duration-300"
            >
              <div className="relative h-40">
                <Image
                  src={service.image}
                  alt={`${service.name} in ${cityTitle}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-text-primary mb-2 group-hover:text-gold-500 transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-text-secondary">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Local Expertise */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Why Choose RJ Interiors in {cityTitle}?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-gold-500 p-2 rounded-full">
                <svg className="w-4 h-4 text-dark-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">Local Knowledge</h3>
                <p className="text-text-secondary text-sm">Understanding of regional requirements and local building codes</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-gold-500 p-2 rounded-full">
                <svg className="w-4 h-4 text-dark-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">Quality Materials</h3>
                <p className="text-text-secondary text-sm">Premium GRC and FRP products manufactured in-house</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-gold-500 p-2 rounded-full">
                <svg className="w-4 h-4 text-dark-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">Timely Delivery</h3>
                <p className="text-text-secondary text-sm">Efficient logistics and delivery to {cityTitle} and nearby areas</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-gold-500 p-2 rounded-full">
                <svg className="w-4 h-4 text-dark-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">Expert Support</h3>
                <p className="text-text-secondary text-sm">Professional installation and ongoing maintenance services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-dark-accent rounded-lg p-4 bg-dark-secondary">
              <h3 className="font-medium text-text-primary mb-2">{faq.q}</h3>
              <p className="text-text-secondary text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-12 text-center bg-dark-secondary p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Ready to Start Your Project in {cityTitle}?</h2>
        <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
          Contact our team for a free consultation and personalized quote. We're here to bring your construction vision to life in {cityTitle}.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/#contact" 
            className="bg-gold-500 hover:bg-gold-600 text-dark-primary font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Get Free Quote
          </Link>
          <Link 
            href={`/in/${city}/grc-jali`}
            className="border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-primary font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            View GRC Products
          </Link>
        </div>
      </section>

      <NearbyCities currentCity={cityTitle} />
    </main>
  )
}

export const revalidate = 86400

export async function generateStaticParams() {
  // Generate static paths for major cities
  const cities = ["bengaluru", "delhi", "mumbai", "hyderabad", "chennai", "pune", "kolkata", "ahmedabad", "jaipur", "lucknow"]
  return cities.map((city) => ({ city }))
}


