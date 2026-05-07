import Link from "@/components/Link";

const BUSINESS = {
  name: "Awais Digital Services",
  type: "Digital Marketing & Web Development Agency",
  serviceArea: "United Kingdom",
  website: "https://www.awaisdigitalservices.co.uk",
  email: "info@awaisdigitalservices.co.uk",
};

/**
 * Business identity block for trust signals and SEO.
 * @param {"page" | "footer"} variant - "page" for full section (Contact), "footer" for compact footer block
 */
export default function BusinessInformation({ variant = "page" }) {
  if (variant === "footer") {
    return (
      <div className="text-center md:text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
          Business Information
        </h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>
            <span className="text-gray-400">Business:</span>{" "}
            <span className="text-white">{BUSINESS.name}</span>
          </li>
          <li>
            <span className="text-gray-400">Type:</span>{" "}
            <span className="text-white">{BUSINESS.type}</span>
          </li>
          <li>
            <span className="text-gray-400">Service area:</span>{" "}
            <span className="text-white">{BUSINESS.serviceArea}</span>
          </li>
          <li>
            <span className="text-gray-400">Website:</span>{" "}
            <Link
              href={BUSINESS.website}
              className="text-blue-300 hover:text-blue-200 transition-colors underline"
              aria-label="Visit Awais Digital Services website"
            >
              awaisdigitalservices.co.uk
            </Link>
          </li>
          <li>
            <span className="text-gray-400">Email:</span>{" "}
            <Link
              href={`mailto:${BUSINESS.email}`}
              className="text-blue-300 hover:text-blue-200 transition-colors"
              aria-label={`Email ${BUSINESS.name} at ${BUSINESS.email}`}
            >
              {BUSINESS.email}
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <section
      className="py-12 bg-white border-t border-gray-100"
      aria-labelledby="business-information-heading"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2
          id="business-information-heading"
          className="text-2xl md:text-3xl font-bold text-navy mb-6 text-center"
        >
          Business Information
        </h2>
        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div>
              <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                Business Name
              </dt>
              <dd className="text-base font-semibold text-navy">
                {BUSINESS.name}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                Business Type
              </dt>
              <dd className="text-base text-gray-800">{BUSINESS.type}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                Service Area
              </dt>
              <dd className="text-base text-gray-800">{BUSINESS.serviceArea}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                Website
              </dt>
              <dd className="text-base">
                <Link
                  href={BUSINESS.website}
                  className="text-red hover:underline font-medium"
                  aria-label="Visit Awais Digital Services website"
                >
                  {BUSINESS.website.replace(/^https?:\/\//, "")}
                </Link>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                Contact Email
              </dt>
              <dd className="text-base">
                <Link
                  href={`mailto:${BUSINESS.email}`}
                  className="text-red hover:underline font-medium"
                  aria-label={`Email ${BUSINESS.name} at ${BUSINESS.email}`}
                >
                  {BUSINESS.email}
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
