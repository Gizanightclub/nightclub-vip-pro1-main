import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "تواصل معنا واحجز الآن - نايت كلوب مصر | 01286110562",
  description: "احجز في أفضل نايت كلوب بمصر الآن! اتصل على 01286110562 أو احجز عبر واتساب. نخدم القاهرة، الجيزة، العجوزة، الشيخ زايد، الزمالك، المعادي. خدمة عملاء 24/7، حجز فوري، أسعار مميزة من 750 جنيه. عنواننا: كورنيش النيل، العجوزة.",
  keywords: [
    "حجز نايت كلوب مصر", "رقم تليفون نايت كلوب", "01286110562 نايت كلوب",
    "عنوان نايت كلوب العجوزة", "حجز واتساب نايت كلوب", "معلومات الاتصال نايت كلوب",
    "خدمة عملاء نايت كلوب", "حجز فوري نايت كلوب", "موقع نايت كلوب الجيزة",
    "كيفية الوصول نايت كلوب", "ساعات عمل نايت كلوب", "طرق الدفع نايت كلوب",
    "حجز طاولة VIP", "استعلام أسعار نايت كلوب", "تأكيد حجز نايت كلوب"
  ].join(", "),
  openGraph: {
    title: "تواصل معنا واحجز الآن - أفضل نايت كلوب في مصر",
    description: "احجز مكانك في أفضل نايت كلوب بمصر! خدمة حجز سريعة وسهلة، أسعار مميزة، خدمة عملاء متاحة 24/7. اتصل الآن: 01286110562",
    url: "https://www.nightclubegypt.com/contact",
    images: [
      {
        url: "https://www.nightclubegypt.com/images/nightclubegypt.com4.jpg",
        width: 1200,
        height: 630,
        alt: "تواصل معنا واحجز في أفضل نايت كلوب مصر"
      }
    ]
  },
  alternates: {
    canonical: "https://www.nightclubegypt.com/contact"
  }
};

export default function ContactPage() {
  // Redirect to main page with contact anchor
  redirect("/#contact");
}

// Schema markup لمعلومات الاتصال
export const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "تواصل مع نايت كلوب مصر",
  "description": "معلومات الاتصال والحجز في أفضل نايت كلوب بمصر",
  "url": "https://www.nightclubegypt.com/contact",
  "mainEntity": {
    "@type": "NightClub",
    "name": "Night Club Egypt",
    "alternateName": "نايت كلوب مصر",
    "telephone": "+201286110562",
    "email": "info@nightclubegypt.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "كورنيش النيل، العجوزة",
      "addressLocality": "الجيزة",
      "addressRegion": "القاهرة الكبرى",
      "postalCode": "11511",
      "addressCountry": "EG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.0666,
      "longitude": 31.2240
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday"
        ],
        "opens": "20:00",
        "closes": "04:00"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+201286110562",
        "contactType": "customer service",
        "availableLanguage": ["Arabic", "English"],
        "hoursAvailable": "Mo-Su 20:00-04:00"
      },
      {
        "@type": "ContactPoint",
        "email": "info@nightclubegypt.com",
        "contactType": "reservations",
        "availableLanguage": ["Arabic", "English"]
      }
    ],
    "sameAs": [
      "https://wa.me/201286110562",
      "https://www.facebook.com/profile.php?id=61560900837183",
      "https://www.instagram.com/night_club_5star"
    ]
  }
};
