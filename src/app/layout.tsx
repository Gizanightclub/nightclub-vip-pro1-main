import type { Metadata, Viewport } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import LogoStructuredData from "../components/LogoStructuredData";
import SEOUnified from "../components/SEOUnified";
import StructuredData from "../components/StructuredData";
import GoogleAnalytics from "../components/GoogleAnalytics";

// 👇 تحسين الخطوط العربية والإنجليزية مع preload لتحسين الأداء
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

// 👇 تحسين Viewport للجوال والأجهزة اللوحية - محسن لتجربة المستخدم
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8b5cf6' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' }
  ],
  // colorScheme moved from metadata to viewport
}

// 👇 Metadata محسن شامل لـ SEO مع كلمات مفتاحية باللهجة المصرية
export const metadata: Metadata = {
  title: {
    default: "🔥 أفضل نايت كلوب في مصر 2025 - أسعار تبدأ من 750 جنيه | احجز الآن",
    template: "%s | Night Club Egypt - أفضل نايت كلوب في مصر"
  },
  description: "🔥 نايت كلوب من الآخر في مصر 2025! أحلى أجواء وسهرات مع أشهر النجوم: رحمة محسن، عصام صاصا، بوسي، روح 🎶 خدمة VIP فخمة، رقص شرقي وديسكو، DJs عالميين. الأسعار تبدأ من 750 جنيه بس 💸 في القاهرة، الجيزة، العجوزة، الشيخ زايد، الزمالك. احجز دلوقتي 📞 01286110562",

  // 👇 كلمات مفتاحية محسنة باللهجة المصرية ومنظمة بشكل أفضل
  keywords: [
    // الكلمات الأساسية باللهجة المصرية
    "نايت كلوب مصر", "أفضل نايت كلوب في مصر", "نايت كلوب القاهرة", "ارخص نايت كلوب",
    "حجز نايت كلوب", "سهرات نايت كلوب", "اسعار نايت كلوب", "نايت كلوب VIP", "نايت كلوب ","nightclub",'نايت كلوب مصر 2025', 'أفضل نايت كلوب',
    'حفلات ليلية فاخرة',"ارخص نايت كلوب","نايت كلوب","نيت كلوب","نايت كلاب","حجز نايت كلوب","نايتات مصر","كلوبات مصر",
    "نايت كلوب مصر", "أفضل نايت كلوب في مصر", " سهرات نايت كلوب", "اسعار نايت كلوب", "Night Club", "نايت كلوب", "ارخص نايت كلوب",
   "سهرات خليجي", "نايت", "سهرات ديسكو", "كباريه", "ديسكو", "nightclub", "نايت كلوب القاهره", "نايت كلوب في الجيزه","نايت كلوب مصر 2025",
   "أفضل نايت كلوب في مصر", "ملهى ليلي VIP", "نادي ليلي فاخر", "Night Club Egypt", "احجز نايت كلوب", "حفلات ليلية فاخرة", "سهرات مميزة مصر",
    'سهرات VIP', 'ملهى ليلي راقي', 'ديسكو القاهرة',"كباريه","نايت كلوب مفتوح الان","كلوب مصر","نادي نايت ",
    'nightclub Egypt', 'Cairo nightlife', 'VIP nightclub', "club night club","club", "night club","egypt club","the nightclub",

    // المدن والمناطق المصرية للـ Local SEO
    "نايت كلوب الجيزة", "نايت كلوب العجوزة", "نايت كلوب الشيخ زايد", "نايت كلوب الهرم",
    "نايت كلوب التجمع الخامس", "نايت كلوب 6 أكتوبر", "نايت كلوب المعادي", "نايت كلوب الزمالك",
    "نايت كلوب المهندسين", "نايت كلوب مدينة نصر", "نايت كلوب مصر الجديدة", "نايت كلوب الدقي",

    // كلمات بحث تفصيلية باللهجة المصرية
    "افضل نايت كلوب في القاهرة", "احسن نايت كلوب في مصر", "اشهر نايت كلوب", "اجمل نايت كلوب",
    "ارقى نايت كلوب", "نايت كلوب راقي مصر", "نايت كلوب فخم", "عروض نايت كلوب", "باقات نايت كلوب",

    // أسماء الفنانين والراقصات
    "رحمة محسن", "عصام صاصا", "إسلام كبونجا", "رضا البحراوي", "كريم كرستيانو",
    "بوسي راقصة", "روح راقصة", "ليندا راقصة", "بديعة راقصة", "توفحة راقصة", "فيروز راقصة",

    // English keywords for international visitors
    "nightclub Egypt", "best nightclub Cairo", "nightclub Giza", "VIP nightclub Egypt", "Cairo nightlife",
    "nightclub Agouza", "nightclub Sheikh Zayed", "premium nightclub Egypt", "nightclub",

    // خدمات ومناسبات
    "حفلات ليلية مصر", "سهرات القاهرة", "ترفيه ليلي VIP", "حفلات خاصة", "مناسبات خاصة",
    "DJ nights Egypt", "live music Cairo", "party nights Egypt", "VIP tables Egypt", "nightclub booking Egypt"
  ].join(", "),

  authors: [{ name: "Night Club Egypt", url: "https://www.nightclubegypt.com" }],
  creator: "Night Club Egypt",
  publisher: "Night Club Egypt",
  applicationName: "Night Club Egypt",
  generator: "Next.js 14",
  referrer: "origin-when-cross-origin",
  // colorScheme moved to viewport

  // 👇 تحسين إعدادات محركات البحث
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Entertainment, Nightlife, Tourism, Hospitality",
  classification: "Entertainment Venue",

  // 👇 إعدادات جغرافية محسنة للمدن المصرية
  other: {
    "google-site-verification": "vIFvNXtiEElV5o0_lQyVrK50RaetndJXR4Vu4Qc2ohc",
    "msvalidate.01": "nightclub-egypt-bing-verification",
    "yandex-verification": "nightclub-egypt-yandex-verification",
    "geo.region": "EG-C", // Cairo region code
    "geo.placename": "Cairo, Giza, Agouza, Sheikh Zayed, New Cairo, Zamalek, Mohandessin",
    "geo.position": "30.0666;31.2240", // العجوزة coordinates
    "ICBM": "30.0666, 31.2240",
    "language": "ar, en",
    "rating": "general",
    "revisit-after": "1 days",
    "distribution": "global",
    "copyright": "Night Club Egypt 2025",
    "format-detection": "telephone=yes",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Night Club Egypt",
  },

  // 👇 تحسين Open Graph للمشاركة على الشبكات الاجتماعية
  openGraph: {
    title: "🔥 Night Club Egypt | أفضل نايت كلوب في مصر 2025 - أسعار من 750 جنيه",
    description: "🎉 استمتع بأفضل سهرة ليلية في مصر مع أشهر النجوم: رحمة محسن، عصام صاصا، بوسي، روح! حفلات فاخرة وخدمة VIP استثنائية في القاهرة، الجيزة، العجوزة، الشيخ زايد. أسعار تبدأ من 750 جنيه. احجز الآن 📞 01286110562",
    type: "website",
    url: "https://www.nightclubegypt.com",
    siteName: "Night Club Egypt",
    locale: "ar_EG",
    alternateLocale: ["en_US", "en_GB"],
    countryName: "Egypt",
    images: [
      {
        url: "https://www.nightclubegypt.com/images/logo-seo-1200x1200.webp",
        width: 1200,
        height: 630,
        alt: "Night Club Egypt - أفضل نايت كلوب في مصر - القاهرة الجيزة العجوزة الشيخ زايد",
        type: "image/webp",
      },
      {
        url: "https://www.nightclubegypt.com/images/nightclub1.jpeg",
        width: 1200,
        height: 630,
        alt: "حفلات ليلية فاخرة - أفضل نايت كلوب بمصر",
        type: "image/jpeg",
      },
      {
        url: "https://www.nightclubegypt.com/images/nightclub0.jpeg",
        width: 1200,
        height: 630,
        alt: "سهرات VIP وخدمة مميزة - Night Club Egypt",
        type: "image/jpeg",
      },
    ],
    videos: [
      {
        url: "https://www.nightclubegypt.com/videos/sasa2.mp4",
        width: 1280,
        height: 720,
        type: "video/mp4",
      }
    ],
    emails: ["nightclub2026@gmail.com"],
    phoneNumbers: ["+201286110562"],
    ttl: 604800, // 7 days
  },

  // 👇 تحسين Twitter Cards للمشاركة على تويتر
  twitter: {
    card: "summary_large_image",
    site: "nightclub2026@gmail.com",
    creator: "nightclub2026@gmail.com",
    title: "🔥 Night Club Egypt | أفضل نايت كلوب في مصر 2025 - احجز الآن!",
    description: "🎉 تجربة ليلية لا تُنسى! حفلات فاخرة مع أشهر النجوم، VIP خدمة، موسيقى عالمية في القاهرة والجيزة والعجوزة والشيخ زايد. أسعار من 750 جنيه. احجز: 01286110562 🔥",
    images: {
      url: "https://www.nightclubegypt.com/images/logo-seo-1200x1200.png",
      alt: "Night Club Egypt - أفضل نايت كلوب في مصر",
    },
  },

  // 👇 إعدادات اللغات والروابط البديلة
  alternates: {
    canonical: "https://www.nightclubegypt.com",
    languages: {
      'ar': 'https://www.nightclubegypt.com',
      'en': 'https://www.nightclubegypt.com/en',
    },
  },

  // 👇 التحقق من محركات البحث
  verification: {
    google: "vIFvNXtiEElV5o0_lQyVrK50RaetndJXR4Vu4Qc2ohc",
    other: {
      bing: "nightclub-egypt-bing-verification",
    },
  },

  // 👇 إعدادات الأيقونات محسنة لجميع الأجهزة
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${inter.variable}`}>
      <head>
        {/* 👇 التحقق من Google Search Console */}
        <meta name="google-site-verification" content="vIFvNXtiEElV5o0_lQyVrK50RaetndJXR4Vu4Qc2ohc" />

        {/* 👇 Favicon محسن لجميع الأجهزة والمتصفحات */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#7fd3ff" />
        <meta name="msapplication-TileColor" content="#7fd3ff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* 👇 Preload critical resources لتحسين Core Web Vitals */}
        <link rel="preload" href="images/logo.png" as="image" type="image/png" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* 👇 Organization Logo JSON-LD للظهور في نتائج البحث */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Night Club Egypt",
              "alternateName": "نايت كلوب مصر",
              "url": "https://www.nightclubegypt.com",
              "logo": "https://www.nightclubegypt.com/images/logo-seo-1200x1200.webp",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61560900837183",
                "https://www.instagram.com/night_club_5star",
                "https://www.tiktok.com/@night.club993?_t=ZS-8yvVCVK9A5R&_r=1",
                "https://wa.me/201221675028",
              ]
            }),
          }}
        />

        {/* 👇 Critical CSS inline لتحسين First Contentful Paint */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body {
              font-family: var(--font-cairo), Arial, sans-serif;
              background: #000;
              color: #fff;
            }
            .nightclub-loader {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 9999;
            }
            @media (prefers-reduced-motion: reduce) {
              *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
              }
            }
          `
        }} />

        {/* 👇 Google Analytics محسن */}
        {/* removed inline dataLayer script, handled by GoogleAnalytics component */}
      </head>

      <body className="min-h-screen text-white font-cairo antialiased">
        {/* 👇 Structured Data محسن للنايت كلوب والخدمات */}
        <StructuredData
          name="Night Club Egypt"
          url="https://www.nightclubegypt.com"
          logo="https://www.nightclubegypt.com/images/logo-seo-1200x1200.webp"
          description="أفضل نايت كلوب في مصر لعام 2025 - حفلات ليلية فاخرة بأسعار تبدأ من 750 جنيه. خدمة VIP استثنائية مع أشهر النجوم: رحمة محسن، عصام صاصا، بوسي، روح في القاهرة، الجيزة، العجوزة، الشيخ زايد."
          address={{
            "streetAddress": "كورنيش النيل، العجوزة",
            "addressLocality": "الجيزة",
            "addressRegion": "القاهرة الكبرى",
            "addressCountry": "EG"
          }}
          contactPoint={{
            "telephone": "+201286110562",
            "email": "nightclub2026@gmail.com",
            "contactType": "customer service",
            "availableLanguage": ["Arabic", "English"]
          }}
          sameAs={[
            "https://www.facebook.com/profile.php?id=61560900837183",
            "https://www.facebook.com/people/%D9%83%D8%A8%D8%A7%D8%B1%D9%8A%D9%87-%D8%A7%D9%84%D8%B9%D8%AC%D9%88%D8%B2%D9%87-Night-Club/61569297924042/",
            "https://www.instagram.com/night_club_5star",
            "https://www.tiktok.com/@night.club993?_t=ZS-8yvVCVK9A5R&_r=1",
            "https://wa.me/201286110562?countryCode=20&countryName=EG&phoneNumber=1286110562",
            "https://maps.app.goo.gl/E5R8oXS1WQfgZ5W66"
          ]}
        />

        {/* 👇 Logo Structured Data */}
        <LogoStructuredData />

        {/* 👇 SEO Component موحد ومحسن */}
        <SEOUnified pageType="home" />

        {children}

        <Toaster position="top-center" />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-H1ZWPG12HP"} />
      </body>
    </html>
  );
}
