/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  eslint: {
    // تجاهل أخطاء ESLint أثناء البناء
    ignoreDuringBuilds: true,
  },
  typescript: {
    // تجاهل أخطاء TypeScript أثناء البناء
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: ["*.preview.same-app.com"],
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
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
    ],
  },
  // إعدادات إضافية للنشر على Vercel
  serverExternalPackages: ['@supabase/supabase-js']
};

module.exports = nextConfig;
