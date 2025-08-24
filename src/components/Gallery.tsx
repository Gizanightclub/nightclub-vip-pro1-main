"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";
import Image from "next/image";
import VideoSection from "./VideoSection";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const galleryRef = useRef<HTMLElement>(null);

  // Intersection Observer for performance
  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const images = [
    {
      url: "/images/nightclubegypt.com (10).jpg",
      title: "أجواء فاخرة مميزة",
      description: "أمسية لا تُنسى مع أفضل الخدمات",
      altText: "أجواء فاخرة في Night Club Egypt - أفضل نايت كلوب في القاهرة والجيزة - حفلات ليلية VIP - خدمة استثنائية في العجوزة والزمالك"
    },
    {
      url: "/images/nightclubegypt.com (3).jpg",
      title: "خدمة VIP حصرية",
      description: "تجربة لا مثيل لها مع خدمة متميزة",
      altText: "خدمة VIP حصرية في أفضل نايت كلوب بمصر - الشيخ زايد 6 أكتوبر التجمع الخامس - سهرات فاخرة في المهندسين والمعادي"
    },
    {
      url: "/images/nightclubegypt.com (8).jpg",
      title: "حفلات استثنائية",
      description: "ليالي ترفيهية لا تُنسى",
      altText: "حفلات استثنائية في نايت كلوب القاهرة - مدينة نصر هليوبوليس مصر الجديدة - أفضل سهرات ليلية في Egypt nightlife"
    },
    {
      url: "/images/nightclubegypt.com (7).jpg",
      title: "عروض حية مذهلة",
      description: "موسيقى وترفيه على أعلى مستوى",
      altText: "عروض حية مذهلة في نايت كلوب مصر - Cairo nightclub entertainment - موسيقى live في أفضل نادي ليلي بالقاهرة والجيزة"
    },
  ];

  // Auto-play functionality only when visible
  useEffect(() => {
    if (!isVisible) return;

    const autoSlide = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Increased to 5 seconds for better UX

    return () => clearInterval(autoSlide);
  }, [images.length, isVisible]);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  if (!mounted) {
    // Avoid SSR/CSR hydration mismatches by rendering a stable placeholder on the server
    return (
      <section ref={galleryRef} className="py-20 relative overflow-hidden" suppressHydrationWarning>
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative h-[70vh] rounded-3xl overflow-hidden glass-dark" />
        </div>
      </section>
    );
  }

  return (
    <section ref={galleryRef} className="py-20 relative overflow-hidden" suppressHydrationWarning>
      {/* Background Elements */}
      {/*<div className="absolute inset-0 bg-gradient-to-b from-black via-nightclub-dark/20 to-black"></div>*/}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-neon">
            <Star className="inline-block w-12 h-12 text-nightclub-gold ml-4" />
            تجربة Night Club Egypt
            <Star className="inline-block w-12 h-12 text-nightclub-gold mr-4" />
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            استمتع بجولة حصرية داخل أفضل نايت كلوب في مصر واكتشف الأجواء المميزة
          </p>
        </motion.div>

        {/* ====== VIDEO PLACEHOLDER START ====== */}
        <VideoSection
          videoUrl="/videos/nightclub-promo.mp4"
          posterUrl="/images/nightclubegypt.com.jpg"
        />
        {/* ====== VIDEO PLACEHOLDER END ====== */}

        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-nightclub-gold">
            لمحات من حفلاتنا السابقة
          </h3>

          {/* Main Gallery */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image Display */}
          <motion.div
            className="relative h-[70vh] rounded-3xl overflow-hidden glass-dark p-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full rounded-2xl overflow-hidden"
              >
                <Image
                  src={images[currentImage].url}
                  alt={images[currentImage].altText}
                  title={`${images[currentImage].title} - Night Club Egypt`}
                  fill
                  priority={currentImage === 0}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Content */}
                <div className="absolute right-8 text-right">
                  <motion.h3
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold mb-2 text-nightclub-gold"
                  >
                    {images[currentImage].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-300"
                  >
                    {images[currentImage].description}
                  </motion.p>
                </div>

                {/* Play Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
          </motion.div>

          {/* Thumbnail Strip */}
          <div className="flex justify-center gap-4 mt-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-24 h-24 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  currentImage === index
                    ? "ring-4 ring-nightclub-gold animate-glow"
                    : "ring-2 ring-white/20 hover:ring-nightclub-purple"
                }`}
                onClick={() => setCurrentImage(index)}
              >
                <Image
                  src={image.url}
                  alt={`معاينة صغيرة - ${image.altText}`}
                  title={`${image.title} - معاينة`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="96px"
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className={`absolute inset-0 transition-all duration-300 ${
                  currentImage === index ? "bg-transparent" : "bg-black/50"
                }`}></div>
              </motion.div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentImage === index
                    ? "bg-nightclub-gold animate-pulse"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-2xl text-nightclub-gold font-semibold">
            ذكريات لا تُنسى من أجواءنا المميزة
          </p>
          <p className="text-gray-400 mt-2">
            كن جزءاً من التجربة القادمة واصنع ذكرياتك الخاصة
          </p>
        </motion.div>

        {/* Image Schema Structured Data لكل صورة */}
        {images.map((image, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ImageObject",
                "name": `${image.title} - Night Club Egypt`,
                "description": `${image.description} - أفضل نايت كلوب في مصر، خدمة VIP فاخرة في القاهرة والجيزة`,
                "url": `https://www.nightclubegypt.com${image.url}`,
                "contentUrl": `https://www.nightclubegypt.com${image.url}`,
                "thumbnailUrl": `https://www.nightclubegypt.com${image.url}`,
                "width": 1200,
                "height": 800,
                "encodingFormat": "image/jpeg",
                "publisher": {
                  "@type": "Organization",
                  "name": "Night Club Egypt",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.nightclubegypt.com/images/nightclubegyptlogo.jpg"
                  }
                },
                "copyrightHolder": {
                  "@type": "Organization",
                  "name": "Night Club Egypt"
                },
                "license": "https://www.nightclubegypt.com/license",
                "acquireLicensePage": "https://www.nightclubegypt.com/contact",
                "creditText": "Night Club Egypt - أفضل نايت كلوب في مصر",
                "creator": {
                  "@type": "Organization",
                  "name": "Night Club Egypt"
                },
                "keywords": `نايت كلوب القاهرة، ${image.title}، سهرات فاخرة، VIP nightclub Egypt، حفلات ليلية مصر، ترفيه ليلي القاهرة`
              })
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
