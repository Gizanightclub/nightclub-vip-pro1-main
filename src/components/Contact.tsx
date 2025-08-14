"use client";

// Importing utility function to concatenate class names
// باقي الكود...

import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Clock,
  MapPin,
  Mail,
  Headphones
} from "lucide-react";
import Image from "next/image";

const Contact = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/201286110562?text=🔥 مرحباً، أريد معرفة تفاصيل العروض والحجز للنايت كلوب. من فضلك أرسل لي التفاصيل الكاملة.",
      gradient: "bg-gradient-to-r from-green-500 to-green-600",
      hoverColor: "hover:shadow-green-500/30"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/15gfvwAhXx/?mibextid=wwXIfr",
      gradient: "bg-gradient-to-r from-blue-600 to-blue-700",
      hoverColor: "hover:shadow-blue-500/30"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/night_club_5star",
      gradient: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
      hoverColor: "hover:shadow-pink-500/30"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا الآن",
      description: "01286110562",
      color: "text-nightclub-gold"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      description: "يومياً من 8:00 مساءً - 6:00 صباحاً",
      color: "text-nightclub-purple"
    },
    {
      icon: MapPin,
      title: "الموقع",
      description: "نايل كورنيش، أجوزا، شارع النيل",
      color: "text-green-400"
    },
    {
      icon: Headphones,
      title: "خدمة العملاء",
      description: "متاحة 24/7 للاستفسارات",
      color: "text-blue-400"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nightclub-dark/0 via-black to-nightclub-dark/0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="glass-dark px-6 py-2 text-lg border-nightclub-purple/50 mb-6 animate-glow">
            <Phone className="w-5 h-5 ml-2" />
            تواصل معنا
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-nightclub-gold animate-neon">يمكنك التواصل معنا</span> 📞
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            فريقنا متاح على مدار الساعة لمساعدتك في الحجز والإجابة على جميع استفساراتك
          </p>
        </motion.div>

        {/* Social Media Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`تواصل معنا عبر ${social.name} - Night Club Egypt`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-4 px-8 py-4 rounded-2xl ${social.gradient} text-white font-bold text-lg shadow-2xl ${social.hoverColor} transition-all duration-300 animate-glow`}
            >
              <social.icon className="w-8 h-8" aria-hidden="true" />
              <span>{social.name}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="glass-dark border-nightclub-purple/30 card-3d h-full">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-2xl bg-black/30 mb-4 ${info.color} animate-float`}>
                    <info.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-nightclub-gold">
                    {info.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="glass-dark border-nightclub-gold/50 animate-glow">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold text-nightclub-gold mb-6 animate-neon">
                🎉 احجز الآن واستمتع بالعرض الخاص!
              </h3>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Contact Message */}
                <div className="text-right">
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    احجز من الموقع واحصل على خصم إضافي مع كود خصم خاص!
                    <br />
                    💫 العرض محدود - لا تفوت الفرصة!
                  </p>

                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg py-6 rounded-xl hover:scale-105 transition-all duration-300 animate-pulse-purple"
                      onClick={() => window.open("https://wa.me/201286110562?text=🔥 مرحباً، أريد معرفة تفاصيل العروض والحجز للنايت كلوب. من فضلك أرسل لي التفاصيل الكاملة.", "_blank")}
                      aria-label="احجز عبر WhatsApp - فتح محادثة جديدة مع Night Club Egypt للحجز والاستفسار"
                    >
                      <MessageCircle className="w-6 h-6 ml-2" aria-hidden="true" />
                      احجز عبر WhatsApp الآن
                    </Button>

                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full glass-dark border-nightclub-purple/50 text-lg py-6 rounded-xl hover:bg-nightclub-purple/20"
                      onClick={() => window.open("tel:01286110562", "_self")}
                      aria-label="اتصل الآن برقم 01286110562 للحجز المباشر في Night Club Egypt"
                    >
                      <Phone className="w-6 h-6 ml-2" aria-hidden="true" />
                      اتصل الآن: 01286110562
                    </Button>
                  </div>
                </div>

                {/* Right Side - Special Offer */}
                <div className="text-center">
                  <div className="relative">
                    <Card className="glass-dark border-nightclub-gold/30 p-6 animate-float">
                      <h4 className="text-2xl font-bold text-nightclub-gold mb-4">
                        عرض خاص لفترة محدودة!
                      </h4>
                      <div className="text-6xl font-bold text-nightclub-gold mb-2 animate-neon">
                        20%
                      </div>
                      <p className="text-lg text-gray-300 mb-4">خصم على جميع الباقات</p>
                      <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold px-4 py-2 animate-bounce">
                        متبقي عدد محدود!
                      </Badge>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Bottom Message */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 pt-6 border-t border-nightclub-purple/30"
              >
                <p className="text-gray-400 text-lg">
                  📍 احجز من الموقع واحصل على خصم إضافي مع كود خصم خاص!
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
