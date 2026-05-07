import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import CalculationAccordion from "./CalculationAccordion";

export default function PackageCard({ pkg }) {
  return (
    <article className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm h-full">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-navy">{pkg.name}</h3>
        {pkg.badge ? (
          <span className="text-xs font-semibold bg-red/10 text-red px-2 py-1 rounded-full">
            {pkg.badge}
          </span>
        ) : null}
      </div>
      <p className="text-red font-bold mt-1 text-xl">{pkg.price}</p>
      {pkg.bestFor ? (
        <p className="text-sm text-gray-600 mt-2">
          <span className="font-semibold text-navy">Best for:</span> {pkg.bestFor}
        </p>
      ) : null}
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {pkg.features?.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <FaCheckCircle className="text-green-600 mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <CalculationAccordion rows={pkg.calculations} />
      {pkg.note ? <p className="text-xs text-gray-600 mt-3">{pkg.note}</p> : null}
      <div className="flex flex-wrap gap-2 mt-4">
        <Link
          href="/contact"
          className="px-4 py-2 rounded-lg bg-red text-white text-sm font-semibold hover:bg-navy transition-colors"
        >
          Choose this package
        </Link>
        <Link
          href="/contact"
          className="px-4 py-2 rounded-lg bg-gray-100 text-navy text-sm font-semibold hover:bg-gray-200 transition-colors"
        >
          Request quote
        </Link>
      </div>
    </article>
  );
}

