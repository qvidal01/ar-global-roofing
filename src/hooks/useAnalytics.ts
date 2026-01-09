"use client"

import { useEffect } from 'react'
import { trackScrollDepth } from '@/src/lib/analytics'

// Hook to track scroll depth
export function useScrollDepth() {
  useEffect(() => {
    let maxScroll = 0
    const milestones = [25, 50, 75, 100]
    const tracked = new Set<number>()

    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      const scrollPercentage = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100
      )

      if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage
      }

      milestones.forEach((milestone) => {
        if (scrollPercentage >= milestone && !tracked.has(milestone)) {
          tracked.add(milestone)
          trackScrollDepth(milestone)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

// Hook to track page views on route change
export function usePageView(pageName: string) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageName,
        page_path: window.location.pathname,
      })
    }
  }, [pageName])
}
