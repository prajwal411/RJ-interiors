"use client"

import { useState, useRef } from "react"

export default function VideoTest() {
  const [videoError, setVideoError] = useState<string | null>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const target = e.target as HTMLVideoElement
    console.error("Video error:", target.error)
    setVideoError(`Error: ${target.error?.message || 'Unknown error'}`)
  }

  const handleVideoLoad = () => {
    setVideoLoaded(true)
    setVideoError(null)
    console.log("Video loaded successfully")
  }

  const testVideo = "/videos/factory1.mp4"

  return (
    <div className="p-8 bg-dark-primary min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-4">Video Test</h1>
        
        <div className="bg-dark-secondary p-4 rounded-lg mb-4">
          <h2 className="text-lg font-semibold text-white mb-2">Test Video: {testVideo}</h2>
          
          {videoError && (
            <div className="bg-red-900/20 border border-red-500 p-3 rounded mb-4">
              <p className="text-red-400 text-sm">{videoError}</p>
            </div>
          )}
          
          {videoLoaded && (
            <div className="bg-green-900/20 border border-green-500 p-3 rounded mb-4">
              <p className="text-green-400 text-sm">Video loaded successfully!</p>
            </div>
          )}
          
          <video
            ref={videoRef}
            src={testVideo}
            className="w-full h-64 bg-black rounded"
            controls
            onError={handleVideoError}
            onLoadedData={handleVideoLoad}
            onLoadStart={() => console.log("Video loading started")}
            onCanPlay={() => console.log("Video can play")}
            onCanPlayThrough={() => console.log("Video can play through")}
          />
        </div>
        
        <div className="bg-dark-secondary p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-2">Debug Info</h3>
          <div className="text-sm text-gray-300 space-y-1">
            <p>Video URL: {testVideo}</p>
            <p>Video Element: {videoRef.current ? "Found" : "Not found"}</p>
            <p>Video Ready State: {videoRef.current?.readyState || "N/A"}</p>
            <p>Video Network State: {videoRef.current?.networkState || "N/A"}</p>
            <p>Video Error: {videoRef.current?.error?.message || "None"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

