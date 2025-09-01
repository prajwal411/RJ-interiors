import { NextResponse } from "next/server"

const BASE_URL = "https://rjinteriors.in"

export async function GET() {
  const lines = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /wp-admin/",
    "Disallow: /*?*",
    "Disallow: /staging/",
    "",
    `Sitemap: ${BASE_URL}/sitemap.xml`,
    `Sitemap: ${BASE_URL}/sitemap-south-india.xml`,
  ]
  return new NextResponse(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}


