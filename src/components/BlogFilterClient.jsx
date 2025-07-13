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
          <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red"
                  >
                    <div className="relative w-full h-64 md:h-72 lg:h-64 xl:h-68 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-red text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg tracking-wide uppercase z-10">
                        <FaFire className="inline mr-1" /> Featured
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-navy px-4 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
                        {post.category}
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-10">
                      <h3 className="text-2xl font-extrabold text-black mb-3 group-hover:text-red transition-colors duration-300 line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-black text-base mb-6 line-clamp-3 flex-1 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <FaUser className="text-red" />{" "}
                            <span className="text-black">{post.author}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <FaClock className="text-red" />{" "}
                            <span className="text-black">{post.readTime}</span>
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <FaCalendar className="text-red" />{" "}
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(post.tags || []).slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-block bg-gray-100 text-black px-3 py-1 rounded-full text-xs font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <span className="text-red font-semibold text-base group-hover:translate-x-1 transition-transform duration-300">
                          Read Article
                        </span>
                        <FaArrowRight className="text-red group-hover:translate-x-1 transition-transform duration-300" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
              {regularPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red"
                >
                  <div className="relative w-full h-56 md:h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-navy px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-8">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-red transition-colors duration-300 line-clamp-2 leading-tight">
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
                          <span className="text-black">{post.readTime}</span>
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
                        Read More
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
