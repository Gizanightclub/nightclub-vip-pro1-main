import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about/',
          '/services/',
          '/gallery/',
          '/contact/',
          '/pricing/',
          '/programs/',
          '/events/',
          '/vip-packages/',
          '/artists/',
          '/booking/',
          '/cities/',
          '/performers/',
          '/packages/',
          '/location/',
          '/opening-hours/',
          '/reviews/',
          '/_next/static/',
          '/images/',
          '/videos/',
          '/sitemap.xml',
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
          '/services/',
          '/gallery/',
          '/contact/',
          '/pricing/',
          '/programs/',
          '/events/',
          '/vip-packages/',
          '/artists/',
          '/booking/',
          '/cities/',
          '/performers/',
          '/packages/',
          '/images/',
          '/videos/'
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
          '/services/',
          '/gallery/',
          '/contact/',
          '/pricing/',
          '/programs/',
          '/events/',
          '/images/',
          '/videos/'
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
    sitemap: 'https://www.nightclubegypt.com/sitemap.xml',
    host: 'https://www.nightclubegypt.com'
  }
}
