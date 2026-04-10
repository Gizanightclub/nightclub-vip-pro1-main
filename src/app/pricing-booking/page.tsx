"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    ArrowRight,
    Calendar,
} from "lucide-react";
import Image from "next/image";
import SEOUnified from "@/components/SEOUnified";

interface SelectedPackageData {
    id: string;
    title: string;
    price: number;
    originalPrice: number;
}

const PricingBookingPage = () => {
    const [selectedPackageData, setSelectedPackageData] = useState<SelectedPackageData | null>(null);
    const [guestCount, setGuestCount] = useState(1);
    const [discountCode, setDiscountCode] = useState("");
    const [appliedDiscount, setAppliedDiscount] = useState(0);
    const [isValidCode, setIsValidCode] = useState(false);
    const [invalidCodeMessage, setInvalidCodeMessage] = useState("");
    const [isMobile, setIsMobile] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

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
                { icon: Users, text: "الحجز متاح لي 4 افراد فقط 👥 " },
                { icon: Wine, text: "مشروبين فاخرين (Free) من اختيارك" },
                { icon: UtensilsCrossed, text: "طبق مازة متنوع (Free)" },
                { icon: Apple, text: "طبق فواكه طازة (Free)" },
                { icon: Users, text: "مقاعد مميزة" },
            ],
        },
    };

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);

        // قراءة البيانات من localStorage
        const stored = localStorage.getItem("selectedPricingPackage");
        if (stored) {
            setSelectedPackageData(JSON.parse(stored));
        }

        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    const calculateBasePrice = () => {
        if (!selectedPackageData) return 0;
        return selectedPackageData.price * guestCount;
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

        if (!name.trim() || !phone.trim() || !date.trim() || !selectedPackageData) {
            alert("يرجى تعبئة جميع الحقول");
            return;
        }

        const basePrice = selectedPackageData.price * guestCount;
        const discountAmount = Math.floor(basePrice * appliedDiscount);
        const totalPrice = basePrice - discountAmount;

        const message = `
🎉*طلب حجز جديد - Night Club Egypt*🎉

📌 *تفاصيل الحجز*
👤 الاسم: ${name}
📞 الهاتف: ${phone}
📅 التاريخ: ${date}

💼 نوع الباقة: ${selectedPackageData.title}
👥 عدد الأشخاص: ${guestCount}

💰 السعر الأساسي: ${basePrice} EGP
${discountCode ? `🏷️ كود الخصم: ${discountCode}` : ""}
${discountAmount > 0 ? `💵 قيمة الخصم: ${discountAmount} EGP (${appliedDiscount * 100}%)` : ""}

✅ *الإجمالي: ${totalPrice} EGP*

----------------------
شكراً لاختياركم Night Club Egypt 🎉
استمتعوا بأجمل الأوقات والذكريات معنا ✨
`.trim();

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/201286110562?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
        setFormSubmitted(true);

        // إعادة تعيين النموذج
        setTimeout(() => {
            setName("");
            setPhone("");
            setDate("");
            setGuestCount(1);
            setDiscountCode("");
            setAppliedDiscount(0);
            setIsValidCode(false);
            setFormSubmitted(false);
            localStorage.removeItem("selectedPricingPackage");
        }, 2000);
    };

    if (!selectedPackageData) {
        return (
            <>
                <SEOUnified
                    pageType="booking"
                    customTitle="حجز باقات نايت كلوب مصر - أسعار مميزة من 2000 جنيه | Night Club Egypt"
                    customDescription="احجز باقات نايت كلوب مصر بأسعار مميزة من 2000 جنيه. تيكت صف تاني، تيكت VIP، تيكت الشلة. خدمة توصيل وخصومات خاصة عبر 01286110562."
                    customKeywords={["حجز نايت كلوب", "باقات نايت كلوب", "أسعار نايت كلوب", "تيكت VIP", "تيكت صف تاني", "تيكت الشلة"]}
                />
                <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-12"
                        >
                            <h1 className="text-4xl font-bold text-white mb-4">اختر الباقة المناسبة</h1>
                            <p className="text-gray-300">اختر الباقة التي تناسب احتياجاتك واستمتع بتجربة لا تُنسى</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {Object.entries(packages).map(([key, pkg], index) => (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="relative overflow-hidden border-purple-500/30 bg-black/50 hover:bg-black/70 transition-all duration-300 hover:scale-105 group">
                                        <CardContent className="p-6">
                                            <div className="text-center mb-6">
                                                <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                                                <div className="flex items-center justify-center gap-2 mb-4">
                                                    <span className="text-3xl font-bold text-yellow-400">{pkg.price} EGP</span>
                                                    <span className="text-lg text-gray-400 line-through">{pkg.originalPrice} EGP</span>
                                                </div>
                                                <Badge className="bg-purple-600 text-white">
                                                    توفير {pkg.originalPrice - pkg.price} EGP
                                                </Badge>
                                            </div>

                                            <div className="space-y-3 mb-6">
                                                {pkg.features.map((feature, i) => (
                                                    <div key={i} className="flex items-start gap-3 text-sm">
                                                        <feature.icon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-300">{feature.text}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <Button
                                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 rounded-lg hover:scale-105 transition"
                                                onClick={() => {
                                                    const data = { id: key, ...pkg };
                                                    localStorage.setItem("selectedPricingPackage", JSON.stringify(data));
                                                    setSelectedPackageData(data);
                                                }}
                                            >
                                                اختر هذه الباقة
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link href="/#pricing" className="text-cyan-400 hover:text-cyan-300">
                                العودة للصفحة الرئيسية
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    const pkg = packages[selectedPackageData.id as keyof typeof packages];

    return (
        <>
            <SEOUnified
                pageType="booking"
                customTitle={`حجز ${selectedPackageData.title} - ${selectedPackageData.price} جنيه | Night Club Egypt`}
                customDescription={`احجز ${selectedPackageData.title} بقيمة ${selectedPackageData.price} جنيه. خدمة VIP، مشروبات مجانية، توصيل فاخر. اتصل 01286110562 للحجز الفوري.`}
                customKeywords={[`حجز ${selectedPackageData.title}`, "نايت كلوب مصر", "حجز VIP", "توصيل فاخر", "مشروبات مجانية"]}
            />
            <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black py-20">
                {/* Header */}
                <div className="container mx-auto px-4 mb-12">
                    <Link 
                        href="/#pricing"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition mb-8"
                    >
                        <ArrowRight className="w-5 h-5" />
                        العودة للأسعار
                    </Link>
                </div>

                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    >
                        {/* جزء الصورة والمعلومات */}
                        <div className="lg:col-span-1 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative rounded-2xl overflow-hidden border border-purple-500/30 aspect-video"
                            >
                                <Image
                                    src="/نايت كلوب القاهره.jpg"
                                    alt="Night Club"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                                    <div className="p-6 w-full">
                                        <h2 className="text-2xl font-bold text-white">{selectedPackageData.title}</h2>
                                    </div>
                                </div>
                            </motion.div>

                            {/* ملخص السعر */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="rounded-xl border border-purple-500/30 bg-black/50 p-6 space-y-4"
                            >
                                <h3 className="text-lg font-bold text-yellow-400">ملخص السعر</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">السعر الأساسي:</span>
                                        <span className="text-white font-medium">{calculateBasePrice()} EGP</span>
                                    </div>
                                    {isValidCode && calculateDiscountAmount() > 0 && (
                                        <>
                                            <div className="flex justify-between">
                                                <span className="text-gray-300">الخصم:</span>
                                                <span className="text-green-400 font-medium">-{calculateDiscountAmount()} EGP</span>
                                            </div>
                                        </>
                                    )}
                                    <div className="flex justify-between pt-3 border-t border-yellow-400/20 font-bold">
                                        <span className="text-gray-300">الإجمالي:</span>
                                        <span className="text-yellow-400 text-lg">{calculateTotal()} EGP</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* تفاصيل الباقة */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="rounded-xl border border-purple-500/30 bg-black/50 p-6"
                            >
                                <h3 className="text-lg font-bold text-white mb-4">المميزات</h3>
                                <div className="space-y-2">
                                    {pkg?.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm">
                                            <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* جزء النموذج */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="rounded-2xl border border-purple-500/30 bg-black/70 p-8 shadow-2xl"
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    <Crown className="w-6 h-6 text-yellow-400" />
                                    <h2 className="text-3xl font-bold text-white">تأكيد الحجز</h2>
                                </div>

                                {/* رسالة النجاح */}
                                <AnimatePresence>
                                    {formSubmitted && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center"
                                        >
                                            ✅ تم إرسال الحجز بنجاح! سيتم التواصل معك قريباً.
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* الاسم والهاتف */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-300 text-sm mb-2">الاسم *</label>
                                            <input
                                                type="text"
                                                placeholder="أدخل اسمك"
                                                className="w-full rounded-lg p-3 bg-white/5 border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-300 text-sm mb-2">الهاتف *</label>
                                            <input
                                                type="tel"
                                                placeholder="رقم الهاتف"
                                                className="w-full rounded-lg p-3 bg-white/5 border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* التاريخ */}
                                    <div>
                                        <label className="block text-gray-300 text-sm mb-2">التاريخ *</label>
                                        <input
                                            type="date"
                                            className="w-full rounded-lg p-3 bg-white/5 border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* عدد الأشخاص */}
                                    <div>
                                        <label className="block text-gray-300 text-sm mb-2">عدد الأشخاص</label>
                                        <select
                                            value={guestCount}
                                            onChange={(e) => setGuestCount(Number(e.target.value))}
                                            className="w-full rounded-lg p-3 bg-white/5 border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
                                        <label className="block text-gray-300 text-sm mb-2">كود الخصم (اختياري)</label>
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                placeholder="أدخل كود الخصم"
                                                className="flex-1 rounded-lg p-3 bg-white/5 border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                                value={discountCode}
                                                onChange={(e) => {
                                                    setDiscountCode(e.target.value.toUpperCase());
                                                    setInvalidCodeMessage("");
                                                }}
                                            />
                                            <Button
                                                type="button"
                                                onClick={checkDiscountCode}
                                                size="sm"
                                                className="bg-purple-600 hover:bg-purple-700 px-6 py-3"
                                            >
                                                تطبيق
                                            </Button>
                                        </div>
                                        <AnimatePresence>
                                            {invalidCodeMessage && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0 }}
                                                    className="text-red-400 text-xs mt-1"
                                                >
                                                    {invalidCodeMessage}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* الأزرار */}
                                    <div className="flex flex-col gap-3 md:flex-row pt-4">
                                        <Button
                                            type="submit"
                                            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 rounded-lg hover:scale-105 transition"
                                        >
                                            <Calendar className="w-5 h-5 mr-2" />
                                            إرسال الحجز عبر واتساب
                                        </Button>
                                        <Link href="/#pricing" className="flex-1">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                className="w-full text-white border-white/20 hover:bg-white/10"
                                            >
                                                العودة
                                            </Button>
                                        </Link>
                                    </div>
                                </form>

                                <p className="text-xs text-gray-400 mt-4 text-center">
                                    سيُفتح WhatsApp لإرسال تفاصيل الحجز. يمكنك تعديل الرسالة قبل الإرسال.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default PricingBookingPage;
