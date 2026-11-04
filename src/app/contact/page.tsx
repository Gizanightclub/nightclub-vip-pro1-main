import { redirect } from "next/navigation";
import SEOUnified from "../../components/SEOUnified";

export default function ContactPage() {
  return (
    <>
      <SEOUnified
        pageType="contact"
        customTitle="احجز نايت كلوب مصر 2026 | للسياح والخليجيين | +201055599706"
        customDescription="احجز في أفضل نايت كلوب بمصر 2026 للسياح من الخليج! سهرات صيفية راقية. اتصل على +201055599706 أو احجز من الخليج عبر واتساب. نخدم القاهرة والجيزة. خدمة عملاء 24/7، حجز فوري، أسعار من 750 جنيه. عنواننا: كورنيش النيل، العجوزة."
        customKeywords={[
          "حجز نايت كلوب مصر", "رقم تليفون نايت كلوب", "+201055599706 نايت كلوب",
          "عنوان نايت كلوب العجوزة", "حجز واتساب نايت كلوب", "معلومات الاتصال نايت كلوب",
          "خدمة عملاء نايت كلوب", "حجز فوري نايت كلوب", "موقع نايت كلوب الجيزة",
          "كيفية الوصول نايت كلوب", "ساعات عمل نايت كلوب", "طرق الدفع نايت كلوب",
          "حجز طاولة VIP", "استعلام أسعار نايت كلوب", "تأكيد حجز نايت كلوب",
          "حجز للسعوديين", "حجز للخليجيين", "احجز من الخليج", "رقم السعوديين نايت كلوب",
          "واتساب حجز سياح", "contact nightclub Egypt", "book from Saudi Arabia", "Gulf visitors booking",
          "حجز صيفي مصر", "سهرات صيفية 2026", "رحلات سياحية الخليج",
          "نايت كلوب القاهرة للعرب", "حجز نادي ليلي في مصر", "اتصال مباشر نايت كلوب",
          "تكلم مع نايت كلوب مصر", "مواعيد الحجز naightclub", "nightclub reservation Egypt",
          "book nightclub in Cairo", "Egypt nightlife contact", "VIP booking call"
        ]}
        customImage="https://www.nightclubegypt.com/images/nightclubegypt.com4.jpg"
      />

      {/* Redirect to home */}
      {redirect("/")}
    </>
  );
}
