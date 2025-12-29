"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Crown,
  Wine,
  UtensilsCrossed,
  Apple,
  Users,
  Check,
  Zap,
  Gift,
  X,
  Calendar,
} from "lucide-react";
import Image from "next/image";

const Pricing = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [guestCount, setGuestCount] = useState(1);
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [isValidCode, setIsValidCode] = useState(false);
  const [invalidCodeMessage, setInvalidCodeMessage] = useState("");
  const [particles, setParticles] = useState<
    Array<{ left: string; top: string; delay: string }>
  >([]);
  const [isMobile, setIsMobile] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // أسعار الباقات
  const packages = {
    second: {
      title: "2026 🎟️🎉 تكت صف الثاني",
      price: 2500,
      originalPrice: 3000,
      features: [
        { icon: Wine, text: "مشروبين فاخرين (Free) من اختيارك" },
        { icon: UtensilsCrossed, text: "طبق مازة متنوع (Free)" },
        { icon: Apple, text: "طبق فواكه طازة (Free)" },
        { icon: Users, text: "مقاعد مميزة في الصف الثاني" },
        { icon: Users, text: "إمكانية الجلوس مع بنات (عند الطلب)" },
      ],
    },
    first: {
      title: "الصف الأول VIP",
      price: 3000,
      originalPrice:3500,
      features: [
        { icon: Wine, text: "ثلاث مشروبات فاخرة (Free)" },
        { icon: UtensilsCrossed, text: "طبق مازة مميزة (Free)" },
        { icon: Apple, text: "طبق فواكه طازة مميزة (Free)" },
        { icon: Crown, text: "مقاعد أمام الستيج مباشرة + خدمة VIP خاصة" },
        { icon: Users, text: "إمكانية الجلوس مع بنات (أكثر تميزاً)" },
      ],
    },
    friends: {
      title: " 🎉🎟️باقة الصحاب",
      price: 2000,
      originalPrice: 3000,
      features: [
        { icon: Wine, text: "مشروبين فاخرين لكل شخص" },
        { icon: UtensilsCrossed, text: "طبق مازة متنوع لكل شخص" },
        { icon: Apple, text: "طبق فواكه طازة لكل شخص" },
        { icon: Users, text: "مقاعد مميزة للصحاب فقط" },
        { icon: Users, text: "الحجز ممكن فقط إذا كان عددكم 4 أشخاص فأكثر" },
      ],
    },
  };

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }));
    setParticles(newParticles);
  }, []);

  // حساب السعر الأساسي
  const calculateBasePrice = () => {
    if (!selectedPackage) return 0;
    return packages[selectedPackage as keyof typeof packages].price * guestCount;
  };

  const calculateDiscountAmount = () => {
    return Math.floor(calculateBasePrice() * appliedDiscount);
  };

  const calculateTotal = () => {
    return calculateBasePrice() - calculateDiscountAmount();
  };

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

    const discount = validCodes[discountCode] || 0;
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

  const openBookingModal = (pkgId: string) => {
    setSelectedPackage(pkgId);
    setShowBookingModal(true);
    setDiscountCode("");
    setAppliedDiscount(0);
    setIsValidCode(false);
    setInvalidCodeMessage("");
    setName("");
    setPhone("");
    setDate("");
    setGuestCount(pkgId === "friends" ? 4 : 1); // باقة الصحاب تبدأ من 4
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPackage) return;

    if (selectedPackage === "friends" && guestCount < 4) {
      setInvalidCodeMessage("باقة الصحاب تتطلب 4 أشخاص فأكثر");
      return;
    }

    const packageDetails = packages[selectedPackage as keyof typeof packages];
    const basePrice = packageDetails.price * guestCount;
    const discountAmount = Math.floor(basePrice * appliedDiscount);
    const totalPrice = basePrice - discountAmount;

    const message = ` 
🎉*!Happy New Year 2026 - طلب حجز*🎉
        
👤 الاسم: ${name}
📞 الهاتف: ${phone}
📅 التاريخ: ${date}
💼 نوع الباقة: ${packageDetails.title}
👥 عدد الأشخاص: ${guestCount}
💰 السعر الأساسي: ${basePrice} جنيه
${discountCode ? `🏷️ كود الخصم: ${discountCode}` : ""}
${
  discountAmount > 0
    ? `💵 قيمة الخصم: ${discountAmount} جنيه (${appliedDiscount * 100}%)`
    : ""
}
✅ *الإجمالي: ${totalPrice} جنيه*
---------------------------
🙏✨ شكرًا لاختياركم نايت كلوب، نتمنى لكم سنة جديدة مليئة بالفرح والاحتفالات!.`.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/201286110562?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setShowBookingModal(false);
  };

  return (
    <section className="relative min-h-screen py-20 flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full animate-sparkle"
              style={{ left: particle.left, top: particle.top, animationDelay: particle.delay }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <Badge className="bg-black/70 px-6 py-2.5 text-lg border border-purple-500/50 text-purple-300 mb-6 hover:bg-purple-900/30 transition-colors">
            <Gift className="w-5 h-5 ml-2 text-yellow-400 animate-pulse" />
            عروض حصرية
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-yellow-400 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-yellow-400 sm:to-yellow-600">
              باقاتنا الفاخرة
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            اختر الباقة التي تناسبك واستمتع بتجربة لا تُنسى
          </p>
        </motion.div>

        <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-8 max-w-5xl mx-auto`}>
          {Object.entries(packages).map(([id, pkg], index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              whileHover={{ y: isMobile ? 0 : -5 }}
            >
              <Card className={`bg-black/50 backdrop-blur-sm border ${id === "first" ? "border-yellow-400/50 hover:shadow-yellow-500/20" : "border-purple-500/30 hover:shadow-purple-500/20"} h-full relative overflow-hidden transition-all ${isMobile ? "" : "hover:shadow-lg"}`}>
                <CardContent className="p-6 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${id === "first" ? "text-yellow-400" : "text-white"}`}>
                      {pkg.title}
                    </h3>
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-yellow-400">
                        {pkg.price} ج
                      </span>
                      <span className="text-xl text-gray-400 line-through">
                        {pkg.originalPrice} ج
                      </span>
                    </div>
                    <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md">
                      وفر {pkg.originalPrice - pkg.price} جنيه
                    </Badge>
                  </div>
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <motion.div key={i} className="flex items-start gap-3 p-3 bg-black/30 rounded-lg backdrop-blur-sm" whileHover={{ x: isMobile ? 0 : 5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <div className={`p-2 rounded-lg ${id === "first" ? "bg-yellow-400/20" : "bg-purple-500/20"}`}>
                          <feature.icon className={`w-5 h-5 ${id === "first" ? "text-yellow-400" : "text-purple-400"}`} />
                        </div>
                        <span className="text-gray-300 flex-1">{feature.text}</span>
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      </motion.div>
                    ))}
                  </div>
                  <motion.div whileHover={{ scale: isMobile ? 1 : 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button onClick={() => openBookingModal(id)} size="lg" className={`w-full text-lg font-bold py-5 relative overflow-hidden ${id === "first" ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black" : "bg-gradient-to-r from-purple-500 to-purple-700 text-white"}`}>
                      <motion.span className="absolute inset-0 bg-white/20" initial={{ x: -100, opacity: 0 }} whileHover={{ x: isMobile ? -100 : 100, opacity: 0.3 }} transition={{ duration: 0.8 }} />
                      {id === "first" ? "احجز VIP الآن" : id === "friends" ? "احجز باقة الصحاب" : "احجز الآن"}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;