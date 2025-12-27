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
    tagline: "For New UK Businesses & Local Services",
    icon: <FaSeedling className="text-green-500 text-3xl" />,
    features: [
      "Professionally designed 3-page website (Home, Services, Contact)",
      "UK local SEO setup (titles, meta descriptions, structure)",
      "Mobile-first, fast-loading design",
      "Contact & enquiry form integration",
      "WhatsApp click-to-chat integration",
      "Foundational on-page SEO optimisation",
      "1 revision round",
    ],
    description:
      "A clean, professional website built to establish trust and rank locally in the UK. Ideal for startups, sole traders, and service businesses launching their online presence.",
    cta: "Build My Website",
    waMsg: "Hi, I'm interested in the Starter Website Package.",
    accent: "border-green-400 shadow-green-100",
    badge: "Limited Time Launch Offer",
  },
  {
    name: "Business Growth Package",
    price: "£299",
    originalPrice: "£500",
    tagline: "For Growing UK Businesses",
    icon: <FaRocket className="text-red text-3xl" />,
    features: [
      "5–7 page fully custom website built for conversions",
      "UK SEO structure & keyword optimisation",
      "Dedicated lead generation landing page",
      "Professional branding kit (logo, colours, typography)",
      "Email capture & automated welcome setup",
      "Analytics & performance tracking setup",
      "2 revision rounds",
    ],
    description:
      "A growth-focused website designed to generate enquiries, support marketing campaigns, and scale with your business. Built for UK search visibility and lead conversion.",
    cta: "Grow My Business",
    waMsg: "Hi, I'm interested in the Business Growth Package.",
    accent: "border-red shadow-red-100 scale-105 z-10",
    highlight: true,
    badge: "Launch Discount Available",
  },
  {
    name: "Full Digital Launch Package",
    price: "£999",
    originalPrice: "£1400",
    tagline: "For Established Brands & Serious Growth",
    icon: <FaCrown className="text-yellow-400 text-3xl" />,
    features: [
      "Full corporate website or UK e-commerce store (8+ pages)",
      "Advanced technical & on-page SEO setup",
      "Complete brand identity system",
      "Email marketing system configuration",
      "Conversion tracking & optimisation setup",
      "3 months website care (updates, backups, fixes)",
      "Priority support & 3 revision rounds",
    ],
    description:
      "A complete digital foundation for businesses that want authority, scalability, and long-term growth. Built to compete at a national level in the UK market.",
    cta: "Launch My Brand",
    waMsg: "Hi, I'm interested in the Full Digital Launch Package.",
    accent: "border-yellow-400 shadow-yellow-100",
    badge: "Early Access Pricing",
  },
];

const addons = [
  {
    name: "Additional Website Pages",
    price: "+£50 per page",
    desc: "Add more services, locations, or content pages.",
  },
  {
    name: "Advanced SEO Audit & Optimisation",
    price: "+£100",
    desc: "Technical, on-page, and content SEO improvements for UK rankings.",
  },
  {
    name: "Monthly Website Care Plan",
    price: "£50/month*",
    desc: "Ongoing updates, security, backups, and performance monitoring.",
  },
];

const whyPoints = [
  {
    icon: <FaCheckCircle className="text-green-500" />,
    text: "✅ Clear pricing that attracts serious UK business owners.",
  },
  {
    icon: <FaCheckCircle className="text-green-500" />,
    text: "✅ Professional positioning that builds trust with customers.",
  },
  {
    icon: <FaCheckCircle className="text-green-500" />,
    text: "✅ Flexible enough for genuine businesses with growth plans.",
  },
  {
    icon: <FaCheckCircle className="text-green-500" />,
    text: "✅ Significantly more affordable than large UK agencies charging £2,000–£4,000.",
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
                Contact us now
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
