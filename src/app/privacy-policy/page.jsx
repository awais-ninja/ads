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

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <FaUserShield className="text-navy text-3xl" />
          <h1 className="text-3xl font-bold text-navy">Privacy Policy</h1>
        </div>
        <p className="mb-2 text-gray-700 font-medium">Awais Digital Services</p>
        <p className="mb-6 text-gray-700">Effective Date: [Insert Date]</p>
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
            <FaUserShield className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              Controlling Your Personal Information
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            As a data subject, you have the right to:
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li>Request a copy of the personal data we hold</li>
            <li>Ask for correction or deletion of your data</li>
            <li>Withdraw consent at any time</li>
            <li>Object to the processing of your data</li>
            <li>Request data portability (where applicable)</li>
            <li>
              File a complaint with the Information Commissioner's Office (ICO)
            </li>
          </ul>
          <p className="mb-2 text-gray-700">
            To exercise these rights, email us at{" "}
            <a
              href="mailto:privacy@awaisdigitalservices.co.uk"
              className="text-red underline font-medium"
            >
              privacy@awaisdigitalservices.co.uk
            </a>{" "}
            or write to:
          </p>
          <div className="ml-8 mb-2 text-gray-700">
            <p>Data Request Team</p>
            <p>Awais Digital Services</p>
            <p>[Insert Business Address]</p>
          </div>
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
            <li>YouTube, Vimeo, and other embedded services</li>
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
