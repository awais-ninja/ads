"use client";

import { useEffect, useRef } from "react";
import { getConsent } from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CRISP_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
const isProduction = process.env.NODE_ENV === "production";

function loadGoogleTag(consent) {
  if (!GA_ID || typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  // Consent Mode v2: default denied
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });
  // Update according to user consent
  gtag("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
  script.onload = () => {
    gtag("config", GA_ID, { anonymize_ip: true });
  };
}

function loadCrisp() {
  if (!CRISP_ID || typeof window === "undefined") return;
  if (window.$crisp) return;
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = CRISP_ID;
  window.$crisp.push(["safe", true]);
  const s = document.createElement("script");
  s.src = "https://client.crisp.chat/l.js";
  s.async = 1;
  document.head.appendChild(s);
}

function loadFacebookPixel() {
  if (!FB_PIXEL_ID || typeof window === "undefined") return;
  if (window.fbq) return;
  (function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );
  window.fbq("consent", "grant");
  window.fbq("init", FB_PIXEL_ID);
  window.fbq("track", "PageView");
}

export default function TrackingScripts() {
  const applied = useRef(false);

  useEffect(() => {
    if (!isProduction) return;
    const consent = getConsent();
    if (!consent || applied.current) return;
    applied.current = true;

    if (consent.analytics) {
      loadGoogleTag(consent);
    }
    if (consent.preference && CRISP_ID) {
      loadCrisp();
    }
    if (consent.marketing && FB_PIXEL_ID) {
      loadFacebookPixel();
    }
  }, []);

  useEffect(() => {
    if (!isProduction) return;
    const onUpdate = (e) => {
      const consent = e.detail;
      if (!consent) return;
      applied.current = true;
      if (consent.analytics && GA_ID && !window.gtag) {
        loadGoogleTag(consent);
      }
      if (consent.analytics && window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
          ad_storage: consent.marketing ? "granted" : "denied",
          ad_user_data: consent.marketing ? "granted" : "denied",
          ad_personalization: consent.marketing ? "granted" : "denied",
        });
      }
      if (consent.preference && CRISP_ID && !window.$crisp) {
        loadCrisp();
      }
      if (consent.marketing && FB_PIXEL_ID && !window.fbq) {
        loadFacebookPixel();
      }
    };
    window.addEventListener("consentUpdated", onUpdate);
    return () => window.removeEventListener("consentUpdated", onUpdate);
  }, []);

  return null;
}
