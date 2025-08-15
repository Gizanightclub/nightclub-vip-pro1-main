import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NODE_ENV === 'production'
    ? 'https://www.nightclubegypt.com'
    : 'http://localhost:3000'

  const currentDate = new Date().toISOString()

  // الصفحات الرئيسية
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#programs`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/#pricing`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  ]

  // صفحات الداشبورد
  const dashboardPages = [
    {
      url: `${baseUrl}/dashboard`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/dashboard/programs`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/dashboard/pricing`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/dashboard/discount-codes`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/dashboard/universal-offer`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.3,
    }
  ]

  // صفحات المناطق المصرية للـ SEO المحلي - محسنة بالمزيد من المناطق
  const locationPages = [
    'cairo', 'giza', 'agouza', 'sheikh-zayed', 'sixth-october', 'new-cairo',
    'fifth-settlement', 'maadi', 'zamalek', 'mohandessin', 'nasr-city',
    'heliopolis', 'pyramid', 'dokki', 'downtown-cairo', 'garden-city',
    'rehab-city', 'shorouk-city', 'obour-city'
  ].map(location => ({
    url: `${baseUrl}/#${location}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // صفحات الخدمات محسنة
  const servicePages = [
    'vip-reservations', 'birthday-parties', 'corporate-events',
    'wedding-celebrations', 'private-events', 'ladies-night',
    'graduation-parties', 'bachelor-parties', 'new-year-events'
  ].map(service => ({
    url: `${baseUrl}/#services-${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }))

  // صفحات للكلمات المفتاحية الرئيسية
  const keywordPages = [
    'nightclub-egypt', 'cairo-nightlife', 'best-nightclub-cairo',
    'luxury-nightclub-egypt', 'vip-nightclub-giza', 'nightclub-zamalek'
  ].map(keyword => ({
    url: `${baseUrl}/#${keyword}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...mainPages,
    ...dashboardPages,
    ...locationPages,
    ...servicePages,
    ...keywordPages
  ]
}
