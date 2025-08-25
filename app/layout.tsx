import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { IN_STATES, IN_UNION_TERRITORIES } from "@/lib/india"
import AnalyticsEvents from "@/components/AnalyticsEvents"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://rjinteriors.in"),
  title: "RJ INTERIORS & CONSTRUCTIONS - GRC & FRP Experts in Bangalore",
  description:
    "Crafting Durability with Elegance. Specialists in Glass Fiber Reinforced Concrete (GRC/GFRC) and Fiber Reinforced Plastic (FRP) solutions with  In-House Manufacturing in Bangalore.",
  keywords:
    "GRC Bangalore, FRP Bangalore, Glass Fiber Reinforced Concrete, Fiber Reinforced Plastic, Construction, Interiors, Architectural Elements, Jalis, Domes, Columns",
  authors: [{ name: "RJ INTERIORS & CONSTRUCTIONS" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },
  themeColor: "#0a0a0a",
  openGraph: {
    title: "RJ INTERIORS & CONSTRUCTIONS - GRC & FRP Experts",
    description: "Crafting Durability with Elegance - GRC & FRP Experts in Bangalore",
    url: "/",
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
        {/* Google Search Console verification (replace with your token) */}
        <meta name="google-site-verification" content="" />
        {/* GA4 (replace G-XXXXXXX) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXX');`,
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preload"
          as="font"
          href="/fonts/poppins.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          // JSON-LD: Organization with service areas across India
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'RJ INTERIORS & CONSTRUCTIONS',
              url: 'https://rjinteriors.in',
              logo: 'https://rjinteriors.in/logo.png',
              description:
                'Specialists in GRC/GFRC and FRP solutions: jalis, domes, columns, facades, tanks, and custom manufacturing across India.',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+91-7892142197',
                  contactType: 'sales',
                  areaServed: 'IN',
                  availableLanguage: ['en', 'hi']
                }
              ],
              sameAs: [
                'https://grcbangalore.com',
                'https://frpbangalore.com'
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bengaluru',
                addressRegion: 'Karnataka',
                addressCountry: 'IN'
              },
              areaServed: [...IN_STATES, ...IN_UNION_TERRITORIES, 'India']
            })
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <AnalyticsEvents />
      </body>
    </html>
  )
}
