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