import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.arglobalroofing.com'

  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/services/asphalt-shingles',
    '/services/metal-roofing',
    '/services/emergency-repair',
    '/portfolio',
    '/investment-guide',
    '/process',
    '/reviews',
    '/locations/prosper',
    '/locations/frisco',
    '/locations/plano',
    '/locations/mckinney',
    '/locations/allen',
    '/locations/tyler',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('/services') || route.includes('/locations') ? 0.8 : 0.7,
  }))
}
