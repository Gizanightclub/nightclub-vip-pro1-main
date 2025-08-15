import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import { GoogleAnalytics } from '@next/third-parties/google';
import StructuredData from "../components/StructuredData";

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
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${inter.variable}`}>
      <head>
        {/* Preload critical resources لتحسين LCP وتقليل blocking */}
        <link rel="preload" href="/images/nightclubegyptlogo.jpg" as="image" type="image/jpeg" />
        <link rel="preconnect" href="https://abnzriaextacbsoroyfr.supabase.co" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Optimize CSS loading */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />

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
      <body className="min-h-screen bg-black text-white font-cairo antialiased">
        {/* Structured Data محسن للوجو والمؤسسة لتحسين SEO */}
        <StructuredData
          name="Night Club Egypt"
          url="https://nightclubegypt.com"
          logo="https://nightclubegypt.com/images/nightclubegyptlogo.jpg"
          description="أفضل نايت كلوب في مصر لعام 2024 - حفلات ليلية فاخرة في القاهرة، الجيزة، العجوزة، الشيخ زايد، الهرم، التجمع الخامس، 6 أكتوبر، المعادي، الزمالك، المهندسين. خدمة VIP استثنائية، عروض حية، موسيقى عالمية، أجواء رائعة."
          address={{
            addressLocality: "Cairo",
            addressRegion: "Cairo Governorate",
            addressCountry: "EG"
          }}
          contactPoint={{
            telephone: "+20-XXX-XXX-XXXX",
            email: "info@nightclubegypt.com",
            contactType: "customer service",
            availableLanguage: ["Arabic", "English"]
          }}
          sameAs={[
            "https://www.facebook.com/nightclubegypt",
            "https://www.instagram.com/nightclubegypt",
            "https://twitter.com/nightclubegypt"
          ]}
        />

        {children}
        <Toaster position="top-center" />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
