export default function SimplePricingSection({ id, title, intro, items, note }) {
  return (
    <section id={id} className="py-12 px-4 bg-gray-50 even:bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-3">
          {title}
        </h2>
        {intro ? <p className="text-center text-gray-700 mb-6">{intro}</p> : null}
        <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white">
          <table className="w-full text-sm min-w-[640px]">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="p-3 font-semibold text-navy">Service</th>
                <th className="p-3 font-semibold text-navy">Price</th>
                <th className="p-3 font-semibold text-navy">What Client Gets</th>
              </tr>
            </thead>
            <tbody>
              {items.map(([service, price, detail]) => (
                <tr key={`${service}-${price}`} className="border-t border-gray-200">
                  <td className="p-3 text-gray-700">{service}</td>
                  <td className="p-3 font-semibold text-navy">{price}</td>
                  <td className="p-3 text-gray-700">{detail || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {note ? <p className="text-sm text-gray-600 mt-3">{note}</p> : null}
      </div>
    </section>
  );
}

