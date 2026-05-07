"use client";

import { useState, useEffect } from "react";
import { FaCookieBite, FaTimes, FaCheck, FaCog } from "react-icons/fa";
import Link from "@/components/Link";
import {
  getConsent,
  setConsent,
  DEFAULT_CONSENT,
  clearNonEssentialCookies,
} from "@/lib/consent";

const CATEGORIES = [
  {
    id: "necessary",
    title: "Necessary Cookies",
    description:
      "Required for the website to function. They enable basic features like page navigation and access to secure areas. These cannot be disabled.",
    required: true,
  },
  {
    id: "analytics",
    title: "Analytics Cookies",
    description:
      "Help us understand how visitors use our site (e.g. Google Analytics). All data is aggregated and used only to improve the website.",
  },
  {
    id: "marketing",
    title: "Marketing Cookies",
    description:
      "Used to deliver relevant ads and measure ad campaigns (e.g. Google Ads, Facebook Pixel). They may be set by us or our advertising partners.",
  },
  {
    id: "preference",
    title: "Preference Cookies",
    description:
      "Remember your choices (e.g. language, region) and enable features like live chat so we can assist you better.",
  },
];

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consent, setConsentState] = useState(DEFAULT_CONSENT);

  useEffect(() => {
    const saved = getConsent();
    if (saved === null) {
      setShowBanner(true);
      setConsentState(DEFAULT_CONSENT);
    } else {
      setConsentState({
        necessary: true,
        analytics: !!saved.analytics,
        marketing: !!saved.marketing,
        preference: !!saved.preference,
      });
    }
  }, []);

  useEffect(() => {
    const open = () => {
      setShowBanner(true);
      setShowPreferences(true);
    };
    window.addEventListener("openCookieSettings", open);
    return () => window.removeEventListener("openCookieSettings", open);
  }, []);

  useEffect(() => {
    const checkHash = () => {
      if (typeof window === "undefined") return;
      if (window.location.hash === "#cookie-settings") {
        setShowBanner(true);
        setShowPreferences(true);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const applyAndClose = (newConsent) => {
    setConsent(newConsent);
    setShowBanner(false);
    setShowPreferences(false);
    if (
      !newConsent.analytics &&
      !newConsent.marketing &&
      !newConsent.preference
    ) {
      clearNonEssentialCookies();
    }
  };

  const acceptAll = () => {
    const all = {
      ...DEFAULT_CONSENT,
      analytics: true,
      marketing: true,
      preference: true,
    };
    setConsentState(all);
    applyAndClose(all);
  };

  const rejectNonEssential = () => {
    const minimal = { ...DEFAULT_CONSENT };
    setConsentState(minimal);
    applyAndClose(minimal);
  };

  const savePreferences = () => {
    applyAndClose(consent);
  };

  const toggle = (key) => {
    if (key === "necessary") return;
    setConsentState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex gap-3 flex-1">
              <FaCookieBite className="text-navy text-xl mt-0.5 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-navy mb-1">
                  We use cookies
                </h2>
                <p className="text-sm text-gray-600">
                  We use cookies and similar technologies to improve your
                  experience, analyze traffic, and for marketing where you
                  agree. You can choose which categories to allow.{" "}
                  <Link href="/cookie-policy" className="text-red underline">
                    Cookie Policy
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <FaCog className="text-sm" />
                Manage Preferences
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="px-4 py-2.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-4 py-2.5 text-sm bg-navy text-white rounded-lg hover:bg-red transition-colors flex items-center gap-2"
              >
                <FaCheck className="text-sm" />
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-navy">Cookie Preferences</h2>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="p-1 text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Choose which categories of cookies you allow. Necessary cookies
              are always active.
            </p>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="flex items-start justify-between gap-4 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="min-w-0">
                    <h3 className="font-medium text-gray-900">{cat.title}</h3>
                    <p className="text-sm text-gray-600 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                  <label className="flex items-center gap-2 flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={!!consent[cat.id]}
                      disabled={cat.required}
                      onChange={() => toggle(cat.id)}
                      className="w-4 h-4 text-navy border-gray-300 rounded focus:ring-navy"
                    />
                    <span className="text-sm text-gray-700">
                      {cat.required ? "Always on" : consent[cat.id] ? "On" : "Off"}
                    </span>
                  </label>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                type="button"
                onClick={rejectNonEssential}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={savePreferences}
                className="px-4 py-2 text-sm bg-navy text-white rounded-lg hover:bg-red"
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
