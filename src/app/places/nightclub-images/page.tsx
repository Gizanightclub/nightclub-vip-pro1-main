import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOUnified from "@/components/SEOUnified";
import FAQSchema from "@/components/FAQSchema";
import { places } from "@/lib/places";
import Image from "next/image";
import Script from "next/script";

export default function NightclubImagesPage() {
  const phone = "01286110562";
  const galleryImages = places.map((place) => ({
    url: place.image,
    alt: `${place.name} nightclub c cairo vip egypt`,
    caption: `${place.name} في ${place.location} - VIP وسهرات مذهلة`, 
    price: place.price,
    vipTitle: `${place.name} VIP Ticket`,
    slug: place.slug,
  }));

  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "صور نايت كلوب في مصر مع أسعار وتجارب حقيقية",
    description: "معرض صور دقيق لأفضل نوادي نايت كلوب في القاهرة والساحل وشرم والجونة - شامل VIP وأرخص سعر.",
    url: "https://www.nightclubegypt.com/places/nightclub-images",
    image: galleryImages.map((img) => ({
      "@type": "ImageObject",
      url: `https://www.nightclubegypt.com${img.url}`,
      caption: img.caption,
      name: img.vipTitle,
      author: "Night Club Egypt"
    }))
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "أفضل نايت كلوب في القاهرة | VIP وأسعار 2026",
    description: "فيديو تعريفي لأفضل النوادي في القاهرة مع عروض VIP وأسعار حجز، من Night Club Egypt.",
    thumbnailUrl: "https://www.nightclubegypt.com/images/nightclub0.jpeg",
    uploadDate: "2026-04-03T00:00:00+00:00",
    contentUrl: "https://www.nightclubegypt.com/videos/nightclub-promo.mp4",
    embedUrl: "https://www.nightclubegypt.com/videos/nightclub-promo.mp4",
    duration: "PT00M30S",
    interactionStatistic: {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/WatchAction",
      "userInteractionCount": 8400
    },
    potentialAction: {
      "@type": "WatchAction",
      target: "https://www.nightclubegypt.com/places/nightclub-images"
    }
  };

  return (
    <>
      <SEOUnified
        pageType="gallery"
        customTitle="صور نايت كلوب في مصر + أسعار وتجارب حقيقية - Night Club Egypt"
        customDescription="شاهد أجمل صور نايت كلوب في القاهرة والساحل وشرم والجونة مع باقات VIP وأسعار وتقييمات حقيقية. اتصل 01286110562 الآن للحجز."
        customKeywords={["صور نايت كلوب", "Night Club Egypt images", "صور VIP نايت كلوب", "حجز نايت كلوب"]}
      />

      <Script id="image-gallery-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }} />
      <Script id="video-object-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <FAQSchema
        showVisibleFAQ={false}
        customFAQs={[
          {
            question: "كيف أحجز أسرع؟",
            answer: "اتصل 01286110562 أو افتح صفحة النادي واضغط حجز الآن عبر الواتساب.",
            keywords: ["حجز سريع", "01286110562", "Night Club Egypt"]
          },
          {
            question: "هل الصور واقعية؟",
            answer: "نعم، الصور من تجارب حقيقية في النوادي التي نقدمها في Night Club Egypt.",
            keywords: ["صور واقعية", "معرض صور نايت كلوب", "Night Club Egypt"]
          },
          {
            question: "هل الأسعار شاملة VIP؟",
            answer: "نعم، نعرض أسعار VIP والأسعار العادية مع ضمان أفضل صيغة للحجز.",
            keywords: ["أسعار VIP", "صور نايت كلوب", "حجز نايت كلوب"]
          }
        ]}
      />

      <Navigation />
      <main className="bg-black text-white min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">صور نايت كلوب في مصر</h1>
          <p className="text-gray-300 mb-8">مجموعة صور عالية الجودة لأفضل النوادي، مع تفاصيل الأسعار وتجارب حقيقية.</p>

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {galleryImages.map((img) => (
              <article key={img.slug} className="rounded-2xl overflow-hidden border border-purple-500/30 bg-black/40">
                <div className="relative aspect-video w-full">
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">{img.vipTitle}</h3>
                  <p className="text-gray-200 mt-2">{img.caption}</p>
                  <p className="mt-2 text-yellow-300 font-bold">بدءًا من {img.price} ج</p>
                  <a href={`/places/${img.slug}`} className="mt-3 inline-block text-cyan-300 hover:text-cyan-100">شاهد تفاصيل الحجز</a>
                </div>
              </article>
            ))}
          </section>

          <section className="mt-12 rounded-2xl border border-yellow-400/30 bg-black/60 p-6">
            <h2 className="text-2xl font-bold text-white mb-3">أسئلة شائعة</h2>
            <p className="text-gray-200"><strong>❓ كيف أحجز أسرع؟</strong> اتصل 01286110562 أو اذهب إلى صفحة النادي والضغط على "احجز الآن".</p>
            <p className="text-gray-200"><strong>❓ هل الصور واقعية؟</strong> نعم، الصور من تجارب حقيقية في النوادي التي نعرضها في Night Club Egypt.</p>
            <p className="text-gray-200"><strong>❓ هل الأسعار شاملة VIP؟</strong> في معظم النوادي نعرض أسعار VIP وأسعار عادية، مع ضمان أرخص سعر.</p>
          </section>

          <section className="mt-10 text-center">
            <a href="tel:01286110562" className="inline-block rounded-xl bg-green-500 px-8 py-3 font-bold text-white hover:bg-green-600 transition">اتصل الآن للحجز</a>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
