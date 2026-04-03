import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOUnified from "@/components/SEOUnified";
import PlaceCard from "@/components/PlaceCard";
import { places } from "@/lib/places";
import Link from "next/link";

export type Club = {
  name: string;
  slug: string;
  location: string;
  description: string;
  vibe: string;
  mapUrl: string;
  startingPrice: number;
  image: string;
  keywords: string[];
};

export const clubs: Club[] = [
  {
    name: "Stage Cairo Club",
    slug: "stage-cairo-club",
    location: "القاهرة",
    description:
      "Stage Cairo Club يعد من أهم نوادي القاهرة لليالي الـ DJ، ضوء ليزر، VIP فخم، وموسيقى إلكترونية وعربية.",
    vibe: "DJ / حفلات / VIP",
    mapUrl: "https://www.google.com/maps/place/Stage+Cairo+Club",
    startingPrice: 1200,
    image: "/images/clubs/stage-cairo.jpg",
    keywords: ["stage cairo", "club cairo", "night club cairo", "حجز نايت كلوب"],
  },
  {
    name: "Cash Cairo",
    slug: "cash-cairo",
    location: "القاهرة",
    description:
      "Cash Cairo نادي حديث، مناسب لجمهور الشباب، حفلات حماسية ودي جي عالمي، وخدمات VIP وجولة سيارة.",
    vibe: "DJ / حفلات / VIP",
    mapUrl: "https://www.google.com/maps/place/Cash+Cairo",
    startingPrice: 1000,
    image: "/images/clubs/cash-cairo.jpg",
    keywords: ["cash cairo", "nightlife egypt", "حجز نايت كلوب"],
  },
  {
    name: "Omni Club Cairo",
    slug: "omni-club-cairo",
    location: "القاهرة",
    description:
      "Omni Club Cairo يتميز بأفضل ديسكو وحفلات لايف، VIP بول وإضاءة احترافية.",
    vibe: "DJ / حفلات / VIP",
    mapUrl: "https://www.google.com/maps/place/Omni+Club+Cairo",
    startingPrice: 1100,
    image: "/images/clubs/omni-club.jpg",
    keywords: ["omni club cairo", "club cairo", "سهر القاهرة"],
  },
  {
    name: "Kalije Night Club",
    slug: "kalije-night-club",
    location: "القاهرة",
    description:
      "Kalije Night Club جو راقي وعروض مباشرة، كراسي VIP وحديقة خارجية لايف.",
    vibe: "DJ / حفلات / VIP",
    mapUrl: "https://www.google.com/maps/place/Kalije+Night+Club",
    startingPrice: 1300,
    image: "/images/clubs/kalije.jpg",
    keywords: ["kalije night club", "night club cairo", "حفلات"],
  },
];

const city = "الغردقة";

const hurghadaPlaces = places.filter((place) => place.location.toLowerCase().includes("الغردقة"));

export default function HurghadaPlacesPage() {
  return (
    <>
      <SEOUnified
        pageType="places"
        customTitle="نايت كلوب الغردقة | أفضل أماكن السهر وVIP في الغردقة - Night Club Egypt"
        customDescription="اكتشف أفضل نايت كلوب في الغردقة، حجز باقات VIP، تجربة سهر على البحر الأحمر، وعروض InstaPay مميزة."
        customKeywords={[
          "نايت كلوب الغردقة",
          "أفضل نايت كلوب في الغردقة",
          "حجز نايت كلوب في الغردقة",
          "سهرات الغردقة",
          "nightclub Hurghada",
          "Hurghada nightlife",
        ]}
      />
      <Navigation />
      <main className="bg-black text-white min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">أفضل نايت كلوب في الغردقة</h1>
          <p className="text-gray-300 mb-8">سهرات ساحرة عند البحر الأحمر مع أغاني الـ DJ الحماسية.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {hurghadaPlaces.map((place) => (
              <PlaceCard key={place.slug} place={place} />
            ))}
          </div>

          {hurghadaPlaces.length === 0 && (
            <div className="text-center text-gray-300 mt-10">قريباً: إضافة أفضل أماكن نايت كلوب في الغردقة.</div>
          )}

          <Link href="/night-clubs-cairo" className="text-cyan-300 underline">
            تصفح نوادي القاهرة الليلية الآن
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
