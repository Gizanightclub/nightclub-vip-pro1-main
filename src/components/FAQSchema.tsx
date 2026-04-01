"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  keywords?: string[];
}

interface FAQSchemaProps {
  showVisibleFAQ?: boolean;
  customFAQs?: FAQItem[];
}

export default function FAQSchema({ showVisibleFAQ = false, customFAQs }: FAQSchemaProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const defaultFAQs: FAQItem[] = [
    {
      question: "ما هي أسعار الدخول في نايت كلوب مصر؟",
      answer: "أسعارنا تبدأ من 750 جنيه للدخول العادي مع مشروب واحد مجاني، وباقة VIP الشاملة بـ 1500 جنيه تتضمن طاولة مميزة ومشروبات ومأكولات وخدمة فاخرة طوال الليل.",
      keywords: ["أسعار نايت كلوب", "750 جنيه", "VIP 1500 جنيه", "باقات نايت كلوب"]
    },
    {
      question: "أين يقع أفضل نايت كلوب في مصر؟",
      answer: "نحن موجودون في موقع مميز على كورنيش النيل في العجوزة، الجيزة. نخدم جميع مناطق القاهرة الكبرى بما في ذلك الشيخ زايد، الزمالك، المعادي، مدينة نصر، والتجمع الخامس.",
      keywords: ["موقع نايت كلوب", "العجوزة", "كورنيش النيل", "القاهرة", "الجيزة"]
    },
    {
      question: "ما هي مواعيد العمل في نايت كلوب مصر؟",
      answer: "نعمل يومياً من الساعة 8:00 مساءً حتى 4:00 صباحاً. نقدم عروض خاصة في عطلات نهاية الأسبوع مع أشهر النجوم والمطربين مثل رحمة محسن وعصام صاصا.",
      keywords: ["مواعيد العمل", "8 مساءً", "4 صباحاً", "عروض ويك إند"]
    },
    {
      question: "هل يمكن حجز طاولات VIP في نايت كلوب مصر؟",
      answer: "نعم، نوفر خدمة حجز طاولات VIP مع خدمة متميزة ومشروبات مجانية وأفضل المقاعد لمشاهدة العروض. يمكنك الحجز مسبقاً عبر الاتصال على 01286110562 أو واتساب.",
      keywords: ["حجز VIP", "طاولات مميزة", "01286110562", "حجز مسبق"]
    },
    {
      question: "من هم أشهر الفنانين الذين يحيون الحفلات؟",
      answer: "نستضيف أشهر نجوم الغناء والرقص في مصر مثل رحمة محسن، عصام صاصا، إسلام كبونجا، رضا البحراوي، وأمهر الراقصات مثل بوسي، روح، ليندا، بديعة، توفحة، وفيروز.",
      keywords: ["رحمة محسن", "عصام صاصا", "بوسي راقصة", "روح راقصة", "نجوم الغناء"]
    },
    {
      question: "هل توجد عروض خاصة أو خصومات؟",
      answer: "نعم، نقدم خصومات تصل إلى 25% للحجز المبكر، وعروض خاصة للمجموعات، وباقات مميزة لأعياد الميلاد والمناسبات الخاصة. كما نوفر عروض أسبوعية وشهرية متجددة.",
      keywords: ["خصومات 25%", "عروض المجموعات", "أعياد الميلاد", "باقات خاصة"]
    },
    {
      question: "كيف يمكنني التواصل والحجز في نايت كلوب مصر؟",
      answer: "يمكنك التواصل معنا والحجز بعدة طرق: الهاتف 01286110562، واتساب، أو زيارة موقعنا. خدمة العملاء متاحة 24/7 لمساعدتك في الحجز وتوفير كافة المعلومات.",
      keywords: ["حجز نايت كلوب", "01286110562", "واتساب", "خدمة عملاء 24/7"]
    },
    {
      question: "ما هي الخدمات المتاحة في باقة VIP؟",
      answer: "باقة VIP تشمل: طاولة مميزة في أفضل موقع، مشروبات مجانية طوال الليل، مأكولات متنوعة، خدمة نادل شخصي، أولوية في الدخول، ومشاهدة مميزة للعروض الحية.",
      keywords: ["خدمات VIP", "طاولة مميزة", "مشروبات مجانية", "نادل شخصي", "أولوية دخول"]
    }
  ];

  const faqs = customFAQs || defaultFAQs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Schema markup للـ FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* عرض FAQ مرئي إذا كان مطلوباً */}
      {showVisibleFAQ && (
        <section className="faq-section bg-gradient-to-b from-black via-purple-900/10 to-black py-16" aria-labelledby="faq-title">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
                ❓ الأسئلة الشائعة
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                كل ما تريد معرفته عن أفضل نايت كلوب في مصر
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="faq-item bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-purple-500/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-white font-medium text-lg">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 pt-0">
                          <div className="bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-lg p-4 border-r-4 border-yellow-400">
                            <p className="text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>

                            {/* الكلمات المفتاحية مخفية للـ SEO */}
                            {faq.keywords && (
                              <div className="sr-only">
                                الكلمات المفتاحية: {faq.keywords.join(', ')}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* CTA بعد FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-12"
            >
              <p className="text-gray-300 mb-4">
                لديك سؤال آخر؟ تواصل معنا الآن!
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
              >
                💬 تواصل معنا الآن
              </a>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}

// مكون مبسط للاستخدام السريع
export function QuickFAQSchema() {
  return <FAQSchema showVisibleFAQ={false} />;
}

// Hook لاستخدام FAQ
export function useFAQ() {
  return {
    renderFAQ: (props?: Partial<FAQSchemaProps>) => <FAQSchema {...props} />
  };
}
