// @ts-check
const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


/**
 * @type {import('next').NextConfig}
 **/
 const nextConfig = {
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
  pwa: {
    dest: 'public'
  }
}
if(process.env.ANALYZE === 'true'){
  module.exports = withBundleAnalyzer(nextConfig)
}else{
  module.exports = withPWA(nextConfig)
}