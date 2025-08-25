import type { Metadata } from "next"
import Link from "next/link"
import { buildPageMetadata } from "@/lib/seo"

export const revalidate = 86400

export function generateMetadata(): Metadata {
  return buildPageMetadata({ productOrService: "GRC Services", city: "India", pathname: "/services/grc" })
}

export default function GRCHubPage() {
  return (
    <main className="min-h-[70vh] pt-28 container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-text-primary">GRC Services</h1>
      <p className="text-text-secondary max-w-3xl mb-6">Explore GRC jalis, domes, columns, cornices and more.</p>
      <div className="flex gap-4 flex-wrap">
        <Link href="/services/grc/jali" className="underline hover:text-gold-500">GRC Jali</Link>
      </div>
    </main>
  )
}


