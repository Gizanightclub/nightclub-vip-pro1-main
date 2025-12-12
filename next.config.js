/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,

  // تحسينات الأداء
  poweredByHeader: false,
  compress: true,
  generateEtags: false,

  // تحسين الصور
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
      "nightclubegypt.com",
      "abnzriaextacbsoroyfr.supabase.co"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "abnzriaextacbsoroyfr.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },

  // إعادة التوجيه للنسخة الأساسية www
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'nightclubegypt.com',
          },
        ],
        destination: 'https://www.nightclubegypt.com/:path*',
        permanent: true,
      },
    ];
  },

  // Headers للأمان والأداء والSEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Preconnect to critical external domains
          {
            key: 'Link',
            value: '<https://abnzriaextacbsoroyfr.supabase.co>; rel=preconnect; crossorigin, <https://fonts.googleapis.com>; rel=preconnect; crossorigin, <https://fonts.gstatic.com>; rel=preconnect; crossorigin, <https://www.googletagmanager.com>; rel=preconnect; crossorigin'
          }
        ]
      },
      {
        source: '/images/:path*',
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
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000'
          }
        ]
      }
    ]
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
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
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-select',
      'lodash',
      'recharts',
      'react-tsparticles',
      'embla-carousel-react',
      'keen-slider',
      'react-hook-form',
      'zod'
    ],
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB', 'INP'],
    // typedRoutes is not supported by Turbopack yet
    // typedRoutes: true,
    // تحسين الأداء
    // optimizeCss: true, // تعطيل مؤقتاً بسبب مشكلة critters
    // تمكين SWC بدلاً من Babel (enabled by default in Next.js 13+)
    // تمكين ميزات تحسين الأداء الإضافية
  },

  // webpack تحسينات إضافية
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // تحسين bundle splitting
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          enforce: true,
        },
      },
    };

    // إزالة console.log في الإنتاج
    if (!dev) {
      config.optimization.minimizer.push(
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production'),
        })
      );
    }

    return config;
  },

  // ضغط إضافي
  compress: true,
};

module.exports = nextConfig;
