import { NextResponse } from "next/server"
import { SOUTH_INDIA_CITIES, PRIORITY_SOUTH_INDIA_CITIES } from "@/lib/india"

const BASE_URL = "https://rjinteriors.in"

export async function GET() {
  const currentDate = new Date().toISOString()
  
  // Create enhanced XML sitemap for South Indian cities
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  
  <!-- South India Cities Directory Page -->
  <url>
    <loc>${BASE_URL}/south-india-cities</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${BASE_URL}/images/south-india-cities-og.jpg</image:loc>
      <image:title>South India Cities - RJ Interiors Services</image:title>
      <image:caption>Comprehensive GRC and FRP services across South Indian cities</image:caption>
      <image:geo_location>South India</image:geo_location>
    </image:image>
  </url>
  
  <!-- Priority South Indian Cities with Enhanced SEO -->
  ${PRIORITY_SOUTH_INDIA_CITIES.map(city => {
    const slug = city.toLowerCase().replace(/\s+/g, "-")
    const state = getCityState(city)
    return `  <url>
    <loc>${BASE_URL}/locations/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${BASE_URL}/images/${slug}-grc-services.jpg</image:loc>
      <image:title>GRC and FRP Services in ${city}, ${state}</image:title>
      <image:caption>Professional construction and interior services in ${city}</image:caption>
      <image:geo_location>${city}, ${state}, India</image:geo_location>
    </image:image>
  </url>`
  }).join("\n")}
  
  <!-- All South Indian Cities by State -->
  ${Object.entries(SOUTH_INDIA_CITIES).map(([state, cities]) => 
    cities.map(city => {
      const slug = city.toLowerCase().replace(/\s+/g, "-")
      return `  <url>
    <loc>${BASE_URL}/locations/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${BASE_URL}/images/${slug}-construction.jpg</image:loc>
      <image:title>Construction Services in ${city}, ${state}</image:title>
      <image:caption>GRC, FRP, and interior design services in ${city}</image:caption>
      <image:geo_location>${city}, ${state}, India</image:geo_location>
    </image:image>
  </url>`
    }).join("\n")
  ).join("\n")}
  
  <!-- Service Pages for South India with Enhanced Content -->
  <url>
    <loc>${BASE_URL}/services/grc</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${BASE_URL}/images/grc-services-south-india.jpg</image:loc>
      <image:title>GRC Services Across South India</image:title>
      <image:caption>Professional GRC solutions in Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and Telangana</image:caption>
    </image:image>
  </url>
  
  <url>
    <loc>${BASE_URL}/services/frp</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${BASE_URL}/images/frp-services-south-india.jpg</image:loc>
      <image:title>FRP Services Across South India</image:title>
      <image:caption>Advanced FRP solutions for construction and industrial applications</image:caption>
    </image:image>
  </url>
  
  <url>
    <loc>${BASE_URL}/services/grc/jali</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${BASE_URL}/images/grc-jali-south-india.jpg</image:loc>
      <image:title>GRC Jali Design Services</image:title>
      <image:caption>Custom GRC jali designs for South Indian architecture</image:caption>
    </image:image>
  </url>
  
  <url>
    <loc>${BASE_URL}/services/frp/tanks</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${BASE_URL}/images/frp-tanks-south-india.jpg</image:loc>
      <image:title>FRP Tank Solutions</image:title>
      <image:caption>Durable FRP storage solutions for industrial and commercial use</image:caption>
    </image:image>
  </url>
  
  <!-- Regional Service Pages -->
  <url>
    <loc>${BASE_URL}/services/residential</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- About and Contact Pages -->
  <url>
    <loc>${BASE_URL}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>${BASE_URL}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`

  return new NextResponse(xml, { 
    headers: { 
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    } 
  })
}

// Helper function to get state for a city
function getCityState(city: string): string {
  for (const [state, cities] of Object.entries(SOUTH_INDIA_CITIES)) {
    if (cities.includes(city)) {
      return state
    }
  }
  return "South India"
}
