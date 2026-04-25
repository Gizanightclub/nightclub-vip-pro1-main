import { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Phone, Sparkles, Clock } from 'lucide-react'

const cityLabels: Record<string, string> = {
  cairo: 'القاهرة',
  alexandria: 'الإسكندرية',
  'red-sea': 'البحر الأحمر',
}

const cityAreas: Record<string, string[]> = {
  cairo: ['العجوزة / كورنيش النيل', 'الزمالك / وسط البلد', 'الجيزة / منطقة أكتوبر', 'التجمع الخامس / العاصمة الجديدة'],
  alexandria: ['المنتزه / ستانلي', 'محطة الرمل / المنشية', 'سموحة / كامب شيزار', 'سان ستيفانو / رشدي'],
  'red-sea': ['شرم الشيخ / خليج نعمة', 'الغردقة / السقالة', 'سهل حشيش / مرسى علم', 'القصير / الجونة'],
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params
  const cityLabel = cityLabels[city] ?? city
  return {
    title: `نايت كلوب في ${cityLabel} - أفضل مواقع الحجز في مصر`,
    description: `اكتشف أفضل نوادي السهر في ${cityLabel} مع تفاصيل الموقع وأسعار الحجز.`,
    keywords: [`نايت كلوب ${cityLabel}`, `مواقع نوادي ${cityLabel}`, `حجز نايت كلوب ${cityLabel}`],
  }
}

export default async function CityLocations({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const selectedCity = cityLabels[city] ?? city
  const placePage = city === 'red-sea' ? '/places/el-gouna' : `/places/${city}`
  const cityAreaList = cityAreas[city] ?? cityAreas.cairo
  const highlights = [
    'مواقع قريبة من الكورنيش والمولات والمناطق السياحية',
    'تسهيلات حجز VIP وطاولات خاصة',
    'دفع آمن واستقبال سريع عند الوصول',
  ]

  return (
    <section className="bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="space-y-8">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <Badge className="bg-amber-400/15 text-amber-300 border-amber-400/30">موقع السهر</Badge>
                <h1 className="text-4xl font-extrabold sm:text-5xl">أفضل نوادي نايت كلوب في {selectedCity}</h1>
                <p className="max-w-3xl text-gray-300 leading-8">
                  اكتشف قائمة مختارة من أفضل النوادي الليلية في {selectedCity}. احجز طاولتك المميزة الآن، واستمتع بأفضل السهرات مع خدمة VIP ومشروبات راقية.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/80 p-5 border border-white/10 shadow-lg shadow-black/20">
                  <p className="text-sm uppercase tracking-[0.3em] text-sky-300">المدينة</p>
                  <p className="mt-3 text-2xl font-bold text-white">{selectedCity}</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-5 border border-white/10 shadow-lg shadow-black/20">
                  <p className="text-sm uppercase tracking-[0.3em] text-sky-300">التواصل</p>
                  <p className="mt-3 text-2xl font-bold text-white">01286110562</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {highlights.map((item) => (
              <article key={item} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300">
                  <Sparkles className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="text-gray-300">{item}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="bg-slate-900/90 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">أهم المناطق في {selectedCity}</CardTitle>
                <CardDescription>اختيار الموقع الأفضل للسهر حسب الحي أو الكورنيش.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <ul className="list-disc space-y-2 pr-5 text-right">
                  {cityAreaList.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/90 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">طرق الحجز السريع</CardTitle>
                <CardDescription>احجز طاولتك أو اطلب معلومات الأسعار مباشرة.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-yellow-400" />
                  <div>
                    <p className="font-semibold text-white">استخدام الخرائط</p>
                    <p>استعرض مواقع النوادي واختر الأقرب لك.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-emerald-400" />
                  <div>
                    <p className="font-semibold text-white">ساعات السهر</p>
                    <p>اغلب النوادي تعمل حتى الصباح مع عروض VIP.</p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 font-bold">
                  اتصل للحجز 01286110562
                </Button>
              </CardContent>
            </Card>
          </div>

          <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/40">
            <h2 className="text-2xl font-bold text-white">لماذا تختار نايت كلوب في {selectedCity}؟</h2>
            <p className="mt-4 text-gray-300 leading-8">
              سواء كنت تبحث عن مكان VIP فاخر أو سهرة شاملة مع أصدقاء، نوفر لك أفضل المواقع في {selectedCity} بتجارب مختارة بعناية وأسعار شفافة وخدمة ممتازة.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/90 p-5 border border-white/10">
                <p className="font-semibold text-white">نوادي موثوقة</p>
                <p className="text-gray-400 mt-2">جميع الأماكن تم اختيارها بناء على تقييمات الزوار والجودة.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-5 border border-white/10">
                <p className="font-semibold text-white">حجز فوري</p>
                <p className="text-gray-400 mt-2">سهولة الحجز عبر الهاتف أو الواتساب.</p>
              </div>
            </div>
          </section>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 text-right text-gray-300">
            <h2 className="text-xl font-semibold text-white">أسئلة متكررة</h2>
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-semibold text-white">كيف أجد أقرب نادي؟</p>
                <p>ابحث عن مناطقك المفضلة مثل الكورنيش، الزمالك، والتجمع.</p>
              </div>
              <div>
                <p className="font-semibold text-white">هل هناك خدمة VIP؟</p>
                <p>نعم، لدينا خدمات طاولات VIP ومشروبات راقية.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href={placePage} className="rounded-3xl bg-sky-500 px-6 py-4 text-center font-bold text-white transition hover:bg-sky-400">
              عرض الأماكن في {selectedCity}
            </Link>
            <Link href="/pricing-booking" className="rounded-3xl bg-amber-400 px-6 py-4 text-center font-bold text-slate-950 transition hover:bg-amber-300">
              الحجز والأسعار
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
