import { redirect } from "next/navigation";
import SEOUnified from "../../components/SEOUnified";

export default function BookingPage() {
  return (
    <>
      <SEOUnified
        pageType="booking"
        customTitle="احجز الآن في أفضل نايت كلوب مصر - حجز فوري | خصومات 25%"
        customDescription="احجز مكانك الآن في أفضل نايت كلوب بمصر! حجز فوري وسريع، خصومات تصل 25% للحجز المبكر. باقة عادية 750 جنيه، VIP 1500 جنيه. متاح طوال الأسبوع في القاهرة، الجيزة، العجوزة، الشيخ زايد. اتصل: 01286110562 أو احجز واتساب فوراً!"
        customKeywords={[
          "حجز نايت كلوب فوري", "احجز نايت كلوب مصر الآن", "حجز مباشر نايت كلوب",
          "خصومات حجز نايت كلوب", "حجز طاولة VIP مصر", "حجز واتساب نايت كلوب",
          "حجز أون لاين نايت كلوب", "تأكيد حجز فوري", "حجز ليلة السبت نايت كلوب",
          "حجز عيد ميلاد نايت كلوب", "حجز مجموعات نايت كلوب", "حجز رحلة نايت كلوب",
          "أسرع حجز نايت كلوب", "حجز بأفضل سعر", "حجز نايت كلوب الجيزة الآن"
        ]}
        customImage="https://www.nightclubegypt.com/images/nightclubegypt.com2.jpg"
      />

      {/* Redirect to home */}
      {redirect("/")}
    </>
  );
}
