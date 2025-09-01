import { NextRequest, NextResponse } from "next/server"
import { PRIORITY_CITIES } from "@/lib/india"

const BASE_URL = "https://rjinteriors.in"

// Define all available services
const SERVICES = [
  "grc-jali",
  "frp-tanks", 
  "residential-construction",
  "commercial-projects",
  "industrial-solutions",
  "heritage-restoration",
  "custom-design",
  "consultation"
]

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const page = Number(searchParams.get("page") || 1)
  const size = Math.min(Number(searchParams.get("size") || 1000), 50000)
  const start = (page - 1) * size
  const end = start + size

  const slice = PRIORITY_CITIES.slice(start, end)
  
  const urls: string[] = []
  
  slice.forEach((city) => {
    const slug = city.toLowerCase().replace(/\s+/g, "-")
    
    SERVICES.forEach((service) => {
      urls.push(`<url>
  <loc>${new URL(`/in/${slug}/${service}`, BASE_URL).toString()}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.6</priority>
  <image:image>
    <image:loc>${new URL(`/images/${service}-${slug}.jpg`, BASE_URL).toString()}</image:loc>
    <image:title>${service.replace(/-/g, " ")} in ${city}</image:title>
    <image:caption>Professional ${service.replace(/-/g, " ")} services in ${city}</image:caption>
  </image:image>
</url>`)
    })
  })

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join("\n")}
</urlset>`

  return new NextResponse(body, {
    headers: { 
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    },
  })
}
