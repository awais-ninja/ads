import { seoPages, getSeoPageMetadata, getSeoPageSchema } from "@/data/seoLandingPages";
import SEOLandingPage from "@/components/SEOLandingPage";

const slug = "website-design-small-business-uk";
const page = seoPages[slug];
const path = page.path;

export const metadata = getSeoPageMetadata(page, path);

export default function Page() {
  return (
    <SEOLandingPage
      page={page}
      path={path}
      schema={getSeoPageSchema(page, path)}
    />
  );
}
