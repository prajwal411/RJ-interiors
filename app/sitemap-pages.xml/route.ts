import { NextRequest, NextResponse } from "next/server"

const BASE_URL = "https://rjinteriors.in"

export async function GET(req: NextRequest) {
  const pages = [
    {
      loc: `${BASE_URL}/`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: "1.0"
    },
    {
      loc: `${BASE_URL}/about`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/services`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.9"
    },
    {
      loc: `${BASE_URL}/projects`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/in`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.9"
    },
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
    },
    {
      loc: `${BASE_URL}/contact`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: "0.7"
    }
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join("\n")}
</urlset>`

  return new NextResponse(body, {
    headers: { 
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    },
  })
}


