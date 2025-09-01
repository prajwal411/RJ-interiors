import { NextResponse } from "next/server"

const BASE_URL = "https://rjinteriors.in"

export async function GET() {
  const sitemaps = [
    `${BASE_URL}/sitemap-pages.xml`,
    `${BASE_URL}/sitemap-services.xml`,
    `${BASE_URL}/sitemap-products.xml`,
    `${BASE_URL}/sitemap-in-cities.xml`,
    `${BASE_URL}/sitemap-all-cities.xml`,
    `${BASE_URL}/sitemap-city-services.xml`,
    `${BASE_URL}/sitemap-images.xml`,
    `${BASE_URL}/sitemap-cities-comprehensive.xml`,
    `${BASE_URL}/sitemap-index.xml`,
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemaps
    .map((loc) => `  <sitemap>\n    <loc>${loc}</loc>\n  </sitemap>`) 
    .join("\n")}\n</sitemapindex>`

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, max-age=3600",
    },
  })
}


