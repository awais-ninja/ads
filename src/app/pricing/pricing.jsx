"use client";

import Pricing from "@/components/Pricing";
import PricingCalculator from "@/components/PricingCalculator";

import TrustBar from "@/components/TrustBar";
import WhyChooseUs from "@/components/WhyChooseUs";

import Link from "next/link";

import { motion } from "framer-motion";
import Image from "next/image";
export default function PricingPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 gap-6">
            <span className="inline-block text-sm font-semibold text-red bg-red/10 px-4 py-2 rounded-full">
              Affordable Prices
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">
              Simple, <span className="text-red">Transparent Pricing</span> for
              Affordable Digital Growth in the UK
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              No hidden fees. Affordable website, branding, SEO, and marketing
              services designed to{" "}
              <span className="text-red">help UK businesses and startups</span>{" "}
              grow online.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link
                href="https://wa.me/447443098117"
                aria-label="Message Awais Digital Services on WhatsApp"
                target="_blank"
                className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-navy hover:scale-105 transition transform duration-300"
              >
                Message on WhatsApp
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <Image
              src="/images/pricing-image.png"
              alt="Digital Services Illustration"
              width={500}
              height={500}
              className="hidden md:block w-full max-w-md md:max-w-lg h-auto object-contain transition-transform duration-500 hover:scale-105 rounded-2xl"
              priority
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce-slow text-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="text-black mx-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5v14M12 19l-7-7M12 19l7-7"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-sm text-black mt-2">Scroll down</p>
        </div>

        {/* Custom bounce animation */}
        <style jsx>{`
          @keyframes bounce-slow {
            0%,
            100% {
              transform: translateY(0);
              opacity: 0.7;
            }
            50% {
              transform: translateY(10px);
              opacity: 1;
            }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2.5s infinite;
          }
        `}</style>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing-tiers">
        <Pricing />
      </section>
      {/* Pricing Calculator */}
      <PricingCalculator />
      {/* Trust + Why Choose + CTA */}
      <TrustBar />
      <WhyChooseUs />
    </main>
  );
}
