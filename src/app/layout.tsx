import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title:
    "Night Club Egypt | أفضل نايت كلوب في مصر - القاهرة الجيزة 6 أكتوبر الشيخ زايد",
  description:
    "أفضل نايت كلوب في مصر - القاهرة، الجيزة، 6 أكتوبر، الشيخ زايد، التجمع الخامس، المعادي، الزمالك. حفلات ليلية فاخرة، عروض حية، خدمة VIP استثنائية. احجز الآن واستمتع بأجمل الليالي في أفضل الأماكن السياحية في مصر.",
  keywords:
    "نايت كلوب القاهرة, نايت كلوب الجيزة, نايت كلوب العجوزه, نايت كلوب الشيخ زايد, نايت كلوب التجمع الخامس, نايت كلوب المعادي, نايت كلوب الزمالك, نايت كلوب مصر الجديدة, نايت كلوب مدينة نصر, نايت كلوب هليوبوليس, نايت كلوب 6 أكتوبر, nightclub Cairo, nightclub Giza, nightclub 6th October, nightclub Sheikh Zayed, nightclub New Cairo, nightclub Maadi, nightclub Zamalek, nightclub Egypt, nightlife Egypt, Egypt nightclubs, Cairo nightlife, Egypt entertainment, حفلات ليلية مصر, سهرات القاهرة, ترفيه ليلي, VIP خدمة, حفلات خاصة, birthday parties Egypt, corporate events Cairo, wedding celebrations Egypt, أماكن سياحية ترفيهية مصر, السياحة الليلية القاهرة, entertainment tourism Egypt",
  authors: [{ name: "Night Club Egypt" }],
  creator: "Night Club Egypt",
  publisher: "Night Club Egypt",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  category: "Entertainment, Nightlife, Tourism",
  classification: "Entertainment Venue",
  other: {
    "google-site-verification": "nightclub-egypt-verification",
    "msvalidate.01": "nightclub-egypt-bing-verification",
    "geo.region": "EG",
    "geo.placename": "Cairo, Giza, 6th October, Sheikh Zayed, New Cairo",
    "geo.position": "30.0444;31.2357",
    ICBM: "30.0444, 31.2357",
    language: "ar, en",
    rating: "general",
  },
  openGraph: {
    title: "Night Club Egypt | أفضل نايت كلوب في مصر - جميع المحافظات",
    description:
      "استمتع بأفضل سهرة ليلية في مصر مع حفلات مميزة في القاهرة، الجيزة، العجوزه، الشيخ زايد، التجمع. خدمة VIP فاخرة وأجواء لا تُنسى في أفضل الأماكن السياحية.",
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
      },
      {
        url: "https://nightclubegypt.com/images/nightclubegypt.com.jpg",
        width: 1200,
        height: 630,
        alt: "حفلات ليلية فاخرة في أفضل نايت كلوب بمصر - خدمة VIP استثنائية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nightclubegypt",
    creator: "@nightclubegypt",
    title: "Night Club Egypt | أفضل نايت كلوب في مصر",
    description:
      "استمتع بأفضل سهرة ليلية في القاهرة، الجيزة، العجوزه، الشيخ زايد مع حفلات مميزة وخدمة VIP فاخرة",
    images: ["https://nightclubegypt.com/images/nightclubegypt.com.jpg"],
  },
  alternates: {
    canonical: "https://nightclubegypt.com",
    languages: {
      ar: "https://nightclubegypt.com",
      en: "https://nightclubegypt.com/en",
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
        {/* تحسين الأداء: روابط مسبقة */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://www.google-analytics.com"
        />
        <link
          rel="dns-prefetch"
          href="https://www.googletagmanager.com"
        />

        {/* تحميل صور حرجة */}
        <link
          rel="preload"
          href="/images/nightclubegyptlogo.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/images/nightclubegypt.com.jpg"
          as="image"
          type="image/jpeg"
        />

        {/* أيقونات */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ميتا للموبايل */}
        <meta name="theme-color" content="#e4e4e4" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=yes"
        />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NightClub",
              name: "Night Club Egypt",
              description:
                "أفضل نايت كلوب في مصر مع حفلات مميزة وخدمة VIP فاخرة في القاهرة، الجيزة، العجوزه، الشيخ زايد، التجمع الخامس",
              url: "https://nightclubegypt.com",
              logo: "https://nightclubegypt.com/images/nightclubegyptlogo.jpg",
              telephone: "+201286110562",
              email: "info@nightclubegypt.com",
              hasMap:
                "https://www.google.com/maps/place/Cairo,+Egypt",
              address: [
                {
                  "@type": "PostalAddress",
                  addressLocality: "Cairo",
                  addressRegion: "Cairo Governorate",
                  addressCountry: "EG",
                  streetAddress: "القاهرة الجديدة",
                },
              ],
              geo: {
                "@type": "GeoCoordinates",
                latitude: "30.0444",
                longitude: "31.2357",
              },
              openingHours: "Mo-Su 20:00-06:00",
              priceRange: "$$$",
              paymentAccepted: ["Cash", "Credit Card", "Visa", "Mastercard"],
              currenciesAccepted: ["EGP", "USD"],
            }),
          }}
        />

        {/* Service Worker بتوست */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js', { scope: '/' })
                    .then(function(registration) {
                      registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        if (newWorker) {
                          newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                              document.body.insertAdjacentHTML('beforeend', '<div style="position:fixed;bottom:20px;left:20px;background:#333;color:#fff;padding:10px 20px;border-radius:8px;cursor:pointer;z-index:9999">📢 تحديث جديد متاح - اضغط لإعادة التحميل</div>');
                              document.querySelector('div[style*="cursor:pointer"]').onclick = () => {
                                newWorker.postMessage({type: 'SKIP_WAITING'});
                                window.location.reload();
                              };
                            }
                          });
                        }
                      });
                    })
                    .catch(console.error);
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${cairo.variable} ${inter.variable} font-cairo antialiased bg-black text-white overflow-x-hidden`}
      >
        {children}
        <Toaster />
        <GoogleAnalytics gaId="G-H1ZWPG12HP" />
      </body>
    </html>
  );
}
