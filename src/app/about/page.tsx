import { redirect } from "next/navigation";
import SEOUnified from "../../components/SEOUnified";

export default function AboutPage() {
  return (
    <>
      <SEOUnified
        pageType="about"
        customTitle="عن النادي - أفضل نايت كلوب في مصر | Night Club Egypt"
        customDescription="تعرف على تاريخ وخدمات أفضل نايت كلوب في مصر. أجواء فاخرة، خدمة VIP استثنائية، وحفلات مميزة مع أشهر النجوم في القاهرة والجيزة والعجوزة والشيخ زايد. احجز الآن واستمتع بتجربة ليلية لا تُنسى."
        customKeywords={[
          "عن نايت كلوب مصر", "تاريخ أفضل نايت كلوب", "خدمات VIP نايت كلوب",
          "أجواء نايت كلوب القاهرة", "معلومات نايت كلوب الجيزة", "تفاصيل نايت كلوب العجوزة",
          "نبذة عن نايت كلوب مصر", "قصة نايت كلوب إيجيبت", "رؤية ورسالة نايت كلوب",
          "فريق عمل نايت كلوب", "جودة خدمة نايت كلوب", "مميزات أفضل نايت كلوب"
        ]}
        customImage="https://www.nightclubegypt.com/images/nightclub1.jpeg"
      />

      {/* Redirect to home */}
      {redirect("/")}
    </>
  );
}
