/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://nightclubegypt.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,

  // إضافة المزيد من الصفحات
  additionalPaths: async () => [
    {
      loc: '/dashboard',
      changefreq: 'weekly',
      priority: 0.5,
    },
    {
      loc: '/dashboard/programs',
      changefreq: 'weekly',
      priority: 0.5,
    },
    {
      loc: '/dashboard/pricing',
      changefreq: 'weekly',
      priority: 0.5,
    },
    {
      loc: '/dashboard/discount-codes',
      changefreq: 'weekly',
      priority: 0.5,
    },
    {
      loc: '/dashboard/universal-offer',
      changefreq: 'weekly',
      priority: 0.5,
    },
  ],

  // استبعاد صفحات معينة
  exclude: [
    '/test-api',
    '/api/*',
    '/_next/*',
    '/admin/*'
  ],

  // إعداد robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/test-api',
          '/_next/',
          '/private/'
        ],
      },
    ],
    additionalSitemaps: [
      'https://nightclubegypt.com/sitemap.xml',
    ],
  },

  // تحسين الأداء
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        {
          href: `https://nightclubegypt.com${path}`,
          hreflang: 'ar-EG',
        },
        {
          href: `https://nightclubegypt.com${path}`,
          hreflang: 'en',
        },
      ],
    }
  },
}
