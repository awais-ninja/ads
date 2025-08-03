import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { FaFire, FaSearch } from "react-icons/fa";

import BlogFilterClient from "@/components/BlogFilterClient";

function getAllBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "src/content/blog");
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"));
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      ...data,
      slug: filename.replace(/\.md$/, ""),
      content,
    };
  });
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
}

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  const blogCategories = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags || []))
  );

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-navy via-navy/95 to-red/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              <FaFire className="text-red" />
              <span className="text-sm font-medium">Latest Insights</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Digital <span className="text-red">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Expert strategies, industry trends, and actionable tips to help
              your UK business thrive in the digital landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-red">
                  {blogPosts.length}+
                </div>
                <div className="text-sm">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red">
                  {blogCategories.length}
                </div>
                <div className="text-sm">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red">100%</div>
                <div className="text-sm">Free Content</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Stats Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <FaSearch className="text-navy text-xl" />
              <h2 className="text-2xl font-bold text-navy">
                Discover Digital Marketing Insights
              </h2>
            </div>
            <p className="text-gray-600 mb-8">
              From website design tips to SEO strategies, find everything you
              need to grow your business online.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-red mb-2">
                  {blogPosts.filter((p) => p.featured).length}
                </div>
                <div className="text-navy font-medium">Featured Posts</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-red mb-2">
                  {blogPosts.length}
                </div>
                <div className="text-navy font-medium">Total Articles</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-red mb-2">
                  {blogCategories.length}
                </div>
                <div className="text-navy font-medium">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <BlogFilterClient posts={blogPosts} categories={blogCategories} />
    </main>
  );
}
