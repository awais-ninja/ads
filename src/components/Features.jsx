"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaMobile,
  FaChartLine,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCode className="text-4xl text-red" />,
    title: "Web Development",
    description:
      "Custom websites built with modern technologies and best practices.",
  },
  {
    icon: <FaPalette className="text-4xl text-red" />,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that enhance user experience.",
  },
  {
    icon: <FaMobile className="text-4xl text-red" />,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: <FaChartLine className="text-4xl text-red" />,
    title: "Digital Marketing",
    description:
      "Data-driven strategies to grow your online presence and reach.",
  },
  {
    icon: <FaRocket className="text-4xl text-red" />,
    title: "SEO Optimization",
    description:
      "Improve your search rankings and drive organic traffic to your site.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-red" />,
    title: "Security Solutions",
    description: "Protect your digital assets with advanced security measures.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-navy/5"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-red/5"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-4xl md:text-5xl font-bold font-poppins mb-4 text-navy"
          >
            Our <span className="text-red">Services</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-900 max-w-2xl mx-auto"
          >
            We offer a comprehensive range of digital services to help your
            business thrive in the digital age.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white p-4 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4" aria-label={feature.title}>
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold font-poppins mb-2 text-navy">
                {feature.title}
              </h3>
              <p className="text-base text-gray-800">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
