/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,

  // تحسينات الأداء
  poweredByHeader: false,
  compress: true,

  // تحسين الصور
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'], // تفضيل الصيغ الحديثة
    minimumCacheTTL: 60 * 60 * 24 * 365, // Cache لسنة كاملة
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

  // Headers للأمان والأداء
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
      }
    ]
  },

  eslint: {
    // تجاهل أخطاء ESLint أثناء البناء
    ignoreDuringBuilds: true,
  },
  typescript: {
    // تجاهل أخطاء TypeScript أثناء البناء
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: ["*.preview.same-app.com"],

  // إعدادات إضافية للنشر على Vercel
  serverExternalPackages: ['@supabase/supabase-js'],

  // تحسين Bundle
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // ضغط إضافي
  compress: true,
};

module.exports = nextConfig;
