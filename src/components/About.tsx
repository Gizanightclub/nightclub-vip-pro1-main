"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Star, Award, Heart, Sparkles, Trophy, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const features = [
    {
      icon: Users,
      title: "أكثر من 5000 عميل اسبوعيا",
      description: "اختاروا خدماتنا المميزة وعاشوا تجربة لا تُنسى",
    },
    {
      icon: Award,
      title: "فريق محترف متخصص",
      description: "في تقديم أفضل الخدمات والترفيه على أعلى مستوى",
    },
    {
      icon: Shield,
      title: "ضمان الجودة والأمان",
      description: "بيئة آمنة ومريحة مع خصوصية تامة لجميع العملاء",
    }
  ];

  // const stats = [
  //   { number: "5000+", label: "عميل سعيد", icon: Heart },
  //   { number: "100+", label: "حفلة مميزة", icon: Star },
  //   { number: "50+", label: "نجم شهير", icon: Trophy },
  //   { number: "24/7", label: "خدمة العملاء", icon: CheckCircle }
  // ];

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden bg-black mt-4">
      {/* الخلفية المتحركة */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="container max-w-7xl mx-auto py-20 relative z-10 flex flex-col items-center justify-center">
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl px-4"
        >
          <Badge className="bg-black/50 px-6 py-2 text-lg border border-purple-500/50 text-purple-300 mb-6">
            <Sparkles className="w-5 h-5 ml-2 text-yellow-400" />
            مرحباً بك في افضل نايت كلوب
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-yellow-400 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-yellow-400 sm:to-yellow-600">NIGHT CLUB</span> 
            <span className="block text-yellow-400">ارخص نايت كلوب</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
           نقدم لكم افضل السهرات و افضل البروجرام يومي و افضل النجوم الطرب الشعبي و افضل الرقصات مع اجواء سحره
          </p>
        </motion.div>

        {/* المميزات الرئيسية */}
        <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-3"} gap-8 mb-20 w-full max-w-6xl px-4`}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="w-full"
            >
              <Card className="bg-black/50 border border-purple-500/30 h-full">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-900/50 to-yellow-600/20 mb-6 text-yellow-400">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* الإحصائيات (للأجهزة الكبيرة فقط)
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-4 gap-6 w-full max-w-5xl"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-black/50 p-6 rounded-xl border border-purple-500/30 text-center"
              >
                <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-purple-900/50 to-yellow-600/20 mb-4 text-yellow-400">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )} */}
      </div>
    </section>
  );
};

export default About;
