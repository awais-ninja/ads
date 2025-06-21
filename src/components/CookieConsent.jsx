"use client";
import { useState, useEffect } from "react";
import { FaCookieBite, FaTimes, FaCheck, FaCog, FaBug } from "react-icons/fa";
import {
  setConsent,
  getConsent,
  testCookies,
  listAllCookies,
} from "@/lib/cookies";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showDebug, setShowDebug] = useState(false);
  const [cookieTestResult, setCookieTestResult] = useState(null);
  const [allCookies, setAllCookies] = useState([]);
  const [consent, setConsentState] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice - use localStorage directly for immediate check
    const savedConsent = localStorage.getItem("cookie-consent");

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

    // Test if cookies are working
    const testResult = testCookies();
    setCookieTestResult(testResult);

    // List all current cookies
    setAllCookies(listAllCookies());
  }, []);

  const applyConsent = (userConsent) => {
    // Always allow necessary cookies
    if (userConsent.analytics) {
      // Enable Google Analytics
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }
    }

    if (userConsent.marketing) {
      // Enable marketing cookies
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          ad_storage: "granted",
        });
      }
    }

    if (userConsent.functional) {
      // Enable functional cookies (like Crisp Chat)
      if (typeof window !== "undefined" && window.$crisp) {
        window.$crisp.push(["safe", true]);
      }
    }

    // Update cookie list
    setTimeout(() => {
      setAllCookies(listAllCookies());
    }, 1000);
  };

  const acceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setConsentState(allConsent);
    localStorage.setItem("cookie-consent", JSON.stringify(allConsent));
    applyConsent(allConsent);
    setShowBanner(false);
  };

  const acceptSelected = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
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
    localStorage.setItem("cookie-consent", JSON.stringify(minimalConsent));
    applyConsent(minimalConsent);
    setShowBanner(false);
  };

  const toggleSetting = (setting) => {
    if (setting === "necessary") return; // Can't disable necessary cookies
    setConsentState((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const runCookieTest = () => {
    const result = testCookies();
    setCookieTestResult(result);
    setAllCookies(listAllCookies());
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto p-4">
        {!showSettings && !showDebug ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <FaCookieBite className="text-navy text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-navy mb-1">We use cookies</h3>
                <p className="text-sm text-gray-600">
                  We use cookies to enhance your browsing experience, analyze
                  site traffic, and personalize content. By clicking "Accept
                  All", you consent to our use of cookies.
                  <a href="/cookie-policy" className="text-red underline ml-1">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <button
                onClick={() => setShowDebug(true)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <FaBug className="text-sm" />
                Debug
              </button>
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
        ) : showDebug ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-navy">Cookie Debug</h3>
              <button
                onClick={() => setShowDebug(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Cookie Test</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Status:{" "}
                  <span
                    className={
                      cookieTestResult ? "text-green-600" : "text-red-600"
                    }
                  >
                    {cookieTestResult ? "Working" : "Not Working"}
                  </span>
                </p>
                <button
                  onClick={runCookieTest}
                  className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Test Again
                </button>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">
                  Current Cookies ({allCookies.length})
                </h4>
                <div className="max-h-32 overflow-y-auto">
                  {allCookies.length > 0 ? (
                    allCookies.map((cookie, index) => (
                      <div key={index} className="text-sm text-gray-600 mb-1">
                        <strong>{cookie.name}:</strong> {cookie.value}
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No cookies found</p>
                  )}
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">
                  Current Consent
                </h4>
                <pre className="text-sm text-gray-600 bg-white p-2 rounded border">
                  {JSON.stringify(consent, null, 2)}
                </pre>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">
                  localStorage Status
                </h4>
                <p className="text-sm text-gray-600">
                  Saved consent:{" "}
                  {localStorage.getItem("cookie-consent") ? "Yes" : "No"}
                </p>
                <p className="text-sm text-gray-600">
                  Raw value: {localStorage.getItem("cookie-consent") || "None"}
                </p>
                <button
                  onClick={() => {
                    localStorage.removeItem("cookie-consent");
                    setShowBanner(true);
                    setShowDebug(false);
                  }}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 mt-2"
                >
                  Reset Consent
                </button>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">
                  Script Status
                </h4>
                <p className="text-sm text-gray-600">
                  gtag available:{" "}
                  {typeof window !== "undefined" && window.gtag ? "Yes" : "No"}
                </p>
                <p className="text-sm text-gray-600">
                  $crisp available:{" "}
                  {typeof window !== "undefined" && window.$crisp
                    ? "Yes"
                    : "No"}
                </p>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setShowDebug(false)}
                className="px-4 py-2 text-sm bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Close
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
