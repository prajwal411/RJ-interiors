import { NextResponse } from "next/server"
import { SOUTH_INDIA_CITIES, PRIORITY_SOUTH_INDIA_CITIES } from "@/lib/india"

const BASE_URL = "https://rjinteriors.in"

export async function GET() {
  const currentDate = new Date().toISOString()
  
  // Create XML sitemap for South Indian cities
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- South India Cities Directory Page -->
  <url>
    <loc>${BASE_URL}/south-india-cities</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Priority South Indian Cities -->
  ${PRIORITY_SOUTH_INDIA_CITIES.map(city => {
    const slug = city.toLowerCase().replace(/\s+/g, "-")
    return `  <url>
    <loc>${BASE_URL}/locations/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  }).join("\n")}
  
  <!-- All South Indian Cities by State -->
  ${Object.entries(SOUTH_INDIA_CITIES).map(([state, cities]) => 
    cities.map(city => {
      const slug = city.toLowerCase().replace(/\s+/g, "-")
      return `  <url>
    <loc>${BASE_URL}/locations/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
    }).join("\n")
  ).join("\n")}
  
  <!-- Service Pages for South India -->
  <url>
    <loc>${BASE_URL}/services/grc</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/services/frp</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/services/grc/jali</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${BASE_URL}/services/frp/tanks</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`

  return new NextResponse(xml, { 
    headers: { 
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    } 
  })
}
