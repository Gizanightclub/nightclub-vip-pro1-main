'use client';

interface OrganizationStructuredDataProps {
  name: string;
  url: string;
  logo: string;
  description?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  contactPoint?: {
    telephone?: string;
    email?: string;
    contactType?: string;
    availableLanguage?: string[];
  };
  sameAs?: string[];
}

const StructuredData = ({
  name,
  url,
  logo,
  description,
  address,
  contactPoint,
  sameAs
}: OrganizationStructuredDataProps) => {

  // بيانات Logo محسنة للظهور في نتائج بحث Google
  const logoStructuredData = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": logo,
    "contentUrl": logo,
    "width": "1200",
    "height": "1200",
    "encodingFormat": "image/jpeg",
    "name": `${name} Official Logo`,
    "caption": `شعار ${name} الرسمي - أفضل نايت كلوب في مصر`,
    "description": `الشعار الرسمي لـ ${name}، أفضل نايت كلوب في مصر يقدم تجربة ترفيهية لا تُنسى`,
    "creator": {
      "@type": "Organization",
      "name": name,
      "url": url
    },
    "copyrightHolder": {
      "@type": "Organization",
      "name": name,
      "url": url
    },
    "license": `${url}/license`,
    "acquireLicensePage": `${url}/contact`,
    "creditText": `© ${new Date().getFullYear()} ${name}. All rights reserved.`,
    "thumbnailUrl": logo.replace('.jpg', '-thumbnail.jpg'),
    "representativeOfPage": true,
    "isAccessibleForFree": true,
    "inLanguage": "ar",
    "keywords": "نايت كلوب، لوجو، شعار، مصر، ترفيه ليلي، nightclub logo",
    "associatedMedia": {
      "@type": "MediaObject",
      "contentUrl": logo,
      "encodingFormat": "image/jpeg"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "alternateName": ["نايت كلوب إيجيبت", "Night Club Egypt", "نايت كلوب مصر"],
    "url": url,
    "logo": {
      "@type": "ImageObject",
      "url": logo,
      "width": "1200",
      "height": "1200",
      "caption": `${name} Logo`,
      "contentUrl": logo,
      "encodingFormat": "image/jpeg",
      "representativeOfPage": true
    },
    "image": [
      logo,
      `${url}/images/nightclubegypt.com.jpg`,
      `${url}/images/nightclubegypt.com (3).jpg`
    ],
    ...(description && { "description": description }),
    ...(address && {
      "address": {
        "@type": "PostalAddress",
        ...address
      }
    }),
    ...(contactPoint && {
      "contactPoint": {
        "@type": "ContactPoint",
        ...contactPoint
      }
    }),
    ...(sameAs && { "sameAs": sameAs }),
    "foundingDate": "2020",
    "slogan": "أفضل تجربة ترفيهية ليلية في مصر",
    "brand": {
      "@type": "Brand",
      "name": name,
      "logo": logo
    }
  };

  // بيانات Night Club محسنة
  const nightClubData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "NightClub", "LocalBusiness", "EntertainmentBusiness"],
    "name": name,
    "alternateName": ["نايت كلوب إيجيبت", "Night Club Egypt", "نايت كلوب مصر"],
    "url": url,
    "logo": {
      "@type": "ImageObject",
      "url": logo,
      "width": "1200",
      "height": "1200",
      "caption": `${name} Logo`,
      "contentUrl": logo,
      "encodingFormat": "image/jpeg",
      "representativeOfPage": true
    },
    "image": [
      logo,
      `${url}/images/nightclubegypt.com.jpg`,
      `${url}/images/nightclubegypt.com (3).jpg`,
      `${url}/images/nightclubegypt.com (5).jpg`
    ],
    "description": description,
    "address": address && {
      "@type": "PostalAddress",
      ...address
    },
    "contactPoint": contactPoint && {
      "@type": "ContactPoint",
      ...contactPoint
    },
    "sameAs": sameAs,
    // معلومات محسنة للنايت كلوب
    "category": ["Night Club", "Entertainment Venue", "Dance Club"],
    "priceRange": "$$-$$$",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": ["EGP", "USD"],
    "servesCuisine": ["International", "Middle Eastern", "Mediterranean"],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Live Music",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Dancing",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "VIP Service",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "DJ Performance",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Private Events",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Bar Service",
        "value": true
      }
    ],
    // أوقات العمل محسنة
    "openingHours": [
      "We 20:00-03:00",
      "Th 20:00-03:00",
      "Fr 20:00-04:00",
      "Sa 20:00-04:00"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Wednesday", "Thursday"],
        "opens": "20:00",
        "closes": "03:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "20:00",
        "closes": "04:00"
      }
    ],
    // خدمات وعروض محسنة
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Night Club Egypt Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "VIP Table Booking",
          "itemOffered": {
            "@type": "Service",
            "name": "VIP Table Booking",
            "description": "حجز طاولات VIP مع خدمة استثنائية وإطلالة مميزة"
          },
          "priceRange": "$$-$$$",
          "availability": "InStock"
        },
        {
          "@type": "Offer",
          "name": "Private Event Planning",
          "itemOffered": {
            "@type": "Service",
            "name": "Party Planning",
            "description": "تنظيم الحفلات والمناسبات الخاصة مع خدمة متكاملة"
          },
          "priceRange": "$$$",
          "availability": "InStock"
        },
        {
          "@type": "Offer",
          "name": "Corporate Events",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Events",
            "description": "تنظيم فعاليات الشركات والمؤتمرات في بيئة راقية"
          },
          "priceRange": "$$$",
          "availability": "InStock"
        }
      ]
    },
    // معلومات جغرافية محسنة
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.0444",
      "longitude": "31.2357"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Cairo",
        "sameAs": "https://en.wikipedia.org/wiki/Cairo"
      },
      {
        "@type": "City",
        "name": "Giza",
        "sameAs": "https://en.wikipedia.org/wiki/Giza"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Egypt",
        "sameAs": "https://en.wikipedia.org/wiki/Egypt"
      }
    ],
    // تقييمات وجوائز
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "150"
    },
    "award": ["أفضل نايت كلوب في مصر 2024", "Best Nightlife Experience Egypt"],
    "slogan": "أفضل تجربة ترفيهية ليلية في مصر",
    "knowsAbout": ["Nightlife", "Entertainment", "Music", "Dancing", "VIP Service", "Egypt Tourism"],
    "keywords": "نايت كلوب مصر، ترفيه ليلي، حفلات، VIP، القاهرة، الجيزة"
  };

  // بيانات الموقع الإلكتروني
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${name} - Official Website`,
    "alternateName": `موقع ${name} الرسمي`,
    "url": url,
    "description": description,
    "inLanguage": ["ar", "en"],
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": name,
      "logo": {
        "@type": "ImageObject",
        "url": logo,
        "width": "1200",
        "height": "1200"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": name,
      "url": url
    }
  };

  return (
    <>
      {/* بيانات Logo منفصلة ومحسنة */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(logoStructuredData, null, 2)
        }}
      />

      {/* البيانات المنظمة الأساسية للمؤسسة */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData, null, 2)
        }}
      />

      {/* البيانات المنظمة المفصلة للنايت كلوب */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(nightClubData, null, 2)
        }}
      />

      {/* بيانات الموقع الإلكتروني */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData, null, 2)
        }}
      />
    </>
  );
};

export default StructuredData;
