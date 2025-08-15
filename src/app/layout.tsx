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
  title: "Night Club Egypt | أفضل نايت كلوب في مصر - القاهرة الجيزة العجوزة الشيخ زايد الهرم التجمع الخامس 6 أكتوبر المعادي الزمالك المهندسين",
  description: "أفضل نايت كلوب في مصر لعام 2024 - حفلات ليلية فاخرة في القاهرة، الجيزة، العجوزة، الشيخ زايد، الهرم، التجمع الخامس، 6 أكتوبر، المعادي، الزمالك، المهندسين، مدينة نصر، هليوبوليس. خدمة VIP استثنائية، عروض حية، موسيقى عالمية، أجواء رائعة. احجز الآن واستمتع بأجمل الليالي في أفضل الأماكن الترفيهية والسياحية في مصر.",
  keywords: [
    // الكلمات المفتاحية الأساسية
    "نايت كلوب", "ملهى ليلي", "ديسكو", "Cairo Nightclub", "Nightclub Egypt",
    // المدن والمناطق المصرية مع تنويعات الكتابة
    "نايت كلوب القاهرة", "نايت كلوب الجيزة", "نايت كلوب العجوزة", "نايت كلوب العجوزه",
    "نايت كلوب الشيخ زايد", "نايت كلوب الهرم", "نايت كلوب التجمع الخامس", "نايت كلوب 6 أكتوبر",
    "نايت كلوب المعادي", "نايت كلوب الزمالك", "نايت كلوب المهندسين", "نايت كلوب مدينة نصر",
    "نايت كلوب هليوبوليس", "نايت كلوب مصر الجديدة", "نايت كلوب القاهرة الجديدة",
    // بالإنجليزية للسياح
    "nightclub Cairo", "nightclub Giza", "nightclub Agouza", "nightclub Sheikh Zayed",
    "nightclub 6th October", "nightclub New Cairo", "nightclub Maadi", "nightclub Zamalek",
    "nightclub Mohandessin", "nightclub Heliopolis", "nightclub Nasr City", "nightclub Egypt",
    "Cairo nightlife", "Egypt nightclubs", "nightlife Egypt", "Egypt entertainment",
    "best nightclub Egypt", "top nightclub Cairo", "luxury nightclub Egypt",
    // خدمات ومناسبات
    "حفلات ليلية مصر", "سهرات القاهرة", "ترفيه ليلي", "VIP خدمة", "حفلات خاصة",
    "حفلات أعياد ميلاد", "فعاليات شركات", "حفلات زفاف", "مناسبات خاصة",
    "birthday parties Egypt", "corporate events Cairo", "wedding celebrations Egypt",
    "private events Egypt", "VIP service Egypt", "luxury entertainment Egypt",
    // السياحة والترفيه
    "أماكن سياحية ترفيهية مصر", "السياحة الليلية القاهرة", "أماكن ترفيه ليلي مصر",
    "entertainment tourism Egypt", "Egypt tourist attractions", "Cairo tourist nightlife",
    // كلمات طويلة للـ long-tail SEO
    "أفضل نايت كلوب في القاهرة", "أفضل نايت كلوب في الجيزة", "أفضل نايت كلوب في العجوزة",
    "نايت كلوب VIP مصر", "حجز نايت كلوب القاهرة", "أسعار نايت كلوب مصر"
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
        {/* Critical CSS Inline - محسن للأداء */}
        <style>{`
          html,body{margin:0;padding:0;min-height:100vh;background:#000;color:#fff;overflow-x:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
          *{box-sizing:border-box;margin:0;padding:0}
          .font-cairo{font-family:Cairo,Arial,sans-serif;font-display:swap}
          .bg-black{background-color:#000}
          .text-white{color:#fff}
          .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
          .scroll-smooth{scroll-behavior:smooth}
          img{max-width:100%;height:auto;font-style:italic;background-repeat:no-repeat;background-size:cover}
          .container{contain:layout style paint}
          .animate-float,.animate-glow,.animate-neon,.animate-pulse-purple{will-change:transform;transform:translateZ(0);backface-visibility:hidden}
          .glass-dark{background:rgba(0,0,0,0.3);backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,0.1)}
          .gradient-nightclub{background:linear-gradient(135deg,#1e40af 0%,#7c3aed 50%,#f59e0b 100%)}
          @media(prefers-reduced-motion:reduce){.animate-float,.animate-glow,.animate-neon,.animate-pulse-purple,.animate-sparkle{animation:none!important}}
          @media(max-width:768px){body{-webkit-overflow-scrolling:touch}}
        `}</style>

        {/* Resource Hints لتحسين الأداء */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://abnzriaextacbsoroyfr.supabase.co" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />

        {/* Preload critical images */}
        <link rel="preload" href="/images/nightclubegyptlogo.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/nightclubegypt.com.jpg" as="image" type="image/jpeg" />

        {/* Critical resource hints */}
        <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
        <link rel="modulepreload" href="/_next/static/chunks/main.js" />

        {/* Optimized Font Loading with resource hints */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap&text=Night Club Egypt أفضل نايت كلوب في مصر القاهرة الجيزة العجوزه"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap"
          media="print"
        />
        <noscript>
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </noscript>

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          media="print"
        />
        <noscript>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </noscript>

        {/* Favicon and Icons - محسن للظهور في Google */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-512x512.png" sizes="512x512" type="image/png" />
        <link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* WebP alternatives للمتصفحات الحديثة */}
        <link rel="icon" href="/favicon-512x512.webp" sizes="512x512" type="image/webp" />
        <link rel="icon" href="/favicon-48x48.webp" sizes="48x48" type="image/webp" />

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
          dangerouslySetInnerHTML={ {
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NightClub",
              "name": "Night Club Egypt",
              "description": "أفضل نايت كلوب في مصر مع حفلات مميزة وخدمة VIP فاخرة في القاهرة، الجيزة، العجوزه، الشيخ زايد، التجمع الخامس",
              "url": "https://nightclubegypt.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://nightclubegypt.com/favicon-512x512.png",
                "width": 512,
                "height": 512,
                "caption": "Night Club Egypt Logo",
                "contentUrl": "https://nightclubegypt.com/logo-seo-1200x1200.png"
              },
              "telephone": "+201286110562",
              "email": "info@nightclubegypt.com",
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Cairo",
                  "addressRegion": "Cairo Governorate",
                  "addressCountry": "EG",
                  "streetAddress": "القاهرة الجديدة",
                  "postalCode": "11835"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Giza",
                  "addressRegion": "Giza Governorate",
                  "addressCountry": "EG",
                  "streetAddress": "الجيزة",
                  "postalCode": "12411"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Agouza",
                  "addressRegion": "Giza Governorate",
                  "addressCountry": "EG",
                  "streetAddress": "العجوزة",
                  "postalCode": "12311"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Sheikh Zayed",
                  "addressRegion": "Giza Governorate",
                  "addressCountry": "EG",
                  "streetAddress": "الشيخ زايد",
                  "postalCode": "12588"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "6th October",
                  "addressRegion": "Giza Governorate",
                  "addressCountry": "EG",
                  "streetAddress": "6 أكتوبر",
                  "postalCode": "12573"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "5th Settlement",
                  "addressRegion": "Cairo Governorate",
                  "addressCountry": "EG",
                  "streetAddress": "التجمع الخامس",
                  "postalCode": "11835"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Maadi",
                  "addressRegion": "Cairo Governorate",
                  "addressCountry": "EG",
                  "streetAddress": "المعادي",
                  "postalCode": "11431"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Zamalek",
                  "addressRegion": "Cairo Governorate",
                  "addressCountry": "EG",
                  "streetAddress": "الزمالك",
                  "postalCode": "11211"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Mohandessin",
                  "addressRegion": "Giza Governorate",
                  "addressCountry": "EG",
                  "streetAddress": "المهندسين",
                  "postalCode": "12411"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Nasr City",
                  "addressRegion": "Cairo Governorate",
                  "addressCountry": "EG",
                  "streetAddress": "مدينة نصر",
                  "postalCode": "11371"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Heliopolis",
                  "addressRegion": "Cairo Governorate",
                  "addressCountry": "EG",
                  "streetAddress": "هليوبوليس",
                  "postalCode": "11341"
                }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "30.0444",
                "longitude": "31.2357"
              },
              "areaServed": [
                "Cairo", "Giza", "Agouza", "Sheikh Zayed", "6th October", "New Cairo",
                "5th Settlement", "Maadi", "Zamalek", "Mohandessin", "Nasr City",
                "Heliopolis", "Pyramid", "Downtown Cairo", "Garden City", "Dokki",
                "القاهرة", "الجيزة", "العجوزة", "الشيخ زايد", "6 أكتوبر", "القاهرة الجديدة",
                "التجمع الخامس", "المعادي", "الزمالك", "المهندسين", "مدينة نصر", "هليوبوليس",
                "الهرم", "وسط البلد", "جاردن سيتي", "الدقي"
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
          dangerouslySetInnerHTML={ {
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Night Club Egypt",
              "url": "https://nightclubegypt.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://nightclubegypt.com/favicon-512x512.png",
                "width": 512,
                "height": 512,
                "caption": "Night Club Egypt Logo",
                "contentUrl": "https://nightclubegypt.com/logo-seo-1200x1200.png"
              },
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

        {/* Service Worker Registration المحسن */}
        <script
          dangerouslySetInnerHTML={ {
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js', {
                    scope: '/',
                    updateViaCache: 'none'
                  }).then(function(registration) {
                    console.log('SW registered: ', registration);

                    // تحديث تلقائي للservice worker
                    registration.addEventListener('updatefound', () => {
                      const newWorker = registration.installing;
                      if (newWorker) {
                        newWorker.addEventListener('statechange', () => {
                          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // إشعار المستخدم بوجود تحديث
                            if (confirm('يتوفر تحديث جديد. هل تريد إعادة التحميل؟')) {
                              newWorker.postMessage({type: 'SKIP_WAITING'});
                              window.location.reload();
                            }
                          }
                        });
                      }
                    });

                    // تنظيف الcaches القديمة دورياً
                    setInterval(() => {
                      registration.postMessage({type: 'CACHE_CLEANUP'});
                    }, 60000 * 30); // كل 30 دقيقة

                  }).catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
                });
              }
            `
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
