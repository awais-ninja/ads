"use client";
import { useState, useEffect } from "react";
import { FaCookieBite, FaTimes, FaCheck, FaCog } from "react-icons/fa";
import {
  testCookies,
  listAllCookies,
  setCookie,
  setAnalyticsCookie,
  setMarketingCookie,
  setFunctionalCookie,
  clearConsentCookies,
  initializeNecessaryCookies,
} from "@/lib/cookies";
import Link from "./Link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsentState] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Initialize necessary cookies first
    initializeNecessaryCookies();

    // All localStorage and window usage must be inside useEffect
    const savedConsent =
      typeof window !== "undefined"
        ? localStorage.getItem("cookie-consent")
        : null;

    if (!savedConsent) {
      setShowBanner(true);
    } else {
      try {
        const parsedConsent = JSON.parse(savedConsent);
        setConsentState(parsedConsent);
        // Apply saved consent
        applyConsent(parsedConsent);
      } catch (error) {
        console.error("Error parsing saved consent:", error);
        setShowBanner(true);
      }
    }
  }, []);

  function applyConsent(userConsent) {
    // Always allow necessary cookies
    setCookie("awais_necessary_visited", "1", 365);

    if (userConsent.analytics) {
      // Enable Google Analytics
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        });
        // Initialize Google Analytics only when consent is granted
        window.gtag("config", "G-X79SQJVGJ5");
      }
      // Set an example analytics cookie
      setAnalyticsCookie("example", "1", 365);
    } else {
      // Disable Google Analytics if consent is withdrawn
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "denied",
        });
      }
      // Clear Google Analytics cookies when consent is withdrawn
      clearConsentCookies();
    }

    if (userConsent.marketing) {
      // Enable marketing cookies
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          ad_storage: "granted",
        });
      }
      // Set an example marketing cookie
      setMarketingCookie("example", "1", 365);
    } else {
      // Disable marketing cookies if consent is withdrawn
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          ad_storage: "denied",
        });
      }
    }

    if (userConsent.functional) {
      // Enable functional cookies (like Crisp Chat)
      if (typeof window !== "undefined" && window.$crisp) {
        window.$crisp.push(["safe", true]);
      }
      // Set an example functional cookie
      setFunctionalCookie("example", "1", 365);
    } else {
      // Disable functional cookies if consent is withdrawn
      if (typeof window !== "undefined" && window.$crisp) {
        window.$crisp.push(["safe", false]);
      }
    }
  }

  const updateConsent = (consent) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookie-consent", JSON.stringify(consent));
    }
  };

  const acceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setConsentState(allConsent);
    updateConsent(allConsent);
    applyConsent(allConsent);
    setShowBanner(false);
  };

  const acceptSelected = () => {
    updateConsent(consent);
    applyConsent(consent);
    setShowBanner(false);
    setShowSettings(false);
  };

  const declineAll = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setConsentState(minimalConsent);
    updateConsent(minimalConsent);
    applyConsent(minimalConsent);
    // Clear all consent-based cookies when declining
    clearConsentCookies();
    setShowBanner(false);
  };

  const toggleSetting = (setting) => {
    if (setting === "necessary") return; // Can't disable necessary cookies
    setConsentState((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto p-4">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <FaCookieBite className="text-navy text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-navy mb-1">We use cookies</h3>
                <p className="text-sm text-gray-600">
                  We use cookies to enhance your browsing experience, analyze
                  site traffic, and personalize content. By clicking "Accept
                  All", you consent to our use of cookies.
                  <Link
                    href="/cookie-policy"
                    className="text-red underline ml-1"
                  >
                    Read Cookie Policy
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <FaCog className="text-sm" />
                Customize
              </button>
              <button
                onClick={declineAll}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Decline All
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm bg-navy text-white rounded-lg hover:bg-red transition-colors flex items-center gap-2"
              >
                <FaCheck className="text-sm" />
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-navy">Cookie Settings</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">
                    Necessary Cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Required for the website to function properly
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={consent.necessary}
                    disabled
                    className="w-4 h-4 text-navy bg-gray-100 border-gray-300 rounded focus:ring-navy"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">
                    Analytics Cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Help us understand how visitors interact with our website
                    (Google Analytics)
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={() => toggleSetting("analytics")}
                    className="w-4 h-4 text-navy bg-gray-100 border-gray-300 rounded focus:ring-navy"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">
                    Marketing Cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Used to deliver personalized advertisements
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={() => toggleSetting("marketing")}
                    className="w-4 h-4 text-navy bg-gray-100 border-gray-300 rounded focus:ring-navy"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">
                    Functional Cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Enable enhanced functionality like live chat
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={consent.functional}
                    onChange={() => toggleSetting("functional")}
                    className="w-4 h-4 text-navy bg-gray-100 border-gray-300 rounded focus:ring-navy"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={declineAll}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Decline All
              </button>
              <button
                onClick={acceptSelected}
                className="px-4 py-2 text-sm bg-navy text-white rounded-lg hover:bg-red transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
