/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://nightclubcairo.vercel.app',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,
  generateIndexSitemap: false,

  // روابط إضافية
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/#about'),
    await config.transform(config, '/#gallery'),
    await config.transform(config, '/#packages'),
    await config.transform(config, '/#contact'),
    await config.transform(config, '/#videos'),
  ],

  // robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/']
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/']
      }
    ],
    additionalSitemaps: [
      'https://nightclubcairo.vercel.app/sitemap.xml',
    ],
  },

  // تخصيص metadata للصفحات
  transform: async (config, path) => {
    const customPages = {
      '/': {
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      '/#about': {
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      '/#gallery': {
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      '/#packages': {
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      '/#contact': {
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      '/#videos': {
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    };

    return {
      loc: path,
      changefreq: customPages[path]?.changefreq || config.changefreq,
      priority: customPages[path]?.priority || config.priority,
      lastmod: customPages[path]?.lastmod || new Date().toISOString(),
    };
  },

  exclude: [
    '/api/*',
    '/admin/*',
    '/_next/*',
    '/404',
    '/500'
  ]
};
