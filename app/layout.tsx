import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "RJ INTERIORS & CONSTRUCTIONS - GRC & FRP Experts in Bangalore",
  description:
    "Crafting Durability with Elegance. Specialists in Glass Fiber Reinforced Concrete (GRC/GFRC) and Fiber Reinforced Plastic (FRP) solutions with  In-House Manufacturing in Bangalore.",
  keywords:
    "GRC Bangalore, FRP Bangalore, Glass Fiber Reinforced Concrete, Fiber Reinforced Plastic, Construction, Interiors, Architectural Elements, Jalis, Domes, Columns",
  authors: [{ name: "RJ INTERIORS & CONSTRUCTIONS" }],
  openGraph: {
    title: "RJ INTERIORS & CONSTRUCTIONS - GRC & FRP Experts",
    description: "Crafting Durability with Elegance - GRC & FRP Experts in Bangalore",
    url: "https://rjinteriors.in",
    siteName: "RJ INTERIORS & CONSTRUCTIONS",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "RJ INTERIORS & CONSTRUCTIONS Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RJ INTERIORS & CONSTRUCTIONS - GRC & FRP Experts",
    description: "Crafting Durability with Elegance - GRC & FRP Experts in Bangalore",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
