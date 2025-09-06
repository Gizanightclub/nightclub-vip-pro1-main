import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "باقات وأسعار نايت كلوب مصر - من 750 جنيه | عروض VIP 1500 جنيه",
  description: "اكتشف أفضل باقات وأسعار نايت كلوب مصر 2025! باقة عادية 750 جنيه، باقة VIP 1500 جنيه مع خدمة فاخرة. عروض خاصة للمجموعات وأعياد الميلاد. خصومات تصل 25% للحجز المبكر. احجز الآن في أفضل نايت كلوب بالقاهرة والجيزة.",
  keywords: [
    "أسعار نايت كلوب مصر", "باقات نايت كلوب 750 جنيه", "باقة VIP 1500 جنيه",
    "عروض نايت كلوب خاصة", "أرخص أسعار نايت كلوب", "باقات مجموعات نايت كلوب",
    "حجز نايت كلوب بأقل سعر", "خصومات نايت كلوب مصر", "عروض أعياد الميلاد",
    "أسعار VIP نايت كلوب", "باقات ليلة العرس", "عروض الويك إند نايت كلوب",
    "تكلفة حجز نايت كلوب", "أسعار طاولات VIP", "باقات شاملة نايت كلوب"
  ].join(", "),
  openGraph: {
    title: "باقات وأسعار نايت كلوب مصر - من 750 جنيه | عروض VIP مميزة",
    description: "أفضل أسعار وباقات نايت كلوب في مصر! ابدأ من 750 جنيه للدخول العادي، أو استمتع بباقة VIP 1500 جنيه مع خدمة فاخرة وطاولة مميزة. عروض خاصة وخصومات للمجموعات.",
    url: "https://www.nightclubegypt.com/packages",
    images: [
      {
        url: "https://www.nightclubegypt.com/images/nightclubegypt.com6.jpg",
        width: 1200,
        height: 630,
        alt: "أسعار وباقات نايت كلوب مصر - عروض من 750 جنيه"
      }
    ]
  },
  alternates: {
    canonical: "https://www.nightclubegypt.com/packages"
  }
};

export default function PackagesPage() {
  // Redirect to main page with packages anchor
  redirect("/#packages");
}

// Schema markup للباقات والأسعار
export const packagesSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "باقات نايت كلوب مصر",
  "description": "أفضل باقات وأسعار نايت كلوب في مصر مع خدمة VIP فاخرة",
  "url": "https://www.nightclubegypt.com/packages",
  "image": "https://www.nightclubegypt.com/images/nightclubegypt.com6.jpg",
  "brand": {
    "@type": "Brand",
    "name": "Night Club Egypt"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "باقة الدخول العادي",
      "description": "دخول + مشروب واحد + متابعة العروض الحية",
      "price": "750",
      "priceCurrency": "EGP",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01",
      "priceValidUntil": "2025-12-31",
      "itemCondition": "https://schema.org/NewCondition"
    },
    {
      "@type": "Offer",
      "name": "باقة VIP الفاخرة",
      "description": "طاولة VIP + مشروبات شاملة + مأكولات + خدمة مميزة",
      "price": "1500",
      "priceCurrency": "EGP",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01",
      "priceValidUntil": "2025-12-31",
      "itemCondition": "https://schema.org/NewCondition"
    }
  ],
  "provider": {
    "@type": "NightClub",
    "name": "Night Club Egypt",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "كورنيش النيل، العجوزة",
      "addressLocality": "الجيزة",
      "addressCountry": "EG"
    },
    "telephone": "+201286110562"
  }
};
