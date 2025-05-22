"use client";

import dynamic from "next/dynamic";
import Link from "@/components/Link";
import { Poppins, Inter } from "next/font/google";

// Fonts
const poppins = Poppins({ subsets: ["latin"], weight: "700", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: "400", display: "swap" });

// Lazy-load background animation (disabled on SSR)
const AnimatedBackground = dynamic(() => import("./AnimatedBackground"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-x-hidden bg-white pt-28 pb-32 flex items-center justify-center text-center"
      role="region"
      aria-label="Hero Section"
    >
      <div className="container max-w-5xl mx-auto px-4 z-10 flex flex-col items-center justify-center">
        {/* Heading */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-navy ${poppins.className}`}
        >
          Affordable Website Design and
          <span className="text-red"> Digital Solutions</span> for Startups and
          Small Businesses
        </h1>

        {/* Subheading */}
        <p
          className={`text-base sm:text-lg md:text-xl text-gray-800 mb-10 ${inter.className}`}
        >
          We help businesses grow through innovative digital solutions, stunning
          designs, and powerful web development.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-24">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-semibold rounded-full shadow hover:bg-red transition-colors text-base sm:text-lg"
            aria-label="Explore our services"
          >
            Explore Our Services
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-navy border border-navy font-semibold rounded-full hover:text-white hover:bg-navy transition-colors text-base sm:text-lg"
            aria-label="Contact our team"
          >
            Get a Free Consultation
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center animate-bounce-slow">
          <span className="text-black text-sm mb-2">Scroll Down</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="#0B1120"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Animated background element */}
      <AnimatedBackground />

      {/* Scroll animation style */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.7;
          }
          50% {
            transform: translateY(12px);
            opacity: 1;
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.2s infinite;
        }
      `}</style>
    </section>
  );
}
