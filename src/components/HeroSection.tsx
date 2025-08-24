"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Sparkles, Music, Users, Crown } from "lucide-react";

const HeroSection = () => {
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: string}>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate particles on client side to avoid hydration mismatch
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background inherits global unified background; keep only minimal particles if needed */}
      <div className="absolute inset-0">
        {/* Floating Particles - Only render on client */}
        {mounted && (
          <div className="absolute inset-0">
            {particles.map((particle, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-nightclub-purple rounded-full animate-sparkle"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Badge className="glass-dark px-6 py-2 text-lg border-nightclub-purple/50 animate-glow">
            <Crown className="w-5 h-5 ml-2 text-nightclub-gold" />

          </Badge>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 animate-neon"
        >
          Night Club
          <span className="block text-nightclub-gold">VIP</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          🔥 <span className="text-nightclub-gold font-bold">عايز تعيش أجمد سهرة في حياتك؟</span>
          <br />
          إحنا هنا عشان نخليك تحس إنك ملك المكان!
          <br />
          <span className="text-nightclub-gold">📍 القاهرة • الجيزة • العجوزة • الشيخ زايد • التجمع الخامس</span>
          <br />
          🎉 حفلات مش هتلاقيها في أي حتة تانية • موسيقى عالمية • خدمة VIP ملكية 👑
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { icon: Music, text: "موسيقى حية", ariaLabel: "موسيقى حية وعروض فنية مميزة في Night Club Egypt" },
            { icon: Users, text: "أكثر من 5000 عميل سعيد", ariaLabel: "أكثر من 5000 عميل سعيد في جميع أنحاء مصر" },
            { icon: Sparkles, text: "أجواء فاخرة", ariaLabel: "أجواء فاخرة وخدمة VIP استثنائية في أفضل المواقع" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 glass-dark px-6 py-3 rounded-full animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
              role="img"
              aria-label={feature.ariaLabel}
            >
              <feature.icon className="w-5 h-5 text-nightclub-gold" aria-hidden="true" />
              <span className="text-lg">{feature.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => {
              const packagesSection = document.getElementById('packages');
              if (packagesSection) {
                packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            aria-label="احجز الآن في Night Club Egypt مع خصم 20% - أفضل نايت كلوب في القاهرة والجيزة وجميع محافظات مصر"
                            className="bg-gradient-gold text-black font-bold text-xl px-12 py-6 rounded-full hover:scale-105 transition-all duration-285 animate-pulse-purple"
          >
            احجز الآن مع خصم 20%
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const packagesSection = document.getElementById('packages');
              if (packagesSection) {
                packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            aria-label="استكشف العروض المتاحة في Night Club Egypt - حفلات VIP وخدمات متميزة في أفضل المواقع السياحية"
            className="glass-dark border-nightclub-purple/50 text-xl px-8 py-6 rounded-full hover:bg-nightclub-purple/20"
          >
            استكشف العروض
          </Button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-lg mb-4">يثق بنا الآلاف من العملاء في جميع أنحاء مصر</p>
          <div className="flex justify-center gap-8 items-center flex-wrap">
            <div className="text-center" role="img" aria-label="أكثر من 5000 عميل سعيد في Night Club Egypt">
              <div className="text-3xl font-bold text-nightclub-gold">5000+</div>
              <div className="text-gray-400">عميل سعيد</div>
            </div>
            <div className="text-center" role="img" aria-label="أكثر من 100 حفلة مميزة نظمها Night Club Egypt">
              <div className="text-3xl font-bold text-nightclub-gold">100+</div>
              <div className="text-gray-400">حفلة مميزة</div>
            </div>
            <div className="text-center" role="img" aria-label="خدمة عملاء متاحة 24 ساعة طوال أيام الأسبوع">
              <div className="text-3xl font-bold text-nightclub-gold">24/7</div>
              <div className="text-gray-400">خدمة العملاء</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-nightclub-purple rounded-full flex justify-center">
          <div className="w-1 h-3 bg-nightclub-purple rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
