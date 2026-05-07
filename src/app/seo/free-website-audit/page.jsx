import Link from "@/components/Link";
import FreeWebsiteAuditForm from "@/components/FreeWebsiteAuditForm";

const BASE = "https://www.awaisdigitalservices.co.uk";

export const metadata = {
  title: "Free Website Audit UK | Get Your Site Reviewed by Experts | ADS",
  description:
    "Get a free website audit from Awais Digital Services. We review speed, SEO, mobile-friendliness, and conversion. No obligation. UK businesses only.",
  alternates: { canonical: `${BASE}/seo/free-website-audit` },
  openGraph: {
    title: "Free Website Audit | Awais Digital Services (ADS)",
    description:
      "Get a free, no-obligation website audit. We check speed, SEO, mobile experience, and more. UK businesses.",
    url: `${BASE}/seo/free-website-audit`,
    siteName: "Awais Digital Services",
    type: "website",
    locale: "en_GB",
    images: [
      { url: `${BASE}/og.jpg`, width: 1200, height: 630, alt: "Free Website Audit" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Audit UK | ADS",
    description: "Get your website reviewed for free. Speed, SEO, mobile & more.",
    images: [`${BASE}/og.jpg`],
  },
};

const benefits = [
  "Identify why your site might be losing visitors or rankings",
  "Get clear, actionable recommendations you can implement",
  "Understand your site's speed, mobile experience, and SEO health",
  "No obligation — we send the report and you decide the next steps",
];

export default function FreeWebsiteAuditPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-sm font-semibold text-red bg-red/10 px-4 py-2 rounded-full mb-4">
              Free offer
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight mb-6">
              Get Your <span className="text-red">Free Website Audit</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              Send us your website URL and we&apos;ll review it for speed, SEO,
              mobile-friendliness, and conversion. You&apos;ll get a clear
              report with actionable recommendations — no obligation.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl font-bold text-navy mb-2">
              Request your free audit
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Fill in the form below. We&apos;ll email your audit report.
            </p>
            <FreeWebsiteAuditForm />
          </div>
        </div>
      </section>

      {/* What is a website audit */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            What is a website audit?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A website audit is a review of your site&apos;s performance,
            structure, and visibility. We look at how fast it loads, how well it
            works on mobile, whether it&apos;s set up for search engines (SEO),
            and how clear it is for visitors to take action (e.g. contact you or
            buy).
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            You receive a report that explains what&apos;s working, what
            isn&apos;t, and what to do next. It&apos;s a useful first step
            before investing in a redesign or SEO.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
            Benefits of a website audit
          </h2>
          <ul className="space-y-4">
            {benefits.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700 text-lg"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red text-white flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Free Website Audit
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Submit the form above and we&apos;ll send your personalised audit
            report. No cost, no obligation. UK businesses only.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-red text-white font-semibold rounded-full hover:bg-red/90 transition-colors"
          >
            Or contact us for a full consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
