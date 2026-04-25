import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'أسعار نايت كلوب القاهرة 2026 - دليل شامل للأسعار والحجز',
  description: 'اكتشف أسعار نايت كلوب القاهرة 2026! من 1000 جنيه للدخول، 1500 جنيه لـ VIP. دليل كامل لأسعار الديسكوهات والكباريهات. احجز الآن!',
  keywords: ['أسعار نايت كلوب القاهرة', 'أسعار ديسكوهات القاهرة', 'كم سعر دخول نايت كلوب', 'أسعار كباريهات شارع الهرم']
}

export default function PricesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="prices-silo flex flex-col gap-10">
      <div className="w-full">
        {children}
      </div>

      <nav className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
        <h2 className="text-xl font-bold text-white mb-4">أقسام الأسعار</h2>
        <ul className="space-y-3 text-right">
          <li>
            <a href="/prices/cairo" className="block rounded-2xl bg-white/10 px-4 py-3 text-white transition hover:bg-white/20">
              أسعار القاهرة
            </a>
          </li>
          <li>
            <a href="/prices/vip" className="block rounded-2xl bg-white/10 px-4 py-3 text-white transition hover:bg-white/20">
              أسعار VIP
            </a>
          </li>
          <li>
            <a href="/pricing-booking" className="block rounded-2xl bg-white/10 px-4 py-3 text-white transition hover:bg-white/20">
              باقات خاصة
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}