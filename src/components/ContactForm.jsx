"use client";
import { useState } from "react";
import Link from "@/components/Link";
import TurnstileWidget from "@/components/TurnstileWidget";

const TURNSTILE_ENABLED =
  process.env.NODE_ENV === "production" &&
  Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

// Validation helpers
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s+\-()]{10,20}$/;
const NAME_MIN = 2;
const NAME_MAX = 100;
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 2000;

function validateForm(form) {
  const name = String(form.name || "").trim();
  const email = String(form.email || "").trim();
  const phone = String(form.phone || "").trim();
  const message = String(form.message || "").trim();

  if (name.length < NAME_MIN) return "Please enter your full name (at least 2 characters).";
  if (name.length > NAME_MAX) return "Name is too long.";
  if (!email) return "Email is required.";
  if (!EMAIL_REGEX.test(email)) return "Please enter a valid email address.";
  if (email.length > 254) return "Email is too long.";
  if (phone && !PHONE_REGEX.test(phone)) return "Please enter a valid phone number (e.g. +44 7700 900000).";
  if (message.length < MESSAGE_MIN) return "Please write at least a short message (10+ characters).";
  if (message.length > MESSAGE_MAX) return "Message is too long.";
  return null;
}

/** @param {{ variant?: 'default' | 'hero' }} props */
export default function ContactForm({ variant = "default" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    type: "Website",
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "privacy_consent") {
      setPrivacyConsent(!!checked);
      return;
    }
    setForm({ ...form, [name]: value });
    if (error) setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!privacyConsent) {
      setError("Please accept the privacy consent to submit the form.");
      return;
    }
    const validationError = validateForm(form);
    if (validationError) {
      setError(validationError);
      return;
    }
    if (TURNSTILE_ENABLED && !turnstileToken) {
      setError("Please complete the security check before submitting.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-red focus:ring-2 focus:ring-red/20 outline-none text-gray-900 text-sm";
  const labelClass = "block text-navy font-semibold mb-1.5 text-sm";

  if (submitted) {
    return (
      <div
        className={
          variant === "hero"
            ? "bg-green-100 text-green-800 p-4 rounded-xl text-center font-semibold text-sm"
            : "bg-green-100 text-green-800 p-6 rounded-xl text-center font-semibold"
        }
      >
        Thank you for your message! We'll get back to you soon.
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <form
        onSubmit={handleSubmit}
        className="space-y-3"
        aria-label="Quick contact form"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className={labelClass} htmlFor="hero-contact-name">
              Name
            </label>
            <input
              id="hero-contact-name"
              type="text"
              name="name"
              required
              minLength={NAME_MIN}
              maxLength={NAME_MAX}
              value={form.name}
              onChange={handleChange}
              className={inputClass}
              placeholder="Your name"
              aria-label="Full Name"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="hero-contact-email">
              Email
            </label>
            <input
              id="hero-contact-email"
              type="email"
              name="email"
              required
              maxLength={254}
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="you@email.com"
              aria-label="Email"
            />
          </div>
        </div>
        <div>
          <label className={labelClass} htmlFor="hero-contact-phone">
            Phone <span className="text-gray-500 font-normal">(optional)</span>
          </label>
          <input
            id="hero-contact-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="+44 ..."
            aria-label="Phone"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="hero-contact-type">
            Project type
          </label>
          <select
            id="hero-contact-type"
            name="type"
            value={form.type}
            onChange={handleChange}
            className={inputClass}
            aria-label="Project Type"
          >
            <option>Website</option>
            <option>Branding</option>
            <option>Marketing</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="hero-contact-message">
            Message
          </label>
          <textarea
            id="hero-contact-message"
            name="message"
            required
            minLength={MESSAGE_MIN}
            maxLength={MESSAGE_MAX}
            value={form.message}
            onChange={handleChange}
            rows={3}
            className={inputClass + " resize-none"}
            placeholder="How can we help? (min 10 characters)"
            aria-label="Your Message"
          />
          <p className="mt-0.5 text-xs text-gray-500">
            {form.message.length}/{MESSAGE_MAX}
          </p>
        </div>
        <div className="flex items-start gap-2">
          <input
            id="hero-contact-privacy"
            type="checkbox"
            name="privacy_consent"
            required
            checked={privacyConsent}
            onChange={handleChange}
            className="w-4 h-4 mt-0.5 text-navy border-gray-300 rounded focus:ring-navy flex-shrink-0"
            aria-describedby="hero-privacy-desc"
          />
          <label id="hero-privacy-desc" htmlFor="hero-contact-privacy" className="text-xs text-gray-600">
            I agree to the{" "}
            <Link href="/privacy-policy" className="text-red underline">
              Privacy Policy
            </Link>
          </label>
        </div>
        {TURNSTILE_ENABLED && (
          <TurnstileWidget onVerify={setTurnstileToken} className="flex justify-center" />
        )}
        {error && (
          <p className="text-red-600 font-semibold text-sm">{error}</p>
        )}
        <button
          type="submit"
          className="w-full py-3 bg-red text-white font-bold rounded-lg shadow hover:bg-navy transition-colors text-sm disabled:opacity-60"
          disabled={loading}
          aria-label="Send message"
        >
          {loading ? "Sending..." : "Send message"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 px-2 sm:px-4 ">
      <div>
        <label
          className="block text-navy font-semibold mb-2"
          htmlFor="contact-name"
        >
          Full Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          minLength={NAME_MIN}
          maxLength={NAME_MAX}
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red focus:ring-2 focus:ring-red/20 outline-none text-gray-900 text-base"
          placeholder="Your Name"
          aria-label="Full Name"
        />
      </div>
      <div>
        <label
          className="block text-navy font-semibold mb-2"
          htmlFor="contact-email"
        >
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          maxLength={254}
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red focus:ring-2 focus:ring-red/20 outline-none text-gray-900 text-base"
          placeholder="you@email.com"
          aria-label="Email Address"
        />
      </div>
      <div>
        <label
          className="block text-navy font-semibold mb-2"
          htmlFor="contact-phone"
        >
          Phone Number{" "}
          <span className="text-gray-500 font-normal">(optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red focus:ring-2 focus:ring-red/20 outline-none text-gray-900 text-base"
          placeholder="Your Phone"
          aria-label="Phone Number"
        />
      </div>
      <div>
        <label
          className="block text-navy font-semibold mb-2"
          htmlFor="contact-type"
        >
          Project Type
        </label>
        <select
          id="contact-type"
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red focus:ring-2 focus:ring-red/20 outline-none text-gray-900 text-base"
          aria-label="Project Type"
        >
          <option>Website</option>
          <option>Branding</option>
          <option>Marketing</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label
          className="block text-navy font-semibold mb-2"
          htmlFor="contact-message"
        >
          Your Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={MESSAGE_MIN}
          maxLength={MESSAGE_MAX}
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red focus:ring-2 focus:ring-red/20 outline-none text-gray-900 text-base"
          placeholder="How can we help you? (at least 10 characters)"
          aria-label="Your Message"
        />
        <p className="mt-1 text-xs text-gray-500">{form.message.length} / {MESSAGE_MAX} characters</p>
      </div>
      <div className="flex items-start gap-3">
        <input
          id="contact-privacy-consent"
          type="checkbox"
          name="privacy_consent"
          required
          checked={privacyConsent}
          onChange={handleChange}
          className="w-4 h-4 mt-1 text-navy border-gray-300 rounded focus:ring-navy flex-shrink-0"
          aria-describedby="contact-privacy-consent-desc"
        />
        <label
          id="contact-privacy-consent-desc"
          htmlFor="contact-privacy-consent"
          className="text-sm text-gray-700"
        >
          I consent to having this website store my submitted information so
          they can respond to my inquiry.{" "}
          <Link href="/privacy-policy" className="text-red underline">
            Privacy Policy
          </Link>
        </label>
      </div>
      {TURNSTILE_ENABLED && (
        <TurnstileWidget onVerify={setTurnstileToken} />
      )}
      {error && (
        <div className="text-red-600 font-semibold text-center">{error}</div>
      )}
      <button
        type="submit"
        className="w-full py-4 bg-red text-white font-bold rounded-xl shadow hover:bg-navy transition-all duration-300 text-lg disabled:opacity-60"
        disabled={loading}
        aria-label="Send Message"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
