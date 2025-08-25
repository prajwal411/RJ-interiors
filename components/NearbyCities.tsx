import Link from "next/link"
import { PRIORITY_CITIES } from "@/lib/india"

// Trivial nearest heuristic: pick first N from priority (could be replaced with geo-distance)
export default function NearbyCities({ currentCity, limit = 6 }: { currentCity: string; limit?: number }) {
  const current = currentCity.toLowerCase()
  const options = PRIORITY_CITIES.filter((c) => c.toLowerCase() !== current).slice(0, limit)

  if (!options.length) return null
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-text-primary mb-3">Available in nearby cities</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((city) => {
          const slug = city.toLowerCase().replace(/\s+/g, "-")
          return (
            <Link
              key={city}
              href={`/locations/${slug}`}
              className="text-sm px-3 py-1 rounded-full border border-dark-accent text-text-secondary hover:text-gold-500"
            >
              {city}
            </Link>
          )
        })}
      </div>
    </div>
  )
}


