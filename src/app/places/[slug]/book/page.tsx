"use client";

import * as React from "react";
import { useMemo } from "react";
import { notFound } from "next/navigation";
import { getPlaceBySlug } from "@/lib/places";
import PlaceBookingForm from "@/components/PlaceBookingForm";
import SEOUnified from "@/components/SEOUnified";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function PlaceBookingPage({ params: paramsPromise }: PageProps) {
  const params = React.use(paramsPromise);
  const place = useMemo(() => getPlaceBySlug(params.slug), [params.slug]);

  if (!place) {
    notFound();
  }

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
        pageType="booking"
        customTitle={`احجز ${place?.name} - Night Club Egypt`}
        customDescription={`املأ بيانات الحجز لمكان ${place?.name} في ${place?.location}. خدمة InstaPay متاحة، وتواصل مبدئي عبر واتساب.`}
      />

      <Navigation />

      <main id="main-content" className="bg-black text-white min-h-screen pt-24 pb-20">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
          <div className="relative container mx-auto px-4 py-16">
            <div className="rounded-3xl overflow-hidden border border-purple-500/30 shadow-xl mb-8">
              <div className="relative h-72 md:h-96 bg-black">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  className="w-full h-full object-cover"
                  loop
                  muted={false}
                  controls={false}
                  poster={place.image}
                />
                <button
                  onClick={toggleVideo}
                  className="absolute top-1/2 left-1/2 z-30 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-white/70 bg-black/40 text-white text-2xl font-bold shadow-lg transition hover:scale-110"
                  aria-label={isVideoPlaying ? 'إيقاف الفيديو' : 'تشغيل الفيديو'}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'auto' }}
                >
                  {isVideoPlaying ? '▌▌' : '▶'}
                </button>
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />
              </div>
            </div>
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
              >
                ← العودة إلى الصفحة الرئيسية
              </Link>
            </div>
            <div className="max-w-4xl">
              <PlaceBookingForm place={place!} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}