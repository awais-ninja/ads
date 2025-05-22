"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function MoveToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="hidden md:block fixed bottom-4 right-24 z-40 p-3 bg-red text-white rounded-full shadow-lg hover:bg-navy transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 cursor-pointer"
          aria-label="Move to top"
        >
          <ArrowUp className="w-9 h-9" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
