
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://weee.city',
    generateRobotsTxt: true, 
    sitemapSize: 5000,
    exclude: ['/server-sitemap.xml'], // <= exclude here
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://weee.city/server-sitemap.xml', // <==== Add here
      ],
    },
  }