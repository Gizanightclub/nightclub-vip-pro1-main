"use client";
// باقي الكود...

import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Users,
  Shield,
  Star,
  Award,
  Heart,
  Sparkles,
  Trophy,
  CheckCircle
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "أكثر من 5000 عميل سعيد",
      description: "اختاروا خدماتنا المميزة وعاشوا تجربة لا تُنسى",
      color: "text-nightclub-gold"
    },
    {
      icon: Award,
      title: "فريق محترف متخصص",
      description: "في تقديم أفضل الخدمات والترفيه على أعلى مستوى",
      color: "text-nightclub-purple"
    },
    {
      icon: Shield,
      title: "ضمان الجودة والأمان",
      description: "بيئة آمنة ومريحة مع خصوصية تامة لجميع العملاء",
      color: "text-green-400"
    }
  ];

  const stats = [
    { number: "5000+", label: "عميل سعيد", icon: Heart },
    { number: "100+", label: "حفلة مميزة", icon: Star },
    { number: "50+", label: "نجم شهير", icon: Trophy },
    { number: "24/7", label: "خدمة العملاء", icon: CheckCircle }
  ];

    return (
    <section className="py-20 relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nightclub-primary/5 via-transparent to-nightclub-primary/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="glass-dark px-6 py-2 text-lg border-nightclub-gold/50 mb-6 animate-glow">
            <Sparkles className="w-5 h-5 ml-2" />
            مرحباً بك في عائلتنا
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            أهلاً وسهلاً بك في <span className="text-nightclub-gold animate-neon">NIGHT CLUB VIP</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لنقدم لك تجربة استثنائية لا تُنسى في أجواء من الفخامة والأناقة.
            انضم إلى آلاف العملاء الذين اختاروا الأفضل واستمتعوا بليالي مميزة معنا.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <Card className="glass-dark border-nightclub-gold/30 h-full card-3d group-hover:border-nightclub-gold/50 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nightclub-gold/20 mb-6">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <Card className="glass-dark border-nightclub-purple/30 card-3d">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <stat.icon className="w-8 h-8 text-nightclub-gold mx-auto animate-float" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-nightclub-gold mb-2 animate-neon">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
