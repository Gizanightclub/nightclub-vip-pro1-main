// SEO Optimization Library for Night Club Egypt - Enhanced 2025
import { Metadata } from 'next'

// المدن المصرية لـ Local SEO
export const EGYPTIAN_CITIES = [
  'القاهرة', 'الجيزة', 'العجوزة', 'الشيخ زايد', 'الهرم',
  'التجمع الخامس', '6 أكتوبر', 'المعادي', 'الزمالك', 'المهندسين',
  'مدينة نصر', 'هليوبوليس', 'مصر الجديدة', 'القاهرة الجديدة',
  'الدقي', 'جاردن سيتي', 'وسط البلد', 'كورنيش النيل'
]

// مولد عناوين ديناميكية
export const generatePageTitle = (
  baseTitle: string,
  location?: string,
  year: number = 2025
): string => {
  const locationText = location ? ` في ${location}` : ''
  return `${baseTitle}${locationText} ${year} | Night Club Egypt`
}

// مولد وصف محسن
export const generatePageDescription = (
  baseDescription: string,
  location?: string,
  keywords?: string[]
): string => {
  const locationText = location ? ` في ${location}` : ''
  const keywordText = keywords ? ` | ${keywords.join(' | ')}` : ''

  return `${baseDescription}${locationText}. خدمة VIP، حفلات فاخرة، موسيقى عالمية، أجواء رائعة${keywordText}. احجز الآن: 01286110562`
}

// 10 عناوين مختلفة للصفحة الرئيسية
export const HOME_PAGE_TITLES = [
  "🔥 أفضل نايت كلوب في مصر 2025 | احجز الآن",
  "نايت كلوب فاخر في القاهرة | حفلات VIP استثنائية",
  "🎉 سهرات ليلية لا تُنسى | Night Club Egypt",
  "ملهى ليلي راقي في مصر | خدمة VIP مميزة",
  "🔥 احجز نايت كلوب القاهرة | حفلات فاخرة 2025",
  "أجمل سهرة في مصر | نايت كلوب بمستوى عالمي",
  "حفلات ليلية فخمة | أفضل ديسكو في القاهرة",
  "🎵 موسيقى عالمية وأجواء رائعة | نايت كلوب مصر",
  "سهرة VIP في أرقى نايت كلوب بالقاهرة",
  "🔥 ترفيه ليلي استثنائي | Night Club Egypt"
]

// 10 عناوين لصفحة نايت كلوب القاهرة
export const CAIRO_PAGE_TITLES = [
  "نايت كلوب القاهرة | أفضل ملهى ليلي في العاصمة",
  "🔥 حفلات القاهرة الليلية | سهرات VIP فاخرة",
  "ديسكو القاهرة | ترفيه ليلي بمستوى عالمي",
  "نايت كلوب وسط القاهرة | أجواء استثنائية",
  "🎉 سهرات القاهرة | أفضل نايت كلوب في المدينة",
  "ملهى ليلي فاخر بالقاهرة | خدمة VIP مميزة",
  "حفلات القاهرة الراقية | Night Club Cairo",
  "🔥 أشهر نايت كلوب في القاهرة | احجز الآن",
  "ترفيه ليلي في قلب القاهرة | تجربة لا تُنسى",
  "نايت كلوب القاهرة الجديدة | حفلات عالمية"
]

// مولد Keywords محسن
export const generateSEOKeywords = (
  primaryKeywords: string[],
  location?: string,
  eventType?: string
): string[] => {
  const baseKeywords = [
    'نايت كلوب مصر 2025', 'أفضل نايت كلوب', 'حفلات ليلية فاخرة',
    'سهرات VIP', 'ملهى ليلي راقي', 'ديسكو القاهرة',
    'nightclub Egypt', 'Cairo nightlife', 'VIP nightclub'
  ]

  const locationKeywords = location ? [
    `نايت كلوب ${location}`,
    `حفلات ${location}`,
    `سهرات ${location}`,
    `ديسكو ${location}`,
    `ترفيه ليلي ${location}`
  ] : []

  const eventKeywords = eventType ? [
    `${eventType} نايت كلوب`,
    `حفلات ${eventType}`,
    `فعاليات ${eventType}`
  ] : []

  return [...baseKeywords, ...primaryKeywords, ...locationKeywords, ...eventKeywords]
}

// JSON-LD Schema محسن للمؤسسة
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["NightClub", "EntertainmentBusiness", "LocalBusiness"],
  "name": "Night Club Egypt",
  "alternateName": ["نايت كلوب مصر", "Night Club Cairo"],
  "description": "أفضل نايت كلوب في مصر لعام 2025 - حفلات ليلية فاخرة وخدمة VIP استثنائية في القاهرة والجيزة",
  "url": "https://www.nightclubegypt.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.nightclubegypt.com/images/nightclubegyptlogo.jpg",
    "width": 512,
    "height": 512,
    "caption": "Night Club Egypt Logo"
  },
  "image": [
    {
      "@type": "ImageObject",
      "url": "https://www.nightclubegypt.com/images/nightclubegyptlogo.jpg",
      "width": 1200,
      "height": 630,
      "caption": "Night Club Egypt - أفضل نايت كلوب في مصر"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cairo",
    "addressRegion": "Cairo Governorate",
    "addressCountry": "EG",
    "addressCountryName": "Egypt"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.0444,
    "longitude": 31.2357
  },
  "telephone": "+201286110562",
  "email": "info@nightclubegypt.com",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Thursday", "Friday", "Saturday"],
      "opens": "22:00",
      "closes": "04:00"
    }
  ],
  "amenityFeature": [
    {"@type": "LocationFeatureSpecification", "name": "VIP Service", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Live Music", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Dance Floor", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Private Rooms", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Bar Service", "value": true}
  ],
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61560900837183",
    "https://www.instagram.com/night_club_5star",
    "https://www.tiktok.com/@night.club993",
    "https://wa.me/201286110562"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "200",
    "bestRating": "5"
  },
  "areaServed": EGYPTIAN_CITIES.map(city => ({
    "@type": "City",
    "name": city
  }))
})

// Event Schema للحفلات
export const generateEventSchema = (eventData: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  price?: string;
  location?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": eventData.name,
  "description": eventData.description,
  "startDate": eventData.startDate,
  "endDate": eventData.endDate || eventData.startDate,
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Night Club Egypt",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": eventData.location || "Cairo",
      "addressRegion": "Cairo Governorate",
      "addressCountry": "EG"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "Night Club Egypt",
    "url": "https://www.nightclubegypt.com"
  },
  "offers": {
    "@type": "Offer",
    "price": eventData.price || "200",
    "priceCurrency": "EGP",
    "availability": "https://schema.org/InStock",
    "url": "https://www.nightclubegypt.com"
  },
  "performer": {
    "@type": "PerformingGroup",
    "name": "Live DJ Performance"
  }
})

// Video Object Schema
export const generateVideoSchema = (videoData: {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  duration?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": videoData.name,
  "description": videoData.description,
  "thumbnailUrl": videoData.thumbnailUrl,
  "contentUrl": videoData.contentUrl,
  "embedUrl": videoData.contentUrl,
  "uploadDate": new Date().toISOString(),
  "duration": videoData.duration || "PT2M30S",
  "publisher": {
    "@type": "Organization",
    "name": "Night Club Egypt",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.nightclubegypt.com/images/nightclubegyptlogo.jpg"
    }
  }
})

// FAQ Schema
export const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "ما هي أفضل أوقات زيارة نايت كلوب مصر؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نحن مفتوحون أيام الخميس والجمعة والسبت من الساعة 10 مساءً حتى 4 صباحاً. أفضل الأوقات للحصول على تجربة مميزة من 11 مساءً حتى 2 صباحاً."
      }
    },
    {
      "@type": "Question",
      "name": "هل يمكن حجز طاولة VIP في نايت كلوب القاهرة؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، نوفر خدمة حجز طاولات VIP مع خدمة مميزة. يمكنك الحجز عبر الاتصال على 01286110562 أو من خلال موقعنا الإلكتروني."
      }
    },
    {
      "@type": "Question",
      "name": "ما هي أسعار الدخول لنايت كلوب مصر؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "تختلف أسعار الدخول حسب اليوم والفعالية. يبدأ سعر الدخول من 200 جنيه مصري. للحصول على أحدث الأسعار والعروض اتصل بنا على 01286110562."
      }
    }
  ]
})

// Breadcrumb Schema
export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

// WebSite Schema with Search
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Night Club Egypt",
  "alternateName": "نايت كلوب مصر",
  "url": "https://www.nightclubegypt.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.nightclubegypt.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
})

// Canonical URL Generator
export const generateCanonicalUrl = (path: string = "") => {
  const baseUrl = "https://www.nightclubegypt.com";
  return `${baseUrl}${path}`;
}

// Meta Tags Generator
export const generateMetaTags = (pageData: {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
}): Record<string, string> => {
  const defaultImage = "https://www.nightclubegypt.com/images/nightclubegyptlogo.jpg";
  const defaultUrl = "https://www.nightclubegypt.com";

  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords.join(", "),
    "og:title": pageData.title,
    "og:description": pageData.description,
    "og:image": pageData.image || defaultImage,
    "og:url": pageData.url || defaultUrl,
    "og:type": "website",
    "og:site_name": "Night Club Egypt",
    "og:locale": "ar_EG",
    "twitter:card": "summary_large_image",
    "twitter:title": pageData.title,
    "twitter:description": pageData.description,
    "twitter:image": pageData.image || defaultImage,
    "twitter:site": "@nightclubegypt",
    "twitter:creator": "@nightclubegypt"
  };
};
