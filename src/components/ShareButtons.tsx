"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Share2,
  Facebook,
  Twitter,
  MessageCircle,
  Copy,
  Check,
  X
} from "lucide-react";
import { Button } from "./ui/button";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

interface ShareButtonsProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
  showLabels?: boolean;
  size?: "sm" | "md" | "lg";
}

const ShareButtons = ({
  url = typeof window !== "undefined" ? window.location.href : "",
  title = "أفضل نايت كلوب في مصر - احجز الآن",
  description = "استمتع بأفضل السهرات الخليجية في أجواء فاخرة مع خصومات تصل إلى 25%",
  className = "",
  showLabels = true,
  size = "md"
}: ShareButtonsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareData = {
    url,
    title,
    quote: description,
    hashtag: "#نايت_كلوب #ديسكو #كاباريه #القاهرة #مصر"
  };

  const whatsappText = `${title}\n\n${description}\n\n${url}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("فشل في نسخ الرابط:", err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (err) {
        console.error("فشل في المشاركة:", err);
      }
    } else {
      setIsOpen(true);
    }
  };

  const toggleShareMenu = () => {
    setIsOpen(!isOpen);
  };

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  return (
    <div className={`relative inline-block ${className}`}>
     {/* زر المشاركة الرئيسي */}
<Button
  onClick={"share" in navigator ? handleNativeShare : toggleShareMenu}
  variant="outline"
  size={size}
  className="bg-purple-500/10 border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:text-purple-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black"
  aria-label="مشاركة الصفحة على وسائل التواصل الاجتماعي"
  aria-expanded={isOpen}
  aria-haspopup="menu"
>

        <Share2 className={`${sizeClasses[size]} transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        {showLabels && <span className="mr-2 hidden sm:inline">مشاركة</span>}
      </Button>

      {/* قائمة المشاركة */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* خلفية الإغلاق */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* قائمة أزرار المشاركة */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black/95 backdrop-blur-xl rounded-xl border border-purple-500/30 p-4 min-w-max z-50 shadow-2xl"
              role="menu"
              aria-label="خيارات المشاركة"
            >
              {/* عنوان القائمة */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold text-sm">مشاركة الصفحة</h3>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white p-1"
                  aria-label="إغلاق قائمة المشاركة"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* أزرار المشاركة */}
              <div className="flex items-center gap-3">
                {/* فيسبوك */}
                <FacebookShareButton
                  url={shareData.url}
                  title={shareData.title}
                  hashtag={shareData.hashtag}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg transition-all duration-200 hover:scale-110"
                  aria-label="مشاركة على فيسبوك"
                  role="menuitem"
                >
                  <div className="flex flex-col items-center gap-1">
                    <FacebookIcon size={iconSizes[size]} round />
                    {showLabels && <span className="text-xs text-gray-300">فيسبوك</span>}
                  </div>
                </FacebookShareButton>

                {/* تويتر */}
                <TwitterShareButton
                  url={shareData.url}
                  title={shareData.title}
                  hashtags={["نايت_كلوب", "ديسكو", "كباريه", "القاهرة"]}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg transition-all duration-200 hover:scale-110"
                  aria-label="مشاركة على تويتر"
                  role="menuitem"
                >
                  <div className="flex flex-col items-center gap-1">
                    <TwitterIcon size={iconSizes[size]} round />
                    {showLabels && <span className="text-xs text-gray-300">تويتر</span>}
                  </div>
                </TwitterShareButton>

                {/* واتساب */}
                <WhatsappShareButton
                  url={shareData.url}
                  title={whatsappText}
                  className="focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg transition-all duration-200 hover:scale-110"
                  aria-label="مشاركة على واتساب"
                  role="menuitem"
                >
                  <div className="flex flex-col items-center gap-1">
                    <WhatsappIcon size={iconSizes[size]} round />
                    {showLabels && <span className="text-xs text-gray-300">واتساب</span>}
                  </div>
                </WhatsappShareButton>

                {/* نسخ الرابط */}
                <Button
                  onClick={handleCopyLink}
                  variant="ghost"
                  size="sm"
                  className="flex flex-col items-center gap-1 p-2 text-gray-300 hover:text-white transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
                  aria-label="نسخ رابط الصفحة"
                  role="menuitem"
                >
                  <div className={`${sizeClasses[size]} flex items-center justify-center bg-purple-500 rounded-full`}>
                    {copied ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <Copy className="w-4 h-4 text-white" />
                    )}
                  </div>
                  {showLabels && (
                    <span className="text-xs">
                      {copied ? "تم النسخ!" : "نسخ الرابط"}
                    </span>
                  )}
                </Button>
              </div>

              {/* سهم المؤشر */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                <div className="w-3 h-3 bg-black/95 border-r border-b border-purple-500/30 transform rotate-45" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* رسالة النسخ */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap z-50"
            role="status"
            aria-live="polite"
          >
            تم نسخ الرابط!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareButtons;
