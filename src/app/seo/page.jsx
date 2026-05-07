import Link from "@/components/Link";
import { SEO_PAGES_LIST } from "@/data/seoLandingPages";
import { INDUSTRIES_WE_SERVE } from "@/data/industryLandingPages";

const BASE = "https://www.awaisdigitalservices.co.uk";

export const metadata = {
  title: "SEO Landing Pages | Website Design & Digital Services | Awais Digital Services",
  description:
    "Browse all our SEO-optimised landing pages for website design, industry-specific sites, and digital marketing resources across the UK.",
  alternates: { canonical: `${BASE}/seo` },
  openGraph: {
    title: "SEO Landing Pages | Awais Digital Services",
    description: "Website design and digital services landing pages for UK businesses.",
    url: `${BASE}/seo`,
    siteName: "Awais Digital Services",
    type: "website",
    locale: "en_GB",
    images: [{ url: `${BASE}/og.jpg`, width: 1200, height: 630, alt: "SEO Landing Pages" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Landing Pages | Awais Digital Services",
    description: "Website design and digital services landing pages for UK businesses.",
    images: [`${BASE}/og.jpg`],
  },
};

export default function SeoIndexPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        <div className="container max-w-5xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight mb-6">
            SEO <span className="text-red">Landing Pages</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
            All our website design and digital services landing pages in one place. Find the page that matches your industry or topic.
          </p>
        </div>
      </section>

      {/* Services & resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Services &amp; Resources
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl">
            General SEO pages for small business web design, affordable packages, redesign, maintenance, pricing, and more.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SEO_PAGES_LIST.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className="bg-gray-50 rounded-xl shadow-md p-5 hover:shadow-lg transition border border-gray-100 text-navy font-semibold hover:text-red block"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/seo/free-website-audit"
              className="bg-red/10 rounded-xl shadow-md p-5 hover:shadow-lg transition border border-red/20 text-red font-semibold hover:bg-red hover:text-white block"
            >
              Free Website Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Industries we serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Industries We <span className="text-red">Serve</span>
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl">
            Tailored web design and digital services for specific sectors across the UK.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {INDUSTRIES_WE_SERVE.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition border border-gray-100 text-navy font-semibold hover:text-red text-sm text-center"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back to services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-red transition-colors"
          >
            View all services
          </Link>
        </div>
      </section>
    </main>
  );
}
