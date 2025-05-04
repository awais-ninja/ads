"use client";
import Link from "@/components/Link";
import Image from "next/image";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const services = [
  {
    name: "Website Design for UK Businesses",
    href: "/services#website-design",
  },
  {
    name: "Branding Services for Startups",
    href: "/services#branding",
  },
  {
    name: "Email Marketing Setup",
    href: "/services#email-marketing",
  },
  {
    name: "Website Care & Maintenance Plans",
    href: "/services#care-plans",
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="/"
              className="inline-block mb-4"
              aria-label="Awais Digital Services Home"
            >
              <Image
                src="/logo-web.svg"
                alt="Awais Digital Services"
                width={280}
                height={70}
                className="h-12 md:h-16 w-auto"
                priority
              />
            </Link>
            <p className="text-base text-gray-300 mb-2">
              Awais Digital Services (ADS) provides affordable website design,
              branding, and email marketing services for startups and small
              businesses across the UK.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-blue-300 transition-colors"
                aria-label="Follow Awais Digital Services on Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-blue-300 transition-colors"
                aria-label="Follow Awais Digital Services on Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-pink-300 transition-colors"
                aria-label="Follow Awais Digital Services on Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-blue-400 transition-colors"
                aria-label="Connect with Awais Digital Services on LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-100 hover:text-blue-300 transition-colors text-center md:text-left"
                  aria-label="Return to Awais Digital Services Homepage"
                >
                  Return to Homepage
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-100 hover:text-blue-300 transition-colors text-center md:text-left"
                  aria-label="View our Digital Services and Solutions"
                >
                  View our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-100 hover:text-blue-300 transition-colors text-center md:text-left"
                  aria-label="Explore our Portfolio of Digital Projects"
                >
                  Explore our Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-100 hover:text-blue-300 transition-colors text-center md:text-left"
                  aria-label="View our Transparent Pricing Plans"
                >
                  View Pricing Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-100 hover:text-blue-300 transition-colors text-center md:text-left"
                  aria-label="Contact Awais Digital Services Team"
                >
                  Contact Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-100 hover:text-blue-300 transition-colors text-center md:text-left"
                    aria-label={service.name}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaPhoneAlt className="text-blue-400 w-5 h-5" />
                <Link
                  href="tel:+447780059219"
                  className="text-gray-100 hover:text-blue-300 transition-colors text-center md:text-left"
                  aria-label="Call Awais Digital Services at +44 7780 059219"
                >
                  Call us: +44 7780 059219
                </Link>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaWhatsapp className="text-green-500 w-5 h-5" />
                <Link
                  href="https://wa.me/447443098117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 hover:text-blue-300 transition-colors text-center md:text-left"
                  aria-label="Chat with Awais Digital Services on WhatsApp: +44 7443 098117"
                >
                  WhatsApp: +44 7443 098117
                </Link>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaEnvelope className="text-blue-400 w-5 h-5" />
                <Link
                  href="mailto:awaisdigitalservices@gmail.com"
                  className="text-gray-100 hover:text-blue-300 transition-colors text-center md:text-left"
                  aria-label="Email Awais Digital Services at awaisdigitalservices@gmail.com"
                >
                  Email: awaisdigitalservices@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <div className="mb-2 text-xs text-gray-400">
            Serving Startups, Entrepreneurs, and Small Businesses across the UK.
          </div>
          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} Awais Digital Services. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
