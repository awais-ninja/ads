"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "@/components/Link";
import {
  FaCalendar,
  FaClock,
  FaUser,
  FaArrowRight,
  FaFire,
  FaStar,
  FaEye,
} from "react-icons/fa";

function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
}

export default function BlogFilterClient({ posts, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => (post.tags || []).includes(selectedCategory));
  const featuredPosts = filteredPosts
    .filter((post) => post.featured)
    .slice(0, 3);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <>
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">
                Filter by Category
              </h2>
              <p className="text-gray-600">
                Find content that matches your interests
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <CategoryButton
                category="All"
                selected={selectedCategory === "All"}
                onClick={setSelectedCategory}
              />
              {categories.map((category) => (
                <CategoryButton
                  key={category}
                  category={category}
                  selected={selectedCategory === category}
                  onClick={setSelectedCategory}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Featured <span className="text-red">Articles</span>
                </h2>
                <p className="text-black text-lg">
                  Our most popular and insightful content
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red"
                  >
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute top-3 left-3 bg-red text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg tracking-wide uppercase z-10">
                        <FaFire className="inline mr-1" /> Featured
                      </div>
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-navy px-2 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
                        {post.category || "Blog"}
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <h3 className="text-lg font-bold text-black mb-2 group-hover:text-red transition-colors duration-300 line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-black text-sm mb-4 line-clamp-2 flex-1 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <FaUser className="text-red" />{" "}
                            <span className="text-black">{post.author}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <FaClock className="text-red" />{" "}
                            <span className="text-black">
                              {post.readTime || "5 min read"}
                            </span>
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <FaCalendar className="text-red" />{" "}
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {(post.tags || []).slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-block bg-gray-100 text-black px-2 py-1 rounded-full text-xs font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                        <span className="text-red font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                          Read Article
                        </span>
                        <FaArrowRight className="text-red text-xs group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                All <span className="text-red">Articles</span>
              </h2>
              <p className="text-gray-600">
                {regularPosts.length} article
                {regularPosts.length !== 1 ? "s" : ""} found
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {regularPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red"
                >
                  <div className="relative w-full h-40 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-navy px-2 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
                      {post.category || "Blog"}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-4">
                    <h3 className="text-base font-bold text-black mb-2 group-hover:text-red transition-colors duration-300 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-black text-xs mb-3 line-clamp-2 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1">
                          <FaUser className="text-red" />{" "}
                          <span className="text-black">{post.author}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock className="text-red" />{" "}
                          <span className="text-black">
                            {post.readTime || "5 min read"}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {(post.tags || []).slice(0, 1).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block bg-gray-100 text-black px-2 py-1 rounded-full text-xs font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                      <span className="text-red font-semibold text-xs group-hover:translate-x-1 transition-transform duration-300">
                        Read Full Article
                      </span>
                      <FaArrowRight className="text-red text-xs group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CategoryButton({ category, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(category)}
      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
        selected
          ? "bg-red text-white shadow-lg shadow-red/25"
          : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
      }`}
    >
      {category}
    </button>
  );
}
