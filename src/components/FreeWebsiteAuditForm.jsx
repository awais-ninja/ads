"use client";

import { useState } from "react";
import TurnstileWidget from "@/components/TurnstileWidget";

const TURNSTILE_ENABLED =
  process.env.NODE_ENV === "production" &&
  Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function isValidWebsiteUrl(url) {
  const u = url.trim();
  if (!u || u.length < 4) return false;
  if (/^https?:\/\/.+\..+/.test(u)) return true;
  if (/^www\.+.+\..+/.test(u)) return true;
  if (/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(u)) return true;
  return false;
}

export default function FreeWebsiteAuditForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    websiteUrl: "",
    message: "",
  });
  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const name = String(form.name || "").trim();
    const email = String(form.email || "").trim();
    const websiteUrl = String(form.websiteUrl || "").trim();
    const message = String(form.message || "").trim();

    if (name.length < 2) {
      setError("Please enter your full name (at least 2 characters).");
      return;
    }
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!websiteUrl) {
      setError("Please enter your website URL.");
      return;
    }
    if (!isValidWebsiteUrl(websiteUrl)) {
      setError("Please enter a valid website URL (e.g. https://yoursite.com or www.yoursite.com).");
      return;
    }
    if (TURNSTILE_ENABLED && !turnstileToken) {
      setError("Please complete the security check before submitting.");
      return;
    }
    const displayUrl = websiteUrl.trim().startsWith("http") ? websiteUrl.trim() : `https://${websiteUrl.trim()}`;
    const fullMessage =
      message.length >= 10
        ? `Website URL: ${displayUrl}\n\n${message}`
        : `Website URL: ${displayUrl}\n\n(No additional message)`;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: "",
          type: "Free Website Audit",
          message: fullMessage,
          source: "Free Website Audit",
          tags: "Audit Form",
          turnstileToken,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Audit form error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-100 text-green-800 p-6 rounded-xl text-center font-semibold">
        Thank you! We&apos;ll review your website and send your free audit report
        soon.
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red focus:ring-2 focus:ring-red/20 outline-none text-gray-900";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Free website audit form">
      <div>
        <label className="block text-navy font-semibold mb-1.5" htmlFor="audit-name">
          Name *
        </label>
        <input
          id="audit-name"
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className={inputClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-navy font-semibold mb-1.5" htmlFor="audit-email">
          Email *
        </label>
        <input
          id="audit-email"
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label className="block text-navy font-semibold mb-1.5" htmlFor="audit-url">
          Website URL *
        </label>
        <input
          id="audit-url"
          type="url"
          name="websiteUrl"
          required
          value={form.websiteUrl}
          onChange={handleChange}
          className={inputClass}
          placeholder="https://www.yourwebsite.com"
        />
      </div>
      <div>
        <label className="block text-navy font-semibold mb-1.5" htmlFor="audit-message">
          Message <span className="text-gray-500 font-normal">(optional)</span>
        </label>
        <textarea
          id="audit-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          className={inputClass + " resize-none"}
          placeholder="Anything specific you'd like us to look at?"
        />
      </div>
      {TURNSTILE_ENABLED && (
        <TurnstileWidget onVerify={setTurnstileToken} />
      )}
      {error && <p className="text-red-600 font-semibold text-sm">{error}</p>}
      <button
        type="submit"
        className="w-full py-4 bg-red text-white font-bold rounded-xl shadow hover:bg-navy transition-colors text-lg disabled:opacity-60"
        disabled={loading}
        aria-label="Get your free website audit"
      >
        {loading ? "Sending..." : "Get Your Free Website Audit"}
      </button>
    </form>
  );
}
