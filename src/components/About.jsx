"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "@/components/Link";
import { FaCheckCircle } from "react-icons/fa";

const benefits = [
  "Custom solutions tailored to your business needs",
  "Modern, responsive designs that work on all devices",
  "Fast loading times and optimal performance",
  "SEO-friendly code to improve search rankings",
  "Ongoing support and maintenance",
  "Competitive pricing with transparent costs",
];

export default function About() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-red/10 to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-red/10 to-transparent"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-4xl md:text-5xl font-bold font-poppins mb-6"
            >
              Why Choose <span className="text-red">Us</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-100 mb-8"
            >
              We're a team of passionate developers, designers, and digital
              marketers dedicated to helping businesses succeed online. With
              years of experience and a commitment to excellence, we deliver
              results that exceed expectations.
            </motion.p>
            <motion.div variants={itemVariants} className="mb-8">
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <FaCheckCircle className="text-red mt-1 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-red text-white rounded-lg font-medium hover:bg-red/80 transition-colors"
                showArrow
                aria-label="Get in Touch with Awais Digital Services"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-1 rounded-2xl shadow-2xl">
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-200">
                {/* Placeholder for image or video */}
                <div className="w-full h-full flex items-center justify-center bg-navy/5">
                  <span
                    className="text-navy text-lg font-medium"
                    aria-label="Project Preview"
                  >
                    Your Project Preview
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-10 -right-10 w-20 h-20 bg-red rounded-full"
              animate={{
                y: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-20 h-20 bg-red rounded-full"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
