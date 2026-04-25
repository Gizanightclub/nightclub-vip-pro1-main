"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOUnified from "@/components/SEOUnified";
import Script from "next/script";
import Link from "next/link";

export default function NightclubVideosPage() {
  const phone = "01286110562";
  const videos = [
    {
      title: "أفضل نايت كلوب في القاهرة | VIP وأسعار 2026",
      description: "فيديو مميز يشرح تجربة الحجز في نايت كلوب القاهرة، العروض، الأسعار والمسارات.",
      url: "/videos/nightclub-promo.mp4",
      thumbnail: "/images/nightclub0.jpeg",
      duration: "PT00M30S"
    },
    {
      title: "تجربة VIP في Stage Cairo Club",
      description: "شاهد كيف تكون تجربة حجز VIP في Stage Cairo Club عبر Night Club Egypt.",
      url: "/videos/حجزات لاونج وديسكو وسياحه مصر.mp4",
      thumbnail: "/images/Stage Cairo Club.jpg",
      duration: "PT00M45S"
    },
    {
      title: "كاش كايرو نايت كلوب | عرض VIP وأسعار حصرية",
      description: "فيديو جولة داخل Cash Cairo مع شرح عروض VIP وأسعار الحجز المباشر عبر Night Club Egypt.",
      url: "/videos/Cash Cairo.mp4",
      thumbnail: "/images/Cash Cairo.webp",
      duration: "PT00M40S"
    },
    {
      title: "أومني كلوب القاهرة | الديسكو والإضاءة الحية",
      description: "عرض تجربة أومني كلوب مع نظام الدي جي والليزر وكيف تحجز VIP بأفضل أسعار.",
      url: "/videos/Omni Club Cairo.mp4",
      thumbnail: "/images/Omni Club Cairo 1.jpg",
      duration: "PT00M42S"
    },
    {
      title: "شوتس كلوب | أرخص حجز نايت كلوب في القاهرة",
      description: "فيديو قصير يوضح كيفية حجز Shots Club بأقل أسعار وخدمة VIP مميزة.",
      url: "/videos/Shots Club.mp4",
      thumbnail: "/images/SHOTS.jpg",
      duration: "PT00M35S"
    },
    {
      title: "جولة داخل Echo Club | أفضل أجواء ديسكو في القاهرة",
      description: "فيديو يوضح أجواء Echo Club وحجز الديسكو والأسعار الفعلية للأفراد والمجموعات.",
      url: "/videos/Echo Club.mp4",
      thumbnail: "/images/Echo Club.jpg",
      duration: "PT00M50S"
    },
    {
      title: "تقرير Volt Lounge | تجربة VIP والنظام الصوتي",
      description: "استعرض تجربة Volt Lounge ومميزات حجز الطاولات الخاصة والمشروبات الفاخرة.",
      url: "/videos/Volt Lounge.mp4",
      thumbnail: "/images/Volt Lounge.jpg",
      duration: "PT00M48S"
    },
    {
      title: "Kalije Night Club | حجز VIP وأفضل عروض السهرة",
      description: "فيديو يشرح عروض Kalije Night Club والخدمات الفاخرة المتاحة لحجز السهرات.",
      url: "/videos/Kalije Night Club.mp4",
      thumbnail: "/images/Kalije Night Club.jpg",
      duration: "PT00M44S"
    }
  ];

  const encodeVideoSrc = (videoUrl: string) => {
    if (videoUrl.startsWith("http")) {
      return encodeURI(videoUrl);
    }
    return encodeURI(videoUrl);
  };


  const videoContentJsonLd = {
    "@context": "https://schema.org",
    "@graph": videos.map((video) => ({
      "@type": "VideoObject",
      name: video.title,
      description: video.description,
      thumbnailUrl: `https://www.nightclubegypt.com${video.thumbnail}`,
      uploadDate: "2026-04-03T00:00:00+00:00",
      duration: video.duration,
      contentUrl: `https://www.nightclubegypt.com${video.url}`,
      embedUrl: `https://www.nightclubegypt.com${video.url}`,
      publisher: {
        "@type": "Organization",
        name: "Night Club Egypt",
        logo: {
          "@type": "ImageObject",
          url: "https://www.nightclubegypt.com/images/logo-seo-1200x1200.webp"
        }
      }
    }))
  };

  return (
    <>
      <SEOUnified
        pageType="places"
        customTitle="🎥 فيديوهات نايت كلوب القاهرة 2026 | سهرات VIP وتجارب حقيقية | حجز فوري 01286110562"
        customDescription="🎥 شاهد فيديوهات سهرات نايت كلوب في القاهرة والجيزة والعجوزة. فيديوهات حقيقية من النوادي وحجز VIP بكل سهولة."
        customKeywords={[
          "فيديوهات نايت كلوب القاهرة", "فيديوهات سهرات VIP", "فيديو نايت كلوب الجيزة",
          "فيديوهات سهرات العجوزة", "فيديوهات نايت كلوب حقيقية", "حجز نايت كلوب فيديو",
          "فيديو ديسكو القاهرة", "فيديوهات حفلات نايت كلوب", "فيديوهات نادي ليلي",
          "فيديوهات VIP مصر", "سهرات فيديو نايت كلوب", "فيديوهات سهرات VIP 2026",
          "أحسن فيديوهات نايت كلوب", "حجز VIP فيديو", "فيديو نايت كلوب مصر"
        ]}
        customImage="https://www.nightclubegypt.com/images/nightclub0.jpeg"
        customUrl="https://www.nightclubegypt.com/places/nightclub-videos/"
      />

      <Script id="video-schema-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoContentJsonLd) }} />

      <Navigation />
      <main className="bg-black text-white min-h-screen py-20">
        <div className="container mx-auto px-4 space-y-8">
          <h1 className="text-4xl font-extrabold text-yellow-400">فيديوهات نايت كلوب في مصر</h1>
          <p className="text-gray-300">أفضل مقاطع فيديو توضيحية لحجز السهرات والفيديو دعائي مع CTA قوي.</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/pricing-booking" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 px-6 py-3 font-semibold text-white hover:shadow-lg hover:shadow-pink-500/30">
              حجز الآن
            </Link>
            <Link href="/places" className="inline-flex items-center justify-center rounded-2xl bg-white/10 border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/15">
              شاهد الأماكن
            </Link>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {videos.map((video) => (
              <article key={video.title} className="rounded-2xl border border-purple-500/30 bg-black/50 p-4">
                <h2 className="text-xl font-bold text-white mb-3">{video.title}</h2>
                <video 
                  controls 
                  className="w-full rounded-xl" 
                  poster={video.thumbnail}
                  preload="metadata"
                  playsInline
                  onError={(e) => {
                    console.error(`Video failed to play: ${video.title}`, e);
                  }}
                >
                  <source src={encodeVideoSrc(video.url)} type="video/mp4" />
                  عذراً، المتصفح الخاص بك لا يدعم عرض الفيديو. يمكنك <a href={encodeVideoSrc(video.url)} className="text-blue-300 underline">تحميل الفيديو</a> مباشرة.
                </video>
                <p className="mt-3 text-gray-200 text-sm">{video.description}</p>
                <p className="mt-3 text-yellow-300 font-bold">صنف فيديو: حجز VIP - أرخص أسعار</p>
                <a href={`tel:${phone}`} className="inline-block mt-4 rounded-xl bg-green-500 px-6 py-2 font-bold text-white hover:bg-green-600">اتصل للحجز: {phone}</a>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />

      {/* محتوى SEO مخفي للفهرسة */}
      <div style={{ display: 'none' }} className="seo-hidden-content">
        <h2>فيديوهات نايت كلوب مصر VIP حجز سريع</h2>
        <p>فيديوهات نايت كلوب في القاهرة والإسكندرية والغردقة وشرم الشيخ. احجز الآن في أفضل الملاهي الليلية والنوادي الفاخرة بأسعار مخفضة. شاهد فيديوهات السهرات VIP ومقاطع تجارب الزوار الحقيقية. نايت كلوب عصري مع DJs عالميين وموسيقى حية وراقصات وعروض ضوء.</p>
        <p>أفضل نايت كلوب في مصر: Stage Cairo Club, Cosmo Lounge, OVID Club, Fox Club, Tango Club, Cash Cairo, Omni Club, Shots Club, Echo Club, Volt Lounge, Kalije Night Club, Sansee Club, Disco NoX Club, Sahalal Club.</p>
        <p>حجز نايت كلوب VIP بأسعار مناسبة مع خدمة سريعة وجودة عالية. باقات VIP شاملة مشروبات وطعام وجلسات خاصة. قابل للاتصال على رقم الحجز السريع 01286110562. سهرات يومية وحفلات أسبوعية خاصة. موسيقى عربية وعالمية مع DJs محترفين.</p>
        <p>نايت كلوب الجيزة والعجوزة وكورنيش النيل والمعادي والزمالك والمهندسين والدقي. حجز مباشر عبر الموقع أو الهاتف. أرخص أسعار حجز نايت كلوب مع خصومات حتى 50%. VIP غرف خاصة وطاولات مميزة وخدمة شخصية.</p>
        <p>فيديو حجز نايت كلوب، فيديو جولة داخل النادي، فيديو تجربة الأسعار، فيديو العروض الحية، فيديو الموسيقى والدي جي، فيديو الراقصات والعروض الفنية. محتوى فيديو عالي الجودة يوضح تفاصيل السهرة كاملة.</p>
        <p>Night Club Egypt - منصة حجز موثوقة لأفضل نوادي مصر. حجز آمن وسريع بدون تكاليف إضافية. تقييمات حقيقية من الزوار وآراء صادقة. توصيات مخصصة حسب ميزانيتك ورغباتك.</p>
      </div>
    </>
  );
}
