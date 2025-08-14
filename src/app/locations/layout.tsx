import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Night Club Egypt - أفضل نايت كلوب في جميع محافظات مصر",
  description: "اكتشف أفضل نايت كلوب في القاهرة، الجيزة، 6 أكتوبر، الشيخ زايد، التجمع، الزمالك، المعادي. حفلات ليلية فاخرة وخدمة VIP في أفضل الأماكن السياحية بمصر.",
  keywords: "نايت كلوب القاهرة, نايت كلوب الجيزة, نايت كلوب 6 أكتوبر, نايت كلوب الشيخ زايد, nightclub Cairo, nightclub Giza, Egypt nightlife, Cairo entertainment",
  openGraph: {
    title: "Night Club Egypt - فروع في جميع أنحاء مصر",
    description: "استمتع بأفضل حفلات ليلية في القاهرة، الجيزة، 6 أكتوبر، الشيخ زايد والتجمع الخامس",
    images: ["https://nightclubegypt.com/images/nightclubegypt.com.jpg"],
  },
};

export default function LocationsLayout({
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
