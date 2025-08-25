"use client";
import { FaHeadset, FaBolt, FaPiggyBank, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: <FaHeadset className="w-10 h-10" />,
    text: "UK-Based Support",
    desc: "Friendly, local experts ready to help you succeed.",
  },
  {
    icon: <FaBolt className="w-10 h-10" />,
    text: "Fast Turnaround Times",
    desc: "Quick project delivery without sacrificing quality.",
  },
  {
    icon: <FaPiggyBank className="w-10 h-10" />,
    text: "Affordable Pricing",
    desc: "Transparent, competitive rates for every business.",
  },
  {
    icon: <FaMobileAlt className="w-10 h-10" />,
    text: "Mobile-Optimized Designs",
    desc: "Seamless experiences on every device.",
  },
];

const iconVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 300 },
  }),
};

const TrustBar = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-navy">
          Why <span className="text-red">Choose Us?</span>
        </h2>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 relative z-10">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              custom={index}
              variants={iconVariants}
              className="flex flex-col items-center bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl hover:border-blue-400 transition-all duration-300 group gap-4 text-center focus-within:ring-2 focus-within:ring-blue-400"
              role="region"
              aria-label={`${item.text} - ${item.desc}`}
              tabIndex={0}
            >
              <span
                className="text-blue-500 group-hover:animate-bounce flex-shrink-0 mb-4"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <div className="max-w-md">
                <p className="font-semibold text-navy text-base mb-2">
                  {item.text}
                </p>
                <p className="text-base text-gray-800 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Decorative SVG Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        height="40"
        viewBox="0 0 1440 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h1440v20c-480 40-960 40-1440 0V0z" fill="#ffeaea" />
      </svg>
    </section>
  );
};

export default TrustBar;
