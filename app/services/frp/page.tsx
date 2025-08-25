import type { Metadata } from "next"
import Link from "next/link"
import { buildPageMetadata } from "@/lib/seo"

export const revalidate = 86400

export function generateMetadata(): Metadata {
  return buildPageMetadata({ productOrService: "FRP Services", city: "India", pathname: "/services/frp" })
}

export default function FRPHubPage() {
  return (
    <main className="min-h-[70vh] pt-28 container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-text-primary">FRP Services</h1>
      <p className="text-text-secondary max-w-3xl mb-6">Explore FRP tanks, facades, gutters and more.</p>
      <div className="flex gap-4 flex-wrap">
        <Link href="/services/frp/tanks" className="underline hover:text-gold-500">FRP Tanks</Link>
      </div>
    </main>
  )
}


