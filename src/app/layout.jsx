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
              url: "https://awaisdigitalservices.co.uk",
              logo: "https://awaisdigitalservices.co.uk/logo-web.svg",
              image: "https://awaisdigitalservices.co.uk/og.jpg",
              telephone: "+44-XXX-XXX-XXXX",
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
                "https://facebook.com/MirzaAwais420",
                "https://instagram.com/mirza.awais.official",
                "https://linkedin.com/company/awais-digital-services",
                "https://youtube.com/@awaisdigitalservices",
                "https://twitter.com/awaisdigitalservices",
              ],
            }),
          }}
        />

        {/* Facebook Pixel - Load but don't track until consent */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            
            // Initialize with denied consent by default (GDPR compliant)
            fbq('consent', 'revoke');
            
            // Check for existing consent on page load with delay
            setTimeout(() => {
              const pixelConsent = localStorage.getItem('cookie-consent');
              if (pixelConsent) {
                try {
                  const consent = JSON.parse(pixelConsent);
                  if (consent.marketing) {
                    fbq('consent', 'grant');
                    fbq('init', 'YOUR_PIXEL_ID'); // Replace with your actual Facebook Pixel ID
                    fbq('track', 'PageView');
                  }
                } catch (error) {
                  console.error('Error parsing saved consent for Facebook Pixel:', error);
                }
              }
            }, 1000);
          `}
        </Script>

        {/* Performance Monitoring */}
        <Script id="performance-monitoring" strategy="afterInteractive">
          {`
            // Monitor Core Web Vitals
            if ('PerformanceObserver' in window) {
              // LCP (Largest Contentful Paint)
              const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                if (lastEntry) {
                  console.log('LCP:', lastEntry.startTime);
                  // Send to analytics if consent granted
                  if (window.gtag && localStorage.getItem('cookie-consent')) {
                    try {
                      const consent = JSON.parse(localStorage.getItem('cookie-consent'));
                      if (consent.analytics) {
                        gtag('event', 'LCP', { value: Math.round(lastEntry.startTime) });
                      }
                    } catch (error) {
                      console.error('Error sending LCP to analytics:', error);
                    }
                  }
                }
              });
              lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

              // FID (First Input Delay)
              const fidObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry) => {
                  console.log('FID:', entry.processingStart - entry.startTime);
                  // Send to analytics if consent granted
                  if (window.gtag && localStorage.getItem('cookie-consent')) {
                    try {
                      const consent = JSON.parse(localStorage.getItem('cookie-consent'));
                      if (consent.analytics) {
                        gtag('event', 'FID', { value: Math.round(entry.processingStart - entry.startTime) });
                      }
                    } catch (error) {
                      console.error('Error sending FID to analytics:', error);
                    }
                  }
                });
              });
              fidObserver.observe({ entryTypes: ['first-input'] });

              // CLS (Cumulative Layout Shift)
              const clsObserver = new PerformanceObserver((list) => {
                let clsValue = 0;
                const entries = list.getEntries();
                entries.forEach((entry) => {
                  if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                  }
                });
                console.log('CLS:', clsValue);
                // Send to analytics if consent granted
                if (window.gtag && localStorage.getItem('cookie-consent')) {
                  try {
                    const consent = JSON.parse(localStorage.getItem('cookie-consent'));
                    if (consent.analytics) {
                      gtag('event', 'CLS', { value: Math.round(clsValue * 1000) / 1000 });
                    }
                  } catch (error) {
                    console.error('Error sending CLS to analytics:', error);
                  }
                }
              });
              clsObserver.observe({ entryTypes: ['layout-shift'] });
            }

            // Monitor page load performance
            window.addEventListener('load', () => {
              setTimeout(() => {
                const navigation = performance.getEntriesByType('navigation')[0];
                if (navigation) {
                  const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
                  const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
                  
                  console.log('Page Load Time:', loadTime);
                  console.log('DOM Content Loaded:', domContentLoaded);
                  
                  // Send to analytics if consent granted
                  if (window.gtag && localStorage.getItem('cookie-consent')) {
                    try {
                      const consent = JSON.parse(localStorage.getItem('cookie-consent'));
                      if (consent.analytics) {
                        gtag('event', 'page_load_time', { value: Math.round(loadTime) });
                        gtag('event', 'dom_content_loaded', { value: Math.round(domContentLoaded) });
                      }
                    } catch (error) {
                      console.error('Error sending performance metrics to analytics:', error);
                    }
                  }
                }
              }, 0);
            });
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
