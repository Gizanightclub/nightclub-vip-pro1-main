import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'مواقع نايت كلوب في مصر - دليل شامل للمواقع والحجز',
  description: 'اكتشف أفضل مواقع نايت كلوب في مصر! من القاهرة إلى الإسكندرية، دليل كامل للمواقع والحجز.',
  keywords: ['مواقع نايت كلوب مصر', 'نايت كلوب قريب مني', 'أفضل مواقع النوادي الليلية']
}

const regions = [
  { label: 'القاهرة', href: '/locations/cairo' },
  { label: 'الجيزه', href: '/locations/alexandria' },
  { label: ' العجوزه و الزمالك', href: '/locations/red-sea' },
]

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 xl:grid-cols-[1fr_300px]">
          <section className="space-y-8">
            {children}
          </section>

          <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">مواقعنا في مصر</p>
              <h2 className="mt-3 text-2xl font-bold text-white">اختر منطقتك</h2>
            </div>

            <nav className="space-y-3">
              {regions.map((region) => (
                <a
                  key={region.href}
                  href={region.href}
                  className="block rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 text-white transition hover:border-sky-400/40 hover:bg-slate-800"
                >
                  {region.label}
                </a>
              ))}
            </nav>

            <div className="mt-10 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-800/80 p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white">مساعدة السهر</h3>
              <p className="mt-3 text-sm text-slate-300 leading-7">
                إذا لم تعرف المنطقة المناسبة، اتصل بنا لحجز الطاولة في أفضل النوادي الليلة نفسها.
              </p>
              <a
                href="tel:01286110562"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:scale-[1.01]"
              >
                اتصل الآن 01286110562
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}