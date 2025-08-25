import { NextResponse } from "next/server"

const BASE_URL = "https://rjinteriors.in"
// Seeded; extend as you add more product pages
const products = [
  "/services/grc/jali/",
  "/services/frp/tanks/",
]

export async function GET() {
  const urls = products.map((path) => {
    const loc = new URL(path, BASE_URL).toString()
    return `<url>\n  <loc>${loc}</loc>\n  <changefreq>weekly</changefreq>\n  <priority>0.8</priority>\n</url>`
  })
  const body = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n${urls.join("\n")}\n</urlset>`
  return new NextResponse(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  })
}


