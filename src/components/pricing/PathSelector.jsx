import { Globe, TrendingUp, BriefcaseBusiness, Wrench } from "lucide-react";

const items = [
  {
    id: "website-packages",
    title: "I need a new website",
    text: "Website, landing page, e-commerce, redesign, or custom system.",
    cta: "View Website Packages",
    icon: Globe,
  },
  {
    id: "marketing-packages",
    title: "I need more customers",
    text: "Marketing, SEO, paid ads, content, tracking, and lead generation.",
    cta: "View Growth Packages",
    icon: TrendingUp,
  },
  {
    id: "business-setup",
    title: "I need business setup support",
    text: "Business email, domain, hosting, software, automation, IT, and security.",
    cta: "View Setup Services",
    icon: BriefcaseBusiness,
  },
  {
    id: "one-off-services",
    title: "I only need one task",
    text: "Graphics, email setup, DNS fix, website audit, speed optimisation, or small support work.",
    cta: "View One-Off Services",
    icon: Wrench,
  },
];

export default function PathSelector({ onSelect }) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-6">
          What do you need help with?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item.id)}
                className="text-left bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-red/40 transition-all"
              >
                <div className="inline-flex rounded-lg p-2 bg-navy/10 text-navy mb-3">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{item.text}</p>
                <p className="text-sm font-semibold text-red mt-3">{item.cta}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

