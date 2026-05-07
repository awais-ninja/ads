"use client";

import Link from "@/components/Link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { INDUSTRIES_WE_SERVE } from "@/data/industryLandingPages";

export default function SEOLandingPage({ page, path, schema }) {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight mb-6">
              {page.heroHeadline}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              {page.heroSubtext}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-red text-white font-semibold rounded-full shadow hover:bg-navy transition-colors"
              aria-label="Get a quote"
            >
              Get a free quote
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            {page.problemTitle}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {page.problemContent}
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            {page.solutionTitle}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {page.solutionContent}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10 text-center">
            What you get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.benefits.map((b, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-6"
              >
                <h3 className="text-xl font-bold text-navy mb-2">{b.title}</h3>
                <p className="text-gray-700">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / examples */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-center">
            Recent <span className="text-red">projects</span>
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            See how we&apos;ve helped UK businesses with professional websites.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-navy">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-navy text-navy font-semibold rounded-full hover:bg-navy hover:text-white transition-colors"
            >
              View all projects
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10 text-center">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {page.processSteps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-red text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-gray-700">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Pricing
          </h2>
          <p className="text-lg text-gray-700 mb-8">{page.pricingText}</p>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-red transition-colors"
          >
            View pricing
          </Link>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Industries We <span className="text-red">Serve</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Tailored web design and digital services for specific sectors across the UK.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-10">
            {INDUSTRIES_WE_SERVE.map(({ path: industryPath, label }) => (
              <Link
                key={industryPath}
                href={industryPath}
                className="bg-gray-50 rounded-xl shadow-md p-4 hover:shadow-lg transition border border-gray-100 text-navy font-semibold hover:text-red text-sm text-center"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-navy mb-4">
              More Services &amp; Resources
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Explore our SEO landing pages for small business web design, affordable packages, redesign, maintenance, and more.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/seo/website-design-small-business-uk" className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200 text-navy text-sm font-medium hover:border-red hover:text-red transition">Small Business UK</Link>
            <Link href="/seo/affordable-website-design-uk" className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200 text-navy text-sm font-medium hover:border-red hover:text-red transition">Affordable Web Design</Link>
            <Link href="/seo/website-redesign-services-uk" className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200 text-navy text-sm font-medium hover:border-red hover:text-red transition">Website Redesign</Link>
            <Link href="/seo/website-maintenance-services-uk" className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200 text-navy text-sm font-medium hover:border-red hover:text-red transition">Website Maintenance</Link>
            <Link href="/seo/web-design-agency-london" className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200 text-navy text-sm font-medium hover:border-red hover:text-red transition">Web Design London</Link>
            <Link href="/seo/web-design-agency-manchester" className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200 text-navy text-sm font-medium hover:border-red hover:text-red transition">Web Design Manchester</Link>
            <Link href="/seo/website-design-pricing-uk" className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200 text-navy text-sm font-medium hover:border-red hover:text-red transition">Website Design Pricing</Link>
            <Link href="/seo/hire-web-designer-uk" className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200 text-navy text-sm font-medium hover:border-red hover:text-red transition">Hire Web Designer UK</Link>
            <Link href="/seo/free-website-audit" className="px-4 py-2 bg-red text-white rounded-full text-sm font-semibold hover:bg-navy transition">Free Website Audit</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {page.ctaTitle}
          </h2>
          <p className="text-xl text-gray-200 mb-8">{page.ctaSubtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-red text-white font-semibold rounded-full hover:bg-red/90 transition-colors"
            >
              Get a free consultation
            </Link>
            <Link
              href="https://wa.me/447443098117"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-navy font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* Service schema */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </main>
  );
}
