"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  position?: "bottom-right" | "bottom-left";
  showTooltip?: boolean;
  className?: string;
}

const WhatsAppButton = ({
<<<<<<< HEAD
  phoneNumber = "201275821053",
=======
  phoneNumber = "201221675028",
>>>>>>> c2ef636ac4ef8b1d8023f7a3190e92a955ce3a85
  message = "مرحباً، أود معرفة تفاصيل الحجز والأسعار في نايت كلوب ?",
  position = "bottom-right",
  showTooltip = true,
  className = ""
}: WhatsAppButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // إظهار الأزرار بعد 2 ثانية من تحميل الصفحة
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // إظهار بانر الترحيب بعد 4 ثواني إذا لم يتفاعل المستخدم
    if (isVisible && !hasInteracted) {
      const welcomeTimer = setTimeout(() => {
        setShowWelcomeBanner(true);

        // إخفاء البانر تلقائياً بعد 8 ثواني
        const autoHideTimer = setTimeout(() => {
          setShowWelcomeBanner(false);
        }, 8000);

        return () => clearTimeout(autoHideTimer);
      }, 4000);

      return () => clearTimeout(welcomeTimer);
    }
  }, [isVisible, hasInteracted]);

  const handleWhatsAppClick = () => {
    console.log('🔥 تم الضغط على زر الواتساب الرئيسي!');

    setHasInteracted(true);
    setShowWelcomeBanner(false);

    // تنسيق رقم الهاتف
    const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber.slice(1) : phoneNumber;
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;

    console.log('📱 رابط الواتساب:', whatsappUrl);
    console.log('📞 رقم الهاتف المنسق:', formattedPhone);

    // فتح الواتساب مباشرة في نفس التاب
    window.location.href = whatsappUrl;
  };

  const handleCallClick = () => {
    setHasInteracted(true);
    setShowWelcomeBanner(false);
    window.location.href = `tel:+${phoneNumber}`;
  };

  const handleCloseBanner = () => {
    setShowWelcomeBanner(false);
    setHasInteracted(true);
  };

  // معالج نقر زر واتساب في البانر
  const handleBannerWhatsAppClick = () => {
    console.log('🔥 تم الضغط على زر الواتساب!');

    setHasInteracted(true);
    setShowWelcomeBanner(false);

    // تنسيق رقم الهاتف
    const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber.slice(1) : phoneNumber;
    const message = "مرحباً، عاوز معرفة الأسعار والحجز والعروض المتاحة! 🎉";
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;

    console.log('📱 رابط الواتساب:', whatsappUrl);
    console.log('📞 رقم الهاتف المنسق:', formattedPhone);

    // فتح الواتساب مباشرة في نفس التاب
    window.location.href = whatsappUrl;
  };

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6"
  };

  return (
    <>
      {/* بانر الترحيب المحسن */}
      <AnimatePresence>
        {showWelcomeBanner && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 0.6
            }}
            className="fixed bottom-32 right-6 z-40 max-w-sm"
          >
            <div className="relative bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-2xl border border-green-400/20 overflow-hidden">
              {/* خلفية متحركة */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent animate-pulse" />

              {/* زر الإغلاق */}
              <button
                onClick={handleCloseBanner}
                className="absolute top-3 left-3 text-white/80 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 rounded-full p-1 z-10"
                aria-label="إغلاق رسالة الترحيب"
              >
                <X className="w-4 h-4" />
              </button>

              {/* محتوى البانر */}
              <div className="p-6 pr-8 text-right">
                {/* رأس البانر مع لوجو واتساب */}
                <div className="flex items-center justify-end gap-3 mb-4">
                  <div>
                    <h4 className="font-bold text-white text-lg">أهلاً وسهلاً! 👋</h4>
                    <p className="text-green-100 text-sm">نايت كلوب - متاح الآن</p>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                </div>

                {/* النص الرئيسي */}
                <p className="text-white text-base leading-relaxed mb-5">
                  هل تريد معرفة <span className="font-bold">الأسعار والحجز</span>
                  <br />والعروض المتاحة؟ 🎉
                </p>

                {/* زر العمل */}
                <motion.button
                  onClick={handleBannerWhatsAppClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white hover:bg-gray-50 text-green-600 text-base font-bold py-3 px-6 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg flex items-center justify-center gap-2 cursor-pointer relative z-10"
                  aria-label="تواصل الآن عبر واتساب للحجز"
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onTouchStart={() => {
                    console.log('👆 تم لمس الزر');
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  تواصل الآن عبر واتساب
                </motion.button>
              </div>

              {/* مؤشر السهم */}
              <div className="absolute -bottom-2 right-8">
                <div className="w-4 h-4 bg-green-500 transform rotate-45 border-r border-b border-green-400/20" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* الأزرار العائمة - محسنة */}
      <AnimatePresence>
        {isVisible && (
          <div className={`fixed ${positionClasses[position]} z-50 ${className} flex flex-col gap-3`}>
            {/* زر الاتصال المحسن */}
            <motion.button
              initial={{ scale: 0, opacity: 0, x: 20 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0, opacity: 0, x: 20 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCallClick}
              className="group relative w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black flex items-center justify-center"
              aria-label={`اتصل بنا مباشرة على ${phoneNumber}`}
            >
              {/* تأثير النبضة */}
              <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20" />

              {/* أيقونة الهاتف */}
              <Phone className="w-6 h-6 relative z-10" />

              {/* نقطة الإشعار */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              {/* تلميح الأداة */}
              {showTooltip && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                    اتصل مباشرة
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-black/90 transform rotate-45" />
                    </div>
                  </div>
                </div>
              )}
            </motion.button>

            {/* زر واتساب المحسن */}
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2
              }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="group relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black flex items-center justify-center"
              aria-label="تواصل معنا عبر واتساب للحجز والاستفسارات"
            >
              {/* تأثير النبضة */}
              <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />

              {/* أيقونة واتساب */}
              <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>

              {/* نقطة الإشعار */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              {/* تلميح الأداة */}
              {showTooltip && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                    تواصل عبر واتساب
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-black/90 transform rotate-45" />
                    </div>
                  </div>
                </div>
              )}
            </motion.button>

            {/* Schema markup للاتصال */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "ContactPoint",
                  "telephone": `+${phoneNumber}`,
                  "contactType": "customer service",
                  "areaServed": "EG",
                  "availableLanguage": ["Arabic", "English"]
                })
              }}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;
