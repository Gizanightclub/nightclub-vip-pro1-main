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
  phoneNumber = "201286110562",
  message = "مرحباً، أود معرفة تفاصيل الحجز والأسعار في نايت كلوب ?",
  position = "bottom-right",
  showTooltip = true,
  className = ""
}: WhatsAppButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "خدمة العملاء متاحة الآن للحجز - سهرتك في جميع الأماكن";

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
      }, 4000);

      return () => clearTimeout(welcomeTimer);
    }
  }, [isVisible, hasInteracted]);

  useEffect(() => {
    if (!showWelcomeBanner) {
      setTypedText("");
      return;
    }

    let index = 0;
    const typedTimer = setInterval(() => {
      index++;
      setTypedText(fullText.slice(0, index));

      if (index === fullText.length) {
        clearInterval(typedTimer);

        // إخفاء البانر بعد 6 ثواني من اكتمال الكتابة
        setTimeout(() => {
          setShowWelcomeBanner(false);
          setHasInteracted(true);
        }, 6000);
      }
    }, 60);

    return () => clearInterval(typedTimer);
  }, [showWelcomeBanner, fullText]);

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
      {/* بانر الرسالة البسيط */}
      <AnimatePresence>
        {showWelcomeBanner && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-4 z-40 max-w-[280px]"
          >
            <div className="bg-green-500 text-white rounded-2xl shadow-lg px-4 py-3 border border-green-400/30">
              <div className="flex items-start gap-2 mb-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <p className="text-sm leading-relaxed">
                  {typedText}
                </p>
              </div>

              {/* الأزرار تحت الرسالة */}
              <div className="flex gap-2">
                <motion.button
                  onClick={handleWhatsAppClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-white hover:bg-gray-100 text-green-600 text-xs font-bold py-2 px-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-md cursor-pointer"
                  type="button"
                >
                  واتساب
                </motion.button>

                <motion.button
                  onClick={handleCallClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-white hover:bg-gray-100 text-green-600 text-xs font-bold py-2 px-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-md cursor-pointer"
                  type="button"
                >
                  اتصل الآن
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;
