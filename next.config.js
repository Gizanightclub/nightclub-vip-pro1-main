/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false, // منع مشاكل /index
  output: 'standalone', // تشغيل نفس المشروع بدون نسخ جديدة

  // تحسينات الأداء
  poweredByHeader: false,
  compress: true,
  generateEtags: false,

  // تحسين الصور
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    loader: 'default',
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
      "nightclubegypt.com",
      "abnzriaextacbsoroyfr.supabase.co"
    ],
    remotePatterns: [
      { protocol: "https", hostname: "source.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "ext.same-assets.com", pathname: "/**" },
      { protocol: "https", hostname: "ugc.same-assets.com", pathname: "/**" },
      { protocol: "https", hostname: "abnzriaextacbsoroyfr.supabase.co", pathname: "/storage/v1/object/public/**" }
    ],
  },

  // إعادة توجيه /index إلى /
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
    ]
  },

  // Headers للأمان والأداء والSEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          {
            key: 'Link',
            value: '<https://abnzriaextacbsoroyfr.supabase.co>; rel=preconnect; crossorigin, <https://fonts.googleapis.com>; rel=preconnect; crossorigin, <https://fonts.gstatic.com>; rel=preconnect; crossorigin, <https://www.googletagmanager.com>; rel=preconnect; crossorigin'
          }
        ]
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'X-Content-Type-Options', value: 'nosniff' }
        ]
      },
      {
        source: '/_next/image',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      {
        source: '/favicon.ico',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000' }
        ]
      }
    ]
  },

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  allowedDevOrigins: ["*.preview.same-app.com"],
  serverExternalPackages: ['@supabase/supabase-js'],

  // Turbopack configuration
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // تحسين Bundle والأداء
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-dialog', '@radix-ui/react-select', 'lodash'],
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB', 'INP'],
    typedRoutes: true,
  },

  // webpack تحسينات إضافية
  webpack: (config, { dev, webpack }) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      minSize: 20000,
      maxSize: 244000,
      cacheGroups: {
        default: { minChunks: 2, priority: -20, reuseExistingChunk: true },
        vendor: { test: /[\\/]node_modules[\\/]/, name: 'vendors', priority: -10, chunks: 'all' },
        react: { test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/, name: 'react', chunks: 'all', priority: 10 },
        lucide: { test: /[\\/]node_modules[\\/]lucide-react[\\/]/, name: 'lucide', chunks: 'all', priority: 10 },
        ui: { test: /[\\/]node_modules[\\/]@radix-ui[\\/]/, name: 'ui', chunks: 'all', priority: 10 },
      },
    };

    config.optimization.usedExports = true;
    config.optimization.sideEffects = false;

    if (!dev) {
      config.optimization.minimizer.push(
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production'),
        })
      );
      config.resolve.alias = {
        ...config.resolve.alias,
        'lodash': 'lodash-es',
      };
    }

    return config;
  },

  compress: true,
};

module.exports = nextConfig;
