"use client";

import { useMemo, useState } from "react";
import PackageCard from "./PackageCard";

function SimpleServiceGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {items.map(([name, price, detail]) => (
        <article
          key={`${name}-${price}`}
          className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
        >
          <p className="text-sm text-gray-700">{name}</p>
          <p className="text-lg font-bold text-navy mt-1">{price}</p>
          {detail ? <p className="text-xs text-gray-600 mt-2">{detail}</p> : null}
        </article>
      ))}
    </div>
  );
}

export default function CategoryExplorer({ categoryMap, initialId = "websites" }) {
  const [active, setActive] = useState(initialId);
  const current = useMemo(
    () => categoryMap.find((category) => category.id === active) ?? categoryMap[0],
    [active, categoryMap]
  );

  return (
    <section id="category-explorer" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-6">
          Explore Services by Category
        </h2>

        <div className="sticky top-20 z-20 bg-white/95 backdrop-blur border border-gray-200 rounded-xl p-2 mb-6 shadow-sm">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {categoryMap.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActive(category.id)}
                className={`shrink-0 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  active === category.id
                    ? "bg-red text-white"
                    : "bg-gray-100 text-navy hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {current?.intro ? (
          <p className="text-center text-gray-700 mb-6 max-w-4xl mx-auto">{current.intro}</p>
        ) : null}

        {current?.type === "packages" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {current.packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        ) : (
          <SimpleServiceGrid items={current.items} />
        )}
      </div>
    </section>
  );
}

