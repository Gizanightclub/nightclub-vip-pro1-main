"use client";

import * as React from "react";
import { useMemo } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPlaceBySlug, places, Place } from "@/lib/places";
import PlaceBookingForm from "@/components/PlaceBookingForm";
import SEOUnified from "@/components/SEOUnified";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function PlaceDetailPage({ params: paramsPromise }: PageProps) {
  const params = React.use(paramsPromise);
  const place = useMemo(() => getPlaceBySlug(params.slug), [params.slug]);

  if (!place) {
    notFound();
  }

  const similarPlaces = places.filter((p: Place) => p.slug !== params.slug).slice(0, 2);

  return (
    <>
      <SEOUnified
        pageType="place"
        customTitle={`احجز ${place?.name} - Night Club Egypt`}
        customDescription={`املأ بيانات الحجز لمكان ${place?.name} في ${place?.location}. خدمة InstaPay متاحة، وتواصل مبدئي عبر واتساب.`}
      />

      <main className="bg-black text-white min-h-screen pb-20">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <section className="lg:col-span-2 space-y-5">
                <div className="rounded-3xl overflow-hidden border border-purple-500/30 shadow-xl">
                  <div className="relative h-96 md:h-[40rem]">
                    <Image
                      src={place!.image}
                      alt={place!.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 p-4 rounded-lg bg-black/40 backdrop-blur-sm">
                      <h1 className="text-3xl font-extrabold text-white">{place!.name}</h1>
                      <p className="text-sm text-gray-300 mt-1">{place!.location}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-purple-500/30 bg-black/50 p-5" role="region" aria-label="متطلبات الحجز">
                  <h2 className="text-2xl font-bold text-yellow-400 mb-3">تفاصيل المكان</h2>
                  <p className="text-gray-300 mb-4">{place!.description}</p>
                  <ul className="space-y-2">
                    {place!.features.map((item: string) => (
                      <li key={item} className="text-gray-200">• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-purple-500/30 bg-black/40 p-5">
                  <h2 className="text-xl font-semibold text-white mb-2">عروض ذات صلة</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {similarPlaces.map((other: Place) => (
                      <Link
                        key={other.slug}
                        href={`/places/${other.slug}`}
                        className="rounded-xl border border-white/20 bg-white/5 p-3 transition hover:bg-white/10"
                      >
                        <h3 className="text-white font-bold">{other.name}</h3>
                        <p className="text-xs text-gray-300">{other.location}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              <aside className="space-y-5">
                <div className="rounded-3xl border border-purple-500/30 bg-black/40 p-5">
                  <Link
                    href={`/places/${params.slug}/book`}
                    className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 rounded-xl hover:scale-105 transition"
                  >
                    احجز الآن
                  </Link>
                </div>

                {/* Fallback: نموذج حجز مباشرة على الصفحة */}
                <div className="rounded-3xl border border-purple-500/30 bg-black/40 p-5">
                  <h3 className="text-lg font-bold text-yellow-400 mb-4">حجز سريع</h3>
                  <div className="space-y-3 text-sm">
                    <input type="text" placeholder="الاسم" className="w-full rounded-lg p-2 bg-white/5 border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-xs" />
                    <input type="tel" placeholder="الهاتف" className="w-full rounded-lg p-2 bg-white/5 border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-xs" />
                    <input type="date" className="w-full rounded-lg p-2 bg-white/5 border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-xs" />
                    <button onClick={() => window.location.href = `/places/${params.slug}/book`} className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 rounded-lg hover:scale-105 transition text-xs">
                      احجز عبر الصفحة الكاملة
                    </button>
                  </div>
                </div>

                <Link
                  href="/"
                  className="block text-center rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white hover:bg-white/15 transition"
                >
                  العودة إلى الصفحة الرئيسية
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
