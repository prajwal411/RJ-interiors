import { NextResponse } from "next/server"
import { PRIORITY_SOUTH_INDIA_CITIES, SOUTH_INDIA_CITIES } from "@/lib/india"

const BASE_URL = "https://rjinteriors.in"

export async function GET() {
  const currentDate = new Date().toISOString()
  
  // Priority sitemap focusing on high-value pages
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- High Priority Pages -->
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <url>
    <loc>${BASE_URL}/south-india-cities</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${BASE_URL}/images/south-india-cities-og.jpg</image:loc>
      <image:title>South India Cities Directory</image:title>
      <image:caption>Comprehensive GRC and FRP services across South India</image:caption>
    </image:image>
  </url>
  
  <!-- Core Service Pages -->
  <url>
    <loc>${BASE_URL}/services/grc</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>${BASE_URL}/services/frp</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Priority South Indian Cities (Tier 1) -->
  ${PRIORITY_SOUTH_INDIA_CITIES.slice(0, 10).map(city => {
    const slug = city.toLowerCase().replace(/\s+/g, "-")
    const state = getCityState(city)
    return `  <url>
    <loc>${BASE_URL}/locations/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${BASE_URL}/images/${slug}-priority.jpg</image:loc>
      <image:title>${city} GRC and FRP Services</image:title>
      <image:caption>Professional construction services in ${city}, ${state}</image:caption>
    </image:image>
  </url>`
  }).join("\n")}
  
  <!-- Major Service Categories -->
  <url>
    <loc>${BASE_URL}/services/grc/jali</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${BASE_URL}/services/frp/tanks</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Regional Service Pages -->
  <url>
    <loc>${BASE_URL}/services/residential</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- State-Specific Service Pages -->
  <url>
    <loc>${BASE_URL}/services/karnataka</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>${BASE_URL}/services/tamil-nadu</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>${BASE_URL}/services/kerala</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>${BASE_URL}/services/andhra-pradesh</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>${BASE_URL}/services/telangana</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Important Business Pages -->
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
  
  <url>
    <loc>${BASE_URL}/projects</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Sitemap Index -->
  <url>
    <loc>${BASE_URL}/sitemap-index.xml</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>
  
  <url>
    <loc>${BASE_URL}/sitemap-south-india.xml</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`

  return new NextResponse(xml, { 
    headers: { 
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=1800, s-maxage=3600"
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
