"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Place } from "@/lib/places";
import { Check } from "lucide-react";
import Image from "next/image";
import StarRating from "./StarRating";

type PaymentOption = "instaPay" | "noPayment";

const PlaceBookingForm = ({ place }: { place: Place }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guestCount, setGuestCount] = useState(2);
  const packages = place.packages;
  const [selectedPackage, setSelectedPackage] = useState<string>(packages[0]?.id || "standard");
  const [useInstaPay, setUseInstaPay] = useState<PaymentOption>("instaPay");
  const [paidOnSite, setPaidOnSite] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [isValidCode, setIsValidCode] = useState(false);
  const [invalidCodeMessage, setInvalidCodeMessage] = useState("");

  const selectedPkg = packages.find((pkg) => pkg.id === selectedPackage);
  const basePrice = (selectedPkg?.price || 0) * guestCount;
  const discountAmount = Math.floor(basePrice * appliedDiscount);
  const total = basePrice - discountAmount;

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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !date.trim()) {
      setMessage("❌ يرجى تعبئة جميع الحقول المطلوبة.");
      return;
    }

    const selectedPkg = packages.find((pkg) => pkg.id === selectedPackage);
    const status = useInstaPay === "instaPay" ? (paidOnSite ? "Paid" : "Pending InstaPay") : "Not Paid";

    const whatsappText = encodeURIComponent(`
🎉 *طلب حجز جديد - Night Club Egypt* 🎉

📍 *تفاصيل المكان*
🏢 المكان: ${place.name}
📍 الموقع: ${place.location}

👤 *بيانات العميل*
👤 الاسم: ${name}
📞 الهاتف: ${phone}
📅 التاريخ: ${date}

💼 *تفاصيل الحجز*
🎫 الباقة: ${selectedPkg?.name}
👥 عدد الأشخاص: ${guestCount}
💰 السعر الأساسي: ${basePrice} EGP
${discountCode ? `🏷️ كود الخصم: ${discountCode}` : ""}
${discountAmount > 0 ? `💵 قيمة الخصم: ${discountAmount} EGP (${appliedDiscount * 100}%)` : ""}

✅ *الإجمالي: ${total} EGP*

💳 طريقة الدفع: ${useInstaPay === "instaPay" ? "InstaPay" : "حجز بدون دفع"}
📊 حالة الدفع: ${status}

----------------------
شكراً لاختياركم Night Club Egypt 🎉
استمتعوا بأجمل الأوقات والذكريات معنا ✨
`);

    // فتح WhatsApp
    window.open(`https://wa.me/201286110562?text=${whatsappText}`, "_blank");

    // إذا اختار InstaPay، افتح الرابط الآمن للدفع
    if (useInstaPay === "instaPay") {
      setTimeout(() => {
        window.open("https://ipn.eg/S/sabersry/instapay/2B3xKM", "_blank");
      }, 1000);
      setMessage("✅ تم إرسال طلب الحجز! سيتم فتح صفحة الدفع عبر InstaPay...");
    } else {
      setMessage("✅ تم إرسال طلب الحجز بنجاح! سيتم التواصل معك قريباً عبر واتساب.");
    }
    
    // Reset form بعد ثانيتين
    setTimeout(() => {
      setName("");
      setPhone("");
      setDate("");
      setGuestCount(2);
      setSelectedPackage(packages[0]?.id || "standard");
      setMessage(null);
      setDiscountCode("");
      setAppliedDiscount(0);
      setIsValidCode(false);
    }, 2000);
  };

  return (
    <section className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-purple-500/40 bg-black/70 backdrop-blur-md overflow-hidden shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 md:p-8">
          {/* جزء الصورة والمعلومات */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative rounded-2xl overflow-hidden border border-purple-500/30 aspect-video"
            >
              <Image
                src={place.image}
                alt={place.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-white">{place.name}</h2>
                  {place.rating && (
                    <div className="mt-1">
                      <StarRating rating={place.rating} size={16} />
                    </div>
                  )}
                  <p className="text-sm text-gray-300 mt-1">{place.location}</p>
                </div>
              </div>
            </motion.div>

            {/* ملخص الأسعار */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-purple-500/30 bg-black/50 p-4 space-y-3"
            >
              <h3 className="text-lg font-bold text-yellow-400">ملخص السعر</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">السعر الأساسي:</span>
                  <span className="text-white font-medium">{basePrice} EGP</span>
                </div>
                {isValidCode && discountAmount > 0 && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-300">الخصم:</span>
                      <span className="text-green-400 font-medium">-{discountAmount} EGP</span>
                    </div>
                  </>
                )}
                <div className="flex justify-between pt-2 border-t border-yellow-400/20 font-bold">
                  <span className="text-gray-300">الإجمالي:</span>
                  <span className="text-yellow-400 text-lg">{total} EGP</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* جزء النموذج */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <h2 className="text-3xl font-extrabold text-white mb-2">احجز {place.name}</h2>
              {place.rating && (
                <div className="mb-2">
                  <StarRating rating={place.rating} size={18} />
                </div>
              )}
              <p className="text-sm text-gray-400">{place.description}</p>
            </motion.div>

            {/* رسالة النجاح */}
            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mb-4 p-3 rounded-lg text-sm text-center ${
                    message.includes("✅")
                      ? "bg-green-500/20 border border-green-500/50 text-green-400"
                      : "bg-red-500/20 border border-red-500/50 text-red-400"
                  }`}
                >
                  {message}
                </motion.div>
              )}
            </AnimatePresence>

            {/* اختيار الباقات */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-3">اختر الباقة</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {packages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`rounded-lg p-3 cursor-pointer border-2 transition-all ${
                      selectedPackage === pkg.id
                        ? "border-yellow-400 bg-yellow-400/10"
                        : "border-purple-500/30 bg-black/30 hover:border-purple-400/50"
                    }`}
                  >
                    <h4 className="text-sm font-bold text-white">{pkg.name}</h4>
                    <p className="text-lg font-bold text-yellow-400 mt-1">{pkg.price} ج</p>
                    <p className="text-xs text-gray-400 line-through">{pkg.originalPrice} ج</p>
                    <p className="text-xs text-green-400 mt-1">وفر {pkg.originalPrice - pkg.price} ج</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* النموذج */}
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">الاسم *</label>
                  <input
                    type="text"
                    placeholder="اسم العميل"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className="bg-purple-600 hover:bg-purple-700 px-3"
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
              </div>

              {/* طريقة الدفع */}
              <fieldset className="rounded-lg border border-purple-500/20 p-4 bg-black/20">
                <legend className="text-sm font-semibold text-gray-200">طريقة الدفع</legend>
                <div className="flex flex-wrap gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setUseInstaPay("instaPay");
                      setMessage("✅ اخترت InstaPay، يمكنك الآن إكمال الحجز.");
                    }}
                    className={`rounded-lg px-4 py-2 font-bold text-sm transition ${
                      useInstaPay === "instaPay"
                        ? "bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-lg shadow-pink-500/40"
                        : "bg-white/10 text-gray-300 hover:bg-white/20"
                    }`}
                  >
                    InstaPay
                  </button>
                  <button
                    type="button"
                    onClick={() => setUseInstaPay("noPayment")}
                    className={`rounded-lg px-4 py-2 font-bold text-sm transition ${
                      useInstaPay === "noPayment"
                        ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-black shadow-lg shadow-yellow-400/40"
                        : "bg-white/10 text-gray-300 hover:bg-white/20"
                    }`}
                  >
                    حجز بدون دفع
                  </button>
                  <a
                    href="https://ipn.eg/S/sabersry/instapay/2B3xKM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg px-4 py-2 font-bold text-sm transition bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/40"
                  >
                    💳 ادفع الآن مباشرة
                  </a>
                </div>
              </fieldset>

              {useInstaPay === "instaPay" && (
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="paidOnSite"
                    checked={paidOnSite}
                    onChange={(e) => setPaidOnSite(e.target.checked)}
                    className="h-4 w-4 accent-cyan-500"
                  />
                  <label htmlFor="paidOnSite" className="text-sm text-gray-300">
                    ✓ تم الدفع عبر InstaPay
                  </label>
                </div>
              )}

              {/* الأزرار */}
              <div className="flex flex-col gap-3 md:flex-row pt-4">
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 rounded-lg hover:scale-105 transition"
                >
                  <Check className="w-5 h-5 mr-2" />
                  إرسال الحجز عبر واتساب
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold py-3 rounded-lg hover:scale-105 transition border-purple-500/50"
                  onClick={() => router.back()}
                >
                  العودة
                </Button>
              </div>
            </form>

            <p className="text-xs text-gray-400 mt-3 text-center">
              سيُفتح WhatsApp لإرسال تفاصيل الحجز. يمكنك تعديل الرسالة قبل الإرسال.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PlaceBookingForm;
