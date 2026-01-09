// Analytics event tracking utilities

type GTagEvent = {
  action: string
  category: string
  label?: string
  value?: number
}

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void
  }
}

// Send custom event to Google Analytics
export function trackEvent({ action, category, label, value }: GTagEvent) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track CTA button clicks
export function trackCTAClick(ctaName: string, location: string) {
  trackEvent({
    action: 'cta_click',
    category: 'engagement',
    label: `${ctaName} - ${location}`,
  })
}

// Track phone number clicks
export function trackPhoneClick(source: string) {
  trackEvent({
    action: 'phone_click',
    category: 'contact',
    label: source,
  })
}

// Track form submissions
export function trackFormSubmission(formName: string, success: boolean) {
  trackEvent({
    action: success ? 'form_submit_success' : 'form_submit_error',
    category: 'forms',
    label: formName,
  })
}

// Track service interest
export function trackServiceView(serviceName: string) {
  trackEvent({
    action: 'service_view',
    category: 'services',
    label: serviceName,
  })
}

// Track portfolio project views
export function trackPortfolioView(projectSlug: string) {
  trackEvent({
    action: 'portfolio_view',
    category: 'portfolio',
    label: projectSlug,
  })
}

// Track location page views
export function trackLocationView(city: string) {
  trackEvent({
    action: 'location_view',
    category: 'locations',
    label: city,
  })
}

// Track emergency service requests
export function trackEmergencyClick(source: string) {
  trackEvent({
    action: 'emergency_click',
    category: 'emergency',
    label: source,
    value: 1,
  })
}

// Track scroll depth
export function trackScrollDepth(depth: number) {
  trackEvent({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${depth}%`,
    value: depth,
  })
}
