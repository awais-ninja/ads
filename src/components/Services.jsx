"use client";
import { motion } from "framer-motion";
import Link from "@/components/Link";
import { services } from "@/data/servicesData";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-navy mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-900 max-w-3xl mx-auto"
          >
            Comprehensive digital solutions to help your business grow and
            succeed in the digital world.
          </motion.p>
        </div>
        <Link href="/services" aria-label="See all services">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-6 text-red">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-800 mb-6">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-block bg-red text-white font-semibold px-8 py-3 rounded-lg hover:bg-navy transition-colors duration-300"
            aria-label="Schedule a Meeting"
          >
            Schedule a Meeting
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
