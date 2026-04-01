import { MetadataRoute } from 'next'

// 👇 إنشاء Sitemap محسن شامل لجميع الصفحات والمدن لتحسين Local SEO
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nightclubegypt.com'
  const lastModified = new Date()

  // 👇 الصفحات الأساسية مع أولوية عالية - محدثة لتطابق الصفحات الموجودة فعلياً
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
      url: `${baseUrl}/programs/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/packages/`,
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
      url: `${baseUrl}/contact/`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
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

  // 👇 دمج جميع الصفحات
  return [
    ...staticPages,
  ]
}
