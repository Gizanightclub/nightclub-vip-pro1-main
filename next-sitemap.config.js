/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.nightclubegypt.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: [
    "/admin/*",
    "/api/*",
    "/dashboard/*",
    "/private/*",
    "/temp/*",
    "/test/*",
    "/_not-found"
  ],
  additionalPaths: async (config) => {
    const placeSlugs = [
      'tango-club', 'vieena-club', 'royal-king', 'fox-club', 'peacock-club',
      'nox-club', 'stage-cairo-club', 'cash-cairo', 'omni-club-cairo', 'echo-club',
      'king-club', 'cosmo-lounge-and-club', 'ovid-club', 'shots-club', 'rovi-club',
      'rai-club-nile-dragon-boat', 'volt-lounge', 'sansee-club', 'disco-nox-club', 'sahalal-club', 'kalije-club'
    ];

    const locations = ['cairo', 'alexandria', 'giza', 'el-gouna', 'hurghada', 'north-coast', 'sharm-el-sheikh'];
    
    const placePaths = [];
    for (const slug of placeSlugs) {
      placePaths.push(await config.transform(config, `/places/${slug}`, 0.9, "daily"));
      placePaths.push(await config.transform(config, `/places/${slug}/book`, 0.95, "daily"));
    }

    // إضافة صفحات المواقع
    const locationPaths = locations.map(loc => 
      config.transform(config, `/locations/${loc}`, 0.85, "weekly")
    );

    // الصفحات الأساسية الإضافية
    const additionalPages = [
      { path: "/places", priority: 1.0, freq: "daily" },
      { path: "/places/cairo", priority: 0.9, freq: "daily" },
      { path: "/places/nightclub-images", priority: 0.8, freq: "weekly" },
      { path: "/places/nightclub-videos", priority: 0.8, freq: "weekly" },
      { path: "/night-club", priority: 0.85, freq: "daily" },
      { path: "/night-clubs-cairo", priority: 0.9, freq: "daily" },
      { path: "/night-club-cairo", priority: 0.9, freq: "daily" },
      { path: "/night-club-prices-cairo", priority: 0.9, freq: "daily" },
      { path: "/night-club-near-me", priority: 0.85, freq: "daily" },
      { path: "/prices/cairo", priority: 0.85, freq: "daily" },
      { path: "/prices/vip", priority: 0.85, freq: "daily" },
      { path: "/pricing-booking", priority: 0.9, freq: "daily" },
      { path: "/vip", priority: 0.85, freq: "weekly" },
      { path: "/parties", priority: 0.85, freq: "weekly" },
      { path: "/programs", priority: 0.8, freq: "weekly" },
      { path: "/disco", priority: 0.8, freq: "weekly" },
      { path: "/gallery", priority: 0.75, freq: "weekly" },
      { path: "/guides/booking", priority: 0.8, freq: "monthly" },
      { path: "/about", priority: 0.8, freq: "monthly" },
      { path: "/contact", priority: 0.7, freq: "monthly" },
      { path: "/blog/best-nightclubs-egypt-2026", priority: 0.8, freq: "monthly" },
      { path: "/blog/booking-guide-egypt", priority: 0.75, freq: "monthly" },
      { path: "/blog/cheapest-clubs-cairo", priority: 0.8, freq: "monthly" },
      { path: "/blog/ultimate-guide-egypt-nightlife", priority: 0.8, freq: "monthly" },
      { path: "/blog/vip-table-booking-prices-cairo", priority: 0.8, freq: "monthly" },
      { path: "/image-sitemap.xml", priority: 0.7, freq: "weekly" },
      { path: "/video-sitemap.xml", priority: 0.8, freq: "daily" },
    ];

    const additionalPagePaths = additionalPages.map(page =>
      config.transform(config, page.path, page.priority, page.freq)
    );

    return [
      ...placePaths,
      ...locationPaths,
      ...additionalPagePaths,
    ];
  },
  transform: async (config, path, priority = undefined, changefreq = undefined) => {
    const defaultPriorities = {
      "/": 1.0,
      "/places": 1.0,
      "/night-club": 0.9,
      "/pricing-booking": 0.9,
      "/programs": 0.8,
      "/gallery": 0.75,
      "/contact": 0.6,
    };

    const defaultChangeFreqs = {
      "/": "daily",
      "/places": "daily",
      "/night-club": "daily",
      "/pricing-booking": "daily",
      "/programs": "weekly",
      "/gallery": "weekly",
      "/contact": "monthly",
    };

    return {
      loc: path,
      changefreq: changefreq || defaultChangeFreqs[path] || "weekly",
      priority: priority !== undefined ? priority : (defaultPriorities[path] || 0.7),
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api", "/dashboard", "/private"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 1,
      },
    ],
    additionalSitemaps: [
      "https://www.nightclubegypt.com/image-sitemap.xml",
      "https://www.nightclubegypt.com/video-sitemap.xml",
    ],
  },
};
