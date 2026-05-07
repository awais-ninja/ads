import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import CalculationAccordion from "./CalculationAccordion";

export default function BundleCard({ bundle }) {
  return (
    <article className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm h-full">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-xl font-bold text-navy">{bundle.name}</h3>
        <span className="text-xs font-semibold bg-navy/10 text-navy px-2 py-1 rounded-full">
          {bundle.badge}
        </span>
      </div>
      <p className="text-red font-extrabold text-xl mt-1">{bundle.price}</p>
      <p className="text-sm text-gray-700 mt-2">{bundle.description}</p>

      {bundle.features?.length ? (
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          {bundle.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <FaCheckCircle className="text-green-600 mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {bundle.setupFeatures?.length ? (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-navy">Setup Includes</h4>
          <ul className="mt-2 space-y-2 text-sm text-gray-700">
            {bundle.setupFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {bundle.monthlyFeatures?.length ? (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-navy">Monthly Includes</h4>
          <ul className="mt-2 space-y-2 text-sm text-gray-700">
            {bundle.monthlyFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <CalculationAccordion rows={bundle.calculations} />
      <CalculationAccordion title="See setup breakdown" rows={bundle.setupCalculations} />
      <CalculationAccordion
        title="See monthly breakdown"
        rows={bundle.monthlyCalculations}
      />
      {bundle.note ? <p className="text-xs text-gray-600 mt-3">{bundle.note}</p> : null}

      <div className="mt-4">
        <Link
          href="/contact"
          className="inline-block px-4 py-2 rounded-lg bg-red text-white text-sm font-semibold hover:bg-navy transition-colors"
        >
          {bundle.cta}
        </Link>
      </div>
    </article>
  );
}

