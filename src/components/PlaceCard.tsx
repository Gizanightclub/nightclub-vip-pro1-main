"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Place } from "@/lib/places";
import { Info, CalendarDays } from "lucide-react";

const PlaceCard = ({ place }: { place: Place }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-black/50 backdrop-blur-md shadow-2xl hover:shadow-2xl hover:border-yellow-400/40 transition-all"
    >
      {place.gulfOnly && (
        <div className="absolute top-0 left-0 z-20 overflow-visible">
          <div className="absolute -top-3 -left-6 transform -rotate-45 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 px-6 py-2 rounded-br-lg rounded-tl-lg text-white font-bold text-xs uppercase tracking-wider shadow-[0_3px_12px_rgba(59,130,246,0.55)] border border-white/20">
            خليجي فقط
          </div>
        </div>
      )}
      {place.couplesOnly && (
        <div className="absolute top-0 left-0 z-20 overflow-visible">
          <div className="absolute top-10 -left-6 transform -rotate-45 bg-gradient-to-r from-red-500 via-violet-500 to-purple-700 px-6 py-2 rounded-br-lg rounded-tl-lg text-white font-bold text-xs uppercase tracking-wider shadow-[0_3px_12px_rgba(240,46,170,0.55)] border border-white/20">
            كبلز فقط
          </div>
        </div>
      )}
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
            <h3 className="mt-2 text-lg font-extrabold text-white">{place.name}</h3>
            <p className="mt-1 text-xs text-gray-200 max-w-md">{place.description}</p>
            <p className="mt-2 text-xs text-green-300 font-semibold">سعة حتى 120 ضيف (القائمة تشمل باقات VIP و Standard)</p>
          </div>
          <div className="mt-4 flex items-center justify-between gap-3">
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
    </motion.article>
  );
};

export default PlaceCard;
