/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.nightclubegypt.com", // عدّل حسب الدومين
  generateRobotsTxt: true, // نحن نستخدم robots.ts
  generateIndexSitemap: false,
  exclude: [
    "/admin/*",
    "/api/*",
    "/dashboard/*",
    "/private/*",
    "/temp/*",
    "/test/*"
  ],
  additionalPaths: async (config) => {
    const placeSlugs = [
      'tango-club', 'vieena-club', 'aowtar-club', 'fox-club', 'maluonaerr-club',
      'nox-club', 'stage-cairo-club', 'cash-cairo', 'omni-club-cairo', 'echo-club',
      'king-club', 'cosmo-lounge-and-club', 'ovid-club', 'shots-club', 'rovi-club',
      'rai-club-nile-dragon-boat', 'volt-lounge', 'sansee-club', 'disco-nox-club', 'sahalal-club'
    ];

    const placePaths = [];
    for (const slug of placeSlugs) {
      placePaths.push(await config.transform(config, `/places/${slug}`));
      placePaths.push(await config.transform(config, `/places/${slug}/book`));
    }

    return [
      ...placePaths,
      await config.transform(config, "/image-sitemap.xml"),
      await config.transform(config, "/video-sitemap.xml"),
    ];
  },
  transform: async (config, path) => {
    // تخصيص أولويات الصفحات
    const priorities = {
      "/": 1.0,
      "/programs": 0.9,
      "/packages": 0.8,
      "/about": 0.9,
      "/gallery": 0.7,
      "/contact": 0.6,
      "/booking": 0.9
    }

    const changeFreqs = {
      "/": "daily",
      "/programs": "weekly",
      "/packages": "weekly",
      "/about": "weekly",
      "/gallery": "weekly",
      "/contact": "monthly",
      "/booking": "daily"
    }

    return {
      loc: path,
      changefreq: changeFreqs[path] || "weekly",
      priority: priorities[path] || 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
