"use client";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaRocket,
  FaSeedling,
  FaCrown,
  FaPlusCircle,
  FaTag,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "@/components/Link";

const packages = [
  {
    name: "Starter Website Package",
    price: "£149",
    originalPrice: "£290",
    tagline: "Perfect for Startups and Entrepreneurs",
    icon: <FaSeedling className="text-green-500 text-3xl" />,
    features: [
      "Custom SEO-Optimized 3-Page Website for Small Businesses",
      "Mobile-optimized and SEO-friendly",
      "Contact Form Integration",
      "WhatsApp Chat Integration",
      "Basic On-Page SEO setup",
      "1 free revision round",
    ],
    description:
      "Get your business online fast with a beautiful, SEO-optimized website. Ideal for new businesses and startups who want to look professional and attract customers from day one.",
    cta: "Start My Website",
    waMsg: "Hi, I'm interested in the Starter Website Package!",
    accent: "border-green-400 shadow-green-100",
    badge: "Limited Time Launch Offer!",
  },
  {
    name: "Business Growth Package",
    price: "299",
    originalPrice: "£500",
    tagline: "Ideal for Growing Businesses",
    icon: <FaRocket className="text-red text-3xl" />,
    features: [
      "5–7 page fully custom, SEO-optimized website",
      "Advanced SEO Setup for UK Businesses",
      "Lead Generation Landing Page",
      "Branding Kit (Logo, Colors, Fonts)",
      "Basic Email Marketing Setup (Automated Welcome Series)",
      "2 free revision rounds",
    ],
    description:
      "Upgrade your online presence and start generating leads. This package is perfect for businesses ready to grow, with advanced SEO, branding, and marketing tools included.",
    cta: "Grow My Business Online",
    waMsg: "Hi, I'm interested in the Business Growth Package!",
    accent: "border-red shadow-red-100 scale-105 z-10",
    highlight: true,
    badge: "Launch Discount Available!",
  },
  {
    name: "Full Digital Launch Package",
    price: "£999",
    originalPrice: "£1400",
    tagline: "Best for Full Brand Launches",
    icon: <FaCrown className="text-yellow-400 text-3xl" />,
    features: [
      "E-commerce Store Setup UK or Full Corporate Website (8+ pages)",
      "Full Branding Kit (Logo, Colors, Typography)",
      "Full Email Marketing System Setup",
      "3 Months Website Care and Support (updates, backups, fixes)",
      "3 free revision rounds",
    ],
    description:
      "Launch your brand with everything you need for success online. Ideal for serious businesses who want a custom, SEO-optimized site, full branding, and ongoing support.",
    cta: "Launch My Brand Today",
    waMsg: "Hi, I'm interested in the Full Digital Launch Package!",
    accent: "border-yellow-400 shadow-yellow-100",
    badge: "Early Bird Special Pricing!",
  },
];

const addons = [
  {
    name: "Extra Website Page",
    price: "+£80 per page",
    desc: "Expand your website's services or additional pages.",
  },
  {
    name: "Advanced SEO Audit & Optimization",
    price: "+£300",
    desc: "Boost your website's Google rankings and visibility.",
  },
  {
    name: "Monthly Website Care Plan",
    price: "£75/month",
    desc: "Keep your website secure, updated, and running smoothly.",
  },
];

const whyPoints = [
  {
    icon: <FaCheckCircle className="text-green-500" />,
    text: "✅ You will look professional in the UK market.",
  },
  {
    icon: <FaCheckCircle className="text-green-500" />,
    text: "✅ You won't waste time talking to broke people.",
  },
  {
    icon: <FaCheckCircle className="text-green-500" />,
    text: "✅ You can still negotiate if a client is serious but asks for a discount.",
  },
  {
    icon: <FaCheckCircle className="text-green-500" />,
    text: "✅ You still undercut big agencies, who charge £3000–£8000 for the same.",
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
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-pink-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-lg sm:text-3xl md:text-5xl font-bold font-poppins mb-4 text-navy">
            Transparent <span className="text-red">Pricing</span> for Small
            Businesses
          </h2>
          <p className="text-base text-gray-900 max-w-2xl mx-auto">
            No hidden fees. No surprises. Just honest, market-standard pricing
            for UK businesses — with special launch discounts!
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 justify-center items-stretch mb-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={cardVariants}
              className={`flex flex-col h-full bg-white rounded-2xl shadow-xl border-2 p-8 text-center relative transition-transform duration-300 ${
                pkg.accent
              } ${
                pkg.highlight
                  ? "md:scale-110 md:shadow-2xl border-red ring-2 ring-yellow-200"
                  : ""
              }`}
              role="region"
              aria-label={`${pkg.name} - ${pkg.tagline}`}
            >
              {/* Most Popular Badge for Business Growth Package */}
              {pkg.highlight && (
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20">
                  <span
                    className="inline-block px-4 py-1 rounded-full text-xs font-bold text-yellow-900 bg-[#FFF9C4] shadow border border-yellow-200"
                    aria-label="Most Popular Choice"
                  >
                    ⭐ Most Popular Choice ⭐
                  </span>
                </div>
              )}
              {/* Launch Offer Badge */}
              <span
                className="absolute top-6 left-1/2 -translate-x-1/2 bg-blue-100 text-blue-700 font-semibold text-xs px-4 py-1 rounded-full flex items-center gap-2 shadow-sm"
                aria-label={pkg.badge}
              >
                <FaTag className="text-blue-400" aria-hidden="true" />{" "}
                {pkg.badge}
              </span>
              <div className="flex justify-center mb-4 mt-8" aria-hidden="true">
                {pkg.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{pkg.name}</h3>
              <div
                className="text-2xl font-bold text-gray-700 line-through mb-0.5"
                aria-label={`Original price: ${pkg.originalPrice}`}
              >
                {pkg.originalPrice}
              </div>
              <div
                className="text-3xl font-extrabold text-red mb-1"
                aria-label={`Discounted price: ${pkg.price}`}
              >
                {pkg.price}{" "}
                <span className="block text-xs text-gray-700 font-normal">
                  Limited Time
                </span>
              </div>
              <div className="text-sm text-gray-700 mb-2 font-medium">
                {pkg.tagline}
              </div>
              <p className="text-gray-800 mb-4 text-sm min-h-[56px]">
                {pkg.description}
              </p>
              <ul className="text-left mb-6 space-y-2">
                {pkg.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-800 text-sm"
                  >
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-navy/10 text-red"
                      aria-hidden="true"
                    >
                      <FaCheckCircle />
                    </span>{" "}
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
                aria-label={`Contact us on WhatsApp to discuss the ${pkg.name}`}
              >
                Contact us on WhatsApp to discuss the {pkg.name}
                <FaWhatsapp className="text-lg" />
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Launch Offer Note */}
        <div className="text-center mb-10">
          <span className="inline-block bg-yellow-100 text-yellow-800 font-semibold text-sm px-6 py-3 rounded-xl shadow-sm">
            Special Launch Offers Available for a Limited Time — First 10
            Clients Only!
            <br />
            Grab your discounted package and grow your business online today.
          </span>
        </div>
        {/* Add-ons as pill badges */}
        <div className="max-w-2xl mx-auto mt-10 flex flex-wrap gap-3 justify-center">
          {addons.map((addon, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/10 text-navy font-semibold text-sm border border-navy/10"
              role="region"
              aria-label={`${addon.name} - ${addon.desc} - Price: ${addon.price}`}
            >
              <FaPlusCircle className="text-red" aria-hidden="true" />{" "}
              {addon.name} - {addon.desc}
              <span className="text-gray-700 font-normal">{addon.price}</span>
            </span>
          ))}
        </div>
        {/* Why These Prices Are Perfect for You */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 text-center">
              Why These Prices Are Perfect for You
            </h2>
            <ul className="max-w-2xl mx-auto space-y-3 list-disc list-inside">
              {whyPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="text-base sm:text-lg text-gray-900 flex items-start gap-2"
                >
                  {point.text}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}
