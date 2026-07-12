import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/blog/format";
import { getType } from "@/lib/blog/taxonomy";

/**
 * Hub masthead feature. Designed for a dark-blue full-bleed section.
 */
export default function FeaturedArticle({ post }) {
  const type = getType(post.type);

  return (
    <div className="grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[7fr_5fr]">
      <div className="flex flex-col">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
          Featured {type.shortLabel}
        </p>
        <Link href={`/awakening/${post.slug}`} className="group mt-4 block">
          <h2 className="font-ptsans text-3xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-white/60">
            {post.description}
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-lilac transition-colors group-hover:text-white">
            Read the briefing
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </p>
        </Link>
        <p className="mt-auto pt-8 text-[11px] uppercase tracking-[0.2em] text-white/40">
          {formatDate(post.date)} &middot; {post.readingTime} min read
        </p>
      </div>
      <Link
        href={`/awakening/${post.slug}`}
        className="group hidden overflow-hidden border border-white/10 lg:block"
      >
        <img
          src={post.image}
          alt={post.imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </Link>
    </div>
  );
}
