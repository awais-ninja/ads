import { Tags } from "lucide-react";

export default function StartingPricesCarousel({ rows }) {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-5">
          Simple Starting Prices
        </h2>
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {rows.map(([service, price]) => (
            <article
              key={service}
              className="shrink-0 min-w-[220px] rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
            >
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Tags size={14} />
                <span>Starting from</span>
              </div>
              <p className="text-sm text-gray-700 mt-2">{service}</p>
              <p className="text-base font-bold text-navy mt-1">{price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

