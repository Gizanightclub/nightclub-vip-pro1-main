"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";

const Gallery = () => {
  const [currentPastEvent, setCurrentPastEvent] = useState(0);
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string }>>([]);

  // Auto-slide للحفلات السابقة
  useEffect(() => {
    const interval = setInterval(() => {
      nextPastEvent();
    }, 3000);
    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // بيانات الحفلات السابقة
  const pastEvents = [
    "/images/nightclub1.jpeg",
    "/images/nightclub0.jpeg",
    "/images/nightclub4.jpeg",
    "/images/nightclub7.jpeg",
    "/images/nightclub8.jpeg",
    "/images/nightclub9.jpeg",
    "/images/mmas.jpg",
  ];

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }));
    setParticles(newParticles);
  }, []);

  const nextPastEvent = () => {
    setCurrentPastEvent((prev) => (prev + 1) % pastEvents.length);
  };

  const prevPastEvent = () => {
    setCurrentPastEvent((prev) => (prev - 1 + pastEvents.length) % pastEvents.length);
  };

  return (
    <section
      id="gallery"
      className="relative min-h-screen py-10 md:py-20 bg-black overflow-hidden"
      aria-labelledby="gallery-title"
    >
      {/* خلفية متحركة */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"
        aria-hidden="true"
      >
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full animate-sparkle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2
            id="gallery-title"
            className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-white"
          >
            <span className="text-yellow-400 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-yellow-400 sm:to-yellow-600">
              معرض
            </span>
            <span className="block text-yellow-400 text-2xl md:text-4xl mt-2">
              الفعاليات والحفلات
            </span>
          </h2>
        </motion.div>

        {/* الحفلات السابقة */}
        <div role="region" aria-labelledby="past-events-title">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-8"
          >
            <Sparkles
              className="w-6 h-6 md:w-8 md:h-8 text-yellow-400"
              aria-hidden="true"
            />
            <h3
              id="past-events-title"
              className="text-xl md:text-3xl font-bold text-white"
            >
              حفلاتنا السابقة
            </h3>
            <Sparkles
              className="w-6 h-6 md:w-8 md:h-8 text-yellow-400"
              aria-hidden="true"
            />
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div
              className="relative h-[50vh] md:h-[70vh] rounded-xl overflow-hidden shadow-2xl bg-black/50 border-2 border-purple-500/30"
              role="img"
              aria-label={`صورة حفلة سابقة ${
                currentPastEvent + 1
              } من ${pastEvents.length}`}
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentPastEvent}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
<Image
  src={pastEvents[currentPastEvent]}
  alt={`حفلة سابقة ${currentPastEvent + 1}`}
  fill
  className="object-cover"
  quality={85}
  loading="lazy"
/>

                    
                  </div>
                </motion.div>
              </AnimatePresence>

              <Button
                onClick={prevPastEvent}
                variant="ghost"
                size="icon"
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/70 border border-purple-500/30 hover:bg-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="الحفلة السابقة"
              >
                <ChevronLeft
                  className="w-4 h-4 md:w-5 md:h-5 text-purple-400"
                  aria-hidden="true"
                />
              </Button>

              <Button
                onClick={nextPastEvent}
                variant="ghost"
                size="icon"
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/70 border border-purple-500/30 hover:bg-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="الحفلة التالية"
              >
                <ChevronRight
                  className="w-4 h-4 md:w-5 md:h-5 text-purple-400"
                  aria-hidden="true"
                />
              </Button>
            </div>

            {/* مؤشرات الصور */}
            <div
              className="flex justify-center mt-4 space-x-2 space-x-reverse"
              role="tablist"
              aria-label="اختيار حفلة سابقة"
            >
              {pastEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPastEvent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black ${
                    index === currentPastEvent
                      ? "bg-yellow-400 scale-125"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  role="tab"
                  aria-selected={index === currentPastEvent}
                  aria-label={`عرض الحفلة السابقة ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
