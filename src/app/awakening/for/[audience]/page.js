import { notFound } from "next/navigation";
import CategoryPage from "@/components/awakening-blog/CategoryPage";
import { getPostsByTaxonomy } from "@/lib/blog/posts";
import { ALL_AUDIENCE_IDS, getAudience } from "@/lib/blog/taxonomy";

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_AUDIENCE_IDS.map((audience) => ({ audience }));
}

export async function generateMetadata({ params }) {
  const { audience } = await params;
  const entry = getAudience(audience);
  if (!entry) return {};

  return {
    title: entry.seo.title,
    description: entry.seo.description,
    alternates: {
      canonical: `/awakening/for/${audience}`,
    },
    openGraph: {
      title: entry.seo.title,
      description: entry.seo.description,
      url: `/awakening/for/${audience}`,
      type: "website",
    },
  };
}

export default async function AudiencePage({ params }) {
  const { audience } = await params;
  const entry = getAudience(audience);
  if (!entry) notFound();

  return (
    <CategoryPage
      entry={entry}
      dimension="audiences"
      path={`/awakening/for/${audience}`}
      eyebrow="Briefings by seat"
      posts={getPostsByTaxonomy("audiences", audience)}
    />
  );
}
