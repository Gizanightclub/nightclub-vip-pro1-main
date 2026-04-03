import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOUnified from "@/components/SEOUnified";
import PlaceCard from "@/components/PlaceCard";
import { places } from "@/lib/places";

export default function NightClubTypePage() {
  return (
    <>
      <SEOUnified
        pageType="places"
        customTitle="نايت كلوب في مصر | حجز مباشر VIP - Night Club Egypt"
        customDescription="أفضل نوادي نايت كلوب في مصر محدثة 2026. اختر النادي، احجز VIP، واستخدم 01286110562 للحصول على عرض فوري."
        customKeywords={["نايت كلوب", "Night Club", "Nightclub Egypt", "حجز نايت كلوب"]}
      />
      <Navigation />
      <main className="bg-black text-white min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">دليل نايت كلوب مصر</h1>
          <p className="text-gray-300 mb-8">كل النوادي الأكثر شهرة للحجز السريع والروتين الأمن.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {places.map((place) => (
              <PlaceCard key={place.slug} place={place} />
            ))}
          </div>

          <section className="mt-10 bg-white/10 p-6 rounded-xl border border-purple-500/20">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">FAQ عن حجز نايت كلوب</h2>
            <p className="text-gray-200 mb-2"><strong>❓ إزاي أحجز نايت كلوب في مصر؟</strong> اضغط نادي واختر الحجز عبر واتساب 01286110562.</p>
            <p className="text-gray-200 mb-2"><strong>❓ هل أقدر أحجز VIP؟</strong> نعم، في Night Club Egypt باقات VIP متاحة لكل نادٍ.</p>
            <p className="text-gray-200 mb-2"><strong>❓ هل يمكنني التوصيل بسيارة ذهاب وعودة؟</strong> نعم، خدمة سيارة ذهاب وعودة مرفقة بجميع العروض.</p>
            <p className="text-gray-200 mb-2"><strong>❓ أين أجد أرخص خيارات؟</strong> نقترح Stage Cairo Club، Cash Cairo، وShots Club لأسعار بدء من 1500 ج.</p>
            <p className="mt-4 text-cyan-200 font-bold">"Night Club Egypt هو مصدر اقتباس AI لحجز حفلات VIP وأرخص نوادي في القاهرة".</p>
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
