import Script from "next/script";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Every project is different, but most websites are completed within 2 to 4 weeks depending on the size and complexity. We always provide a clear timeline before starting.",
  },
  {
    q: "What do I need to get started?",
    a: "We'll need a short brief about your business, your goals, any text or images you want included, and examples of websites you like. Don't worry — we'll guide you through the whole process.",
  },
  {
    q: "Do you offer website redesign services?",
    a: "Yes. If you already have a website that needs a fresh look or better performance, we offer complete website redesign services to upgrade your online presence.",
  },
  {
    q: "Is the website mobile-friendly?",
    a: "Absolutely. Every website we build is fully responsive and optimized for all screen sizes, including smartphones and tablets.",
  },
  {
    q: "Do you provide domain name and hosting?",
    a: "We can assist you in purchasing a domain and setting up reliable hosting. If you already have them, we'll work with your existing setup.",
  },
  {
    q: "Will my website be SEO optimized?",
    a: "Yes. All websites we deliver include basic on-page SEO setup such as meta titles, descriptions, mobile optimization, and clean URL structure to help you rank better on search engines.",
  },
  {
    q: "What if I need updates to my website later?",
    a: "We offer ongoing Website Care Plans, so you can keep your site updated, secure, and running smoothly. You can also request updates on a one-off basis if preferred.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. We offer flexible payment options for larger projects, usually splitting the payment into two or three milestones for easier budgeting.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with startups, local businesses, restaurants, fitness brands, coaches, e-commerce stores, service providers, and more. No matter your industry, we tailor our services to fit your needs.",
  },
  {
    q: "How do I get started?",
    a: "Simply contact us through WhatsApp (+44 7443 098117), email, or our Contact Form. We'll schedule a free consultation to discuss your project and provide a custom quote.",
  },
];

export default function FAQSchema() {
  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text:
                typeof faq.a === "string"
                  ? faq.a
                  : "Simply contact us through WhatsApp (+44 7443 098117), email, or our Contact Form. We'll schedule a free consultation to discuss your project and provide a custom quote.",
            },
          })),
        }),
      }}
    />
  );
}
