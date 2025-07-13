import Link from "@/components/Link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

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

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return <div className="text-center py-20">Blog post not found.</div>;
  }
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return (
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
            <div className="max-w-4xl mx-auto">
              <span className="inline-block bg-red text-white px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-lg">
                {data.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
                {data.title}
              </h1>
            </div>
          </div>
        </section>
      )}
      <section className="container mx-auto px-4 flex flex-col md:flex-row gap-8 py-8 md:py-16 z-10 relative">
        {/* Sticky Sidebar (desktop) */}
        <aside className="hidden md:block w-full md:w-1/5 pt-24 sticky top-24 h-fit">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-6 mb-8">
            <div className="mb-4">
              <span className="block text-xs text-gray-400 dark:text-neutral-400 mb-1">
                Author
              </span>
              <span className="font-semibold text-black dark:text-white text-lg">
                {data.author}
              </span>
            </div>
            {data.readTime && (
              <div className="mb-4">
                <span className="block text-xs text-gray-400 dark:text-neutral-400 mb-1">
                  Read Time
                </span>
                <span className="text-black dark:text-white">
                  {data.readTime}
                </span>
              </div>
            )}
            <div>
              <span className="block text-xs text-gray-400 dark:text-neutral-400 mb-2">
                Tags
              </span>
              <div className="flex flex-wrap gap-2">
                {(data.tags || []).map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-100 dark:bg-neutral-800 text-black dark:text-white px-3 py-1 rounded-full text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <article className="w-full md:w-4/5 mx-auto bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-6 md:p-12 z-10 relative">
          {/* Author/Meta (mobile) */}
          <div className="md:hidden mb-6 flex flex-wrap gap-4 items-center justify-between">
            <div>
              <span className="block text-xs text-gray-400 dark:text-neutral-400 mb-1">
                Author
              </span>
              <span className="font-semibold text-black dark:text-white text-lg">
                {data.author}
              </span>
            </div>
            {data.readTime && (
              <div>
                <span className="block text-xs text-gray-400 dark:text-neutral-400 mb-1">
                  Read Time
                </span>
                <span className="text-black dark:text-white">
                  {data.readTime}
                </span>
              </div>
            )}
            <div className="flex flex-wrap gap-2 mt-2">
              {(data.tags || []).map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-100 dark:bg-neutral-800 text-black dark:text-white px-3 py-1 rounded-full text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          {/* Markdown Content */}
          <div
            className="max-w-6xl mx-auto bg-white dark:bg-neutral-900 rounded-xl shadow-lg px-1 md:px-6 py-6 md:py-10 text-neutral-800 dark:text-neutral-200 text-[1.15rem] leading-8 font-sans"
            style={{ fontFamily: "Inter, Arial, sans-serif" }}
          >
            {/* Future: Place ad components here, e.g. <AdSlot position="top" /> */}
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => (
                  <h1
                    className="text-3xl md:text-4xl font-bold mb-4 mt-8 text-blue-900 dark:text-blue-300"
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className="text-2xl md:text-3xl font-semibold mb-3 mt-6 text-blue-900 dark:text-blue-300"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="text-xl md:text-2xl font-semibold mb-2 mt-4 text-blue-900 dark:text-blue-300"
                    {...props}
                  />
                ),
                h4: ({ node, ...props }) => (
                  <h4
                    className="text-lg font-semibold mb-2 mt-3 text-blue-900 dark:text-blue-300"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p
                    className="mb-4 text-[1.15rem] leading-8 text-neutral-800 dark:text-neutral-200"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc ml-6 mb-6" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal ml-6 mb-6" {...props} />
                ),
                li: ({ node, ...props }) => <li className="mb-2" {...props} />,
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
                    className="border-l-4 border-red pl-4 italic text-gray-600 dark:text-neutral-300 mb-6"
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
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-red font-semibold hover:underline"
            >
              <span>&larr;</span> Back to Blog
            </Link>
          </div>
          {/* Future: Place ad components here, e.g. <AdSlot position="bottom" /> */}
        </article>
      </section>
    </main>
  );
}
