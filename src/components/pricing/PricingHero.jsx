import Link from "next/link";

export default function PricingHero({ title, description }) {
  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight">
            {title}
          </h1>
          <p className="text-gray-700 md:text-lg">{description}</p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#build-package"
              className="px-5 py-3 bg-red text-white rounded-lg font-semibold hover:bg-navy transition-colors"
            >
              Build My Package
            </a>
            <a
              href="#popular-bundles"
              className="px-5 py-3 bg-navy text-white rounded-lg font-semibold hover:bg-red transition-colors"
            >
              View Popular Bundles
            </a>
            <a
              href="#one-off-services"
              className="px-5 py-3 bg-gray-200 text-navy rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              See One-Off Services
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Transparent pricing", "Flexible bundles", "Small-business friendly"].map(
              (point) => (
                <span
                  key={point}
                  className="text-xs font-semibold bg-navy/10 text-navy px-3 py-1 rounded-full"
                >
                  {point}
                </span>
              )
            )}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-lg">
          <p className="text-sm font-semibold text-navy">Build Your Package</p>
          <div className="mt-4 space-y-2">
            <div className="rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-700">
              Step 1: Website
            </div>
            <div className="rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-700">
              Step 2: Add SEO
            </div>
            <div className="rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-700">
              Step 3: Add Social Media
            </div>
          </div>
          <div className="mt-4 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs text-gray-600">Estimated from</p>
              <p className="text-2xl font-extrabold text-navy">£639</p>
            </div>
            <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Save up to £266 with bundles
            </span>
          </div>
          <div className="mt-4 h-2 rounded-full bg-gray-200 overflow-hidden">
            <div className="h-full w-2/3 bg-red" />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Final quote may vary based on scope and integrations.
          </p>
        </div>
      </div>
    </section>
  );
}

