"use client";

import { useEffect, useState } from "react";

export default function CookiesConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookies_consent");
    if (!consent) {
      setTimeout(() => setVisible(true), 500); // slight delay
    } else {
      applyConsent(consent);
    }
  }, []);

  const applyConsent = (value) => {
    if (typeof window.gtag === "function") {
      const isGranted = value === "accepted";

      window.gtag("consent", "update", {
        ad_storage: isGranted ? "granted" : "denied",
        analytics_storage: isGranted ? "granted" : "denied",
        ad_user_data: isGranted ? "granted" : "denied",
        ad_personalization: isGranted ? "granted" : "denied",
      });
    }
  };

  const handleConsent = (value) => {
    localStorage.setItem("cookies_consent", value);
    applyConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white w-full max-w-md mx-auto rounded-2xl shadow-xl p-6 text-center">
        <h2 className="text-lg font-semibold text-navy mb-2">
          We Value Your Privacy
        </h2>
        <p className="text-sm text-gray-700 mb-6">
          We use cookies to improve your experience and analyze traffic. Click{" "}
          <strong>“Accept”</strong> to allow cookies or{" "}
          <strong>“Reject”</strong> to disable them.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleConsent("rejected")}
            className="px-5 py-2 rounded-full text-sm font-semibold border border-gray-300 hover:bg-gray-100 transition"
          >
            Reject
          </button>
          <button
            onClick={() => handleConsent("accepted")}
            className="px-5 py-2 rounded-full text-sm font-semibold bg-navy text-white hover:bg-red transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
