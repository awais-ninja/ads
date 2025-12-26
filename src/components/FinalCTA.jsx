"use client";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"
      />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-100 mb-6"
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-200 mb-8"
          >
            Let's discuss how we can help you achieve your digital goals.
            Contact us today for a free consultation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red text-white font-semibold px-8 py-3 rounded-lg hover:bg-red/80 transition-colors duration-300"
              aria-label="Chat on WhatsApp with Awais Digital Services"
            >
              <FaWhatsapp className="w-5 h-5" />
              Chat on WhatsApp
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300"
              aria-label="View All Services"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
