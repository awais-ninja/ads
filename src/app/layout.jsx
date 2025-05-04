import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookiesConsent from "@/components/CookiesConsent";
import MoveToTop from "@/components/MoveToTop";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// ✅ Font setup with fallbacks and CSS variables
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

// ✅ SEO Metadata
export const metadata = {
  title: {
    default:
      "Awais Digital Services (ADS) | Affordable Website Design & Digital Marketing UK",
    template: "%s | Awais Digital Services (ADS)",
  },
  description:
    "Affordable website design, branding, and email marketing services for startups and small businesses across the UK. Grow your business online with Awais Digital Services (ADS).",
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
  metadataBase: new URL("https://awaisdigitalservices.co.uk"),
  alternates: {
    canonical: "https://awaisdigitalservices.co.uk",
  },
  openGraph: {
    title: "Awais Digital Services (ADS)",
    description:
      "Affordable website design and digital marketing services for startups and small businesses in the UK.",
    url: "https://awaisdigitalservices.co.uk",
    siteName: "Awais Digital Services",
    images: [
      {
        url: "https://awaisdigitalservices.co.uk/og.jpg",
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
    images: ["https://awaisdigitalservices.co.uk/og.jpg"],
    creator: "@yourTwitterHandle", // Optional
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-dark-charcoal text-charcoal dark:text-soft-white`}
      >
        <Navbar />
        <main>
          {children}
          <CookiesConsent />
        </main>
        <MoveToTop />
        <Footer />
        <Analytics />
        <SpeedInsights />

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_ID');
          `}
        </Script>
      </body>
    </html>
  );
}
