"use client";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaStore,
  FaUtensils,
  FaDumbbell,
  FaUserTie,
  FaHandScissors,
  FaCamera,
  FaGavel,
  FaTools,
  FaHome,
  FaCar,
  FaBroom,
  FaHeart,
  FaChalkboardTeacher,
  FaShoppingBag,
  FaHandsHelping,
} from "react-icons/fa";

const industries = [
  { icon: <FaRocket />, label: "Startups & Entrepreneurs" },
  { icon: <FaStore />, label: "Local Shops & Service Providers" },
  { icon: <FaUtensils />, label: "Restaurants, Cafés & Food Businesses" },
  { icon: <FaDumbbell />, label: "Fitness Studios, Trainers & Gyms" },
  { icon: <FaUserTie />, label: "Business & Life Coaches, Mentors" },
  {
    icon: <FaHandScissors />,
    label: "Beauty Salons, Barbershops, Health Clinics",
  },
  { icon: <FaCamera />, label: "Freelancers, Photographers, Designers" },
  { icon: <FaGavel />, label: "Accountants, Law Firms, Financial Advisors" },
  { icon: <FaTools />, label: "Construction, Builders, Renovators" },
  { icon: <FaHome />, label: "Real Estate Agents, Property Managers" },
  { icon: <FaCar />, label: "Auto Repair Shops, Car Dealerships" },
  { icon: <FaBroom />, label: "Cleaning & Maintenance Companies" },
  { icon: <FaHeart />, label: "Wedding Planners, Event Managers" },
  {
    icon: <FaChalkboardTeacher />,
    label: "Educational Institutes, Online Tutors",
  },
  { icon: <FaShoppingBag />, label: "E-commerce Brands, Online Retailers" },
  { icon: <FaHandsHelping />, label: "Nonprofits, Community Orgs, Charities" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.6, type: "spring" },
  }),
};

export default function WhoWeWorkWith() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-pink-50 overflow-hidden">
      {/* Animated SVG Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.svg
          className="absolute -top-20 -left-20 w-96 h-96"
          viewBox="0 0 400 400"
          fill="none"
          animate={{ rotate: [0, 360, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="200" cy="200" r="180" fill="#FF3B3010" />
        </motion.svg>
        <motion.svg
          className="absolute bottom-0 right-0 w-80 h-80"
          viewBox="0 0 320 320"
          fill="none"
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            x="40"
            y="40"
            width="240"
            height="240"
            rx="120"
            fill="#0B112015"
          />
        </motion.svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-4 text-navy">
            Who <span className="text-red">We Work With</span>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto mb-4">
            At Awais Digital Services (ADS), we provide professional website
            design, branding, and email marketing services tailored for small
            businesses, startups, and entrepreneurs across the UK.
          </p>
          <p className="text-base text-black/60 max-w-2xl mx-auto">
            No matter your industry, ADS delivers affordable, customized
            websites and digital marketing solutions that help you build trust,
            attract more clients, and grow your business online.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 mt-10">
          {industries.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={cardVariants}
              className="flex flex-col items-center text-center bg-white/90 rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-blue-400"
              tabIndex={0}
              aria-label={item.label}
              role="region"
            >
              <span
                className="mb-3 text-3xl text-red drop-shadow-lg"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span
                className="font-semibold text-navy text-base mb-1"
                style={{ color: "#1a237e" }}
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
