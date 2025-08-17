"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Programs from "@/components/Programs";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Home() {
  const [backgroundParticles, setBackgroundParticles] = useState<Array<{left: string, top: string, delay: string, duration: string, size: string}>>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Generate optimized background particles - reduced for performance and better Core Web Vitals
    const particles = Array.from({ length: 12 }, () => ({ // تقليل من 20 إلى 12
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 1.8}s`, // تقليل من 2.85s إلى 1.8s
      duration: `${3.2 + Math.random() * 2.1}s`, // تقليل من 3.8s إلى 3.2s
      size: `${2.5 + Math.random() * 1.5}px`, // تقليل من 3px إلى 2.5px
    }));
    setBackgroundParticles(particles);
  }, []);

  if (!isClient) {
    // Return a version without particles during SSR for better LCP
    return (
      <main className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-amber-500 text-white overflow-x-hidden relative">
        {/* Static Background during SSR */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-700/10 to-amber-500/20"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <Navigation />
          <section id="home"><HeroSection /></section>
          <section id="about"><About /></section>
          <section id="gallery"><Gallery /></section>
          <section id="programs"><Programs /></section>
          <section id="packages"><Pricing /></section>
          <section id="contact"><Contact /></section>

          <footer className="py-8 border-t border-nightclub-purple/30 glass-dark">
            <div className="container mx-auto px-4 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-gradient-gold">
                  <span className="text-black font-bold text-xl">🎉</span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-nightclub-gold animate-neon">
                    Night Club Egypt
                  </div>
                  <div className="text-sm text-gray-300">أفضل نايت كلوب في القاهرة</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">© 2024 Night Club Egypt. جميع الحقوق محفوظة.</p>
              <p className="text-nightclub-gold font-semibold">استمتع بتجربة لا تُنسى مع أفضل خدمة VIP في القاهرة</p>
            </div>
          </footer>

          <div className="fixed bottom-6 left-6 z-50">
            <a
              href="https://wa.me/201286110562?text=🔥 مرحباً، أريد معرفة تفاصيل العروض والحجز للنايت كلوب. من فضلك أرسل لي التفاصيل الكاملة."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل معنا عبر WhatsApp للحجز والاستفسار - Night Club Egypt"
              className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white shadow-2xl hover:scale-105 transition-all duration-240 animate-bounce" // تقليل من 110 إلى 105 و300 إلى 240
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.86 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      {/* Optimized Animated Background for better performance */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-nightclub-dark via-gray-800 to-nightclub-purple/10"></div>

        {/* Reduced floating particles for better performance */}
        {backgroundParticles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-400/15 animate-sparkle will-change-transform" // تقليل من 20 إلى 15
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              boxShadow: `0 0 6px rgba(138, 43, 226, 0.2)`, // تقليل من 8px إلى 6px و0.3 إلى 0.2
            }}
          />
        ))}

        {/* Reduced floating stars for better performance */}
        {Array.from({ length: 8 }, (_, i) => ( // تقليل من 15 إلى 8
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-amber-400/20 rounded-full animate-pulse will-change-transform" // تقليل من 30 إلى 20
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1.6}s`, // تقليل من 1.9s إلى 1.6s
              animationDuration: `${1.6 + Math.random() * 0.8}s`, // تقليل من 1.9s إلى 1.6s
            }}
          />
        ))}
      </div>

      {/* Main Content with proper z-index */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Gallery Section */}
        <section id="gallery">
          <Gallery />
        </section>

        {/* Programs Section */}
        <section id="programs">
          <Programs />
        </section>

        {/* Pricing Section */}
        <section id="packages">
          <Pricing />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-nightclub-purple/30 glass-dark">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-gradient-gold">
                <span className="text-black font-bold text-xl">🎉</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-nightclub-gold animate-neon">
                  Night Club Egypt
                </div>
                <div className="text-sm text-gray-300">أفضل نايت كلوب في القاهرة</div>
              </div>
            </div>

            <p className="text-gray-400 mb-4">
              © 2024 Night Club Egypt. جميع الحقوق محفوظة.
            </p>

            <p className="text-nightclub-gold font-semibold">
              استمتع بتجربة لا تُنسى مع أفضل خدمة VIP في القاهرة
            </p>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 left-6 z-50">
          <a
            href="https://wa.me/201286110562?text=🔥 مرحباً، أريد معرفة تفاصيل العروض والحجز للنايت كلوب. من فضلك أرسل لي التفاصيل الكاملة."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل معنا عبر WhatsApp للحجز والاستفسار - Night Club Egypt"
            className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white shadow-2xl hover:scale-105 transition-all duration-240 animate-bounce" // تقليل من 110 إلى 105 و300 إلى 240
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.86 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
