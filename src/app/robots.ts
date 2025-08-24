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
          '/_next/static/',
          '/images/',
          '/videos/',
          '/sitemap.xml',
          '/favicon.ico'
        ],
        disallow: [
          '/dashboard/*',
          '/api/*',
          '/admin/*',
          '/_next/webpack-hmr',
          '/vercel.json',
          '/*.json$',
          '/private/*'
        ],
      }
    ],
    sitemap: 'https://www.nightclubegypt.com/sitemap.xml',
  }
}
