"use client"
import { useEffect } from "react"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

function sendEvent(name: string, params: Record<string, any>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", name, params)
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const link = target.closest("a") as HTMLAnchorElement | null
      const button = target.closest("button") as HTMLButtonElement | null

      // tel
      if (link && link.href.startsWith("tel:")) {
        sendEvent("click_tel", { method: "tel", value: link.href.replace("tel:", "") })
        return
      }

      // mailto
      if (link && link.href.startsWith("mailto:")) {
        sendEvent("click_mailto", { method: "mailto", value: link.href.replace("mailto:", "") })
        return
      }

      // WhatsApp
      if (link && /(?:wa\.me|whatsapp\.com)/i.test(link.href)) {
        sendEvent("click_whatsapp", { href: link.href })
        return
      }

      // Brochure/spec downloads (common doc extensions)
      if (link && /\.(?:pdf|docx?|xlsx?)($|\?)/i.test(link.pathname)) {
        sendEvent("download_brochure", { path: link.pathname })
        return
      }

      // CTA buttons/links: look for data-cta attribute
      const ctaEl = (target.closest("[data-cta]") as HTMLElement | null) || (link?.hasAttribute("data-cta") ? link : null) || (button?.hasAttribute("data-cta") ? button : null)
      if (ctaEl) {
        const cta = ctaEl.getAttribute("data-cta") || "cta_click"
        sendEvent("cta_click", { cta, pathname: location.pathname })
        return
      }
    }

    document.addEventListener("click", onClick, { capture: true })
    return () => document.removeEventListener("click", onClick, { capture: true } as any)
  }, [])

  return null
}


