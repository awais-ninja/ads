"use client";

import { useState } from "react";
import Script from "next/script";

export default function PricingFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section id="pricing-faqs" className="py-12 px-4">
      <Script
        id="pricing-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-6">FAQs</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={faq.question}
                className="border border-gray-200 rounded-xl bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left px-4 py-3 font-semibold text-navy flex items-center justify-between"
                >
                  <span>{faq.question}</span>
                  <span className="text-red">{isOpen ? "-" : "+"}</span>
                </button>
                {isOpen ? (
                  <p className="px-4 pb-4 text-sm text-gray-700">{faq.answer}</p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

