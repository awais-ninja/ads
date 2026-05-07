export default function OneOffServices({ section }) {
  return (
    <section id="one-off-services" className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-3">
          {section.title}
        </h2>
        <p className="text-center text-gray-700 mb-8">{section.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {section.groups.map((group) => (
            <article
              key={group.title}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-navy">{group.title}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {group.items.map(([name, price]) => (
                  <li key={`${name}-${price}`} className="flex justify-between gap-3">
                    <span className="text-gray-700">{name}</span>
                    <span className="font-semibold text-navy">{price}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

