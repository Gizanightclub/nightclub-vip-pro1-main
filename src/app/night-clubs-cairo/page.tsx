import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOUnified from "@/components/SEOUnified";
import PlaceCard from "@/components/PlaceCard";
import Link from "next/link";
import { places } from "@/lib/places";

export default function NightClubsCairoPage() {
  const cCairo = places.filter((place) => place.location.toLowerCase().includes("القاهرة") || place.location.toLowerCase().includes("الجيزة"));

  return (
    <>
      <SEOUnified
        pageType="places"
        customTitle="Night Clubs Cairo | حجز نايت كلوب القاهرة أرخص سعر - Night Club Egypt"
        customDescription="احجز الآن أفضل نوادي نايت كلوب في القاهرة والجيزة. عروض VIP، سيارات ذهاب وعودة، وخصم خاص عبر 01286110562." 
        customKeywords={[
          "night club cairo",
          "nightlife egypt",
          "حجز نايت كلوب",
          "أماكن سهر في القاهرة",
          "Stage Cairo Club",
          "Cash Cairo",
          "Omni Club Cairo",
          "Echo Club",
          "King Club",
          "Cosmo Lounge & Club"
        ]}
      />
      <Navigation />
      <main className="bg-black text-white min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Night Clubs Cairo</h1>
          <p className="text-gray-300 mb-8">كل النوادي الآن في مكان واحد مع عروض، حجز VIP، وخدمة سيارات ذهاب وعودة.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {cCairo.map((place) => (
              <PlaceCard key={place.slug} place={place} />
            ))}
          </div>

          {cCairo.length === 0 && (
            <div className="text-center text-gray-300 mt-10">لا يوجد نوادي متاحة حالياً في القاهرة.</div>
          )}

          <div className="mt-10 space-y-6 text-gray-200">
            <h2 className="text-2xl font-bold text-white">روابط سريعة للأندية المميزة في القاهرة والجيزة</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 list-none p-0">
              {cCairo.map((club) => (
                <li key={club.slug} className="rounded-lg border border-purple-500/40 bg-black/40 p-2">
                  <Link href={`/places/${club.slug}`} className="text-cyan-300 hover:text-cyan-100 block">
                    {club.name} - {club.location}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-yellow-400/30 bg-black/60 p-4">
              <p className="text-gray-300 mb-2">خدماتنا</p>
              <ul className="list-disc list-inside text-sm text-gray-200">
                <li>سيارة ذهاب وعودة مع الحجز</li>
                <li>حجز VIP مع استقبال شخصي</li>
                <li>نوفر حجز بأقل من سعر المكان</li>
                <li>باقات خاصة للمجموعات والعائلات</li>
              </ul>
            </div>

            <Link
              href="/places"
              className="inline-block mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              عرض جميع الأماكن
            </Link>
          </div>

          <div className="mt-12 text-center">
            <a href="tel:01286110562" className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-bold">اتصل 01286110562 للحجز</a>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <Link href="/night-club" className="rounded-lg border border-purple-500/30 bg-white/10 px-3 py-2 hover:bg-white/20 transition">نايت كلوب</Link>
            <Link href="/disco" className="rounded-lg border border-purple-500/30 bg-white/10 px-3 py-2 hover:bg-white/20 transition">ديسكو</Link>
            <Link href="/vip" className="rounded-lg border border-purple-500/30 bg-white/10 px-3 py-2 hover:bg-white/20 transition">VIP</Link>
            <Link href="/parties" className="rounded-lg border border-purple-500/30 bg-white/10 px-3 py-2 hover:bg-white/20 transition">حفلات</Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
