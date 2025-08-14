import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import { Crown, Star, Users, Music, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "حجوزات VIP | Night Club Egypt - خدمة VIP فاخرة في القاهرة والجيزة",
  description: "احجز تجربة VIP استثنائية في Night Club Egypt. خدمة شخصية، طاولات مميزة، خدمة بار خاصة، وأجواء فاخرة في أفضل نايت كلوب بمصر. متوفر في القاهرة، الجيزة، 6 أكتوبر، الشيخ زايد.",
  keywords: "حجوزات VIP مصر, VIP reservations Egypt, خدمة VIP القاهرة, طاولات VIP, نايت كلوب VIP, VIP nightclub Cairo, خدمة شخصية, حجز طاولة VIP, VIP service Egypt, luxury nightclub Egypt",
  openGraph: {
    title: "حجوزات VIP | Night Club Egypt - تجربة فاخرة لا تُنسى",
    description: "استمتع بخدمة VIP استثنائية مع طاولات مميزة وخدمة شخصية في أفضل نايت كلوب بمصر",
    url: "https://nightclubegypt.com/services/vip-reservations",
    images: ["https://nightclubegypt.com/images/nightclubegypt.com (3).jpg"],
  },
  alternates: {
    canonical: "https://nightclubegypt.com/services/vip-reservations",
  },
};

export default function VIPReservationsPage() {
  const vipPackages = [
    {
      name: "باقة VIP الفضية",
      price: "2500 جنيه",
      features: [
        "طاولة VIP لـ 4 أشخاص",
        "خدمة بار مجانية لساعتين",
        "ترحيب خاص عند الوصول",
        "موقع مميز في النادي",
        "خدمة شخصية مخصصة"
      ]
    },
    {
      name: "باقة VIP الذهبية",
      price: "4000 جنيه",
      features: [
        "طاولة VIP لـ 6 أشخاص",
        "خدمة بار مجانية لـ 3 ساعات",
        "قائمة مشروبات مميزة",
        "تورتة احتفالية مجانية",
        "تصوير فوتوغرافي مجاني",
        "موقف سيارات مجاني"
      ]
    },
    {
      name: "باقة VIP البلاتينية",
      price: "6500 جنيه",
      features: [
        "طاولة VIP لـ 8 أشخاص",
        "خدمة بار مفتوحة طوال الليل",
        "مأكولات فاخرة مجانية",
        "DJ خاص لطاولتك",
        "تنسيق زهور مميز",
        "خدمة سيارة مع سائق",
        "ضيافة كاملة"
      ]
    }
  ];

  const vipFeatures = [
    {
      icon: Crown,
      title: "خدمة ملكية",
      description: "خدمة شخصية مخصصة لك ولضيوفك طوال الليل"
    },
    {
      icon: Star,
      title: "موقع مميز",
      description: "أفضل الطاولات في أجمل مواقع النادي"
    },
    {
      icon: Users,
      title: "ضيافة استثنائية",
      description: "فريق متخصص لخدمتك وضمان راحتك"
    },
    {
      icon: Music,
      title: "تجربة صوتية مميزة",
      description: "أحدث أنظمة الصوت وإضاءة خاصة"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-nightclub">
          <div className="absolute inset-0 bg-[rgba(30,60,90,0.4)] backdrop-blur-md/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="flex justify-center mb-6">
            <Crown className="w-16 h-16 text-nightclub-gold animate-glow" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-neon">
            حجوزات
            <span className="block text-nightclub-gold">VIP</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            استمتع بتجربة VIP استثنائية في أفضل نايت كلوب بمصر
            <br />
            <span className="text-nightclub-gold">خدمة شخصية • طاولات مميزة • ضيافة ملكية</span>
            <br />
            متوفر في القاهرة، الجيزة، 6 أكتوبر، الشيخ زايد، التجمع الخامس
          </p>

          <Button
            size="lg"
            aria-label="احجز باقة VIP الآن في Night Club Egypt - خدمة فاخرة في أفضل المواقع"
            className="bg-gradient-gold text-black font-bold text-xl px-12 py-6 rounded-full hover:scale-105 transition-all duration-300"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            احجز باقة VIP الآن
          </Button>
        </div>
      </section>

      {/* VIP Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            مميزات خدمة VIP في Night Club Egypt
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vipFeatures.map((feature, index) => (
              <div key={index} className="text-center glass-dark p-6 rounded-xl border border-nightclub-purple/30">
                <feature.icon className="w-12 h-12 text-nightclub-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-nightclub-gold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            باقات VIP المتاحة
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vipPackages.map((pkg, index) => (
              <div key={index} className="glass-dark p-8 rounded-xl border border-nightclub-purple/30 hover:border-nightclub-gold/50 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-nightclub-gold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-white">{pkg.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-nightclub-gold ml-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full bg-gradient-gold text-black font-bold"
                  aria-label={`احجز ${pkg.name} الآن في Night Club Egypt`}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  احجز الآن
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VIP Section */}
      <section className="py-20 bg-gradient-to-r from-nightclub-purple/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              لماذا تختار خدمة VIP في Night Club Egypt؟
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-nightclub-gold">تجربة لا تُنسى</h3>
                <p className="text-gray-300">
                  نقدم لك تجربة ليلية استثنائية مع أفضل خدمة في مصر. فريقنا المتخصص يضمن راحتك وسعادتك طوال الليل.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-nightclub-gold">مواقع مميزة</h3>
                <p className="text-gray-300">
                  طاولات VIP في أفضل المواقع بالنادي مع إطلالات رائعة وخصوصية تامة لك ولضيوفك.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-nightclub-gold">خدمة شخصية</h3>
                <p className="text-gray-300">
                  خادم شخصي مخصص لطاولتك يلبي جميع احتياجاتك بسرعة ومهنية عالية.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-nightclub-gold">قيمة استثنائية</h3>
                <p className="text-gray-300">
                  أسعار تنافسية مقابل خدمة استثنائية تضمن لك ولضيوفك ليلة لا تُنسى.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      {/* VIP Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "VIP Reservations - Night Club Egypt",
            "description": "خدمة حجوزات VIP فاخرة في أفضل نايت كلوب بمصر مع طاولات مميزة وخدمة شخصية استثنائية",
            "provider": {
              "@type": "NightClub",
              "name": "Night Club Egypt"
            },
            "areaServed": [
              "Cairo", "Giza", "6th October", "Sheikh Zayed", "New Cairo"
            ],
            "offers": {
              "@type": "Offer",
              "description": "باقات VIP متنوعة تناسب جميع المناسبات",
              "priceRange": "2500-6500 EGP"
            }
          })
        }}
      />
    </div>
  );
}
