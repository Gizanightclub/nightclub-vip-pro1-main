// 👇 مكتبة SEO محسنة لنايت كلوب مصر 2025 - تحسينات شاملة باللهجة المصرية
// SEO Optimization Library for Night Club Egypt - Enhanced 2025
import { Metadata } from 'next'

// 👇 المدن المصرية لـ Local SEO محدثة ومحسنة
export const EGYPTIAN_CITIES = [
  'القاهرة', 'الجيزة', 'العجوزة', 'الشيخ زايد', 'الهرم',
  'التجمع الخامس', '6 أكتوبر', 'المعادي', 'الزمالك', 'المهندسين',
  'مدينة نصر', 'هليوبوليس', 'مصر الجديدة', 'القاهرة الجديدة',
  'الدقي', 'جاردن سيتي', 'وسط البلد', 'كورنيش النيل', 'الشرقية', 'الجبالين'
]

// 👇 معلومات أساسية عن النايت كلوب
export const NIGHTCLUB_INFO = {
  name: "Night Club Egypt",
  arabicName: "نايت كلوب مصر",
  phone: "+201286110562",
  whatsapp: "https://wa.me/201286110562",
  email: "info@nightclubegypt.com",
  address: "كورنيش النيل، العجوزة، الجيزة، مصر",
  priceRange: "750-1500 جنيه مصري",
  workingHours: "من 8 مساءً حتى 4 فجراً يومياً",
  coordinates: { lat: 30.0666, lng: 31.2240 }
}

// 👇 مولد عناوين ديناميكية محسنة باللهجة المصرية
export const generatePageTitle = (
  baseTitle: string,
  location?: string,
  year: number = 2025
): string => {
  const locationText = location ? ` في ${location}` : ''
  return `🔥 ${baseTitle}${locationText} ${year} | Night Club Egypt - احجز الآن`
}

// 👇 مولد وصف محسن باللهجة المصرية
export const generatePageDescription = (
  baseDescription: string,
  location?: string,
  keywords?: string[]
): string => {
  const locationText = location ? ` في ${location}` : ' في أفضل مواقع القاهرة والجيزة'
  const keywordText = keywords ? ` | ${keywords.join(' | ')}` : ''

  return `🔥 ${baseDescription}${locationText}. خدمة VIP فاخرة، حفلات مع أشهر النجوم، DJs عالميين، أجواء نار 🎶 أسعار تبدأ من 750 جنيه${keywordText}. احجز دلوقتي: 01286110562`
}

// 👇 10 عناوين مختلفة للصفحة الرئيسية محسنة باللهجة المصرية
export const HOME_PAGE_TITLES = [
  "أفضل نايت كلوب في مصر 2025 - أسعار من 750 جنيه | احجز الآن",
  "نايت كلوب مصر | حفلات مع رحمة محسن وعصام صاصا",
  "اجمل سهرات في القاهرة | Night Club Egypt VIP",
  "ملهى ليلي راقي في مصر | خدمة VIP مميزة مع بوسي وروح",
  "احجز نايت كلوب العجوزة | حفلات خليجي وشرقي 2025",
  "أجمل سهرة في مصر | نايت كلوب بمستوى عالمي مع النجوم",
  "حفلات ليلية فخمة | أفضل ديسكو في القاهرة والجيزة",
  "موسيقى عالمية وأجواء رائعة | نايت كلوب مصر مع أشهر الراقصات",
  "ارخص نايت كلوب في مصر - احجز عبر موقعنا",
  "حجوزات نايت كلوب مصر | Night Club Egypt مع كبار الفنانين"
]

// 👇 10 عناوين لصفحة نايت كلوب القاهرة محسنة
export const CAIRO_PAGE_TITLES = [
  "نايت كلوب القاهرة | أفضل سهرات مع النجوم",
  "حفلات القاهرة الليلية | سهرات VIP فاخرة مع رحمة محسن",
  "ديسكو القاهرة | ترفيه ليلي بمستوى عالمي مع عصام صاصا",
  "نايت كلوب وسط القاهرة | أجواء استثنائية مع بوسي وروح",
  "سهرات القاهرة | أفضل نايت كلوب مع أشهر الراقصات",
  "ملهى ليلي فاخر بالقاهرة | خدمة VIP مميزة مع ليندا وبديعة",
  "حفلات القاهرة الراقية | Night Club Cairo مع كبار النجوم",
  "أشهر نايت كلوب في القاهرة | احجز الآن مع إسلام كبونجا",
  "ترفيه ليلي في قلب القاهرة | تجربة لا تُنسى مع أجمل الراقصات",
  "نايت كلوب القاهرة الجديدة | حفلات عالمية مع DJs مشاهير"
]

// 👇 مولد Keywords محسن باللهجة المصرية
export const generateSEOKeywords = (
  primaryKeywords: string[],
  location?: string,
  eventType?: string
): string[] => {
  const baseKeywords = [
    'نايت كلوب مصر 2025', 'أفضل نايت كلوب في مصر', 'حفلات ليلية فاخرة',
    'ارخص نايت كلوب', 'نايت كلوب VIP', 'حجز نايت كلوب', 'سهرات نايت كلوب',
    'nightclub Egypt', 'Cairo nightlife', 'VIP nightclub Egypt',
    'رحمة محسن نايت كلوب', 'عصام صاصا نايت كلوب', 'بوسي راقصة نايت كلوب'
  ]

  const locationKeywords = location ? [
    `نايت كلوب ${location}`,
    `حفلات ${location}`,
    `سهرات ${location}`,
    `ديسكو ${location}`,
    `ترفيه ليلي ${location}`,
    `أفضل نايت كلوب في ${location}`
  ] : []

  const eventKeywords = eventType ? [
    `${eventType} نايت كلوب`,
    `حفلات ${eventType}`,
    `فعاليات ${eventType} مصر`
  ] : []

  return [...baseKeywords, ...primaryKeywords, ...locationKeywords, ...eventKeywords]
}

// 👇 JSON-LD Schema محسن للمؤسسة مع تفاصيل أكثر
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["NightClub", "EntertainmentBusiness", "LocalBusiness"],
  "name": NIGHTCLUB_INFO.name,
  "alternateName": [NIGHTCLUB_INFO.arabicName, "Night Club Cairo", "أفضل نايت كلوب في مصر"],
  "description": "أفضل نايت كلوب في مصر لعام 2025 - حفلات ليلية فاخرة مع أشهر النجوم: رحمة محسن، عصام صاصا، بوسي، روح، ليندا. خدمة VIP استثنائية وأسعار تبدأ من 750 جنيه في القاهرة والجيزة والعجوزة والشيخ زايد.",
  "url": "https://www.nightclubegypt.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.nightclubegypt.com/images/logo-seo-1200x1200.webp",
    "width": 1200,
    "height": 1200,
    "caption": "Night Club Egypt Logo - شعار نايت كلوب مصر"
  },
  "image": [
    {
      "@type": "ImageObject",
      "url": "https://www.nightclubegypt.com/images/nightclub1.jpeg",
      "width": 1200,
      "height": 630,
      "caption": "Night Club Egypt - أفضل نايت كلوب في مصر مع أشهر النجوم"
    },
    {
      "@type": "ImageObject",
      "url": "https://www.nightclubegypt.com/images/nightclub0.jpeg",
      "width": 1200,
      "height": 630,
      "caption": "حفلات ليلية فاخرة مع رحمة محسن وعصام صاصا - نايت كلوب مصر"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "كورنيش النيل، العجوزة",
    "addressLocality": "الجيزة",
    "addressRegion": "القاهرة الكبرى",
    "postalCode": "11511",
    "addressCountry": "EG",
    "addressCountryName": "مصر"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": NIGHTCLUB_INFO.coordinates.lat,
    "longitude": NIGHTCLUB_INFO.coordinates.lng
  },
  "telephone": NIGHTCLUB_INFO.phone,
  "email": NIGHTCLUB_INFO.email,
  "priceRange": "750-1500 EGP",
  "currenciesAccepted": ["EGP", "USD", "EUR"],
  "paymentAccepted": ["Cash", "Credit Card", "Mobile Payment"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "20:00",
      "closes": "04:00"
    }
  ],
  "amenityFeature": [
    {"@type": "LocationFeatureSpecification", "name": "VIP Tables - طاولات VIP", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Live Music Shows - عروض موسيقية حية", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Professional Dancers - راقصات محترفات", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Dance Floor - أرضية الرقص", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Premium Bar Service - خدمة بار متميزة", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Private Rooms - غرف خاصة", "value": true}
  ],
  "performer": [
    {"@type": "Person", "name": "رحمة محسن"},
    {"@type": "Person", "name": "عصام صاصا"},
    {"@type": "Person", "name": "إسلام كبونجا"},
    {"@type": "Person", "name": "رضا البحراوي"},
    {"@type": "Person", "name": "كريم الغزال"},
    {"@type": "Person", "name": "بوسي"},
    {"@type": "Person", "name": "روح"},
    {"@type": "Person", "name": "ليندا"},
    {"@type": "Person", "name": "بديعة"},
    {"@type": "Person", "name": "توفحة"},
    {"@type": "Person", "name": "فيروز"}
  ],
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61560900837183",
    "https://www.facebook.com/people/%D9%83%D8%A8%D8%A7%D8%B1%D9%8A%D9%87-%D8%A7%D9%84%D8%B9%D8%AC%D9%88%D8%B2%D9%87-Night-Club/61569297924042/",
    "https://www.instagram.com/night_club_5star",
    "https://www.tiktok.com/@night.club993?_t=ZS-8yvVCVK9A5R&_r=1",
    "https://wa.me/201286110562?countryCode=20&countryName=EG&phoneNumber=1286110562",
    "https://maps.app.goo.gl/E5R8oXS1WQfgZ5W66"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156",
    "bestRating": "5",
    "worstRating": "1"
  },
  "areaServed": EGYPTIAN_CITIES.map(city => ({
    "@type": "City",
    "name": city,
    "containedInPlace": {
      "@type": "Country",
      "name": "مصر"
    }
  })),
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "باقات وعروض نايت كلوب مصر",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "باقة VIP - طاولة VIP مع خدمة مميزة"
        },
        "price": "1500",
        "priceCurrency": "EGP",
        "description": "باقة VIP شاملة مشروبات ومأكولات وخدمة مميزة مع أفضل المقاعد"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "باقة عادية - دخول مع مشروب واحد"
        },
        "price": "750",
        "priceCurrency": "EGP",
        "description": "باقة الدخول العادي مع مشروب واحد مجاني ومتابعة العروض"
      }
    ]
  }
})

// 👇 Event Schema للحفلات محسن
export const generateEventSchema = (eventData: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  price?: string;
  location?: string;
  performer?: string;
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
      "streetAddress": "كورنيش النيل، العجوزة",
      "addressLocality": eventData.location || "الجيزة",
      "addressRegion": "القاهرة الكبرى",
      "addressCountry": "EG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": NIGHTCLUB_INFO.coordinates.lat,
      "longitude": NIGHTCLUB_INFO.coordinates.lng
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "Night Club Egypt",
    "url": "https://www.nightclubegypt.com"
  },
  "offers": {
    "@type": "Offer",
    "price": eventData.price || "750",
    "priceCurrency": "EGP",
    "availability": "https://schema.org/InStock",
    "url": "https://www.nightclubegypt.com"
  },
  "performer": {
    "@type": "Person",
    "name": eventData.performer || "Live DJ Performance"
  }
})

// 👇 Video Object Schema محسن
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
      "url": "https://www.nightclubegypt.com/images/logo-seo-1200x1200.webp"
    }
  }
})

// 👇 FAQ Schema محسن بأسئلة باللهجة المصرية
export const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "كم سعر الدخول لنايت كلوب مصر؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "أسعار الدخول تبدأ من 750 جنيه للباقة العادية و 1500 جنيه لباقة VIP الشاملة. نوفر عروض وخصومات خاصة للمجموعات. للحجز اتصل على 01286110562."
      }
    },
    {
      "@type": "Question",
      "name": "أين يقع أفضل نايت كلوب في مصر؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "يقع Night Club Egypt في كورنيش النيل، العجوزة، الجيزة. نخدم جميع مناطق القاهرة الكبرى: القاهرة، الجيزة، الشيخ زايد، التجمع الخامس، 6 أكتوبر."
      }
    },
    {
      "@type": "Question",
      "name": "ما هي مواعيد عمل النايت كلوب؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعمل يومياً من الساعة 8 مساءً حتى 4 صباحاً. أفضل الأوقات للحصول على تجربة مميزة من 10 مساءً حتى 2 صباحاً. للحجز والاستفسار اتصل على 01286110562."
      }
    },
    {
      "@type": "Question",
      "name": "من هم الفنانين الذين يحيون الحفلات؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نستضيف أشهر النجوم مثل رحمة محسن، عصام صاصا، إسلام كبونجا، رضا البحراوي، كريم الغزال، وأشهر الراقصات مثل بوسي، روح، ليندا، بديعة، توفحة، فيروز."
      }
    },
    {
      "@type": "Question",
      "name": "هل يمكن حجز طاولة VIP في النايت كلوب؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، نوفر خدمة حجز طاولات VIP مع خدمة مميزة شاملة مشروبات ومأكولات. يمكنك الحجز عبر الاتصال على 01286110562 أو من خلال الواتساب."
      }
    }
  ]
})

// 👇 Breadcrumb Schema محسن
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

// 👇 WebSite Schema with Search محسن
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Night Club Egypt",
  "alternateName": "نايت كلوب مصر",
  "url": "https://www.nightclubegypt.com",
  "description": "أفضل نايت كلوب في مصر 2025 - حفلات ليلية فاخرة مع أشهر النجوم وخدمة VIP استثنائية",
  "inLanguage": ["ar", "en"],
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.nightclubegypt.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Night Club Egypt",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.nightclubegypt.com/images/logo-seo-1200x1200.webp"
    }
  }
})

// 👇 Canonical URL Generator محسن
export const generateCanonicalUrl = (path: string = "") => {
  const baseUrl = "https://www.nightclubegypt.com";
  return path.startsWith('/') ? `${baseUrl}${path}` : `${baseUrl}/${path}`;
}

// 👇 Meta Tags Generator محسن
export const generateMetaTags = (pageData: {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
}): Record<string, string> => {
  const defaultImage = "https://www.nightclubegypt.com/images/logo-seo-1200x1200.webp";
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
