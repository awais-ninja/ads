"use client";

import { useEffect } from "react";
import { initializeNecessaryCookies, clearConsentCookies } from "@/lib/cookies";

export default function ClientSideEffects() {
  useEffect(() => {
    // Initialize necessary cookies
    initializeNecessaryCookies();

    // Clear any existing problematic cookies on first load
    const hasClearedCookies = localStorage.getItem("awais_cookies_cleared");
    if (!hasClearedCookies) {
      // Clear any old consent-based cookies that might be causing issues
      clearConsentCookies();
      localStorage.setItem("awais_cookies_cleared", "true");
    }

    // Check if there are any Google Analytics cookies without consent
    const savedConsent = localStorage.getItem("cookie-consent");
    if (savedConsent) {
      try {
        const consent = JSON.parse(savedConsent);
        if (!consent.analytics) {
          // Clear Google Analytics cookies if analytics consent is not granted
          clearConsentCookies();
        }
      } catch (error) {
        console.error("Error parsing saved consent:", error);
        clearConsentCookies();
      }
    } else {
      // No consent saved, clear any existing analytics cookies
      clearConsentCookies();
    }
  }, []);

  return null;
}
