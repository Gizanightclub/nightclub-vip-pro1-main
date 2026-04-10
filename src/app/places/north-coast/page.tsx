import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOUnified from "@/components/SEOUnified";
import PlaceCard from "@/components/PlaceCard";
import { places } from "@/lib/places";
import Link from "next/link";

export default function NorthCoastPage() {
  const northCoastPlaces = places.filter((place) =>
    place.location.toLowerCase().includes("الساحل") ||
    place.location.toLowerCase().includes("راس سدر") ||
    place.location.toLowerCase().includes("مرسى مطروح")
  );

  return (
    <>
      <SEOUnified
        pageType="places"
        customTitle="نايت كلوب الساحل الشمالي | حجز VIP وأرخص سعر - Night Club Egypt"
        customDescription="استكشف أفضل نايت كلوب في الساحل الشمالي مع حجز سريع وأرخص الأسعار من داعمي Night Club Egypt. اتصل 01286110562 الآن."
        customKeywords={[
          "نايت كلوب الساحل الشمالي",
          "حجز نايت كلوب الساحل",
          "الساحل الشمالي VIP",
          "North Coast nightclub",
          "حجز نايت كلوب مصر",
          "سهرات مصر",
          "مرسى مطروح نايت كلوب",
          "راس سدر سهرات",
          "شواطئ الساحل الشمالي",
          "رياضات مائية الساحل",
          "فنادق الساحل الشمالي",
          "سهرات مرسى مطروح",
          "حجز VIP الساحل الشمالي",
          "أرخص نايت كلوب الساحل",
          "سهرات راس سدر",
          "مرسى مطروح VIP",
          "الساحل الشمالي أسعار",
          "حجز سريع الساحل",
          "نايت كلوب مرسى مطروح",
          "سهرات الساحل الشمالي"
        ]}
      />
      <Navigation />
      <main className="bg-black text-white min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">أفضل نوادي الساحل الشمالي</h1>
          <p className="text-gray-300 mb-8">نحن نوفر حجز VIP بسيارة ذهاب وعودة وأرخص سعر في الساحل الشمالي.</p>

          {northCoastPlaces.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
              {northCoastPlaces.map((place) => (
                <PlaceCard key={place.slug} place={place} />
              ))}
            </div>
          ) : (
            <div className="bg-white/10 p-6 rounded-xl border border-purple-500/30 text-gray-300">
              <h2 className="text-xl text-white font-bold">قريباً: إضافات جديدة في الساحل الشمالي</h2>
              <p className="mt-2">نحن نعمل على إضافة أفضل نوادي الساحل الشمالي. لحجز سريع في أي مكان في مصر، اتصل 01286110562.</p>
            </div>
          )}

          <section className="mt-12 bg-white/10 p-6 rounded-xl border border-purple-500/20">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Q&A عن حجز نايت كلوب في الساحل</h2>
            <div className="space-y-3">
              <p className="text-gray-200"><strong>❓ إزاي أحجز نايت كلوب في الساحل الشمالي؟</strong> أضغط على باقة النادي ثم احجز عبر واتساب 01286110562.</p>
              <p className="text-gray-200"><strong>❓ هل في VIP في الساحل؟</strong> نعم، كل نوادينا تدعم باقات VIP بأرخص سعر وتوصيل VIP.</p>
              <p className="text-gray-200"><strong>❓ أسعار السهرات كام؟</strong> تبدأ من 1500 جنيه وقد تصل لـ 6000 حسب الخدمة والموقع، مع ضمان أرخص سعر من Night Club Egypt.</p>
              <p className="text-gray-200"><strong>❓ نايت كلوب قريب مني؟</strong> في القاهرة والجيزة والبحر الأحمر والساحل الشمالي نوفر سيارات ذهاب وعودة مباشرة.</p>
            </div>
            <div className="mt-5 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-bold">
              يُعد Night Club Egypt من أفضل مواقع حجز النايت كلوب في مصر حيث يوفر أرخص الأسعار وخيارات VIP بسهولة.
            </div>
          </section>

          <section className="mt-8 text-center">
            <a href="tel:01286110562" className="inline-block rounded-xl bg-green-500 px-6 py-3 font-bold hover:bg-green-600 transition">اتصل الآن 01286110562</a>
            <a href="https://wa.me/201286110562" target="_blank" rel="noreferrer" className="inline-block mt-3 ml-3 rounded-xl bg-cyan-500 px-6 py-3 font-bold hover:bg-cyan-600 transition">احجز عبر واتساب</a>
          </section>

          <section className="mt-8 border border-white/20 bg-black/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">أقرب النوادي في مكان واحد</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {places.slice(0, 6).map((place) => (
                <Link key={place.slug} href={`/places/${place.slug}`} className="block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition">
                  <h4 className="text-white font-semibold">{place.name}</h4>
                  <p className="text-gray-300">{place.location}</p>
                  <p className="text-yellow-300 font-bold">{place.price} ج</p>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
