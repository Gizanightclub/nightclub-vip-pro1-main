const path = require('path');
const webpack = require('webpack');

module.exports = (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  // تحسينات إضافية للـ webpack

  // Tree shaking محسن
  config.optimization = {
    ...config.optimization,
    usedExports: true,
    sideEffects: false,

    // Bundle splitting محسن
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 25,
      maxAsyncRequests: 25,
      cacheGroups: {
        // Vendor libraries
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
          reuseExistingChunk: true,
        },

        // React & Next.js
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
          name: 'react-vendor',
          chunks: 'all',
          priority: 20,
        },

        // UI libraries
        ui: {
          test: /[\\/]node_modules[\\/](@radix-ui|lucide-react|framer-motion)[\\/]/,
          name: 'ui-vendor',
          chunks: 'all',
          priority: 15,
        },

        // Utility libraries
        utils: {
          test: /[\\/]node_modules[\\/](clsx|tailwind-merge|class-variance-authority)[\\/]/,
          name: 'utils-vendor',
          chunks: 'all',
          priority: 12,
        },

        // Common components
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 5,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },

    // Minimizer محسن
    minimize: !dev,
  };

  // إضافة plugins للتحسين
  if (!dev) {
    config.plugins.push(
      // تحسين environment variables
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env.BABEL_ENV': JSON.stringify('production'),
      }),

      // تحليل الـ bundle (اختياري)
      ...(process.env.ANALYZE === 'true' ? [
        new (require('@next/bundle-analyzer'))({
          enabled: true,
          openAnalyzer: true,
        })
      ] : []),
    );
  }

  // تحسين resolve للسرعة
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      // تحسين imports
      '@': path.join(__dirname, 'src'),
      '@/components': path.join(__dirname, 'src/components'),
      '@/lib': path.join(__dirname, 'src/lib'),
      '@/utils': path.join(__dirname, 'src/utils'),
      '@/hooks': path.join(__dirname, 'src/hooks'),
    },

    // ترتيب الملحقات حسب الأولوية
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],

    // تحسين module resolution
    modules: ['node_modules', path.join(__dirname, 'src')],
  };

  // تحسين للـ loaders
  config.module.rules.push(
    // SVG optimization
    {
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
                'removeDimensions',
              ],
            },
          },
        },
      ],
    }
  );

  // تحسين للصور
  config.module.rules.push({
    test: /\.(png|jpe?g|gif|webp|avif)$/i,
    use: [
      {
        loader: 'next-image-loader',
        options: {
          assetPrefix: '',
          basePath: '',
          isServer,
          isDev: dev,
        },
      },
    ],
  });

  // Cache configuration
  if (!dev) {
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
      cacheDirectory: path.resolve(__dirname, '.next/cache/webpack'),
    };
  }

  // Performance hints
  config.performance = {
    hints: dev ? false : 'warning',
    maxEntrypointSize: 244 * 1024, // 244kb
    maxAssetSize: 244 * 1024, // 244kb
    assetFilter: (assetFilename) => {
      // تجاهل ملفات الخطوط والصور الكبيرة
      return !assetFilename.endsWith('.woff2') &&
             !assetFilename.endsWith('.woff') &&
             !assetFilename.endsWith('.ttf') &&
             !/\.(png|jpe?g|gif|webp|avif)$/.test(assetFilename);
    },
  };

  // تحسين chunk names
  config.optimization.chunkIds = 'named';
  config.optimization.moduleIds = 'named';

  return config;
};
