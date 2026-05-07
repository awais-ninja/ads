import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoveToTop from "@/components/MoveToTop";
import CookieBanner from "@/components/CookieBanner";
import TrackingScripts from "@/components/TrackingScripts";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata = {
  title: {
    default: "Awais Digital Services (ADS) | Affordable Website Design UK",
    template: "%s | Awais Digital Services (ADS)",
  },
  description:
    "Affordable website design, branding, and digital marketing services for UK startups and small businesses.",
  keywords: [
    "affordable website design UK",
    "small business websites UK",
    "branding services UK",
    "email marketing services UK",
    "web development for startups",
    "digital marketing UK",
  ],
  authors: [{ name: "Awais Digital Services" }],
  creator: "Awais Digital Services",
  publisher: "Awais Digital Services",
  metadataBase: new URL("https://www.awaisdigitalservices.co.uk"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.jpg",
  },
  openGraph: {
    title: "Awais Digital Services (ADS)",
    description:
      "Affordable website design and digital marketing services for startups and small businesses in the UK.",
    url: "https://www.awaisdigitalservices.co.uk",
    siteName: "Awais Digital Services",
    images: [
      {
        url: "https://www.awaisdigitalservices.co.uk/og.jpg",
        width: 1200,
        height: 630,
        alt: "Awais Digital Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awais Digital Services (ADS)",
    description:
      "Affordable website design & digital marketing services in the UK.",
    images: ["https://www.awaisdigitalservices.co.uk/og.jpg"],
    creator: "@awaisdigitalservices",
    site: "@awaisdigitalservices",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <meta
          name="google-site-verification"
          content="L1D89FtS1XdbxAxdZry_a5e4h87Clv7_05wYfxtDOrU"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Organization Schema Markup */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Awais Digital Services (ADS)",
              legalName: "Awais Digital Services",
              url: "https://www.awaisdigitalservices.co.uk",
              logo: "https://www.awaisdigitalservices.co.uk/logo-web.svg",
              image: "https://www.awaisdigitalservices.co.uk/og.jpg",
              description:
                "Digital Marketing & Web Development Agency. Affordable website design, branding, and digital marketing services for UK startups and small businesses.",
              telephone: "+44-7780-059219",
              email: "info@awaisdigitalservices.co.uk",
              address: {
                "@type": "PostalAddress",
                addressCountry: "GB",
                addressRegion: "United Kingdom",
              },
              areaServed: {
                "@type": "Country",
                name: "United Kingdom",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@awaisdigitalservices.co.uk",
                telephone: "+44-7780-059219",
                contactType: "customer service",
                areaServed: "GB",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.facebook.com/MirzaAwais420",
                "https://www.instagram.com/mirza.awais.official",
                "https://www.linkedin.com/company/awais-digital-services",
                "https://twitter.com/awaisdigitalservices",
              ],
            }),
          }}
        />

        {/* Local Business Schema Markup */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Awais Digital Services (ADS)",
              description:
                "Affordable website design, branding, and digital marketing services for UK startups and small businesses",
              url: "https://www.awaisdigitalservices.co.uk",
              logo: "https://www.awaisdigitalservices.co.uk/logo-web.svg",
              image: "https://www.awaisdigitalservices.co.uk/og.jpg",
              telephone: "+44-7780-059219",
              email: "info@awaisdigitalservices.co.uk",
              address: {
                "@type": "PostalAddress",
                addressCountry: "GB",
                addressRegion: "United Kingdom",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "51.5074",
                longitude: "-0.1278",
              },
              serviceArea: {
                "@type": "Country",
                name: "United Kingdom",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Design",
                      description:
                        "Affordable website design for small businesses",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Digital Marketing",
                      description: "SEO and digital marketing services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Branding",
                      description: "Professional branding services",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.facebook.com/MirzaAwais420",
                "https://www.instagram.com/mirza.awais.official",
                "https://www.linkedin.com/company/awais-digital-services",
                "https://twitter.com/awaisdigitalservices",
              ],
            }),
          }}
        />

        {/* Website Schema Markup */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Awais Digital Services",
              url: "https://www.awaisdigitalservices.co.uk",
              description:
                "Affordable website design, branding, and digital marketing services for UK startups and small businesses",
              publisher: {
                "@type": "Organization",
                name: "Awais Digital Services",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.awaisdigitalservices.co.uk/logo-web.svg",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.awaisdigitalservices.co.uk/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

      </head>

      <body
        className={`${inter.className} bg-white text-black`}
        suppressHydrationWarning
      >
        <BreadcrumbSchema />
        <TrackingScripts />
        <Navbar />
        <main className="pt-20">{children}</main>
        <MoveToTop />
        <Footer />
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
