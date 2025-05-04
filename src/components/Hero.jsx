"use client";

import dynamic from "next/dynamic";
import Link from "@/components/Link";
import { Poppins, Inter } from "next/font/google";

// ✅ Font with fallback
const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// ✅ Load canvas animation only on desktop after paint
const AnimatedBackground = dynamic(() => import("./AnimatedBackground"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-32 pb-24 md:pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center items-center">
        <div
          className="w-full flex flex-col items-center justify-center text-center max-w-3xl"
          data-elementtiming="LCP-target"
        >
          {/* ✅ LCP Target */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold ${poppins.className} mb-6 text-navy leading-tight`}
          >
            Affordable Website Design and
            <span className="text-red"> Digital Solutions</span> for Startups
            and Small Businesses
          </h1>

          <p
            className={`text-lg sm:text-xl ${inter.className} text-gray-900 mb-8`}
          >
            We help businesses grow through innovative digital solutions,
            stunning designs, and powerful web development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:bg-red transition-colors"
              aria-label="Explore our services"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* 👇 Animate below fold after paint */}
      <AnimatedBackground />

      <div
        className="absolute left-0 right-0 bottom-40 flex justify-center animate-bounce-slow"
        aria-label="Scroll Down Indicator"
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-900 text-sm mb-2">Scroll Down</span>
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
