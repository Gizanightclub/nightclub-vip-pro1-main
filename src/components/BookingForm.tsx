"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Crown,
  Star,
  Phone,
  User,
  Calendar,
  Clock,
  Users,
  MessageCircle,
  Check,
  Sparkles,
  Gift,
  X
} from "lucide-react";

interface PackageInfo {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  features: string[];
}

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: PackageInfo | null;
}

interface DiscountCode {
  id: string;
  code: string;
  discount_type: 'percentage' | 'fixed';
  discount_value: number;
  is_active: boolean;
  description?: string;
}

const BookingForm = ({ isOpen, onClose, selectedPackage }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    day: "",
    time: "",
    guests: "1",
    discountCode: "",
    specialRequests: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appliedDiscount, setAppliedDiscount] = useState<DiscountCode | null>(null);
  const [discountError, setDiscountError] = useState("");
  const [isValidatingCode, setIsValidatingCode] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // إذا تم تغيير كود الخصم، قم بإعادة تعيين الخصم المطبق
    if (field === "discountCode") {
      setAppliedDiscount(null);
      setDiscountError("");
    }
  };

  const validateDiscountCode = async () => {
    if (!formData.discountCode.trim()) {
      setAppliedDiscount(null);
      setDiscountError("");
      return;
    }

    setIsValidatingCode(true);
    setDiscountError("");

    try {
      const response = await fetch('/api/discount-codes/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: formData.discountCode.trim().toUpperCase()
        }),
      });

      const result = await response.json();

      if (response.ok && result.valid) {
        setAppliedDiscount(result.discountCode);
        setDiscountError("");
      } else {
        setAppliedDiscount(null);
        setDiscountError(result.message || "كود الخصم غير صحيح أو منتهي الصلاحية");
      }
    } catch (error) {
      console.error('Error validating discount code:', error);
      setAppliedDiscount(null);
      setDiscountError("حدث خطأ في التحقق من كود الخصم");
    } finally {
      setIsValidatingCode(false);
    }
  };

  const calculateDiscountAmount = () => {
    if (!appliedDiscount || !selectedPackage) return 0;

    if (appliedDiscount.discount_type === 'percentage') {
      return Math.round((selectedPackage.price * appliedDiscount.discount_value) / 100);
    } else {
      return Math.min(appliedDiscount.discount_value, selectedPackage.price);
    }
  };

  const calculateFinalPrice = () => {
    if (!selectedPackage) return 0;

    const discountAmount = calculateDiscountAmount();
    return Math.max(0, selectedPackage.price - discountAmount);
  };

  const calculateTotalSavings = () => {
    if (!selectedPackage) return 0;

    const discountAmount = calculateDiscountAmount();
    const originalSavings = selectedPackage.originalPrice - selectedPackage.price;
    return originalSavings + discountAmount;
  };

  const validateForm = () => {
    return formData.name && formData.phone && formData.day && formData.time;
  };

  const sendToWhatsApp = async () => {
    if (!selectedPackage || !validateForm()) return;

    setIsSubmitting(true);

    try {
      // تطبيق كود الخصم إذا كان موجود
      if (appliedDiscount) {
        await fetch('/api/discount-codes/validate', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ codeId: appliedDiscount.id })
        });
      }

      const finalPrice = calculateFinalPrice();
      const totalSavings = calculateTotalSavings();
      const discountAmount = calculateDiscountAmount();

      let discountMessage = "";
      if (appliedDiscount) {
        discountMessage = `💸 *خصم مطبق:* ${appliedDiscount.code} (-${discountAmount} جنيه)
${appliedDiscount.description ? `📝 ${appliedDiscount.description}` : ""}`;
      }

      const message = `🔥 *حجز جديد - Night Club VIP* 🔥

👑 *الباقة المختارة:* ${selectedPackage.title}
💰 *السعر الأصلي:* ${selectedPackage.originalPrice} جنيه
💲 *سعر الباقة:* ${selectedPackage.price} جنيه
${discountMessage}
💵 *السعر النهائي:* ${finalPrice} جنيه
🎉 *إجمالي التوفير:* ${totalSavings} جنيه!

👤 *بيانات العميل:*
• الاسم: ${formData.name}
• الهاتف: ${formData.phone}
• يوم الحجز: ${formData.day}
• وقت الوصول: ${formData.time}
• عدد الأشخاص: ${formData.guests}

📋 *تفاصيل الباقة:*
${selectedPackage.features.map(feature => `• ${feature}`).join("\n")}

${formData.specialRequests ? `\n📝 *طلبات خاصة:*\n${formData.specialRequests}` : ''}

🌟 *تم الحجز من خلال الموقع الرسمي*
⏰ *يرجى تأكيد الحجز خلال 24 ساعة*`;

      const phoneNumber = "201286110562";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, '_blank');

      // حفظ بيانات الحجز في قاعدة البيانات
      await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: formData.name,
          customer_phone: formData.phone,
          booking_date: new Date().toISOString().split('T')[0], // تاريخ اليوم
          number_of_people: parseInt(formData.guests),
          package_type: selectedPackage.title,
          total_amount: selectedPackage.price,
          discount_code: appliedDiscount?.code || null,
          discount_amount: discountAmount,
          final_amount: finalPrice,
          notes: `يوم الحجز: ${formData.day} - وقت الوصول: ${formData.time}${formData.specialRequests ? ` - طلبات خاصة: ${formData.specialRequests}` : ''}`
        })
      });

    } catch (error) {
      console.error('Error processing booking:', error);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      setFormData({
        name: "",
        phone: "",
        day: "",
        time: "",
        guests: "1",
        discountCode: "",
        specialRequests: ""
      });
      setAppliedDiscount(null);
      setDiscountError("");
    }, 1000);
  };

  if (!selectedPackage) return null;

  const finalPrice = calculateFinalPrice();
  const totalSavings = calculateTotalSavings();

  const showSecretDiscountField = true; // غيّره لـ false لو مش عاوز يظهر

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-dark border-nightclub-purple/50 max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="p-3 rounded-full bg-gradient-gold">
              <Crown className="w-8 h-8 text-black" />
            </div>
            <Sparkles className="w-6 h-6 text-nightclub-gold animate-sparkle" />
          </motion.div>

          <DialogTitle className="text-3xl font-bold text-nightclub-gold animate-neon">
            تأكيد حجز {selectedPackage.title}
          </DialogTitle>

          <div className="flex items-center justify-center gap-4 mt-4">
            <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold px-4 py-2">
              وفر {totalSavings} جنيه!
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Booking Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-nightclub-gold flex items-center gap-2">
                <User className="w-4 h-4" />
                الاسم الكامل *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="أدخل اسمك الكامل"
                className="glass-dark border-nightclub-purple/50 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-nightclub-gold flex items-center gap-2">
                <Phone className="w-4 h-4" />
                رقم الهاتف *
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="01xxxxxxxxx"
                className="glass-dark border-nightclub-purple/50 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="day" className="text-nightclub-gold flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                يوم الحجز *
              </Label>
              <Select onValueChange={(value) => handleInputChange("day", value)}>
                <SelectTrigger className="glass-dark border-nightclub-purple/50 text-white">
                  <SelectValue placeholder="اختر اليوم" />
                </SelectTrigger>
                <SelectContent className="glass-dark border-nightclub-purple/50">
                  {["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"].map((day) => (
                    <SelectItem key={day} value={day}>
                      {day}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="text-nightclub-gold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                وقت الوصول *
              </Label>
              <Select onValueChange={(value) => handleInputChange("time", value)}>
                <SelectTrigger className="glass-dark border-nightclub-purple/50 text-white">
                  <SelectValue placeholder="اختر الوقت" />
                </SelectTrigger>
                <SelectContent className="glass-dark border-nightclub-purple/50">
                  <SelectItem value="20:00">8:00 مساءً</SelectItem>
                  <SelectItem value="21:00">9:00 مساءً</SelectItem>
                  <SelectItem value="22:00">10:00 مساءً</SelectItem>
                  <SelectItem value="23:00">11:00 مساءً</SelectItem>
                  <SelectItem value="00:00">12:00 منتصف الليل</SelectItem>
                  <SelectItem value="01:00">1:00 صباحاً</SelectItem>
                  <SelectItem value="02:00">2:00 صباحاً</SelectItem>
                  <SelectItem value="03:00">3:00 صباحاً</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="guests" className="text-nightclub-gold flex items-center gap-2">
                <Users className="w-4 h-4" />
                عدد الأشخاص
              </Label>
              <Select onValueChange={(value) => handleInputChange("guests", value)} defaultValue="1">
                <SelectTrigger className="glass-dark border-nightclub-purple/50 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="glass-dark border-nightclub-purple/50">
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? 'شخص' : 'أشخاص'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* كود الخصم المحسن */}
            <div className="space-y-3 md:col-span-2">
              <Label htmlFor="discountCode" className="text-nightclub-gold flex items-center gap-2">
                <Gift className="w-4 h-4" />
                كود الخصم (اختياري)
              </Label>

              <div className="flex gap-2">
                <Input
                  id="discountCode"
                  value={formData.discountCode}
                  onChange={(e) => handleInputChange("discountCode", e.target.value.toUpperCase())}
                  placeholder="أدخل كود الخصم"
                  className="glass-dark border-nightclub-purple/50 text-white flex-1"
                  onKeyPress={(e) => e.key === "Enter" && validateDiscountCode()}
                />
                <Button
                  type="button"
                  onClick={validateDiscountCode}
                  disabled={!formData.discountCode.trim() || isValidatingCode}
                  aria-label="تحقق من صحة كود الخصم المدخل"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6"
                >
                  {isValidatingCode ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "تحقق"
                  )}
                </Button>
              </div>

              {/* نتيجة التحقق من كود الخصم */}
              {appliedDiscount && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Check className="w-4 h-4" />
                    <span className="font-bold">تم تطبيق كود الخصم!</span>
                  </div>
                  <div className="text-sm">
                    {appliedDiscount.description && (
                      <p className="mb-1">{appliedDiscount.description}</p>
                    )}
                    <p>
                      خصم: {appliedDiscount.discount_type === 'percentage'
                        ? `${appliedDiscount.discount_value}%`
                        : `${appliedDiscount.discount_value} جنيه`
                      } • توفير: {calculateDiscountAmount()} جنيه
                    </p>
                  </div>
                </motion.div>
              )}

              {discountError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300"
                >
                  <div className="flex items-center gap-2">
                    <X className="w-4 h-4" />
                    <span>{discountError}</span>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="requests" className="text-nightclub-gold flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                طلبات خاصة (اختياري)
              </Label>
              <Textarea
                id="requests"
                value={formData.specialRequests}
                onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                placeholder="أي طلبات أو ملاحظات خاصة..."
                className="glass-dark border-nightclub-purple/50 text-white min-h-[100px]"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              onClick={onClose}
              variant="outline"
              aria-label="إلغاء نموذج الحجز والعودة للصفحة الرئيسية"
              className="flex-1 border-nightclub-purple/50 text-white hover:bg-nightclub-purple/20"
            >
              إلغاء
            </Button>

            <Button
              onClick={sendToWhatsApp}
              disabled={!validateForm() || isSubmitting}
              aria-label={`تأكيد الحجز وإرسال التفاصيل عبر WhatsApp بالسعر النهائي ${finalPrice} جنيه`}
              className="flex-1 bg-gradient-gold text-black font-bold hover:scale-105 transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  جاري الإرسال...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  تأكيد الحجز - {finalPrice} ج
                </div>
              )}
            </Button>
          </div>

          {/* Note */}
          <div className="text-center text-sm text-gray-400 border-t border-nightclub-purple/30 pt-4">
            <p>* بعد تأكيد الحجز، ستتم إعادة توجيهك للواتساب لإرسال التفاصيل</p>
            <p className="text-nightclub-gold mt-1">📞 خدمة العملاء: 01286110562</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
