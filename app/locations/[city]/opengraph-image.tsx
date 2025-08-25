import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OgImage({ params }: { params: { city: string } }) {
  const city = decodeURIComponent(params.city).replace(/-/g, " ")
  const title = `FRP & GRC in ${city}`
  const subtitle = "RJ Interiors & Constructions"
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#0a0a0a", color: "#fafafa", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <div style={{ fontSize: 60, fontWeight: 800, marginBottom: 12 }}>{title}</div>
        <div style={{ fontSize: 28, color: "#eab308" }}>{subtitle}</div>
      </div>
    ),
    { ...size }
  )
}


