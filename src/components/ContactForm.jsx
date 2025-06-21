"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    type: "Website",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [envError, setEnvError] = useState("");

  // Check Supabase connection on component mount
  useEffect(() => {
    if (!supabase) {
      setEnvError(
        "Database connection is not configured. Please contact the administrator."
      );
      console.error("Supabase client not initialized");
    }
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!supabase) {
      setError(
        "Database connection is not configured. Please contact the administrator."
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { data, error } = await supabase.from("contacts").insert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          type: form.type,
        },
      ]);

      if (error) {
        console.error("Supabase error details:", error);
        setError(
          `Error: ${
            error.message ||
            "There was an error submitting your message. Please try again."
          }`
        );
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(
        `Error: ${
          err.message ||
          "There was an error submitting your message. Please try again."
        }`
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-100 text-green-800 p-6 rounded-xl text-center font-semibold">
        Thank you for your message! We'll get back to you soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 px-2 sm:px-4 ">
      {envError && (
        <div className="bg-red-100 text-red-800 p-4 rounded-lg text-center font-semibold ">
          {envError}
        </div>
      )}
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
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red focus:ring-2 focus:ring-red/20 outline-none text-gray-900 text-base"
          placeholder="How can we help you?"
          aria-label="Your Message"
        />
      </div>
      {error && (
        <div className="text-red-600 font-semibold text-center">{error}</div>
      )}
      <button
        type="submit"
        className="w-full py-4 bg-red text-white font-bold rounded-xl shadow hover:bg-navy transition-all duration-300 text-lg disabled:opacity-60"
        disabled={loading || !supabase}
        aria-label="Send Message"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
