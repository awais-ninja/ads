import ServicesContent from "./ServicesContent";

export const metadata = {
  title:
    "Services | Web Design, Branding & Marketing in the UK | Awais Digital Services",
  description:
    "Explore all our digital services including website design, branding, SEO, email marketing, mobile apps, and local SEO tailored for UK businesses and startups.",
  keywords:
    "website design UK, branding services UK, SEO marketing UK, digital agency UK, email marketing UK, small business web design, mobile app development UK",
  openGraph: {
    title: "Explore Our Digital Services | Awais Digital Services (ADS)",
    description:
      "We provide website design, eCommerce, branding, SEO, mobile apps, email marketing, and local SEO to help your business grow online in the UK.",
    url: "https://awaisdigitalservices.co.uk/services",
    siteName: "Awais Digital Services",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "https://awaisdigitalservices.co.uk/og.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Services by Awais Digital Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Website, SEO & Branding UK | Awais Digital Services",
    description:
      "Comprehensive digital services for small businesses and startups in the UK. Web design, SEO, mobile apps, branding & more — trusted by UK entrepreneurs.",
    images: ["https://awaisdigitalservices.co.uk/og.jpg"],
  },
};

export default function Page() {
  return <ServicesContent />;
}
