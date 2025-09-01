'use client'

import { useEffect } from 'react'

interface PerformanceMonitorProps {
  pageName: string
  trackUserBehavior?: boolean
}

export default function PerformanceMonitor({ 
  pageName, 
  trackUserBehavior = false 
}: PerformanceMonitorProps) {
  useEffect(() => {
    // Track page load performance
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      if (navigation) {
        const metrics = {
          pageName,
          timestamp: new Date().toISOString(),
          // Core Web Vitals
          dns: navigation.domainLookupEnd - navigation.domainLookupStart,
          tcp: navigation.connectEnd - navigation.connectStart,
          ttfb: navigation.responseStart - navigation.requestStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          totalTime: navigation.loadEventEnd - navigation.navigationStart,
          // User Experience Metrics
          firstPaint: 0,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0,
          cumulativeLayoutShift: 0
        }

        // Get paint timing
        const paintEntries = performance.getEntriesByType('paint')
        paintEntries.forEach(entry => {
          if (entry.name === 'first-paint') {
            metrics.firstPaint = entry.startTime
          }
          if (entry.name === 'first-contentful-paint') {
            metrics.firstContentfulPaint = entry.startTime
          }
        })

        // Track Core Web Vitals
        if ('PerformanceObserver' in window) {
          // Largest Contentful Paint
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const lastEntry = entries[entries.length - 1]
            if (lastEntry) {
              metrics.largestContentfulPaint = lastEntry.startTime
            }
          })
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

          // Cumulative Layout Shift
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) {
                clsValue += (entry as any).value
              }
            }
            metrics.cumulativeLayoutShift = clsValue
          })
          clsObserver.observe({ entryTypes: ['layout-shift'] })
        }

        // Send metrics to analytics (replace with your analytics service)
        sendPerformanceMetrics(metrics)
      }
    }

    // Track user behavior if enabled
    if (trackUserBehavior) {
      trackUserInteractions()
    }

    // Track page visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [pageName, trackUserBehavior])

  const sendPerformanceMetrics = (metrics: any) => {
    // Send to Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        event_label: pageName,
        value: Math.round(metrics.totalTime),
        custom_map: {
          dns_time: metrics.dns,
          tcp_time: metrics.tcp,
          ttfb: metrics.ttfb,
          fcp: metrics.firstContentfulPaint,
          lcp: metrics.largestContentfulPaint,
          cls: metrics.cumulativeLayoutShift
        }
      })
    }

    // Send to custom analytics endpoint
    fetch('/api/analytics/performance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(metrics),
    }).catch(console.error)
  }

  const trackUserInteractions = () => {
    let scrollDepth = 0
    let timeOnPage = 0
    const startTime = Date.now()

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      if (scrollPercent > scrollDepth) {
        scrollDepth = Math.max(scrollDepth, scrollPercent)
        
        // Track scroll milestones
        if (scrollDepth >= 25 && scrollDepth < 50) {
          trackEvent('scroll_25_percent', pageName)
        } else if (scrollDepth >= 50 && scrollDepth < 75) {
          trackEvent('scroll_50_percent', pageName)
        } else if (scrollDepth >= 75) {
          trackEvent('scroll_75_percent', pageName)
        }
      }
    }

    // Track time on page
    const trackTimeOnPage = () => {
      timeOnPage = Date.now() - startTime
      
      // Track time milestones
      if (timeOnPage >= 30000 && timeOnPage < 60000) {
        trackEvent('time_on_page_30s', pageName)
      } else if (timeOnPage >= 60000 && timeOnPage < 120000) {
        trackEvent('time_on_page_1m', pageName)
      } else if (timeOnPage >= 120000) {
        trackEvent('time_on_page_2m', pageName)
      }
    }

    // Track clicks on important elements
    const handleClick = (event: Event) => {
      const target = event.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        const text = target.textContent?.trim() || ''
        const href = (target as HTMLAnchorElement).href || ''
        
        if (text || href) {
          trackEvent('element_click', pageName, {
            element_type: target.tagName.toLowerCase(),
            element_text: text,
            element_href: href
          })
        }
      }
    }

    // Track form interactions
    const handleFormInteraction = (event: Event) => {
      const target = event.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        trackEvent('form_interaction', pageName, {
          form_element: target.tagName.toLowerCase(),
          form_type: (target as HTMLInputElement).type || 'text'
        })
      }
    }

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('click', handleClick)
    document.addEventListener('input', handleFormInteraction)
    document.addEventListener('change', handleFormInteraction)

    // Track time on page every 30 seconds
    const timeInterval = setInterval(trackTimeOnPage, 30000)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClick)
      document.removeEventListener('input', handleFormInteraction)
      document.removeEventListener('change', handleFormInteraction)
      clearInterval(timeInterval)
      
      // Send final metrics
      const finalMetrics = {
        pageName,
        scrollDepth,
        timeOnPage,
        timestamp: new Date().toISOString()
      }
      
      sendUserBehaviorMetrics(finalMetrics)
    }
  }

  const handleVisibilityChange = () => {
    if (document.hidden) {
      trackEvent('page_hidden', pageName)
    } else {
      trackEvent('page_visible', pageName)
    }
  }

  const trackEvent = (eventName: string, pageName: string, parameters: any = {}) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        event_category: 'User Behavior',
        event_label: pageName,
        ...parameters
      })
    }

    // Custom analytics
    fetch('/api/analytics/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: eventName,
        page: pageName,
        parameters,
        timestamp: new Date().toISOString()
      }),
    }).catch(console.error)
  }

  const sendUserBehaviorMetrics = (metrics: any) => {
    fetch('/api/analytics/behavior', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(metrics),
    }).catch(console.error)
  }

  return null // This component doesn't render anything
}
