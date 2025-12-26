import PricingPage from "./pricing";

export const metadata = {
  title:
    "Pricing | Web Design, SEO & Marketing UK | Awais Digital Services (ADS)",
  description:
    "View transparent, affordable pricing for websites, SEO, branding, and digital marketing. No hidden charges. Built for UK startups and small businesses. Free consultation available.",
  keywords: [
    "web design pricing UK",
    "affordable website packages UK",
    "SEO pricing UK",
    "branding packages for small business",
    "UK digital marketing cost",
    "Next.js agency pricing",
    "freelance website design UK",
  ],
  openGraph: {
    title: "Transparent Pricing | Awais Digital Services UK",
    description:
      "Explore cost-effective website, SEO, and branding packages from ADS. Tailored for startups, small businesses, and local UK clients. View pricing plans now.",
    url: "https://www.awaisdigitalservices.co.uk/pricing",
    siteName: "Awais Digital Services",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.awaisdigitalservices.co.uk/og.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Pricing - Awais Digital Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans | Affordable Website Design & Marketing UK",
    description:
      "No hidden costs. Just clear, honest pricing for websites, SEO, branding & more. Built for UK startups & businesses.",
    images: ["https://www.awaisdigitalservices.co.uk/og.jpg"],
  },
};

const page = () => {
  return (
    <main className="px-4 sm:px-0">
      <PricingPage />
    </main>
  );
};

export default page;
