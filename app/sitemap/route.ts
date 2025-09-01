import { NextResponse } from "next/server"
import { PRIORITY_CITIES, SOUTH_INDIA_CITIES, PRIORITY_SOUTH_INDIA_CITIES } from "@/lib/india"

const BASE_URL = "https://rjinteriors.in"

export async function GET() {
  const hubs = [
    { name: "GRC Services", href: "/services/grc/" },
    { name: "FRP Services", href: "/services/frp/" },
  ]
  const products = [
    { name: "GRC Jali", href: "/services/grc/jali/" },
    { name: "FRP Tanks", href: "/services/frp/tanks/" },
  ]
  const cities = PRIORITY_CITIES.slice(0, 120).map((c) => ({
    name: c,
    href: `/locations/${c.toLowerCase().replace(/\s+/g, "-")}`,
  }))

  // Create South Indian cities sections
  const southIndiaSections = Object.entries(SOUTH_INDIA_CITIES).map(([state, cities]) => ({
    state,
    cities: cities.map(city => ({
      name: city,
      href: `/locations/${city.toLowerCase().replace(/\s+/g, "-")}`,
    }))
  }))

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>HTML Sitemap | RJ Interiors</title>
  <style>
    body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;padding:24px;line-height:1.6}
    h1{font-size:24px;margin:0 0 16px}
    h2{font-size:18px;margin:24px 0 8px}
    h3{font-size:16px;margin:20px 0 8px;color:#666}
    ul{margin:0;padding-left:20px}
    a{color:#eab308;text-decoration:none}
    a:hover{text-decoration:underline}
    .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:8px}
    .state-section{margin:24px 0;padding:16px;border:1px solid #eee;border-radius:8px}
    .state-cities{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;margin-top:12px}
  </style>
  <link rel="canonical" href="${new URL("/sitemap", BASE_URL)}" />
  <meta name="robots" content="noindex,follow" />
 </head>
 <body>
   <h1>HTML Sitemap</h1>
   <h2>Hubs</h2>
   <ul>
     ${hubs.map((h) => `<li><a href="${h.href}">${h.name}</a></li>`).join("")}
   </ul>
   <h2>Products</h2>
   <ul>
     ${products.map((p) => `<li><a href="${p.href}">${p.name}</a></li>`).join("")}
   </ul>
   
   <h2>South India - Priority Cities</h2>
   <div class="grid">
     ${PRIORITY_SOUTH_INDIA_CITIES.map((city) => {
       const href = `/locations/${city.toLowerCase().replace(/\s+/g, "-")}`
       return `<a href="${href}">${city}</a>`
     }).join("")}
   </div>
   
   <h2>South India - All Cities by State</h2>
   ${southIndiaSections.map(section => `
     <div class="state-section">
       <h3>${section.state}</h3>
       <div class="state-cities">
         ${section.cities.map(city => `<a href="${city.href}">${city.name}</a>`).join("")}
       </div>
     </div>
   `).join("")}
   
   <h2>Special Pages</h2>
   <ul>
     <li><a href="/south-india-cities">South India Cities Directory</a></li>
     <li><a href="/sitemap-south-india.xml">South India XML Sitemap</a></li>
   </ul>
   
   <h2>All Cities</h2>
   <div class="grid">
     ${cities.map((c) => `<a href="${c.href}">${c.name}</a>`).join("")}
   </div>
 </body>
 </html>`

  return new NextResponse(html, { headers: { "Content-Type": "text/html; charset=utf-8" } })
}


