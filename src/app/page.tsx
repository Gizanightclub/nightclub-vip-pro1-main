"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import VideoCarousel from "@/components/VideoCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";
import ShareButtons from "@/components/ShareButtons";


export default function Home() {
  const [backgroundParticles, setBackgroundParticles] = useState<
    Array<{ left: string; top: string; delay: string; duration: string }>
  >([]);
  const [mounted, setMounted] = useState(false);

  // إنشاء عناوين ديناميكية متنوعة لتحسين SEO
  const dynamicTitles = [
    "🔥 أرخص نايت كلوب في مصر 2025 | خصم 50% - احجز الآن",
    "⭐ أفضل Nightclub في القاهرة | أسعار مميزة - Night Club Egypt",
    "🎉 أفضل نايت كلوب VIP | عروض ديسكو حصرية",
    "💫 نايت كلوب مصر | Nightclub ",
    "🌟 افضل نايت كلوب في الجيزة | Nightclub"
  ];

  const [randomTitle] = useState(() =>
    dynamicTitles[Math.floor(Math.random() * dynamicTitles.length)]
  );

  useEffect(() => {
    // Mark component as mounted to avoid hydration mismatch
    setMounted(true);

    // Generate background particles on client side only
    const particles = Array.from({ length: 30 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
    }));
    setBackgroundParticles(particles);
  }, []);

  return (
    <>
     {/* Enhanced SEO Head with Rich Keywords */}
        <SeoHead
          title={randomTitle}
          description="🎉 استمتع بأفضل سهرة ليلية في مصر مع نجوم الغناء! حفلات فاخرة مع رحمة محسن، عصام صاصا، إسلام كبونجا، رضا البحراوي، كريم الغزال. عروض راقصات مشهورات: بوسي، روح، ليندا، بديعة، توفحة، فيروز. خدمة VIP استثنائية، موسيقى عالمية، DJs مشاهير في القاهرة والجيزة والعجوزة والشيخ زايد. أرخص الأسعار! احجز الآن: 01286110562"
          keywords={[
            "أرخص نايت كلوب في مصر", "أفضل Nightclub", "أسعار نايت كلوب", "عروض ديسكو",
            "نايت كلوب مصر", "حفلات ليلية فاخرة", "سهرات VIP", "ديسكو القاهرة", "نايت كلوب الجيزة",
            "رحمة محسن", "عصام صاصا", "إسلام كبونجا", "رضا البحراوي", "كريم الغزال",
            "بوسي راقصة", "روح راقصة", "ليندا راقصة", "بديعة راقصة", "توفحة راقصة", "فيروز راقصة",
            "نايت كلوب العجوزة", "نايت كلوب الشيخ زايد", "نايت كلوب الهرم", "نايت كلوب التجمع الخامس",
            "ملهى ليلي VIP", "نادي ليلي فاخر", "احجز نايت كلوب", "باقات نايت كلوب", "خصومات نايت كلوب"
          ]}
          location="القاهرة"
        />
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[70] bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
      >
        الانتقال إلى المحتوى الرئيسي
      </a>

      <div className="min-h-screen bg-black text-white overflow-x-hidden" role="document">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main id="main-content" role="main" aria-label="المحتوى الرئيسي للموقع">
          {/* Hero Section */}
          <section id="home" aria-labelledby="hero-title">
            <HeroSection />
          </section>

          {/* About Section */}
          <section id="about" aria-labelledby="about-title">
            <About />
          </section>

          {/* Video Carousel Section */}
          <section id="videos" aria-labelledby="videos-title" className="bg-gradient-to-b from-black via-purple-900/10 to-black">
            <VideoCarousel />
          </section>

          {/* Gallery Section */}
          <section id="gallery" aria-labelledby="gallery-title">
            <Gallery />
          </section>

          {/* Pricing Section */}
          <section id="packages" aria-labelledby="packages-title">
            <Pricing />
          </section>

          {/* Contact Section */}
          <section id="contact" aria-labelledby="contact-title">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <footer role="contentinfo" aria-label="معلومات الاتصال وروابط الموقع">
          <Footer />
        </footer>

        {/* Fixed Elements */}
        {/* Floating WhatsApp Button */}
        <WhatsAppButton
          phoneNumber="201286110562"
          message="مرحباً، أود معرفة تفاصيل الحجز والأسعار في أفضل نايت كلوب مصر 🌟"
          position="bottom-right"
          showTooltip={true}
        />

        {/* Share Buttons - Fixed */}
        <div className="fixed bottom-6 left-6 z-40" role="complementary" aria-label="أزرار المشاركة الاجتماعية">
          <ShareButtons
            url="https://www.nightclubegypt.com"
            title="🔥 أفضل نايت كلوب في مصر - احجز الآن مع بخصومات 50%"
            description="استمتع بأفضل السهرات مع نجوم الغناء والرقص! حفلات فاخرة مع رحمة محسن، عصام صاصا، بوسي، روح وأكبر النجوم. خدمة VIP متميزة بأرخص الأسعار في القاهرة والجيزة"
            showLabels={false}
            size="lg"
          />
        </div>

        {/* Background Elements */}
        {mounted && (
          <div className="particles-bg" aria-hidden="true">
            {/* Floating particles for ambiance */}
            {backgroundParticles.map((particle, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-nightclub-purple/20 rounded-full animate-sparkle pointer-events-none"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration,
                }}
                aria-hidden="true"
              />
            ))}
          </div>
        )}

        {/* Accessibility Enhancements */}
        {/* Screen reader announcements */}
        <div
          id="live-region"
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
          role="status"
        />

        {/* Focus management for keyboard navigation */}
        <div
          id="focus-management"
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
        />

        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.nightclubegypt.com/#website",
                  "url": "https://www.nightclubegypt.com/",
                  "name": "🔥 أرخص نايت كلوب في مصر 2025 | Night Club Egypt VIP - احجز الآن",
                  "description": "Night Club Egypt هو الوجهة الأولى لعشاق السهر في مصر. استمتع بأجواء فاخرة وحفلات لا تُنسى مع أشهر النجوم: رحمة محسن، عصام صاصا، إسلام كبونجا، رضا البحراوي، كريم الغزال، بوسي وغيرهم. احجز الآن بأفضل الأسعار مع خصومات تصل إلى 50%، وتمتع بخدمة VIP وموسيقى حية ترضي جميع الأذواق.",
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://www.nightclubegypt.com/?s={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ],
                  "inLanguage": "ar"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.nightclubegypt.com/#webpage",
                  "url": "https://www.nightclubegypt.com/",
                  "name": "Night Club Egypt - أفضل سهرات ليلية وحفلات VIP في مصر",
                  "isPartOf": {
                    "@id": "https://www.nightclubegypt.com/#website"
                  },
                  "description": "🔥 اكتشف أفضل نايت كلوب في مصر 2025 مع Night Club Egypt! حفلات مميزة تضم كبار الفنانين مثل رحمة محسن، عصام صاصا، رضا البحراوي، بوسي، ليندا، وغيرهم. نقدم لك عروض وأسعار لا تقارن مع أجواء مليئة بالمرح، رقص شرقي وغربي، وخدمة VIP تلبي جميع احتياجاتك. احجز الآن واستمتع بليلة فريدة من نوعها.",
                  "breadcrumb": {
                    "@id": "https://www.nightclubegypt.com/#breadcrumb"
                  },
                  "inLanguage": "ar"
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.nightclubegypt.com/#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "الرئيسية",
                      "item": "https://www.nightclubegypt.com/"
                    }
                  ]
                },
                {
                  "@type": "NightClub",
                  "@id": "https://www.nightclubegypt.com/#nightclub",
                  "alternateName": [
                                   "أرخص نايت كلوب في مصر",
                                   "أفضل Nightclub 2025",
                                    "ملهى ليلي VIP في القاهرة",
                                "حفلات نجوم الغناء والرقص في مصر"
                                                                   ],

                  "image": [
                    "https://www.nightclubegypt.com/images/nightclub1.jpeg",
                    "https://www.nightclubegypt.com/images/nightclub0.jpeg"
                  ],
                  "description": "Night Club Egypt هو أفضل ملهى ليلي في مصر لعشاق السهر والاحتفالات. نقدّم لك أجواء راقية مع موسيقى حية، دي جي عالمي، رقص شرقي وغربي، وخدمات VIP حصرية. حفلاتنا تستضيف كبار النجوم مثل رحمة محسن، عصام صاصا، رضا البحراوي، كريم الغزال، بوسي، وغيرهم. مع عروض وخصومات تصل إلى 50%، نضمن لك ليلة استثنائية لا تُنسى بأرخص الأسعار.",
                  "url": "https://www.nightclubegypt.com/",
                  "telephone": "+201286110562",
                  "priceRange": "500-2500 EGP",
                  "currenciesAccepted": "EGP",
                  "paymentAccepted": ["Cash", "Credit Card", "Mobile Payment"],
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "كورنيش النيل، العجوزة",
                    "addressLocality": "الجيزة",
                    "addressRegion": "القاهرة الكبرى",
                    "postalCode": "11511",
                    "addressCountry": "EG"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 30.0666,
                    "longitude": 31.2240
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday", "Tuesday", "Wednesday",
                        "Thursday", "Friday", "Saturday", "Sunday"
                      ],
                      "opens": "20:00",
                      "closes": "04:00"
                    }
                  ],
                  "amenityFeature": [
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "VIP Tables",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Live Music Shows",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Professional Dancers",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Dance Floor",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Premium Bar Service",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Private Rooms",
                      "value": true
                    }
                  ],
                  "performer": [
                    {"@type": "Person", "name": "رحمة محسن"},
                    {"@type": "Person", "name": "عصام صاصا"},
                    {"@type": "Person", "name": "إسلام كبونجا"},
                    {"@type": "Person", "name": "رضا البحراوي"},
                    {"@type": "Person", "name": "كريم الغزال"},
                    {"@type": "Person", "name": "بوسي"},
                    {"@type": "Person", "name": "روح"},
                    {"@type": "Person", "name": "ليندا"},
                    {"@type": "Person", "name": "بديعة"},
                    {"@type": "Person", "name": "توفحة"},
                    {"@type": "Person", "name": "فيروز"}
                  ],
                  "sameAs": [
                    "https://www.facebook.com/profile.php?id=61560900837183",
                    "https://www.instagram.com/night_club_5star",
                    "https://www.tiktok.com/@night.club993?_t=ZS-8yvVCVK9A5R&_r=1",
                    "https://wa.me/201286110562?countryCode=20&countryName=EG&phoneNumber=1286110562",
                    "https://maps.app.goo.gl/E5R8oXS1WQfgZ5W66"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "باقات وعروض نايت كلوب",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "باقة VIP"
                        },
                        "price": "1500",
                        "priceCurrency": "EGP"
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "باقة عادية"
                        },
                        "price": "750",
                        "priceCurrency": "EGP"
                      }
                    ]
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "156"
                  }
                }
              ]
            })
          }}
        />
      </div>
    </>
  );
}
