"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Star, Camera, DollarSign, Phone, Video, Home } from "lucide-react";

interface InternalLink {
  href: string;
  title: string;
  text: string;
  description: string;
  icon: React.ComponentType<any>;
  seoKeywords: string;
}

interface InternalLinksProps {
  currentSection: string;
  showAll?: boolean;
  layout?: 'horizontal' | 'vertical' | 'grid';
  maxLinks?: number;
}

export default function InternalLinks({
  currentSection,
  showAll = false,
  layout = 'horizontal',
  maxLinks = 4
}: InternalLinksProps) {

  const allLinks: InternalLink[] = [
    {
      href: "/#home",
      title: "العودة للرئيسية",
      text: "الصفحة الرئيسية - أفضل نايت كلوب في مصر",
      description: "اكتشف أفضل سهرات ليلية في مصر مع أشهر النجوم",
      icon: Home,
      seoKeywords: "نايت كلوب مصر، أفضل نايت كلوب، الصفحة الرئيسية"
    },
    {
      href: "/#about",
      title: "تعرف على النادي",
      text: "عن أفضل نايت كلوب في مصر",
      description: "تاريخنا، خدماتنا، وما يميزنا عن الآخرين",
      icon: Star,
      seoKeywords: "عن نايت كلوب، تاريخ النادي، خدمات VIP"
    },
    {
      href: "/#videos",
      title: "شاهد الفيديوهات",
      text: "فيديوهات حصرية للحفلات مع أشهر النجوم",
      description: "استمتع بمشاهدة أجمل لحظات الحفلات مع رحمة محسن وعصام صاصا",
      icon: Video,
      seoKeywords: "فيديوهات نايت كلوب، حفلات رحمة محسن، عصام صاصا"
    },
    {
      href: "/#gallery",
      title: "صور الحفلات",
      text: "معرض صور أجمل السهرات والحفلات",
      description: "شاهد أجمل اللحظات من حفلاتنا مع أشهر الراقصات والمطربين",
      icon: Camera,
      seoKeywords: "صور نايت كلوب، معرض الحفلات، صور الراقصات"
    },
    {
      href: "/#packages",
      title: "باقات وأسعار مميزة",
      text: "باقات VIP بأسعار تبدأ من 750 جنيه",
      description: "اختر الباقة التي تناسبك من العادية 750 جنيه إلى VIP 1500 جنيه",
      icon: DollarSign,
      seoKeywords: "أسعار نايت كلوب، باقات VIP، حجز بـ750 جنيه"
    },
    {
      href: "/#contact",
      title: "احجز الآن",
      text: "احجز طاولتك واستمتع بأفضل السهرات",
      description: "تواصل معنا الآن واحجز مكانك بأفضل الأسعار وأجمل الأجواء",
      icon: Phone,
      seoKeywords: "حجز نايت كلوب، اتصال نايت كلوب، واتساب حجز"
    }
  ];

  // فلترة الروابط لاستبعاد القسم الحالي
  const filteredLinks = allLinks.filter(link =>
    !link.href.includes(currentSection) || showAll
  );

  // تحديد عدد الروابط المعروضة
  const displayedLinks = filteredLinks.slice(0, maxLinks);

  if (displayedLinks.length === 0) return null;

  const layoutClasses = {
    horizontal: "flex flex-wrap gap-4 justify-center",
    vertical: "flex flex-col gap-3",
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
  };

  return (
    <nav
      className="internal-links my-8"
      aria-label="روابط ذات صلة"
      role="navigation"
    >
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">
          🔗 اكتشف المزيد
        </h3>

        <div className={layoutClasses[layout]}>
          {displayedLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="internal-link group relative bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 hover:border-yellow-400/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
              title={link.title}
              aria-label={link.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              {/* أيقونة القسم */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                  <link.icon className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                </div>

                <div className="flex-1 min-w-0">
                  {/* عنوان الرابط */}
                  <h4 className="font-semibold text-white group-hover:text-yellow-400 transition-colors mb-1 text-sm">
                    {link.text}
                  </h4>

                  {/* وصف الرابط */}
                  <p className="text-gray-300 text-xs leading-relaxed mb-2">
                    {link.description}
                  </p>

                  {/* مؤشر الانتقال */}
                  <div className="flex items-center gap-1 text-yellow-400 text-xs font-medium">
                    <span>اكتشف المزيد</span>
                    <ArrowLeft className="w-3 h-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* تأثير الخلفية عند الـ hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.a>
          ))}
        </div>

        {/* نص SEO مخفي للمحركات */}
        <div className="sr-only" aria-hidden="true">
          <p>
            روابط ذات صلة في موقع نايت كلوب مصر: {displayedLinks.map(link => link.seoKeywords).join(', ')}
          </p>
        </div>
      </div>

      {/* Schema markup للروابط الداخلية */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": "روابط التنقل الداخلي",
            "url": "https://www.nightclubegypt.com",
            "hasPart": displayedLinks.map(link => ({
              "@type": "WebPage",
              "name": link.text,
              "description": link.description,
              "url": `https://www.nightclubegypt.com${link.href}`
            }))
          })
        }}
      />
    </nav>
  );
}

// مكون مبسط للاستخدام في المكونات الأخرى
export function QuickInternalLinks({ currentSection }: { currentSection: string }) {
  return (
    <InternalLinks
      currentSection={currentSection}
      layout="horizontal"
      maxLinks={3}
    />
  );
}

// Hook لاستخدام الروابط الداخلية
export function useInternalLinks(currentSection: string) {
  return {
    currentSection,
    renderLinks: (props?: Partial<InternalLinksProps>) => (
      <InternalLinks currentSection={currentSection} {...props} />
    )
  };
}
