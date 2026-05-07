import { notFound } from "next/navigation";
import {
  getIndustryPage,
  getAllIndustrySlugs,
  getIndustryPageMetadata,
  getIndustryPageSchema,
} from "@/data/industryLandingPages";
import SEOLandingPage from "@/components/SEOLandingPage";

const SEGMENT_PREFIX = "website-design-";

function slugFromParam(industryParam) {
  if (!industryParam || typeof industryParam !== "string") return null;
  return industryParam.startsWith(SEGMENT_PREFIX)
    ? industryParam.slice(SEGMENT_PREFIX.length)
    : industryParam;
}

export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({
    industry: `${SEGMENT_PREFIX}${slug}`,
  }));
}

export async function generateMetadata({ params }) {
  const { industry } = await params;
  const slug = slugFromParam(industry);
  const page = slug ? getIndustryPage(slug) : null;
  if (!page) return { title: "Not Found" };
  return getIndustryPageMetadata(page, page.path);
}

export default async function IndustryPage({ params }) {
  const { industry } = await params;
  const slug = slugFromParam(industry);
  const page = slug ? getIndustryPage(slug) : null;
  if (!page) notFound();
  const schema = getIndustryPageSchema(page, page.path);
  return (
    <SEOLandingPage page={page} path={page.path} schema={schema} />
  );
}
