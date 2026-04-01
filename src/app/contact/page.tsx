import { redirect } from "next/navigation";
import SEOUnified from "../../components/SEOUnified";

export default function ContactPage() {
  return (
    <>
      <SEOUnified
        pageType="contact"
        customTitle="تواصل معنا واحجز الآن - نايت كلوب مصر | 01286110562"
        customDescription="احجز في أفضل نايت كلوب بمصر الآن! اتصل على 01286110562 أو احجز عبر واتساب. نخدم القاهرة، الجيزة، العجوزة، الشيخ زايد، الزمالك، المعادي. خدمة عملاء 24/7، حجز فوري، أسعار مميزة من 750 جنيه. عنواننا: كورنيش النيل، العجوزة."
        customKeywords={[
          "حجز نايت كلوب مصر", "رقم تليفون نايت كلوب", "01286110562 نايت كلوب",
          "عنوان نايت كلوب العجوزة", "حجز واتساب نايت كلوب", "معلومات الاتصال نايت كلوب",
          "خدمة عملاء نايت كلوب", "حجز فوري نايت كلوب", "موقع نايت كلوب الجيزة",
          "كيفية الوصول نايت كلوب", "ساعات عمل نايت كلوب", "طرق الدفع نايت كلوب",
          "حجز طاولة VIP", "استعلام أسعار نايت كلوب", "تأكيد حجز نايت كلوب"
        ]}
        customImage="https://www.nightclubegypt.com/images/nightclubegypt.com4.jpg"
      />

      {/* Redirect to home */}
      {redirect("/")}
    </>
  );
}
