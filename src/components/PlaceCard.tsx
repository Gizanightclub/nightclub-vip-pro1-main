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
      <div className="relative aspect-video w-full">
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
            <h3 className="mt-2 text-2xl font-extrabold text-white">{place.name}</h3>
            <p className="mt-1 text-sm text-gray-200 max-w-md">{place.description}</p>
            <p className="mt-2 text-xs text-green-300 font-semibold">سعة حتى 120 ضيف (القائمة تشمل باقات VIP و Standard)</p>
          </div>
          <div className="mt-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm text-gray-300">السعر من</p>
              <h4 className="text-2xl font-bold text-yellow-400">{place.price} ج</h4>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href={`/places/${place.slug}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 transition"
                aria-label={`تفاصيل ${place.name}`}
              >
                <Info className="w-4 h-4" />
                تفاصيل
              </Link>
              <Link
                href={`/places/${place.slug}/book`}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-cyan-500/30 hover:scale-105 transition"
                aria-label={`احجز الآن ${place.name}`}
              >
                <CalendarDays className="w-4 h-4" />
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
