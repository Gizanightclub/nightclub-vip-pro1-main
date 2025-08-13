"use client";

// Importing utility function to concatenate class names
// باقي الكود...

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";
import Image from "next/image";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: "/images/nightclubegypt.com (10).jpg",
      title: "مشريب فاخره",
      description: "أمسية لا تُنسى مع أشهر المطربين"
    },
    {
      url: "/images/nightclubegypt.com (3).jpg",
      title: "أجواء VIP فاخرة",
      description: "تجربة حصرية مع خدمة متميزة"
    },
    {
      url: "/images/nightclubegypt.com (4).jpg",
      title: "ليلة لا تُنسى",
      description: "أجواء ساحرة ومميزة"
    },
    {
      url: "/images/nightclubegypt.com (7).jpg",
      title: "حفلات راقصة مميزة",
      description: "استمتع بأجمل الليالي"
    },
    {
      url: "/images/nightclubegypt.com (5).jpg",
      title: "حفلات راقصة مميزة",
      description: "استمتع بأجمل الليالي"
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(autoSlide);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 relative overflow-hidden">
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
            حفلاتنا السابقة
            <Star className="inline-block w-12 h-12 text-nightclub-gold mr-4" />
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            استكشف أجمل اللحظات من حفلاتنا المميزة وكن جزءاً من التجربة القادمة
          </p>
        </motion.div>

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
                  alt={images[currentImage].title}
                  fill
                  className="object-cover"
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
                  alt={image.title}
                  fill
                  className="object-cover"
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
      </div>
    </section>
  );
};

export default Gallery;
