import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nightclubegypt.com'
  const currentDate = new Date().toISOString()

  // Only include actual pages that exist in your app
  const pages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    }
  ]

  return pages
}
