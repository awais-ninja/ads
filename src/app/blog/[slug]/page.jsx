import Link from "@/components/Link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import AuthorCard from "@/components/AuthorCard";
import { FaCalendar, FaClock, FaUser, FaTag } from "react-icons/fa";

function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date)) return dateString;
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Get all blog posts for static generation
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

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return {
      title: "Blog Post Not Found | Awais Digital Services",
      description: "The requested blog post could not be found.",
    };
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: `${data.title} | Awais Digital Services Blog`,
    description: data.excerpt,
    keywords: data.tags?.join(", ") || "",
    openGraph: {
      title: data.title,
      description: data.excerpt,
      url: `https://awaisdigitalservices.co.uk/blog/${slug}`,
      siteName: "Awais Digital Services",
      images: [
        {
          url: `https://awaisdigitalservices.co.uk${data.image}`,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      locale: "en_GB",
      type: "article",
      publishedTime: data.date,
      authors: [data.author],
      tags: data.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.excerpt,
      images: [`https://awaisdigitalservices.co.uk${data.image}`],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return <div className="text-center py-20">Blog post not found.</div>;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    description: data.excerpt,
    image: `https://awaisdigitalservices.co.uk${data.image}`,
    author: {
      "@type": "Organization",
      name: data.author,
      url: "https://awaisdigitalservices.co.uk",
    },
    publisher: {
      "@type": "Organization",
      name: "Awais Digital Services",
      logo: {
        "@type": "ImageObject",
        url: "https://awaisdigitalservices.co.uk/logo-web.svg",
      },
    },
    datePublished: data.date,
    dateModified: data.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://awaisdigitalservices.co.uk/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 pt-0">
        {/* Hero Image with Overlay */}
        {data.image && (
          <section className="relative h-80 md:h-[32rem] w-full flex items-end mb-0">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover object-center w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="relative z-20 w-full px-4 md:px-0 pb-10 md:pb-16 pointer-events-none select-none">
              <div className="max-w-6xl mx-auto">
                <span className="inline-block bg-red text-white px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-lg">
                  {data.category || "Blog"}
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
                  {data.title}
                </h1>
              </div>
            </div>
          </section>
        )}

        <section className="container mx-auto px-4 py-8 md:py-16 z-10 relative">
          {/* Main Content - Full Width */}
          <article className="w-full mx-auto bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-6 md:p-12 z-10 relative max-w-5xl">
            {/* Author/Meta Information */}
            <div className="mb-8 p-6 bg-gray-50 dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700">
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <FaUser className="text-red" />
                  <span className="text-gray-600 dark:text-neutral-400">
                    Author:
                  </span>
                  <span className="font-semibold text-black dark:text-white">
                    {data.author}
                  </span>
                </div>

                {data.readTime && (
                  <div className="flex items-center gap-2">
                    <FaClock className="text-red" />
                    <span className="text-gray-600 dark:text-neutral-400">
                      Read Time:
                    </span>
                    <span className="font-semibold text-black dark:text-white">
                      {data.readTime}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <FaCalendar className="text-red" />
                  <span className="text-gray-600 dark:text-neutral-400">
                    Published:
                  </span>
                  <span className="font-semibold text-black dark:text-white">
                    {formatDate(data.date)}
                  </span>
                </div>

                {data.tags && data.tags.length > 0 && (
                  <div className="flex items-center gap-2">
                    <FaTag className="text-red" />
                    <span className="text-gray-600 dark:text-neutral-400">
                      Tags:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {data.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block bg-gray-100 dark:bg-neutral-700 text-black dark:text-white px-3 py-1 rounded-full text-xs font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Markdown Content - All Black Text */}
            <div className="max-w-none mx-auto bg-white dark:bg-neutral-900 rounded-xl shadow-lg px-1 md:px-6 py-6 md:py-10 text-black dark:text-white text-[1.15rem] leading-8 font-sans font-inter">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <h1
                      className="text-3xl md:text-4xl font-bold mb-4 mt-8 text-black dark:text-white"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2
                      className="text-2xl md:text-3xl font-semibold mb-3 mt-6 text-black dark:text-white"
                      {...props}
                    />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3
                      className="text-xl md:text-2xl font-semibold mb-2 mt-4 text-black dark:text-white"
                      {...props}
                    />
                  ),
                  h4: ({ node, ...props }) => (
                    <h4
                      className="text-lg font-semibold mb-2 mt-3 text-black dark:text-white"
                      {...props}
                    />
                  ),
                  h5: ({ node, ...props }) => (
                    <h5
                      className="text-base font-semibold mb-2 mt-3 text-black dark:text-white"
                      {...props}
                    />
                  ),
                  h6: ({ node, ...props }) => (
                    <h6
                      className="text-sm font-semibold mb-2 mt-3 text-black dark:text-white"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p
                      className="mb-4 text-[1.15rem] leading-8 text-black dark:text-white"
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul
                      className="list-disc ml-6 mb-6 text-black dark:text-white"
                      {...props}
                    />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol
                      className="list-decimal ml-6 mb-6 text-black dark:text-white"
                      {...props}
                    />
                  ),
                  li: ({ node, ...props }) => (
                    <li
                      className="mb-2 text-black dark:text-white"
                      {...props}
                    />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      className="text-red underline hover:text-red-700"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="border-l-4 border-red pl-4 italic text-black dark:text-white mb-6"
                      {...props}
                    />
                  ),
                  code: ({ node, ...props }) => (
                    <code
                      className="bg-gray-100 dark:bg-neutral-800 text-red px-1.5 py-1 rounded text-base"
                      {...props}
                    />
                  ),
                  pre: ({ node, ...props }) => (
                    <pre
                      className="bg-gray-900 dark:bg-neutral-900 text-white rounded p-4 overflow-x-auto mb-6"
                      {...props}
                    />
                  ),
                  hr: () => (
                    <hr className="my-10 border-gray-200 dark:border-neutral-700" />
                  ),
                  img: ({ node, ...props }) => (
                    <img
                      className="rounded-xl shadow-md my-8 mx-auto"
                      alt={props.alt || "Blog post image"}
                      {...props}
                    />
                  ),
                  table: ({ node, ...props }) => (
                    <table
                      className="w-full border border-gray-200 dark:border-neutral-700 my-8"
                      {...props}
                    />
                  ),
                  th: ({ node, ...props }) => (
                    <th
                      className="bg-gray-100 dark:bg-neutral-800 text-black dark:text-white px-4 py-2"
                      {...props}
                    />
                  ),
                  td: ({ node, ...props }) => (
                    <td
                      className="text-black dark:text-white px-4 py-2"
                      {...props}
                    />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong
                      className="text-black dark:text-white font-bold"
                      {...props}
                    />
                  ),
                  em: ({ node, ...props }) => (
                    <em
                      className="text-black dark:text-white italic"
                      {...props}
                    />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>

            {/* Author Card */}
            <div className="mt-12">
              <AuthorCard />
            </div>

            <div className="mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-red font-semibold hover:underline"
              >
                <span>&larr;</span> Back to Blog
              </Link>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
