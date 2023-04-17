const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, options) => {
    config.resolve.fallback = { fs: false, path: false, os: false, module: false };
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: [
          options.defaultLoaders.babel,
          {
            loader: '@svgr/webpack',
            options: { babel: false }
          }
        ],
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
  i18n: {
    locales: ['en', 'uk', 'pseudo'],
    defaultLocale: 'en'
  },
  compiler: {
    styledComponents: true
  },
  experimental: {
    swcPlugins: [
      ['@lingui/swc-plugin', {}],
    ],
  },
}

if (process.env.ANALYZE === 'true') {
  module.exports = withBundleAnalyzer(nextConfig)
} else {
  module.exports = withNx(withPWA(nextConfig))
}
