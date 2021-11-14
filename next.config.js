// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
 const nextConfig = {
  target: "serverless",
  experimental: {
    //concurrentFeatures: true,
  },
  webpack: (config, options) => {
    config.resolve.fallback = { fs: false, path: false, os: false, module: false };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  }
}

module.exports = nextConfig