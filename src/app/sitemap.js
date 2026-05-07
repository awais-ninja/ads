import { projects } from "@/data/projects";
import { getAllSeoPaths } from "@/data/seoLandingPages";
import { getIndustryPaths } from "@/data/industryLandingPages";

const BASE_URL = "https://www.awaisdigitalservices.co.uk";

const STATIC_INDUSTRY_PATHS = [
  "/seo/website-design-accountants",
  "/seo/website-design-construction",
  "/seo/website-design-consultants",
  "/seo/website-design-startups",
];

/** @type {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  const staticRoutes = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/pricing`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/seo/free-website-audit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/seo`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/cookie-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms-and-conditions`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const seoRoutes = getAllSeoPaths().map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const industryRoutes = [...STATIC_INDUSTRY_PATHS, ...getIndustryPaths()].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...seoRoutes, ...industryRoutes, ...projectRoutes];
}
