import Section from "@/components/layout/Section";
import FeaturedArticle from "@/components/awakening-blog/FeaturedArticle";
import PostGrid from "@/components/awakening-blog/PostGrid";
import TaxonomyNav from "@/components/awakening-blog/TaxonomyNav";
import { getAllPosts, getFeaturedPost } from "@/lib/blog/posts";
import { blogJsonLd, JsonLd } from "@/lib/blog/jsonld";

export const metadata = {
  title: "The Awakening | AI Leadership Briefings",
  description:
    "Briefings, guides, and insights on AI leadership: clarity for Chiefs, frameworks for Leaders of Leaders, and a head start for Emerging Leaders.",
  alternates: {
    canonical: "/awakening",
  },
  openGraph: {
    title: "The Awakening | AI Leadership Briefings",
    description:
      "Briefings, guides, and insights on AI leadership for Chiefs, Leaders of Leaders, and Emerging Leaders.",
    url: "/awakening",
    type: "website",
  },
};

export default function AwakeningHub() {
  const posts = getAllPosts();
  const featured = getFeaturedPost();
  const rest = featured ? posts.filter((p) => p.slug !== featured.slug) : posts;

  return (
    <>
      <JsonLd data={blogJsonLd(posts)} />

      <Section className="bg-dark-blue" spacing="default" width="wide">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
          Briefings for the AI era
        </p>
        <h1 className="mt-4 font-ptsans text-5xl font-bold uppercase leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
          The Awakening
        </h1>
        <p className="mt-5 max-w-xl text-lg font-light leading-relaxed text-white/60">
          AI made intelligence abundant. It made judgment scarce. These
          briefings exist so the leaders who carry the decision see clearly,
          govern early, and claim territory first.
        </p>

        {featured && (
          <div className="mt-14">
            <FeaturedArticle post={featured} />
          </div>
        )}
      </Section>

      <Section width="wide" spacing="compact" className="border-b border-dark-blue/10">
        <TaxonomyNav />
      </Section>

      <Section width="wide" spacing="default">
        <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.35em] text-dark-blue/40">
          All briefings
        </p>
        <PostGrid posts={rest.length ? rest : posts} />
      </Section>
    </>
  );
}
