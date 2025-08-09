"use client"

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void
  }
}

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID', {
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  return null
}

// Custom analytics events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Specific tracking functions for the portfolio
export const trackPosterView = (posterTitle: string, category: string) => {
  trackEvent('poster_view', 'Gallery', `${posterTitle} - ${category}`)
}

export const trackPosterDownload = (posterTitle: string, category: string) => {
  trackEvent('poster_download', 'Gallery', `${posterTitle} - ${category}`)
}

export const trackPosterShare = (posterTitle: string, category: string) => {
  trackEvent('poster_share', 'Gallery', `${posterTitle} - ${category}`)
}

export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent('search', 'Gallery', searchTerm, resultsCount)
}

export const trackFilterChange = (filter: string) => {
  trackEvent('filter_change', 'Gallery', filter)
}

export const trackContactForm = (action: 'view' | 'submit' | 'error') => {
  trackEvent('contact_form', 'Contact', action)
}
