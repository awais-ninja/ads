import { BadgePoundSterling, CircleDollarSign, FileStack, Rocket, ScanSearch } from "lucide-react";

const icons = [
  BadgePoundSterling,
  ScanSearch,
  FileStack,
  CircleDollarSign,
  Rocket,
];

export default function PricingNotes({ notes }) {
  return (
    <section id="pricing-notes" className="py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-6">
          Important Pricing Notes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {notes.map((note, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article
                key={note}
                className="bg-white border border-gray-200 rounded-xl px-4 py-4 text-sm text-gray-700"
              >
                <div className="inline-flex rounded-lg p-2 bg-navy/10 text-navy mb-3">
                  <Icon size={16} />
                </div>
                <p>{note}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

