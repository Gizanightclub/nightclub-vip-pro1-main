import { redirect } from "next/navigation";
import SEOUnified from "../../components/SEOUnified";

export default function GalleryPage() {
  return (
    <>
      <SEOUnified
        pageType="gallery"
        customTitle="معرض الصور والفيديوهات - أفضل نايت كلوب في مصر | Night Club Egypt"
        customDescription="شاهد أجمل لحظات الحفلات والسهرات في أفضل نايت كلوب بمصر. صور وفيديوهات حصرية للحفلات مع أشهر النجوم: رحمة محسن، عصام صاصا، بوسي، روح، ليندا. أجواء VIP فاخرة وسهرات لا تُنسى في القاهرة والجيزة."
        customKeywords={[
          "صور نايت كلوب مصر", "فيديوهات حفلات نايت كلوب", "معرض صور أفضل نايت كلوب",
          "لحظات مميزة نايت كلوب", "صور سهرات القاهرة", "فيديوهات رحمة محسن نايت كلوب",
          "صور عصام صاصا حفلات", "معرض صور بوسي راقصة", "فيديوهات روح راقصة",
          "صور VIP نايت كلوب", "معرض حفلات الجيزة", "صور ديسكو مصر", "فيديوهات ليلية فاخرة"
        ]}
        customImage="https://www.nightclubegypt.com/images/nightclubegypt.com6.jpg"
      />

      {/* Redirect to home */}
      {redirect("/")}
    </>
  );
}
