import { NextRequest, NextResponse } from "next/server"
import { PRIORITY_CITIES, IN_STATES, IN_UNION_TERRITORIES } from "@/lib/india"

const BASE_URL = "https://rjinteriors.in"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const page = Number(searchParams.get("page") || 1)
  const size = Math.min(Number(searchParams.get("size") || 1000), 50000)
  const start = (page - 1) * size
  const end = start + size

  const slice = PRIORITY_CITIES.slice(start, end)
  
  const urls = slice.map((city) => {
    const slug = city.toLowerCase().replace(/\s+/g, "-")
    
    // Generate multiple URL types for each city
    const cityUrls = [
      // Main city page
      `<url>
  <loc>${new URL(`/locations/${slug}`, BASE_URL).toString()}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>`,
      // GRC services in city
      `<url>
  <loc>${new URL(`/in/${slug}/grc-jali`, BASE_URL).toString()}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.7</priority>
</url>`,
      // FRP services in city
      `<url>
  <loc>${new URL(`/in/${slug}/frp-tanks`, BASE_URL).toString()}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.7</priority>
</url>`,
      // Residential services in city
      `<url>
  <loc>${new URL(`/in/${slug}/residential-construction`, BASE_URL).toString()}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.6</priority>
</url>`,
      // Commercial projects in city
      `<url>
  <loc>${new URL(`/in/${slug}/commercial-projects`, BASE_URL).toString()}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.6</priority>
</url>`,
      // Industrial solutions in city
      `<url>
  <loc>${new URL(`/in/${slug}/industrial-solutions`, BASE_URL).toString()}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.6</priority>
</url>`
    ]
    
    return cityUrls.join("\n")
  })

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls.join("\n")}
</urlset>`

  return new NextResponse(body, {
    headers: { 
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    },
  })
}
