"use client";

import { useEffect, useState } from "react";

export default function CookiesConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookies_consent");

    if (consent === "accepted") {
      if (
        typeof window !== "undefined" &&
        typeof window.initGA === "function"
      ) {
        window.initGA(); // Re-init if already accepted
      }
    } else if (!consent) {
      setTimeout(() => setVisible(true), 500); // show popup after 500ms
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies_consent", "accepted");
    setVisible(false);

    if (typeof window !== "undefined" && typeof window.initGA === "function") {
      window.initGA(); // Fire GA now
    }
  };

  const rejectCookies = () => {
    localStorage.setItem("cookies_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full mx-4 text-center animate-fade-in">
        <h2 className="text-lg font-bold text-navy mb-2">We Use Cookies</h2>
        <p className="text-sm text-gray-800">
          We use cookies to improve your experience and analyze traffic. By
          clicking <strong>“Accept”</strong>, you agree to our use of cookies
          for analytics.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={rejectCookies}
            className="px-5 py-2 rounded-full text-sm font-semibold border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
          >
            Reject
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 rounded-full text-sm font-semibold text-white bg-navy hover:bg-red transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
