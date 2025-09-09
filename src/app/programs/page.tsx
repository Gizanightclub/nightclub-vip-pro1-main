import Programs from "../../components/Programs";
import SEOUnified from "../../components/SEOUnified";

export default function ProgramsPage() {
  return (
    <>
      <SEOUnified
        pageType="programs"
        customTitle="برامج وفعاليات نايت كلوب مصر 2025 - حفلات يومية مع أشهر النجوم"
        customDescription="تعرف على برامج وفعاليات نايت كلوب مصر الأسبوعية! حفلات يومية مع رحمة محسن، عصام صاصا، بوسي، روح، ليندا وأشهر النجوم. برامج خليجي، شرقي، وعالمي في القاهرة والجيزة. احجز مكانك الآن!"
        customKeywords={[
          "برامج نايت كلوب مصر", "فعاليات نايت كلوب", "حفلات يومية نايت كلوب",
          "رحمة محسن نايت كلوب", "عصام صاصا حفلات", "بوسي راقصة نايت كلوب",
          "روح راقصة مصر", "ليندا راقصة", "برامج خليجي نايت كلوب",
          "حفلات شرقي القاهرة", "فعاليات ليلية الجيزة", "برامج أسبوعية نايت كلوب",
          "جدول حفلات نايت كلوب", "أشهر النجوم نايت كلوب مصر",
          "برامج ترفيهية ليلية", "فعاليات VIP نايت كلوب"
        ]}
        customImage="https://www.nightclubegypt.com/images/nightclubegypt.com10.jpg"
      />

      <Programs />
    </>
  );
}
