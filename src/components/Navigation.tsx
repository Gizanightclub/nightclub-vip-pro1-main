"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Crown,
  Menu,
  X,
  Home,
  Star,
  Video,
  Camera,
  DollarSign,
  Phone,
  Music,
  User,
} from "lucide-react";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const navItems = [
    { name: "الرئيسية", href: "#home", icon: Home, seo: "نايت كلوب أرخص أفضل مصر" },
    { name: "عن النادي", href: "#about", icon: Star, seo: "أفضل كاباريه ديسكو القاهرة" },
    { name: "الفيديوهات", href: "#videos", icon: Video, seo: "فيديوهات نايت كلوب طرب شعبي" },
    { name: "المعرض", href: "#gallery", icon: Camera, seo: "صور نايت كلوب بار" },
    { name: "الباقات", href: "#packages", icon: DollarSign, seo: "أسعار حجز نايت كلوب أرخص" },
    { name: "التواصل", href: "#contact", icon: Phone, seo: "حجز نايت كلوب اتصال" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // تحديد القسم النشط
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // إدارة التنقل بالكيبورد للقائمة المحمولة
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }

      if (e.key === "Tab") {
        const focusableElements = mobileMenuRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[60] bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
      >
        انتقل إلى المحتوى الرئيسي
      </a>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-purple-500/30"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="القائمة الرئيسية للموقع"
      >
        <div className="container mx-auto px-4 lg:px-14">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg p-2 transition-all duration-200"
              onClick={() => scrollToSection("#home")}
              aria-label="العودة إلى الصفحة الرئيسية - أفضل نايت كلوب في مصر"
            >
              {/* لوجو داخل دائرة متجاوبة */}
              <div className="relative lg:left-0 left-110 w-12 h-12 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-fuchsia-500 bg-white/10 p-1 shadow-lg">
                <Image
                  src="/logo.png"
                  alt="لوجو أفضل نايت كلوب في مصر - أرخص كاباريه ديسكو بار"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* اسم الموقع ووصف صغير */}
              <div className="text-right hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold text-yellow-400 drop-shadow-md">
                  Night Club Egypt
                </h1>
                <p className="text-xs sm:text-sm text-white" aria-label="أفضل نايت كلوب في مصر بأرخص الأسعار">
                  أفضل نايت كلوب في مصر - أرخص الأسعار
                </p>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            {!isMobile && (
              <>
                <ul className="hidden lg:flex items-center gap-1" role="menubar" aria-label="قائمة التنقل الرئيسية">
                  {navItems.map((item, index) => (
                    <li key={item.name} role="none">
                      <motion.button
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileFocus={{ scale: 1.05 }}
                        onClick={() => scrollToSection(item.href)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-purple-500/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black ${
                          activeSection === item.href.substring(1) ? 'text-yellow-400 bg-purple-500/10' : ''
                        }`}
                        title={item.seo}
                        aria-label={`انتقل إلى قسم ${item.name}`}
                        aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
                        role="menuitem"
                      >
                        <item.icon className="w-4 h-4" aria-hidden="true" />
                        <span className="font-medium text-sm">{item.name}</span>
                      </motion.button>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="hidden lg:block">
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
                    aria-label="احجز في أفضل نايت كلوب مصر الآن - خصومات حتى 25%"
                  >
                    احجز الآن
                    <User className="w-4 h-4 mr-2" aria-hidden="true" />
                  </Button>
                </div>
              </>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <Button
                ref={menuButtonRef}
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="absolute left-0 ml-4 text-white hover:bg-purple-500/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
                aria-label={isOpen ? "إغلاق القائمة الجانبية" : "فتح القائمة الجانبية"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </Button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-purple-500/30 z-50 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="القائمة الجانبية للتنقل"
            id="mobile-menu"
          >
            <div className="p-6 h-full flex flex-col">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="relative w-12 h-12 rounded-full border-2 border-fuchsia-500 bg-white/10 p-1 shadow-lg">
                  <Image
                    src="/logo.png"
                    alt="لوجو أفضل نايت كلوب في مصر"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-yellow-400">
                    Night Club Egypt
                  </div>
                  <div className="text-sm text-gray-300">أفضل نايت كلوب في مصر</div>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex-1 space-y-2" role="navigation" aria-label="قائمة التنقل للهاتف المحمول">
                <ul role="list" className="space-y-2">
                  {navItems.map((item, index) => (
                    <li key={item.name} role="listitem">
                      <motion.button
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => scrollToSection(item.href)}
                        className={`flex items-center justify-end gap-3 w-full p-4 rounded-lg text-gray-300 hover:text-yellow-400 hover:bg-purple-500/10 transition-all duration-200 text-right focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black ${
                          activeSection === item.href.substring(1) ? 'text-yellow-400 bg-purple-500/10' : ''
                        }`}
                        title={item.seo}
                        aria-label={`انتقل إلى قسم ${item.name}`}
                        aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
                      >
                        <span className="font-medium text-lg">{item.name}</span>
                        <item.icon className="w-5 h-5" aria-hidden="true" />
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto pt-6 border-t border-purple-500/30"
              >
                <Button
                  onClick={() => {
                    scrollToSection("#contact");
                    setIsOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 rounded-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black text-lg"
                  aria-label="احجز في أفضل نايت كلوب مصر - خصومات حتى 25%"
                >
                  احجز الآن
                  <User className="w-5 h-5 mr-2" aria-hidden="true" />
                </Button>

                {/* إرشادات الإغلاق */}
                <p className="text-center text-gray-400 text-sm mt-4" role="note">
                  اضغط Escape للإغلاق
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
