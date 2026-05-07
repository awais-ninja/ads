import {
  FaCookieBite,
  FaListUl,
  FaPuzzlePiece,
  FaChartBar,
  FaEnvelope,
  FaEye,
  FaExternalLinkAlt,
  FaEdit,
  FaCog,
} from "react-icons/fa";
import React from "react";
import Link from "@/components/Link";

const BASE_URL = "https://www.awaisdigitalservices.co.uk";
const defaultOg = {
  url: `${BASE_URL}/og.jpg`,
  width: 1200,
  height: 630,
  alt: "Awais Digital Services",
};

export const metadata = {
  title: "Cookie Policy | Awais Digital Services",
  alternates: { canonical: `${BASE_URL}/cookie-policy` },
  description:
    "Cookie policy for Awais Digital Services. How we use cookies and similar technologies on www.awaisdigitalservices.co.uk.",
  openGraph: {
    title: "Cookie Policy | Awais Digital Services (ADS)",
    description: "How Awais Digital Services uses cookies on our website.",
    url: `${BASE_URL}/cookie-policy`,
    siteName: "Awais Digital Services",
    locale: "en_GB",
    type: "website",
    images: [defaultOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Awais Digital Services",
    description: "How we use cookies on our website.",
    images: [defaultOg.url],
  },
};

export default function CookiePolicy() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <FaCookieBite className="text-navy text-3xl" />
          <h1 className="text-3xl font-bold text-navy">Cookie Policy</h1>
        </div>
        <p className="mb-2 text-gray-700 font-medium">Awais Digital Services</p>
        <p className="mb-6 text-gray-700">Effective Date: March 2025</p>
        <p className="mb-6 text-gray-700">
          This Cookie Policy explains how Awais Digital Services ("we", "our",
          or "us") uses cookies and similar technologies on our website
          www.awaisdigitalservices.co.uk. We comply with UK GDPR, EU GDPR, and
          the ePrivacy Directive. Non-essential cookies are only used after you
          have given your consent.
        </p>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaListUl className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              What Are Cookies?
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            Cookies are small text files stored on your device (computer,
            smartphone, or tablet) when you visit a website. They help the
            website recognize your device, remember your preferences, and
            improve functionality and performance.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaPuzzlePiece className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              Why We Use Cookies
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            We use cookies for several key purposes:
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li>To provide a better user experience</li>
            <li>To remember your preferences and settings</li>
            <li>To understand how visitors interact with our website</li>
            <li>To deliver tailored content and advertising</li>
            <li>
              To improve the performance, security, and functionality of the
              site
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaChartBar className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              Types of Cookies We Use
            </h2>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-navy mb-2">
              1. Necessary Cookies
            </h3>
            <p className="mb-2 text-gray-700">
              These cookies are essential for the website to function. They
              enable basic features like page navigation and access to secure
              areas. They do not collect personal data for marketing or
              analytics. You cannot disable these via our cookie tool.
            </p>
            <p className="mb-2 text-gray-700 font-medium">Examples:</p>
            <ul className="list-disc ml-8 mb-2 text-gray-700">
              <li>Cookie consent preference storage (localStorage)</li>
              <li>Security and load-balancing identifiers where required</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-navy mb-2">
              2. Analytics Cookies
            </h3>
            <p className="mb-2 text-gray-700">
              These cookies help us understand how visitors use our site (e.g.
              pages visited, time on site). We use this information only to
              improve the website. Data is aggregated and we use Google
              Analytics in a way that respects your privacy when you consent.
            </p>
            <p className="mb-2 text-gray-700 font-medium">Examples:</p>
            <ul className="list-disc ml-8 mb-2 text-gray-700">
              <li>Google Analytics (_ga, _gid, _gat)</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-navy mb-2">
              3. Marketing Cookies
            </h3>
            <p className="mb-2 text-gray-700">
              These cookies are used to deliver relevant ads and measure the
              effectiveness of campaigns. They may be set by us or our
              advertising partners (e.g. Google Ads, Meta/Facebook Pixel). They
              are only placed if you accept marketing cookies.
            </p>
            <p className="mb-2 text-gray-700 font-medium">Examples:</p>
            <ul className="list-disc ml-8 mb-2 text-gray-700">
              <li>Google Ads conversion and remarketing</li>
              <li>Meta (Facebook) Pixel</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-navy mb-2">
              4. Preference Cookies
            </h3>
            <p className="mb-2 text-gray-700">
              These cookies remember your choices (e.g. cookie preferences) and
              enable features like live chat so we can assist you. They are only
              placed if you accept preference cookies.
            </p>
            <p className="mb-2 text-gray-700 font-medium">Examples:</p>
            <ul className="list-disc ml-8 mb-2 text-gray-700">
              <li>Cookie consent choices (stored in browser)</li>
              <li>Crisp live chat (when you accept preference cookies)</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaExternalLinkAlt className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              Third-Party Cookies
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            We may embed content or connect with services from third parties,
            which may set their own cookies on your device. These may include:
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li>Vimeo and other embedded video (for video playback)</li>
            <li>SlideShare (for presentations)</li>
            <li>Social sharing buttons (Facebook, LinkedIn, X/Twitter)</li>
            <li>
              CRM tools like HubSpot for contact forms or email automation
            </li>
          </ul>
          <p className="mb-2 text-gray-700">
            We do not control the cookies set by third-party domains. Please
            refer to their privacy policies for more details.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaCog className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              Managing and Disabling Cookies
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            You can manage or disable cookies through your browser settings.
            Most browsers allow you to:
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li>See what cookies are active</li>
            <li>Delete all or selected cookies</li>
            <li>Block third-party cookies</li>
            <li>Set preferences for certain sites</li>
          </ul>
          <p className="mb-2 text-gray-700">
            You may also choose to browse the site in private/incognito mode to
            prevent cookie storage.
          </p>
          <p className="mb-2 text-gray-700 font-medium">Helpful resources:</p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li>
              <a
                href="https://www.aboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red underline"
              >
                www.aboutcookies.org
              </a>
            </li>
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red underline"
              >
                Google Chrome Settings
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red underline"
              >
                Mozilla Firefox Settings
              </a>
            </li>
          </ul>
          <p className="mb-2 text-gray-700 font-medium">
            Please note: Disabling cookies may affect site functionality.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaEye className="text-red" />
            <h2 className="text-xl font-semibold text-navy">Consent & Withdrawing Consent</h2>
          </div>
          <p className="mb-2 text-gray-700">
            Non-essential cookies (analytics, marketing, preference) are only
            placed after you have given your consent via our cookie banner. You
            can change your mind at any time.
          </p>
          <p className="mb-2 text-gray-700">
            <strong>To withdraw or change your consent:</strong> Use the
            &quot;Cookie Settings&quot; link in the website footer, or{" "}
            <Link href="/#cookie-settings" className="text-red underline">
              open Cookie Settings
            </Link>
            , to reopen the cookie preference centre. You can then turn off
            analytics, marketing, or preference cookies. Necessary cookies will
            remain to support site operation.
          </p>
          <p className="mb-2 text-gray-700">
            You can also clear or block cookies via your browser settings (see
            &quot;Managing and Disabling Cookies&quot; above). Blocking all
            cookies may affect site functionality.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaEdit className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              Changes to This Policy
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            We may update this Cookie Policy from time to time. Any updates will
            be posted on this page with a revised effective date.
          </p>
        </div>

        <div className="mb-2">
          <div className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-red" />
            <h2 className="text-xl font-semibold text-navy">Contact Us</h2>
          </div>
          <p className="mb-2 text-gray-700">
            For any questions about this Cookie Policy or how we use cookies,
            please contact:
          </p>
          <div className="ml-8 mb-2 text-gray-700">
            <p className="font-medium">Awais Digital Services</p>

            <p>
              🌐{" "}
              <a
                href="https://www.awaisdigitalservices.co.uk"
                className="text-red underline font-medium"
              >
                www.awaisdigitalservices.co.uk
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
