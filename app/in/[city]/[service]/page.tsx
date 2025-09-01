import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import SeoJsonLd from "@/components/SeoJsonLd"
import Breadcrumbs from "@/components/Breadcrumbs"
import NearbyCities from "@/components/NearbyCities"
import { CITY_TO_STATE } from "@/lib/india"
import { buildPageMetadata, buildBreadcrumbsJsonLd, buildLocalBusinessJsonLd, buildFAQJsonLd, toTitleCase, buildImageAlt } from "@/lib/seo"

type PageProps = {
  params: { city: string; service: string }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const citySlug = decodeURIComponent(params.city)
  const serviceSlug = decodeURIComponent(params.service)
  const state = CITY_TO_STATE[citySlug.toLowerCase()]
  const meta = buildPageMetadata({
    productOrService: serviceSlug,
    city: citySlug,
    state,
    pathname: `/in/${citySlug}/${serviceSlug}/`,
  })
  return {
    ...meta,
    robots: { index: true, follow: true },
    openGraph: {
      ...meta.openGraph,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: buildImageAlt({ productOrService: serviceSlug, city: citySlug }),
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

export default function CityServicePage({ params }: PageProps) {
  const city = decodeURIComponent(params.city)
  const service = decodeURIComponent(params.service)
  const cityTitle = toTitleCase(city)
  const serviceTitle = toTitleCase(service)
  const state = CITY_TO_STATE[city.toLowerCase()]

  const breadcrumbs = buildBreadcrumbsJsonLd({
    baseUrl: "https://rjinteriors.in",
    pathname: `/in/${city}/${service}/`,
    productOrService: service,
    city,
    state,
  })

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceTitle} — ${cityTitle}`,
    serviceType: serviceTitle,
    areaServed: [state ? toTitleCase(state) : "India", cityTitle, "India"],
    provider: {
      "@type": "Organization",
      name: "RJ INTERIORS & CONSTRUCTIONS",
      url: "https://rjinteriors.in",
      telephone: "+91-9900579417",
      email: "grcbanglore@gmail.com",
    },
  }

  const localBusinessJsonLd = buildLocalBusinessJsonLd({
    city,
    state,
    productOrService: service,
    baseUrl: "https://rjinteriors.in",
  })

  const faqs: Array<{ q: string; a: string }> = [
    {
      q: `What is the typical delivery time for ${serviceTitle} in ${cityTitle}?`,
      a: `Standard lead times for ${serviceTitle} in ${cityTitle} are 10–21 days depending on design complexity and quantity. We manufacture in-house and schedule dispatches to ${cityTitle} 2–3 times per week for predictable timelines.`,
    },
    {
      q: `Do you offer site measurement and installation support in ${cityTitle}?`,
      a: `Yes. Our team can coordinate site measurements, shop drawings, and installation for ${serviceTitle} across ${cityTitle} and nearby districts. We also provide remote guidance and approved installer referrals where needed.`,
    },
    {
      q: `What materials and finishes are available for ${serviceTitle}?`,
      a: `${serviceTitle} can be produced in GRC/GFRC or FRP depending on application. Popular finishes include stone, textured, paint-ready, and custom colorways. We recommend finish options based on the project's climate and maintenance needs.`,
    },
    {
      q: `Can you handle custom designs and large volumes?`,
      a: `Absolutely. Our in-house molds and experienced fabrication team enable custom geometry and repeatable production. We maintain quality control with batch-based checks and provide packing suited for long-distance transport to ${cityTitle}.`,
    },
  ]

  const faqJsonLd = buildFAQJsonLd(faqs)

  const projectSnapshots = [
    { src: "/images/grc-jali-bengaluru.jpg", title: `${serviceTitle} at a local project`, words: 70 },
    { src: "/images/frp-tanks-delhi.jpg", title: `${serviceTitle} for commercial site`, words: 70 },
    { src: "/images/income2.jpg", title: `${serviceTitle} custom install`, words: 70 },
  ]
    {
      q: `What is the typical delivery time for ${serviceTitle} in ${cityTitle}?`,
      a: `Standard lead times for ${serviceTitle} in ${cityTitle} are 10–21 days depending on design complexity and quantity. We manufacture in-house and schedule dispatches to ${cityTitle} 2–3 times per week for predictable timelines.`,
    },
    {
      q: `Do you offer site measurement and installation support in ${cityTitle}?`,
      a: `Yes. Our team can coordinate site measurements, shop drawings, and installation for ${serviceTitle} across ${cityTitle} and nearby districts. We also provide remote guidance and approved installer referrals where needed.`,
    },
    {
      q: `What materials and finishes are available for ${serviceTitle}?`,
      a: `${serviceTitle} can be produced in GRC/GFRC or FRP depending on application. Popular finishes include stone, textured, paint-ready, and custom colorways. We recommend finish options based on the project’s climate and maintenance needs.`,
    },
    {
      q: `Can you handle custom designs and large volumes?`,
      a: `Absolutely. Our in-house molds and experienced fabrication team enable custom geometry and repeatable production. We maintain quality control with batch-based checks and provide packing suited for long-distance transport to ${cityTitle}.`,
    },
  ]

  return (
    <main className="min-h-[70vh] pt-28 container mx-auto px-4">
      <SeoJsonLd data={breadcrumbs} />
      <SeoJsonLd data={serviceJsonLd} />
      <SeoJsonLd data={localBusinessJsonLd} />
      <SeoJsonLd data={faqJsonLd} />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "India", href: "/in" },
          ...(state ? [{ name: state }] : []),
          { name: cityTitle, href: `/locations/${city}` },
          { name: serviceTitle },
        ]}
      />

      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-text-primary">
        {serviceTitle} in {cityTitle}
      </h1>

      {/* Local intro */}
      <section className="mb-10 text-text-secondary max-w-3xl space-y-4">
        <p>
          We manufacture and supply {serviceTitle} for residential, commercial, and institutional projects in {cityTitle}
          {state ? `, ${state}` : ""}. Our in-house workflows—from mold making to finishing—help maintain quality and
          predictable timelines for city deliveries.
        </p>
        <p>
          Local projects often require durable materials with precise detailing. We tailor mix designs, reinforcement,
          and mounting hardware for site conditions in {cityTitle}. Our team supports drawings, mock-ups, and packaging
          suitable for long-haul transport.
        </p>
      </section>

      {/* Project snapshots */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Recent installs near {cityTitle}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectSnapshots.map((p) => (
            <div key={p.title} className="bg-dark-secondary border border-dark-accent rounded-xl overflow-hidden">
              <div className="relative h-44">
                <Image
                  src={p.src}
                  alt={buildImageAlt({ productOrService: serviceTitle, city: cityTitle })}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-text-primary mb-2">{p.title}</h3>
                <p className="text-sm text-text-secondary">
                  Engineered for local conditions in {cityTitle}, this installation showcases consistent finish quality
                  and robust mounting suited for daily use. Fabricated in-house and dispatched with protective packing
                  for predictable deliveries.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery / lead times */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-text-primary">Delivery & lead times</h2>
        <p className="text-text-secondary max-w-3xl">
          Typical lead times for {serviceTitle} to {cityTitle} are 10–21 days, subject to design complexity and volume.
          We consolidate shipments to optimize costs and schedule dispatches multiple times per week. Expedited options
          may be available upon request.
        </p>
      </section>

      {/* FAQs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">FAQs for {cityTitle}</h2>
        <div className="space-y-4 max-w-3xl">
          {faqs.map((f) => (
            <div key={f.q} className="border border-dark-accent rounded-lg p-4 bg-dark-secondary">
              <h3 className="font-medium text-text-primary mb-2">{f.q}</h3>
              <p className="text-text-secondary text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-text-primary">What our clients say</h2>
        <blockquote className="max-w-3xl text-text-secondary border-l-4 border-gold-500 pl-4">
          “Quality workmanship and reliable timelines. The team coordinated drawings and delivery to {cityTitle} without
          hassles. Finish and fitment were as specified.”
          <footer className="mt-2 text-sm text-text-muted">— Project Manager, {cityTitle}</footer>
        </blockquote>
      </section>

      {/* Links */}
      <div className="flex gap-3 mb-12">
        <Link href="/services/grc/" className="underline hover:text-gold-500" data-cta="hub_grc">GRC Hub</Link>
        <Link href="/services/frp/" className="underline hover:text-gold-500" data-cta="hub_frp">FRP Hub</Link>
        <Link href={`/locations/${city}`} className="underline hover:text-gold-500" data-cta="city_all_services">All services in {cityTitle}</Link>
      </div>

      <NearbyCities currentCity={cityTitle} />
    </main>
  )
}

export const revalidate = 86400

export async function generateStaticParams() {
  // Seed a handful of static paths; the rest will be on-demand via ISR
  const cities = ["bengaluru", "delhi", "mumbai", "hyderabad", "chennai"]
  const services = ["grc-jali", "frp-tanks"]
  const params: Array<{ city: string; service: string }> = []
  for (const city of cities) for (const service of services) params.push({ city, service })
  return params
}


