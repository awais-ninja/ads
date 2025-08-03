"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "@/components/Link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function ModernNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#f9f9ff] border-b border-gray-200 fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Site logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Homepage"
        >
          <Image
            src="/logo-web.svg"
            alt="Awais Digital Services Logo"
            width={160}
            height={40}
            priority
            className="w-auto h-10"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Primary Navigation"
        >
          {navItems.map(({ label, href, highlight }) => (
            <Link
              key={href}
              href={href}
              className={`text-gray-800 font-medium hover:text-blue-700 transition ${
                highlight ? "bg-blue-600 text-white px-3 py-1 rounded-md" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="https://wa.me/447443098117"
            className="bg-red hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            Whatsapp Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="flex justify-between items-center mb-6">
            <Image
              src="/logo-web.svg"
              alt="Awais Digital Services Logo"
              width={160}
              height={40}
              className="w-auto h-10"
            />
            <button
              className="text-gray-800"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes size={26} />
            </button>
          </div>

          <nav
            className="flex flex-col space-y-6 mb-10"
            aria-label="Mobile Navigation"
          >
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-gray-800 hover:text-blue-700"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center mb-5">
            <Link
              href="https://wa.me/447443098117"
              className="bg-red hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
            >
              Whatsapp Us
            </Link>
          </div>

          <div
            className="flex justify-center gap-6 text-gray-600"
            aria-label="Social Links"
          >
            <Link
              href="https://www.facebook.com/MirzaAwais420"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/mirza.awais.official/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram profile"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/awais-digital-services"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Awais Digital Services on LinkedIn"
            >
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
