import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery";
import Programs from "@/components/Programs";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "نايت كلوب القاهرة | Night Club Egypt Cairo - أفضل ترفيه ليلي في العاصمة",
  description: "أفضل نايت كلوب في القاهرة - حفلات ليلية فاخرة في مصر الجديدة، مدينة نصر، هليوبوليس، الزمالك، المعادي. خدمة VIP استثنائية وأجواء لا تُنسى في قلب العاصمة المصرية.",
  keywords: "نايت كلوب القاهرة, nightclub Cairo, نايت كلوب مصر الجديدة, نايت كلوب مدينة نصر, نايت كلوب هليوبوليس, نايت كلوب الزمالك, نايت كلوب المعادي, Cairo nightlife, حفلات ليلية القاهرة, ترفيه ليلي القاهرة, سهرات القاهرة, أماكن سياحية ترفيهية القاهرة",
  openGraph: {
    title: "نايت كلوب القاهرة | أفضل حفلات ليلية في العاصمة المصرية",
    description: "استمتع بأجمل السهرات في القاهرة مع Night Club Egypt - خدمة VIP فاخرة في أفضل مواقع العاصمة",
    url: "https://nightclubegypt.com/locations/cairo",
    images: ["https://nightclubegypt.com/images/nightclubegypt.com.jpg"],
  },
  alternates: {
    canonical: "https://nightclubegypt.com/locations/cairo",
  },
};

export default function CairoPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Cairo Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-nightclub">
          <div className="absolute inset-0 bg-[rgba(30,60,90,0.4)] backdrop-blur-md/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-neon">
            نايت كلوب
            <span className="block text-nightclub-gold">القاهرة</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            أفضل نايت كلوب في العاصمة المصرية - القاهرة
            <br />
            <span className="text-nightclub-gold">مصر الجديدة • مدينة نصر • هليوبوليس • الزمالك • المعادي</span>
            <br />
            حفلات استثنائية في قلب القاهرة التاريخية والحديثة
          </p>

          {/* Cairo Locations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                area: "مصر الجديدة",
                description: "حفلات فاخرة في قلب مصر الجديدة",
                features: ["موقع مميز", "خدمة VIP", "مواقف واسعة"]
              },
              {
                area: "مدينة نصر",
                description: "أجواء ليلية مذهلة في مدينة نصر",
                features: ["عروض حية", "أحدث الأغاني", "أجواء شبابية"]
              },
              {
                area: "الزمالك",
                description: "تجربة أرستقراطية في الزمالك",
                features: ["إطلالة مميزة", "جو هادئ وراقي", "خدمة متميزة"]
              }
            ].map((location, index) => (
              <div key={index} className="glass-dark p-6 rounded-xl border border-nightclub-purple/30">
                <h3 className="text-2xl font-bold text-nightclub-gold mb-3">{location.area}</h3>
                <p className="text-gray-300 mb-4">{location.description}</p>
                <ul className="space-y-2">
                  {location.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-nightclub-gold rounded-full ml-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cairo-specific content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            لماذا نايت كلوب القاهرة الأفضل؟
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "موقع استراتيجي",
                description: "في قلب القاهرة مع سهولة الوصول من جميع الأحياء",
                icon: "📍"
              },
              {
                title: "خدمة 24/7",
                description: "خدمة عملاء متاحة طوال اليوم لسكان القاهرة",
                icon: "🕐"
              },
              {
                title: "أسعار تنافسية",
                description: "أفضل الأسعار في السوق المصري",
                icon: "💰"
              },
              {
                title: "تجربة فريدة",
                description: "أجواء لا تُنسى في أجمل مناطق القاهرة",
                icon: "✨"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center glass-dark p-6 rounded-xl">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-nightclub-gold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />
      <Programs />
      <Pricing />
      <Contact />

      {/* Cairo Local Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NightClub",
            "name": "Night Club Egypt - فرع القاهرة",
            "description": "أفضل نايت كلوب في القاهرة مع حفلات ليلية فاخرة في مصر الجديدة، مدينة نصر، هليوبوليس، الزمالك، المعادي",
            "url": "https://nightclubegypt.com/locations/cairo",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Cairo",
              "addressRegion": "Cairo Governorate",
              "addressCountry": "EG",
              "streetAddress": "مصر الجديدة، القاهرة"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.0444",
              "longitude": "31.2357"
            },
            "areaServed": [
              "New Cairo", "Nasr City", "Heliopolis", "Zamalek", "Maadi", "Downtown Cairo"
            ],
            "telephone": "+201286110562",
            "priceRange": "$$$",
            "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 20:00-06:00"
          })
        }}
      />
    </div>
  );
}
