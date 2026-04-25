import { MetadataRoute } from 'next'
import { places } from '@/lib/places'

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
      url: `${baseUrl}/places/`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing-booking/`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/places/cairo/`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/places/alexandria/`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/places/hurghada/`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/places/north-coast/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/places/sharm-el-sheikh/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/places/el-gouna/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/night-club/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/disco/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/vip/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/night-club-prices-cairo/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/night-club-near-me/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/night-club-zamalek/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.90,
    },
    {
      url: `${baseUrl}/night-club-tagamo3/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.90,
    },
    {
      url: `${baseUrl}/prices/cairo`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/locations/cairo`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.90,
    },
    {
      url: `${baseUrl}/guides/booking`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/reviews/cairo`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.80,
    },
    {
      url: `${baseUrl}/blog/ultimate-guide-egypt-nightlife/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/vip-table-booking-prices-cairo/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/parties/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/best-nightclubs-egypt-2026/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/cheapest-clubs-cairo/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/booking-guide-egypt/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/places/nightclub-images/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/places/nightclub-videos/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
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

  // 👇 إضافة صفحات الأماكن الديناميكية
  const placePages = places.map((place) => ({
    url: `${baseUrl}/places/${place.slug}/`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 👇 إضافة صفحات حجز الأماكن
  const bookingPages = places.map((place) => ({
    url: `${baseUrl}/places/${place.slug}/book/`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // 👇 دمج جميع الصفحات
  return [
    ...staticPages,
    ...placePages,
    ...bookingPages,
  ]
}
