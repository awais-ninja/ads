export default function PricingExplanation({ title, content, cards }) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-3">
          {title}
        </h2>
        <p className="text-center text-gray-700 max-w-4xl mx-auto mb-8">{content}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-navy">{card.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

