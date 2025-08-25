"use client"
import React from "react"

type Props = {
  data: Record<string, unknown>
}

export default function SeoJsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}


