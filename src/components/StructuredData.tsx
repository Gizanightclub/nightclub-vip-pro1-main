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

  // بيانات Night Club Egypt المُحسّنة للوجو ومتطلبات Google
  const nightClubData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "NightClub", "LocalBusiness"],
    "name": name,
    "alternateName": "نايت كلوب مصر",
    "url": url,
    "logo": {
      "@type": "ImageObject",
      "url": "https://nightclubegypt.com/images/nightclubegyptlogo.jpg",
      "width": 512,
      "height": 512,
      "caption": "Night Club Egypt Logo"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://nightclubegypt.com/images/nightclubegyptlogo.jpg",
      "width": 512,
      "height": 512,
      "caption": "Night Club Egypt Logo"
    },
    "description": description || "أفضل نايت كلوب في مصر - ترفيه ليلي راقي وأجواء استثنائية",
    "address": address && {
      "@type": "PostalAddress",
      ...address
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.0444,
      "longitude": 31.2357
    },
    "contactPoint": contactPoint && {
      "@type": "ContactPoint",
      ...contactPoint
    },
    "sameAs": sameAs || [
      "https://www.facebook.com/profile.php?id=61560900837183",
      "https://www.instagram.com/night_club_5star",
      "https://www.tiktok.com/@night.club993?_t=ZS-8yvVCVK9A5R&_r=1",
      "https://wa.me/201286110562?countryCode=20&countryName=EG&phoneNumber=1286110562",
      "https://maps.app.goo.gl/E5R8oXS1WQfgZ5W66"
    ],
    // بيانات خاصة بالنايت كلوب
    "category": "Night Club",
    "priceRange": "$$-$$$",
    "servesCuisine": ["International", "Middle Eastern"],
    "acceptsReservations": true,
    "currenciesAccepted": "EGP",
    "paymentAccepted": ["Cash", "Credit Card"],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "DJ Music",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Dance Floor",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "VIP Service",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Bar Service",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Live Entertainment",
        "value": true
      }
    ],
    // أوقات العمل محسّنة
    "openingHours": [
      "Mo-Th 20:00-02:00",
      "Fr-Sa 20:00-03:00"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    // خدمات إضافية
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Night Club Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "VIP Table Booking",
            "description": "حجز طاولات VIP مع خدمة استثنائية"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Party Planning",
            "description": "تنظيم الحفلات والمناسبات الخاصة"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Private Events",
            "description": "إقامة فعاليات خاصة ومناسبات شركات"
          }
        }
      ]
    }
  };

  return (
    <>
      {/* البيانات المنظمة المحسّنة للنايت كلوب */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(nightClubData, null, 2)
        }}
      />
    </>
  );
};

export default StructuredData;
