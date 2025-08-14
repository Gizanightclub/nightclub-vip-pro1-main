import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدمات Night Club Egypt - حجوزات VIP وحفلات خاصة في مصر",
  description: "خدمات متميزة من Night Club Egypt: حجوزات VIP، حفلات أعياد الميلاد، فعاليات الشركات، حفلات الزفاف، مناسبات خاصة. أفضل خدمة في القاهرة والجيزة وجميع محافظات مصر.",
  keywords: "حجوزات VIP مصر, حفلات أعياد ميلاد, فعاليات شركات مصر, حفلات زفاف, VIP reservations Egypt, birthday parties Cairo, corporate events Egypt, private events",
  openGraph: {
    title: "خدمات Night Club Egypt المتميزة",
    description: "حجوزات VIP وحفلات خاصة وفعاليات الشركات في أفضل نايت كلوب بمصر",
    images: ["https://nightclubegypt.com/images/nightclubegypt.com.jpg"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      {children}
    </div>
  );
}
