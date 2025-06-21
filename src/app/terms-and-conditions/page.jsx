import {
  FaFileContract,
  FaBook,
  FaCalendarAlt,
  FaCogs,
  FaUserCheck,
  FaCopyright,
  FaMoneyBill,
  FaChartLine,
  FaServer,
  FaExclamationTriangle,
  FaUserSecret,
  FaDatabase,
  FaCloud,
  FaGavel,
  FaEdit,
  FaEnvelope,
} from "react-icons/fa";
import React from "react";

export default function TermsAndConditions() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <FaFileContract className="text-navy text-3xl" />
          <h1 className="text-3xl font-bold text-navy">Terms and Conditions</h1>
        </div>
        <p className="mb-6 text-gray-700 font-medium">
          Awais Digital Services – Web Design & Digital Marketing Terms
        </p>
        <p className="mb-6 text-gray-700">
          Please read these Terms and Conditions carefully, as they set out the
          legal rights and obligations between Awais Digital Services
          ("Company", "we", "our") and the "Client" in relation to digital
          marketing, SEO, website design, and development services.
        </p>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaBook className="text-red" />
            <h2 className="text-xl font-semibold text-navy">1. Definitions</h2>
          </div>
          <ul className="list-disc ml-8 mb-2 text-gray-700 space-y-1">
            <li>
              <strong>Agreement:</strong> The contract between the Client and
              the Company including these Terms and any agreed Proposals.
            </li>
            <li>
              <strong>Business Day:</strong> Monday to Friday, excluding UK
              public holidays.
            </li>
            <li>
              <strong>Charges:</strong> The fees due to the Company for services
              provided.
            </li>
            <li>
              <strong>Client:</strong> The person, business, or company
              purchasing services from the Company.
            </li>
            <li>
              <strong>Confidential Information:</strong> All non-public data
              disclosed between parties.
            </li>
            <li>
              <strong>Deliverables:</strong> Any materials, websites, or code
              delivered under the contract.
            </li>
            <li>
              <strong>Services:</strong> Web development, SEO, design, hosting,
              or other marketing services provided.
            </li>
            <li>
              <strong>Start Date:</strong> The date on which services commence.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaCalendarAlt className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              2. Term and Termination
            </h2>
          </div>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>2.1</strong> This Agreement shall commence on the Start
              Date and continue for the duration agreed in the Proposal, unless
              terminated earlier.
            </p>
            <p>
              <strong>2.2</strong> Either party may terminate this Agreement
              with 30 days' written notice after the minimum contract period
              ends.
            </p>
            <p>
              <strong>2.3</strong> Early termination by the Client before the
              contract period may incur a charge equal to 75% of the remaining
              fees.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaCogs className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              3. Scope of Services
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            <strong>3.1</strong> Awais Digital Services offers a range of
            digital services including but not limited to:
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li>Custom web design and development</li>
            <li>SEO strategy and implementation</li>
            <li>Paid ads and PPC campaign management</li>
            <li>Hosting, domain management, and SSL</li>
            <li>Website maintenance and support</li>
          </ul>
          <p className="mb-2 text-gray-700">
            <strong>3.2</strong> Service specifics, deadlines, and deliverables
            will be outlined in a Proposal accepted by the Client.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaUserCheck className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              4. Client Responsibilities
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            <strong>4.1</strong> The Client agrees to:
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li>
              Provide access to their website, hosting, and domain settings when
              required.
            </li>
            <li>Supply accurate content and materials on time.</li>
            <li>Review and approve work in a timely manner.</li>
            <li>Adhere to legal and ethical content usage.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaCopyright className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              5. Intellectual Property
            </h2>
          </div>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>5.1</strong> All materials created by Awais Digital
              Services (e.g., code, designs, graphics) remain the property of
              the Company until full payment is received.
            </p>
            <p>
              <strong>5.2</strong> Once paid in full, the Client receives a
              non-exclusive, royalty-free licence to use the deliverables for
              their business.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaMoneyBill className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              6. Charges and Payment Terms
            </h2>
          </div>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>6.1</strong> Charges are outlined in the Proposal and
              payable via bank transfer or PayPal.
            </p>
            <p>
              <strong>6.2</strong> Invoices are issued monthly in advance
              (unless stated otherwise). Payment terms are 14 days from invoice
              date.
            </p>
            <p>
              <strong>6.3</strong> Late payment may result in paused services,
              interest charges, and legal action.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaChartLine className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              7. Performance and SEO Disclaimer
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            <strong>7.1</strong> The Company will deliver SEO and marketing
            services using best practices. However:
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li>
              Search engine rankings fluctuate and are outside our control.
            </li>
            <li>
              SEO is a long-term strategy; results may take several months.
            </li>
            <li>
              Changes made by third parties may impact rankings or performance.
            </li>
            <li>
              We do not guarantee specific keyword positions or traffic levels.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaServer className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              8. Hosting and Security
            </h2>
          </div>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>8.1</strong> Hosting services may be provided via a
              trusted third-party provider.
            </p>
            <p>
              <strong>8.2</strong> The Client is responsible for any data
              collected on their website and must ensure compliance with the
              Data Protection Act 2018 and GDPR.
            </p>
            <p>
              <strong>8.3</strong> The Company is not liable for data breaches
              resulting from poor password management or outdated third-party
              plugins.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaExclamationTriangle className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              9. Limitation of Liability
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            <strong>9.1</strong> We are not liable for:
          </p>
          <ul className="list-disc ml-8 mb-2 text-gray-700">
            <li>Any indirect or consequential losses</li>
            <li>Downtime caused by third-party hosting providers</li>
            <li>SEO performance variations due to algorithm changes</li>
            <li>Loss of profits or business opportunities</li>
          </ul>
          <p className="mb-2 text-gray-700">
            <strong>9.2</strong> Our total liability will not exceed the fees
            paid by the Client in the 6 months prior to any claim.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaUserSecret className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              10. Confidentiality
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            <strong>10.1</strong> Both parties agree to maintain the
            confidentiality of all proprietary or sensitive information
            exchanged during the Agreement.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaDatabase className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              11. Data Protection
            </h2>
          </div>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>11.1</strong> Both parties agree to comply with GDPR and
              UK data protection laws.
            </p>
            <p>
              <strong>11.2</strong> Any Personal Data processed by the Company
              on the Client's behalf will be handled securely and only as
              necessary to deliver the agreed Services.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaCloud className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              12. Force Majeure
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            <strong>12.1</strong> We will not be liable for any delay or failure
            caused by events outside our reasonable control, including internet
            outages, natural disasters, or acts of war.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaGavel className="text-red" />
            <h2 className="text-xl font-semibold text-navy">
              13. Dispute Resolution
            </h2>
          </div>
          <p className="mb-2 text-gray-700">
            <strong>13.1</strong> Any disputes arising will be resolved through
            good-faith negotiation. If unresolved, disputes will be handled
            under the jurisdiction of English law in the courts of England and
            Wales.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <FaEdit className="text-red" />
            <h2 className="text-xl font-semibold text-navy">14. Amendments</h2>
          </div>
          <p className="mb-2 text-gray-700">
            <strong>14.1</strong> These Terms may only be amended in writing and
            agreed by both parties.
          </p>
        </div>

        <div className="mb-2">
          <div className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-red" />
            <h2 className="text-xl font-semibold text-navy">15. Contact Us</h2>
          </div>
          <p className="mb-2 text-gray-700">
            For any queries regarding these Terms and Conditions, please
            contact:
          </p>
          <p className="mb-2 text-gray-700 font-medium">
            Awais Digital Services
          </p>
          <p className="mb-4 text-gray-700">
            📧{" "}
            <a
              href="mailto:info@awaisdigitalservices.co.uk"
              className="text-red underline font-medium"
            >
              info@awaisdigitalservices.co.uk
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
