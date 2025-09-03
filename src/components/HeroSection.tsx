"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Sparkles, Music, Users, Crown, Phone, } from "lucide-react";

const HeroSection = () => {
  const [particles, setParticles] = useState<
    Array<{ left: string; top: string; delay: string }>
  >([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }));
    setParticles(newParticles);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCall = () => {
    console.log('📞 إجراء مكالمة إلى: 201286110562');
    window.location.href = "tel:+201286110562";
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("مرحباً، أود معرفة تفاصيل الحجز والأسعار في أفضل نايت كلوب مصر 🌟");
    console.log('📱 فتح واتساب من الصفحة الرئيسية');
    window.location.href = `https://wa.me/201286110562?text=${message}`;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      role="banner"
      aria-label="قسم الصفحة الرئيسية لنايت كلوب"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" aria-hidden="true">
        {/* Floating Particles */}
        <div className="absolute inset-0" aria-hidden="true">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full animate-sparkle"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center mt-5 lg:mt-0 lg:text-right">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5"
            >
              <Badge
                className="bg-black/50 lg:px-6 lg:py-2 py-2 px-4 lg:text-lg text-md border border-purple-500/50 text-purple-300"
                role="img"
                aria-label="شارة نايت كلوب "
              >
                <Crown className="w-5 h-5 ml-2 text-yellow-400" aria-hidden="true" />
                 افضل نايت كلوب في مصر  
              </Badge>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-4 text-white"
              id="main-title"
            >
              <span className="text-yellow-400 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-yellow-400 sm:to-yellow-600">
                أفضل نايت كلوب في مصر
              </span>{" "}
              <span className="text-yellow-400">VIP</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg mb-6 text-gray-300 leading-relaxed"
              role="text"
              aria-describedby="main-title"
            >
              عاوز تسهر في أفضل السهرات الخليجي في مستوى مصر؟ مستني إيه احجز دلوقتي
              <br />
              حفلات خليجي • برنامج كل يوم • خصومات كل يوم
              <br />
              <a
                href="tel:+201286110562"
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black rounded"
                aria-label="اتصل برقم 01286110562"
              >
                01286110562
              </a>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg px-6 py-5 rounded-full hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="احجز الآن مع خصومات تبدأ من 25 بالمائة"
              >
                احجز الآن مع خصومات تبدأ من 25%
              </Button>

              <div className="flex gap-2">
                <Button
                  onClick={handleCall}
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold border-0 hover:from-blue-600 hover:to-blue-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black shadow-lg"
                  aria-label="اتصل الآن لتفاصيل الحجز"
                >
                  <Phone className="w-5 h-5 ml-2" aria-hidden="true" />
                  اتصل الآن
                </Button>

               <Button
  onClick={handleWhatsApp}
  size="lg"
  className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold border-0 hover:from-green-600 hover:to-green-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black shadow-lg"
  aria-label="تواصل عبر واتساب"
>
  <FaWhatsapp className="w-5 h-5 ml-2" aria-hidden="true" />
  واتساب
</Button>

              </div>
            </motion.div>
          </div>

          {/* Right Column - Features & Social Proof */}
          {!isMobile && (
            <div className="space-y-8" role="complementary" aria-label="مميزات النايت كلوب">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 gap-4"
                role="list"
                aria-label="قائمة مميزات النايت كلوب"
              >
                {[
                  { icon: Music, text: "موسيقى حية", bg: "bg-purple-500/10", aria: "موسيقى حية وعروض مباشرة" },
                  { icon: Users, text: "5000+ عميل", bg: "bg-yellow-400/10", aria: "أكثر من 5000 عميل سعيد" },
                  { icon: Sparkles, text: "أجواء فاخرة", bg: "bg-purple-500/10", aria: "أجواء فاخرة ومميزة" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileFocus={{ scale: 1.05 }}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl ${feature.bg} border border-purple-500/30 h-full cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black`}
                    role="listitem"
                    tabIndex={0}
                    aria-label={feature.aria}
                  >
                    <feature.icon className="w-8 h-8 mb-2 text-yellow-400" aria-hidden="true" />
                    <span className="text-white text-sm md:text-base text-center">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileFocus={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 p-4 rounded-xl border border-yellow-400/30 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
                  role="listitem"
                  tabIndex={0}
                  aria-label="طاولات VIP حصرية مع خدمة متميزة"
                >
                  <Crown className="w-8 h-8 mb-2 text-yellow-400" aria-hidden="true" />
                  <span className="text-white text-sm md:text-base text-center">
                    طاولات VIP
                  </span>
                </motion.div>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-black/50 p-6 rounded-xl border border-purple-500/30"
                role="region"
                aria-labelledby="social-proof-title"
              >
                <h3
                  id="social-proof-title"
                  className="text-yellow-400 text-lg font-bold mb-4 text-center"
                >
                  يثق بنا الآلاف
                </h3>
                <div className="grid grid-cols-3 gap-4" role="list" aria-label="إحصائيات النايت كلوب">
                  <div className="text-center" role="listitem">
                    <div className="text-2xl font-bold text-yellow-400" aria-label="5000 عميل سعيد">
                      5000+
                    </div>
                    <div className="text-gray-300 text-sm">عميل سعيد</div>
                  </div>
                  <div className="text-center" role="listitem">
                    <div className="text-2xl font-bold text-yellow-400" aria-label="100 حفلة نجحت">
                      100+
                    </div>
                    <div className="text-gray-300 text-sm">حفلة</div>
                  </div>
                  <div className="text-center" role="listitem">
                    <div className="text-2xl font-bold text-yellow-400" aria-label="خدمة عملاء 24 ساعة طوال الأسبوع">
                      24/7
                    </div>
                    <div className="text-gray-300 text-sm">خدمة عملاء</div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>

        {/* Mobile Version - Features & Social Proof */}
        {isMobile && (
          <div className="mt-12 space-y-8" role="complementary" aria-label="مميزات النايت كلوب للموبايل">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
              role="list"
              aria-label="قائمة مميزات النايت كلوب"
            >
              {[
                { icon: Music, text: "موسيقى حية", bg: "bg-purple-500/10", aria: "موسيقى حية وعروض مباشرة" },
                { icon: Users, text: "5000+ عميل", bg: "bg-yellow-400/10", aria: "أكثر من 5000 عميل سعيد" },
                { icon: Sparkles, text: "أجواء فاخرة", bg: "bg-purple-500/10", aria: "أجواء فاخرة ومميزة" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileFocus={{ scale: 1.05 }}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl ${feature.bg} border border-purple-500/30 h-full cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black`}
                  role="listitem"
                  tabIndex={0}
                  aria-label={feature.aria}
                >
                  <feature.icon className="w-8 h-8 mb-2 text-yellow-400" aria-hidden="true" />
                  <span className="text-white text-sm md:text-base text-center">
                    {feature.text}
                  </span>
                </motion.div>
              ))}

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
                className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 p-4 rounded-xl border border-yellow-400/30 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
                role="listitem"
                tabIndex={0}
                aria-label="طاولات VIP حصرية مع خدمة متميزة"
              >
                <Crown className="w-8 h-8 mb-2 text-yellow-400" aria-hidden="true" />
                <span className="text-white text-sm md:text-base text-center">
                  طاولات VIP
                </span>
              </motion.div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-black/50 p-6 rounded-xl border border-purple-500/30"
              role="region"
              aria-labelledby="social-proof-title-mobile"
            >
              <h3
                id="social-proof-title-mobile"
                className="text-yellow-400 text-lg font-bold mb-4 text-center"
              >
                يثق بنا الآلاف
              </h3>
              <div className="grid grid-cols-3 gap-4" role="list" aria-label="إحصائيات النايت كلوب">
                <div className="text-center" role="listitem">
                  <div className="text-2xl font-bold text-yellow-400" aria-label="5000 عميل سعيد">
                    5000+
                  </div>
                  <div className="text-gray-300 text-sm">عميل سعيد</div>
                </div>
                <div className="text-center" role="listitem">
                  <div className="text-2xl font-bold text-yellow-400" aria-label="100 حفلة نجحت">
                    100+
                  </div>
                  <div className="text-gray-300 text-sm">حفلة</div>
                </div>
                <div className="text-center" role="listitem">
                  <div className="text-2xl font-bold text-yellow-400" aria-label="خدمة عملاء 24 ساعة طوال الأسبوع">
                    24/7
                  </div>
                  <div className="text-gray-300 text-sm">خدمة عملاء</div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
