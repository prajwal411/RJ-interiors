import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OgImage() {
  const title = "RJ Interiors & Constructions"
  const subtitle = "GRC & FRP Experts in India"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, marginBottom: 16 }}>{title}</div>
        <div style={{ fontSize: 32, color: "#eab308" }}>{subtitle}</div>
      </div>
    ),
    { ...size }
  )
}


