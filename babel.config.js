module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
        browserslistEnv: 'modern',
        modules: false,
        bugfixes: true,
        shippedProposals: true,
        // تحسين حجم bundle عبر استبعاد polyfills غير الضرورية
        exclude: [
          'transform-typeof-symbol',
          'transform-unicode-regex',
          'transform-sticky-regex',
          'transform-new-target',
          'transform-modules-umd',
          'transform-modules-systemjs',
          'transform-modules-amd',
          'transform-literals'
        ]
      }
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        development: process.env.NODE_ENV === 'development'
      }
    ],
    [
      '@babel/preset-typescript',
      {
        allowNamespaces: true,
        allowDeclareFields: true
      }
    ]
  ],
  plugins: [
    // تحسينات الأداء
    process.env.NODE_ENV === 'production' && [
      'babel-plugin-transform-remove-console',
      {
        exclude: ['error', 'warn']
      }
    ],
    // دعم ميزات ES6+ الحديثة
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    // تحسين async/await
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false
      }
    ]
  ].filter(Boolean),

  env: {
    development: {
      plugins: [
        // hot reload optimizations
        'react-refresh/babel'
      ]
    },
    production: {
      plugins: [
        // إزالة PropTypes في الإنتاج
        'babel-plugin-transform-react-remove-prop-types',
        // تحسين bundle size
        [
          'babel-plugin-transform-imports',
          {
            'lodash': {
              transform: 'lodash/${member}',
              preventFullImport: true
            },
            'lucide-react': {
              transform: 'lucide-react/dist/esm/icons/${kebabCase(member)}',
              preventFullImport: true
            }
          }
        ]
      ]
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: { node: 'current' }
          }
        ]
      ]
    }
  }
};
