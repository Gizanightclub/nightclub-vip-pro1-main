import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import { GoogleAnalytics } from '@next/third-parties/google';
import StructuredData from "../components/StructuredData";
import { SpeedInsights } from '@vercel/speed-insights/next';
import LogoStructuredData from "../components/LogoStructuredData";
import SEOOptimizer from "../components/SEOOptimizer";
import SEOEnhancer from "../components/SEOEnhancer";

// تحسين font loading لتقليل CLS
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap", // تحسين FOUT
  fallback: ['Arial', 'sans-serif'],
  preload: true, // preload للخط الرئيسي
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ['Arial', 'sans-serif'],
  preload: false, // inter كـ fallback فقط
});

export const metadata: Metadata = {
  title: {
    default: "🔥 Night Club Egypt |نايت كلوب في مصر 2025",
    template: "%s | Night Club Egypt - أفضل نايت كلوب في مصر"
  },
  description: "🔥 أفضل نايت كلوب في مصر لعام 2025 | احجز الآن في Night Club Egypt واستمتع بحفلات ليلية فاخرة وخدمة VIP استثنائية في القاهرة، الجيزة، العجوزة، الشيخ زايد، الهرم، التجمع الخامس، 6 أكتوبر، المعادي، الزمالك، المهندسين، مدينة نصر، هليوبوليس. عروض حية، موسيقى عالمية، سهرات لا تُنسى، أجواء رائعة مع أفضل DJs. نقدم خدمات حفلات أعياد الميلاد، المناسبات الخاصة، الفعاليات الشركات. أفضل ترفيه ليلي في مصر! 📞 اتصل الآن: 01286110562",
  keywords: [
    // الكلمات المفتاحية الأساسية المحدثة 2025 مع AI-powered keywords
    "نايت كلوب مصر 2025", "أفضل نايت كلوب في مصر", "ملهى ليلي VIP", "نادي ليلي فاخر", "Night Club Egypt", "احجز نايت كلوب", "حفلات ليلية فاخرة", "سهرات مميزة مصر",
    // المدن والمناطق المصرية - تحسين محلي Local SEO
    "نايت كلوب القاهرة", "نايت كلوب الجيزة", "نايت كلوب العجوزة", "نايت كلوب العجوزه", "نايت كلوب الشيخ زايد", "نايت كلوب الهرم",
    "نايت كلوب التجمع الخامس", "نايت كلوب 6 أكتوبر", "نايت كلوب المعادي", "نايت كلوب الزمالك", "نايت كلوب المهندسين",
    "نايت كلوب مدينة نصر", "نايت كلوب هليوبوليس", "نايت كلوب مصر الجديدة", "نايت كلوب القاهرة الجديدة", "نايت كلوب الدقي",
    "نايت كلوب جاردن سيتي", "نايت كلوب وسط البلد", "نايت كلوب كورنيش النيل", "نايت كلوب النيل",
    // كلمات بحث عربية تفصيلية Long-tail Arabic SEO
    "افضل نايت كلوب في القاهرة", "احسن نايت كلوب في مصر", "اشهر نايت كلوب", "اجمل نايت كلوب", "ارقى نايت كلوب",
    "نايت كلوب راقي مصر", "نايت كلوب فخم", "نايت كلوب حديث", "نايت كلوب مودرن", "نايت كلوب عصري",
    "حجز نايت كلوب مصر", "اسعار نايت كلوب", "عروض نايت كلوب", "باقات نايت كلوب", "خصومات نايت كلوب",
    // English keywords for tourists and international visitors
    "nightclub Cairo 2025", "best nightclub Egypt", "luxury nightclub Cairo", "VIP nightclub Egypt", "Cairo nightlife",
    "nightclub Giza", "nightclub Agouza", "nightclub Sheikh Zayed", "nightclub 6th October", "nightclub New Cairo",
    "nightclub Maadi", "nightclub Zamalek", "nightclub Mohandessin", "nightclub Heliopolis", "nightclub Nasr City",
    "Egypt nightclub VIP", "Cairo night entertainment", "Egypt nightlife scene", "premium nightclub Egypt",
    "exclusive nightclub Cairo", "upscale nightclub Egypt", "trendy nightclub Cairo", "modern nightclub Egypt",
    // خدمات ومناسبات وفعاليات Trending Event Keywords
    "حفلات ليلية مصر", "سهرات القاهرة", "ترفيه ليلي VIP", "حفلات خاصة", "مناسبات خاصة", "حفلات اعياد ميلاد",
    "فعاليات شركات", "حفلات زفاف", "احتفالات مصر", "مؤتمرات وفعاليات", "ترفيه شركات",
    "DJ nights Egypt", "live music Cairo", "party nights Egypt", "dance floor Cairo", "nightclub booking Egypt",
    "birthday parties Egypt", "corporate events Cairo", "wedding celebrations", "bachelor parties", "anniversary celebrations",
    // اتجاهات وتقنيات 2025 Trending & Tech Keywords
    "نايت كلوب تكنولوجي", "LED nightclub Egypt", "smart nightclub", "digital entertainment Egypt", "interactive nightlife",
    "نايت كلوب بتقنيات حديثة", "هولوجرام نايت كلوب", "نايت كلوب ثلاثي الأبعاد", "VR nightclub Egypt",
    "اضاءة ليد نايت كلوب", "صوتيات عالية الجودة", "نظام صوت متطور", "اضاءة ذكية",
    // السياحة والترفيه Tourism & Entertainment
    "السياحة الليلية مصر", "اماكن ترفيه ليلي", "كورنيش النيل ترفيه", "سياحة ترفيهية القاهرة",
    "Egypt tourist nightlife", "Cairo tourist attractions", "Egypt entertainment tourism", "Nile entertainment",
    "tourist nightclub Egypt", "visitor nightlife Cairo", "Egypt holiday nightlife", "Cairo vacation entertainment",
    // موسمية وتخصصية Seasonal & Specialized
    "نايت كلوب رأس السنة", "حفلات عيد الحب", "نايت كلوب رمضان", "حفلات العيد", "نايت كلوب الصيف",
    "new year nightclub Egypt", "valentine's day party", "summer nights Egypt", "weekend parties Cairo",
    "ladies night Egypt", "couples night Cairo", "group bookings nightclub", "VIP table booking",
    // Social Media & Digital Presence
    "نايت كلوب انستقرام", "نايت كلوب تيك توك", "نايت كلوب فيسبوك", "night club social media",
    "viral nightclub Egypt", "Instagram worthy nightclub", "TikTok famous nightclub", "social nightclub Cairo"
  ].join(", "),
  authors: [{ name: "Night Club Egypt", url: "https://www.nightclubegypt.com" }],
  creator: "Night Club Egypt",
  publisher: "Night Club Egypt",
  applicationName: "Night Club Egypt",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#8b5cf6" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" }
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
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
  // Geo targeting for Egyptian cities and enhanced metadata
  other: {
    "google-site-verification": "nightclub-egypt-verification",
    "msvalidate.01": "nightclub-egypt-bing-verification",
    "yandex-verification": "nightclub-egypt-yandex-verification",
    "geo.region": "EG-C", // Cairo region code
    "geo.placename": "Cairo, Giza, 6th October, Sheikh Zayed, New Cairo, Agouza, Zamalek, Mohandessin",
    "geo.position": "30.0444;31.2357",
    "ICBM": "30.0444, 31.2357",
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
  openGraph: {
    title: "🔥 Night Club Egypt | أفضل نايت كلوب في مصر 2025 - احجز الآن!",
    description: "🎉 استمتع بأفضل سهرة ليلية في مصر مع حفلات فاخرة وخدمة VIP استثنائية! أجواء لا تُنسى في القاهرة، الجيزة، العجوزة، الشيخ زايد، الهرم، التجمع الخامس. عروض حية، موسيقى عالمية، DJs مشاهير. احجز الآن واستمتع بأجمل الليالي! 📞 01286110562",
    type: "website",
    url: "https://www.nightclubegypt.com",
    siteName: "Night Club Egypt",
    locale: "ar_EG",
    alternateLocale: ["en_US", "en_GB", "fr_FR"],
    countryName: "Egypt",
    images: [
      {
        url: "https://www.nightclubegypt.com/images/nightclubegyptlogo.jpg",
        width: 1200,
        height: 630,
        alt: "Night Club Egypt - أفضل نايت كلوب في مصر - القاهرة الجيزة العجوزه الشيخ زايد",
        type: "image/jpeg",
      },
      {
        url: "https://www.nightclubegypt.com/images/nightclubegypt.com.jpg",
        width: 1200,
        height: 630,
        alt: "حفلات ليلية فاخرة في أفضل نايت كلوب بمصر - خدمة VIP استثنائية",
        type: "image/jpeg",
      },
      {
        url: "https://www.nightclubegypt.com/images/logo-seo-1200x1200.jpg",
        width: 1200,
        height: 1200,
        alt: "Night Club Egypt Logo - شعار نايت كلوب مصر",
        type: "image/jpeg",
      },
    ],
    videos: [
      {
        url: "https://www.nightclubegypt.com/videos/nightclub-promo.mp4",
        width: 1280,
        height: 720,
        type: "video/mp4",
      }
    ],
    audio: [
      {
        url: "https://www.nightclubegypt.com/audio/nightclub-ambiance.mp3",
        type: "audio/mpeg",
      }
    ],
    emails: ["info@nightclubegypt.com", "bookings@nightclubegypt.com"],
    phoneNumbers: ["+201286110562", "+20-128-611-0562"],
    faxNumbers: ["+20-1286110562"],
    ttl: 604800, // 7 days
  },
  twitter: {
    card: "summary_large_image",
    site: "@nightclubegypt",
    creator: "@nightclubegypt",
    title: "🔥 Night Club Egypt | أفضل نايت كلوب في مصر 2025 - احجز الآن!",
    description: "🎉 تجربة ليلية لا تُنسى! حفلات فاخرة، VIP خدمة، موسيقى عالمية، DJs مشاهير في القاهرة والجيزة والعجوزة والشيخ زايد. احجز الآن: 01286110562 🔥",
    images: {
      url: "https://www.nightclubegypt.com/images/nightclubegypt.com.jpg",
      alt: "Night Club Egypt - أفضل نايت كلوب في مصر",
    },

  },
  alternates: {
    canonical: "https://www.nightclubegypt.com",
    languages: {
      'ar': 'https://www.nightclubegypt.com',
      'en': 'https://www.nightclubegypt.com/en',
    },
  },
  verification: {
    google: "nightclub-egypt-verification",
    other: {
      bing: "nightclub-egypt-bing-verification",
    },
  },
  // إضافة metadata للـ favicon
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
        <meta name="google-site-verification" content="vIFvNXtiEElV5o0_lQyVrK50RaetndJXR4Vu4Qc2ohc" />
        {/* Favicon محسن لجميع الأجهزة والمتصفحات */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preload critical resources لتحسين LCP وتقليل blocking */}
        <link rel="preload" href="/images/nightclubegyptlogo.jpg" as="image" type="image/jpeg" />
        <link rel="preconnect" href="https://abnzriaextacbsoroyfr.supabase.co" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Optimize CSS loading */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />

        {/* Organization Logo JSON-LD for Google Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={({
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://www.nightclubegypt.com",
              logo: "https://www.nightclubegypt.com/images/nightclubegyptlogo.jpg",
            }),
          })}
        />

        {/* Critical CSS inline لتحسين FCP */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body { font-family: var(--font-cairo), Arial, sans-serif; }
            .nightclub-loader {
              position: fixed; top: 50%; left: 50%;
              transform: translate(-50%, -50%);
              z-index: 9999;
            }
          `
        }} />
      </head>
      <body className="min-h-screen text-white font-cairo antialiased">
        {/* Structured Data محسن للوجو والمؤسسة لتحسين SEO */}
        <StructuredData
          name="Night Club Egypt"
          url="https://www.nightclubegypt.com"
          logo="https://www.nightclubegypt.com/images/nightclubegyptlogo.jpg"
          description="أفضل نايت كلوب في مصر لعام 2025 - حفلات ليلية فاخرة في القاهرة، الجيزة، العجوزة، الشيخ زايد، الهرم، التجمع الخامس، 6 أكتوبر، المعادي، الزمالك، المهندسين. خدمة VIP استثنائية، عروض حية، موسيقى عالمية، أجواء رائعة."
          address={{"addressLocality": "Cairo", "addressRegion": "Cairo Governorate", "addressCountry": "EG"}}
          contactPoint={{"telephone": "+201286110562", "email": "info@nightclubegypt.com", "contactType": "customer service", "availableLanguage": ["Arabic", "English"]}}
          sameAs={[
            "https://www.facebook.com/profile.php?id=61560900837183",
            "https://www.instagram.com/night_club_5star",
            "https://www.tiktok.com/@night.club993?_t=ZS-8yvVCVK9A5R&_r=1",
            "https://wa.me/201286110562?countryCode=20&countryName=EG&phoneNumber=1286110562",
            "https://maps.app.goo.gl/E5R8oXS1WQfgZ5W66"
          ]}
        />

        {/* Logo Structured Data */}
        <LogoStructuredData />

        {/* SEO Optimizer */}
        <SEOOptimizer />
        <SEOEnhancer />
        <SpeedInsights />
        {children}
        <Toaster position="top-center" />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
