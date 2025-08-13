import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import Script from "next/script"; //  استيراد Script

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Night Club Egypt | أفضل نايت كلوب في القاهرة - Night Party",
  description: "Night Club Egypt - أفضل نايت كلوب في القاهرة. حفلات مميزة، عروض حية، أجواء VIP فاخرة، وخدمة استثنائية. احجز الآن واستمتع بأجمل الليالي في مصر.",
  keywords: "نايت كلوب مصر, القاهرة, حفلات, سهرة, VIP, ترفيه, موسيقى, Night Club Egypt, nightclubegypt, party, entertainment",
  authors: [{ name: "Night Club Egypt" }],
  creator: "Night Club Egypt",
  publisher: "Night Club Egypt",
  robots: "index, follow",
  openGraph: {
    title: "Night Club Egypt | أفضل نايت كلوب في القاهرة",
    description: "استمتع بأفضل سهرة ليلية في القاهرة مع حفلات مميزة وخدمة VIP فاخرة في Night Club Egypt",
    type: "website",
    url: "https://nightclubegypt.com",
    siteName: "Night Club Egypt",
    locale: "ar_EG",
    images: [
      {
        url: "/images/nightclubegyptlogo.jpg",
        width: 1200,
        height: 630,
        alt: "Night Club Egypt - أفضل نايت كلوب في القاهرة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Night Club Egypt | أفضل نايت كلوب في القاهرة",
    description: "استمتع بأفضل سهرة ليلية في القاهرة مع حفلات مميزة وخدمة VIP فاخرة",
    images: ["/images/nightclubegypt.com.jpg"],
  },
  alternates: {
    canonical: "https://nightclubegypt.com",
  },
  other: {
    "google-site-verification": "nightclub-egypt-verification",
    "msvalidate.01": "nightclub-egypt-bing-verification",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#e4e4e4ff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="EG-C" />
        <meta name="geo.placename" content="Cairo" />
        <meta name="geo.position" content="30.0444;31.2357" />
        <meta name="ICBM" content="30.0444, 31.2357" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NightClub",
            "name": "Night Club Egypt",
            "description": "أفضل نايت كلوب في القاهرة مع حفلات مميزة وخدمة VIP فاخرة",
            "url": "https://nightclubegypt.com",
            "telephone": "+201286110562",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Cairo",
              "addressCountry": "EG"
            },
            "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 20:00-06:00",
            "priceRange": "$$$",
            "image": "https://nightclubegypt.com/images/nightclubegypt.com.jpg",
            "sameAs": [
              "https://wa.me/201286110562"
            ]
          })}
        </script>
      </head>
      <body className={${cairo.variable} ${inter.variable} font-cairo antialiased bg-black text-white overflow-x-hidden}>
        {/*  كود Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H1ZWPG12HP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H1ZWPG12HP');
          `}
        </Script>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
