import Link from "@/components/Link";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "../../components/ContactForm";
import FinalCTA from "../../components/FinalCTA";
import Image from "next/image";

export const metadata = {
  title: "Contact ADS | Web Design, SEO, Branding & Marketing in the UK",
  description:
    "Need a stunning website, expert branding, or targeted digital marketing? Contact Awais Digital Services (ADS) in the UK for a free consultation via WhatsApp, email, or call. Trusted by startups, local businesses, and professionals across the UK.",
  keywords:
    "contact web design UK, digital marketing agency UK, branding services UK, free website consultation, ADS contact, WhatsApp website agency, UK SEO help",
  openGraph: {
    title: "Contact ADS | Web Design, SEO, Branding & Marketing in the UK",
    description:
      "Speak directly with Awais Digital Services (ADS) — offering high-converting websites, SEO, branding, and marketing services in the UK. Free consultation available now.",
    url: "https://www.awaisdigitalservices.co.uk/contact",
    siteName: "Awais Digital Services",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "https://www.awaisdigitalservices.co.uk/og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Awais Digital Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ADS | Website, SEO, Branding & Marketing Services UK",
    description:
      "Connect with Awais Digital Services for expert websites, branding, SEO, and digital marketing in the UK. Message us directly on WhatsApp or email.",
    images: ["https://www.awaisdigitalservices.co.uk/og.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen px-4 sm:px-0">
      <section className="relative bg-gradient-to-br from-white to-gray-100 py-20 px-6 md:px-10 overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-red/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-navy/10 rounded-full blur-3xl opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="mt-10 text-center md:text-left flex flex-col gap-6">
            <div className="inline-block text-sm font-medium text-red bg-red/10 px-4 py-2 rounded-full w-fit mx-auto md:mx-0">
              Let’s talk
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-navy">
              Let’s <span className="text-red">Collaborate</span> and Create{" "}
              <br />
              Your Next Big Thing
            </h1>

            <p className="text-base md:text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
              Ready to grow your business online? Whether you have a project in
              mind, need a website, branding, or digital marketing support.
              we're here to help{" "}
              <span className="text-red">UK startups and small businesses</span>{" "}
              Contact ADS today for a free consultation or just to say hello.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <Link
                href="https://wa.me/447443098117"
                aria-label="Message Awais Digital Services on WhatsApp"
                className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-navy hover:scale-105 transition transform duration-300"
              >
                Message on WhatsApp
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/contact-hero.png"
              alt="Contact Illustration"
              width={500}
              height={500}
              priority
              className=" hidden md:block w-full max-w-md h-auto object-contain rounded-2xl  transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            href="https://wa.me/447443098117"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:border-green-400 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            role="region"
            aria-label="Contact via WhatsApp: Quick chat with Awais Digital Services"
            tabIndex={0}
          >
            <FaWhatsapp
              className="text-green-500 text-4xl mb-2 group-hover:scale-110 transition-transform"
              aria-hidden="true"
            />
            <span className="font-bold text-navy text-lg mb-1">
              WhatsApp Chat
            </span>
            <span className="text-gray-600 mb-2">+44 7443 098117</span>
            <span className="inline-block px-6 py-2 bg-green-500 text-white rounded-full font-semibold mt-2 group-hover:bg-navy transition">
              Chat Now
            </span>
          </Link>
          <Link
            href="mailto:info@awaisdigitalservices.co.uk"
            className="flex flex-col items-center bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:border-blue-400 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            role="region"
            aria-label="Contact via Email: Send an email to Awais Digital Services"
            tabIndex={0}
          >
            <FaEnvelope
              className="text-blue-500 text-4xl mb-2 group-hover:scale-110 transition-transform"
              aria-hidden="true"
            />
            <span className="font-bold text-navy text-lg mb-1">Email Us</span>
            <span className="text-gray-600 mb-2">
              info@awaisdigitalservices.co.uk
            </span>
            <span className="inline-block px-6 py-2 bg-blue-500 text-white rounded-full font-semibold mt-2 group-hover:bg-navy transition">
              Send Email
            </span>
          </Link>
          <Link
            href="tel:+447780059219"
            className="flex flex-col items-center bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:border-red-400 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2"
            role="region"
            aria-label="Contact via Phone: Call Awais Digital Services"
            tabIndex={0}
          >
            <FaPhoneAlt
              className="text-red text-4xl mb-2 group-hover:scale-110 transition-transform"
              aria-hidden="true"
            />
            <span className="font-bold text-navy text-lg mb-1">Call Us</span>
            <span className="text-gray-600 mb-2">+44 7780 059219</span>
            <span className="inline-block px-6 py-2 bg-red text-white rounded-full font-semibold mt-2 group-hover:bg-navy transition">
              Call Now
            </span>
          </Link>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 text-center">
            Send Us a Message
          </h2>
          <ContactForm />
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
