"use client";
import { useState, useEffect } from "react";

import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const PricingCalculator = () => {
  const [selectedPackage, setSelectedPackage] = useState("");

  const [ecommerce, setEcommerce] = useState(false);
  const [branding, setBranding] = useState(false);
  const [emailMarketing, setEmailMarketing] = useState(false);
  const [blogSetup, setBlogSetup] = useState(false);
  const [seo, setSeo] = useState(false);
  const [maintenance, setMaintenance] = useState(false);
  const [googleMyBusiness, setGoogleMyBusiness] = useState(false);
  const [copywriting, setCopywriting] = useState(false);
  const [stockImages, setStockImages] = useState(false);
  const [promoVideo, setPromoVideo] = useState(false);
  const [total, setTotal] = useState(0);

  const packages = [
    { id: "starter", name: "Starter Website (3 Pages)", price: 199 },
    { id: "business", name: "Business Website (5 Pages)", price: 499 },
    { id: "professional", name: "Professional Website (10 Pages)", price: 999 },
    {
      id: "landing",
      name: "High-Converting Landing Page (1 page)",
      price: 180,
    },
  ];

  const addons = [
    {
      id: "promoVideo",
      name: "Promo Video Creation (30-60 Seconds)",
      price: 49,
      state: promoVideo,
      setState: setPromoVideo,
    },
    {
      id: "maintenance",
      name: "Website Maintenance Plan",
      price: 20,
      state: maintenance,
      setState: setMaintenance,
      monthly: true,
    },
    {
      id: "googleMyBusiness",
      name: "Google My Business Setup",
      price: 99,
      state: googleMyBusiness,
      setState: setGoogleMyBusiness,
    },
    {
      id: "emailMarketing",
      name: "Email Marketing Setup",
      price: 120,
      state: emailMarketing,
      setState: setEmailMarketing,
    },
    {
      id: "branding",
      name: "Branding Package (Logo + Brand Kit)",
      price: 150,
      state: branding,
      setState: setBranding,
    },
    {
      id: "seo",
      name: "SEO Starter Pack",
      price: 200,
      state: seo,
      setState: setSeo,
    },
    {
      id: "copywriting",
      name: "Website Copywriting (up to 5 Pages)",
      price: 249,
      state: copywriting,
      setState: setCopywriting,
    },
    {
      id: "blogSetup",
      name: "Blog Setup",
      price: 300,
      state: blogSetup,
      setState: setBlogSetup,
    },
    {
      id: "ecommerce",
      name: "E-commerce Setup",
      price: 1000,
      state: ecommerce,
      setState: setEcommerce,
    },
  ];

  useEffect(() => {
    let newTotal = 0;

    // Add selected package price
    const selectedPackageObj = packages.find(
      (pkg) => pkg.id === selectedPackage
    );
    if (selectedPackageObj) {
      newTotal += selectedPackageObj.price;
    }

    // Add selected addons
    addons.forEach((addon) => {
      if (addon.state) {
        newTotal += addon.price;
      }
    });

    setTotal(newTotal);
  }, [
    selectedPackage,
    ecommerce,
    branding,
    emailMarketing,
    blogSetup,
    seo,
    maintenance,
    googleMyBusiness,
    copywriting,
    stockImages,
    promoVideo,
  ]);

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined") {
      const message = `Hi, I'm interested in your services. My estimated project cost is £${total}.`;
      window.open(
        `https://wa.me/447443098117?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }
  };

  const handleEmailClick = () => {
    if (typeof window !== "undefined") {
      const subject = "Project Estimate Request";
      const body = `Hi, I'm interested in your services. My estimated project cost is £${total}.`;
      window.location.href = `mailto:info@awaisdigitalservices.co.uk?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4">
              Estimate Your Project Cost Instantly
            </h2>
            <p className="text-base sm:text-lg text-gray-900">
              Use our quick project calculator to estimate your website,
              branding, and marketing costs. No hidden fees — just honest,
              transparent pricing tailored for startups and small businesses.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="space-y-6">
              {/* Website Package Selection */}
              <div>
                <label className="block text-lg font-semibold text-navy mb-3">
                  Which Website Package Do You Need?
                </label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-red text-gray-900"
                  aria-label="Select Website Package"
                >
                  <option value="">Select a package</option>
                  {packages.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name} — £{pkg.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Addons */}
              <div className="space-y-4">
                {addons.map((addon) => (
                  <div key={addon.id} className="flex items-start">
                    <div className="flex items-center h-6">
                      <input
                        id={addon.id}
                        type="checkbox"
                        checked={addon.state}
                        onChange={(e) => addon.setState(e.target.checked)}
                        className="w-5 h-5 text-red border-gray-300 rounded focus:ring-red"
                        aria-label={addon.name}
                      />
                    </div>
                    <div className="ml-3">
                      <label
                        htmlFor={addon.id}
                        className="text-lg font-medium text-navy"
                      >
                        {addon.name}
                      </label>
                      <p className="text-gray-800">
                        Add £{addon.price}
                        {addon.monthly ? "/month" : ""}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-navy">
                    Your Estimated Total:
                  </span>
                  <span className="text-2xl font-extrabold text-red">
                    £{total}
                  </span>
                </div>
                {maintenance && (
                  <p className="text-sm text-gray-600 mt-1">
                    + £50/month for maintenance
                  </p>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  aria-label="Get Started with WhatsApp"
                >
                  <FaWhatsapp className="text-xl" />
                  Get Started with ADS
                </button>
                <button
                  onClick={handleEmailClick}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white rounded-lg font-semibold hover:bg-navy/90 transition-colors"
                  aria-label="Send My Estimate via Email"
                >
                  <FaEnvelope className="text-xl" />
                  Send My Estimate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
