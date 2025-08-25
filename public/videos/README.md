# Video Files Directory

This directory should contain the following video files for the video gallery:

1. `grc-manufacturing.mp4` - GRC Manufacturing Process video
2. `frp-installation.mp4` - FRP Installation Guide video  
3. `iskcon-project.mp4` - ISKCON Temple Project Showcase video
4. `quality-control.mp4` - Quality Control Process video
5. `architectural-elements.mp4` - Architectural Elements Showcase video
6. `client-testimonials.mp4` - Client Testimonials video

## Current Setup

The video gallery is currently using sample videos from sample-videos.com for demonstration purposes. To use your own videos:

1. Replace the video URLs in `components/VideoSection.tsx` with local file paths
2. Place your video files in this directory
3. Update the video URLs to point to `/videos/your-video-file.mp4`

## Video Specifications

- **Format**: MP4 (H.264 codec recommended)
- **Resolution**: 1920x1080 (Full HD) or higher
- **Duration**: 2-5 minutes per video
- **File Size**: Keep under 50MB per video for optimal loading
- **Audio**: Include audio track (videos will be muted by default)

## Features

- All videos are muted by default and start automatically when clicked
- Videos loop continuously
- Users can unmute and control playback using the video controls
- Videos are optimized for web viewing with responsive design
- Only one video plays at a time (clicking a new video pauses the current one)
- Category filtering for easy navigation
- Hover effects and smooth animations
