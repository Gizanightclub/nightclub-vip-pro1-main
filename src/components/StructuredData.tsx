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

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": url,
    "logo": {
      "@type": "ImageObject",
      "url": logo,
      "width": 512,
      "height": 512,
      "caption": `${name} Logo`
    },
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
    ...(sameAs && { "sameAs": sameAs })
  };

  // إضافة بيانات Night Club تفصيلية
  const nightClubData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "NightClub", "LocalBusiness"],
    "name": name,
    "url": url,
    "logo": {
      "@type": "ImageObject",
      "url": logo,
      "width": 512,
      "height": 512,
      "caption": `${name} Logo`
    },
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
    // بيانات خاصة بالنايت كلوب
    "category": "Night Club",
    "priceRange": "$$",
    "servesCuisine": ["International", "Middle Eastern"],
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
        "name": "DJ",
        "value": true
      }
    ],
    // أوقات العمل
    "openingHours": [
      "We 20:00-03:00",
      "Th 20:00-03:00",
      "Fr 20:00-04:00",
      "Sa 20:00-04:00"
    ],
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
        }
      ]
    }
  };

  return (
    <>
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
    </>
  );
};

export default StructuredData;
