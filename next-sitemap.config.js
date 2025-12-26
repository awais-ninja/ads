/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.awaisdigitalservices.co.uk",
  generateRobotsTxt: true, // ✅ also generate robots.txt
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/404", "/api"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    additionalSitemaps: [],
  },
};
