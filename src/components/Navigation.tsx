"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Crown,
  Menu,
  X,
  Home,
  Star,
  Calendar,
  DollarSign,
  Phone,
  Music,
  PartyPopper
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "الرئيسية", href: "#home", icon: Home },
    { name: "عن النادي", href: "#about", icon: Star },
    { name: "المعرض", href: "#gallery", icon: Music },
    { name: "البرامج", href: "#programs", icon: Calendar },
    { name: "الباقات", href: "#packages", icon: DollarSign },
    { name: "التواصل", href: "#contact", icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-dark backdrop-blur-xl border-b border-nightclub-purple/30"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-gold animate-glow">
                <img
                  src="images/nightclubegyptlogo.jpg"
                  alt="شعار Night Club Egypt - أفضل نايت كلوب في القاهرة"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-nightclub-gold animate-neon">
                  Night Club Egypt
                </div>
                <div className="text-sm text-gray-300">أفضل نايت كلوب في القاهرة</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  onClick={() => scrollToSection(item.href)}
                  aria-label={`انتقل إلى قسم ${item.name}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:text-nightclub-gold transition-all duration-300 hover:bg-nightclub-purple/20"
                >
                  <item.icon className="w-4 h-4" aria-hidden="true" />
                  <span className="font-medium">{item.name}</span>
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => scrollToSection("#contact")}
                aria-label="احجز الآن في Night Club Egypt - انتقل إلى قسم التواصل"
                className="bg-gradient-gold text-black font-bold px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 animate-pulse-purple"
              >
                احجز الآن
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "إغلاق القائمة الجانبية" : "فتح القائمة الجانبية"}
              aria-expanded={isOpen}
              className="lg:hidden text-white hover:bg-nightclub-purple/20"
            >
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 glass-dark backdrop-blur-xl border-l border-nightclub-purple/30 z-50 lg:hidden"
          >
            <div className="p-6">
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-gold">
                    <img
                      src="images/nightclubegyptlogo.jpg"
                      alt="شعار Night Club Egypt - أفضل نايت كلوب في القاهرة"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-nightclub-gold">
                      Night Club Egypt
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="إغلاق القائمة الجانبية"
                  className="text-white"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </Button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    onClick={() => scrollToSection(item.href)}
                    aria-label={`انتقل إلى قسم ${item.name}`}
                    className="flex items-center gap-4 w-full p-4 rounded-xl text-white hover:text-nightclub-gold transition-all duration-300 hover:bg-nightclub-purple/20 text-right"
                  >
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                    <span className="font-medium text-lg">{item.name}</span>
                  </motion.button>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Button
                  onClick={() => scrollToSection("#contact")}
                  aria-label="احجز الآن في Night Club Egypt مع خصم خاص - انتقل إلى قسم التواصل"
                  className="w-full bg-gradient-gold text-black font-bold py-4 rounded-xl text-lg hover:scale-105 transition-all duration-300"
                >
                  احجز الآن مع خصم خاص
                </Button>
              </motion.div>

              {/* Mobile Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 p-4 rounded-xl glass border border-nightclub-purple/30"
              >
                <p className="text-gray-300 text-center text-sm mb-2">
                  اتصل بنا الآن
                </p>
                <p className="text-nightclub-gold font-bold text-center">
                  01286110562
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
