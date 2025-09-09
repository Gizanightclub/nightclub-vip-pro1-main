/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.nightclubegypt.com',
  generateRobotsTxt: false, // نحن نستخدم robots.ts
  generateIndexSitemap: false,
  exclude: [
    '/admin/*',
    '/api/*',
    '/dashboard/*',
    '/private/*',
    '/temp/*',
    '/test/*'
  ],
  additionalPaths: async (config) => {
    return [
      await config.transform(config, '/image-sitemap.xml'),
      await config.transform(config, '/video-sitemap.xml'),
    ]
  },
  transform: async (config, path) => {
    // تخصيص أولويات الصفحات
    const priorities = {
      '/': 1.0,
      '/programs': 0.9,
      '/packages': 0.8,
      '/about': 0.9,
      '/gallery': 0.7,
      '/contact': 0.6,
      '/booking': 0.9
    }

    const changeFreqs = {
      '/': 'daily',
      '/programs': 'weekly',
      '/packages': 'weekly',
      '/about': 'weekly',
      '/gallery': 'weekly',
      '/contact': 'monthly',
      '/booking': 'daily'
    }

    return {
      loc: path,
      changefreq: changeFreqs[path] || 'weekly',
      priority: priorities[path] || 0.7,
      lastmod: new Date().toISOString(),
    }
  },
}
