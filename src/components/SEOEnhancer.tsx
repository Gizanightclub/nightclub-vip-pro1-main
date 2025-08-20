"use client";

import { useEffect } from 'react';
import Head from 'next/head';

const SEOEnhancer = () => {
  useEffect(() => {
    // إضافة structured data إضافي للصفحة
    const additionalStructuredData = {
      "@context": "https://schema.org",
      "@type": ["NightClub", "LocalBusiness", "EntertainmentBusiness"],
      "name": "Night Club Egypt",
      "alternateName": ["نايت كلوب مصر", "أفضل نايت كلوب في مصر"],
      "description": "أفضل نايت كلوب في مصر لعام 2025 - حفلات ليلية فاخرة مع خدمة VIP استثنائية في القاهرة والجيزة",
      "url": "https://www.nightclubegypt.com",
      "logo": "https://www.nightclubegypt.com/images/nightclubegyptlogo.jpg",
      "image": [
        "https://www.nightclubegypt.com/images/nightclubegypt.com.jpg",
        "https://www.nightclubegypt.com/images/nightclubegyptlogo.jpg"
      ],
      "telephone": "+201286110562",
      "email": "info@nightclubegypt.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cairo",
        "addressRegion": "Cairo Governorate",
        "addressCountry": "EG",
        "streetAddress": "كورنيش النيل - القاهرة"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "30.0444",
        "longitude": "31.2357"
      },
      "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 20:00-06:00",
      "priceRange": "$$-$$$",
      "paymentAccepted": "Cash, Credit Card",
      "currenciesAccepted": "EGP, USD, EUR",
      "servesCuisine": "International",
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "VIP Service",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Live Entertainment",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "DJ Services",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Private Events",
          "value": true
        }
      ],
      "hasMenu": {
        "@type": "Menu",
        "name": "VIP Packages",
        "description": "عروض VIP مميزة وحفلات خاصة"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "عميل مميز"
          },
          "reviewBody": "أفضل تجربة نايت كلوب في مصر - خدمة VIP استثنائية وأجواء رائعة"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61560900837183",
        "https://www.instagram.com/night_club_5star",
        "https://wa.me/201286110562"
      ]
    };

    // إضافة الـ schema إلى الصفحة
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(additionalStructuredData);
    document.head.appendChild(script);

    // إضافة meta tags إضافية
    const addMetaTag = (name: string, content: string) => {
      if (!document.querySelector(`meta[name="${name}"]`)) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Meta tags محسنة
    addMetaTag('DC.title', 'Night Club Egypt - أفضل نايت كلوب في مصر');
    addMetaTag('DC.description', 'استمتع بأفضل سهرة ليلية في القاهرة والجيزة مع خدمة VIP فاخرة');
    addMetaTag('DC.subject', 'نايت كلوب, ترفيه ليلي, القاهرة, الجيزة');
    addMetaTag('DC.language', 'ar');
    addMetaTag('geo.region', 'EG-C');
    addMetaTag('geo.placename', 'Cairo, Egypt');
    addMetaTag('geo.position', '30.0444;31.2357');
    addMetaTag('ICBM', '30.0444, 31.2357');

    return () => {
      // تنظيف عند إلغاء التحميل
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <Head>
        {/* Additional SEO meta tags */}
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />

        {/* Open Graph additional tags */}
        <meta property="og:street-address" content="كورنيش النيل - القاهرة" />
        <meta property="og:locality" content="Cairo" />
        <meta property="og:region" content="Cairo Governorate" />
        <meta property="og:postal-code" content="11511" />
        <meta property="og:country-name" content="Egypt" />

        {/* Business specific tags */}
        <meta property="business:contact_data:street_address" content="كورنيش النيل - القاهرة" />
        <meta property="business:contact_data:locality" content="Cairo" />
        <meta property="business:contact_data:region" content="Cairo Governorate" />
        <meta property="business:contact_data:postal_code" content="11511" />
        <meta property="business:contact_data:country_name" content="Egypt" />
        <meta property="business:contact_data:phone_number" content="+201286110562" />
        <meta property="business:contact_data:website" content="https://www.nightclubegypt.com" />

        {/* Article specific for SEO */}
        <meta property="article:publisher" content="https://www.nightclubegypt.com" />
        <meta property="article:author" content="Night Club Egypt" />
        <meta property="article:published_time" content="2025-01-20T00:00:00+00:00" />
        <meta property="article:modified_time" content="2025-01-20T00:00:00+00:00" />
        <meta property="article:section" content="Entertainment" />
        <meta property="article:tag" content="نايت كلوب, القاهرة, الجيزة, ترفيه ليلي, VIP" />
      </Head>
    </>
  );
};

export default SEOEnhancer;
