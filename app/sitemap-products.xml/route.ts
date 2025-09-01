import { NextRequest, NextResponse } from "next/server"

const BASE_URL = "https://rjinteriors.in"

export async function GET(req: NextRequest) {
  const products = [
    // GRC Products
    {
      loc: `${BASE_URL}/products/grc-jali`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/products/grc-domes`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/products/grc-columns`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/products/grc-cornices`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/products/grc-arches`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/products/grc-screens`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    // FRP Products
    {
      loc: `${BASE_URL}/products/frp-tanks`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/products/frp-facades`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/products/frp-waterproofing`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/products/frp-storage`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/products/frp-structures`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    // Construction Services
    {
      loc: `${BASE_URL}/products/residential-construction`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/products/commercial-construction`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/products/industrial-construction`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/products/heritage-restoration`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    }
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${products.map(product => `  <url>
    <loc>${product.loc}</loc>
    <lastmod>${product.lastmod}</lastmod>
    <changefreq>${product.changefreq}</changefreq>
    <priority>${product.priority}</priority>
  </url>`).join("\n")}
</urlset>`

  return new NextResponse(body, {
    headers: { 
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    },
  })
}


