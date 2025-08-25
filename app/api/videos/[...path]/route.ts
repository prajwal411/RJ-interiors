import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const videoPath = path.join(process.cwd(), 'public', 'videos', ...params.path)
    
    // Check if file exists
    try {
      await fs.access(videoPath)
    } catch {
      return new NextResponse('Video not found', { status: 404 })
    }

    // Read the video file
    const videoBuffer = await fs.readFile(videoPath)
    
    // Get file extension
    const ext = path.extname(videoPath).toLowerCase()
    
    // Set appropriate content type
    let contentType = 'video/mp4'
    if (ext === '.webm') contentType = 'video/webm'
    if (ext === '.ogg') contentType = 'video/ogg'
    if (ext === '.mov') contentType = 'video/quicktime'
    
    // Create response with proper headers
    const response = new NextResponse(videoBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Length': videoBuffer.length.toString(),
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=31536000',
      },
    })
    
    return response
  } catch (error) {
    console.error('Error serving video:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

