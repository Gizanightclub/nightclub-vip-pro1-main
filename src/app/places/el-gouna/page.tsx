import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOUnified from "@/components/SEOUnified";
import Link from "next/link";
import { generatePageMetadataByType } from "@/lib/seo-unified";

export const metadata = {
  ...generatePageMetadataByType(
    'places',
    'الجونة غير متاحة الآن - Night Club Egypt',
    'لا يوجد حالياً نوادي في الجونة. لدينا فقط أماكن في القاهرة، الجيزة، العجوزة، الزمالك، والمهندسين.',
    ['الجونة غير متاحة', 'لا يوجد أماكن', 'القاهرة فقط', 'الزمالك', 'العجوزة', 'المهندسين'],
    'https://www.nightclubegypt.com/images/nightclubegypt.com1.jpg',
    'https://www.nightclubegypt.com/places/el-gouna'
  ),
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function ElGounaPage() {
  return (
    <>
      <SEOUnified
        pageType="places"
        customTitle="الجونة غير متاحة الآن - Night Club Egypt"
        customDescription="لا يوجد حالياً نوادي في الجونة. لدينا فقط أماكن في القاهرة، الجيزة، العجوزة، الزمالك، والمهندسين."
        customKeywords={['الجونة غير متاحة', 'لا يوجد أماكن', 'القاهرة فقط', 'الزمالك', 'العجوزة', 'المهندسين']}
        customImage="https://www.nightclubegypt.com/images/nightclubegypt.com1.jpg"
        customUrl="https://www.nightclubegypt.com/places/el-gouna"
      />
      <Navigation />
      <main className="bg-black text-white min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 text-center">
            <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">الجونة غير متاحة الآن</h1>
            <p className="text-gray-300 mb-6">لا يوجد حالياً نوادي أو أماكن في الجونة ضمن موقعنا.</p>
            <p className="text-gray-300 mb-6">لدينا فقط أماكن في القاهرة، الجيزة، العجوزة، الزمالك، والمهندسين.</p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link href="/places/cairo" className="rounded-xl bg-cyan-500 px-6 py-3 text-white font-bold hover:bg-cyan-400 transition">عرض أماكن القاهرة</Link>
              <a href="tel:01286110562" className="rounded-xl bg-amber-400 px-6 py-3 text-slate-950 font-bold hover:bg-amber-300 transition">اتصل الآن 01286110562</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
