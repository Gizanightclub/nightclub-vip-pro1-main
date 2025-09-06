import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "معرض الصور والفيديوهات - أفضل نايت كلوب في مصر | Night Club Egypt",
  description: "شاهد أجمل لحظات الحفلات والسهرات في أفضل نايت كلوب بمصر. صور وفيديوهات حصرية للحفلات مع أشهر النجوم: رحمة محسن، عصام صاصا، بوسي، روح، ليندا. أجواء VIP فاخرة وسهرات لا تُنسى في القاهرة والجيزة.",
  keywords: [
    "صور نايت كلوب مصر", "فيديوهات حفلات نايت كلوب", "معرض صور أفضل نايت كلوب",
    "لحظات مميزة نايت كلوب", "صور سهرات القاهرة", "فيديوهات رحمة محسن نايت كلوب",
    "صور عصام صاصا حفلات", "معرض صور بوسي راقصة", "فيديوهات روح راقصة",
    "صور VIP نايت كلوب", "معرض حفلات الجيزة", "صور ديسكو مصر", "فيديوهات ليلية فاخرة"
  ].join(", "),
  openGraph: {
    title: "معرض الصور والفيديوهات - أفضل نايت كلوب في مصر",
    description: "استكشف أجمل لحظات الحفلات في أفضل نايت كلوب بمصر. صور وفيديوهات حصرية مع أشهر النجوم والراقصات، أجواء VIP فاخرة وسهرات استثنائية.",
    url: "https://www.nightclubegypt.com/gallery",
    images: [
      {
        url: "https://www.nightclubegypt.com/images/nightclub0.jpeg",
        width: 1200,
        height: 630,
        alt: "معرض صور أفضل نايت كلوب في مصر - حفلات فاخرة"
      },
      {
        url: "https://www.nightclubegypt.com/images/nightclub1.jpeg",
        width: 1200,
        height: 630,
        alt: "فيديوهات حفلات نايت كلوب مصر مع أشهر النجوم"
      }
    ]
  },
  alternates: {
    canonical: "https://www.nightclubegypt.com/gallery"
  }
};

export default function GalleryPage() {
  // Redirect to main page with gallery anchor
  redirect("/#gallery");
}

// Schema markup خاص بمعرض الصور والفيديوهات
export const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "معرض صور وفيديوهات نايت كلوب مصر",
  "description": "مجموعة حصرية من الصور والفيديوهات لأجمل الحفلات والسهرات في أفضل نايت كلوب بمصر",
  "url": "https://www.nightclubegypt.com/gallery",
  "image": [
    "https://www.nightclubegypt.com/images/nightclub0.jpeg",
    "https://www.nightclubegypt.com/images/nightclub1.jpeg",
    "https://www.nightclubegypt.com/images/nightclub3.jpeg",
    "https://www.nightclubegypt.com/images/nightclub4.jpeg"
  ],
  "contentLocation": {
    "@type": "Place",
    "name": "Night Club Egypt",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "EG",
      "addressLocality": "الجيزة",
      "addressRegion": "القاهرة الكبرى"
    }
  }
};
