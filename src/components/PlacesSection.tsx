"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { places } from "@/lib/places";
import { MapPin, Star, Info, CalendarDays } from "lucide-react";
import StarRating from "./StarRating";

const PlacesSection = () => {
  return (
    <section
      id="places"
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* خلفية متحركة */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="absolute inset-0">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-yellow-400" />
            <Star className="w-8 h-8 text-purple-400" />
            <MapPin className="w-8 h-8 text-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            أماكن السهر
            <span className="text-yellow-400"> VIP الفاخرة </span>
            <span className="block text-lg md:text-2xl mt-2">احجز الآن عبر الواتس أو InstaPay</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            استكشف أفضل أماكن السهر الفاخرة في جميع أنحاء مصر. اختر المكان المثالي لسهرتك المميزة.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {places.slice(0, 6).map((place, index) => (
            <motion.div
              key={place.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-black/50 backdrop-blur-md shadow-2xl hover:shadow-2xl hover:border-yellow-400/40 transition-all duration-300">
                <div className="relative aspect-video w-full">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover opacity-95 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {place.couplesOnly && (
                    <div className="absolute left-3 top-3 z-50 rounded-lg bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-900/50">
                      كبلز فقط
                    </div>
                  )}
                  {place.gulfOnly && (
                    <div className="absolute left-3 top-12 z-50 rounded-lg bg-cyan-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-900/50">
                      خليجي فقط
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-sky-300 bg-sky-900/40 px-2 py-1 rounded-md">
                        {place.location}
                      </span>
                    </div>
                    <div>
                      <h3 className="mt-2 text-lg md:text-xl font-extrabold text-white">{place.name}</h3>
                      {place.rating && (
                        <div className="mt-1">
                          <StarRating rating={place.rating} size={14} />
                        </div>
                      )}
                      <p className="mt-1 text-sm text-gray-200 line-clamp-2">{place.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-black/80">
                  <div className="flex items-center justify-between gap-3">
                      <div className="flex-1">
                        <p className="text-sm text-gray-300 mb-2">السعر</p>
                        <div className="flex flex-col items-start gap-1">
                          <p className="text-2xl text-gray-400 line-through font-semibold">{place.originalPrice} EGP</p>
                          <div className="flex items-center gap-2">
                            <h4 className="text-3xl font-black text-yellow-400">{place.price}</h4>
                            <span className="text-xl text-gray-300">EGP</span>
                          </div>
                          <span className="inline-block text-sm font-bold text-white bg-gradient-to-r from-red-500 to-orange-500 px-2 py-0.5 rounded-md">خصم {Math.round(((place.originalPrice - place.price) / place.originalPrice) * 100)}%</span>
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

        <div className="mt-12 text-center">
          <Link
            href="/places"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-3 rounded-lg hover:scale-105 transition"
          >
            أظهر المزيد من الأماكن
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlacesSection;