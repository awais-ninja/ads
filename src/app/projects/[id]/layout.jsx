import { projects } from "@/data/projects";

const BASE_URL = "https://www.awaisdigitalservices.co.uk";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };

  const title = `${project.title} | Project by Awais Digital Services`;
  const description = project.shortDescription || project.heroTagline;
  const ogImage = project.thumbnail.startsWith("http")
    ? project.thumbnail
    : `${BASE_URL}${project.thumbnail}`;

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/projects/${project.id}` },
    openGraph: {
      title: `${project.title} | ADS Portfolio`,
      description,
      url: `${BASE_URL}/projects/${project.id}`,
      siteName: "Awais Digital Services",
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Awais Digital Services`,
      description,
      images: [ogImage],
    },
  };
}

export default function ProjectIdLayout({ children }) {
  return children;
}
