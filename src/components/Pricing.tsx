"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
    Crown,
    Wine,
    UtensilsCrossed,
    Apple,
    Users,
    Check,
    Gift,
} from "lucide-react";

const Pricing = () => {
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

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    const packages = {
        second: {
            title: "تيكت صف تاني 🎫",
            price: 2000,
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
            title: "تيكت صف اول VIP 🎫🔥",
            price: 3000,
            originalPrice: 3500,
            features: [
                { icon: Wine, text: "ثلاث مشروبات فاخرة (Free)" },
                { icon: UtensilsCrossed, text: "طبق مازة مميزة (Free)" },
                { icon: Apple, text: "طبق فواكه طازة مميزة (Free)" },
                { icon: Crown, text: "مقاعد أمام الستيج مباشرة + خدمة VIP خاصة" },
                { icon: Users, text: "إمكانية الجلوس مع بنات (أكثر تميزاً)" },
            ],
        },
        friends: {
            title: "تيكت الشلة 👫🏻",
            price: 7000,
            originalPrice: 8000,
            features: [
                { icon: Users, text: "الحجز متاح لي 4 افراد فقط 👥" },
                { icon: Wine, text: "مشروبين فاخرين (Free) من اختيارك" },
                { icon: UtensilsCrossed, text: "طبق مازة متنوع (Free)" },
                { icon: Apple, text: "طبق فواكه طازة (Free)" },
                { icon: Users, text: "مقاعد مميزة" },
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

    const calculateBasePrice = () => {
        if (!selectedPackage) return 0;
        return (
            packages[selectedPackage as keyof typeof packages].price * guestCount
        );
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
        localStorage.setItem(
            "selectedPricingPackage",
            JSON.stringify({
                id: pkgId,
                title: packages[pkgId as keyof typeof packages].title,
                price: packages[pkgId as keyof typeof packages].price,
                originalPrice: packages[pkgId as keyof typeof packages].originalPrice,
            })
        );
    };

    return (
        <section
            id="pricing"
            className="relative min-h-screen py-20 flex items-center bg-black overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black">
                {/* Floating Particles */}
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

            {/* Main Content */}
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <Badge className="bg-black/70 px-6 py-2.5 text-lg border border-purple-500/50 text-purple-300 mb-6 hover:bg-purple-900/30 transition-colors">
                        <Gift className="w-5 h-5 ml-2 text-yellow-400 animate-pulse" />
                        Happy now, years 🎉🎟️
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        <span className="text-yellow-400 sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-yellow-400 sm:to-yellow-600">
                            أسعار التيكت مع عروض 2026🔥
                        </span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        اختر التيكت التي تناسبك واستمتع بتجربة لا تُنسى
                    </p>
                </motion.div>

                {/* Pricing Cards */}
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
                            {/* Border Effect */}
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

                            {/* VIP Badge */}
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
                                {/* Card Background Effect */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-purple-500 blur-3xl"></div>
                                    <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-yellow-500 blur-3xl"></div>
                                </div>

                                <CardContent className="p-6 relative z-10">
                                    {/* Title and Price */}
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

                                    {/* Features */}
                                    <div className="space-y-3 mb-8">
                                        {pkg.features.map((feature, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex items-start gap-3 p-3 bg-black/30 rounded-lg backdrop-blur-sm"
                                                whileHover={{
                                                    x: isMobile ? 0 : 5,
                                                }}
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

                                    {/* Booking Button */}
                                    <Link
                                        href="/pricing-booking"
                                        onClick={() => openBookingModal(id)}
                                    >
                                        <motion.div
                                            whileHover={{ scale: isMobile ? 1 : 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Button
                                                size="lg"
                                                className={`w-full text-lg font-bold py-5 relative overflow-hidden ${
                                                    id === "first"
                                                        ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black"
                                                        : "bg-gradient-to-r from-purple-500 to-purple-700 text-white"
                                                }`}
                                            >
                                                {/* Button Effect */}
                                                <motion.span
                                                    className="absolute inset-0 bg-white/20"
                                                    initial={{ x: -100, opacity: 0 }}
                                                    whileHover={{
                                                        x: isMobile ? -100 : 100,
                                                        opacity: 0.3,
                                                    }}
                                                    transition={{ duration: 0.8 }}
                                                />
                                                {id === "first"
                                                    ? "احجز VIP الآن"
                                                    : "احجز الآن"}
                                            </Button>
                                        </motion.div>
                                    </Link>
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

