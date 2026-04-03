"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Crown,
  Wine,
  UtensilsCrossed,
  Apple,
  Users,
  Check,
  Gift,
  X,
  Calendar,
} from "lucide-react";
import Image from "next/image";

export interface Package {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  features: Array<{
    icon: React.ComponentType<any>;
    text: string;
  }>;
}

interface BookingFormProps {
  packages: Package[];
  placeName?: string;
  placeImage?: string;
  isModal?: boolean;
  onClose?: () => void;
}

const BookingForm = ({
  packages,
  placeName = "الحجز",
  placeImage,
  isModal = false,
  onClose,
}: BookingFormProps) => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(packages[0]?.id || null);
  const [guestCount, setGuestCount] = useState(1);
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [isValidCode, setIsValidCode] = useState(false);
  const [invalidCodeMessage, setInvalidCodeMessage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" && window.innerWidth <= 768);

  // حساب السعر الأساسي
  const calculateBasePrice = () => {
    if (!selectedPackage) return 0;
    const pkg = packages.find((p) => p.id === selectedPackage);
    return (pkg?.price || 0) * guestCount;
  };

  // حساب قيمة الخصم
  const calculateDiscountAmount = () => {
    return Math.floor(calculateBasePrice() * appliedDiscount);
  };

  // حساب السعر الإجمالي
  const calculateTotal = () => {
    return calculateBasePrice() - calculateDiscountAmount();
  };

  // التحقق من كود الخصم
  const checkDiscountCode = () => {
    const validCodes: Record<string, number> = {
      VIP10: 0.1,
      NIGHT15: 0.15,
      CLUB20: 0.2,
      GOLD25: 0.25,
      DIAMOND30: 0.3,
    };

    if (discountCode.trim() === "") {
      setInvalidCodeMessage("يرجى إدخال كود الخصم");
      setIsValidCode(false);
      setAppliedDiscount(0);
      return;
    }

    const discount = validCodes[discountCode.toUpperCase()] || 0;

    if (discount > 0) {
      setAppliedDiscount(discount);
      setIsValidCode(true);
      setInvalidCodeMessage("");
    } else {
      setInvalidCodeMessage("كود الخصم غير صحيح");
      setIsValidCode(false);
      setAppliedDiscount(0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPackage || !name.trim() || !phone.trim() || !date.trim()) {
      alert("يرجى تعبئة جميع الحقول المطلوبة");
      return;
    }

    const pkg = packages.find((p) => p.id === selectedPackage);
    if (!pkg) return;

    const basePrice = pkg.price * guestCount;
    const discountAmount = Math.floor(basePrice * appliedDiscount);
    const totalPrice = basePrice - discountAmount;

    const message = `
🎉*طلب حجز جديد - Night Club Egypt*🎉

📌 *تفاصيل الحجز*
👤 الاسم: ${name}
📞 الهاتف: ${phone}
📅 التاريخ: ${date}
${placeName ? `🏢 المكان: ${placeName}` : ""}

💼 نوع الباقة: ${pkg.title}
👥 عدد الأشخاص: ${guestCount}

💰 السعر الأساسي: ${basePrice} جنيه
${discountCode ? `🏷️ كود الخصم: ${discountCode}` : ""}
${discountAmount > 0 ? `💵 قيمة الخصم: ${discountAmount} جنيه (${appliedDiscount * 100}%)` : ""}

✅ *الإجمالي: ${totalPrice} جنيه*

----------------------
شكراً لاختياركم Night Club Egypt 🎉
استمتعوا بأجمل الأوقات! ✨`.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/201286110562?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setFormSubmitted(true);

    // إغلاق النموذج بعد ثانيتين إذا كان modal
    if (isModal && onClose) {
      setTimeout(() => {
        onClose();
        // Reset form
        setSelectedPackage(packages[0]?.id || null);
        setGuestCount(1);
        setDiscountCode("");
        setAppliedDiscount(0);
        setIsValidCode(false);
        setName("");
        setPhone("");
        setDate("");
        setFormSubmitted(false);
      }, 2000);
    } else {
      // Reset form
      setSelectedPackage(packages[0]?.id || null);
      setGuestCount(1);
      setDiscountCode("");
      setAppliedDiscount(0);
      setIsValidCode(false);
      setName("");
      setPhone("");
      setDate("");
      setFormSubmitted(false);
    }
  };

  return (
    <section className={`relative ${isModal ? "w-full" : "w-full"}`}>
      <div className={`${isModal ? "p-6 md:p-8" : "py-20 px-4"} bg-gradient-to-b from-black to-purple-900/30 rounded-2xl`}>
        <div className="max-w-6xl mx-auto">
          {/* رسالة النجاح */}
          <AnimatePresence>
            {formSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
              >
                ✅ تم إرسال طلبك بنجاح! سيتم التواصل معك قريباً عبر واتساب.
              </motion.div>
            )}
          </AnimatePresence>

          {/* العنوان */}
          {!isModal && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                احجز الآن واستمتع بأفضل السهرات
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                اختر الباقة المناسبة لك وأتمم حجزك بسهولة. نقدم لك أفضل الأسعار والعروض.
              </p>
            </motion.div>
          )}

          {/* المحتوى الرئيسي */}
          <div className={`grid ${isModal ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-3"} gap-8`}>
            {/* بطاقات الباقات */}
            <div className={`${isModal ? "lg:col-span-1" : "lg:col-span-2"} space-y-6`}>
              <h3 className="text-2xl font-bold text-white mb-4">اختر الباقة المناسبة</h3>

              <div className={`grid ${isModal ? "grid-cols-1" : "grid-cols-2"} gap-4`}>
                {packages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`relative cursor-pointer rounded-xl p-5 border-2 transition-all transform hover:scale-105 ${
                      selectedPackage === pkg.id
                        ? "border-yellow-400 bg-yellow-400/10 shadow-lg shadow-yellow-400/20"
                        : "border-purple-500/30 bg-black/50 hover:border-purple-400/50"
                    }`}
                  >
                    {pkg.id === "first" && (
                      <div className="absolute -top-3 right-2">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold">
                          <Crown className="w-3 h-3 mr-1" />
                          VIP
                        </Badge>
                      </div>
                    )}

                    <h4 className={`text-lg font-bold mb-2 ${pkg.id === "first" ? "text-yellow-400" : "text-white"}`}>
                      {pkg.title}
                    </h4>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl font-bold text-yellow-400">{pkg.price} EGP</span>
                      <span className="text-xl text-gray-400 line-through">{pkg.originalPrice} EGP</span>
                    </div>

                    <div className="space-y-2">
                      {pkg.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {selectedPackage === pkg.id && (
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-yellow-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* النموذج */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`${isModal ? "lg:col-span-1" : "lg:col-span-1"} rounded-2xl border border-purple-500/30 bg-black/70 p-6 h-fit`}
            >
              {isModal && onClose && (
                <motion.button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              )}

              <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                بيانات الحجز
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* الاسم والهاتف */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-gray-300 text-sm mb-1">الاسم</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                      placeholder="أدخل اسمك"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm mb-1">الهاتف</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                      placeholder="رقم الهاتف"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm mb-1">التاريخ</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                      required
                    />
                  </div>
                </div>

                {/* عدد الأشخاص */}
                <div>
                  <label className="block text-gray-300 text-sm mb-1">عدد الأشخاص</label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n}>
                        {n} أشخاص
                      </option>
                    ))}
                  </select>
                </div>

                {/* كود الخصم */}
                <div>
                  <label className="block text-gray-300 text-sm mb-1">كود الخصم (اختياري)</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={discountCode}
                      onChange={(e) => {
                        setDiscountCode(e.target.value.toUpperCase());
                        setInvalidCodeMessage("");
                      }}
                      className="flex-1 bg-black/40 border border-purple-500/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                      placeholder="VIP10"
                    />
                    <Button
                      type="button"
                      onClick={checkDiscountCode}
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm"
                    >
                      تطبيق
                    </Button>
                  </div>
                  <AnimatePresence>
                    {invalidCodeMessage && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-red-400 text-xs mt-1"
                      >
                        {invalidCodeMessage}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* ملخص السعر */}
                <motion.div
                  key={`total-${guestCount}-${selectedPackage}-${appliedDiscount}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-black/40 p-4 rounded-lg border border-yellow-400/30 space-y-2 text-sm"
                >
                  <div className="flex justify-between">
                    <span className="text-gray-300">الأساسي:</span>
                    <span className="text-white font-medium">{calculateBasePrice()} ج</span>
                  </div>

                  {isValidCode && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-300">الخصم:</span>
                        <span className="text-green-400 font-medium">-{calculateDiscountAmount()} ج ({appliedDiscount * 100}%)</span>
                      </div>
                    </>
                  )}

                  <div className="flex justify-between pt-2 border-t border-yellow-400/20 font-bold">
                    <span className="text-gray-300">الإجمالي:</span>
                    <span className="text-yellow-400">{calculateTotal()} ج</span>
                  </div>
                </motion.div>

                {/* زر الحجز */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30"
                  >
                    احجز الآن عبر واتساب
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
