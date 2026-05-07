import PackageCard from "./PackageCard";

export default function PricingCategorySection({ id, title, intro, packages }) {
  return (
    <section id={id} className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-4">
          {title}
        </h2>
        {intro ? <p className="text-center text-gray-700 mb-8">{intro}</p> : null}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

