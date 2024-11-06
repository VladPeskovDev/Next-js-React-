/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost:3000',
    generateRobotsTxt: true, // Создание robots.txt
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
  };
  