/** @type {import('next').NextConfig} */
const nextConfig = {
  // تحسينات الأداء المتقدمة
  poweredByHeader: false,
  compress: true,
  generateEtags: false,

  // تحسين الصور لتوفير 420KB
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 365, // سنة كاملة
    dangerouslyAllowSVG: false, // أمان إضافي
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    loader: 'default',
    quality: 75, // توازن بين الجودة والحجم
    remotePatterns: [
      {
        protocol: "https",
        hostname: "abnzriaextacbsoroyfr.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },

  // Headers محسنة لـ Cache - سيوفر 106KB
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ]
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ]
      },
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },

  // تحسينات تجريبية لتوفير 346KB من JavaScript
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-select',
      'lodash-es'
    ],
    typedRoutes: true,
    // تقليل polyfills للمتصفحات الحديثة - سيوفر 13KB
    browsersListForSwc: true,
    legacyBrowsers: false,
  },

  // Webpack محسن لتقليل Bundle Size
  webpack: (config, { isServer, dev }) => {
    // تحسين tree shaking
    config.optimization.usedExports = true;
    config.optimization.sideEffects = false;

    // Bundle splitting متقدم
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react-vendor',
            chunks: 'all',
            priority: 20,
          },
          icons: {
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            name: 'icons',
            chunks: 'all',
            priority: 20,
          },
          ui: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name: 'ui-vendor',
            chunks: 'all',
            priority: 20,
          },
        },
      };

      // إزالة moment.js locale إذا وجد
      config.resolve.alias = {
        ...config.resolve.alias,
        'lodash': 'lodash-es', // استخدام ES modules
      };
    }

    // تحسين production builds
    if (!dev) {
      // إزالة console.log في production
      config.optimization.minimizer.push(
        new (require('webpack').DefinePlugin)({
          'process.env.NODE_ENV': JSON.stringify('production'),
        })
      );
    }

    return config;
  },

  // إعدادات Build للأداء الأمثل
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },

  // Turbopack للتطوير السريع
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

module.exports = nextConfig;
