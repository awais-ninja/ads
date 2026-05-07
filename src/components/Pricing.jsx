"use client";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaRocket,
  FaSeedling,
  FaCrown,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "@/components/Link";

const packages = [
  {
    name: "Website Starter Package",
    price: "£279",
    compareAt: "£426",
    saving: "Save £147",
    tagline: "For new businesses, sole traders & local services",
    icon: <FaSeedling className="text-green-500 text-3xl" />,
    features: [
      "Up to 3 pages — mobile-friendly",
      "Contact form & WhatsApp button",
      "Basic on-page SEO & speed basics",
      "Google indexing setup",
      "1 round of revisions",
    ],
    description:
      "A clean, professional site to establish trust and get found locally. Ideal when you need a strong first presence without overspending.",
    cta: "Discuss this package",
    waMsg: "Hi, I'm interested in the Website Starter Package (£279).",
    accent: "border-green-400/60 shadow-green-100/50",
    badge: "From £279",
  },
  {
    name: "Business Website Package",
    price: "£559",
    compareAt: "£913",
    saving: "Save £354",
    tagline: "For growing businesses that need more trust & clarity",
    icon: <FaRocket className="text-red text-3xl" />,
    features: [
      "5–7 pages, custom homepage & services",
      "Testimonials section",
      "Analytics & Search Console setup",
      "Sitemap & basic local SEO structure",
      "2 rounds of revisions",
    ],
    description:
      "More pages, stronger credibility, and clearer service presentation — built to support enquiries and local visibility.",
    cta: "Discuss this package",
    waMsg: "Hi, I'm interested in the Business Website Package (£559).",
    accent: "border-red shadow-red-100 scale-105 z-10",
    highlight: true,
    badge: "Popular",
  },
  {
    name: "Growth Website Package",
    price: "£959",
    compareAt: "£1,742",
    saving: "Save £783",
    tagline: "Lead-generation sites for serious growth",
    icon: <FaCrown className="text-yellow-500 text-3xl" />,
    features: [
      "8–12 pages + landing page included",
      "Meta Pixel & basic conversion tracking",
      "FAQ & trust sections, speed optimisation",
      "Google Analytics & Search Console",
      "3 rounds of revisions",
    ],
    description:
      "Conversion-focused structure, tracking, and depth — for businesses that want enquiries, not just a brochure site.",
    cta: "Discuss this package",
    waMsg: "Hi, I'm interested in the Growth Website Package (£959).",
    accent: "border-yellow-400/70 shadow-yellow-100/50",
    badge: "Best value",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring" },
  }),
};

export default function Pricing() {
  const whatsappNumber = "447443098117";
  return (
    <section
      id="pricing-preview"
      className="py-24 bg-gradient-to-br from-white via-blue-50/40 to-pink-50/30 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-lg sm:text-3xl md:text-5xl font-bold font-poppins mb-4 text-navy">
            Website Packages —{" "}
            <span className="text-red">Honest UK Pricing</span>
          </h2>
          <p className="text-base text-gray-900 max-w-2xl mx-auto mb-6">
            No hidden fees. Package prices reflect discounted bundles versus
            buying the same items separately. See every category — marketing,
            SEO, branding, IT & more — on our full pricing page.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-navy font-semibold underline decoration-red decoration-2 underline-offset-4 hover:text-red transition-colors"
          >
            Flexible Pricing Studio — all services{" "}
            <FaArrowRight className="text-sm" aria-hidden />
          </Link>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 justify-center items-stretch mb-10">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={cardVariants}
              className={`flex flex-col h-full bg-white rounded-2xl shadow-xl border-2 p-8 text-center relative transition-transform duration-300 ${
                pkg.accent
              } ${
                pkg.highlight
                  ? "md:scale-[1.03] md:shadow-2xl border-red ring-2 ring-yellow-200/80"
                  : ""
              }`}
              role="region"
              aria-label={`${pkg.name} - ${pkg.tagline}`}
            >
              {pkg.highlight && (
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20">
                  <span
                    className="inline-block px-4 py-1 rounded-full text-xs font-bold text-yellow-900 bg-[#FFF9C4] shadow border border-yellow-200"
                    aria-label="Most popular package"
                  >
                    Most Popular
                  </span>
                </div>
              )}
              <span
                className="absolute top-6 left-1/2 -translate-x-1/2 bg-navy/10 text-navy font-semibold text-xs px-4 py-1 rounded-full shadow-sm"
                aria-label={pkg.badge}
              >
                {pkg.badge}
              </span>
              <div className="flex justify-center mb-4 mt-8" aria-hidden="true">
                {pkg.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{pkg.name}</h3>
              <p className="text-xs text-gray-500 mb-1">
                If bought separately
              </p>
              <div
                className="text-lg font-semibold text-gray-500 line-through mb-1"
                aria-label={`Comparable separate total ${pkg.compareAt}`}
              >
                {pkg.compareAt}
              </div>
              <div
                className="text-3xl font-extrabold text-red mb-1"
                aria-label={`Package price ${pkg.price}`}
              >
                {pkg.price}
              </div>
              <p className="text-sm font-semibold text-green-700 mb-1">
                {pkg.saving}
              </p>
              <div className="text-sm text-gray-700 mb-2 font-medium">
                {pkg.tagline}
              </div>
              <p className="text-gray-800 mb-4 text-sm min-h-[52px]">
                {pkg.description}
              </p>
              <ul className="text-left mb-6 space-y-2">
                {pkg.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-800 text-sm"
                  >
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-navy/10 text-red shrink-0"
                      aria-hidden="true"
                    >
                      <FaCheckCircle />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  pkg.waMsg
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy transition-colors w-full"
                aria-label={`WhatsApp about ${pkg.name}`}
              >
                {pkg.cta}
                <FaWhatsapp className="text-lg" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
