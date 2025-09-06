import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VideoCarousel from "@/components/VideoCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";
import ShareButtons from "@/components/ShareButtons";

// 👇 إنشاء Metadata محسن للصفحة الرئيسية مع كلمات مفتاحية ديناميكية
export async function generateMetadata(): Promise<Metadata> {
  // 👇 استخدام عنوان ثابت لتجنب مشاكل Hydration
  const staticTitle = "🔥 أفضل نايت كلوب في مصر 2025 | أسعار مميزة من 750 جنيه";

  return {
    title: staticTitle,
    description: "🔥 نايت كلوب من الآخر في مصر 2025! أحلى أجواء وسهرات مع أشهر النجوم: رحمة محسن، عصام صاصا، إسلام كبونجا، بوسي، روح، ليندا 🎶 خدمة VIP فخمة، رقص شرقي وديسكو، DJs عالميين وأجواء نار. الأسعار تبدأ من 750 جنيه بس 💸 وباقات VIP 1500 جنيه. في القاهرة، الجيزة، العجوزة، الشيخ زايد، الزمالك، المعادي. احجز دلوقتي وعيش سهرة ماحصلتش 📞 01286110562",

    // 👇 كلمات مفتاحية شاملة ومحدثة للصفحة الرئيسية
    keywords: [
      // الكلمات الأساسية مع الأسعار
      "نايت كلوب مصر", "أفضل نايت كلوب في مصر", "نايت كلوب القاهرة", "ارخص نايت كلوب",
      "نايت كلوب بـ750 جنيه", "نايت كلوب VIP 1500 جنيه", "حجز نايت كلوب", "سهرات نايت كلوب",
       "نايت كلوب مصر", "أفضل نايت كلوب في مصر", "نايت كلوب القاهرة", "ارخص نايت كلوب",
      "حجز نايت كلوب", "سهرات نايت كلوب", "اسعار نايت كلوب", "نايت كلوب VIP", "نايت كلوب ","nightclub",'نايت كلوب مصر 2025', 'أفضل نايت كلوب',
      'حفلات ليلية فاخرة',"ارخص نايت كلوب","نايت كلوب","نيت كلوب","نايت كلاب","حجز نايت كلوب","نايتات مصر","كلوبات مصر",
     "نايت كلوب مصر", "أفضل نايت كلوب في مصر", " سهرات نايت كلوب", "اسعار نايت كلوب", "Night Club", "نايت كلوب", "ارخص نايت كلوب",
     "سهرات خليجي", "نايت", "سهرات ديسكو", "كباريه", "ديسكو", "nightclub", "نايت كلوب القاهره", "نايت كلوب في الجيزه","نايت كلوب مصر 2025",
     "أفضل نايت كلوب في مصر", "ملهى ليلي VIP", "نادي ليلي فاخر", "Night Club Egypt", "احجز نايت كلوب", "حفلات ليلية فاخرة", "سهرات مميزة مصر",
     'سهرات VIP', 'ملهى ليلي راقي', 'ديسكو القاهرة',"كباريه","نايت كلوب مفتوح الان","كلوب مصر","نادي نايت ",
     'nightclub Egypt', 'Cairo nightlife', 'VIP nightclub', "club night club","club", "night club","egypt club","the nightclub",


      // المدن والمناطق للـ Local SEO
      "نايت كلوب الجيزة", "نايت كلوب العجوزة", "نايت كلوب الشيخ زايد", "نايت كلوب الهرم",
      "نايت كلوب التجمع الخامس", "نايت كلوب 6 أكتوبر", "نايت كلوب المعادي", "نايت كلوب الزمالك",
      "نايت كلوب المهندسين", "نايت كلوب مدينة نصر", "نايت كلوب مصر الجديدة",

      // أسماء الفنانين المشهورين
      "رحمة محسن نايت كلوب", "عصام صاصا نايت كلوب", "إسلام كبونجا نايت كلوب",
      "رضا البحراوي نايت كلوب", "كريم الغزال نايت كلوب",
      "بوسي راقصة نايت كلوب", "روح راقصة نايت كلوب", "ليندا راقصة نايت كلوب",
      "بديعة راقصة نايت كلوب", "توفحة راقصة نايت كلوب", "فيروز راقصة نايت كلوب",

      // كلمات بحث تفصيلية
      "افضل نايت كلوب في القاهرة", "احسن نايت كلوب في مصر", "اشهر نايت كلوب",
      "اجمل نايت كلوب", "ارقى نايت كلوب", "نايت كلوب راقي مصر", "نايت كلوب فخم",
      "عروض نايت كلوب", "باقات نايت كلوب", "خصومات نايت كلوب",

      // English keywords
      "nightclub Egypt", "best nightclub Cairo", "nightclub Giza", "VIP nightclub Egypt",
      "Cairo nightlife", "nightclub Agouza", "nightclub Sheikh Zayed", "premium nightclub Egypt",

      // خدمات ومناسبات
      "حفلات ليلية مصر", "سهرات القاهرة", "ترفيه ليلي VIP", "حفلات خاصة",
      "DJ nights Egypt", "live music Cairo", "party nights Egypt", "VIP tables Egypt"
    ].join(", "),

    // 👇 تحسين Open Graph للصفحة الرئيسية
    openGraph: {
      title: staticTitle,
      description: "🎉 استمتع بأفضل سهرة ليلية في مصر مع أشهر النجوم! حفلات فاخرة مع رحمة محسن، عصام صاصا، بوسي، روح وأكبر الفنانين. خدمة VIP متميزة بأسعار تبدأ من 750 جنيه في أفضل مواقع القاهرة والجيزة والعجوزة. احجز الآن واستمتع بليلة لا تُنسى! 📞 01286110562",
      url: "https://www.nightclubegypt.com",
      images: [
        {
          url: "https://www.nightclubegypt.com/images/logo-seo-1200x1200.webp",
          width: 1200,
          height: 630,
          alt: "Night Club Egypt - أفضل نايت كلوب في مصر مع أشهر النجوم"
        },
        {
          url: "https://www.nightclubegypt.com/images/nightclub1.jpeg",
          width: 1200,
          height: 630,
          alt: "حفلات ليلية فاخرة مع رحمة محسن وعصام صاصا - نايت كلوب مصر"
        }
      ]
    },

    // 👇 تحسين Twitter Cards
    twitter: {
      card: "summary_large_image",
      title: staticTitle,
      description: "🔥 أحلى سهرات مع أشهر النجوم في أفضل نايت كلوب بمصر! رحمة محسن، عصام صاصا، بوسي، روح. أسعار من 750 جنيه، VIP 1500 جنيه. احجز الآن! 📞 01286110562",
      images: ["https://www.nightclubegypt.com/images/logo-seo-1200x1200.webp"]
    },

    // 👇 معلومات إضافية للSEO
    alternates: {
      canonical: "https://www.nightclubegypt.com"
    },

    other: {
      "geo.placename": "Cairo, Giza, Agouza, Sheikh Zayed, Egypt",
      "geo.position": "30.0666;31.2240",
      "ICBM": "30.0666, 31.2240"
    }
  };
}

export default function Home() {
  return (
    <>
      {/* 👇 Skip to main content للـ accessibility */}
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
          message="مرحباً، أود معرفة تفاصيل الحجز والأسعار في أفضل نايت كلوب مصر مع النجوم 🌟؟"
          position="bottom-right"
          showTooltip={true}
        />

        {/* Share Buttons - Fixed */}
        <div className="fixed bottom-6 left-6 z-40" role="complementary" aria-label="أزرار المشاركة الاجتماعية">
          <ShareButtons
            url="https://www.nightclubegypt.com"
            title="🔥 أفضل نايت كلوب في مصر - احجز الآن مع خصومات 50%"
            description="استمتع بأفضل السهرات مع نجوم الغناء والرقص! حفلات فاخرة مع رحمة محسن، عصام صاصا، بوسي، روح وأكبر النجوم. خدمة VIP متميزة بأرخص الأسعار في القاهرة والجيزة والعجوزة والشيخ زايد"
            showLabels={false}
            size="lg"
          />
        </div>

        {/* 👇 Client-side components للتفاعل */}


        {/* 👇 Accessibility Enhancements */}
        <div
          id="live-region"
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
          role="status"
        />

        <div
          id="focus-management"
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
        />

        {/* 👇 JSON-LD Structured Data محسن للصفحة الرئيسية */}
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
                  "name": "🔥 أفضل نايت كلوب في مصر 2025 | Night Club Egypt VIP - احجز الآن",
                  "description": "Night Club Egypt هو الوجهة الأولى لعشاق السهر في مصر. استمتع بأجواء فاخرة وحفلات لا تُنسى مع أشهر النجوم: رحمة محسن، عصام صاصا، إسلام كبونجا، رضا البحراوي، كريم الغزال، بوسي، روح، ليندا، بديعة، توفحة، فيروز. احجز الآن بأفضل الأسعار بداية من 750 جنيه مع خدمة VIP فاخرة تصل إلى 1500 جنيه.",
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
                  "description": "🔥 اكتشف أفضل نايت كلوب في مصر 2025 مع Night Club Egypt! حفلات مميزة تضم كبار الفنانين مثل رحمة محسن، عصام صاصا، رضا البحراوي، بوسي، ليندا، روح، وغيرهم. نقدم لك عروض وأسعار لا تقارن تبدأ من 750 جنيه مع أجواء مليئة بالمرح، رقص شرقي وغربي، وخدمة VIP تلبي جميع احتياجاتك.",
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
                  "name": "Night Club Egypt",
                  "alternateName": [
                    "أفضل نايت كلوب في مصر",
                    "نايت كلوب مصر",
                    "ملهى ليلي VIP في القاهرة",
                    "حفلات نجوم الغناء والرقص في مصر"
                  ],
                  "image": [
                    "https://www.nightclubegypt.com/images/nightclub1.jpeg",
                    "https://www.nightclubegypt.com/images/nightclub0.jpeg"
                  ],
                  "description": "Night Club Egypt هو أفضل ملهى ليلي في مصر لعشاق السهر والاحتفالات. نقدّم لك أجواء راقية مع موسيقى حية، دي جي عالمي، رقص شرقي وغربي، وخدمات VIP حصرية. حفلاتنا تستضيف كبار النجوم مثل رحمة محسن، عصام صاصا، رضا البحراوي، كريم الغزال، بوسي، روح، ليندا، وغيرهم. مع أسعار تبدأ من 750 جنيه وباقات VIP 1500 جنيه، نضمن لك ليلة استثنائية لا تُنسى.",
                  "url": "https://www.nightclubegypt.com/",
                  "telephone": "+201286110562",
                  "priceRange": "750-1500 EGP",
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
                      "name": "VIP Tables - طاولات VIP",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Live Music Shows - عروض موسيقية حية",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Professional Dancers - راقصات محترفات",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Dance Floor - أرضية الرقص",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Premium Bar Service - خدمة بار متميزة",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Private Rooms - غرف خاصة",
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
                    "https://www.facebook.com/people/%D9%83%D8%A8%D8%A7%D8%B1%D9%8A%D9%87-%D8%A7%D9%84%D8%B9%D8%AC%D9%88%D8%B2%D9%87-Night-Club/61569297924042/",
                    "https://www.instagram.com/night_club_5star",
                    "https://www.tiktok.com/@night.club993?_t=ZS-8yvVCVK9A5R&_r=1",
                    "https://wa.me/201286110562?countryCode=20&countryName=EG&phoneNumber=1286110562",
                    "https://maps.app.goo.gl/E5R8oXS1WQfgZ5W66"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "باقات وعروض نايت كلوب مصر",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "باقة VIP - طاولة VIP مع خدمة مميزة"
                        },
                        "price": "1500",
                        "priceCurrency": "EGP",
                        "description": "باقة VIP شاملة مشروبات ومأكولات وخدمة مميزة مع أفضل المقاعد"
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "باقة عادية - دخول مع مشروب واحد"
                        },
                        "price": "750",
                        "priceCurrency": "EGP",
                        "description": "باقة الدخول العادي مع مشروب واحد مجاني ومتابعة العروض"
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
