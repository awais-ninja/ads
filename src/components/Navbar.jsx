// components/ModernNavbar.jsx
"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "@/components/Link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function ModernNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#f9f9ff] border-b border-gray-200 fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-web.svg"
            alt="Site Logo"
            width={160}
            height={40}
            className="w-auto h-10"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
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
        <div className="hidden md:block">
          <Link
            href="https://wa.me/447443098117"
            className="bg-red hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp Us
          </Link>
        </div>
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMobileOpen(true)}
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <Image
              src="/logo-web.svg"
              alt="Logo"
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
          <nav className="flex flex-col space-y-6 mb-10">
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
          <Link
            href="/book"
            className="block w-full text-center bg-blue-600 text-white py-3 rounded-md font-semibold mb-6"
            onClick={() => setMobileOpen(false)}
          >
            Book a Meeting
          </Link>
          <div className="flex justify-center gap-6 text-gray-600">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
