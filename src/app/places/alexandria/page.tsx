import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOUnified from "@/components/SEOUnified";
import PlaceCard from "@/components/PlaceCard";
import { places } from "@/lib/places";

const city = "الإسكندرية";

const alexPlaces = places.filter((place) => place.location.toLowerCase().includes("الإسكندرية") || place.location.toLowerCase().includes("الاسكندرية"));

export default function AlexandriaPlacesPage() {
  return (
    <>
      <SEOUnified
        pageType="places"
        customTitle="نايت كلوب الإسكندرية | أفضل أماكن السهر في الإسكندرية - Night Club Egypt"
        customDescription="اكتشف أفضل نايت كلوب في الإسكندرية، احجز باقات VIP وInstaPay، واستمتع بأفضل سهرات على الساحل الشمالي."
        customKeywords={[
          "نايت كلوب الإسكندرية",
          "أفضل نايت كلوب في الإسكندرية",
          "حجز نايت كلوب في الإسكندرية",
          "سهرات الإسكندرية",
          "nightclub Alexandria",
          "Alexandria nightlife",
        ]}
      />
      <Navigation />
      <main className="bg-black text-white min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">أفضل نايت كلوب في الإسكندرية</h1>
          <p className="text-gray-300 mb-8">أفضل تجارب السهر عند البحر الأبيض المتوسط مع عروض VIP.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {alexPlaces.map((place) => (
              <PlaceCard key={place.slug} place={place} />
            ))}
          </div>

          {alexPlaces.length === 0 && (
            <div className="text-center text-gray-300 mt-10">قريباً: إضافة أفضل أماكن نايت كلوب في الإسكندرية.</div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
