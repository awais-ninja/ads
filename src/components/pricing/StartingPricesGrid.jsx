export default function StartingPricesGrid({ rows }) {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-6">
          Starting Prices
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rows.map(([service, price]) => (
            <article
              key={service}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
            >
              <p className="text-sm text-gray-600">{service}</p>
              <p className="text-lg font-bold text-navy mt-1">{price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

