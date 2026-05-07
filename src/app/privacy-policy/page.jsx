import {
  FaUserShield,
  FaShieldAlt,
  FaDatabase,
  FaUserCheck,
  FaGavel,
  FaEnvelope,
  FaCookieBite,
  FaEdit,
  FaGlobeEurope,
} from "react-icons/fa";
import React from "react";

const BASE_URL = "https://www.awaisdigitalservices.co.uk";
const defaultOg = {
  url: `${BASE_URL}/og.jpg`,
  width: 1200,
  height: 630,
  alt: "Awais Digital Services",
};

export const metadata = {
  title: "Privacy Policy | Awais Digital Services",
  alternates: { canonical: `${BASE_URL}/privacy-policy` },
  description:
    "Privacy policy for Awais Digital Services. How we collect, use, and protect your information when you use our services or visit our website.",
  openGraph: {
    title: "Privacy Policy | Awais Digital Services (ADS)",
    description: "How we collect, use, and protect your information.",
    url: `${BASE_URL}/privacy-policy`,
    siteName: "Awais Digital Services",
    locale: "en_GB",
    type: "website",
    images: [defaultOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Awais Digital Services",
    description: "How we protect your data.",
    images: [defaultOg.url],
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <FaUserShield className="text-navy text-3xl" />
          <h1 className="text-3xl font-bold text-navy">Privacy Policy</h1>
        </div>
        <p className="mb-2 text-gray-700 font-medium">Awais Digital Services</p>
        <p className="mb-6 text-gray-700">Effective Date: March 2025</p>
        <p className="mb-6 text-gray-700">
          This privacy policy outlines how Awais Digital Services ("we", "our",
          "us") collects, uses, and protects any information that you provide
          when using our services or visiting www.awaisdigitalservices.co.uk.
        </p>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaShieldAlt className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              Our Commitment to Privacy
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            We are committed to safeguarding the privacy of our website
            visitors, clients, and service users. We conduct our operations in
            full compliance with UK data protection laws including the Data
            Protection Act 2018 and the General Data Protection Regulation
            (GDPR).
          </p>
          <p className="mb-2 text-gray-700">
            We review our data handling policies regularly to ensure continued
            alignment with current legislation and best practices.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaDatabase className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              What Information We Collect
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            We may collect the following types of personal and business-related
            data:
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li>Full name and job title</li>
            <li>Company name, website, and contact details</li>
            <li>Business or billing address</li>
            <li>Email address and telephone number</li>
            <li>Banking or payment details</li>
            <li>
              Technical data including IP address, browser type, and cookies
            </li>
            <li>
              Project-specific information such as design preferences or SEO
              goals
            </li>
            <li>
              Any other information relevant to providing or quoting for our
              services
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaUserCheck className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              Why We Collect and Use Your Data
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            We only collect and use personal data where legally allowed,
            including the following purposes:
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li>
              To provide web development, SEO, and digital marketing services
            </li>
            <li>To respond to enquiries and customer service requests</li>
            <li>To manage ongoing projects and deliverables</li>
            <li>To process payments and issue invoices</li>
            <li>
              To carry out internal operations such as accounting, audits, or
              analytics
            </li>
            <li>
              To personalise your website experience and improve user experience
            </li>
            <li>To comply with legal and contractual obligations</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaGavel className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              Legal Basis for Processing
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            We process your data based on one or more of the following lawful
            grounds:
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li>
              <strong>Consent:</strong> Where you have given us explicit
              permission
            </li>
            <li>
              <strong>Contract:</strong> Where processing is necessary to
              fulfill a contract with you
            </li>
            <li>
              <strong>Legal Obligation:</strong> Where we are legally required
              to hold or disclose information
            </li>
            <li>
              <strong>Legitimate Interest:</strong> For essential business
              operations and service improvement
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaDatabase className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              How Long We Store Your Data
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            We keep your data only as long as needed for the purposes above or as
            required by law:
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li><strong>Contact form and enquiries:</strong> Up to 24 months after last contact, unless we have an ongoing contract or you ask for deletion sooner.</li>
            <li><strong>Client and project data:</strong> For the duration of the contract and up to 7 years thereafter for legal and accounting purposes where applicable.</li>
            <li><strong>Cookie and analytics data:</strong> As per the relevant provider (e.g. Google Analytics retention settings). You can withdraw consent at any time via Cookie Settings.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaUserCheck className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              Who Has Access to Your Data
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            Access to your personal data is limited to:
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li>Authorized staff of Awais Digital Services who need it to perform their role (e.g. responding to enquiries, delivering services).</li>
            <li>Trusted third-party processors who act on our instructions (see &quot;Third-Party Services&quot; below). We have agreements in place to protect your data.</li>
          </ul>
          <p className="mb-2 text-gray-700">
            We do not sell your personal data. We do not share it with third
            parties for their own marketing unless you have given explicit
            consent.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaUserShield className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              Your Rights Under UK and EU GDPR
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            As a data subject you have the following rights. We will respond
            within one month of a valid request.
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li><strong>Right to access:</strong> You can request a copy of the personal data we hold about you.</li>
            <li><strong>Right to rectification:</strong> You can ask us to correct inaccurate or incomplete data.</li>
            <li><strong>Right to erasure:</strong> You can ask us to delete your personal data where there is no overriding legal or legitimate reason to keep it.</li>
            <li><strong>Right to restrict processing:</strong> You can ask us to limit how we use your data in certain circumstances.</li>
            <li><strong>Right to data portability:</strong> Where processing is based on consent or contract and is carried out by automated means, you can ask for your data in a structured, machine-readable format.</li>
            <li><strong>Right to object:</strong> You can object to processing based on legitimate interests or for direct marketing.</li>
            <li><strong>Right to withdraw consent:</strong> Where we rely on consent, you can withdraw it at any time (e.g. via Cookie Settings for cookies).</li>
            <li><strong>Right to complain:</strong> You have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) in the UK or your local supervisory authority in the EEA.</li>
          </ul>
          <p className="mb-2 text-gray-700">
            <strong>How to request access, deletion, or other rights:</strong>{" "}
            Email us at{" "}
            <a
              href="mailto:info@awaisdigitalservices.co.uk"
              className="text-red underline font-medium"
            >
              info@awaisdigitalservices.co.uk
            </a>{" "}
            with the subject &quot;Data request&quot; and describe what you need.
            We may ask you to verify your identity. You can also write to: Awais
            Digital Services, Data Request, United Kingdom.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaGlobeEurope className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              Third-Party Services We Use
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            We use the following types of services. Each may process data as
            described in their own privacy policies. We only enable analytics
            and marketing tools after you have given consent where required.
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li><strong>Google Analytics / Google Tag Manager:</strong> Website usage statistics (only if you accept analytics cookies). Data may be processed in the US under appropriate safeguards.</li>
            <li><strong>Google Ads:</strong> Advertising and conversion measurement (only if you accept marketing cookies).</li>
            <li><strong>Hosting and infrastructure:</strong> The site is hosted on Vercel and related infrastructure. They process requests and logs necessary to run the service.</li>
            <li><strong>Contact form and lead storage:</strong> Form submissions are sent to a Google Apps Script and may be stored in a Google Sheet so we can respond to your enquiry. Google processes data according to its privacy policy.</li>
            <li><strong>Live chat (Crisp):</strong> If you accept preference cookies, we use Crisp for live chat. Crisp may collect and process data as set out in their privacy policy.</li>
            <li><strong>Facebook Pixel (Meta):</strong> If you accept marketing cookies, we may use Meta’s pixel for ad measurement. Meta’s privacy policy applies.</li>
            <li><strong>Vercel Analytics and Speed Insights:</strong> We may use Vercel’s own analytics for performance monitoring; this is minimal and can be considered part of site operation.</li>
          </ul>
          <p className="mb-2 text-gray-700">
            We do not control these third parties. We choose them with care and
            ensure contracts or terms are in place where required by law.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaShieldAlt className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              Data Security & Integrity
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            We use appropriate technical and organizational security measures to
            prevent unauthorized access, loss, misuse, or alteration of your
            data. This includes:
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li>Secured servers and encrypted storage</li>
            <li>Limited internal access on a need-to-know basis</li>
            <li>Use of vetted third-party hosting services</li>
            <li>Regular backups and vulnerability monitoring</li>
          </ul>
          <p className="mb-2 text-gray-700">
            Please note that while we strive to protect your data, no method of
            transmission over the internet is 100% secure.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaGlobeEurope className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              Data Transfers Outside the UK
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            Where we work with third-party providers located outside the UK or
            European Economic Area (EEA), we ensure that adequate safeguards
            (such as Standard Contractual Clauses) are in place.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaCookieBite className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              Cookies and Website Usage
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            Our website uses cookies to enhance your browsing experience and
            analyze site traffic. Cookies may include:
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li>
              <strong>Functional Cookies:</strong> Save user preferences and
              enhance navigation
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Gather anonymous usage data to
              improve our services
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Help deliver relevant ads and
              content
            </li>
          </ul>
          <p className="mb-2 text-gray-700">
            By continuing to use our site, you consent to the use of cookies.
            You can manage cookies through your browser settings or tools like
            www.aboutcookies.org.
          </p>
          <p className="mb-2 text-gray-700">
            Third-party cookies used may include:
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li>Google Analytics</li>
            <li>Meta (Facebook) Pixel</li>
            <li>LinkedIn Ads</li>
            <li>Vimeo and other embedded video services</li>
            <li>HubSpot (if CRM tools are used for campaigns)</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaEdit className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              Changes to This Policy
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page. We recommend checking this page regularly to
            ensure you are happy with any modifications.
          </p>
        </div>

        <div className="mb-2">
          <div className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-red" />
            <h2 className="text-xl font-semibold text-navy">Contact Us</h2>
          </div>
          <p className="mb-2 text-gray-700">
            If you have any questions about this Privacy Policy or how we handle
            your data, please get in touch:
          </p>
          <div className="ml-8 mb-2 text-gray-700">
            <p>
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
