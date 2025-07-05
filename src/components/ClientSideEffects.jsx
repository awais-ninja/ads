"use client";
import { useEffect } from "react";

export default function ClientSideEffects() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-X79SQJVGJ5", {
        analytics_storage: "denied",
        ad_storage: "denied",
        wait_for_update: 500,
      });

      // Check for existing consent on page load with delay
      setTimeout(() => {
        const gtagConsent = localStorage.getItem("cookie-consent");
        if (gtagConsent) {
          try {
            const consent = JSON.parse(gtagConsent);
            if (consent.analytics) {
              gtag("consent", "update", {
                analytics_storage: "granted",
              });
            }
            if (consent.marketing) {
              gtag("consent", "update", {
                ad_storage: "granted",
              });
            }
          } catch (error) {
            console.error("Error parsing saved consent for GTM:", error);
          }
        }
      }, 1000);
    }
    if (typeof document !== "undefined") {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    }
    if (typeof window !== "undefined") {
      const crispConsent = localStorage.getItem("cookie-consent");
      if (crispConsent) {
        try {
          const consent = JSON.parse(crispConsent);
          if (consent.functional) {
            if (typeof window.$crisp !== "undefined") {
              window.$crisp.push(["safe", true]);
            }
          }
        } catch (error) {
          console.error("Error parsing saved consent for Crisp:", error);
        }
      }
    }
  }, []);
  return null;
}
