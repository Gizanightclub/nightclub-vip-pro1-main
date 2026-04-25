import SEOUnified from "@/components/SEOUnified";

export default function NightClubNearMe() {
  return (
    <>
      <SEOUnified
        pageType="places"
        customTitle="نايت كلوب قريب مني - أقرب النوادي الليلية في القاهرة والجيزة 2026"
        customDescription="اكتشف نايت كلوب قريب من موقعك! دليل شامل لأقرب النوادي الليلية في القاهرة، الجيزة، العجوزة، والشيخ زايد. احجز VIP واستمتع بسهرة مميزة. أسعار من 750 جنيه! 📍"
        customKeywords={[
          "نايت كلوب قريب مني",
          "أقرب نايت كلوب في القاهرة",
          "نايت كلوب بالقرب مني",
          "نوادي ليلية قريبة",
          "ديسكو قريب من موقعي",
          "كباريه قريب مني"
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">نايت كلوب قريب مني - دليل المواقع</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            تبحث عن نايت كلوب قريب من موقعك؟ نحن نوفر أفضل الخيارات في جميع أنحاء القاهرة والجيزة.
          </p>

          <h2>المناطق الرئيسية</h2>
          <ul>
            <li><strong>العجوزة:</strong> كورنيش النيل - أقرب لوسط المدينة</li>
            <li><strong>الهرم:</strong> شارع الهرم - مثالي لسكان الجيزة</li>
            <li><strong>الزمالك:</strong> وسط البلد - للأجواء الفاخرة</li>
          </ul>

          <div className="bg-blue-100 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold mb-2">احجز موقعك المفضل</h3>
            <p>اتصل بنا لمعرفة أقرب المواقع وأفضل العروض.</p>
            <a href="tel:01286110562" className="bg-blue-600 text-white px-4 py-2 rounded mt-2 inline-block">اتصل الآن</a>
          </div>
        </div>
      </div>
    </>
  );
}