import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NODE_ENV === 'production'
    ? 'https://www.nightclubegypt.com' // إصلاح البروتوكول
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

  // صفحات المناطق المصرية للـ SEO المحلي
  const locationPages = [
    'cairo', 'giza', 'new-cairo', 'october', 'sheikh-zayed',
    'zamalek', 'maadi', 'heliopolis', 'nasr-city', 'tagammu'
  ].map(location => ({
    url: `${baseUrl}/locations/${location}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // صفحات الخدمات
  const servicePages = [
    'vip-reservations', 'birthday-parties', 'corporate-events',
    'wedding-celebrations', 'private-events'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    ...mainPages,
    ...dashboardPages,
    ...locationPages,
    ...servicePages
  ]
}
