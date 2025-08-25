import { NextResponse } from "next/server"

const BASE_URL = "https://rjinteriors.in"

// Seeded with a few representative images; expand as needed
const images: Array<{ loc: string; image: string; title?: string; caption?: string }> = [
  { loc: "/", image: "/images/hero-1.png", title: "RJ Interiors", caption: "GRC & FRP Experts" },
  { loc: "/projects", image: "/images/grc-jali-bengaluru.jpg", title: "GRC jali, Bengaluru", caption: "Custom size, stone finish" },
  { loc: "/services/grc/jali/", image: "/images/hero-2.png", title: "GRC Jali", caption: "20mm thickness, paint-ready" },
]

export async function GET() {
  const entries = images
    .map(({ loc, image, title, caption }) => {
      const pageUrl = new URL(loc, BASE_URL).toString()
      const imageUrl = new URL(image, BASE_URL).toString()
      return `<url>\n  <loc>${pageUrl}</loc>\n  <image:image>\n    <image:loc>${imageUrl}</image:loc>\n    ${title ? `<image:title>${title}</image:title>` : ""}\n    ${caption ? `<image:caption>${caption}</image:caption>` : ""}\n  </image:image>\n</url>`
    })
    .join("\n")

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries}\n</urlset>`
  return new NextResponse(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  })
}


