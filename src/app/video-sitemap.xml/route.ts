import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://www.nightclubegypt.com'
  const lastmod = new Date().toISOString()

  // 👇 بيانات الفيديوهات مع معلومات محسنة للفهرسة
  const videos = [
    {
      url: `${baseUrl}/videos/sasa2.mp4`,
      thumbnailUrl: `${baseUrl}/images/bestnightclb.jpg`,
      title: 'أفضل السهرات في نايت كلوب مصر - عصام صاصا',
      description: 'استمتع بأجمل الأوقات مع عصام صاصا في أفضل نايت كلوب بمصر. سهرات مميزة وأجواء فاخرة مع أشهر النجوم والراقصات. احجز الآن واستمتع بتجربة ليلية لا تُنسى.',
      duration: 25,
      uploadDate: '2025-01-01T00:00:00+00:00',
      location: 'القاهرة، مصر',
      category: 'Entertainment',
      tags: ['نايت كلوب', 'عصام صاصا', 'سهرات', 'ترفيه ليلي', 'القاهرة', 'مصر', 'ديسكو', 'رقص'],
      familyFriendly: false,
      requiresSubscription: false,
      live: false
    },
    // يمكن إضافة المزيد من الفيديوهات هنا
    {
      url: `${baseUrl}/videos/nightclub-promo.mp4`,
      thumbnailUrl: `${baseUrl}/images/nightclub0.jpeg`,
      title: 'نايت كلوب مصر - فيديو ترويجي للحفلات والسهرات',
      description: 'تعرف على أفضل نايت كلوب في مصر من خلال هذا الفيديو الترويجي. اكتشف أجواءنا الفاخرة، خدماتنا المميزة، وأشهر النجوم الذين يحيون الحفلات عندنا. أسعار مميزة تبدأ من 750 جنيه.',
      duration: 30,
      uploadDate: '2025-01-01T00:00:00+00:00',
      location: 'القاهرة، مصر',
      category: 'Entertainment',
      tags: ['نايت كلوب مصر', 'حفلات', 'ترفيه', 'VIP', 'أسعار', 'حجز'],
      familyFriendly: false,
      requiresSubscription: false,
      live: false
    }
  ]

  // 👇 إنشاء XML للفيديوهات مع البيانات الهيكلية المطلوبة
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    ${videos.map(video => `
    <video:video>
      <video:thumbnail_loc>${video.thumbnailUrl}</video:thumbnail_loc>
      <video:title><![CDATA[${video.title}]]></video:title>
      <video:description><![CDATA[${video.description}]]></video:description>
      <video:content_loc>${video.url}</video:content_loc>
      <video:duration>${video.duration}</video:duration>
      <video:publication_date>${video.uploadDate}</video:publication_date>
      <video:family_friendly>${video.familyFriendly ? 'yes' : 'no'}</video:family_friendly>
      <video:requires_subscription>${video.requiresSubscription ? 'yes' : 'no'}</video:requires_subscription>
      <video:live>${video.live ? 'yes' : 'no'}</video:live>
      <video:platform relationship="allow">web</video:platform>
      <video:restriction relationship="allow">EG</video:restriction>
      ${video.tags.map(tag => `<video:tag>${tag}</video:tag>`).join('')}
      <video:category>${video.category}</video:category>
    </video:video>`).join('')}
  </url>

  <url>
    <loc>${baseUrl}/gallery/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    ${videos.map(video => `
    <video:video>
      <video:thumbnail_loc>${video.thumbnailUrl}</video:thumbnail_loc>
      <video:title><![CDATA[${video.title}]]></video:title>
      <video:description><![CDATA[${video.description}]]></video:description>
      <video:content_loc>${video.url}</video:content_loc>
      <video:duration>${video.duration}</video:duration>
      <video:publication_date>${video.uploadDate}</video:publication_date>
      <video:family_friendly>${video.familyFriendly ? 'yes' : 'no'}</video:family_friendly>
      <video:requires_subscription>${video.requiresSubscription ? 'yes' : 'no'}</video:requires_subscription>
      <video:live>${video.live ? 'yes' : 'no'}</video:live>
      <video:platform relationship="allow">web</video:platform>
      <video:restriction relationship="allow">EG</video:restriction>
      ${video.tags.map(tag => `<video:tag>${tag}</video:tag>`).join('')}
      <video:category>${video.category}</video:category>
    </video:video>`).join('')}
  </url>

</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  })
}
