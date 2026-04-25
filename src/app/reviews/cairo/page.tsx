import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import InternalLinks from '@/components/InternalLinks'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Star, MessageCircle, Phone, Calendar, Quote, Award } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '⭐ تقييمات نايت كلوب القاهرة 2026 | آراء الناس اللي اتبسطت في السهرات',
  description: '⭐ شوف آراء الناس الحقيقية عن نايت كلوب القاهرة 2026! صور وفيديوهات من السهرات، تجارب VIP، وشهادات عملاء اتبسطوا فعلاً.',
  keywords: [
    'تقييمات نايت كلوب القاهرة', 'آراء الناس نايت كلوب', 'تجارب سهرات نايت كلوب',
    'شهادات عملاء نايت كلوب', 'صور نايت كلوب القاهرة', 'فيديوهات نايت كلوب',
    'صور نايت كلوب القاهرة', 'فيديوهات نايت كلوب القاهرة', 'شهادات عملاء نايت كلوب',
    'تقييمات حقيقية نايت كلوب', 'آراء زوار نايت كلوب', 'تجارب سهرات نايت كلوب',
    'نايت كلوب القاهرة تقييمات', 'أفضل نايت كلوب القاهرة', 'حجز نايت كلوب القاهرة',
    'أسعار نايت كلوب القاهرة', 'VIP نايت كلوب القاهرة', 'ديسكو القاهرة تقييمات'
  ]
}

export default function CairoReviews() {
  const reviews = [
    {
      name: "أحمد محمد",
      rating: 5,
      date: "2026/01/15",
      comment: "سهرة لا تُنسى! الخدمة ممتازة والأجواء رائعة. الموسيقى والإضاءة كانت مذهلة.",
      type: "زائر عادي"
    },
    {
      name: "فاطمة علي",
      rating: 5,
      date: "2026/01/10",
      comment: "أفضل مكان للسهرات في القاهرة. أنصح الجميع بزيارته. الطاولات مريحة والمشروبات ممتازة.",
      type: "زائرة مع صديقات"
    },
    {
      name: "محمد حسن",
      rating: 5,
      date: "2026/01/08",
      comment: "تجربة VIP رائعة! الخدمة الشخصية والمشروبات المجانية جعلت السهرة استثنائية.",
      type: "حجز VIP"
    },
    {
      name: "سارة أحمد",
      rating: 5,
      date: "2026/01/05",
      comment: "المكان نظيف والموظفين مهذبين. الأسعار مناسبة مقارنة بالجودة المقدمة.",
      type: "زائرة عادية"
    }
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">
            تقييمات حقيقية
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            آراء زوار نايت كلوب القاهرة
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            اقرأ تجارب الزوار الحقيقية وآرائهم في أفضل الملاهي الليلية بالقاهرة
          </p>
        </div>

        {/* Rating Summary */}
        <Card className="bg-gradient-to-br from-green-900/50 to-emerald-800/30 border-green-500/30 backdrop-blur-sm mb-12">
          <CardContent className="text-center py-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-lg text-gray-300 mb-4">متوسط التقييمات</div>
            <div className="text-sm text-gray-400">بناءً على 500+ تقييم حقيقي</div>
          </CardContent>
        </Card>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-500/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white">{review.name}</CardTitle>
                      <CardDescription className="text-gray-400">{review.type}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3">
                  <Quote className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">{review.comment}</p>
                </div>
                <div className="text-sm text-gray-500 mt-4">{review.date}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* الشهادات */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30">
              <Award className="w-4 h-4 mr-2" />
              الشهادات
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              شهادات من زوارنا
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              اقرأ شهادات حقيقية من زوار نايت كلوب القاهرة الذين عاشوا تجربة لا تُنسى
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* شهادة 1 */}
            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-800/30 border-purple-500/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-white">أحمد محمد</CardTitle>
                <CardDescription className="text-purple-300">زائر VIP</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "تجربة استثنائية لا تُنسى! الخدمة الشخصية والأجواء الساحرة جعلت سهرتي في القاهرة الأفضل على الإطلاق."
                </p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* شهادة 2 */}
            <Card className="bg-gradient-to-br from-blue-900/50 to-cyan-800/30 border-blue-500/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-white">فاطمة علي</CardTitle>
                <CardDescription className="text-blue-300">زائرة مع صديقات</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "مكان رائع للسهرات النسائية! الأمان والخصوصية مضمونة، والموسيقى تجعلك ترقص طوال الليل."
                </p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* شهادة 3 */}
            <Card className="bg-gradient-to-br from-green-900/50 to-emerald-800/30 border-green-500/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-white">محمد حسن</CardTitle>
                <CardDescription className="text-green-300">رجل أعمال</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "أفضل مكان لإقامة الحفلات التجارية في القاهرة. التنظيم الممتاز والخدمة المهنية يضمن نجاح أي مناسبة."
                </p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* شهادة 4 */}
            <Card className="bg-gradient-to-br from-orange-900/50 to-red-800/30 border-orange-500/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-white">سارة أحمد</CardTitle>
                <CardDescription className="text-orange-300">مؤثرة على السوشيال ميديا</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "الإضاءة والديكور مذهل! مثالي لالتقاط الصور والفيديوهات. دائماً ما أنصح متابعي بزيارة هذا المكان."
                </p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* شهادة 5 */}
            <Card className="bg-gradient-to-br from-indigo-900/50 to-purple-800/30 border-indigo-500/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-white">كريم محمود</CardTitle>
                <CardDescription className="text-indigo-300">طالب جامعي</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "أسعار مناسبة للطلاب والشباب! الأجواء ممتعة والموسيقى متنوعة. أفضل مكان لقضاء عطلة نهاية الأسبوع."
                </p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* شهادة 6 */}
            <Card className="bg-gradient-to-br from-teal-900/50 to-cyan-800/30 border-teal-500/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Quote className="w-8 h-16 text-white" />
                </div>
                <CardTitle className="text-lg text-white">لينا يوسف</CardTitle>
                <CardDescription className="text-teal-300">فنانة</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "المسرح والإضاءة مثالية للحفلات الفنية! قدمت عرضي هنا وكان الجمهور مذهلاً. سأعود مرة أخرى بالتأكيد."
                </p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border-blue-500/30 backdrop-blur-sm text-center">
            <CardContent className="py-8">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">تقييم إيجابي</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-500/30 backdrop-blur-sm text-center">
            <CardContent className="py-8">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300">رضا العملاء</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-900/50 to-green-800/30 border-green-500/30 backdrop-blur-sm text-center">
            <CardContent className="py-8">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">خدمة متواصلة</div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">شارك تجربتك معنا</h2>
            <p className="text-gray-300">نرحب بجميع الآراء والمقترحات لتحسين خدماتنا</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="https://wa.me/201286110562" target="_blank">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                شارك عبر الواتساب
              </Button>
            </Link>
            <Link href="tel:01286110562">
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-3 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                اتصل بنا
              </Button>
            </Link>
            <Link href="/places/nightclub-images">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                شاهد الصور
              </Button>
            </Link>
          </div>
        </div>

        {/* Internal Links - Simplified */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <InternalLinks currentPage="reviews/cairo" />
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
                "name": "ما تقييم نايت كلوب القاهرة؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "يحصل على تقييم 4.9/5 نجوم من الزوار بناءً على 500+ تقييم حقيقي."
                }
              }
            ]
          })
        }}
      />
      <Footer />
    </div>
    </>
  )
}