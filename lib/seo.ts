import type { Metadata } from "next"

export type SeoInput = {
  productOrService: string
  city: string
  state?: string
  baseUrl?: string
  pathname?: string
}

const SITE_NAME = "RJ Interiors & Constructions"

export function toTitleCase(input: string): string {
  return input
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase())
}

export function buildSeoTitle({ productOrService, city }: SeoInput): string {
  const cityTitle = toTitleCase(city)
  const productTitle = toTitleCase(productOrService)
  // ≤ 60 chars target; keep concise
  return `${productTitle} in ${cityTitle} | RJ Interiors (GRC & FRP)`
}

export function buildAdvancedSeoTitle({ productOrService, city, state }: SeoInput): string {
  const cityTitle = toTitleCase(city)
  const productTitle = toTitleCase(productOrService)
  const stateTitle = state ? toTitleCase(state) : "India"
  
  // Create multiple title variations for better SEO
  const titles = [
    `${productTitle} in ${cityTitle}, ${stateTitle} | RJ Interiors`,
    `${productTitle} Suppliers ${cityTitle} | GRC & FRP Solutions`,
    `${cityTitle} ${productTitle} | Custom Design & Installation`,
    `${productTitle} ${cityTitle} | Best Prices & Quality`,
    `${cityTitle} ${productTitle} Manufacturer | RJ Interiors`
  ]
  
  // Return the most appropriate title based on length
  return titles.find(title => title.length <= 60) || titles[0]
}

export function buildSeoDescription({ productOrService, city, state }: SeoInput): string {
  const cityTitle = toTitleCase(city)
  const productTitle = toTitleCase(productOrService)
  const stateTitle = state ? toTitleCase(state) : "India"
  // Aim for 150–160 chars
  return `RJIC manufactures ${productTitle} with custom design & installation in ${cityTitle} and across ${stateTitle}. In-house GRC/FRP, timely delivery.`
}

export function buildAdvancedSeoDescription({ productOrService, city, state }: SeoInput): string {
  const cityTitle = toTitleCase(city)
  const productTitle = toTitleCase(productOrService)
  const stateTitle = state ? toTitleCase(state) : "India"
  
  // Create multiple description variations for better SEO
  const descriptions = [
    `Get premium ${productTitle} in ${cityTitle}, ${stateTitle}. RJ Interiors offers custom GRC & FRP solutions with in-house manufacturing, fast delivery, and competitive prices.`,
    `${productTitle} suppliers in ${cityTitle}. Professional installation, custom designs, and quality materials. Serving ${stateTitle} with GRC & FRP solutions.`,
    `Best ${productTitle} in ${cityTitle}. RJ Interiors provides custom design, installation, and maintenance. Trusted manufacturer serving ${stateTitle}.`,
    `${cityTitle} ${productTitle} experts. Custom solutions, professional installation, competitive pricing. RJ Interiors - your trusted partner in ${stateTitle}.`,
    `Quality ${productTitle} in ${cityTitle}. Custom design, professional installation, maintenance services. RJ Interiors serving ${stateTitle} with excellence.`
  ]
  
  // Return the most appropriate description based on length
  return descriptions.find(desc => desc.length <= 160) || descriptions[0]
}

export function buildImageAlt({ productOrService, city }: SeoInput): string {
  const cityTitle = toTitleCase(city)
  const productTitle = toTitleCase(productOrService)
  return `${productTitle} installation — ${cityTitle}, RJ Interiors`
}

export function buildCanonical({ baseUrl, pathname }: SeoInput): string | undefined {
  if (!baseUrl || !pathname) return undefined
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`
  return new URL(normalized, baseUrl).toString()
}

export function buildBreadcrumbsJsonLd({ city, state, productOrService, baseUrl, pathname }: SeoInput) {
  const items: Array<{ name: string; item?: string }> = [
    { name: "Home", item: baseUrl },
    { name: "India", item: baseUrl ? new URL("/in", baseUrl).toString() : undefined },
  ]
  if (state) items.push({ name: toTitleCase(state) })
  items.push({ name: toTitleCase(city) })
  items.push({ name: toTitleCase(productOrService), item: buildCanonical({ baseUrl, pathname }) })

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    name: "Breadcrumbs",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      ...(entry.item ? { item: entry.item } : {}),
    })),
  }
}

export function buildLocalBusinessJsonLd({ city, state, productOrService, baseUrl }: SeoInput) {
  const cityTitle = toTitleCase(city)
  const stateTitle = state ? toTitleCase(state) : "India"
  
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `RJ Interiors & Constructions - ${productOrService} in ${cityTitle}`,
    description: `Professional ${productOrService} services in ${cityTitle}, ${stateTitle}. Custom design, installation, and maintenance.`,
    url: baseUrl,
    telephone: "+91-9900579417",
    email: "grcbanglore@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 162/1, Sy No 21, BBMP Ward No:05, Venkateshwar Nagar",
      addressLocality: "Sampigehalli Main Road, Jakkur",
      addressRegion: "Bengaluru",
      addressCountry: "IN",
      postalCode: "560064"
    },
    areaServed: [
      {
        "@type": "City",
        name: cityTitle,
        containedInPlace: {
          "@type": "State",
          name: stateTitle
        }
      }
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "12.9716",
        longitude: "77.5946"
      },
      geoRadius: "50000"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${productOrService} Services`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${productOrService} Design`,
            description: `Custom ${productOrService} design services`
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${productOrService} Installation`,
            description: `Professional ${productOrService} installation services`
          }
        }
      ]
    }
  }
}

export function buildFAQJsonLd(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  }
}

export function buildPageMetadata(input: SeoInput): Metadata {
  const title = buildAdvancedSeoTitle(input)
  const description = buildAdvancedSeoDescription(input)
  const canonical = input.pathname ? input.pathname : undefined
  const cityTitle = toTitleCase(input.city)
  const stateTitle = input.state ? toTitleCase(input.state) : "India"
  
  return {
    title,
    description,
    keywords: [
      `${input.productOrService} in ${cityTitle}`,
      `${cityTitle} ${input.productOrService}`,
      `${input.productOrService} suppliers ${cityTitle}`,
      `${input.productOrService} manufacturers ${cityTitle}`,
      `GRC ${cityTitle}`,
      `FRP ${cityTitle}`,
      `construction materials ${cityTitle}`,
      `${cityTitle} construction`,
      `${stateTitle} ${input.productOrService}`,
      "RJ Interiors",
      "GRC products",
      "FRP solutions"
    ].join(", "),
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: buildImageAlt(input),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },
  }
}


