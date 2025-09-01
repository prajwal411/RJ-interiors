import { NextRequest, NextResponse } from "next/server"

const BASE_URL = "https://rjinteriors.in"

export async function GET(req: NextRequest) {
  const sitemaps = [
    {
      loc: `${BASE_URL}/sitemap.xml`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: "1.0"
    },
    {
      loc: `${BASE_URL}/sitemap-priority.xml`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: "0.9"
    },
    {
      loc: `${BASE_URL}/sitemap-pages.xml`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.9"
    },
    {
      loc: `${BASE_URL}/sitemap-services.xml`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/sitemap-products.xml`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/sitemap-in-cities.xml`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/sitemap-all-cities.xml`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/sitemap-south-india.xml`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/sitemap-city-services.xml`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.7"
    },
    {
      loc: `${BASE_URL}/sitemap-images.xml`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: "0.6"
    },
    {
      loc: `${BASE_URL}/sitemap-cities-comprehensive.xml`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      loc: `${BASE_URL}/sitemap-index.xml`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.9"
    }
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
    <changefreq>${sitemap.changefreq}</changefreq>
    <priority>${sitemap.priority}</priority>
  </sitemap>`).join("\n")}
</sitemapindex>`

  return new NextResponse(body, {
    headers: { 
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    },
  })
}
