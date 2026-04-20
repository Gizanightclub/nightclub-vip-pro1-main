import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOUnified from "@/components/SEOUnified";
import FAQSchema from "@/components/FAQSchema";
import PlaceCard from "@/components/PlaceCard";
import { places } from "@/lib/places";
import { getPageSEOImage } from "@/lib/seo-images";
import Script from "next/script";
import Image from "next/image";

export default function VIPTypePage() {
  const vipPlaces = places.filter((place) =>
    place.packages.some((p) => p.name.toLowerCase().includes("vip")) ||
    place.features.some((f) => f.toLowerCase().includes("vip"))
  );

  const seoImage = getPageSEOImage("vip");

  return (
    <>
      <SEOUnified
        pageType="places"
        customTitle="VIP نايت كلوب مصر | حجز طاولات VIP أسرع - Night Club Egypt"
        customDescription="أقوى باقات VIP في القاهرة، الجيزة، الغردقة، وشرم الشيخ. حجز فوري عبر 01286110562 مع ضمان أقل سعر."
        customKeywords={[
          "VIP نايت كلوب",
          "حجز VIP",
          "طاولات VIP",
          "VIP nightclub Egypt",
          "VIP tables Cairo",
          "حجز طاولة VIP",
          "سهرات VIP",
          "حفلات VIP القاهرة",
          "نايت كلوب VIP",
          "Night Club Egypt",
          "VIP party Egypt",
          "VIP club booking",
          "حفلات VIP مصر",
          "حجوزات VIP نايت كلوب",
          "special VIP nightclub",
          "Cairo VIP nightlife",
          "VIP disco Cairo",
          "Egypt VIP club",
          "حجز نايت كلوب",
          "اسعار نايت كلوب",
          "nightclub prices",
          "nightclub booking",
          "book nightclub",
          "Cairo nightclub prices"
        ]}
        customImage={`https://www.nightclubegypt.com${seoImage}`}
      />
      <FAQSchema
        showVisibleFAQ={false}
        customFAQs={[
          {
            question: "هل يمكن حجز طاولة VIP الآن؟",
            answer: "نعم، يمكن حجز طاولة VIP الآن عبر الهاتف أو واتساب على 01286110562.",
            keywords: ["حجز VIP", "طاولة VIP", "نايت كلوب VIP"]
          },
          {
            question: "هل يشمل VIP سيارة ذهاب وعودة؟",
            answer: "معظم باقات VIP تشمل خدمة نقل ذهاب وعودة، تأكد من التفاصيل عند الحجز.",
            keywords: ["سيارة ذهاب وعودة", "VIP نايت كلوب", "خدمة نقل"]
          },
          {
            question: "ما هو أرخص VIP؟",
            answer: "تبدأ باقات VIP من 2000 جنيه في العروض الخاصة وتصل حسب نوع النادي والخدمات.",
            keywords: ["أرخص VIP", "أسعار VIP", "باقة VIP"]
          }
        ]}
      />

      {/* Schema Article for VIP Page */}
      <Script
        id="vip-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "دليل VIP نايت كلوب مصر - أفضل باقات VIP 2026",
            "description": "أقوى باقات VIP في القاهرة، الجيزة، الغردقة، وشرم الشيخ. حجز فوري عبر 01286110562 مع ضمان أقل سعر.",
            "image": {
              "@type": "ImageObject",
              "url": `https://www.nightclubegypt.com${seoImage}`,
              "width": 1200,
              "height": 630,
              "caption": "صورة لباقات VIP في نايت كلوب مصر",
              "name": "VIP نايت كلوب مصر",
              "description": "صورة احترافية لباقات VIP في أفضل نوادي نايت كلوب في مصر",
              "contentLocation": {
                "@type": "Place",
                "name": "القاهرة، مصر"
              },
              "creator": {
                "@type": "Organization",
                "name": "Night Club Egypt"
              },
              "copyrightHolder": {
                "@type": "Organization",
                "name": "Night Club Egypt"
              },
              "license": "https://www.nightclubegypt.com/license",
              "acquireLicensePage": "https://www.nightclubegypt.com/contact",
              "creditText": "Night Club Egypt",
              "copyrightNotice": "© 2026 Night Club Egypt. All rights reserved."
            },
            "author": {
              "@type": "Organization",
              "name": "Night Club Egypt",
              "url": "https://www.nightclubegypt.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Night Club Egypt",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.nightclubegypt.com/images/logo-seo-1200x1200.webp",
                "width": 1200,
                "height": 1200
              }
            },
            "datePublished": "2024-01-01",
            "dateModified": new Date().toISOString().split("T")[0],
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.nightclubegypt.com/vip"
            },
            "keywords": "VIP نايت كلوب, حجز VIP, طاولات VIP, Night Club Egypt, باقات VIP",
            "articleSection": "VIP Night Clubs",
            "about": {
              "@type": "NightClub",
              "name": "Night Club Egypt VIP",
              "address": "القاهرة، مصر"
            }
          }, null, 2)
        }}
      />
      <Navigation />
      <FAQSchema
        showVisibleFAQ={false}
        customFAQs={[
          {
            question: "هل يمكن حجز طاولة VIP الآن؟",
            answer: "نعم، يمكن حجز طاولة VIP الآن عبر الهاتف أو واتساب على 01286110562.",
            keywords: ["حجز VIP", "طاولة VIP", "نايت كلوب VIP"]
          },
          {
            question: "هل يشمل VIP سيارة ذهاب وعودة؟",
            answer: "معظم باقات VIP تشمل خدمة نقل ذهاب وعودة، تأكد من التفاصيل عند الحجز.",
            keywords: ["سيارة ذهاب وعودة", "VIP نايت كلوب", "خدمة نقل"]
          },
          {
            question: "ما هو أرخص VIP؟",
            answer: "تبدأ باقات VIP من 2000 جنيه في العروض الخاصة وتصل حسب نوع النادي والخدمات.",
            keywords: ["أرخص VIP", "أسعار VIP", "باقة VIP"]
          }
        ]}
      />
      <main className="bg-black text-white min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* SEO Optimized Hero Image */}
          <div className="mb-8">
            <Image
              src={seoImage}
              alt="دليل VIP نايت كلوب مصر - أفضل باقات VIP 2026. VIP نايت كلوب, حجز VIP, طاولات VIP, Night Club Egypt"
              width={1200}
              height={600}
              priority={true}
              className="w-full h-auto rounded-xl border border-purple-500/30 shadow-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
            />
          </div>

          <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">VIP نايت كلوب مصر | حجز طاولات VIP أسرع</h1>
          <p className="text-gray-300 mb-8">أقوى باقات VIP في القاهرة، الجيزة، الغردقة، وشرم الشيخ. حجز فوري عبر 01286110562 مع ضمان أقل سعر. طاولات VIP، خدمة خاصة، مشروبات مجانية، وتوصيل فاخر.</p>

          {vipPlaces.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
              {vipPlaces.map((place) => (
                <PlaceCard key={place.slug} place={place} />
              ))}
            </div>
          ) : (
            <div className="bg-white/10 p-6 rounded-xl border border-purple-500/30 text-gray-300">
              <h2 className="text-xl text-white font-bold">لا توجد باقات VIP مفعّلة بعد</h2>
              <p className="mt-2">واصل معنا على 01286110562 للحصول على أفضل عروض VIP المتاحة.</p>
            </div>
          )}

          <section className="mt-10 bg-white/10 p-6 rounded-xl border border-purple-500/20">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">أسئلة شائعة VIP</h2>
            <p className="text-gray-200 mb-2"><strong>❓ هل يمكن حجز طاولة VIP الآن؟</strong> نعم، فقط اتصل 01286110562 أو اضغط حجز عبر واتساب.</p>
            <p className="text-gray-200 mb-2"><strong>❓ هل يشمل VIP سيارة ذهاب وعودة؟</strong> غالبًا نعم، نقترح تأكيد ذلك عند الحجز مباشرةً.</p>
            <p className="text-gray-200 mb-2"><strong>❓ ما هو أرخص VIP؟</strong> تبدأ الأسعار من 2000 جنيه في أوقات العروض الخاصة.
            </p>
          </section>

          <section className="mt-8 text-center">
            <a href="tel:01286110562" className="inline-block rounded-xl bg-green-500 px-6 py-3 font-bold hover:bg-green-600 transition">اتصل 01286110562</a>
            <a href="https://wa.me/201286110562" target="_blank" rel="noreferrer" className="inline-block mt-3 ml-3 rounded-xl bg-cyan-500 px-6 py-3 font-bold hover:bg-cyan-600 transition">واتساب</a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
