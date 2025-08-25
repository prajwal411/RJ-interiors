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

export function buildSeoDescription({ productOrService, city, state }: SeoInput): string {
  const cityTitle = toTitleCase(city)
  const productTitle = toTitleCase(productOrService)
  const stateTitle = state ? toTitleCase(state) : "India"
  // Aim for 150–160 chars
  return `RJIC manufactures ${productTitle} with custom design & installation in ${cityTitle} and across ${stateTitle}. In-house GRC/FRP, timely delivery.`
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

export function buildPageMetadata(input: SeoInput): Metadata {
  const title = buildSeoTitle(input)
  const description = buildSeoDescription(input)
  const canonical = input.pathname ? input.pathname : undefined
  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: buildImageAlt(input),
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },
  }
}


