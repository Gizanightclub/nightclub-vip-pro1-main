"use client";

import { ChevronLeft, Home } from "lucide-react";
import { useEffect, useState } from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
  seoTitle?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  currentSection?: string;
}

export default function Breadcrumbs({ items, currentSection }: BreadcrumbsProps) {
  const [autoItems, setAutoItems] = useState<BreadcrumbItem[]>([]);

  // تحديد breadcrumbs تلقائياً بناءً على القسم النشط
  useEffect(() => {
    const sectionMap = {
      home: { label: "الرئيسية", href: "/#home", seoTitle: "الصفحة الرئيسية - أفضل نايت كلوب في مصر" },
      about: { label: "عن النادي", href: "/#about", seoTitle: "عن أفضل نايت كلوب في مصر - تاريخ وخدمات" },
      videos: { label: "الفيديوهات", href: "/#videos", seoTitle: "فيديوهات حفلات نايت كلوب مصر مع أشهر النجوم" },
      gallery: { label: "المعرض", href: "/#gallery", seoTitle: "معرض صور نايت كلوب مصر - أجمل اللحظات" },
      packages: { label: "الباقات", href: "/#packages", seoTitle: "باقات وأسعار نايت كلوب مصر من 750 جنيه" },
      contact: { label: "التواصل", href: "/#contact", seoTitle: "تواصل معنا واحجز - نايت كلوب مصر" }
    };

    if (currentSection && sectionMap[currentSection as keyof typeof sectionMap]) {
      const section = sectionMap[currentSection as keyof typeof sectionMap];
      setAutoItems([
        { label: "الرئيسية", href: "/#home", seoTitle: "العودة للصفحة الرئيسية" },
        { ...section, current: true }
      ]);
    } else {
      setAutoItems([
        { label: "الرئيسية", href: "/#home", current: true, seoTitle: "الصفحة الرئيسية - أفضل نايت كلوب في مصر" }
      ]);
    }
  }, [currentSection]);

  const breadcrumbItems = items || autoItems;

  if (breadcrumbItems.length <= 1) return null;

  return (
    <nav
      aria-label="مسار التنقل - Breadcrumb Navigation"
      className="mb-6"
      role="navigation"
    >
      <ol className="flex items-center gap-2 text-sm text-gray-400 bg-black/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-purple-500/20">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {/* فاصل الأسهم */}
            {index > 0 && (
              <ChevronLeft
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
              />
            )}

            {/* أيقونة البيت للصفحة الرئيسية */}
            {index === 0 && (
              <Home className="w-4 h-4" aria-hidden="true" />
            )}

            {/* رابط أو نص نشط */}
            {item.current ? (
              <span
                className="text-yellow-400 font-medium flex items-center gap-1"
                aria-current="page"
                title={item.seoTitle}
              >
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                className="hover:text-yellow-400 transition-colors duration-200 flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 focus:ring-offset-black rounded px-1 py-0.5"
                title={item.seoTitle || `انتقل إلى ${item.label}`}
                aria-label={`انتقل إلى قسم ${item.label}`}
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>

      {/* Schema markup للـ breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbItems.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.label,
              "item": `https://www.nightclubegypt.com${item.href.replace('#', '/')}`
            }))
          })
        }}
      />
    </nav>
  );
}

// Hook لاستخدام Breadcrumbs تلقائياً
export function useBreadcrumbs(currentSection?: string) {
  return { currentSection };
}

// مكون Breadcrumbs مبسط للاستخدام السريع
export function QuickBreadcrumbs({ section }: { section: string }) {
  return <Breadcrumbs currentSection={section} />;
}
