import type { Metadata } from "next"
import Link from "next/link"
import SeoJsonLd from "@/components/SeoJsonLd"
import { buildPageMetadata, buildBreadcrumbsJsonLd, toTitleCase } from "@/lib/seo"
import { CITY_TO_STATE } from "@/lib/india"
import Breadcrumbs from "@/components/Breadcrumbs"
import NearbyCities from "@/components/NearbyCities"

interface CityPageProps {
  params: { city: string }
}

export function generateMetadata({ params }: CityPageProps): Metadata {
  const citySlug = decodeURIComponent(params.city)
  const state = CITY_TO_STATE[citySlug.toLowerCase()]
  return buildPageMetadata({
    productOrService: "FRP & GRC",
    city: citySlug,
    state,
    pathname: `/locations/${citySlug}`,
  })
}

export default function CityPage({ params }: CityPageProps) {
  const city = decodeURIComponent(params.city)
  const cityCap = toTitleCase(city)
  const state = CITY_TO_STATE[city.toLowerCase()]
  const breadcrumbs = buildBreadcrumbsJsonLd({
    baseUrl: "https://rjinteriors.in",
    pathname: `/locations/${city}`,
    productOrService: "FRP & GRC",
    city,
    state,
  })
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GRC & FRP Manufacturing and Installation",
    serviceType: [
      "GRC Jali Fabrication",
      "Architectural Domes",
      "Classical Columns",
      "Decorative Cornices",
      "FRP Tanks",
      "Facade Systems",
    ],
    areaServed: [state ? toTitleCase(state) : "India", toTitleCase(city), "India"],
    provider: {
      "@type": "Organization",
      name: "RJ INTERIORS & CONSTRUCTIONS",
      url: "https://rjinteriors.in",
      telephone: "+91-7892142197",
      email: "grcbanglore@gmail.com",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "GRC & FRP Solutions",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "GRC Jalis" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "FRP Tanks" } },
      ],
    },
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  }

  return (
    <main className="min-h-[70vh] pt-28 container mx-auto px-4">
      <SeoJsonLd data={breadcrumbs} />
      <SeoJsonLd data={serviceJsonLd} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "India", href: "/in" },
          ...(state ? [{ name: state }] : []),
          { name: cityCap },
        ]}
      />
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-text-primary">
        {cityCap} FRP & GRC Products
      </h1>
      <p className="text-text-secondary max-w-3xl mb-8">
        We supply and install premium FRP and GRC solutions in {cityCap}. Our offerings include GRC jalis and screens,
        domes, columns, cornices, arches, and FRP tanks, facades, and waterproofing — manufactured in-house and
        delivered across India.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {[
          'GRC Jalis & Screens',
          'Architectural Domes',
          'Classical Columns',
          'Decorative Cornices',
          'FRP Tanks & Storage',
          'Facade Systems',
        ].map((service) => (
          <div key={service} className="bg-dark-secondary border border-dark-accent rounded-xl p-5">
            <h3 className="font-semibold text-text-primary mb-2">{service}</h3>
            <p className="text-sm text-text-secondary">
              Available in {cityCap}. Custom sizes, finishes and installation support.
            </p>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Link href="/#contact" className="bg-gold-500 text-dark-primary px-4 py-2 rounded-lg font-medium" data-cta="city_contact">
          Get a Quote
        </Link>
        <Link href="/" className="border border-dark-accent text-text-secondary px-4 py-2 rounded-lg font-medium">
          Back to Home
        </Link>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold text-text-primary mb-2">Explore services</h3>
        <div className="flex gap-3 flex-wrap">
          <Link href="/services/grc/" className="underline hover:text-gold-500">GRC Services</Link>
          <Link href="/services/frp/" className="underline hover:text-gold-500">FRP Services</Link>
          {/* Sibling geo links (example: first two from priority list not equal current) */}
          <Link href="/locations/delhi" className="underline hover:text-gold-500">Delhi</Link>
          <Link href="/locations/mumbai" className="underline hover:text-gold-500">Mumbai</Link>
        </div>
      </div>

      <NearbyCities currentCity={cityCap} />
    </main>
  )
}


