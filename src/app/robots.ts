import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about/',
          '/gallery/',
          '/contact/',
          '/programs/',
          '/booking/',
          '/packages/',
          '/_next/static/',
          '/images/',     // 👈 السماح بفهرسة الصور
          '/videos/',     // 👈 السماح بفهرسة الفيديوهات
          '/sitemap.xml',
          '/image-sitemap.xml',  // 👈 إضافة image sitemap
          '/video-sitemap.xml',  // 👈 إضافة video sitemap
          '/favicon.ico',
          '/robots.txt'
        ],
        disallow: [
          '/dashboard/*',
          '/api/*',
          '/admin/*',
          '/login/*',
          '/auth/*',
          '/private/*',
          '/config/*',
          '/logs/*',
          '/backup/*',
          '/temp/*',
          '/cache/*',
          '/_next/webpack-hmr',
          '/_next/server/*',
          '/vercel.json',
          '/*.json$',
          '/.env*',
          '/.git*',
          '/node_modules/*',
          '/.next/*',
          '/src/*',
          '/search/*',
          '/404/',
          '/500/',
          '/error/',
          '/*?*',
          '/test/*',
          '/dev/*',
          '/staging/*'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/about/',
          '/gallery/',
          '/contact/',
          '/programs/',
          '/booking/',
          '/packages/',
          '/images/*',        // 👈 السماح لـ Googlebot بفهرسة الصور
          '/videos/*'         // 👈 السماح لـ Googlebot بفهرسة الفيديوهات
        ],
        disallow: [
          '/dashboard/*',
          '/api/*',
          '/admin/*',
          '/private/*',
          '/_next/webpack-hmr'
        ],
        crawlDelay: 1
      },
      {
        userAgent: 'bingbot',
        allow: [
          '/',
          '/about/',
          '/gallery/',
          '/contact/',
          '/programs/',
          '/booking/',
          '/packages/',
          '/images/*',        // 👈 السماح لـ Bingbot بفهرسة الصور
          '/videos/*'         // 👈 السماح لـ Bingbot بفهرسة الفيديوهات
        ],
        disallow: [
          '/dashboard/*',
          '/api/*',
          '/admin/*',
          '/private/*'
        ],
        crawlDelay: 2
      },
      {
        userAgent: [
          'AhrefsBot',
          'SemrushBot',
          'MJ12bot',
          'DotBot',
          'PetalBot',
          'CCBot',
          'ChatGPT-User',
          'GPTBot',
          'Google-Extended',
          'FacebookBot',
          'facebookexternalhit'
        ],
        disallow: ['/']
      }
    ],
    // 👇 إضافة جميع روابط السايتمابس
    sitemap: [
      'https://www.nightclubegypt.com/sitemap.xml',
      'https://www.nightclubegypt.com/image-sitemap.xml',
      'https://www.nightclubegypt.com/video-sitemap.xml'
    ],
    host: 'https://www.nightclubegypt.com'
  }
}
