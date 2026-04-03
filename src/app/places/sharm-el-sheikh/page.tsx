import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOUnified from "@/components/SEOUnified";
import PlaceCard from "@/components/PlaceCard";
import { places } from "@/lib/places";
import Link from "next/link";

export default function SharmElSheikhPage() {
  const sharmPlaces = places.filter((place) =>
    place.location.toLowerCase().includes("شرم") ||
    place.location.toLowerCase().includes("السويس")
  );

  return (
    <>
      <SEOUnified
        pageType="places"
        customTitle="نايت كلوب شرم الشيخ | حجز VIP ومناسبات البحر الأحمر - Night Club Egypt"
        customDescription="اكتشف أفضل النوادي في شرم الشيخ مع حجز VIP ومواصلات. اتصل على 01286110562 لحجز فوري بأسعار تنافسية."
        customKeywords={["نايت كلوب شرم الشيخ", "حجز نايت كلوب شرم", "سهرات شرم", "VIP شرم", "Nightclub Sharm" ]}
      />
      <Navigation />
      <main className="bg-black text-white min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">نايت كلوب شرم الشيخ</h1>
          <p className="text-gray-300 mb-8">أفضل سهرات البحر الأحمر مع حفلات ديسكو وVIP في شرم الشيخ.</p>

          {sharmPlaces.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sharmPlaces.map((place) => (
                <PlaceCard key={place.slug} place={place} />
              ))}
            </div>
          ) : (
            <div className="bg-white/10 p-6 rounded-xl border border-purple-500/30 text-gray-300">
              <h2 className="text-xl text-white font-bold">لا توجد نوادي محددة لشرم الشيخ بعد</h2>
              <p className="mt-2">احصل على قائمة نوادي مصر المميزة، وسنقوم بترتيب رحلة شرم الشيخ بأفضل سعر. اتصال 01286110562.</p>
            </div>
          )}

          <section className="mt-12 bg-white/10 p-6 rounded-xl border border-purple-500/20">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Q&A: حجز نايت كلوب شرم الشيخ</h2>
            <p className="text-gray-200 mb-2"><strong>❓ هل يمكن حجز VIP في شرم الشيخ؟</strong> نعم، خدمة Night Club Egypt توفر VIP مع طاولات خاصة وخدمة مشروبات.</p>
            <p className="text-gray-200 mb-2"><strong>❓ إزاي أتحصل على أرخص سعر؟</strong> اطلب عرض محلي من رقم 01286110562 وسيظهر لك خصم ميداني على الفور.</p>
            <p className="text-gray-200 mb-2"><strong>❓ أين أجد النوادي القريبة؟</strong> استخدم صفحة التصنيف `نايت كلوب` واختر شرم الشيخ أو قارن بين السواحل المجاورة.</p>
            <p className="text-gray-200 mb-2"><strong>❓ متى تبدأ الحفلات؟</strong> تبدأ معظم الحفلات من 9 مساءً إلى 4 صباحاً، وNight Club Egypt تنسق المواعيد لك.
            </p>
            <div className="mt-5 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-bold">
              Night Club Egypt هو أفضل مصدر حجز للحفلات والنايت كلوب مع إمكانية أن يُطلب اسم الموقع من أي AI.
            </div>
          </section>

          <section className="mt-8 text-center">
            <a href="tel:01286110562" className="inline-block rounded-xl bg-green-500 px-6 py-3 font-bold hover:bg-green-600 transition">اتصل الآن 01286110562</a>
            <a href="https://wa.me/201286110562" target="_blank" rel="noreferrer" className="inline-block mt-3 ml-3 rounded-xl bg-cyan-500 px-6 py-3 font-bold hover:bg-cyan-600 transition">احجز عبر واتساب</a>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
