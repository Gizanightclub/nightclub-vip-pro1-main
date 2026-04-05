import { NextResponse } from 'next/server'
import { places } from '@/lib/places'

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const baseUrl = 'https://www.nightclubegypt.com'
  const lastmod = new Date().toISOString()

  // 👇 قائمة الصور الأساسية
  const staticImages = [
    // صور اللوجو
    {
      url: `${baseUrl}/images/logo-seo-1200x1200.webp`,
      caption: 'نايت كلوب مصر - أفضل ملهى ليلي في القاهرة والجيزة',
      location: 'القاهرة، مصر',
      title: 'Night Club Egypt Logo'
    },
    {
      url: `${baseUrl}/images/nightclubegyptlogo.jpg`,
      caption: 'شعار نايت كلوب إيجيبت الرسمي',
      location: 'مصر',
      title: 'نايت كلوب مصر شعار'
    },

    // صور المعرض والحفلات
    {
      url: `${baseUrl}/images/nightclub0.jpeg`,
      caption: 'حفلة مميزة في نايت كلوب مصر مع أجواء VIP فاخرة',
      location: 'القاهرة، مصر',
      title: 'حفلة نايت كلوب مصر'
    },
    {
      url: `${baseUrl}/images/nightclub1.jpeg`,
      caption: 'سهرة راقصة في أفضل نايت كلوب بالقاهرة',
      location: 'القاهرة، مصر',
      title: 'سهرة نايت كلوب'
    },
    {
      url: `${baseUrl}/images/nightclub3.jpeg`,
      caption: 'أجواء ديسكو وموسيقى حية في نايت كلوب إيجيبت',
      location: 'القاهرة، مصر',
      title: 'ديسكو نايت كلوب'
    },
    {
      url: `${baseUrl}/images/nightclub4.jpeg`,
      caption: 'حفلة مع النجوم والراقصات المشهورات',
      location: 'القاهرة، مصر',
      title: 'حفلة النجوم نايت كلوب'
    },
    {
      url: `${baseUrl}/images/nightclub5.jpeg`,
      caption: 'أجواء VIP مع خدمة فاخرة في نايت كلوب مصر',
      location: 'القاهرة، مصر',
      title: 'VIP نايت كلوب مصر'
    },
    {
      url: `${baseUrl}/images/nightclub6.jpeg`,
      caption: 'سهرات الويك إند المميزة مع أشهر DJs',
      location: 'القاهرة، مصر',
      title: 'ويك إند نايت كلوب'
    },
    {
      url: `${baseUrl}/images/nightclub7.jpeg`,
      caption: 'رقص شرقي مع أمهر الراقصات في مصر',
      location: 'القاهرة، مصر',
      title: 'رقص شرقي نايت كلوب'
    },
    {
      url: `${baseUrl}/images/nightclub8.jpeg`,
      caption: 'حفلات العشاق والأزواج بأجواء رومانسية',
      location: 'القاهرة، مصر',
      title: 'حفلات رومانسية نايت كلوب'
    },
    {
      url: `${baseUrl}/images/nightclub9.jpeg`,
      caption: 'أقوى الحفلات مع أشهر المطربين والفنانين',
      location: 'القاهرة، مصر',
      title: 'حفلات المطربين نايت كلوب'
    },

    // صور إضافية للموقع
    {
      url: `${baseUrl}/images/bestnightclb.jpg`,
      caption: 'أفضل نايت كلوب في مصر - تجربة ليلية لا تُنسى',
      location: 'مصر',
      title: 'أفضل نايت كلوب مصر'
    },
    {
      url: `${baseUrl}/images/mmas.jpg`,
      caption: 'حفلات خاصة وعروض مميزة كل ليلة',
      location: 'القاهرة، مصر',
      title: 'حفلات خاصة نايت كلوب'
    },
    {
      url: `${baseUrl}/images/night.jpg`,
      caption: 'أجواء الليل السحرية في نايت كلوب إيجيبت',
      location: 'القاهرة، مصر',
      title: 'أجواء ليلية نايت كلوب'
    },
    {
      url: `${baseUrl}/images/nightclub.jpg`,
      caption: 'التصميم الداخلي الفاخر للنايت كلوب',
      location: 'القاهرة، مصر',
      title: 'تصميم نايت كلوب مصر'
    },

    // صور الموقع التفصيلية
    {
      url: `${baseUrl}/images/nightclubegypt.com.jpg`,
      caption: 'نايت كلوب إيجيبت - الوجهة الأولى للترفيه الليلي',
      location: 'مصر',
      title: 'موقع نايت كلوب إيجيبت'
    },
    {
      url: `${baseUrl}/images/nightclubegypt.com2.jpg`,
      caption: 'خدمات VIP وطاولات فاخرة بأسعار مميزة',
      location: 'القاهرة، مصر',
      title: 'خدمات VIP نايت كلوب'
    },
    {
      url: `${baseUrl}/images/nightclubegypt.com4.jpg`,
      caption: 'حجز طاولات VIP وباقات خاصة للمجموعات',
      location: 'القاهرة، مصر',
      title: 'حجز VIP نايت كلوب'
    },
    {
      url: `${baseUrl}/images/nightclubegypt.com6.jpg`,
      caption: 'أسعار مناسبة تبدأ من 750 جنيه للدخول العادي',
      location: 'القاهرة، مصر',
      title: 'أسعار نايت كلوب مصر'
    },
    {
      url: `${baseUrl}/images/nightclubegypt.com9.jpg`,
      caption: 'عروض وخصومات خاصة للمجموعات وأعياد الميلاد',
      location: 'القاهرة، مصر',
      title: 'عروض نايت كلوب'
    }
  ]

  // 👇 إضافة صور الأماكن الديناميكية
  const placeImages = places.map((place) => ({
    slug: place.slug,
    url: `${baseUrl}${place.image}`,
    caption: `${place.name} - ${place.description}`,
    location: place.location,
    title: `${place.name} - نايت كلوب ${place.location}`
  }))

  // 👇 دمج جميع الصور
  const images = [...staticImages, ...placeImages]

  // 👇 إنشاء XML للصور مع صفحات مركزة لكل مكان وصفحة رئيسية وصفحة معرض
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    ${staticImages.map(image => `
    <image:image>
      <image:loc>${escapeXml(image.url)}</image:loc>
      <image:caption>${escapeXml(image.caption)}</image:caption>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:geo_location>${escapeXml(image.location)}</image:geo_location>
    </image:image>`).join('')}
  </url>

  <url>
    <loc>${baseUrl}/gallery/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    ${images.filter(img => img.url.includes('nightclub')).map(image => `
    <image:image>
      <image:loc>${escapeXml(image.url)}</image:loc>
      <image:caption>${escapeXml(image.caption)}</image:caption>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:geo_location>${escapeXml(image.location)}</image:geo_location>
    </image:image>`).join('')}
  </url>

  ${placeImages.map(placeImage => `
  <url>
    <loc>${baseUrl}/places/${placeImage.slug}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>${escapeXml(placeImage.url)}</image:loc>
      <image:caption>${escapeXml(placeImage.caption)}</image:caption>
      <image:title>${escapeXml(placeImage.title)}</image:title>
      <image:geo_location>${escapeXml(placeImage.location)}</image:geo_location>
    </image:image>
  </url>`).join('')}

  <url>
    <loc>${baseUrl}/about/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    ${images.filter(img => img.url.includes('logo')).map(image => `
    <image:image>
      <image:loc>${escapeXml(image.url)}</image:loc>
      <image:caption>${escapeXml(image.caption)}</image:caption>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:geo_location>${escapeXml(image.location)}</image:geo_location>
    </image:image>`).join('')}
  </url>
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  })
}
