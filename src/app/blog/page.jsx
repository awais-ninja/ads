import Link from "@/components/Link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  FaCalendar,
  FaClock,
  FaUser,
  FaTag,
  FaArrowRight,
  FaFire,
} from "react-icons/fa";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
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
      {/* Category Filter Section */}
      <BlogFilterClient posts={blogPosts} categories={blogCategories} />
      {/* Featured Posts Section */}
      {/* All Posts Section */}
    </main>
  );
}
