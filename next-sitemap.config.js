/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.nightclubegypt.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,
  generateIndexSitemap: false,

  // روابط إضافية لجميع الصفحات، المدن، الفنانين، الباقات، الأحداث
  additionalPaths: async (config) => {
    const baseUrl = '';
    const staticPages = ['/', '/about', '/services', '/gallery', '/pricing', '/programs', '/events', '/contact', '/vip-packages', '/artists', '/booking', '/videos', '/packages', '/location', '/opening-hours', '/reviews', '/dress-code', '/age-policy'];
    const paths = [];

    for (const page of staticPages) {
      paths.push(await config.transform(config, page));
    }

    for (const city of cities) {
      paths.push(await config.transform(config, `/cities/${city}`));
    }

    for (const performer of performers) {
      paths.push(await config.transform(config, `/performers/${performer}`));
    }

    for (const pkg of packages) {
      paths.push(await config.transform(config, `/packages/${pkg}`));
    }

    for (const event of events) {
      paths.push(await config.transform(config, `/events/${event}`));
    }

    // روابط الصور والفيديوهات
    paths.push(await config.transform(config, '/image-sitemap.xml'));
    paths.push(await config.transform(config, '/video-sitemap.xml'));

    return paths;
  },

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/_next/', '/admin/'] },
      { userAgent: 'Googlebot', allow: '/', disallow: ['/api/', '/_next/', '/admin/'] }
    ],
    additionalSitemaps: [
      'https://www.nightclubegypt.com/sitemap.xml',
      'https://www.nightclubegypt.com/image-sitemap.xml',
      'https://www.nightclubegypt.com/video-sitemap.xml'
    ],
  },

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    };
  },

  exclude: ['/api/*', '/admin/*', '/_next/*', '/404', '/500'],
};
