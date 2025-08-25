"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserCircle,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";

const CARDS_ON_DESKTOP = 2;
const CARDS_ON_MOBILE = 1;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);
  const autoplayRef = useRef();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsToShow = windowWidth < 768 ? CARDS_ON_MOBILE : CARDS_ON_DESKTOP;
  const totalSlides = Math.ceil(testimonials.length / cardsToShow);

  // Autoplay
  useEffect(() => {
    autoplayRef.current && clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(autoplayRef.current);
  }, [current, totalSlides]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  const next = () => setCurrent((prev) => (prev + 1) % totalSlides);

  // Get testimonials for current slide
  const startIdx = current * cardsToShow;
  const visibleTestimonials = testimonials.slice(
    startIdx,
    startIdx + cardsToShow
  );

  // If at the end, wrap around for smoothness
  if (visibleTestimonials.length < cardsToShow) {
    visibleTestimonials.push(
      ...testimonials.slice(0, cardsToShow - visibleTestimonials.length)
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-navy mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-900 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </motion.p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1  md:grid-cols-2 gap-8"
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-4 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 focus-within:ring-2 focus-within:ring-blue-400"
                    role="region"
                    aria-label={`Testimonial from ${testimonial.name}, ${testimonial.role}`}
                    tabIndex={0}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-red" aria-hidden="true">
                        <FaQuoteLeft className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-gray-800 mb-6">
                          {testimonial.quote}
                        </p>
                        <div className="flex items-center gap-3">
                          <FaUserCircle
                            className="w-10 h-10 text-gray-400"
                            aria-hidden="true"
                          />
                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-navy mb-1">
                              {testimonial.name}
                            </h3>
                            <p className="text-base text-gray-700 mb-2">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-4 h-4 text-navy" aria-hidden="true" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <FaChevronRight
                className="w-4 h-4 text-navy"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
