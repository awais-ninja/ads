"use client";

import { useEffect, useRef } from "react";

/**
 * Cloudflare Turnstile widget wrapper.
 *
 * Requires:
 *  - NEXT_PUBLIC_TURNSTILE_SITE_KEY env var
 *  - The Turnstile script loaded once globally (see app/layout.jsx)
 *
 * @param {{ onVerify: (token: string) => void, theme?: 'light'|'dark'|'auto', className?: string }} props
 */
export default function TurnstileWidget({ onVerify, theme = "light", className = "" }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onVerifyRef = useRef(onVerify);
  onVerifyRef.current = onVerify;

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    const isProduction = process.env.NODE_ENV === "production";
    if (!siteKey || !isProduction || typeof window === "undefined") return;

    let cancelled = false;
    let pollId = null;

    function render() {
      if (cancelled) return;
      if (!window.turnstile || !containerRef.current) return;
      if (widgetIdRef.current !== null) return;

      try {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme,
          callback: (token) => onVerifyRef.current?.(token),
          "error-callback": () => onVerifyRef.current?.(""),
          "expired-callback": () => onVerifyRef.current?.(""),
          "timeout-callback": () => onVerifyRef.current?.(""),
        });
      } catch {
        // Ignore double-render errors during fast refresh
      }
    }

    if (window.turnstile) {
      render();
    } else {
      pollId = setInterval(() => {
        if (window.turnstile) {
          clearInterval(pollId);
          pollId = null;
          render();
        }
      }, 150);
    }

    return () => {
      cancelled = true;
      if (pollId) clearInterval(pollId);
      if (widgetIdRef.current !== null && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // ignore
        }
        widgetIdRef.current = null;
      }
    };
  }, [theme]);

  if (
    !process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
    process.env.NODE_ENV !== "production"
  ) {
    return null;
  }

  return <div ref={containerRef} className={className} />;
}
