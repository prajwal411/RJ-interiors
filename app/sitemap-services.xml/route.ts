import { NextRequest, NextResponse } from "next/server"

const BASE_URL = "https://rjinteriors.in"

export async function GET(req: NextRequest) {
  const services = [
    {
      loc: `${BASE_URL}/services/grc`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/services/frp`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/services/residential`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/services/commercial`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    }
  ]

  // Add all GRC sub-services
  const grcServices = [
    "grc-jali", "grc-domes", "grc-columns", "grc-cornices", "grc-arches", "grc-screens"
  ]
  
  grcServices.forEach(service => {
    services.push({
      loc: `${BASE_URL}/services/grc/${service}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.7"
    })
  })

  // Add all FRP sub-services
  const frpServices = [
    "frp-tanks", "frp-facades", "frp-waterproofing", "frp-storage", "frp-structures"
  ]
  
  frpServices.forEach(service => {
    services.push({
      loc: `${BASE_URL}/services/frp/${service}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.7"
    })
  })

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${services.map(service => `  <url>
    <loc>${service.loc}</loc>
    <lastmod>${service.lastmod}</lastmod>
    <changefreq>${service.changefreq}</changefreq>
    <priority>${service.priority}</priority>
  </url>`).join("\n")}
</urlset>`

  return new NextResponse(body, {
    headers: { 
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    },
  })
}


