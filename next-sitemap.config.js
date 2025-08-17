/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://nightclubegypt.com',
  generateRobotsTxt: false, // نحن نستخدم ملف robots.txt مخصص
  generateIndexSitemap: false, // نحن نستخدم ملف sitemap.ts مخصص
  exclude: [
    '/admin/*',
    '/api/*',
    '/_next/*',
    '/scripts/*',
    '/out/*',
    '/private/*',
    '/dashboard/*', // استثناء صفحات الداشبورد من sitemap العام
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
          '/admin/',
          '/private/',
          '/scripts/',
          '/out/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
    ],
    additionalSitemaps: [
      'https://nightclubegypt.com/sitemap.xml',
    ],
  },
  // إعدادات إضافية للـ SEO
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  // تحسينات للـ Core Web Vitals
  transform: async (config, path) => {
    // تحديد أولوية الصفحات المختلفة
    let priority = 0.7;
    let changefreq = 'weekly';
    
    // الصفحة الرئيسية
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    
    // صفحات المناطق
    if (path.includes('#')) {
      priority = 0.85;
      changefreq = 'weekly';
    }
    
    // صفحات الخدمات
    if (path.includes('services')) {
      priority = 0.75;
      changefreq = 'weekly';
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://nightclubegypt.com${path}`,
          hreflang: 'ar',
        },
        {
          href: `https://nightclubegypt.com/en${path}`,
          hreflang: 'en',
        },
      ],
    };
  },
  // إعدادات إضافية للـ PWA
  additionalPaths: async (config) => {
    const result = [];
    
    // إضافة صفحات المناطق المصرية
    const locations = [
      'cairo', 'giza', 'agouza', 'sheikh-zayed', 'sixth-october', 'new-cairo',
      'fifth-settlement', 'maadi', 'zamalek', 'mohandessin', 'nasr-city',
      'heliopolis', 'pyramid', 'dokki', 'downtown-cairo', 'garden-city',
      'rehab-city', 'shorouk-city', 'obour-city', 'smart-village', 'cairo-festival-city'
    ];
    
    locations.forEach(location => {
      result.push({
        loc: `/#${location}`,
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: new Date().toISOString(),
      });
    });
    
    // إضافة صفحات الخدمات
    const services = [
      'vip-reservations', 'birthday-parties', 'corporate-events',
      'wedding-celebrations', 'private-events', 'ladies-night',
      'graduation-parties', 'bachelor-parties', 'new-year-events',
      'valentine-events', 'summer-parties', 'winter-events'
    ];
    
    services.forEach(service => {
      result.push({
        loc: `/#services-${service}`,
        changefreq: 'weekly',
        priority: 0.75,
        lastmod: new Date().toISOString(),
      });
    });
    
    return result;
  },
};
