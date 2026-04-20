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
      src: "/images/IMG_9690.jpeg ",
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
      src: "/images/nightclubegypt.com6.jpg",
      title: "حفلات المطربين والنجوم - أقوى الأمسيات الغنائية",
      description: "احضر أقوى الحفلات مع أشهر المطربين والنجوم في أمسيات غنائية استثنائية لا تُفوت",
      alt: "حفلة غنائية مع المطربين في نايت كلوب مصر"
    },
    {
      src: "/images/mmas.jpg",
      title: "عروض خاصة وحفلات استثنائية كل ليلة",
      description: "كل ليلة عندنا مختلفة! عروض خاصة وحفلات استثنائية مع برامج متنوعة تناسب جميع الأذواق",
      alt: "عروض خاصة وحفلات مميزة في نايت كلوب مصر"
    },
    {
      src: "/images/nightclubegypt.com (3).jpg",
      title: "حفلات VIP حصرية - الفخامة والأناقة في كل زاوية",
      description: "استمتع بتجربة VIP حصرية مع خدمة استثنائية وأجواء فاخرة تليق بك في أفضل نايت كلوب بمصر",
      alt: "حفلة VIP حصرية في نايت كلوب مصر بأجواء فاخرة وراقية"
    },
    {
      src: "/images/nightclubegypt.com (5).jpg",
      title: "سهرات الخليج المميزة - موسيقى وأجواء عالمية",
      description: "احجز مكانك في سهرات الخليج المشهورة مع أفضل الموسيقى والأجواء العالمية في قلب القاهرة",
      alt: "سهرة خليجية في نايت كلوب مصر مع موسيقى عالمية"
    },
    {
      src: "/images/nightclubegypt.com (7).jpg",
      title: "حفلات الطاولات المشتركة - التعارف والمرح طول الليل",
      description: "عيش أجواء مرحة مع حفلات الطاولات المشتركة حيث تلتقي أجمل الوجوه وتتعارف وتستمتع معاً",
      alt: "حفلة طاولات مشتركة في نايت كلوب مصر بأجواء مرحة"
    },
    {
      src: "/images/nightclubegypt.com (8).jpg",
      title: "حفلات الشباب والرقص الحديث - أقوى الأمسيات الراقصة",
      description: "انضم لأعظم حفلات الشباب مع أحدث الرقصات وأقوى الموسيقى الحديثة من أفضل DJs العالم",
      alt: "حفلة رقص حديثة في نايت كلوب مصر مع شباب وطاقة عالية"
    },
    {
      src: "/images/nightclub111.jpg",
      title: "أجواء نايت كلوب مصر - سهرات لا تُنسى مع أفضل الخدمات",
      description: "استمتع بأجواء نايت كلوب مصر الفريدة مع سهرات مميزة وخدمات VIP فاخرة في أفضل الملاهي الليلية",
      alt: "أجواء نايت كلوب مصر مع سهرات مميزة وخدمات VIP"
    },
    {
      src: "/images/bestnightclb.jpg",
      title: "أفضل نايت كلوب في مصر - تجربة VIP فاخرة ومميزة",
      description: "اكتشف أفضل نايت كلوب في مصر مع تجربة VIP فاخرة وخدمات استثنائية في أرقى الملاهي الليلية بالقاهرة",
      alt: "أفضل نايت كلوب في مصر مع تجربة VIP فاخرة"
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
            <span className="text-yellow-400 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-yellow-400 sm:to-yellow-600">
              معرض الصور والفيديوهات
            </span>
            <span className="block text-yellow-400 text-2xl md:text-4xl mt-2">
              أفضل لحظات الحفلات والسهرات المميزة
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

      {/* محتوى SEO مخفي لفهرسة الصور */}
      <div style={{ display: 'none' }} className="seo-hidden-gallery">
        <h3>معرض صور نايت كلوب مصر - أفضل الملاهي الليلية والنوادي الفاخرة</h3>
        <p>معرض صور نايت كلوب مصر يعرض أفضل الملاهي الليلية والنوادي الفاخرة في القاهرة والجيزة. شاهد صور حفلات VIP وأجواء السهرات المميزة في تانجو كلوب وفيينا كلوب وفوكس كلوب وأوتار كلوب. صور نايت كلوب مصر تظهر الرقص الشرقي والديسكو والحفلات الغنائية مع أشهر النجوم والراقصات.</p>
        <p>صور نايت كلوب القاهرة: صور تانجو كلوب، صور فيينا كلوب، صور فوكس كلوب، صور أوتار كلوب، صور مليونير كلوب، صور نوكس كلوب، صور ستيج كايرو، صور كاش كايرو، صور أومني كلوب، صور إيكو كلوب، صور كينج كلوب، صور كوزمو لاونج، صور أوفيد كلوب، صور شوتس كلوب، صور روفي كلوب، صور راي كلوب، صور فولت لاونج، صور سانسي كلوب، صور ديسكو نوكس، صور سهلال كلوب، صور كاليجيه كلوب.</p>
        <p>فيديوهات نايت كلوب مصر: فيديو تانجو كلوب، فيديو فيينا كلوب، فيديو فوكس كلوب، فيديو أوتار كلوب، فيديو مليونير كلوب، فيديو نوكس كلوب، فيديو ستيج كايرو، فيديو كاش كايرو، فيديو أومني كلوب، فيديو إيكو كلوب، فيديو كينج كلوب، فيديو كوزمو لاونج، فيديو أوفيد كلوب، فيديو شوتس كلوب، فيديو روفي كلوب، فيديو راي كلوب، فيديو فولت لاونج، فيديو سانسي كلوب، فيديو ديسكو نوكس، فيديو سهلال كلوب، فيديو كاليجيه كلوب.</p>
        <p>حجز نايت كلوب مصر: حجز تانجو كلوب، حجز فيينا كلوب، حجز فوكس كلوب، حجز أوتار كلوب، حجز مليونير كلوب، حجز نوكس كلوب، حجز ستيج كايرو، حجز كاش كايرو، حجز أومني كلوب، حجز إيكو كلوب، حجز كينج كلوب، حجز كوزمو لاونج، حجز أوفيد كلوب، حجز شوتس كلوب، حجز روفي كلوب، حجز راي كلوب، حجز فولت لاونج، حجز سانسي كلوب، حجز ديسكو نوكس، حجز سهلال كلوب، حجز كاليجيه كلوب.</p>
        <p>أسعار نايت كلوب مصر: أسعار تانجو كلوب، أسعار فيينا كلوب، أسعار فوكس كلوب، أسعار أوتار كلوب، أسعار مليونير كلوب، أسعار نوكس كلوب، أسعار ستيج كايرو، أسعار كاش كايرو، أسعار أومني كلوب، أسعار إيكو كلوب، أسعار كينج كلوب، أسعار كوزمو لاونج، أسعار أوفيد كلوب، أسعار شوتس كلوب، أسعار روفي كلوب، أسعار راي كلوب، أسعار فولت لاونج، أسعار سانسي كلوب، أسعار ديسكو نوكس، أسعار سهلال كلوب، أسعار كاليجيه كلوب.</p>
        <p>نايت كلوب القاهرة: نايت كلوب الجيزة، نايت كلوب العجوزة، نايت كلوب الزمالك، نايت كلوب المعادي، نايت كلوب المهندسين، نايت كلوب الدقي، نايت كلوب مدينة نصر، نايت كلوب مصر الجديدة، نايت كلوب الشيخ زايد، نايت كلوب التجمع الخامس، نايت كلوب 6 أكتوبر، نايت كلوب كورنيش النيل، نايت كلوب أهل مصر، نايت كلوب نادي الجزيرة، نايت كلوب نادي الأهلي، نايت كلوب فور سيزونز، نايت كلوب ماريوت، نايت كلوب هيلتون.</p>
        <p>سهرات نايت كلوب مصر: سهرات VIP، سهرات خليجي، سهرات كبلز، سهرات ديسكو، سهرات رقص شرقي، سهرات موسيقى حية، سهرات DJs عالميين، سهرات راقصات، سهرات حفلات، سهرات ويك إند، سهرات عيد ميلاد، سهرات زفاف، سهرات عزوبية، سهرات عائلية، سهرات مجموعات، سهرات أفراد.</p>
        <p>خدمات نايت كلوب مصر: طاولة VIP، مشروبات مجانية، طبق مازة، طبق فواكه، سيارة ذهاب وعودة، استقبال شخصي، خدمة VIP، مواقف سيارات، أمان كامل، موسيقى عالية الجودة، إضاءة ليزر، عروض ضوء، نظام صوتي 360، بار كوكتيل، بار مشروبات، بار شيشة، منطقة رقص، منطقة جلوس، منطقة تدخين، منطقة غير تدخين، منطقة VIP، منطقة عادية.</p>
      </div>

    </section>
  );
};

export default Gallery;
