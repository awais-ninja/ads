"use client";

import { useEffect, useState } from "react";

export default function CookiesConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookies_consent");
    if (!consent) {
      setTimeout(() => setVisible(true), 1000); // show after 1s
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md bg-white border border-gray-200 shadow-lg rounded-xl p-4 z-50 animate-fade-in">
      <p className="text-sm text-gray-700 mb-3">
        We use cookies to enhance your browsing experience and analyze site
        traffic. By clicking "Accept", you consent to our use of cookies.
      </p>
      <div className="flex justify-end">
        <button
          onClick={acceptCookies}
          className="bg-navy hover:bg-red text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
