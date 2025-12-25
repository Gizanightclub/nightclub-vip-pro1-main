"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Clock,
  MapPin,
  Mail,
  Headphones,
  Sparkles,
  User,
  Calendar,
  Users,
  Crown,
  Info,
} from "lucide-react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: 1,
    package: "standard",
    notes: "",
  });

  const [particles, setParticles] = useState<
    Array<{ left: string; top: string; delay: string }>
  >([]);
  const [isMobile, setIsMobile] = useState(false);

  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [isValidCode, setIsValidCode] = useState(false);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }));
    setParticles(newParticles);
  }, []);

  const packages = {
    standard: {
      name: "الباقة العادية",
      price: 1000,
    },
    vip: {
      name: "باقة VIP",
      price: 1500,
    },
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setFormData((prev) => ({
      ...prev,
      guests: Math.min(Math.max(value, 1)), // الحد الأدنى 2
    }));
  };

  const checkDiscountCode = () => {
    const validDiscountCodes: Record<string, number> = {
      VIP10: 0.1, // خصم 10%
      NIGHT15: 0.15, // خصم 15%
      CLUB20: 0.2, // خصم 20%
      GOLD25: 0.25, // خصم 25%
      DIAMOND30: 0.3, // خصم 30%
    };

    const discountValue = validDiscountCodes[discountCode];
    if (discountValue !== undefined) {
      setAppliedDiscount(discountValue);
      setIsValidCode(true);
    } else {
      setAppliedDiscount(0);
      setIsValidCode(false);
    }
  };

  const calculateDiscountAmount = () => {
    if (!isValidCode) return 0;
    return calculateBasePrice() * appliedDiscount;
  };

  const calculateBasePrice = () => {
    return (
      packages[formData.package as keyof typeof packages].price *
      formData.guests
    );
  };

  const calculateTotal = () => {
    const basePrice = calculateBasePrice();
    if (isValidCode) {
      return basePrice - basePrice * appliedDiscount;
    }
    return basePrice;
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const packageDetails = packages[formData.package as keyof typeof packages];
  const basePrice = packageDetails.price * formData.guests;
  const discountAmount = isValidCode ? Math.floor(basePrice * appliedDiscount) : 0;
  const totalPrice = basePrice - discountAmount;

  // 🎯 رسالة واتساب موحدة التنسيق
  const whatsappMessage = `
🎉 *طلب حجز جديد*

📌 *تفاصيل الحجز*
👤 الاسم: ${formData.name}
📞 رقم الهاتف: ${formData.phone}
📅 التاريخ: ${formData.date}
👥 عدد الأشخاص: ${formData.guests}
💼 الباقة: ${packageDetails.name}

💰 السعر الأساسي: ${basePrice} جنيه
${isValidCode ? `🏷️ كود الخصم: ${discountCode}` : ""}
${discountAmount > 0 ? `💵 قيمة الخصم: ${discountAmount} جنيه (${appliedDiscount * 100}%)` : ""}

✅ *الإجمالي: ${totalPrice} جنيه*

${formData.notes ? `📝 ملاحظات: ${formData.notes}` : ""}

🙏 شكرًا لاختياركم، سيتم التواصل معكم قريبًا لتأكيد الحجز.`.trim();

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/201221675028?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};


  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/201221675028",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=100076355247481",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/night_club_5star",
      color:
        "bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      description: "01221675028",
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      description: "8:00 مساءً - 6:00 صباحاً",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
    },
    {
      icon: MapPin,
      title: "الموقع",
      description: "نايل كورنيش، العجوزه، شارع النيل",
      color: "text-green-400",
      bg: "bg-green-400/10",
    },
    {
      icon: Headphones,
      title: "خدمة العملاء",
      description: "متاحة 24/7",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen py-10 md:py-20 flex items-center bg-black overflow-hidden"
      aria-labelledby="contact-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" aria-hidden="true">
        <div className="absolute inset-0" aria-hidden="true">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full animate-sparkle"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-12 md:mb-20"
        >
          <Badge className="bg-black/70 px-5 py-2 md:px-7 md:py-3 text-base md:text-xl border border-purple-500/50 text-purple-300 mb-5 md:mb-8 hover:bg-purple-900/30 transition-colors">
            <Phone className="w-5 h-5 md:w-6 md:h-6 ml-2 text-yellow-400 animate-pulse" aria-hidden="true" />
            تواصل معنا
          </Badge>
          <h2
            id="contact-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-5 md:mb-8 text-white"
          >
            <span className="text-yellow-400 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-yellow-400 sm:to-yellow-600">
              تواصل مع فريقنا
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            فريقنا متاح على مدار الساعة لمساعدتك في الحجز والإجابة على
            استفساراتك
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-6 md:space-y-8"
          >
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                تواصل معنا عبر
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-1 md:gap-2 px-3 py-2 md:px-5 md:py-3 rounded-lg md:rounded-xl ${social.color} text-white text-sm md:text-base font-medium transition-all shadow-lg`}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                معلومات التواصل
              </h3>
              <div className="grid gap-3 md:gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className={`bg-black/50 border border-white/10 backdrop-blur-sm hover:shadow-lg transition-all ${info.bg}`}
                    >
                      <CardContent className="p-3 sm:p-4 md:p-5">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                          <div
                            className={`p-2 sm:p-3 rounded-md md:rounded-lg ${info.bg} border border-white/10`}
                          >
                            <info.icon
                              className={`w-5 h-5 md:w-6 md:h-6 ${info.color}`}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base sm:text-lg font-bold mb-1 text-white">
                              {info.title}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-gray-300">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                موقعنا
              </h3>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-black/50 border border-yellow-400/30 rounded-xl overflow-hidden"
              >
                <div className="h-48 sm:h-56 md:h-64 w-full bg-gradient-to-br from-purple-900/20 to-yellow-600/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4 sm:p-5 md:p-6 backdrop-blur-sm bg-black/30 rounded-xl border border-white/10">
                      <MapPin className="w-8 h-8 md:w-10 md:h-10 mx-auto text-yellow-400 mb-2 md:mb-3" />
                      <p className="text-white text-sm sm:text-base md:text-lg font-medium">
                        نايل كورنيش، العجوزه، شارع النيل
                      </p>
                      <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-1">
                        القاهرة، مصر , الجيزة
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 sticky top-20 md:top-28"
          >
            <Card className="bg-black/50 border border-yellow-400/30 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-2 flex items-center justify-center gap-2 md:gap-3">
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                    نموذج الحجز المباشر
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    املأ النموذج وسنتصل بك لتأكيد الحجز
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                  aria-labelledby="booking-form-title"
                  noValidate
                >
                  <h4 id="booking-form-title" className="sr-only">نموذج حجز النايت كلوب</h4>

                  <div className="space-y-1 md:space-y-2">
                    <label
                      htmlFor="booking-name"
                      className="block text-gray-300 mb-1 md:mb-2 text-xs sm:text-sm font-medium"
                    >
                      الاسم بالكامل <span className="text-red-400" aria-label="مطلوب">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User className="w-4 h-4 md:w-5 md:h-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        type="text"
                        id="booking-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-describedby="name-error"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 md:px-4 md:py-3 pl-10 md:pl-12 text-sm md:text-base text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30"
                        placeholder="أدخل اسمك الكامل"
                        autoComplete="name"
                      />
                      <div id="name-error" className="sr-only" role="alert" aria-live="polite"></div>
                    </div>
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <label
                      htmlFor="booking-phone"
                      className="block text-gray-300 mb-1 md:mb-2 text-xs sm:text-sm font-medium"
                    >
                      رقم الهاتف <span className="text-red-400" aria-label="مطلوب">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Phone className="w-4 h-4 md:w-5 md:h-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        type="tel"
                        id="booking-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-describedby="phone-error"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 md:px-4 md:py-3 pl-10 md:pl-12 text-sm md:text-base text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30"
                        placeholder="مثال: 01234567890"
                        autoComplete="tel"
                      />
                      <div id="phone-error" className="sr-only" role="alert" aria-live="polite"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 md:gap-6">
                    <div className="space-y-1 md:space-y-2">
                      <label
                        htmlFor="booking-date"
                        className="block text-gray-300 mb-1 md:mb-2 text-xs sm:text-sm font-medium"
                      >
                        التاريخ <span className="text-red-400" aria-label="مطلوب">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Calendar className="w-4 h-4 md:w-5 md:h-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                          type="date"
                          id="booking-date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-describedby="date-error"
                          className="date-input w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 md:px-4 md:py-3 pl-10 md:pl-12 text-sm md:text-base text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30"
                          min={new Date().toISOString().split('T')[0]}
                        />
                        <div id="date-error" className="sr-only" role="alert" aria-live="polite"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-1 gap-3 md:gap-6">
                    <div className="space-y-1 md:space-y-2">
                      <label
                        htmlFor="booking-guests"
                        className="block text-gray-300 mb-1 md:mb-2 text-xs sm:text-sm font-medium"
                      >
                        عدد الأشخاص <span className="text-red-400" aria-label="مطلوب">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Users className="w-4 h-4 md:w-5 md:h-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <select
                          id="booking-guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-describedby="guests-help"
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 md:px-4 md:py-3 pl-10 md:pl-12 text-sm md:text-base text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 appearance-none"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'شخص' : 'أشخاص'}
                            </option>
                          ))}
                        </select>
                        <div id="guests-help" className="text-xs text-gray-400 mt-1">
                          اختر عدد الأشخاص للحجز
                        </div>
                      </div>
                    </div>
                  </div>

                  <fieldset className="space-y-1 md:space-y-2">
                    <legend className="block text-gray-300 mb-1 md:mb-2 text-xs sm:text-sm font-medium">
                      نوع الباقة <span className="text-red-400" aria-label="مطلوب">*</span>
                    </legend>
                    <div
                      className="grid grid-cols-2 gap-2 md:gap-4"
                      role="radiogroup"
                      aria-required="true"
                      aria-labelledby="package-legend"
                    >
                      {Object.entries(packages).map(([id, pkg]) => (
                        <motion.div
                          key={id}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <input
                            type="radio"
                            id={`package-${id}`}
                            name="package"
                            value={id}
                            checked={formData.package === id}
                            onChange={handleChange}
                            className="hidden peer"
                            aria-describedby={`package-${id}-description`}
                          />
                          <label
                            htmlFor={`package-${id}`}
                            className={`block p-3 md:p-4 border rounded-lg cursor-pointer transition-all focus-within:ring-2 focus-within:ring-yellow-400 focus-within:ring-offset-2 focus-within:ring-offset-black ${
                              formData.package === id
                                ? "border-yellow-400 bg-yellow-400/10"
                                : "border-gray-600 hover:border-yellow-400/50"
                            }`}
                          >
                            <div className="flex items-center gap-2 md:gap-3">
                              {id === "vip" ? (
                                <Crown className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" aria-hidden="true" />
                              ) : (
                                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-purple-400" aria-hidden="true" />
                              )}
                              <div>
                                <p className="text-sm md:text-base font-medium text-white">
                                  {pkg.name}
                                </p>
                                <p
                                  id={`package-${id}-description`}
                                  className="text-xs md:text-sm text-gray-300"
                                >
                                  {pkg.price} جنيه للشخص الواحد
                                </p>
                              </div>
                            </div>
                          </label>
                        </motion.div>
                      ))}
                    </div>
                  </fieldset>

                  <div className="space-y-1 md:space-y-2">
                    <label
                      htmlFor="discount-code"
                      className="block text-gray-300 mb-1 md:mb-2 text-xs sm:text-sm font-medium"
                    >
                      كود الخصم (اختياري)
                    </label>
                    <div className="flex gap-2 md:gap-3">
                      <input
                        type="text"
                        id="discount-code"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                        className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30"
                        placeholder="مثال: VIP10 أو NIGHT15"
                        aria-describedby="discount-help"
                        autoComplete="off"
                      />
                      <button
                        type="button"
                        onClick={checkDiscountCode}
                        className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black text-white px-4 md:px-6 rounded-lg transition-colors text-sm md:text-base"
                        aria-describedby="discount-status"
                      >
                        تطبيق
                      </button>
                    </div>
                    <div id="discount-help" className="text-xs text-gray-400">
                      أدخل كود الخصم إن وجد للحصول على تخفيض
                    </div>
                    {isValidCode && (
                      <div id="discount-status" className="text-xs text-green-400" role="status" aria-live="polite">
                        ✅ تم تطبيق خصم {appliedDiscount * 100}% بنجاح
                      </div>
                    )}
                    {discountCode && !isValidCode && (
                      <div id="discount-status" className="text-xs text-red-400" role="alert" aria-live="polite">
                        ❌ كود الخصم غير صحيح
                      </div>
                    )}
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <label
                      htmlFor="booking-notes"
                      className="flex text-gray-300 mb-1 md:mb-2 text-xs sm:text-sm font-medium items-center gap-1"
                    >
                      ملاحظات إضافية (اختياري)
                      <Info className="w-3 h-3 md:w-4 md:h-4 text-gray-400" aria-hidden="true" />
                    </label>
                    <textarea
                      id="booking-notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30"
                      placeholder="أي طلبات أو ملاحظات خاصة..."
                      aria-describedby="notes-help"
                    />
                    <div id="notes-help" className="text-xs text-gray-400">
                      اكتب أي طلبات خاصة أو ملاحظات إضافية
                    </div>
                  </div>

                  <motion.div
                    key={`total-${formData.guests}-${formData.package}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-black/30 p-3 md:p-5 rounded-lg border border-yellow-400/20"
                  >
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs md:text-sm text-gray-300">
                          السعر الأساسي:
                        </span>
                        <span className="text-sm md:text-base text-white font-medium">
                          {calculateBasePrice()} جنيه
                        </span>
                      </div>

                      {isValidCode && (
                        <>
                          <div className="flex justify-between items-center">
                            <span className="text-xs md:text-sm text-gray-300">
                              نسبة الخصم:
                            </span>
                            <span className="text-sm md:text-base text-green-400 font-medium">
                              {appliedDiscount * 100}%
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs md:text-sm text-gray-300">
                              قيمة الخصم:
                            </span>
                            <span className="text-sm md:text-base text-green-400 font-medium">
                              -{calculateDiscountAmount()} جنيه
                            </span>
                          </div>
                        </>
                      )}

                      <div className="flex justify-between items-center pt-2 md:pt-3 border-t border-yellow-400/20 mt-2 md:mt-3">
                        <span className="text-sm md:text-base text-gray-300 font-bold">
                          السعر الإجمالي:
                        </span>
                        <span className="text-base md:text-lg text-yellow-400 font-bold">
                          {calculateTotal()} جنيه
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 md:py-5 text-sm md:text-lg mt-2 md:mt-4 relative overflow-hidden"
                    >
                      <motion.span
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: -100, opacity: 0 }}
                        whileHover={{ x: 100, opacity: 0.3 }}
                        transition={{ duration: 0.8 }}
                      />
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2" />
                      إرسال طلب الحجز
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
