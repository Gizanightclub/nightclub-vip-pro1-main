import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOUnified from "@/components/SEOUnified";
import PlaceCard from "@/components/PlaceCard";
import { places } from "@/lib/places";

export default function VIPTypePage() {
  const vipPlaces = places.filter((place) =>
    place.packages.some((p) => p.name.toLowerCase().includes("vip")) ||
    place.features.some((f) => f.toLowerCase().includes("vip"))
  );

  return (
    <>
      <SEOUnified
        pageType="places"
        customTitle="VIP نايت كلوب مصر | حجز طاولات VIP أسرع - Night Club Egypt"
        customDescription="أقوى باقات VIP في القاهرة، الجيزة، الغردقة، وشرم الشيخ. حجز فوري عبر 01286110562 مع ضمان أقل سعر."
        customKeywords={["VIP نايت كلوب", "حجز VIP", "طاولات VIP", "Night Club Egypt"]}
      />
      <Navigation />
      <main className="bg-black text-white min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">دليل VIP نايت كلوب</h1>
          <p className="text-gray-300 mb-8">أفضل باقات VIP لأرقى النوادي في مصر، مع توصيل VIP وخدمة شاملة.</p>

          {vipPlaces.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
