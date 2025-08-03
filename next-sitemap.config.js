/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://awaisdigitalservices.co.uk",
  generateRobotsTxt: true, // ✅ also generate robots.txt
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/404"],
  // Add custom configuration for blog posts
  additionalPaths: async (config) => {
    const fs = require("fs");
    const path = require("path");
    const matter = require("gray-matter");

    const postsDirectory = path.join(process.cwd(), "src/content/blog");
    const filenames = fs
      .readdirSync(postsDirectory)
      .filter((f) => f.endsWith(".md"));

    const blogPosts = filenames.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        loc: `/blog/${filename.replace(/\.md$/, "")}`,
        changefreq: "monthly",
        priority: 0.8, // Higher priority for blog posts
        lastmod: data.date
          ? new Date(data.date).toISOString()
          : new Date().toISOString(),
      };
    });

    return blogPosts;
  },
};
