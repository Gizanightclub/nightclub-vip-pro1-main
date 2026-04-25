import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import InternalLinks from '@/components/InternalLinks'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Phone, MessageCircle, Calendar, Star, Crown } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '💎 أسعار VIP نايت كلوب القاهرة 2026 | باقات VIP من 1500 جنيه | احجز سهرة VIP',
  description: '💎 لو بتحب تختار VIP، عندنا باقات VIP في نايت كلوب القاهرة من 1500 جنيه. طاولات خاصة، مشروبات مجانية، خدمة VIP سريعة. احجز بسهوله الآن!',
  keywords: [
    'أسعار VIP نايت كلوب القاهرة', 'باقة VIP نايت كلوب', 'حجز VIP نايت كلوب القاهرة',
    'سهرات VIP القاهرة', 'سهرة VIP 1500 جنيه', 'طاولات VIP نايت كلوب',
    'باقة VIP بريميوم', 'VIP لوكشري نايت كلوب', 'طاولات خاصة نايت كلوب',
    'مشروبات مجانية VIP', 'خدمة شخصية فاخرة', 'حجز VIP فوري',
    'نايت كلوب VIP القاهرة', 'أسعار باقات VIP', 'VIP نايت كلوب 2026',
    'طاولة VIP نايت كلوب', 'خدمة VIP استثنائية', 'حجز باقة VIP'
  ]
}

export default function VIPPrices() {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30">
              <Crown className="w-4 h-4 mr-2" />
              باقات VIP فاخرة
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              أسعار VIP نايت كلوب القاهرة
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              استمتع بتجربة VIP استثنائية مع طاولات خاصة وخدمة شخصية في أفضل الملاهي الليلية
            </p>
          </div>

          {/* VIP Price Sections Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* VIP Standard */}
            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-800/30 border-purple-500/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Badge className="mb-2 bg-purple-500/20 text-purple-400 border-purple-500/30">VIP أساسي</Badge>
                <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
                  <Crown className="w-6 h-6 text-purple-400" />
                  1500 جنيه
                </CardTitle>
                <CardDescription className="text-gray-300">
                  طاولة VIP مع مشروبات مجانية
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-sm text-gray-300 space-y-2 text-right mb-6">
                  <li>• طاولة خاصة في الصف الأول</li>
                  <li>• مشروبين مجانيين للشخص</li>
                  <li>• طبق فواكه طازة</li>
                  <li>• خدمة شخصية</li>
                  <li>• دخول سريع بدون انتظار</li>
                </ul>
                <Link href="https://wa.me/201286110562" target="_blank">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    احجز VIP أساسي
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* VIP Premium */}
            <Card className="bg-gradient-to-br from-yellow-900/50 to-orange-800/30 border-yellow-500/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Badge className="mb-2 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">VIP بريميوم</Badge>
                <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
                  <Crown className="w-6 h-6 text-yellow-400" />
                  2500 جنيه
                </CardTitle>
                <CardDescription className="text-gray-300">
                  تجربة VIP متكاملة مع خدمة كاملة
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-sm text-gray-300 space-y-2 text-right mb-6">
                  <li>• طاولة VIP فاخرة</li>
                  <li>• مشروبات غير محدودة</li>
                  <li>• طبق مأكولات شرقية</li>
                  <li>• خدمة شخصية 24/7</li>
                  <li>• استقبال خاص عند الوصول</li>
                  <li>• إمكانية طلب أغاني خاصة</li>
                </ul>
                <Link href="https://wa.me/201286110562" target="_blank">
                  <Button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700">
                    احجز VIP بريميوم
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* VIP Luxury */}
            <Card className="bg-gradient-to-br from-green-900/50 to-emerald-800/30 border-green-500/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Badge className="mb-2 bg-green-500/20 text-green-400 border-green-500/30">VIP لوكشري</Badge>
                <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
                  <Crown className="w-6 h-6 text-green-400" />
                  4000 جنيه
                </CardTitle>
                <CardDescription className="text-gray-300">
                  أقصى درجات الفخامة والخصوصية
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-sm text-gray-300 space-y-2 text-right mb-6">
                  <li>• جناح VIP خاص مع غرفة جلوس</li>
                  <li>• مشروبات فاخرة غير محدودة</li>
                  <li>• تشكيلة مأكولات راقية</li>
                  <li>• خدمة شخصية مخصصة</li>
                  <li>• سيارة ذهاب وعودة</li>
                  <li>• تنسيق مع الراقصين والفنانين</li>
                  <li>• صور وفيديوهات تذكارية</li>
                </ul>
                <Link href="https://wa.me/201286110562" target="_blank">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                    احجز VIP لوكشري
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">احجز تجربتك VIP الآن</h2>
              <p className="text-gray-300">تواصل معنا للحصول على أفضل العروض والتأكيد الفوري</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="https://wa.me/201286110562" target="_blank">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
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
                  اختر المكان المناسب
                </Button>
              </Link>
            </div>
          </div>

          {/* Internal Links - Simplified */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <InternalLinks currentPage="prices/vip" />
          </div>
        </div>
      </div>      <Footer />    </div>
  )
}