import Link from "next/link"
import { Search } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-[70vh] pt-28 container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-text-primary">Page not found</h1>
      <p className="text-text-secondary mb-6">We couldn't find that page. Try searching or explore these links.</p>

      <form action="/" method="get" className="max-w-xl mx-auto mb-8" role="search" aria-label="Site search">
        <div className="flex items-stretch border border-dark-accent rounded-lg overflow-hidden">
          <input
            type="search"
            name="q"
            placeholder="Search services, products, cities"
            className="flex-1 bg-transparent px-4 py-3 outline-none text-text-primary placeholder:text-text-muted"
            aria-label="Search query"
          />
          <button type="submit" className="px-4 bg-gold-500 text-dark-primary font-medium flex items-center gap-2" aria-label="Search">
            <Search className="h-4 w-4" />
            Search
          </button>
        </div>
      </form>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
        <div className="p-5 border border-dark-accent rounded-xl bg-dark-secondary">
          <h2 className="font-semibold text-text-primary mb-3">Popular hubs</h2>
          <ul className="space-y-2">
            <li><Link href="/services/grc/" className="underline hover:text-gold-500">GRC Services</Link></li>
            <li><Link href="/services/frp/" className="underline hover:text-gold-500">FRP Services</Link></li>
          </ul>
        </div>
        <div className="p-5 border border-dark-accent rounded-xl bg-dark-secondary">
          <h2 className="font-semibold text-text-primary mb-3">Top cities</h2>
          <ul className="space-y-2">
            <li><Link href="/locations/delhi" className="underline hover:text-gold-500">Delhi</Link></li>
            <li><Link href="/locations/mumbai" className="underline hover:text-gold-500">Mumbai</Link></li>
            <li><Link href="/locations/bengaluru" className="underline hover:text-gold-500">Bengaluru</Link></li>
          </ul>
        </div>
        <div className="p-5 border border-dark-accent rounded-xl bg-dark-secondary">
          <h2 className="font-semibold text-text-primary mb-3">Need help?</h2>
          <ul className="space-y-2">
            <li><Link href="/#about" className="underline hover:text-gold-500">About us</Link></li>
            <li><Link href="/#contact" className="underline hover:text-gold-500">Contact</Link></li>
            <li><Link href="/sitemap" className="underline hover:text-gold-500">HTML Sitemap</Link></li>
          </ul>
        </div>
      </div>
    </main>
  )
}


