"use client";

import { useState } from "react";

export default function CalculationAccordion({ title = "See price breakdown", rows }) {
  const [open, setOpen] = useState(false);
  if (!rows?.length) return null;

  return (
    <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="w-full flex items-center justify-between px-3 py-2 bg-gray-50 text-sm font-semibold text-navy"
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="text-red">{open ? "-" : "+"}</span>
      </button>
      {open ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[280px]">
            <tbody>
              {rows.map(([label, value]) => {
                const isTotal =
                  label.includes("Final") ||
                  label.includes("Saving") ||
                  label.includes("Discount") ||
                  label.includes("Separate");
                return (
                  <tr key={`${label}-${value}`} className="border-t border-gray-200">
                    <td className="px-3 py-2 text-gray-700">{label}</td>
                    <td
                      className={`px-3 py-2 text-right ${
                        isTotal ? "font-semibold text-navy" : "text-gray-900"
                      }`}
                    >
                      {value}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

