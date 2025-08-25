"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import Link from "@/components/Link";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Every project is different, but most websites are completed within 2 to 4 weeks depending on the size and complexity. We always provide a clear timeline before starting.",
  },
  {
    q: "What do I need to get started?",
    a: "We'll need a short brief about your business, your goals, any text or images you want included, and examples of websites you like. Don't worry — we'll guide you through the whole process.",
  },
  {
    q: "Do you offer website redesign services?",
    a: "Yes. If you already have a website that needs a fresh look or better performance, we offer complete website redesign services to upgrade your online presence.",
  },
  {
    q: "Is the website mobile-friendly?",
    a: "Absolutely. Every website we build is fully responsive and optimized for all screen sizes, including smartphones and tablets.",
  },
  {
    q: "Do you provide domain name and hosting?",
    a: "We can assist you in purchasing a domain and setting up reliable hosting. If you already have them, we'll work with your existing setup.",
  },
  {
    q: "Will my website be SEO optimized?",
    a: "Yes. All websites we deliver include basic on-page SEO setup such as meta titles, descriptions, mobile optimization, and clean URL structure to help you rank better on search engines.",
  },
  {
    q: "What if I need updates to my website later?",
    a: "We offer ongoing Website Care Plans, so you can keep your site updated, secure, and running smoothly. You can also request updates on a one-off basis if preferred.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. We offer flexible payment options for larger projects, usually splitting the payment into two or three milestones for easier budgeting.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with startups, local businesses, restaurants, fitness brands, coaches, e-commerce stores, service providers, and more. No matter your industry, we tailor our services to fit your needs.",
  },
  {
    q: "How do I get started?",
    a: (
      <span>
        Simply contact us through
        <Link
          href="https://wa.me/447443098117"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-red mx-1"
        >
          WhatsApp
        </Link>
        (
        <Link
          href="tel:+447443098117"
          className="underline hover:text-red"
          aria-label="Call us at +44 7443 098117"
        >
          +44 7443 098117
        </Link>
        ),
        <Link
          href="mailto:info@awaisdigitalservices.co.uk"
          className="underline hover:text-red mx-1"
        >
          email
        </Link>
        , or our Contact Form. We'll schedule a free consultation to discuss
        your project and provide a custom quote.
      </span>
    ),
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (idx) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-pink-50 overflow-hidden">
      {/* Decorative SVG or gradient background can be added here if desired */}
      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        <div className="flex flex-col items-center mb-10">
          <span className="text-4xl text-red mb-2">
            <FaQuestionCircle />
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-2 text-navy">
            Frequently Asked <span className="text-red">Questions</span>
          </h2>
          <p className="text-gray-800 text-center max-w-xl">
            Everything you need to know about working with Awais Digital
            Services. If you have more questions, just get in touch!
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl shadow-lg bg-white border border-gray-100 overflow-hidden group"
            >
              <button
                className="w-full flex items-center gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red transition relative"
                onClick={() => toggle(idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-panel-${idx}`}
                aria-label={`Toggle FAQ: ${item.q}`}
              >
                {/* Accent bar */}
                <span className="w-1.5 h-8 rounded-full bg-red/80 mr-2 group-hover:bg-navy transition-all duration-300" />
                <span className="font-semibold text-lg text-navy flex-1 group-hover:text-red transition-colors duration-300">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: open === idx ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-red text-xl"
                >
                  <FaChevronDown />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.div
                    id={`faq-panel-${idx}`}
                    key="content"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-4 sm:px-8 pb-6 pt-1 bg-blue-50/60 text-gray-900 text-base overflow-hidden"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
