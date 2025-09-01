import Head from 'next/head'

interface AdvancedMetaTagsProps {
  title: string
  description: string
  keywords: string[]
  canonicalUrl: string
  ogImage: string
  ogImageAlt: string
  twitterHandle?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
  geoLocation?: {
    latitude: number
    longitude: number
    region: string
    placename: string
  }
  businessInfo?: {
    name: string
    url: string
    logo: string
    description: string
    address: string
    phone: string
    email: string
  }
}

export default function AdvancedMetaTags({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogImageAlt,
  twitterHandle = '@rjinteriors',
  author = 'RJ Interiors',
  publishedTime,
  modifiedTime,
  section = 'Business',
  tags = [],
  geoLocation,
  businessInfo
}: AdvancedMetaTagsProps) {
  const fullUrl = `https://rjinteriors.in${canonicalUrl}`
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:site_name" content="RJ Interiors" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#eab308" />
      
      {/* Geo Location Meta Tags */}
      {geoLocation && (
        <>
          <meta name="geo.region" content={geoLocation.region} />
          <meta name="geo.placename" content={geoLocation.placename} />
          <meta name="geo.position" content={`${geoLocation.latitude};${geoLocation.longitude}`} />
          <meta name="ICBM" content={`${geoLocation.latitude}, ${geoLocation.longitude}`} />
        </>
      )}
      
      {/* Business Schema Markup */}
      {businessInfo && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": businessInfo.name,
              "url": businessInfo.url,
              "logo": businessInfo.logo,
              "description": businessInfo.description,
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "Karnataka"
              },
              "telephone": businessInfo.phone,
              "email": businessInfo.email,
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "₹₹",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 12.9716,
                  "longitude": 77.5946
                },
                "geoRadius": "1000000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "GRC and FRP Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "GRC Services",
                      "description": "Glass Reinforced Concrete solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "FRP Services",
                      "description": "Fiber Reinforced Polymer solutions"
                    }
                  }
                ]
              }
            })
          }}
        />
      )}
      
      {/* Article Schema Markup */}
      {publishedTime && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": title,
              "description": description,
              "image": ogImage,
              "author": {
                "@type": "Organization",
                "name": author
              },
              "publisher": {
                "@type": "Organization",
                "name": "RJ Interiors",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://rjinteriors.in/logo.png"
                }
              },
              "datePublished": publishedTime,
              "dateModified": modifiedTime || publishedTime,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": fullUrl
              },
              "articleSection": section,
              "keywords": keywords.join(', ')
            })
          }}
        />
      )}
      
      {/* Performance Optimizations */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
    </Head>
  )
}
