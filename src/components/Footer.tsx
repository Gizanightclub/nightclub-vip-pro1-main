"use client";

import { motion, stagger, useAnimate } from "framer-motion";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp, FaTiktok } from "react-icons/fa"; // 👈 واتساب + تيك توك
import Image from "next/image";
import { useEffect } from "react";

export default function Footer() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".footer-item",
      { opacity: [0, 1], y: [20, 0] },
      { delay: stagger(0.1, { startDelay: 0.3 }), duration: 0.5 }
    );
  }, [animate]);

  return (
    <motion.footer
      ref={scope}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-black/90 backdrop-blur-xl border-t border-purple-500/30 py-12 px-4 sm:px-6"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-10">
          {/* Brand & Social */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-fuchsia-500 bg-white/10 p-1 shadow-lg">
                <Image
                  src="/logo.png"
                  alt="Night Party Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="text-right hidden sm:block">
                <div className="text-[20px] font-bold text-yellow-400 drop-shadow-md">
                  Night Party
                </div>
                <div className="text-[13px] text-white">اجمل سهرات خليجي</div>
              </div>
            </motion.div>

            <motion.p
              className="footer-item text-white text-sm text-center md:text-left transition-colors hover:text-yellow-400"
              whileHover={{ x: 5 }}
            >
              افضل سهرات خليحي مع افضل الحفلات في مصر
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="footer-item flex gap-4 md:gap-5"
              whileHover={{ scale: 1.05 }}
            >
              <motion.a
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-blue-400 transition-colors"
                href="https://www.facebook.com/p/%D9%83%D8%A8%D8%A7%D8%B1%D9%8A%D9%87-%D8%A7%D9%84%D8%B9%D8%AC%D9%88%D8%B2%D9%87-Night-Club-61569297924042/?locale=ar_AR"
                target="_blank"
                rel="noopener noreferrer"
                title="كباريه العجوزة - Night Club على Facebook"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-pink-400 transition-colors"
                href="https://www.instagram.com/night_club_5star/"
                target="_blank"
                rel="noopener noreferrer"
                title="Night Club 5 Star على Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-purple-400 transition-colors"
                href="https://www.tiktok.com/@nightclubegypt"
                target="_blank"
                rel="noopener noreferrer"
                title="Night Club Egypt على TikTok"
              >
                <FaTiktok className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-gray-400 transition-colors"
                href="https://www.snapchat.com/@nightclub2029"
                target="_blank"
                rel="noopener noreferrer"
                title="Night Club على Snapchat"
              >
                <span className="relative w-5 h-5 flex items-center justify-center font-bold text-xs">👻</span>
              </motion.a>

              {/* واتساب */}
              <motion.a
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-green-400 transition-colors"
                href="https://wa.me/201286110562"
                target="_blank"
                rel="noopener noreferrer"
                title="احجز الآن عبر WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </motion.a>

              {/* Facebook 2 */}
              <motion.a
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-blue-500 transition-colors"
                href="https://www.facebook.com/nightclubegypt/?locale=ar_AR"
                target="_blank"
                rel="noopener noreferrer"
                title="Night Club Egypt على Facebook"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6">
            <motion.h4 className="footer-item text-yellow-400 font-bold text-lg">
              تواصل معنا
            </motion.h4>
            <div className="space-y-2 md:space-y-3 text-sm text-center md:text-left">
              <motion.div className="footer-item flex items-center gap-2 text-white hover:text-yellow-400">
                <MapPin className="w-4 h-4" />
                <span>شارع الهرم، الجيزة، القاهرة</span>
              </motion.div>
              <motion.a
                className="footer-item flex items-center gap-2 text-white hover:text-yellow-400"
                href="tel:+201286110562"
              >
                <Phone className="w-4 h-4" />
                <span>+201286110562</span>
              </motion.a>
              <motion.a
                className="footer-item flex items-center gap-2 text-white hover:text-yellow-400"
                href="mailto:nightclub2026@gmail.com"
              >
                <Mail className="w-4 h-4" />
                <span>nightclub2026@gmail.com</span>
              </motion.a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6">
            <motion.h4 className="footer-item text-yellow-400 font-bold text-lg">
              مواعيد العمل
            </motion.h4>
            <div className="text-sm space-y-2 md:space-y-3 text-center md:text-left">
              <motion.p className="footer-item text-white">9PM - 4AM</motion.p>
              <motion.p className="footer-item text-white">
                الجمعة - السبت: 9PM - 6AM
              </motion.p>
              <motion.p className="footer-item text-yellow-400/80">
                حفلات خاصة 24/7
              </motion.p>
            </div>
          </div>
        </div>
            
        {/* Copyright */}
        <motion.div className="footer-item pt-6 md:pt-8 border-t border-purple-500/20 text-center">
          <p className="text-white text-sm hover:text-yellow-400">
            © {new Date().getFullYear()} Night Club VIP. جميع الحقوق محفوظة.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
