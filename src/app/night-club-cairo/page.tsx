import SEOUnified from "@/components/SEOUnified";

export default function NightClubCairo() {
  return (
    <>
      <SEOUnified
        pageType="places"
        customTitle="نايت كلوب القاهرة - أفضل النوادي الليلية في القاهرة 2026"
        customDescription="اكتشف أفضل نايت كلوب في القاهرة! من العجوزة إلى الزمالك، نوادي فاخرة مع أشهر النجوم. أسعار من 750 جنيه. احجز VIP الآن! 🎶"
        customKeywords={[
          "نايت كلوب القاهرة",
          "أفضل نايت كلوب في القاهرة",
          "ديسكو القاهرة",
          "كباريه القاهرة",
          "نوادي ليلية القاهرة"
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">نايت كلوب القاهرة - عاصمة السهرات</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            القاهرة تضم أفضل النوادي الليلية في مصر، مع خيارات متنوعة تناسب الجميع.
          </p>

          <h2>المناطق الشهيرة</h2>
          <ul>
            <li>العجوزة - كورنيش النيل</li>
            <li>الزمالك - أجواء أوروبية</li>
            <li>التجمع الخامس - عصري</li>
          </ul>

          <div className="bg-red-100 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold mb-2">استكشف القاهرة</h3>
            <p>احجز في أي منطقة تفضلها.</p>
            <a href="tel:01286110562" className="bg-red-600 text-white px-4 py-2 rounded mt-2 inline-block">اتصل الآن</a>
          </div>
        </div>
      </div>
    </>
  );
}