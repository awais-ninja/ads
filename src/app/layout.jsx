import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookiesConsent from "@/components/CookiesConsent";
import MoveToTop from "@/components/MoveToTop";
import Script from "next/script";
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
    default:
      "Home | Awais Digital Services (ADS) | Affordable Website Design & Digital Marketing UK",
    template: "%s | Awais Digital Services (ADS)",
  },
  description:
    "Affordable website design, branding, and email marketing services for startups and small businesses across the UK.",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.jpg",
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
    creator: "@yourTwitterHandle",
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
        <Script id="consent-default" strategy="beforeInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
        `}
        </Script>
        <Script id="crisp-widget" strategy="afterInteractive">
          {`
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="${process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID}";
            (function(){
              const d=document;
              const s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GTM-54BRWNG3"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${inter.className} bg-white text-black`}>
        <Navbar />
        <main>
          {children}
          <CookiesConsent />
        </main>
        <MoveToTop />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
