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
  Gift,
  X,
} from "lucide-react";
import Image from "next/image";

/* =======================
   إعدادات عرض رأس السنة
======================= */
const OFFER_END_DATE = new Date("2026-01-01T23:59:59");

const isOfferActive = () => new Date() <= OFFER_END_DATE;

const Pricing = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [guestCount, setGuestCount] = useState(1);
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [isValidCode, setIsValidCode] = useState(false);
  const [invalidCodeMessage, setInvalidCodeMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  /* =======================
     Responsive
  ======================= */
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  /* =======================
     العداد التنازلي
  ======================= */
  useEffect(() => {
    const timer = setInterval(() => {
      const diff = OFFER_END_DATE.getTime() - new Date().getTime();
      if (diff <= 0) {
        setTimeLeft(null);
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  /* =======================
     الباقات (بعد التعديل)
  ======================= */
  const packages = {
    normal: {
      title: "الباقة العادية",
      price: 2500,
      originalPrice: 3000,
      minGuests: 1,
      features: [
        { icon: Wine, text: "مشروبين فاخرين" },
        { icon: UtensilsCrossed, text: "طبق مازة" },
        { icon: Apple, text: "طبق فواكه" },
      ],
    },
    vip: {
      title: "VIP",
      price: 3000,
      originalPrice: 3500,
      minGuests: 1,
      features: [
        { icon: Wine, text: "3 مشروبات فاخرة" },
        { icon: Crown, text: "أمام الستيج مباشرة" },
      ],
    },
    friends: {
      title: "باقة الصحاب 🎉",
      price: 2300,
      originalPrice: 2600,
      minGuests: 3,
      features: [
        { icon: Users, text: "حد أدنى 3 أشخاص" },
        { icon: Wine, text: "3 مشروبات لكل فرد" },
      ],
    },
  };

  /* =======================
     الحسابات
  ======================= */
  const calculateBasePrice = () => {
    if (!selectedPackage) return 0;
    return packages[selectedPackage as keyof typeof packages].price * guestCount;
  };

  const calculateDiscountAmount = () =>
    isOfferActive() ? Math.floor(calculateBasePrice() * appliedDiscount) : 0;

  const calculateTotal = () =>
    calculateBasePrice() - calculateDiscountAmount();

  /* =======================
     كود الخصم
  ======================= */
  const checkDiscountCode = () => {
    if (!isOfferActive()) {
      setInvalidCodeMessage("انتهى عرض رأس السنة");
      return;
    }

    const codes: Record<string, number> = {
      VIP10: 0.1,
      NIGHT15: 0.15,
    };

    const discount = codes[discountCode.toUpperCase()];
    if (discount) {
      setAppliedDiscount(discount);
      setIsValidCode(true);
      setInvalidCodeMessage("");
    } else {
      setIsValidCode(false);
      setAppliedDiscount(0);
      setInvalidCodeMessage("كود الخصم غير صحيح");
    }
  };

  const openBookingModal = (id: string) => {
    setSelectedPackage(id);
    setGuestCount(packages[id as keyof typeof packages].minGuests);
    setShowBookingModal(true);
    setAppliedDiscount(0);
    setDiscountCode("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPackage) return;
    const pkg = packages[selectedPackage as keyof typeof packages];

    if (guestCount < pkg.minGuests) {
      alert(`الحد الأدنى ${pkg.minGuests} أشخاص`);
      return;
    }

    const message = `
🎉 طلب حجز جديد
👤 الاسم: ${name}
📞 الهاتف: ${phone}
📅 التاريخ: ${date}
📦 الباقة: ${pkg.title}
👥 عدد الأشخاص: ${guestCount}
💰 الإجمالي: ${calculateTotal()} جنيه
${isOfferActive() ? "🎆 عرض رأس السنة 2026" : "السعر الطبيعي"}
    `.trim();

    window.open(
      `https://wa.me/201286110562?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setShowBookingModal(false);
  };

  return (
    <section className="min-h-screen bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge className="bg-red-600 px-6 py-2">
            🎆 عروض رأس السنة 2026
          </Badge>

          {timeLeft && isOfferActive() && (
            <div className="flex justify-center gap-4 mt-4">
              {Object.entries(timeLeft).map(([k, v]) => (
                <div key={k} className="border px-4 py-2 rounded">
                  <div className="text-xl font-bold">{v}</div>
                  <div className="text-xs">{k}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(packages).map(([id, pkg]) => (
            <Card key={id} className="bg-black/60 border">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">{pkg.title}</h3>
                <p className="text-3xl font-bold text-yellow-400 mb-4">
                  {pkg.price} ج
                </p>

                <div className="space-y-2 mb-6">
                  {pkg.features.map((f, i) => (
                    <div key={i} className="flex gap-2 items-center">
                      <f.icon className="w-4 h-4" />
                      <span>{f.text}</span>
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => openBookingModal(id)}
                  className="w-full bg-yellow-400 text-black"
                >
                  احجز الآن
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* مودال الحجز */}
      <AnimatePresence>
        {showBookingModal && selectedPackage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
            <motion.div className="bg-black p-6 rounded w-full max-w-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  placeholder="الاسم"
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2 bg-black border"
                />
                <input
                  placeholder="الهاتف"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full p-2 bg-black border"
                />
                <input
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full p-2 bg-black border"
                />

                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(+e.target.value)}
                  className="w-full p-2 bg-black border"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(n=>(
                    <option key={n} value={n}>{n} أشخاص</option>
                  ))}
                </select>

                <p className="text-center font-bold text-yellow-400">
                  الإجمالي: {calculateTotal()} جنيه
                </p>

                <Button type="submit" className="w-full bg-yellow-400 text-black">
                  تأكيد الحجز
                </Button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Pricing;