import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import dynamic from "next/dynamic";

// Dynamically import components that are not immediately visible
const DynamicPortfolio = dynamic(() => import("@/components/Portfolio"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const DynamicTestimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

const DynamicFAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});

export const metadata = {
  title:
    "Affordable Website Design & Marketing Services for UK Small Businesses | Awais Digital Services (ADS)",
  description:
    "ADS builds affordable, SEO-optimized websites, branding, and digital marketing campaigns for startups and small businesses across the UK. Boost your online presence today with our expert team.",
  keywords: [
    "affordable website design UK",
    "web design for startups",
    "branding for small businesses",
    "UK email marketing agency",
    "Next.js website developers",
    "SEO services for local businesses UK",
    "digital marketing freelancers UK",
  ],
  openGraph: {
    title:
      "Affordable Website Design & Marketing | Awais Digital Services (ADS)",
    description:
      "Awais Digital Services provides expert website development, branding, and SEO for startups and small businesses in the UK. Get a conversion-focused website today.",
    url: "https://awaisdigitalservices.co.uk/",
    siteName: "Awais Digital Services",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://awaisdigitalservices.co.uk/og.jpg", // Replace with your real OG image
        width: 1200,
        height: 630,
        alt: "ADS - Website Design and Marketing UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Website Design & Marketing | ADS UK",
    description:
      "Get expert websites, SEO, branding, and email marketing tailored for UK startups and small businesses. Contact Awais Digital Services today.",
    images: ["https://awaisdigitalservices.co.uk/og.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Home() {
  return (
    <main className="pt-20 md:pt-14">
      <Hero />
      <TrustBar />
      <Services />
      <WhoWeWorkWith />
      <WhyChooseUs />
      <DynamicPortfolio />
      <Pricing />
      <DynamicTestimonials />
      <FinalCTA />
      <DynamicFAQ />
    </main>
  );
}
