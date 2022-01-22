// @ts-check
const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withNx = require('@nrwl/next/plugins/with-nx');
const intercept = require("intercept-stdout")

// safely ignore recoil stdout warning messages 
function interceptStdout(text) {
  if (
    text.includes('Duplicate atom key')||
    text.includes('GenerateSW has been called multiple times') ||
    // text.includes('Plurals for locale') ||
    text.includes('DeprecationWarning: Use of deprecated folder mapping "./"') ||
    text.includes('is an experimental feature')
  ) {
    return ''
  }
  return text
}

// Intercept in dev and prod
intercept(interceptStdout)

/**
 * @type {import('next').NextConfig}
 **/
 const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  reactStrictMode: true,
  generateBuildId: () => 'build',
  experimental: {
    reactRoot: true,
    styledComponents: true,
    // concurrentFeatures: true,
  },
  webpack: (config, options) => {
    config.resolve.fallback = { fs: false, path: false, os: false, module: false };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
  i18n: {
    locales: ['uk', 'en', 'pseudo'],
    defaultLocale: 'en'
  },
  domains: [
    {
      domain: 'weee.city',
      defaultLocale: 'en',
    },
    {
      domain: 'uk.weee.city',
      defaultLocale: 'uk',
    }
  ],
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  }
}
if(process.env.ANALYZE === 'true'){
  module.exports = withBundleAnalyzer(nextConfig)
}else{
  //@ts-ignore
  module.exports = withNx(withPWA(nextConfig))
}
