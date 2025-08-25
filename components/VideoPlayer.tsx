"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize2, AlertCircle } from "lucide-react"

interface VideoPlayerProps {
  src: string
  poster: string
  title: string
  duration: string
  onPlay?: () => void
  onPause?: () => void
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
}

export default function VideoPlayer({
  src,
  poster,
  title,
  duration,
  onPlay,
  onPause,
  autoPlay = false,
  muted = true,
  loop = true
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(muted)
  const [isHovered, setIsHovered] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (autoPlay) {
      video.play().catch((error) => {
        // Autoplay failed, which is expected in some browsers
        console.log("Autoplay prevented by browser:", error)
      })
    }
  }, [autoPlay])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video || hasError) return

    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
      onPause?.()
    } else {
      video.play().catch((error) => {
        console.error("Error playing video:", error)
        setHasError(true)
      })
      setIsPlaying(true)
      onPlay?.()
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVideoClick = () => {
    if (!hasError) {
      togglePlay()
    }
  }

  const handleFullscreen = () => {
    const video = videoRef.current
    if (!video) return

    try {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        // Try different fullscreen methods for better browser support
        if (video.requestFullscreen) {
          video.requestFullscreen()
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen()
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen()
        } else {
          console.log("Fullscreen not supported in this browser")
        }
      }
    } catch (error) {
      console.log("Fullscreen error:", error)
    }
  }

  const handlePlay = () => {
    setIsPlaying(true)
    onPlay?.()
  }

  const handlePause = () => {
    setIsPlaying(false)
    onPause?.()
  }

  const handleLoadedData = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Video error:", e)
    setHasError(true)
    setIsLoading(false)
  }

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleVideoClick}
    >
      {hasError ? (
        // Error fallback
        <div className="w-full h-full bg-dark-accent flex items-center justify-center">
          <div className="text-center text-white">
            <AlertCircle className="h-12 w-12 mx-auto mb-2 text-red-400" />
            <p className="text-sm">Video unavailable</p>
            <p className="text-xs text-gray-400 mt-1">{title}</p>
          </div>
        </div>
      ) : (
               <video
         ref={videoRef}
         src={src}
         poster={poster || undefined}
         className="w-full h-full object-cover"
         muted={isMuted}
         loop={loop}
         playsInline
         controls={false}
         preload="auto"
         autoPlay={autoPlay}
         onPlay={handlePlay}
         onPause={handlePause}
         onLoadedData={handleLoadedData}
         onLoadedMetadata={() => {
           // Ensure video is muted on load and starts playing if autoPlay is true
           if (videoRef.current) {
             videoRef.current.muted = true
             setIsMuted(true)
             if (autoPlay) {
               videoRef.current.play().catch((error) => {
                 console.log("Autoplay prevented by browser:", error)
               })
             }
           }
         }}
         onError={handleError}
         onLoadStart={() => {
           setIsLoading(true)
           console.log("Video loading started:", src)
         }}
         onCanPlay={() => {
           console.log("Video can play:", src)
         }}
         onCanPlayThrough={() => {
           console.log("Video can play through:", src)
         }}
       />
      )}

      {/* Loading overlay */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold-500"></div>
        </div>
      )}

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Video Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation()
              if (!hasError) togglePlay()
            }}
            className="bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
            disabled={hasError}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 text-white" />
            ) : (
              <Play className="h-4 w-4 text-white" />
            )}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              toggleMute()
            }}
            className="bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
            disabled={hasError}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4 text-white" />
            ) : (
              <Volume2 className="h-4 w-4 text-white" />
            )}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-black/70 px-2 py-1 rounded text-white text-xs">
            {duration}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation()
              if (!hasError) handleFullscreen()
            }}
            className="bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
            disabled={hasError}
          >
            <Maximize2 className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
          <Play className="h-8 w-8 mx-auto mb-2" />
          <p className="text-sm font-medium">Watch Video</p>
        </div>
      </div>
    </div>
  )
}
