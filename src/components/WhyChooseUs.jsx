"use client";
import { motion } from "framer-motion";
import { benefits } from "@/data/benefits";
import Link from "@/components/Link";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-navy mb-4"
          >
            Why Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We combine expertise, innovation, and dedication to deliver
            exceptional results for our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden focus-within:ring-2 focus-within:ring-blue-400"
              role="region"
              aria-label={`${benefit.title} - ${benefit.description}`}
              tabIndex={0}
            >
              <div
                className="absolute top-4 right-4 text-6xl opacity-5"
                aria-hidden="true"
              >
                {benefit.bgIcon}
              </div>
              <div className="mb-6 text-red" aria-hidden="true">
                <benefit.icon className="h-10 w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-navy mb-3">
                {benefit.title}
              </h3>
              <p className="text-base text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-block bg-red text-white font-semibold px-8 py-3 rounded-lg hover:bg-navy transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2"
            aria-label="Start your digital transformation journey with Awais Digital Services"
          >
            Start your digital transformation journey with Awais Digital
            Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
