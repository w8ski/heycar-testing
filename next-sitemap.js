/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://heycar-testing.vercel.app/",
  generateRobotsTxt: true,
};
