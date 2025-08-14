import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import { GoogleAnalytics } from '@next/third-parties/google'


const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  fallback: ['Arial', 'sans-serif'],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ['Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "Night Club Egypt | أفضل نايت كلوب في مصر - القاهرة الجيزة 6 أكتوبر الشيخ زايد",
  description: "أفضل نايت كلوب في مصر - القاهرة، الجيزة، 6 أكتوبر، الشيخ زايد، التجمع الخامس، المعادي، الزمالك. حفلات ليلية فاخرة، عروض حية، خدمة VIP استثنائية. احجز الآن واستمتع بأجمل الليالي في أفضل الأماكن السياحية في مصر.",
  keywords: [
    // المدن والمناطق المصرية
    "نايت كلوب القاهرة", "نايت كلوب الجيزة", "نايت كلوب العجوزه", "نايت كلوب الشيخ زايد",
    "نايت كلوب التجمع الخامس", "نايت كلوب المعادي", "نايت كلوب الزمالك", "نايت كلوب مصر الجديدة",
    "نايت كلوب مدينة نصر", "نايت كلوب هليوبوليس", "نايت كلوب 6 أكتوبر",
    "نايت كلوب مدينة نصر", "نايت كلوب هليوبوليس",
    // Night clubs in English for international tourists
    "nightclub Cairo", "nightclub Giza", "nightclub 6th October", "nightclub Sheikh Zayed",
    "nightclub New Cairo", "nightclub Maadi", "nightclub Zamalek", "nightclub Egypt",
    "nightlife Egypt", "Egypt nightclubs", "Cairo nightlife", "Egypt entertainment",
    // خدمات وكلمات مفتاحية
    "حفلات ليلية مصر", "سهرات القاهرة", "ترفيه ليلي", "VIP خدمة", "حفلات خاصة",
    "birthday parties Egypt", "corporate events Cairo", "wedding celebrations Egypt",
    // السياحة والترفيه
    "أماكن سياحية ترفيهية مصر", "السياحة الليلية القاهرة", "entertainment tourism Egypt"
  ].join(", "),
  authors: [{ name: "Night Club Egypt" }],
  creator: "Night Club Egypt",
  publisher: "Night Club Egypt",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  category: "Entertainment, Nightlife, Tourism",
  classification: "Entertainment Venue",
  // Geo targeting for Egyptian cities
  other: {
    "google-site-verification": "nightclub-egypt-verification",
    "msvalidate.01": "nightclub-egypt-bing-verification",
    "geo.region": "EG",
    "geo.placename": "Cairo, Giza, 6th October, Sheikh Zayed, New Cairo",
    "geo.position": "30.0444;31.2357",
    "ICBM": "30.0444, 31.2357",
    "language": "ar, en",
    "rating": "general",
  },
  openGraph: {
    title: "Night Club Egypt | أفضل نايت كلوب في مصر - جميع المحافظات",
    description: "استمتع بأفضل سهرة ليلية في مصر مع حفلات مميزة في القاهرة، الجيزة، العجوزه، الشيخ زايد، التجمع. خدمة VIP فاخرة وأجواء لا تُنسى في أفضل الأماكن السياحية.",
    type: "website",
    url: "https://nightclubegypt.com",
    siteName: "Night Club Egypt",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "https://nightclubegypt.com/images/nightclubegyptlogo.jpg",
        width: 1200,
        height: 630,
        alt: "Night Club Egypt - أفضل نايت كلوب في مصر - القاهرة الجيزة العجوزه الشيخ زايد",
        type: "image/jpeg",
      },
      {
        url: "https://nightclubegypt.com/images/nightclubegypt.com.jpg",
        width: 1200,
        height: 630,
        alt: "حفلات ليلية فاخرة في أفضل نايت كلوب بمصر - خدمة VIP استثنائية",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nightclubegypt",
    creator: "@nightclubegypt",
    title: "Night Club Egypt | أفضل نايت كلوب في مصر",
    description: "استمتع بأفضل سهرة ليلية في القاهرة، الجيزة، العجوزه، الشيخ زايد مع حفلات مميزة وخدمة VIP فاخرة",
    images: ["https://nightclubegypt.com/images/nightclubegypt.com.jpg"],
  },
  alternates: {
    canonical: "https://nightclubegypt.com",
    languages: {
      'ar': 'https://nightclubegypt.com',
      'en': 'https://nightclubegypt.com/en',
    },
  },
  verification: {
    google: "nightclub-egypt-verification",
    other: {
      bing: "nightclub-egypt-bing-verification",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        {/* Critical CSS Inline */}
        <style>{`
          html,body{margin:0;padding:0;min-height:100vh;background:#000;color:#fff;overflow-x:hidden}
          *{box-sizing:border-box}
          .font-cairo{font-family:Cairo,Arial,sans-serif}
          .bg-black{background-color:#000}
          .text-white{color:#fff}
          .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
          .scroll-smooth{scroll-behavior:smooth}
        `}</style>

        {/* Async Font Loading */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap"
          as="style"
         
        />
        <noscript>
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </noscript>

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
         
        />
        <noscript>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </noscript>

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Meta Tags for Mobile and Accessibility */}
        <meta name="theme-color" content="#e4e4e4ff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Enhanced JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NightClub",
              "name": "Night Club Egypt",
              "description": "أفضل نايت كلوب في مصر مع حفلات مميزة وخدمة VIP فاخرة في القاهرة، الجيزة، العجوزه، الشيخ زايد، التجمع الخامس",
              "url": "https://nightclubegypt.com",
              "logo": "https://nightclubegypt.com/images/nightclubegyptlogo.jpg",
              "telephone": "+201286110562",
              "email": "info@nightclubegypt.com",
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Cairo",
                  "addressRegion": "Cairo Governorate",
                  "addressCountry": "EG",
                  "streetAddress": "القاهرة الجديدة"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Giza",
                  "addressRegion": "Giza Governorate",
                  "addressCountry": "EG",
                  "streetAddress": "الجيزه"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Sheikh Zayed",
                  "addressRegion": "Giza Governorate",
                  "addressCountry": "EG",
                  "streetAddress": " العجوزه"
                }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "30.0444",
                "longitude": "31.2357"
              },
              "areaServed": [
                "Cairo", "Giza", "6th October", "Sheikh Zayed", "New Cairo",
                "Zamalek", "Maadi", "Heliopolis", "Nasr City", "5th Settlement"
              ],
              "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 20:00-06:00",
              "priceRange": "$$$",
              "paymentAccepted": ["Cash", "Credit Card", "Visa", "Mastercard"],
              "currenciesAccepted": ["EGP", "USD"],
              "image": [
                "https://nightclubegypt.com/images/nightclubegyptlogo.jpg",
                "https://nightclubegypt.com/images/nightclubegypt.com.jpg",
                "https://nightclubegypt.com/images/nightclubegypt.com (3).jpg",
                "https://nightclubegypt.com/images/nightclubegypt.com (8).jpg"
              ],
              "sameAs": [
                "https://wa.me/201286110562",
                "https://www.facebook.com/share/15gfvwAhXx/?mibextid=wwXIfr",
                "https://www.instagram.com/night_club_5star"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "350",
                "bestRating": "5"
              },
              "offers": {
                "@type": "Offer",
                "description": "خصم 20% على جميع الباقات - حفلات VIP في أفضل نايت كلوب بمصر",
                "validFrom": "2024-01-01",
                "validThrough": "2024-12-31",
                "availability": "https://schema.org/InStock"
              },
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
                  "name": "Private Events",
                  "value": true
                }
              ],
              "touristType": ["Business", "Leisure", "Groups"],
              "keywords": "نايت كلوب مصر, القاهرة, الجيزة, العجوزه, الشيخ زايد, nightclub Egypt, Cairo nightlife"
            })
          }}
        />

        {/* Local Business Schema for Multiple Locations */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Night Club Egypt",
              "url": "https://nightclubegypt.com",
              "logo": "https://nightclubegypt.com/images/nightclubegyptlogo.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+201286110562",
                "contactType": "customer service",
                "areaServed": "EG",
                "availableLanguage": ["Arabic", "English"]
              },
              "sameAs": [
                "https://wa.me/201286110562",
                "https://www.facebook.com/share/15gfvwAhXx/?mibextid=wwXIfr",
                "https://www.instagram.com/night_club_5star"
              ]
            })
          }}
        />
      </head>
      <body className={`${cairo.variable} ${inter.variable} font-cairo antialiased bg-black text-white overflow-x-hidden`}>
        {children}
        <Toaster />
        <GoogleAnalytics gaId="G-H1ZWPG12HP" />
      </body>
    </html>
  );
}
