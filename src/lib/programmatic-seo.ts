// Programmatic SEO for Night Club Egypt
// Dynamic page generation for scalable content

import { Metadata } from 'next'

// Dynamic city pages
export async function generateCityPages() {
  const cities = [
    { slug: 'cairo', name: 'القاهرة', nameEn: 'Cairo' },
    { slug: 'giza', name: 'الجيزة', nameEn: 'Giza' },
    { slug: 'alexandria', name: 'الإسكندرية', nameEn: 'Alexandria' },
    { slug: 'zamalek', name: 'الزمالك', nameEn: 'Zamalek' },
    { slug: 'tagamo3', name: 'التجمع الخامس', nameEn: 'Fifth Settlement' }
  ]

  return cities.map(city => ({
    slug: city.slug,
    metadata: {
      title: `نايت كلوب ${city.name} - أفضل النوادي الليلية في ${city.name} 2026`,
      description: `اكتشف أفضل نايت كلوب في ${city.name}! أسعار من 750 جنيه، VIP من 1500 جنيه. احجز الآن!`,
      keywords: [`نايت كلوب ${city.name}`, `nightclub ${city.nameEn}`, `أسعار نايت كلوب ${city.name}`]
    } as Metadata
  }))
}

// Dynamic club pages
export async function generateClubPages() {
  const clubs = [
    { slug: 'fox-club', name: 'فوكس كلوب', location: 'القاهرة' },
    { slug: 'rovi-club', name: 'روفي كلوب', location: 'القاهرة' },
    { slug: 'nox-club', name: 'نوكس كلوب', location: 'الزمالك' },
    { slug: 'omni-club', name: 'أومني كلوب', location: 'وسط البلد' },
    { slug: 'echo-club', name: 'إيكو كلوب', location: 'العجوزة' }
  ]

  return clubs.map(club => ({
    slug: club.slug,
    metadata: {
      title: `${club.name} - نايت كلوب ${club.location} | أسعار وحجز 2026`,
      description: `زور ${club.name} في ${club.location}! أفضل الأجواء والخدمة. احجز طاولتك الآن!`,
      keywords: [`${club.name}`, `نايت كلوب ${club.location}`, `حجز ${club.name}`]
    } as Metadata
  }))
}

// Dynamic price pages
export async function generatePricePages() {
  const priceTypes = [
    { slug: 'regular-entry', name: 'دخول عادي', price: '750 جنيه' },
    { slug: 'vip-table', name: 'طاولة VIP', price: '1500 جنيه' },
    { slug: 'couple-package', name: 'باقة زوجين', price: '1200 جنيه' },
    { slug: 'group-package', name: 'باقة مجموعة', price: 'حسب العدد' }
  ]

  return priceTypes.map(priceType => ({
    slug: priceType.slug,
    metadata: {
      title: `أسعار ${priceType.name} في نايت كلوب القاهرة - ${priceType.price}`,
      description: `تعرف على أسعار ${priceType.name} في أفضل نايت كلوب القاهرة. ${priceType.price}. احجز الآن!`,
      keywords: [`أسعار ${priceType.name}`, `سعر ${priceType.name}`, `حجز ${priceType.name}`]
    } as Metadata
  }))
}

// Generate sitemap entries programmatically
export function generateProgrammaticSitemap() {
  const baseUrl = 'https://www.nightclubegypt.com'
  const cities = ['cairo', 'giza', 'alexandria', 'zamalek', 'tagamo3']
  const clubs = ['fox-club', 'rovi-club', 'nox-club', 'omni-club', 'echo-club']
  const priceTypes = ['regular-entry', 'vip-table', 'couple-package', 'group-package']

  const sitemapEntries: Array<{
    url: string;
    lastModified: Date;
    changeFrequency: string;
    priority: number;
  }> = []

  // City pages
  cities.forEach(city => {
    sitemapEntries.push({
      url: `${baseUrl}/locations/${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    })
  })

  // Club pages
  clubs.forEach(club => {
    sitemapEntries.push({
      url: `${baseUrl}/places/${club}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7
    })
  })

  // Price pages
  priceTypes.forEach(priceType => {
    sitemapEntries.push({
      url: `${baseUrl}/prices/${priceType}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6
    })
  })

  return sitemapEntries
}