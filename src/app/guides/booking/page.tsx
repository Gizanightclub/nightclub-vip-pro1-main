import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import InternalLinks from '@/components/InternalLinks'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Phone, MessageCircle, Calendar, CheckCircle, Clock, CreditCard } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'دليل الحجز في نايت كلوب مصر - خطوات الحجز السهلة',
  description: 'تعلم كيف تحجز في نايت كلوب مصر! دليل خطوة بخطوة للحجز عبر الهاتف أو الواتساب.',
  keywords: ['كيف تحجز نايت كلوب', 'دليل حجز نايت كلوب', 'حجز عبر الواتساب']
}

export default function BookingGuide() {
  const steps = [
    {
      step: 1,
      title: "اختر نوع التجربة",
      description: "قرر ما إذا كنت تريد دخول عادي أو طاولة VIP أو باقة خاصة",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: 2,
      title: "حدد التاريخ والوقت",
      description: "اختر التاريخ والوقت المناسب لزيارتك",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      step: 3,
      title: "اتصل بنا أو أرسل رسالة",
      description: "تواصل معنا عبر الهاتف أو الواتساب للحجز",
      icon: <Phone className="w-6 h-6" />
    },
    {
      step: 4,
      title: "أكد الحجز والدفع",
      description: "احصل على تأكيد الحجز وادفع بطريقة آمنة",
      icon: <CreditCard className="w-6 h-6" />
    }
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">
            دليل الحجز
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            كيف تحجز في نايت كلوب مصر؟
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            دليل شامل خطوة بخطوة للحجز في أفضل الملاهي الليلية بالقاهرة
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-500/30 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {step.icon}
                </div>
                <CardTitle className="text-xl text-white mb-2">الخطوة {step.step}</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Phone Booking */}
          <Card className="bg-gradient-to-br from-green-900/50 to-emerald-800/30 border-green-500/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
                <Phone className="w-6 h-6" />
                الحجز عبر الهاتف
              </CardTitle>
              <CardDescription className="text-gray-300">
                خدمة حجز فورية على مدار 24 ساعة
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-white mb-4">01286110562</div>
              <p className="text-gray-300 mb-6">اتصل بنا مباشرة للحجز الفوري والاستفسار عن الأسعار</p>
              <Link href="tel:01286110562">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  اتصل الآن
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* WhatsApp Booking */}
          <Card className="bg-gradient-to-br from-green-900/50 to-emerald-800/30 border-green-500/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
                <MessageCircle className="w-6 h-6" />
                الحجز عبر الواتساب
              </CardTitle>
              <CardDescription className="text-gray-300">
                حجز سريع وآمن عبر تطبيق الواتساب
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-white mb-4">+201286110562</div>
              <p className="text-gray-300 mb-6">أرسل لنا تفاصيل حجزك واحصل على رد فوري</p>
              <Link href="https://wa.me/201286110562" target="_blank">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  راسلنا على الواتساب
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-500/30 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">الأسئلة الشائعة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">كم يستغرق تأكيد الحجز؟</h3>
              <p className="text-gray-300">يتم تأكيد الحجز خلال دقائق من الاتصال، ونرسل لك رسالة تأكيد فورية.</p>
            </div>
            <Separator className="bg-gray-600" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">هل يمكن إلغاء أو تعديل الحجز؟</h3>
              <p className="text-gray-300">نعم، يمكنك إلغاء أو تعديل الحجز مجاناً حتى 24 ساعة قبل الموعد المحدد.</p>
            </div>
            <Separator className="bg-gray-600" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">ما هي طرق الدفع المتاحة؟</h3>
              <p className="text-gray-300">نقبل جميع طرق الدفع: نقدي، بطاقات ائتمانية، أو تحويل بنكي.</p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">جاهز للحجز؟</h2>
            <p className="text-gray-300">اتصل بنا الآن واحجز مكانك في أفضل سهرة</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="https://wa.me/201286110562" target="_blank">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                احجز عبر الواتساب
              </Button>
            </Link>
            <Link href="tel:01286110562">
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-3 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                اتصل الآن
              </Button>
            </Link>
            <Link href="/prices/cairo">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                عرض الأسعار
              </Button>
            </Link>
          </div>
        </div>

        {/* Internal Links - Simplified */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <InternalLinks currentPage="guides/booking" />
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "كيف أحجز طاولة VIP؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "اتصل على 01286110562 أو أرسل رسالة على الواتساب واطلب طاولة VIP. الأسعار تبدأ من 1500 جنيه."
                }
              },
              {
                "@type": "Question",
                "name": "كم يستغرق تأكيد الحجز؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "يتم تأكيد الحجز خلال دقائق من الاتصال، ونرسل لك رسالة تأكيد فورية."
                }
              },
              {
                "@type": "Question",
                "name": "هل يمكن إلغاء أو تعديل الحجز؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "نعم، يمكنك إلغاء أو تعديل الحجز مجاناً حتى 24 ساعة قبل الموعد المحدد."
                }
              }
            ]
          })
        }}
      />
    </div>
    </>
  )
}