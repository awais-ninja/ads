import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoveToTop from "@/components/MoveToTop";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import ClientSideEffects from "@/components/ClientSideEffects";

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

        {/* Google Tag Manager (gtag.js) - Load but don't track until consent */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X79SQJVGJ5"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Initialize with denied consent by default (GDPR compliant)
            // DO NOT call gtag('config') until consent is granted
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'wait_for_update': 500
            });
            
            // Check for existing consent on page load with delay
            setTimeout(() => {
              const gtagConsent = localStorage.getItem('cookie-consent');
              if (gtagConsent) {
                try {
                  const consent = JSON.parse(gtagConsent);
                  if (consent.analytics) {
                    // Only initialize GA if analytics consent is granted
                    gtag('consent', 'update', {
                      'analytics_storage': 'granted'
                    });
                    gtag('config', 'G-X79SQJVGJ5');
                  }
                  if (consent.marketing) {
                    gtag('consent', 'update', {
                      'ad_storage': 'granted'
                    });
                  }
                } catch (error) {
                  console.error('Error parsing saved consent for GTM:', error);
                }
              }
            }, 1000);
          `}
        </Script>

        {/* Crisp Chat Integration - Load but don't track until consent */}
        <Script id="crisp-widget" strategy="afterInteractive">
          {`
            window.$crisp=[]; 
            window.CRISP_WEBSITE_ID="${process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID}";
            window.$crisp.push(['safe', false]);
            
            // Check for existing consent on page load with delay
            setTimeout(() => {
              const crispConsent = localStorage.getItem('cookie-consent');
              if (crispConsent) {
                try {
                  const consent = JSON.parse(crispConsent);
                  if (consent.functional) {
                    window.$crisp.push(['safe', true]);
                  }
                } catch (error) {
                  console.error('Error parsing saved consent for Crisp:', error);
                }
              }
            }, 1000);
            
            (function(){
              const d=document;
              const s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        </Script>
      </head>

      <body className={`${inter.className} bg-white text-black`}>
        <ClientSideEffects />
        <Navbar />
        <main>{children}</main>
        <MoveToTop />
        <Footer />
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
