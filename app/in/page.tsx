import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import SeoJsonLd from "@/components/SeoJsonLd"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PRIORITY_CITIES, IN_STATES, IN_UNION_TERRITORIES } from "@/lib/india"

export const metadata: Metadata = {
  title: "Construction Services Across India | RJ Interiors & Constructions",
  description: "Professional construction and interior services across all major cities in India. GRC, FRP, residential, and commercial solutions with local expertise and quality materials.",
  keywords: "construction services India, GRC products India, FRP solutions India, residential construction India, commercial projects India, RJ Interiors India",
  openGraph: {
    title: "Construction Services Across India | RJ Interiors & Constructions",
    description: "Professional construction and interior services across all major cities in India. GRC, FRP, residential, and commercial solutions.",
    url: "https://rjinteriors.in/in",
    siteName: "RJ Interiors & Constructions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Construction services across India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Services Across India | RJ Interiors & Constructions",
    description: "Professional construction and interior services across all major cities in India.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function IndiaPage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RJ Interiors & Constructions",
    url: "https://rjinteriors.in",
    logo: "https://rjinteriors.in/logo.png",
    description: "Professional construction and interior services across India with expertise in GRC, FRP, and custom design solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 162/1, Sy No 21, BBMP Ward No:05, Venkateshwar Nagar",
      addressLocality: "Sampigehalli Main Road, Jakkur",
      addressRegion: "Bengaluru",
      addressCountry: "IN",
      postalCode: "560064"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9900579417",
      email: "grcbanglore@gmail.com",
      contactType: "customer service"
    },
    sameAs: [
      "https://www.facebook.com/rjinteriors",
      "https://www.instagram.com/rjinteriors",
      "https://www.linkedin.com/company/rj-interiors"
    ]
  }

  const serviceAreaJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Construction Services Across India",
    description: "Professional construction and interior services serving all major cities across India",
    areaServed: [
      {
        "@type": "Country",
        name: "India"
      },
      ...IN_STATES.map(state => ({
        "@type": "State",
        name: state
      })),
      ...PRIORITY_CITIES.map(city => ({
        "@type": "City",
        name: city
      }))
    ],
    provider: {
      "@type": "Organization",
      name: "RJ Interiors & Constructions",
      url: "https://rjinteriors.in"
    }
  }

  // Group cities by region for better organization
  const cityRegions = {
    "North India": ["Delhi", "Gurugram", "Noida", "Ghaziabad", "Faridabad", "Jaipur", "Lucknow", "Kanpur", "Agra", "Varanasi", "Amritsar", "Ludhiana", "Jalandhar", "Chandigarh", "Dehradun", "Srinagar"],
    "South India": ["Bengaluru", "Mysuru", "Hyderabad", "Chennai", "Coimbatore", "Madurai", "Mangaluru", "Hubballi", "Belagavi", "Kochi", "Ernakulam", "Thiruvananthapuram", "Kozhikode", "Kollam", "Thrissur", "Salem", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Karur", "Warangal", "Vijayawada", "Visakhapatnam", "Kakinada", "Guntur"],
    "West India": ["Mumbai", "Pune", "Nashik", "Thane", "Navi Mumbai", "Ahmedabad", "Surat", "Rajkot", "Vadodara", "Nagpur", "Kolhapur", "Solapur", "Jalgaon", "Aurangabad", "Pimpri Chinchwad"],
    "East India": ["Kolkata", "Siliguri", "Patna", "Ranchi", "Jamshedpur", "Dhanbad", "Durgapur", "Bhubaneswar", "Cuttack", "Rourkela", "Bilaspur", "Raipur"],
    "Central India": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Udaipur", "Jodhpur", "Kota", "Bareilly", "Moradabad", "Meerut"]
  }

  return (
    <main className="min-h-[70vh] pt-28 container mx-auto px-4">
      <SeoJsonLd data={organizationJsonLd} />
      <SeoJsonLd data={serviceAreaJsonLd} />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "India" },
        ]}
      />

      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-text-primary text-center">
        Construction Services Across India
      </h1>

      <p className="text-lg text-text-secondary text-center max-w-4xl mx-auto mb-12">
        RJ Interiors & Constructions serves all major cities across India with professional construction and interior solutions. 
        From GRC products to FRP solutions, we bring quality and expertise to every project nationwide.
      </p>

      {/* Services Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-text-primary text-center">Our Services Nationwide</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "GRC Products",
              description: "Glass Reinforced Concrete architectural elements",
              icon: "🏗️",
              link: "/services/grc"
            },
            {
              name: "FRP Solutions",
              description: "Fiber Reinforced Plastic tanks and structures",
              icon: "🔧",
              link: "/services/frp"
            },
            {
              name: "Residential Construction",
              description: "Complete residential building solutions",
              icon: "🏠",
              link: "/services/residential"
            },
            {
              name: "Commercial Projects",
              description: "Commercial and institutional construction",
              icon: "🏢",
              link: "/services/commercial"
            }
          ].map((service) => (
            <Link
              key={service.name}
              href={service.link}
              className="group block bg-dark-secondary border border-dark-accent rounded-xl p-6 hover:border-gold-500 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-semibold text-text-primary mb-2 group-hover:text-gold-500 transition-colors">
                {service.name}
              </h3>
              <p className="text-sm text-text-secondary">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Cities by Region */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-text-primary text-center">Cities We Serve</h2>
        
        {Object.entries(cityRegions).map(([region, cities]) => (
          <div key={region} className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-gold-500 border-b border-gold-500 pb-2">
              {region}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cities.map((city) => {
                const slug = city.toLowerCase().replace(/\s+/g, "-")
                return (
                  <Link
                    key={city}
                    href={`/locations/${slug}`}
                    className="group block bg-dark-secondary border border-dark-accent rounded-lg p-4 hover:border-gold-500 transition-all duration-300"
                  >
                    <h4 className="font-medium text-text-primary group-hover:text-gold-500 transition-colors">
                      {city}
                    </h4>
                    <p className="text-xs text-text-secondary mt-1">
                      View services
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </section>

      {/* States and Union Territories */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-text-primary text-center">States & Union Territories</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-500">States</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {IN_STATES.map((state) => (
                <div key={state} className="bg-dark-secondary border border-dark-accent rounded-lg p-3">
                  <span className="text-text-primary text-sm">{state}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-500">Union Territories</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {IN_UNION_TERRITORIES.map((ut) => (
                <div key={ut} className="bg-dark-secondary border border-dark-accent rounded-lg p-3">
                  <span className="text-text-primary text-sm">{ut}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-text-primary text-center">Why Choose RJ Interiors?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-dark-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-text-primary mb-2">Quality Assurance</h3>
            <p className="text-text-secondary text-sm">
              Premium materials and in-house manufacturing ensure consistent quality across all projects.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-dark-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-text-primary mb-2">Timely Delivery</h3>
            <p className="text-text-secondary text-sm">
              Efficient logistics and nationwide delivery network ensure projects stay on schedule.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-dark-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            <h3 className="font-semibold text-text-primary mb-2">Expert Support</h3>
            <p className="text-text-secondary text-sm">
              Professional installation teams and ongoing maintenance support across all locations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-dark-secondary p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Ready to Start Your Project?</h2>
        <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
          Whether you're in Delhi, Mumbai, Bangalore, or any other city across India, our team is ready to serve you with professional construction solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/#contact" 
            className="bg-gold-500 hover:bg-gold-600 text-dark-primary font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Get Free Quote
          </Link>
          <Link 
            href="/services"
            className="border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-primary font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </section>
    </main>
  )
}
