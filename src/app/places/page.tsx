"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { places } from "@/lib/places";
import SEOUnified from "@/components/SEOUnified";
import { MapPin, Star, Info, CalendarDays } from "lucide-react";

export default function PlacesPage() {
  return (
    <>
      <SEOUnified
        pageType="places"
        customTitle="جميع الملاهي الليلية والنوادي الفاخرة في مصر - Night Club Egypt"
        customDescription="استكشف أفضل الملاهي الليلية والنوادي الفاخرة في مصر. احجز الآن وتمتع بأفضل سهرة مع خصومات حتى 25%"
      />

      <main id="main-content" className="bg-black text-white min-h-screen pb-20 pt-32">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-yellow-400" />
              <Star className="w-8 h-8 text-purple-400" />
              <MapPin className="w-8 h-8 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              جميع الملاهي الليلية في مصر
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              استكشف أفضل أماكن السهر الفاخرة في جميع أنحاء مصر. اختر المكان المثالي لسهرتك المميزة.
            </p>
          </motion.div>

          {/* Cities Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            <Link
              href="/places/cairo"
              className="text-center rounded-xl border border-purple-500/30 bg-white/10 px-4 py-4 text-white hover:bg-white/20 transition"
            >
              <h3 className="font-bold text-lg">نايت كلوب القاهرة</h3>
              <p className="text-sm text-gray-300">أفضل السهرات في القاهرة والجيزة</p>
            </Link>
            <Link
              href="/places/alexandria"
              className="text-center rounded-xl border border-purple-500/30 bg-white/10 px-4 py-4 text-white hover:bg-white/20 transition"
            >
              <h3 className="font-bold text-lg">نايت كلوب الإسكندرية</h3>
              <p className="text-sm text-gray-300">سهرات بحرية على الساحل</p>
            </Link>
            <Link
              href="/places/hurghada"
              className="text-center rounded-xl border border-purple-500/30 bg-white/10 px-4 py-4 text-white hover:bg-white/20 transition"
            >
              <h3 className="font-bold text-lg">نايت كلوب الغردقة</h3>
              <p className="text-sm text-gray-300">سهرات البحر الأحمر وVIP</p>
            </Link>
            <Link
              href="/places/nightclub-images"
              className="text-center rounded-xl border border-purple-500/30 bg-white/10 px-4 py-4 text-white hover:bg-white/20 transition"
            >
              <h3 className="font-bold text-lg">معرض الصور والدليل</h3>
              <p className="text-sm text-gray-300">صور نايت كلوب في مصر + أسعار وتجارب حقيقية</p>
            </Link>
            <Link
              href="/places/nightclub-videos"
              className="text-center rounded-xl border border-purple-500/30 bg-white/10 px-4 py-4 text-white hover:bg-white/20 transition"
            >
              <h3 className="font-bold text-lg">فيديوهات السهرات</h3>
              <p className="text-sm text-gray-300">فيديوهات VIP وتجارب حقيقية مع CTA حجز مباشر</p>
            </Link>
          </div>

          {/* Places Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {places.map((place, index) => (
              <motion.div
                key={place.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-black/50 backdrop-blur-md shadow-2xl hover:shadow-2xl hover:border-yellow-400/40 transition-all"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover opacity-95"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-sky-300 bg-sky-900/40 px-2 py-1 rounded-md">
                        {place.location}
                      </span>
                      <h2 className="mt-2 text-lg font-extrabold text-white">{place.name}</h2>
                      <p className="mt-1 text-xs text-gray-200 max-w-md">{place.description}</p>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1">
                        <p className="text-xs text-gray-300 mb-2">السعر</p>
                        <div className="flex flex-col items-start gap-1">
                          <p className="text-xl text-gray-400 line-through font-semibold">{place.originalPrice} EGP</p>
                          <div className="flex items-center gap-2">
                            <h4 className="text-3xl font-black text-yellow-400">{place.price}</h4>
                            <span className="text-lg text-gray-300">EGP</span>
                          </div>
                          <span className="inline-block text-xs font-bold text-white bg-gradient-to-r from-red-500 to-orange-500 px-2 py-0.5 rounded-md">خصم {Math.round(((place.originalPrice - place.price) / place.originalPrice) * 100)}%</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Link
                          href={`/places/${place.slug}`}
                          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all hover:scale-105"
                          aria-label={`تفاصيل ${place.name}`}
                        >
                          <Info className="w-5 h-5" />
                          تفاصيل
                        </Link>
                        <Link
                          href={`/places/${place.slug}/book`}
                          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all"
                          aria-label={`احجز الآن ${place.name}`}
                        >
                          <CalendarDays className="w-5 h-5" />
                          احجز الآن
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Links for AI and internal SEO */}
          <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/places/cairo" className="rounded-xl border border-purple-500/30 bg-white/10 p-4 hover:bg-white/20 transition">
              <h3 className="text-lg font-bold text-white">نايت كلوب القاهرة</h3>
              <p className="text-gray-300">أشهر النوادي مع VIP وأسعار أرخص.</p>
            </Link>
            <Link href="/places/north-coast" className="rounded-xl border border-purple-500/30 bg-white/10 p-4 hover:bg-white/20 transition">
              <h3 className="text-lg font-bold text-white">الساحل الشمالي</h3>
              <p className="text-gray-300">سهرات البحر الأحمر وأسعار تنافسية.</p>
            </Link>
            <Link href="/places/sharm-el-sheikh" className="rounded-xl border border-purple-500/30 bg-white/10 p-4 hover:bg-white/20 transition">
              <h3 className="text-lg font-bold text-white">شرم الشيخ</h3>
              <p className="text-gray-300">مناسبات شرم DJ وديسكو VIP.</p>
            </Link>
            <Link href="/places/el-gouna" className="rounded-xl border border-purple-500/30 bg-white/10 p-4 hover:bg-white/20 transition">
              <h3 className="text-lg font-bold text-white">الجونة</h3>
              <p className="text-gray-300">سهرات الجونة بأسعار خاصة.</p>
            </Link>
          </section>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-8 py-3 rounded-lg hover:scale-105 transition"
            >
              العودة إلى الصفحة الرئيسية
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}
