import SEOUnified from "@/components/SEOUnified";

export default function VIPTableBookingPricesCairo() {
  return (
    <>
      <SEOUnified
        pageType="blog"
        customTitle="أسعار حجز طاولات VIP في القاهرة 2026 - دليل شامل للحجز والأسعار"
        customDescription="اكتشف أسعار حجز طاولات VIP في القاهرة 2026! من 1500 جنيه للطاولة الأساسية، مع مشروبات وخدمة خاصة. دليل كامل للحجز في أفضل النوادي. احجز الآن! 💺"
        customKeywords={[
          "أسعار طاولات VIP القاهرة",
          "حجز طاولة VIP",
          "أسعار VIP نايت كلوب",
          "طاولات VIP القاهرة",
          "حجز VIP في النوادي"
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">أسعار حجز طاولات VIP في القاهرة 2026</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            طاولات VIP توفر تجربة استثنائية في النوادي الليلية بالقاهرة.
          </p>

          <h2>أسعار الطاولات</h2>
          <ul>
            <li>طاولة أساسية: 1500 جنيه</li>
            <li>طاولة فاخرة: 2500 جنيه</li>
            <li>طاولة خاصة للمجموعات: حسب الحجم</li>
          </ul>

          <h2>ما تشمله الطاولة</h2>
          <ul>
            <li>مقاعد مريحة</li>
            <li>مشروبات مجانية</li>
            <li>خدمة نادل شخصي</li>
            <li>أولوية دخول</li>
          </ul>

          <div className="bg-purple-100 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold mb-2">احجز طاولتك VIP</h3>
            <p>استمتع بأفضل الخدمات في القاهرة.</p>
            <a href="tel:01286110562" className="bg-purple-600 text-white px-4 py-2 rounded mt-2 inline-block">اتصل الآن</a>
          </div>
        </div>
      </div>
    </>
  );
}