import {
  FaCookieBite,
  FaListUl,
  FaPuzzlePiece,
  FaChartBar,
  FaUserSecret,
  FaEnvelope,
  FaGlobe,
  FaShieldAlt,
  FaEye,
  FaAd,
  FaExternalLinkAlt,
  FaEdit,
  FaCog,
} from "react-icons/fa";
import React from "react";

export default function CookiePolicy() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <FaCookieBite className="text-navy text-3xl" />
          <h1 className="text-3xl font-bold text-navy">Cookie Policy</h1>
        </div>
        <p className="mb-2 text-gray-700 font-medium">Awais Digital Services</p>
        <p className="mb-6 text-gray-700">Effective Date: [Insert Date]</p>
        <p className="mb-6 text-gray-700">
          This Cookie Policy explains how Awais Digital Services ("we", "our",
          or "us") uses cookies and similar tracking technologies on our website
          www.awaisdigitalservices.co.uk. By using our website, you consent to
          our use of cookies in accordance with this policy.
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
              1. Strictly Necessary Cookies
            </h3>
            <p className="mb-2 text-gray-700">
              These cookies are essential for the website to function properly.
              They enable core features such as page navigation and access to
              secure areas. You cannot opt out of these cookies via the website.
            </p>
            <p className="mb-2 text-gray-700 font-medium">Examples:</p>
            <ul className="list-disc ml-8 mb-2 text-gray-700">
              <li>Session cookies for form submission</li>
              <li>Security authentication cookies</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-navy mb-2">
              2. Performance and Analytics Cookies
            </h3>
            <p className="mb-2 text-gray-700">
              These cookies collect anonymous data about how visitors use our
              site, such as which pages are visited most. This helps us optimize
              website structure and user journeys.
            </p>
            <p className="mb-2 text-gray-700 font-medium">Examples:</p>
            <ul className="list-disc ml-8 mb-2 text-gray-700">
              <li>Google Analytics</li>
              <li>HubSpot Analytics</li>
              <li>LinkedIn Insights</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-navy mb-2">
              3. Functionality Cookies
            </h3>
            <p className="mb-2 text-gray-700">
              These cookies allow the site to remember your choices and provide
              enhanced features, such as remembering your location or language
              preference.
            </p>
            <p className="mb-2 text-gray-700 font-medium">Examples:</p>
            <ul className="list-disc ml-8 mb-2 text-gray-700">
              <li>Live chat preferences</li>
              <li>Cookie consent banner memory</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-navy mb-2">
              4. Targeting & Advertising Cookies
            </h3>
            <p className="mb-2 text-gray-700">
              These cookies help us show relevant ads to users and track the
              performance of our marketing campaigns.
            </p>
            <p className="mb-2 text-gray-700 font-medium">Examples:</p>
            <ul className="list-disc ml-8 mb-2 text-gray-700">
              <li>Google Ads (AdWords) tracking</li>
              <li>Meta (Facebook) Pixel</li>
              <li>LinkedIn advertising and retargeting pixel</li>
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
            <li>YouTube, Vimeo (for video playback)</li>
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
            <h2 className="text-xl font-semibold text-navy">Consent</h2>
          </div>
          <p className="mb-2 text-gray-700">
            By continuing to use our website, you consent to the placement of
            cookies on your device unless you opt out through browser settings
            or cookie control tools.
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
