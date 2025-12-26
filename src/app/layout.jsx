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
  metadataBase: new URL("https://www.awaisdigitalservices.co.uk"),
  alternates: {
    canonical: "https://www.awaisdigitalservices.co.uk",
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
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://client.crisp.chat" />

        {/* Google Tag Manager (gtag.js) - Load but don't track until consent */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                // Set consent to denied by default (GDPR compliant)
                gtag('consent', 'default', {
                  'analytics_storage': 'denied',
                  'ad_storage': 'denied',
                  'wait_for_update': 500
                });
                
                // Initialize GA config (required for GA to show as active)
                // Data collection is still blocked until consent is granted
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  'anonymize_ip': true
                });
                
                // Check for existing consent on page load with delay
                setTimeout(() => {
                  const gtagConsent = localStorage.getItem('cookie-consent');
                  if (gtagConsent) {
                    try {
                      const consent = JSON.parse(gtagConsent);
                      if (consent.analytics) {
                        // Enable analytics tracking when consent is granted
                        gtag('consent', 'update', {
                          'analytics_storage': 'granted'
                        });
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
          </>
        )}

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
                "Affordable website design, branding, and digital marketing services for UK startups and small businesses",
              telephone: "+44-7780-059219",
              email: "info@awaisdigitalservices.co.uk",
              address: {
                "@type": "PostalAddress",
                addressCountry: "GB",
                addressRegion: "United Kingdom",
              },
              sameAs: [
                "https://www.facebook.com/MirzaAwais420",
                "https://www.instagram.com/mirza.awais.official",
                "https://www.linkedin.com/company/awais-digital-services",
                "https://www.youtube.com/@awaisdigitalservices",
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
                "https://www.youtube.com/@awaisdigitalservices",
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

        {/* Facebook Pixel - Load but don't track until consent */}
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
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
                      fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
                      fbq('track', 'PageView');
                    }
                  } catch (error) {
                    console.error('Error parsing saved consent for Facebook Pixel:', error);
                  }
                }
              }, 1000);
            `}
          </Script>
        )}

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
