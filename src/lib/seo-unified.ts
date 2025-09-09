// 🌟 مكتبة SEO موحدة ومحسنة لنايت كلوب مصر 2025
// Unified SEO Library for Night Club Egypt - Complete Optimization

import { Metadata } from 'next'

// 📍 معلومات أساسية عن النايت كلوب
export const NIGHTCLUB_BASE_INFO = {
  name: "Night Club Egypt",
  arabicName: "نايت كلوب مصر",
  domain: "https://www.nightclubegypt.com",
  phone: "+201286110562",
  whatsapp: "https://wa.me/201286110562",
  email: "nightclub2026@gmail.com",
  address: "كورنيش النيل، العجوزة، الجيزة، مصر",
  priceRange: "750-1500 جنيه مصري",
  workingHours: "من 8 مساءً حتى 4 فجراً يومياً",
  coordinates: { lat: 30.0666, lng: 31.2240 },
  socialMedia: {
    facebook: "https://www.facebook.com/people/%D9%83%D8%A8%D8%A7%D8%B1%D9%8A%D9%87-%D8%A7%D9%84%D8%B9%D8%AC%D9%88%D8%B2%D9%87-Night-Club/61569297924042/",
    instagram: "https://www.instagram.com/night_club_5star",
    tiktok: "https://www.tiktok.com/@night.club993?_t=ZS-8yvVCVK9A5R&_r=1"
  }
}

// 🖼️ الصور المحسنة للـ SEO
export const SEO_IMAGES = {
  logo: `${NIGHTCLUB_BASE_INFO.domain}/images/logo-seo-1200x1200.webp`,
  hero: `${NIGHTCLUB_BASE_INFO.domain}/images/nightclub1.jpeg`,
  about: `${NIGHTCLUB_BASE_INFO.domain}/images/nightclub0.jpeg`,
  gallery: `${NIGHTCLUB_BASE_INFO.domain}/images/nightclubegypt.com10.jpg`,
  programs: `${NIGHTCLUB_BASE_INFO.domain}/images/nightclub2.jpeg`,
  packages: `${NIGHTCLUB_BASE_INFO.domain}/images/nightclub3.jpeg`,
  contact: `${NIGHTCLUB_BASE_INFO.domain}/images/nightclub4.jpeg`,
  booking: `${NIGHTCLUB_BASE_INFO.domain}/images/nightclub5.jpeg`
}

// 🏗️ مولد Schema.org شامل ومحسن
export const generateUnifiedBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["NightClub", "EntertainmentBusiness", "LocalBusiness"],
  "name": NIGHTCLUB_BASE_INFO.name,
  "alternateName": [NIGHTCLUB_BASE_INFO.arabicName, "Night Club Cairo", "أفضل نايت كلوب في مصر"],
  "description": "أفضل نايت كلوب في مصر لعام 2025 - حفلات ليلية فاخرة مع أشهر النجوم: رحمة محسن، عصام صاصا، بوسي، روح، ليندا. خدمة VIP استثنائية وأسعار تبدأ من 750 جنيه في القاهرة والجيزة والعجوزة والشيخ زايد.",
  "url": NIGHTCLUB_BASE_INFO.domain,
  "logo": {
    "@type": "ImageObject",
    "url": SEO_IMAGES.logo,
    "name": "Night Club Egypt Logo",
    "width": 1200,
    "height": 1200,
    "caption": "Night Club Egypt Logo - شعار نايت كلوب مصر",
    "copyrightNotice": "© 2025 Night Club Egypt. All rights reserved.",
    "representativeOfPage": true
  },
  "image": [
    {
      "@type": "ImageObject",
      "url": SEO_IMAGES.hero,
      "name": "حفلة مميزة في نايت كلوب مصر - أجواء VIP فاخرة",
      "width": 1200,
      "height": 630,
      "caption": "Night Club Egypt - أفضل نايت كلوب في مصر مع أشهر النجوم",
      "copyrightNotice": "© 2025 Night Club Egypt. All rights reserved.",
      "representativeOfPage": true
    },
    {
      "@type": "ImageObject",
      "url": SEO_IMAGES.about,
      "name": "حفلات ليلية فاخرة مع رحمة محسن وعصام صاصا",
      "width": 1200,
      "height": 630,
      "caption": "حفلات ليلية فاخرة مع رحمة محسن وعصام صاصا - نايت كلوب مصر",
      "copyrightNotice": "© 2025 Night Club Egypt. All rights reserved."
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "كورنيش النيل، العجوزة",
    "addressLocality": "الجيزة",
    "addressRegion": "القاهرة الكبرى",
    "postalCode": "11511",
    "addressCountry": "EG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": NIGHTCLUB_BASE_INFO.coordinates.lat,
    "longitude": NIGHTCLUB_BASE_INFO.coordinates.lng
  },
  "telephone": NIGHTCLUB_BASE_INFO.phone,
  "email": NIGHTCLUB_BASE_INFO.email,
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
    {"@type": "Person", "name": "بوسي راقصة"},
    {"@type": "Person", "name": "روح راقصة"},
    {"@type": "Person", "name": "ليندا راقصة"},
    {"@type": "Person", "name": "بديعة راقصة"},
    {"@type": "Person", "name": "توفحة راقصة"},
    {"@type": "Person", "name": "فيروز راقصة"}
  ],
  "sameAs": [
    NIGHTCLUB_BASE_INFO.socialMedia.facebook,
    NIGHTCLUB_BASE_INFO.socialMedia.instagram,
    NIGHTCLUB_BASE_INFO.socialMedia.tiktok,
    NIGHTCLUB_BASE_INFO.whatsapp
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156",
    "bestRating": "5",
    "worstRating": "1"
  }
})
