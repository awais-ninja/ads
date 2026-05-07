"use client";

import { useState } from "react";
import BundleCard from "@/components/pricing/BundleCard";
import BuildYourOwnSection from "@/components/pricing/BuildYourOwnSection";
import CategoryExplorer from "@/components/pricing/CategoryExplorer";
import FinalCTA from "@/components/pricing/FinalCTA";
import OneOffServices from "@/components/pricing/OneOffServices";
import PricingExplanation from "@/components/pricing/PricingExplanation";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingHero from "@/components/pricing/PricingHero";
import PricingNotes from "@/components/pricing/PricingNotes";
import PathSelector from "@/components/pricing/PathSelector";
import StartingPricesCarousel from "@/components/pricing/StartingPricesCarousel";
import {
  buildYourOwn,
  oneOffServices,
  popularBundles,
  pricingCategories,
  pricingExplanation,
  pricingFaqs,
  pricingHero,
  pricingNotes,
  simplePricingSections,
  startingPrices,
} from "@/data/pricing";

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState("websites");

  const getCategory = (id) => pricingCategories.find((category) => category.id === id);
  const getSimple = (id) => simplePricingSections.find((section) => section.id === id);

  const categoryMap = [
    { id: "websites", label: "Websites", type: "packages", packages: getCategory("website-packages")?.packages ?? [] },
    { id: "marketing", label: "Marketing", type: "packages", packages: getCategory("marketing-packages")?.packages ?? [] },
    { id: "seo", label: "SEO", type: "packages", packages: getCategory("seo-packages")?.packages ?? [] },
    { id: "ads", label: "Paid Ads", type: "packages", packages: getCategory("paid-ads-packages")?.packages ?? [] },
    { id: "branding", label: "Branding", type: "packages", packages: getCategory("branding-packages")?.packages ?? [] },
    { id: "design", label: "Design", type: "simple", items: getSimple("graphic-design-services")?.items ?? [] },
    { id: "video", label: "Video", type: "simple", items: getSimple("video-editing-services")?.items ?? [] },
    {
      id: "email-domains",
      label: "Email & Domains",
      type: "simple",
      intro: getSimple("business-email-domain-workspace")?.intro,
      items: getSimple("business-email-domain-workspace")?.items ?? [],
    },
    { id: "care", label: "Care Plans", type: "packages", packages: getCategory("website-care-maintenance")?.packages ?? [] },
    { id: "it", label: "IT Support", type: "packages", packages: getCategory("it-support-packages")?.packages ?? [] },
    { id: "security", label: "Security", type: "simple", items: getSimple("cybersecurity-services")?.items ?? [] },
    { id: "hosting", label: "Hosting", type: "simple", items: getSimple("hosting-cloud-backup")?.items ?? [] },
    { id: "automation", label: "Automation", type: "simple", items: getSimple("software-setup-automation")?.items ?? [] },
  ];

  const jumpTo = (id, categoryId) => {
    if (categoryId) setActiveCategory(categoryId);
    if (typeof window !== "undefined") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="bg-white min-h-screen">
      <PricingHero title={pricingHero.title} description={pricingHero.description} />
      <PricingExplanation
        title={pricingExplanation.title}
        content={pricingExplanation.content}
        cards={pricingExplanation.cards}
      />
      <PathSelector
        onSelect={(id) => {
          if (id === "business-setup") {
            jumpTo("category-explorer", "email-domains");
            return;
          }
          const map = {
            "website-packages": "websites",
            "marketing-packages": "marketing",
            "one-off-services": "websites",
          };
          jumpTo(id === "one-off-services" ? "one-off-services" : "category-explorer", map[id]);
        }}
      />
      <StartingPricesCarousel rows={startingPrices} />

      <section id="popular-bundles" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-2">
            Popular Business Bundles
          </h2>
          <p className="text-center text-gray-700 max-w-4xl mx-auto mb-8">
            These bundles are designed for common small business needs. Each bundle
            combines multiple services at a lower price than buying each item separately.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {popularBundles.map((bundle) => (
              <BundleCard key={bundle.name} bundle={bundle} />
            ))}
          </div>
        </div>
      </section>

      <CategoryExplorer
        key={activeCategory}
        categoryMap={categoryMap}
        initialId={activeCategory}
      />

      <BuildYourOwnSection data={buildYourOwn} />
      <OneOffServices section={oneOffServices} />
      <PricingNotes notes={pricingNotes} />
      <PricingFAQ faqs={pricingFaqs} />
      <FinalCTA />
    </main>
  );
}
