// SEO Optimization Library for Night Club Egypt
export const SEO_CONFIG = {
  // الكلمات المفتاحية الأساسية
  primaryKeywords: [
    "نايت كلوب مصر",
    "ديسكو القاهرة", 
    "حفلات ليلية مصر",
    "سهرات خليجية",
    "ملهى ليلي القاهرة",
    "nightclub Egypt",
    "Cairo disco",
    "Egypt nightlife"
  ],
  
  // الكلمات المفتاحية الثانوية
  secondaryKeywords: [
    "نايت كلوب الجيزة",
    "نايت كلوب العجوزة", 
    "نايت كلوب الشيخ زايد",
    "نايت كلوب 6 أكتوبر",
    "نايت كلوب التجمع الخامس",
    "حفلات أعياد ميلاد",
    "فعاليات شركات",
    "خدمة VIP"
  ],
  
  // المدن والمناطق
  cities: [
    "القاهرة", "الجيزة", "العجوزة", "الشيخ زايد", "الهرم",
    "التجمع الخامس", "6 أكتوبر", "المعادي", "الزمالك", "المهندسين",
    "مدينة نصر", "هليوبوليس", "مصر الجديدة", "القاهرة الجديدة"
  ]
};

// Schema.org Structured Data
export const generateBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  "name": "Night Club Egypt",
  "alternateName": "نايت كلوب مصر",
  "description": "أفضل نايت كلوب في مصر لعام 2025 - حفلات ليلية فاخرة في القاهرة، الجيزة، العجوزة، الشيخ زايد، الهرم، التجمع الخامس، 6 أكتوبر، المعادي، الزمالك، المهندسين. خدمة VIP استثنائية، عروض حية، موسيقى عالمية، أجواء رائعة.",
  "url": "https://nightclubegypt.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://nightclubegypt.com/images/nightclubegyptlogo.jpg",
    "width": 512,
    "height": 512,
    "caption": "Night Club Egypt Logo - شعار نايت كلوب مصر"
  },
  "image": [
    {
      "@type": "ImageObject",
      "url": "https://nightclubegypt.com/images/nightclubegyptlogo.jpg",
      "width": 512,
      "height": 512,
      "caption": "Night Club Egypt - أفضل نايت كلوب في مصر"
    },
    {
      "@type": "ImageObject", 
      "url": "https://nightclubegypt.com/images/nightclubegypt.com.jpg",
      "width": 1200,
      "height": 630,
      "caption": "حفلات ليلية فاخرة في أفضل نايت كلوب بمصر"
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
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+201286110562",
    "email": "info@nightclubegypt.com",
    "contactType": "customer service",
    "availableLanguage": ["Arabic", "English"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Thursday", "Friday", "Saturday"],
      "opens": "22:00",
      "closes": "04:00"
    }
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61560900837183",
    "https://www.instagram.com/night_club_5star",
    "https://www.tiktok.com/@night.club993",
    "https://wa.me/201286110562",
    "https://maps.app.goo.gl/E5R8oXS1WQfgZ5W66"
  ],
  "priceRange": "$$",
  "currenciesAccepted": "EGP, USD, EUR",
  "paymentAccepted": "Cash, Credit Card, Mobile Payment",
  "servesCuisine": ["International", "Arabic", "Mediterranean"],
  "hasMenu": "https://nightclubegypt.com/menu",
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "VIP Service",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification", 
      "name": "Live Music",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Dance Floor",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Private Rooms",
      "value": true
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Cairo"
    },
    {
      "@type": "City", 
      "name": "Giza"
    },
    {
      "@type": "City",
      "name": "6th October"
    },
    {
      "@type": "City",
      "name": "Sheikh Zayed"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 30.0444,
      "longitude": 31.2357
    },
    "geoRadius": "50000"
  },
  "brand": {
    "@type": "Brand",
    "name": "Night Club Egypt",
    "logo": "https://nightclubegypt.com/images/nightclubegyptlogo.jpg",
    "description": "أفضل نايت كلوب في مصر - خدمة VIP استثنائية"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "أحمد محمد"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "أفضل نايت كلوب في مصر! خدمة VIP ممتازة وأجواء رائعة"
    }
  ]
});

// Event Schema for Parties
export const generateEventSchema = (eventData: {
  name?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  price?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": eventData.name || "حفلة ليلية في نايت كلوب مصر",
  "description": eventData.description || "استمتع بأجمل حفلة ليلية في أفضل نايت كلوب في مصر",
  "startDate": eventData.startDate,
  "endDate": eventData.endDate,
  "location": {
    "@type": "Place",
    "name": "Night Club Egypt",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cairo",
      "addressRegion": "Cairo Governorate",
      "addressCountry": "EG"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "Night Club Egypt",
    "url": "https://nightclubegypt.com"
  },
  "performer": {
    "@type": "MusicGroup",
    "name": "Live DJ Performance"
  },
  "offers": {
    "@type": "Offer",
    "price": eventData.price || "200",
    "priceCurrency": "EGP",
    "availability": "https://schema.org/InStock"
  }
});

// Breadcrumb Schema
export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

// FAQ Schema
export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Local Business Schema
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "NightClub",
  "name": "Night Club Egypt",
  "description": "أفضل نايت كلوب في مصر - حفلات ليلية فاخرة وخدمة VIP استثنائية",
  "url": "https://nightclubegypt.com",
  "telephone": "+201286110562",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cairo",
    "addressRegion": "Cairo Governorate",
    "addressCountry": "EG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.0444,
    "longitude": 31.2357
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Thursday", "Friday", "Saturday"],
      "opens": "22:00",
      "closes": "04:00"
    }
  ],
  "priceRange": "$$",
  "servesCuisine": ["International", "Arabic", "Mediterranean"],
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "VIP Service",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Live Music",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification", 
      "name": "Dance Floor",
      "value": true
    }
  ]
});

// Meta Tags Generator
export const generateMetaTags = (pageData: {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
}): Record<string, string> => {
  const defaultImage = "https://nightclubegypt.com/images/nightclubegyptlogo.jpg";
  const defaultUrl = "https://nightclubegypt.com";
  
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

// Canonical URL Generator
export const generateCanonicalUrl = (path: string = "") => {
  const baseUrl = "https://nightclubegypt.com";
  return `${baseUrl}${path}`;
};

// Sitemap URL Generator
export const generateSitemapUrls = () => [
  {
    url: "https://nightclubegypt.com",
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: 1.0
  },
  {
    url: "https://nightclubegypt.com/about",
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
    priority: 0.8
  },
  {
    url: "https://nightclubegypt.com/services",
    lastmod: new Date().toISOString(),
    changefreq: "weekly", 
    priority: 0.8
  },
  {
    url: "https://nightclubegypt.com/contact",
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.7
  },
  {
    url: "https://nightclubegypt.com/gallery",
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
    priority: 0.6
  }
];
