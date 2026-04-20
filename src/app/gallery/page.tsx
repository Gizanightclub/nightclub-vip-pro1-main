import { redirect } from "next/navigation";
import SEOUnified from "../../components/SEOUnified";

export default function GalleryPage() {
  return (
    <>
      <SEOUnified
        pageType="gallery"
        customTitle="معرض الأماكن والفيديوهات - Night Club Egypt"
        customDescription="انتقل إلى صفحة الأماكن للحصول على قائمة أماكن السهر المميزة وحجز سريع عبر WhatsApp."
        customKeywords={[
          "صور نايت كلوب",
          "صور ديسكو",
          "معرض نايت كلوب",
          "Night Club Egypt images",
          "صور حفلات VIP",
          "عرض سهرات مصر",
          "ديسكو مصر",
          "سهرات نايت كلوب",
          "cairo nightlife photos",
          "club photos Cairo",
          "nightclub photo gallery",
          "صور سهرات VIP",
          "صور حفلات ديسكو",
          "nightlife gallery Egypt",
          "Egypt club images",
          "حجز نايت كلوب",
          "اسعار نايت كلوب",
          "nightclub prices",
          "nightclub booking",
          "book nightclub",
          "night club prices"
        ]}
      />

      {/* Redirect to places as صقحة المعرض الجديد */}
      {redirect("/places")}
    </>
  );
}
