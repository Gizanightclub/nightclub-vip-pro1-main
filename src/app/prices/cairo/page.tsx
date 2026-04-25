import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import InternalLinks from '@/components/InternalLinks'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Phone, MessageCircle, Calendar, Star } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'أسعار نايت كلوب القاهرة - دليل الأسعار 2026',
  description: 'أسعار نايت كلوب القاهرة 2026: 1000 جنيه للدخول العادي، 1500 جنيه لـ VIP. احجز الآن واستمتع!',
  keywords: ['أسعار نايت كلوب القاهرة', 'كم سعر دخول نايت كلوب', 'أسعار VIP القاهرة']
}

export default function CairoPrices() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
            دليل الأسعار 2026
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            أسعار نايت كلوب القاهرة
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            تعرف على أحدث أسعار الدخول والحجز في أفضل الملاهي الليلية بالقاهرة
          </p>
        </div>

        {/* Price Sections Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Regular Entry */}
          <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border-blue-500/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Badge className="mb-2 bg-blue-500/20 text-blue-400 border-blue-500/30">أسعار القاهرة</Badge>
              <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
                <Star className="w-6 h-6 text-blue-400" />
                دخول عادي
              </CardTitle>
              <CardDescription className="text-gray-300">
                للدخول العادي مع المشروبات الأساسية
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1000</div>
              <div className="text-lg text-gray-300 mb-4">جنيه مصري</div>
              <ul className="text-sm text-gray-300 space-y-2 text-right">
                <li>• دخول مجاني للنادي</li>
                <li>• مشروب ترحيبي</li>
                <li>• موسيقى وأجواء مميزة</li>
              </ul>
            </CardContent>
          </Card>

          {/* VIP Table */}
          <Card className="bg-gradient-to-br from-yellow-900/50 to-orange-800/30 border-yellow-500/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Badge className="mb-2 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">أسعار VIP</Badge>
              <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
                <Star className="w-6 h-6 text-yellow-400" />
                طاولة VIP
              </CardTitle>
              <CardDescription className="text-gray-300">
                تجربة فاخرة مع خدمة خاصة
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1,500</div>
              <div className="text-lg text-gray-300 mb-4">جنيه مصري</div>
              <ul className="text-sm text-gray-300 space-y-2 text-right">
                <li>• طاولة خاصة مع جلوس</li>
                <li>• مشروبات مجانية غير محدودة</li>
                <li>• خدمة شخصية</li>
                <li>• موقع مميز في النادي</li>
              </ul>
            </CardContent>
          </Card>

          {/* Special Packages */}
          <Card className="bg-gradient-to-br from-purple-900/50 to-pink-800/30 border-purple-500/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Badge className="mb-2 bg-purple-500/20 text-purple-400 border-purple-500/30">باقات خاصة</Badge>
              <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
                <Star className="w-6 h-6 text-purple-400" />
                باقات خاصة
              </CardTitle>
              <CardDescription className="text-gray-300">
                لحفلات الزفاف والشركات والمناسبات
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-white mb-2">2,500+</div>
              <div className="text-lg text-gray-300 mb-4">جنيه مصري</div>
              <ul className="text-sm text-gray-300 space-y-2 text-right">
                <li>• باقات الزفاف والمناسبات</li>
                <li>• حفلات الشركات</li>
                <li>• مناسبات خاصة حسب الطلب</li>
                <li>• تخصيص كامل للاحتياجات</li>
              </ul>
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
              <h3 className="text-lg font-semibold text-white mb-2">كم سعر دخول نايت كلوب في القاهرة؟</h3>
              <p className="text-gray-300">يبدأ سعر الدخول من 1000 جنيه مصري للدخول العادي، و1500 جنيه للطاولات VIP.</p>
            </div>
            <Separator className="bg-gray-600" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">هل الأسعار تشمل المشروبات؟</h3>
              <p className="text-gray-300">الأسعار الأساسية لا تشمل المشروبات، لكن باقات VIP تشمل مشروبات مجانية غير محدودة.</p>
            </div>
            <Separator className="bg-gray-600" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">هل يمكن الحجز عبر الإنترنت؟</h3>
              <p className="text-gray-300">نعم، يمكنك الحجز عبر الهاتف أو الواتساب للحصول على أفضل الأسعار والتأكيد الفوري.</p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
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
            <Link href="/places">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                صفحة الحجز
              </Button>
            </Link>
          </div>
        </div>

        {/* Internal Links - Simplified */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <InternalLinks currentPage="prices/cairo" />
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
                "name": "كم سعر دخول نايت كلوب في القاهرة؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "يبدأ سعر الدخول من 1000 جنيه مصري للدخول العادي، و1500 جنيه للطاولات VIP."
                }
              },
              {
                "@type": "Question",
                "name": "هل الأسعار تشمل المشروبات؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "الأسعار الأساسية لا تشمل المشروبات، لكن باقات VIP تشمل مشروبات مجانية غير محدودة."
                }
              },
              {
                "@type": "Question",
                "name": "هل يمكن الحجز عبر الإنترنت؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "نعم، يمكنك الحجز عبر الهاتف أو الواتساب للحصول على أفضل الأسعار والتأكيد الفوري."
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