import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { buildPageMetadata, toTitleCase } from "@/lib/seo"
import { SERVICE_CATEGORIES, PRODUCTS_BY_CATEGORY, getAllServiceSlugs } from "@/lib/services"

type Params = { params: { category: string; product: string } }

export const revalidate = 86400 // ISR daily

export async function generateStaticParams() {
  return getAllServiceSlugs().map(({ category, product }) => ({ category, product }))
}

export function generateMetadata({ params }: Params): Metadata {
  const { category, product } = params
  if (!SERVICE_CATEGORIES.includes(category as any) || !PRODUCTS_BY_CATEGORY[category as any]?.includes(product)) {
    return {}
  }
  return buildPageMetadata({ productOrService: `${category} ${product}`, city: "India", pathname: `/services/${category}/${product}/` })
}

export default function ProductPage({ params }: Params) {
  const { category, product } = params
  if (!SERVICE_CATEGORIES.includes(category as any) || !PRODUCTS_BY_CATEGORY[category as any]?.includes(product)) {
    notFound()
  }
  const title = `${toTitleCase(category)} ${toTitleCase(product)}`
  return (
    <main className="min-h-[70vh] pt-28 container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-text-primary">{title}</h1>
      <p className="text-text-secondary max-w-3xl">Details coming soon.</p>
    </main>
  )
}


