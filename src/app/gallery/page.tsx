import { redirect } from "next/navigation";
import SEOUnified from "../../components/SEOUnified";

export default function GalleryPage() {
  return (
    <>
      <SEOUnified
        pageType="gallery"
        customTitle="معرض الأماكن والفيديوهات - Night Club Egypt"
        customDescription="انتقل إلى صفحة الأماكن للحصول على قائمة أماكن السهر المميزة وحجز سريع عبر WhatsApp."
      />

      {/* Redirect to places as صقحة المعرض الجديد */}
      {redirect("/places")}
    </>
  );
}
