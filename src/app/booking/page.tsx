import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "احجز الآن في أفضل نايت كلوب مصر - حجز فوري | خصومات 25%",
  description: "احجز مكانك الآن في أفضل نايت كلوب بمصر! حجز فوري وسريع، خصومات تصل 25% للحجز المبكر. باقة عادية 750 جنيه، VIP 1500 جنيه. متاح طوال الأسبوع في القاهرة، الجيزة، العجوزة، الشيخ زايد. اتصل: 01286110562 أو احجز واتساب فوراً!",
  keywords: [
    "حجز نايت كلوب فوري", "احجز نايت كلوب مصر الآن", "حجز مباشر نايت كلوب",
    "خصومات حجز نايت كلوب", "حجز طاولة VIP مصر", "حجز واتساب نايت كلوب",
    "حجز أون لاين نايت كلوب", "تأكيد حجز فوري", "حجز ليلة السبت نايت كلوب",
    "حجز عيد ميلاد نايت كلوب", "حجز مجموعات نايت كلوب", "حجز رحلة نايت كلوب",
    "أسرع حجز نايت كلوب", "حجز بأفضل سعر", "حجز نايت كلوب الجيزة الآن"
  ].join(", "),
  openGraph: {
    title: "احجز الآن في أفضل نايت كلوب مصر - خصومات 25%",
    description: "حجز سريع وسهل في أفضل نايت كلوب بمصر! خصومات مميزة، أسعار تبدأ من 750 جنيه، خدمة VIP فاخرة. احجز الآن واستمتع بأفضل السهرات!",
    url: "https://www.nightclubegypt.com/booking",
    images: [
      {
        url: "https://www.nightclubegypt.com/images/nightclubegypt.com2.jpg",
        width: 1200,
        height: 630,
        alt: "احجز الآن في أفضل نايت كلوب مصر - خصومات مميزة"
      }
    ]
  },
  alternates: {
    canonical: "https://www.nightclubegypt.com/booking"
  }
};

export default function BookingPage() {
  // Redirect to main page with contact section for booking
  redirect("/#contact");
}

// Schema markup للحجز
export const bookingSchema = {
  "@context": "https://schema.org",
  "@type": "ReservationService",
  "name": "خدمة حجز نايت كلوب مصر",
  "description": "احجز مكانك في أفضل نايت كلوب بمصر بأسعار مميزة وخصومات حصرية",
  "url": "https://www.nightclubegypt.com/booking",
  "provider": {
    "@type": "NightClub",
    "name": "Night Club Egypt",
    "telephone": "+201286110562",
    "email": "info@nightclubegypt.com"
  },
  "reservationFor": {
    "@type": "Event",
    "name": "ليلة في أفضل نايت كلوب مصر",
    "description": "استمتع بأجمل السهرات مع أشهر النجوم والراقصات",
    "location": {
      "@type": "Place",
      "name": "Night Club Egypt",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "كورنيش النيل، العجوزة",
        "addressLocality": "الجيزة",
        "addressCountry": "EG"
      }
    }
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "عرض الحجز المبكر",
      "description": "خصم 25% للحجز قبل 3 أيام",
      "discount": "25%",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "750",
        "maxPrice": "1500",
        "priceCurrency": "EGP"
      }
    }
  ],
  "availableChannel": [
    {
      "@type": "ServiceChannel",
      "name": "الهاتف",
      "serviceLocation": "+201286110562"
    },
    {
      "@type": "ServiceChannel",
      "name": "واتساب",
      "serviceLocation": "https://wa.me/201286110562"
    }
  ]
};
