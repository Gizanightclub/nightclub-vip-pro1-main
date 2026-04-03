"use client";

import * as React from "react";
import { useMemo } from "react";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getPlaceBySlug, places, Place } from "@/lib/places";
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

  const cheaperPlaces = useMemo(() => {
    const cheaper = places
      .filter((p: Place) => p.slug !== params.slug && p.price <= (place?.price ?? Infinity))
      .sort((a, b) => a.price - b.price)
      .slice(0, 3);

    if (cheaper.length >= 3) return cheaper;

    return places
      .filter((p: Place) => p.slug !== params.slug)
      .sort((a, b) => a.price - b.price)
      .slice(0, 3);
  }, [params.slug, place?.price]);

  const phone = "01286110562";
  const whatsappLink = `https://wa.me/201286110562?text=${encodeURIComponent(`مرحبا، أود حجز ${place?.name} في القاهرة. يرجى التواصل.`)}`;
  const mapQuery = encodeURIComponent(`${place?.name} ${place?.location} القاهرة`);

  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const videoSrc = place?.video || "/videos/nightclub-promo.mp4";

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  return (
    <>
      <SEOUnified
        pageType="place"
        customTitle={`${place?.name} حجز القاهرة أرخص سعر | Night Club Egypt`}
        customDescription={`احجز ${place?.name} بأفضل سعر في القاهرة مع خدمة VIP وسيارات ذهاب وعودة. اتصل الآن على ${phone} أو واتساب.`}
        customKeywords={[
          "night club cairo",
          "nightlife egypt",
          "حجز نايت كلوب",
          "أماكن سهر في القاهرة",
          place?.name || "",
          place?.location || ""
        ]}
      />
      <Script
        id="place-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NightClub",
            name: place?.name,
            address: {
              "@type": "PostalAddress",
              streetAddress: place?.location,
              addressLocality: "القاهرة",
              addressRegion: "القاهرة الكبرى",
              addressCountry: "EG"
            },
            telephone: phone,
            url: `https://www.nightclubegypt.com/places/${place?.slug}`,
            description: place?.description,
            image: place?.image,
            priceRange: `${place?.price} EGP`,
            openingHours: "Mo-Su 20:00-04:00",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 30.0666,
              longitude: 31.2240
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "عروض ونوفر",
              itemListElement: place?.packages.map((pkg) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: pkg.name
                },
                price: pkg.price,
                priceCurrency: "EGP",
                description: `الباقة ${pkg.name} بسعر ${pkg.price} EGP`,
                url: `https://www.nightclubegypt.com/places/${place?.slug}/book`
              }))
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: 4.8,
              reviewCount: 258
            },
            review: [
              {
                "@type": "Review",
                author: "عميل سعيد",
                datePublished: new Date().toISOString().split("T")[0],
                reviewRating: { "@type": "Rating", ratingValue: 5 },
                reviewBody:
                  "الخدمة ممتازة في اینيچ. حجز VIP وسفر ذهاب وعودة من خلال 01286110562 بسرعة وسهولة."
              }
            ]
          }, null, 2)
        }}
      />

      <main className="bg-black text-white min-h-screen pb-20">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <section className="lg:col-span-2 space-y-5">
                <div className="rounded-3xl overflow-hidden border border-purple-500/30 shadow-xl">
                  <div className="relative h-96 md:h-[40rem] bg-black">
                    <video
                      ref={videoRef}
                      src={videoSrc}
                      className="w-full h-full object-cover"
                      autoPlay={false}
                      loop
                      muted={false}
                      controls={false}
                      poster={place!.image}
                      preload="metadata"
                      onError={(e) => {
                        console.error('Video failed to load:', videoSrc, e);
                      }}
                      onLoadedData={() => {
                        console.log('Video loaded successfully:', videoSrc);
                      }}
                    />
                    <button
                      onClick={toggleVideo}
                      className="absolute top-1/2 left-1/2 z-30 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-white/70 bg-black/40 text-white text-2xl font-bold shadow-lg transition hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      aria-label={isVideoPlaying ? 'إيقاف الفيديو' : 'تشغيل الفيديو'}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'auto' }}
                    >
                      {isVideoPlaying ? '▌▌' : '▶'}
                    </button>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
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
                  <h2 className="text-xl font-semibold text-yellow-400 mb-3">سعر وتأكيد</h2>
                  <p className="text-gray-100 text-lg font-bold">السعر التقريبي: {place!.price} EGP (أقل عرض من أصل {place!.originalPrice} EGP)</p>
                  <p className="text-green-300 mt-2">نوفر حجز بأقل من سعر المكان</p>
                  <ul className="mt-3 space-y-1 text-gray-200">
                    <li>• سيارة ذهاب وعودة متاحة</li>
                    <li>• حجز VIP بجودة عالية</li>
                    <li>• خصومات خاصة للعائلات والمجموعات</li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-purple-500/30 bg-black/40 p-5">
                  <h2 className="text-xl font-semibold text-white mb-3">موقع النادي</h2>
                  <p className="text-gray-300 mb-2">{place!.location}</p>
                  <div className="aspect-video overflow-hidden rounded-xl border border-white/20">
                    <iframe
                      title="خريطة النادي"
                      src={`https://maps.google.com/maps?q=${mapQuery}&t=m&z=15&output=embed`}
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="rounded-3xl border border-purple-500/30 bg-black/40 p-5">
                  <h2 className="text-xl font-semibold text-white mb-2">أماكن مشابهة أرخص</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {cheaperPlaces.map((other: Place) => (
                      <Link
                        key={other.slug}
                        href={`/places/${other.slug}`}
                        className="rounded-xl border border-white/20 bg-white/5 p-3 transition hover:bg-white/10"
                      >
                        <h3 className="text-white font-bold">{other.name}</h3>
                        <p className="text-xs text-gray-300">{other.location}</p>
                        <p className="text-sm text-yellow-300">{other.price} ج</p>
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
                  <a
                    href={`tel:${phone}`}
                    className="mt-3 block w-full text-center bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 rounded-xl hover:scale-105 transition"
                  >
                    مكالمة سريعة {phone}
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 block w-full text-center bg-gradient-to-r from-green-400 to-cyan-500 text-white font-bold py-3 rounded-xl hover:scale-105 transition"
                  >
                    ارسل واتساب
                  </a>
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
