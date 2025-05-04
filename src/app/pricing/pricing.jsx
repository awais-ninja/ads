"use client";

import Pricing from "@/components/Pricing";
import PricingCalculator from "@/components/PricingCalculator";
import FinalCTA from "@/components/FinalCTA";

import { motion } from "framer-motion";
import TrustBar from "@/components/TrustBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import { MdOutlinePriceCheck } from "react-icons/md";

function PricingPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="relative py-16 md:py-28 bg-gradient-to-br from-blue-50 via-red/10 to-navy/5 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-red/20 via-navy/10 to-blue-400/10 z-0 animate-spin-slow" />
        <div className="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-navy/10 via-red/10 to-blue-600/10 z-0 animate-spin-slow-reverse" />
        <div className="relative z-10 flex flex-col items-center gap-4 px-4 pt-10 md:pt-0">
          <span className="inline-flex items-center justify-center bg-white rounded-full shadow-lg p-6  border-4 border-red/20 mb-2 md:mb-4">
            <MdOutlinePriceCheck className="text-red text-5xl md:text-7xl " />
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-navy mb-2 md:px-56 leading-tight">
            Simple, Transparent Pricing for{" "}
            <span className="text-red">
              Affordable Digital Growth in the UK
            </span>
          </h1>
          <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto">
            No hidden fees. Affordable website, branding, SEO, and marketing
            services designed to help UK businesses and startups grow online.
          </p>
        </div>
      </section>
      <PricingCalculator />
      <section id="pricing-tiers">
        <Pricing />
      </section>
      <TrustBar />
      <WhyChooseUs />
      <FinalCTA />
      <FAQ />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center bg-navy/5 rounded-xl p-8"
        role="region"
        aria-label="Final call to action section"
      >
        <h2
          className="text-2xl font-bold text-navy mb-4"
          style={{ color: "#1a237e" }}
        >
          Ready to Start Your Project?
        </h2>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-red text-white rounded-lg font-semibold hover:bg-red/90 transition-colors focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2"
          aria-label="Start your project with Awais Digital Services"
        >
          Get Started Today
        </Link>
      </motion.div>
    </main>
  );
}
export default PricingPage;
