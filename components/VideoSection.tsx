"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerIn } from "@/components/animations/stagger-in"
import VideoPlayer from "./VideoPlayer"

interface VideoItem {
  id: number
  title: string
  description: string
  videoUrl: string
  thumbnail: string
  category: string
  duration: string
}

const videos: VideoItem[] = [
  {
    id: 1,
    title: "Our Factory",
    description: "Watch our advanced GRC manufacturing process in action, showcasing precision and quality control.",
    videoUrl: "/api/videos/factory1.mp4",
    thumbnail: "",
    category: "Manufacturing",
    duration: "0.26"
  },
  {
    id: 2,
    title: "Our Factory",
    description: "Step-by-step guide to professional FRP installation techniques and best practices.",
    videoUrl: "/api/videos/factory2.mp4",
    thumbnail: "",
    category: "Manufacturing",
    duration: "0.41"
  },
  // {
  //   id: 3,
  //   title: "Project Showcase - ISKCON Temple",
  //   description: "A comprehensive look at our prestigious ISKCON temple project from concept to completion.",
  //   videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
  //   thumbnail: "/images/ISKCON Temple.jpg",
  //   category: "Project Showcase",
  //   duration: "4:15"
  // },
  // {
  //   id: 4,
  //   title: "Quality Control Process",
  //   description: "Explore our rigorous quality control procedures that ensure every product meets international standards.",
  //   videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
  //   thumbnail: "/images/quality.png",
  //   category: "Quality Control",
  //   duration: "2:30"
  // },
  // {
  //   id: 5,
  //   title: "Architectural Elements Showcase",
  //   description: "Discover our range of decorative GRC and FRP architectural elements and their applications.",
  //   videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
  //   thumbnail: "/images/Decorative Cornices.jpg",
  //   category: "Product Showcase",
  //   duration: "3:45"
  // },
  // {
  //   id: 6,
  //   title: "Client Testimonials",
  //   description: "Hear from our satisfied clients about their experience working with RJ Interiors.",
  //   videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
  //   thumbnail: "/images/testimonial-1.png",
  //   category: "Testimonials",
  //   duration: "5:10"
  // }
]



export default function VideoSection() {
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set())
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)
  const [modalVideoPlaying, setModalVideoPlaying] = useState(false)
  const [modalVideoMuted, setModalVideoMuted] = useState(false)
  const modalVideoRef = useRef<HTMLVideoElement>(null)

  const filteredVideos = videos

  const handleVideoPlay = (videoId: number) => {
    // Pause all other videos when one starts playing
    const newPlayingVideos = new Set([videoId])
    setPlayingVideos(newPlayingVideos)
  }

  const handleVideoPause = (videoId: number) => {
    setPlayingVideos(prev => {
      const newSet = new Set(prev)
      newSet.delete(videoId)
      return newSet
    })
  }

  const openModal = (video: VideoItem) => {
    setSelectedVideo(video)
    setModalVideoPlaying(false)
    setModalVideoMuted(false)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedVideo(null)
    setModalVideoPlaying(false)
    setModalVideoMuted(false)
    document.body.style.overflow = "unset"
  }

  const toggleModalVideoPlay = () => {
    const video = modalVideoRef.current
    if (!video) return

    if (modalVideoPlaying) {
      video.pause()
      setModalVideoPlaying(false)
    } else {
      video.play().catch((error) => {
        console.error("Error playing modal video:", error)
      })
      setModalVideoPlaying(true)
    }
  }

  const toggleModalVideoMute = () => {
    const video = modalVideoRef.current
    if (!video) return

    video.muted = !modalVideoMuted
    setModalVideoMuted(!modalVideoMuted)
  }

  return (
    <section className="py-16 md:py-24 bg-dark-primary">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gold-500 text-dark-primary rounded-full text-sm font-bold mb-6 shadow-lg">
              Video Gallery
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-primary">Project Videos</h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-4xl mx-auto">
              Watch our projects come to life through these informative videos showcasing our manufacturing processes, 
              installation techniques, and completed projects across India.
            </p>
          </div>
        </FadeIn>



        {/* Videos Grid */}
        <StaggerIn direction="up" staggerDelay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                         {filteredVideos.map((video) => (
               <motion.div
                 key={video.id}
                 whileHover={{ y: -8 }}
                 className="group cursor-pointer"
                 onClick={() => openModal(video)}
               >
                <div className="bg-dark-secondary border border-dark-accent rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                                         {/* Video Player */}
                     <VideoPlayer
                       src={video.videoUrl}
                       poster=""
                       title={video.title}
                       duration={video.duration}
                       autoPlay={true}
                       muted={true}
                       loop={true}
                       onPlay={() => handleVideoPlay(video.id)}
                       onPause={() => handleVideoPause(video.id)}
                     />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gold-500 text-dark-primary px-3 py-1 rounded-full text-xs font-bold">
                        {video.category}
                      </span>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-text-secondary text-sm line-clamp-3 mb-4">{video.description}</p>
                    <div className="flex items-center justify-between text-xs text-text-secondary">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-2" />
                        {video.category}
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">Duration:</span>
                        {video.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerIn>

        {/* Video Count Display */}
        <div className="text-center mt-12">
          <p className="text-text-secondary">
            Showing <span className="text-gold-500 font-semibold">{filteredVideos.length}</span> total videos
          </p>
                 </div>
       </div>

       {/* Video Modal */}
       <AnimatePresence>
         {selectedVideo && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
             onClick={closeModal}
           >
             <motion.div
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               className="bg-dark-primary border border-dark-accent rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto"
               onClick={(e) => e.stopPropagation()}
             >
               {/* Modal Header */}
               <div className="flex items-start justify-between p-4 sm:p-6 border-b border-dark-accent">
                 <div className="flex-1 pr-4">
                   <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-2">
                     {selectedVideo.title}
                   </h2>
                   <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-text-secondary mb-2">
                     <span className="flex items-center">
                       <span className="w-2 h-2 bg-gold-500 rounded-full mr-2" />
                       {selectedVideo.category}
                     </span>
                     <span className="flex items-center">
                       <span className="mr-1">Duration:</span>
                       {selectedVideo.duration}
                     </span>
                   </div>
                   <span className="inline-block bg-gold-500 text-dark-primary px-3 py-1 rounded-full text-xs font-bold">
                     {selectedVideo.category}
                   </span>
                 </div>
                 <button
                   onClick={closeModal}
                   className="bg-dark-accent hover:bg-red-600 p-2 rounded-full transition-colors flex-shrink-0"
                 >
                   <X className="h-5 w-5 text-white" />
                 </button>
               </div>

               {/* Modal Content */}
               <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-8 p-4 sm:p-6">
                 {/* Video Section */}
                                    <div className="space-y-4">
                     <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden bg-black">
                                               <video
                          ref={modalVideoRef}
                          src={selectedVideo.videoUrl}
                          poster=""
                          className="w-full h-full object-contain"
                          muted={modalVideoMuted}
                          loop
                          playsInline
                          controls={false}
                          autoPlay={true}
                          onPlay={() => setModalVideoPlaying(true)}
                          onPause={() => setModalVideoPlaying(false)}
                        />

                     {/* Video Controls */}
                     <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                       <div className="flex items-center gap-2">
                         <button
                           onClick={toggleModalVideoPlay}
                           className="bg-black/50 hover:bg-black/70 p-3 rounded-full transition-colors"
                         >
                           {modalVideoPlaying ? (
                             <Pause className="h-5 w-5 text-white" />
                           ) : (
                             <Play className="h-5 w-5 text-white" />
                           )}
                         </button>
                         <button
                           onClick={toggleModalVideoMute}
                           className="bg-black/50 hover:bg-black/70 p-3 rounded-full transition-colors"
                         >
                           {modalVideoMuted ? (
                             <VolumeX className="h-5 w-5 text-white" />
                           ) : (
                             <Volume2 className="h-5 w-5 text-white" />
                           )}
                         </button>
                       </div>
                       <div className="flex items-center gap-2">
                         <span className="bg-black/70 px-3 py-1 rounded text-white text-sm">
                           {selectedVideo.duration}
                         </span>
                         <button
                           onClick={() => {
                             const video = modalVideoRef.current
                             if (video) {
                               if (document.fullscreenElement) {
                                 document.exitFullscreen()
                               } else {
                                 video.requestFullscreen().catch(() => {
                                   console.log("Fullscreen not supported")
                                 })
                               }
                             }
                           }}
                           className="bg-black/50 hover:bg-black/70 p-3 rounded-full transition-colors"
                         >
                           <Maximize2 className="h-5 w-5 text-white" />
                         </button>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Video Details */}
                 <div className="space-y-6">
                   <div>
                     <div className="max-h-48 sm:max-h-64 overflow-y-auto">
                       <p className="text-text-secondary leading-relaxed">{selectedVideo.description}</p>
                     </div>
                   </div>

                   {/* Video Details Grid */}
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-dark-secondary rounded-xl">
                     <div>
                       <h4 className="text-gold-500 font-semibold mb-2">Category</h4>
                       <p className="text-text-secondary text-sm">{selectedVideo.category}</p>
                     </div>
                     <div>
                       <h4 className="text-gold-500 font-semibold mb-2">Duration</h4>
                       <p className="text-text-secondary text-sm">{selectedVideo.duration}</p>
                     </div>
                   </div>

                   {/* Video Features */}
                   <div>
                     <h4 className="text-gold-500 font-semibold mb-3">Video Features</h4>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                       <div className="flex items-center text-sm text-text-secondary">
                         <div className="w-2 h-2 bg-gold-500 rounded-full mr-3 flex-shrink-0" />
                         High Quality Video
                       </div>
                       <div className="flex items-center text-sm text-text-secondary">
                         <div className="w-2 h-2 bg-gold-500 rounded-full mr-3 flex-shrink-0" />
                         Professional Production
                       </div>
                       <div className="flex items-center text-sm text-text-secondary">
                         <div className="w-2 h-2 bg-gold-500 rounded-full mr-3 flex-shrink-0" />
                         HD Resolution
                       </div>
                       <div className="flex items-center text-sm text-text-secondary">
                         <div className="w-2 h-2 bg-gold-500 rounded-full mr-3 flex-shrink-0" />
                         Optimized for Web
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>

       <style jsx>{`
         .line-clamp-2 {
           display: -webkit-box;
           -webkit-line-clamp: 2;
           -webkit-box-orient: vertical;
           overflow: hidden;
         }
         .line-clamp-3 {
           display: -webkit-box;
           -webkit-line-clamp: 3;
           -webkit-box-orient: vertical;
           overflow: hidden;
         }
       `}</style>
     </section>
   )
 }
