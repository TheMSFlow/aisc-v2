import { notFound } from "next/navigation";
import CategoryPage from "@/components/awakening-blog/CategoryPage";
import { getPostsByTaxonomy } from "@/lib/blog/posts";
import { ALL_INDUSTRY_IDS, getIndustry } from "@/lib/blog/taxonomy";

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_INDUSTRY_IDS.map((industry) => ({ industry }));
}

export async function generateMetadata({ params }) {
  const { industry } = await params;
  const entry = getIndustry(industry);
  if (!entry) return {};

  return {
    title: entry.seo.title,
    description: entry.seo.description,
    alternates: {
      canonical: `/awakening/industry/${industry}`,
    },
    openGraph: {
      title: entry.seo.title,
      description: entry.seo.description,
      url: `/awakening/industry/${industry}`,
      type: "website",
    },
  };
}

export default async function IndustryPage({ params }) {
  const { industry } = await params;
  const entry = getIndustry(industry);
  if (!entry) notFound();

  return (
    <CategoryPage
      entry={entry}
      dimension="industries"
      path={`/awakening/industry/${industry}`}
      eyebrow="Briefings by world"
      posts={getPostsByTaxonomy("industries", industry)}
    />
  );
}
