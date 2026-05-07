"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

const BASE_URL = "https://www.awaisdigitalservices.co.uk";

const PATH_LABELS = {
  "/": "Home",
  "/services": "Services",
  "/pricing": "Pricing",
  "/projects": "Projects",
  "/contact": "Contact",
  "/privacy-policy": "Privacy Policy",
  "/cookie-policy": "Cookie Policy",
  "/terms-and-conditions": "Terms and Conditions",
  "/seo": "SEO Landing Pages",
  "/seo/free-website-audit": "Free Website Audit",
};

/**
 * Renders BreadcrumbList JSON-LD based on current path.
 * Used in root layout so every page gets correct breadcrumb structured data.
 */
export default function BreadcrumbSchema() {
  const pathname = usePathname();
  if (!pathname) return null;

  const segments = pathname.split("/").filter(Boolean);
  const items = [{ name: "Home", url: BASE_URL }];

  let currentPath = "";
  for (let i = 0; i < segments.length; i++) {
    currentPath += `/${segments[i]}`;
    const label =
      PATH_LABELS[currentPath] ||
      segments[i]
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    items.push({ name: label, url: `${BASE_URL}${currentPath}` });
  }

  // If we're on home, we still want one item (Home)
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
    />
  );
}
