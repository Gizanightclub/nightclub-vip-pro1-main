import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.nightclubegypt.com'

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
          '/places/',
          '/places/*/book/',
          '/pricing-booking/',
          '/_next/static/',
          '/images/',
          '/videos/',
          '/sitemap.xml',
          '/image-sitemap.xml',
          '/video-sitemap.xml',
          '/favicon.ico',
          '/robots.txt',
          '/site.webmanifest',
          '/manifest.json'
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
          '/*&*',
          '/*utm_*',
          '/*fbclid*',
          '/*gclid*',
          '/wp-admin/',
          '/wp-content/',
          '/wp-includes/',
          '/wp-json/',
          '/xmlrpc.php',
          '/readme.html',
          '/license.txt',
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
          '/images/*',
          '/videos/*'
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
          '/images/*',
          '/videos/*'
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
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/image-sitemap.xml`,
      `${baseUrl}/video-sitemap.xml`
    ],
    host: baseUrl
  }
}
