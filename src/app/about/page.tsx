import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "عن النادي - أفضل نايت كلوب في مصر | Night Club Egypt",
  description: "تعرف على تاريخ وخدمات أفضل نايت كلوب في مصر. أجواء فاخرة، خدمة VIP استثنائية، وحفلات مميزة مع أشهر النجوم في القاهرة والجيزة والعجوزة والشيخ زايد. احجز الآن واستمتع بتجربة ليلية لا تُنسى.",
  keywords: [
    "عن نايت كلوب مصر", "تاريخ أفضل نايت كلوب", "خدمات VIP نايت كلوب",
    "أجواء نايت كلوب القاهرة", "معلومات نايت كلوب الجيزة", "تفاصيل نايت كلوب العجوزة",
    "نبذة عن نايت كلوب مصر", "قصة نايت كلوب إيجيبت", "رؤية ورسالة نايت كلوب",
    "فريق عمل نايت كلوب", "جودة خدمة نايت كلوب", "مميزات أفضل نايت كلوب"
  ].join(", "),
  openGraph: {
    title: "عن النادي - أفضل نايت كلوب في مصر | Night Club Egypt",
    description: "اكتشف قصة نجاح أفضل نايت كلوب في مصر. تجربة ليلية فاخرة، خدمة VIP متميزة، وحفلات استثنائية مع أكبر النجوم في القاهرة والجيزة.",
    url: "https://www.nightclubegypt.com/about",
    images: [
      {
        url: "https://www.nightclubegypt.com/images/nightclub1.jpeg",
        width: 1200,
        height: 630,
        alt: "عن أفضل نايت كلوب في مصر - تجربة ليلية فاخرة"
      }
    ]
  },
  alternates: {
    canonical: "https://www.nightclubegypt.com/about"
  },
  other: {
    "geo.placename": "Cairo, Giza, Agouza, Sheikh Zayed, Egypt",
    "geo.position": "30.0666;31.2240"
  }
};

export default function AboutPage() {
  // Redirect to main page with anchor for SPA experience
  redirect("/#about");
}

// إضافة JSON-LD structured data خاص بصفحة "عن النادي"
export function generateStaticParams() {
  return [];
}

// هذه الصفحة ستساعد في فهرسة قسم "عن النادي" بشكل منفصل
// مع الحفاظ على تجربة SPA للمستخدم
