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
      title: "أكتر من 5000 عميل مبسوط 🔥",
      description: "عاشوا معانا أحلى السهرات وبقوا من العائلة! شوف التقييمات واعرف إحنا إيه",
      color: "text-nightclub-gold"
    },
    {
      icon: Award,
      title: "فريق محترف وخدمة VIP 👑",
      description: "من لحظة دخولك لحد ما تخرج، هتحس إنك ملك المكان! خدمة 5 نجوم على طول",
      color: "text-nightclub-purple"
    },
    {
      icon: Shield,
      title: "أمان وخصوصية 100% 🛡️",
      description: "المكان آمن ومؤمن كامل، وخصوصيتك محفوظة. ارتاح واستمتع براحة بالك",
      color: "text-green-400"
    }
  ];
    return (
    <section className="py-20 relative overflow-hidden">
      {/* Inherit unified background */}
      <div className="absolute inset-0"></div>

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
            أهلاً وسهلاً بك في <span className="text-nightclub-gold animate-neon">نايت كلوب مصر</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <span className="text-nightclub-gold font-bold">عايز تعيش أجمد سهرة في حياتك؟ 🔥 </span>  

           <br/>
            انت في المكان الصح 
            أفضل نايت كلوب في مصر بيستناك عشان تعيش تجربة من نوع تاني خالص.
            <br/>

            🎉 <span className="text-nightclub-gold font-bold">إيه اللي يخليك تختارنا؟</span> 
            <br/>
            احنا مش بس نايت كلوب عادي... احنا مكان بتحصل فيه أجمد السهرات،
            أحلى الموسيقى، وأروع الخدمة VIP اللي هتخليك تحس إنك ملك المكان!
            <br/>
            <span className="text-green-400 font-bold">يلا احجز دلوقتي ومتضيعش الفرصة!</span> 📞
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
              <Card className="glass-dark border-nightclub-gold/30 h-full card-3d group-hover:border-nightclub-gold/50 transition-all duration-285">
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
