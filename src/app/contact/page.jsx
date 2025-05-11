import Link from "@/components/Link";

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
    url: "awaisdigitalservices.co.uk",
    siteName: "Awais Digital Services",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "https://awaisdigitalservices.co.uk/og.jpg",
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
    images: ["https://awaisdigitalservices.co.uk/og.jpg"],
  },
};

import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaRegPaperPlane,
} from "react-icons/fa";
import ContactForm from "../../components/ContactForm";
import FinalCTA from "../../components/FinalCTA";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen px-4 sm:px-0">
      <section className="relative py-16 md:py-28 bg-gradient-to-br from-blue-50 via-red/10 to-navy/5 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-red/20 via-navy/10 to-blue-400/10 z-0 animate-spin-slow" />
        <div className="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-navy/10 via-red/10 to-blue-600/10 z-0 animate-spin-slow-reverse" />
        <div className="relative z-10 flex flex-col items-center gap-4 px-4 pt-10 md:pt-0">
          <span className="inline-flex items-center justify-center bg-white rounded-full shadow-lg p-6  border-4 border-red/20 mb-2 md:mb-4">
            <FaRegPaperPlane className="text-red text-5xl md:text-7xl " />
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy mb-2 leading-tight">
            Get in Touch with{" "}
            <span className="text-red">Awais Digital Services</span> (ADS)
          </h1>
          <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto">
            Ready to grow your business online? Whether you have a project in
            mind, need a website, branding, or digital marketing support — we're
            here to help! Contact ADS today for a free consultation or just to
            say hello.
          </p>
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
            <span
              className="font-bold text-navy text-lg mb-1"
              style={{ color: "#1a237e" }}
            >
              WhatsApp Chat
            </span>
            <span className="text-gray-600 mb-2" style={{ color: "#374151" }}>
              +44 7443 098117
            </span>
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
            <span
              className="font-bold text-navy text-lg mb-1"
              style={{ color: "#1a237e" }}
            >
              Email Us
            </span>
            <span className="text-gray-600 mb-2" style={{ color: "#374151" }}>
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
            <span
              className="font-bold text-navy text-lg mb-1"
              style={{ color: "#1a237e" }}
            >
              Call Us
            </span>
            <span className="text-gray-600 mb-2" style={{ color: "#374151" }}>
              +44 7780 059219
            </span>
            <span className="inline-block px-6 py-2 bg-red text-white rounded-full font-semibold mt-2 group-hover:bg-navy transition">
              Call Now
            </span>
          </Link>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2
            className="text-2xl md:text-3xl font-bold text-navy mb-6 text-center"
            style={{ color: "#1a237e" }}
          >
            Send Us a Message
          </h2>
          <ContactForm />
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
