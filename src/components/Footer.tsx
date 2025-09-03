"use client";

import { motion, stagger, useAnimate } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
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
        {/* Content Grid - Adjusted for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-10">
          {/* Brand & Social - Centered on mobile */}
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

              {/* اسم الموقع ووصف صغير */}
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
            <motion.div
              className="footer-item flex gap-4 md:gap-5"
              whileHover={{ scale: 1.05 }}
            >
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.2 }}
                  className="text-white hover:text-yellow-400 transition-colors"
                  href="#"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Contact Info - Centered on mobile */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6">
            <motion.h4
              className="footer-item text-yellow-400 font-bold text-lg"
              whileHover={{ scale: 1.05 }}
            >
              تواصل معنا
            </motion.h4>
            <div className="space-y-2 md:space-y-3 text-sm text-center md:text-left">
              <motion.div
                className="footer-item flex items-center gap-2 text-white transition-colors hover:text-yellow-400"
                whileHover={{ x: -5 }}
              >
                <MapPin className="w-4 h-4" />
                <span>شارع الهرم، الجيزة، القاهرة</span>
              </motion.div>
              <motion.a
                className="footer-item flex items-center gap-2 text-white transition-colors hover:text-yellow-400"
                whileHover={{ x: -5 }}
                href="tel:+201286110562"
              >
                <Phone className="w-4 h-4" />
                <span>+201286110562</span>
              </motion.a>
              <motion.a
                className="footer-item flex items-center gap-2 text-white transition-colors hover:text-yellow-400"
                whileHover={{ x: -5 }}
                href="mailto:reserve@nightclubvip.com"
              >
                <Mail className="w-4 h-4" />
                <span>reserve@nightclubvip.com</span>
              </motion.a>
            </div>
          </div>

          {/* Working Hours - Centered on mobile */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6">
            <motion.h4
              className="footer-item text-yellow-400 font-bold text-lg"
              whileHover={{ scale: 1.05 }}
            >
              مواعيد العمل
            </motion.h4>
            <div className="text-sm space-y-2 md:space-y-3 text-center md:text-left">
              <motion.p
                className="footer-item text-white transition-colors hover:text-yellow-400"
                whileHover={{ x: 5 }}
              >
                9PM - 4AM
              </motion.p>
              <motion.p
                className="footer-item text-white transition-colors hover:text-yellow-400"
                whileHover={{ x: 5 }}
              >
                الجمعة - السبت: 9PM - 6AM
              </motion.p>
              <motion.p
                className="footer-item text-yellow-400/80 transition-colors hover:text-yellow-400"
                whileHover={{ x: 5 }}
              >
                حفلات خاصة 24/7
              </motion.p>
            </div>
          </div>
        </div>

        {/* Copyright - Adjusted padding for mobile */}
        <motion.div
          className="footer-item pt-6 md:pt-8 border-t border-purple-500/20 text-center"
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-white text-sm transition-colors hover:text-yellow-400">
            © {new Date().getFullYear()} Night Club VIP. جميع الحقوق محفوظة.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}