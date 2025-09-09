import { redirect } from "next/navigation";
import SEOUnified from "../../components/SEOUnified";

export default function PackagesPage() {
  return (
    <>
      <SEOUnified
        pageType="packages"
        customTitle="باقات وأسعار نايت كلوب مصر - من 750 جنيه | عروض VIP 1500 جنيه"
        customDescription="اكتشف أفضل باقات وأسعار نايت كلوب مصر 2025! باقة عادية 750 جنيه، باقة VIP 1500 جنيه مع خدمة فاخرة. عروض خاصة للمجموعات وأعياد الميلاد. خصومات تصل 25% للحجز المبكر. احجز الآن في أفضل نايت كلوب بالقاهرة والجيزة."
        customKeywords={[
          "أسعار نايت كلوب مصر", "باقات نايت كلوب 750 جنيه", "باقة VIP 1500 جنيه",
          "عروض نايت كلوب خاصة", "أرخص أسعار نايت كلوب", "باقات مجموعات نايت كلوب",
          "حجز نايت كلوب بأقل سعر", "خصومات نايت كلوب مصر", "عروض أعياد الميلاد",
          "أسعار VIP نايت كلوب", "باقات ليلة العرس", "عروض الويك إند نايت كلوب",
          "تكلفة حجز نايت كلوب", "أسعار طاولات VIP", "باقات شاملة نايت كلوب"
        ]}
        customImage="https://www.nightclubegypt.com/images/nightclubegypt.com6.jpg"
      />

      {/* Redirect to home */}
      {redirect("/")}
    </>
  );
}
