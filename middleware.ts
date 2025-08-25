import { NextResponse } from "next/server"

// URLs that are permanently gone (410)
const GONE_PATHS: string[] = [
  // "/old-deleted-page",
]

export function middleware(request: Request) {
  const url = new URL(request.url)
  // Enforce no trailing slash except root
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "")
    return NextResponse.redirect(url, 308)
  }
  // Security headers
  const res = GONE_PATHS.includes(url.pathname) ? new NextResponse("", { status: 410 }) : NextResponse.next()
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  res.headers.set("X-Content-Type-Options", "nosniff")
  res.headers.set("X-Frame-Options", "SAMEORIGIN")
  res.headers.set("Permissions-Policy", "geolocation=(), microphone=()")
  return res
}

export const config = {
  matcher: [
    "/((?!_next/|api/|favicon.ico|robots.txt|sitemap.xml|sitemap-.*).*)",
  ],
}


