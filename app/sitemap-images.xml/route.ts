import { NextRequest, NextResponse } from "next/server"

const BASE_URL = "https://rjinteriors.in"

export async function GET(req: NextRequest) {
  const images = [
    // Logo and branding
    {
      loc: `${BASE_URL}/logo.png`,
      title: "RJ Interiors & Constructions Logo",
      caption: "Professional construction and interior services logo",
      geo_location: "Bengaluru, Karnataka, India"
    },
    // GRC Product Images
    {
      loc: `${BASE_URL}/images/grc-jali-bengaluru.jpg`,
      title: "GRC Jali in Bengaluru",
      caption: "Professional GRC jali installation in Bengaluru",
      geo_location: "Bengaluru, Karnataka, India"
    },
    {
      loc: `${BASE_URL}/images/grc-domes-mumbai.jpg`,
      title: "GRC Domes in Mumbai",
      caption: "Custom GRC dome installation in Mumbai",
      geo_location: "Mumbai, Maharashtra, India"
    },
    {
      loc: `${BASE_URL}/images/grc-columns-delhi.jpg`,
      title: "GRC Columns in Delhi",
      caption: "Classical GRC columns in Delhi NCR",
      geo_location: "Delhi, India"
    },
    // FRP Product Images
    {
      loc: `${BASE_URL}/images/frp-tanks-delhi.jpg`,
      title: "FRP Tanks in Delhi",
      caption: "Professional FRP tank installation in Delhi",
      geo_location: "Delhi, India"
    },
    {
      loc: `${BASE_URL}/images/frp-facades-hyderabad.jpg`,
      title: "FRP Facades in Hyderabad",
      caption: "Modern FRP facade solutions in Hyderabad",
      geo_location: "Hyderabad, Telangana, India"
    },
    // Construction Images
    {
      loc: `${BASE_URL}/images/income2.jpg`,
      title: "Residential Construction Project",
      caption: "Complete residential construction project showcase",
      geo_location: "India"
    },
    {
      loc: `${BASE_URL}/images/commercial-project.jpg`,
      title: "Commercial Construction Project",
      caption: "Large-scale commercial construction project",
      geo_location: "India"
    },
    // Project Gallery Images
    {
      loc: `${BASE_URL}/images/project-1.jpg`,
      title: "GRC Installation Project",
      caption: "Professional GRC installation in progress",
      geo_location: "India"
    },
    {
      loc: `${BASE_URL}/images/project-2.jpg`,
      title: "FRP Tank Installation",
      caption: "FRP tank installation and setup",
      geo_location: "India"
    },
    {
      loc: `${BASE_URL}/images/project-3.jpg`,
      title: "Residential Interior",
      caption: "Complete residential interior transformation",
      geo_location: "India"
    },
    {
      loc: `${BASE_URL}/images/project-4.jpg`,
      title: "Commercial Interior",
      caption: "Modern commercial interior design",
      geo_location: "India"
    }
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images.map(image => `  <url>
    <loc>${BASE_URL}/</loc>
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
      <image:geo_location>${image.geo_location}</image:geo_location>
    </image:image>
  </url>`).join("\n")}
</urlset>`

  return new NextResponse(body, {
    headers: { 
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    },
  })
}


