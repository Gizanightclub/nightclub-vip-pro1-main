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
            title: "الصف الثاني",
            price: 2500,
            originalPrice: 2500,
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
            originalPrice: 3000,
            features: [
                { icon: Wine, text: "ثلاث مشروبات فاخرة (Free)" },
                { icon: UtensilsCrossed, text: "طبق مازة مميزة (Free)" },
                { icon: Apple, text: "طبق فواكه طازة مميزة (Free)" },
                { icon: Crown, text: "مقاعد أمام الستيج مباشرة + خدمة VIP خاصة" },
                { icon: Users, text: "إمكانية الجلوس مع بنات (أكثر تميزاً)" },
            ],
        },
        friends: {
            title: "الصحاب",
            price: 2000,
            originalPrice: 2500,
            features: [
                { icon: Wine, text: "مشروبين فاخرين (Free) من اختيارك" },
                { icon: UtensilsCrossed, text: "طبق مازة متنوع (Free)" },
                { icon: Apple, text: "طبق فواكه طازة (Free)" },
                { icon: Users, text: "مقاعد مميزة" },
                { icon: Users, text: "إمكانية الجلوس مع الأصحاب" },
            ],
            minGuests: 4,
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
        setGuestCount(pkgId === "friends" ? 4 : 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedPackage) return;

        if (selectedPackage === "friends" && guestCount < packages.friends.minGuests) {
            alert("باقة الصحاب يمكن حجزها فقط من 4 أشخاص أو أكثر");
            return;
        }

        const packageDetails = packages[selectedPackage as keyof typeof packages];
        const basePrice = packageDetails.price * guestCount;
        const discountAmount = Math.floor(basePrice * appliedDiscount);
        const totalPrice = basePrice - discountAmount;

        const message = `
🎉 *طلب حجز جديد*
----------------------------

📌 *تفاصيل الحجز*
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

----------------------------

🙏 شكرًا لاختياركم، سيتم التواصل معكم قريبًا لتأكيد الحجز.`.trim();

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/201286110562?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
        setShowBookingModal(false);
    };

    return (
        <section
            id="pricing"
            className="relative min-h-screen py-20 flex items-center bg-black overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black">
                <div className="absolute inset-0">
                    {particles.map((particle, i) => (
                        <div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full animate-sparkle"
                            style={{
                                left: particle.left,
                                top: particle.top,
                                animationDelay: particle.delay,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
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

                <div
                    className={`grid ${
                        isMobile ? "grid-cols-1" : "md:grid-cols-2"
                    } gap-8 max-w-5xl mx-auto`}
                >
                    {Object.entries(packages).map(([id, pkg], index) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                            whileHover={{ y: isMobile ? 0 : -5 }}
                        >
                            <motion.div
                                className="absolute inset-0 rounded-xl overflow-hidden"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: isMobile ? 0 : 1 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-purple-500/20"
                                    animate={{
                                        x: [-100, 100],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            </motion.div>

                            {id === "first" && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                                    <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-4 py-1 shadow-lg">
                                        <Crown className="w-4 h-4 mr-1" />
                                        VIP
                                    </Badge>
                                </div>
                            )}

                            <Card
                                className={`bg-black/50 backdrop-blur-sm border ${
                                    id === "first"
                                        ? "border-yellow-400/50 hover:shadow-yellow-500/20"
                                        : "border-purple-500/30 hover:shadow-purple-500/20"
                                } h-full relative overflow-hidden transition-all ${
                                    isMobile ? "" : "hover:shadow-lg"
                                }`}
                            >
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-purple-500 blur-3xl"></div>
                                    <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-yellow-500 blur-3xl"></div>
                                </div>

                                <CardContent className="p-6 relative z-10">
                                    <div className="text-center mb-6">
                                        <h3
                                            className={`text-2xl font-bold mb-2 ${
                                                id === "first" ? "text-yellow-400" : "text-white"
                                            }`}
                                        >
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
                                            <motion.div
                                                key={i}
                                                className="flex items-start gap-3 p-3 bg-black/30 rounded-lg backdrop-blur-sm"
                                                whileHover={{ x: isMobile ? 0 : 5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <div
                                                    className={`p-2 rounded-lg ${
                                                        id === "first"
                                                            ? "bg-yellow-400/20"
                                                            : "bg-purple-500/20"
                                                    }`}
                                                >
                                                    <feature.icon
                                                        className={`w-5 h-5 ${
                                                            id === "first"
                                                                ? "text-yellow-400"
                                                                : "text-purple-400"
                                                        }`}
                                                    />
                                                </div>
                                                <span className="text-gray-300 flex-1">
                                                    {feature.text}
                                                </span>
                                                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div
                                        whileHover={{ scale: isMobile ? 1 : 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button
                                            onClick={() => openBookingModal(id)}
                                            size="lg"
                                            className={`w-full text-lg font-bold py-5 relative overflow-hidden ${
                                                id === "first"
                                                    ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black"
                                                    : "bg-gradient-to-r from-purple-500 to-purple-700 text-white"
                                            }`}
                                        >
                                            <motion.span
                                                className="absolute inset-0 bg-white/20"
                                                initial={{ x: -100, opacity: 0 }}
                                                whileHover={{ x: isMobile ? -100 : 100, opacity: 0.3 }}
                                                transition={{ duration: 0.8 }}
                                            />
                                            {id === "first"
                                                ? "احجز VIP الآن"
                                                : id === "friends"
                                                ? "احجز الصحاب الآن"
                                                : "احجز الآن"}
                                        </Button>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* نموذج الحجز */}
            <AnimatePresence>
                {showBookingModal && selectedPackage && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className={`bg-gradient-to-b from-black to-purple-900/30 border border-purple-500/30 rounded-xl ${
                                isMobile ? "w-full max-w-md" : "w-full max-w-4xl"
                            } overflow-hidden ${
                                isMobile ? "max-h-[90vh] overflow-y-auto" : ""
                            }`}
                        >
                            <div
                                className={`flex ${isMobile ? "flex-col" : "flex-row"} h-full`}
                            >
                                {!isMobile && (
                                    <div className="w-1/3 bg-black/20 relative">
                                        <Image
                                            src={
                                                selectedPackage === "first"
                                                    ? "/نايت كلوب القاهره.jpg"
                                                    : "/496297633_122132908394643264_7862667949279596569_n.jpg"
                                            }
                                            alt={
                                                packages[selectedPackage as keyof typeof packages].title
                                            }
                                            fill
                                            className="object-cover opacity-70"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex flex-col justify-end p-6">
                                            <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                                                {
                                                    packages[selectedPackage as keyof typeof packages]
                                                        .title
                                                }
                                            </h3>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl font-bold text-white">
                                                    {
                                                        packages[selectedPackage as keyof typeof packages]
                                                            .price
                                                    }{" "}
                                                    ج
                                                </span>
                                                <span className="text-gray-400 line-through">
                                                    {
                                                        packages[selectedPackage as keyof typeof packages]
                                                            .originalPrice
                                                    }{" "}
                                                    ج
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className={`${isMobile ? "w-full" : "w-2/3"} p-6 md:p-8`}>
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-bold text-yellow-400">
                                            <Crown className="inline-block w-5 h-5 mr-2" />
                                            حجز الباقة
                                        </h3>
                                        <motion.button
                                            onClick={() => setShowBookingModal(false)}
                                            className="text-gray-400 hover:text-white"
                                            whileHover={{ rotate: 90 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <X className="w-6 h-6" />
                                        </motion.button>
                                    </div>

                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-300 mb-2 text-sm">
                                                    الاسم
                                                </label>
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-300 mb-2 text-sm">
                                                    رقم الهاتف
                                                </label>
                                                <input
                                                    type="tel"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-300 mb-2 text-sm">
                                                التاريخ
                                            </label>
                                            <input
                                                type="date"
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                                className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-300 mb-2 text-sm">
                                                عدد الأشخاص
                                            </label>
                                            <input
                                                type="number"
                                                min={selectedPackage === "friends" ? 4 : 1}
                                                value={guestCount}
                                                onChange={(e) => setGuestCount(Number(e.target.value))}
                                                className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                                                required
                                            />
                                            {selectedPackage === "friends" && guestCount < 4 && (
                                                <p className="text-red-400 text-xs mt-1">
                                                    باقة الصحاب يمكن حجزها فقط من 4 أشخاص أو أكثر
                                                </p>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-300 mb-2 text-sm">
                                                    كود الخصم (إن وجد)
                                                </label>
                                                <input
                                                    type="text"
                                                    value={discountCode}
                                                    onChange={(e) => setDiscountCode(e.target.value)}
                                                    onBlur={checkDiscountCode}
                                                    className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                                                />
                                                {invalidCodeMessage && (
                                                    <p className="text-red-400 text-xs mt-1">
                                                        {invalidCodeMessage}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex flex-col justify-end">
                                                <span className="text-white font-bold text-lg">
                                                    السعر الإجمالي: {calculateTotal()} ج
                                                </span>
                                            </div>
                                        </div>

                                        <Button type="submit" className="w-full py-4 text-lg font-bold">
                                            تأكيد الحجز
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Pricing;