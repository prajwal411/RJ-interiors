import { NextRequest, NextResponse } from "next/server"
import { PRIORITY_CITIES } from "@/lib/india"

const BASE_URL = "https://rjinteriors.in"

export async function GET(req: NextRequest) {
  // Optional pagination via ?page=1&size=1000
  const { searchParams } = new URL(req.url)
  const page = Number(searchParams.get("page") || 1)
  const size = Math.min(Number(searchParams.get("size") || 1000), 50000)
  const start = (page - 1) * size
  const end = start + size

  const slice = PRIORITY_CITIES.slice(start, end)
  const urls = slice.map((city) => {
    const slug = city.toLowerCase().replace(/\s+/g, "-")
    const loc = new URL(`/locations/${slug}`, BASE_URL).toString()
    return `<url>\n  <loc>${loc}</loc>\n  <lastmod>${new Date().toISOString()}</lastmod>\n  <changefreq>weekly</changefreq>\n  <priority>0.7</priority>\n</url>`
  })

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`
  return new NextResponse(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  })
}


