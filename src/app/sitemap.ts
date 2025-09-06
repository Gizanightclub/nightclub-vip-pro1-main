import { MetadataRoute } from 'next'

// 👇 إنشاء Sitemap محسن شامل لجميع الصفحات والمدن لتحسين Local SEO
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nightclubegypt.com'
  const lastModified = new Date()

  // 👇 الصفحات الأساسية مع أولوية عالية
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/programs/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/events/`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    // 👇 صفحات إضافية للـ SEO
    {
      url: `${baseUrl}/vip-packages/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/artists/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/booking/`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    // 👇 إضافة روابط Sitemaps المتخصصة
    {
      url: `${baseUrl}/image-sitemap.xml`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/video-sitemap.xml`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }
  ]

  // 👇 صفحات المدن للSEO المحلي مع كلمات مفتاحية محسنة
  const cities = [
    'cairo', 'giza', 'agouza', 'sheikh-zayed', 'haram',
    'new-cairo', '6th-october', 'maadi', 'zamalek', 'mohandessin',
    'nasr-city', 'heliopolis', 'garden-city', 'downtown', 'dokki',
    'tagamoa-khamis', 'qasr-nile', 'abbassiya', 'shoubra'
  ]

  const cityPages = cities.map(city => ({
    url: `${baseUrl}/cities/${city}/`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))



  // 👇 دمج جميع الصفحات
  return [
    ...staticPages,
    ...cityPages,
  ]
}
