"use client"; 

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";

// 👇 ImageObject Schema للصور
const ImageSchema = ({ imageUrl, title, description, index }: {
  imageUrl: string;
  title: string;
  description: string;
  index: number;
}) => {
  const baseUrl = 'https://www.nightclubegypt.com';

  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": `${baseUrl}${imageUrl}`,
    "name": title,
    "description": description,
    "caption": description,
    "contentLocation": {
      "@type": "Place",
      "name": "Cairo, Egypt"
    },
    "creator": {
      "@type": "Organization",
      "name": "Night Club Egypt"
    },
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Night Club Egypt"
    },
    "license": `${baseUrl}/license`,
    "acquireLicensePage": `${baseUrl}/contact`,
    "creditText": "Night Club Egypt",
    "keywords": `نايت كلوب مصر, حفلات, سهرات, ترفيه ليلي, القاهرة, صور ${index + 1}`,
    "representativeOfPage": index === 0,
    "encodingFormat": "image/jpeg"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
    />
  );
};

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

  // 👇 بيانات الحفلات السابقة مع أوصاف محسنة لـ SEO
  const pastEvents = [
    {
      src: "/images/1000799787.jpg",
      title: "حفلة مميزة في نايت كلوب مصر - أجواء VIP فاخرة",
      description: "استمتع بأروع الأوقات في حفلاتنا المميزة مع أجواء VIP فاخرة وخدمة استثنائية في أفضل نايت كلوب بالقاهرة",
      alt: "حفلة VIP في نايت كلوب مصر مع أجواء فاخرة وإضاءة مميزة"
    },
    {
      src: "/images/nightclubeg.jpg",
      title: "سهرة راقصة مع أشهر النجوم في نايت كلوب إيجيبت",
      description: "احجز مكانك في أقوى السهرات مع أشهر النجوم والراقصات في أفضل ملهى ليلي بمصر",
      alt: "سهرة رقص في نايت كلوب مصر مع النجوم والراقصات المشهورات"
    },
    {
      src: "/images/1000799797.jpg",
      title: "حفلات الويك إند المميزة - موسيقى حية و DJs عالميين",
      description: "عيش تجربة ليلية لا تُنسى مع أفضل DJs العالميين والموسيقى الحية في حفلات الويك إند الأسطورية",
      alt: "حفلة ويك إند في نايت كلوب مصر مع DJs عالميين وموسيقى حية"
    },
    {
      src: "/images/nightclubeg1.jpg",
      title: "رقص شرقي أصيل مع أمهر الراقصات في مصر",
      description: "استمتع بعروض الرقص الشرقي الأصيل مع أمهر الراقصات والفنانات في أجواء شرقية ساحرة",
      alt: "عرض رقص شرقي في نايت كلوب مصر مع راقصات محترفات"
    },
    {
      src: "/images/nightclubeg2.jpg",
      title: "حفلات رقص شرقي كل يوم",
      description: "استمتع بأجواء ساحرة مع حفلات رقص شرقي كل يوم في نايت كلوب مصر",
      alt: "حفلات رقص شرقي في نايت كلوب مصر مع إضاءة ناعمة"
    },
    {
      src: "images/nightclubeg3.jpg",
      title: "حفلات المطربين والنجوم - أقوى الأمسيات الغنائية",
      description: "احضر أقوى الحفلات مع أشهر المطربين والنجوم في أمسيات غنائية استثنائية لا تُفوت",
      alt: "حفلة غنائية مع المطربين في نايت كلوب مصر"
    },
    {
      src: "/images/mmas.jpg",
      title: "عروض خاصة وحفلات استثنائية كل ليلة",
      description: "كل ليلة عندنا مختلفة! عروض خاصة وحفلات استثنائية مع برامج متنوعة تناسب جميع الأذواق",
      alt: "عروض خاصة وحفلات مميزة في نايت كلوب مصر"
    }
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
      {/* 👇 إضافة ImageObject Schema لكل صورة */}
      {pastEvents.map((event, index) => (
        <ImageSchema
          key={`schema-${index}`}
          imageUrl={event.src}
          title={event.title}
          description={event.description}
          index={index}
        />
      ))}

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
            <span className="text-white sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-white sm:to-gray-300">
              معرض
            </span>
            <span className="block text-white text-2xl md:text-4xl mt-2">
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
              className="w-6 h-6 md:w-8 md:h-8 text-white"
              aria-hidden="true"
            />
            <h3
              id="past-events-title"
              className="text-xl md:text-3xl font-bold text-white"
            >
              حفلاتنا السابقة
            </h3>
            <Sparkles
              className="w-6 h-6 md:w-8 md:h-8 text-white"
              aria-hidden="true"
            />
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div
              className="relative h-[50vh] md:h-[70vh] rounded-xl overflow-hidden shadow-2xl bg-black/50 border-2 border-purple-500/30"
              role="img"
              aria-label={`${pastEvents[currentPastEvent].alt} - صورة ${currentPastEvent + 1} من ${pastEvents.length}`}
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
                      src={pastEvents[currentPastEvent].src}
                      alt={pastEvents[currentPastEvent].alt}
                      fill
                      className="object-cover"
                      quality={85}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      title={pastEvents[currentPastEvent].title}
                    />
                  </div>

                  {/* 👇 إضافة caption للصورة */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                      {pastEvents[currentPastEvent].title}
                    </h4>
                    <p className="text-gray-200 text-sm md:text-base">
                      {pastEvents[currentPastEvent].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <Button
                onClick={prevPastEvent}
                variant="ghost"
                size="icon"
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/70 border border-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label="الحفلة السابقة"
              >
                <ChevronLeft
                  className="w-4 h-4 md:w-5 md:h-5 text-white"
                  aria-hidden="true"
                />
              </Button>

              <Button
                onClick={nextPastEvent}
                variant="ghost"
                size="icon"
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/70 border border-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label="الحفلة التالية"
              >
                <ChevronRight
                  className="w-4 h-4 md:w-5 md:h-5 text-white"
                  aria-hidden="true"
                />
              </Button>
            </div>

            {/* مؤشر الصور */}
            <div className="flex justify-center mt-4 md:mt-6 space-x-2 space-x-reverse">
              {pastEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPastEvent(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black ${
                    index === currentPastEvent
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`الانتقال إلى الصورة ${index + 1}: ${pastEvents[index].title}`}
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
