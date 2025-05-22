"use client";

import { useEffect, useState } from "react";

export default function CookiesConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookies_consent");
    if (!consent) {
      setTimeout(() => setVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-6 sm:inset-x-0 sm:bottom-8 sm:left-1/2 sm:-translate-x-1/2 max-w-lg mx-auto z-50 bg-white border border-gray-200 shadow-xl rounded-2xl p-5 animate-fade-in">
      <p className="text-sm text-gray-800 text-center">
        We use cookies to improve your experience and analyze traffic. By
        clicking <span className="font-medium">“Accept”</span>, you agree to our
        use of cookies.
      </p>
      <div className="flex justify-center mt-4">
        <button
          onClick={acceptCookies}
          className="bg-navy hover:bg-red text-white px-6 py-2 rounded-full text-sm font-semibold transition-all"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
