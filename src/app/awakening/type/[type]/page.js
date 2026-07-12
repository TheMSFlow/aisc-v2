import { notFound } from "next/navigation";
import CategoryPage from "@/components/awakening-blog/CategoryPage";
import { getPostsByTaxonomy } from "@/lib/blog/posts";
import { ALL_TYPE_IDS, getType } from "@/lib/blog/taxonomy";

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_TYPE_IDS.map((type) => ({ type }));
}

export async function generateMetadata({ params }) {
  const { type } = await params;
  const entry = getType(type);
  if (!entry) return {};

  return {
    title: entry.seo.title,
    description: entry.seo.description,
    alternates: {
      canonical: `/awakening/type/${type}`,
    },
    openGraph: {
      title: entry.seo.title,
      description: entry.seo.description,
      url: `/awakening/type/${type}`,
      type: "website",
    },
  };
}

export default async function TypePage({ params }) {
  const { type } = await params;
  const entry = getType(type);
  if (!entry) notFound();

  return (
    <CategoryPage
      entry={entry}
      dimension="type"
      path={`/awakening/type/${type}`}
      eyebrow="Briefings by format"
      posts={getPostsByTaxonomy("type", type)}
    />
  );
}
