import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  sizes?: string
  fill?: boolean
  style?: React.CSSProperties
  onClick?: () => void
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'sync' | 'auto'
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  sizes,
  fill = false,
  style,
  onClick,
  loading = 'lazy',
  decoding = 'async'
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  // Enhanced alt text for SEO
  const enhancedAlt = alt.includes('RJ Interiors') ? alt : `${alt} - RJ Interiors Services`

  // Generate WebP srcSet for better performance
  const generateSrcSet = (originalSrc: string) => {
    const baseUrl = originalSrc.replace(/\.[^/.]+$/, '')
    const extension = originalSrc.split('.').pop()
    
    if (extension === 'jpg' || extension === 'jpeg') {
      return `${baseUrl}.webp 1x, ${baseUrl}@2x.webp 2x, ${baseUrl}@3x.webp 3x`
    }
    
    return originalSrc
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setError(true)
    setIsLoading(false)
  }

  // Fallback image for errors
  if (error) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
      >
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`} style={style}>
      <Image
        src={src}
        alt={enhancedAlt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={`
          transition-opacity duration-300
          ${isLoading ? 'opacity-0' : 'opacity-100'}
          ${onClick ? 'cursor-pointer' : ''}
        `}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}
        fill={fill}
        onClick={onClick}
        loading={loading}
        decoding={decoding}
        onLoad={handleLoad}
        onError={handleError}
        // Advanced image optimization
        unoptimized={false}
        // SEO attributes
        title={enhancedAlt}
        // Performance optimizations
        {...(fill ? {} : { sizes: sizes || `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw` })}
      />
      
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* WebP fallback notice for SEO */}
      <noscript>
        <img 
          src={src} 
          alt={enhancedAlt}
          width={width} 
          height={height}
          className={className}
          loading={loading}
        />
      </noscript>
    </div>
  )
}

// Specialized components for different use cases
export function HeroImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      priority={true}
      quality={90}
      sizes="100vw"
      className={`${props.className} hero-image`}
    />
  )
}

export function ThumbnailImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      quality={75}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      className={`${props.className} thumbnail-image`}
    />
  )
}

export function GalleryImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      quality={85}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={`${props.className} gallery-image`}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  )
}
