"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Star,
  Music,
  Mic,
  PartyPopper,
  Calendar,
  Sparkles,
  Flame,
  Award,
  Heart,
} from "lucide-react";
import { useEffect, useState } from "react";

const Programs = () => {
  const weekPrograms = [
    {
      icon: Star,
      title: "ألمع النجوم",
      description: "عروض حية مع أشهر المطربين والفنانين في أجواء استثنائية",
      iconColor: "text-yellow-400",
      bgColor: "bg-gradient-to-br from-yellow-600/20 to-yellow-800/10",
    },
    {
      icon: Music,
      title: "الطرب الشعبي الأصيل",
      description: "أمسيات طربية أصيلة مع أجمل الأغاني الشعبية والتراثية",
      iconColor: "text-purple-400",
      bgColor: "bg-gradient-to-br from-purple-600/20 to-purple-800/10",
    },
    {
      icon: Flame,
      title: "العروض الحارقة",
      description: "أقوى العروض الغنائية والاستعراضية مع فرق عالمية",
      iconColor: "text-red-400",
      bgColor: "bg-gradient-to-br from-red-600/20 to-red-800/10",
    },
    {
      icon: Heart,
      title: "ليالي الحب والغرام",
      description: "أجمل الأغاني الرومانسية التي تلامس القلب",
      iconColor: "text-pink-400",
      bgColor: "bg-gradient-to-br from-pink-600/20 to-pink-800/10",
    },
  ];

  const schedule = [
    {
      time: "8:00 م",
      title: "افتتاح الأمسية",
      icon: PartyPopper,
      description: "استقبال الضيوف وبداية الأجواء الرائعة",
      highlight: true,
    },
    {
      time: "9:30 م",
      title: "فقرات ترفيهية",
      icon: Sparkles,
      description: "عروض مسرحية واستعراضات مبهرة",
    },
    {
      time: "10:45 م",
      title: "كواليس الفن",
      icon: Award,
      description: "لقاءات حصرية مع نجوم الفن والإبداع",
    },
    {
      time: "12:30 ص",
      title: "عروض النجوم",
      icon: Star,
      description: "العروض الحية للنجوم والمطربين المشهورين",
      highlight: true,
    },
    {
      time: "1:30 ص",
      title: "الطرب الشعبي",
      icon: Mic,
      description: "أجمل الأغاني الشعبية والتراثية",
    },
    {
      time: "3:00 ص",
      title: "أغاني الزمن الجميل",
      icon: Heart,
      description: "رحلة موسيقية عبر ذاكرة الفن الأصيل",
    },
    {
      time: "6:00 ص",
      title: "ختام مميز",
      icon: Music,
      description: "نهاية لا تُنسى لليلة استثنائية",
      highlight: true,
    },
  ];

  const [particles, setParticles] = useState<
    Array<{ left: string; top: string; delay: string }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section id="programs" className="relative py-24 overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black">
        {/* Floating Particles */}
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

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <Badge className="bg-black/70 px-6 py-2.5 text-lg border border-purple-500/50 text-purple-300 mb-6 hover:bg-purple-900/30 transition-colors">
            <Calendar className="w-5 h-5 ml-2 text-yellow-400 animate-pulse" />
            برنامج هذا الأسبوع
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              برامجنا الحصرية
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            رحلة فنية استثنائية عبر أجمل الألحان وأروع العروض مع نخبة من نجوم
            الوطن العربي
          </p>
        </motion.div>

        {/* برامج الأسبوع */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {weekPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -10 }}
            >
              <Card
                className={`${
                  program.bgColor
                } border border-white/10 h-full backdrop-blur-sm hover:shadow-lg hover:shadow-${
                  program.iconColor.split("text-")[1]
                }/20 transition-all`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center gap-5">
                    <div
                      className={`p-4 rounded-xl ${program.bgColor} border border-white/10 shadow-lg`}
                    >
                      <program.icon
                        className={`w-8 h-8 ${program.iconColor}`}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {program.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                    <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    <button className="text-sm font-medium text-white px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                      عرض التفاصيل
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* الجدول الزمني */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="text-center mb-12">
            <motion.h3
              className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Clock className="w-8 h-8 text-yellow-400 animate-pulse" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                مواعيد العروض اليومية
              </span>
            </motion.h3>
            <motion.p
              className="text-lg text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              جدول حافل بالإثارة والمتعة والفن الأصيل
            </motion.p>
          </div>

          <div className="relative">
            {/* خط الجدول */}
            <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>

            {/* عناصر الجدول */}
            <div className="space-y-8">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="relative"
                >
                  {/* نقطة المؤشر */}
                  <div
                    className={`absolute right-5 w-4 h-4 rounded-full border-4 border-black z-10 ${
                      item.highlight
                        ? "bg-yellow-400 animate-pulse"
                        : "bg-purple-400"
                    }`}
                  ></div>

                  {/* بطاقة المحتوى */}
                  <Card
                    className={`bg-gradient-to-br ${
                      item.highlight
                        ? "from-yellow-900/30 to-yellow-600/10 border-yellow-400/30"
                        : "from-purple-900/20 to-black/50 border-purple-500/20"
                    } border ml-12 backdrop-blur-sm`}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <Badge
                          className={`${
                            item.highlight
                              ? "bg-yellow-400 text-black"
                              : "bg-purple-400 text-white"
                          } font-bold px-4 py-1.5 w-fit shadow-md`}
                        >
                          {item.time}
                        </Badge>
                        <div className="flex items-center gap-3">
                          <item.icon
                            className={`w-6 h-6 ${
                              item.highlight
                                ? "text-yellow-300"
                                : "text-purple-300"
                            }`}
                          />
                          <h4
                            className={`font-bold text-lg ${
                              item.highlight ? "text-yellow-300" : "text-white"
                            }`}
                          >
                            {item.title}
                          </h4>
                        </div>
                      </div>
                      <p
                        className={`mt-3 text-sm ${
                          item.highlight ? "text-yellow-200" : "text-gray-300"
                        } pl-2 border-l-2 ${
                          item.highlight
                            ? "border-yellow-400"
                            : "border-purple-400"
                        }`}
                      >
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* دعوة للعمل */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-purple-900/30 to-black/50 border border-purple-500/30 max-w-2xl mx-auto backdrop-blur-sm hover:shadow-purple-500/20 hover:shadow-xl transition-all">
            <CardContent className="p-10">
              <div className="flex flex-col items-center">
                <div className="p-4 mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-500/30">
                  <Sparkles className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  هل أنت مستعد لليلة لا تُنسى؟
                </h3>
                <p className="text-gray-300 mb-6 text-lg max-w-lg">
                  احجز تذكرتك الآن وكن جزءاً من أروع الأمسيات الفنية مع كبار النجوم
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all">
                  احجز مقعدك الآن
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Programs;
