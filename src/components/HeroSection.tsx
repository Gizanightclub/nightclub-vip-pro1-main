"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Sparkles, Music, Users, Crown, Phone } from "lucide-react";

const HeroSection = () => {
  const [particles, setParticles] = useState<
    Array<{ left: string; top: string; delay: string }>
  >([]);

  // عداد تنازلي
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    total: Infinity,
  });

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const getNextYear = () => {
      const now = new Date();
      const nextYear = now.getFullYear() + 1;
      return new Date(nextYear, 0, 1, 0, 0, 0); // Jan 1 nextYear 00:00:00
    };

    const target = getNextYear();

    const update = () => {
      const now = new Date().getTime();
      const diff = target.getTime() - now;

      if (diff <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
          total: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const pad = (n: number) => String(n).padStart(2, "0");

      setTimeLeft({
        days: pad(days),
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
        total: diff,
      });
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCall = () => {
    window.location.href = "tel:+201055599706";
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "مرحباً، أود معرفة تفاصيل الحجز والأسعار في أفضل نايت كلوب مصر 🌟"
    );
    window.location.href = `https://wa.me/201055599706?text=${message}`;
  };

  const upcomingYear = new Date().getFullYear() + 1;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* خلفية متحركة */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="absolute inset-0">
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

      {/* المحتوى */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* النصوص */}
          <div className="text-center mt-5 lg:mt-0 lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5"
            >
              <Badge className="bg-black/50 lg:px-6 lg:py-2 py-2 px-4 lg:text-lg text-md border border-purple-500/50 text-purple-300">
                <Crown className="w-5 h-5 ml-2 text-sky-300 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
                تانجو اجمل سهرات
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-4 text-white"
            >
              <span className="text-yellow-400 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-yellow-400 sm:to-yellow-600">
                أفضل نايت كلوب في مصر
              </span>{" "}
              <span className="text-yellow-400">VIP</span>
            </motion.h1>

            {/* تهنئة السنة الجديدة + عد تنازلي */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mb-4"
            >
              <div className="inline-block bg-sky-400/10 border border-sky-400/30 text-sky-200 rounded-xl px-4 py-2 backdrop-blur-md shadow-[0_0_30px_rgba(56,189,248,0.15)]">
    <div className="text-xs text-right">سنة جديدة سعيدة {upcomingYear} 🎉</div>
    <div className="mt-2 flex gap-2 justify-end">
        {[
            { label: "أيام", value: timeLeft.days },
            { label: "ساعات", value: timeLeft.hours },
            { label: "دقائق", value: timeLeft.minutes },
            { label: "ثواني", value: timeLeft.seconds },
        ].map((item, i) => (
            <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="min-w-[50px] rounded-xl bg-black/40 border border-sky-400/30 px-2 py-1 text-center shadow-md"
            >
                <div className="text-lg font-extrabold text-sky-300 drop-shadow-md">
                    {item.value}
                </div>
                <div className="text-xs text-sky-100 mt-1">{item.label}</div>
            </motion.div>
        ))}
    </div>
</div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg mb-15 text-gray-300 leading-relaxed"
            >
                 أفضل شركة حجز في مصر! 🔥
                 <br />
                  نحن نوفّر لك أفضل السهرات 🎉
              <br />
               الحفلات، والفعاليات بكل سهولة وأمان.
              <br />
             احجز الآن واستمتع بعروضنا الخاصة لعام 2026!✨
              <br />
             تواصل معنا عبر واتساب واحجز مكانك فورًا 📲
              <br />
              <a
                href="tel:+201286110562"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                01286110562
              </a>
            </motion.p>

            {/* الأزرار */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg px-6 py-5 rounded-full hover:scale-105 transition-all duration-300"
              >
                احجز الآن مع خصومات تبدأ من 25%
              </Button>

              <div className="flex gap-4 justify-center w-full sm:w-auto">
                <Button
                  onClick={handleCall}
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg px-6 py-5 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
                >
                
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل الآن
                </Button>

                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg px-6 py-5 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <FaWhatsapp className="w-5 h-5 ml-2" />
                  واتساب
                </Button>
              </div>
            </motion.div>
          </div>

          {/* قسم المميزات (ظاهر في الموبايل والكمبيوتر) */}
          <div className="space-y-8 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Music, text: "بروجرام", bg: "bg-black/30" },
                { icon: Users, text: "5000+ عميل", bg: "bg-black/30" },
                { icon: Sparkles, text: "سهرات جليجي", bg: "bg-black/30" },
                { icon: Crown, text: "طاولات VIP", bg: "bg-black/30" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl ${feature.bg} border border-gray-800/60`}
                >
                  <feature.icon className="w-8 h-8 mb-2 text-white" />
                  <span className="text-white text-sm md:text-base text-center">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;