import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog/posts";
import { formatDate } from "@/lib/blog/format";
import { getType } from "@/lib/blog/taxonomy";

function FooterLink({ href, children, external = false }) {
  const className =
    "text-sm font-light text-lilac/70 transition-colors hover:text-white";
  return (
    <li>
      {external ? (
        <a
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <Link href={href} className={className}>
          {children}
        </Link>
      )}
    </li>
  );
}

export default function Footer() {
  const briefings = getAllPosts().slice(0, 3);

  return (
    <footer className="border-t border-white/10 bg-dark-blue text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Zone 1 — Latest briefings */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
              The Awakening
            </p>
            <p className="mt-2 font-ptsans text-2xl font-bold uppercase leading-none tracking-tight sm:text-3xl">
              Briefings for the AI era
            </p>
          </div>
          <Link
            href="/awakening"
            className="group inline-flex items-center gap-2 text-sm text-lilac transition-colors hover:text-white"
          >
            View all briefings
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-8 grid border-y border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-white/10">
          {briefings.map((post, i) => (
            <Link
              key={post.slug}
              href={`/awakening/${post.slug}`}
              className="group flex flex-col gap-3 border-b border-white/10 py-6 last:border-b-0 sm:border-b-0 sm:px-7 sm:first:pl-0 sm:last:pr-0"
            >
              <div className="h-44 w-full overflow-hidden border border-white/10">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
                <span className="text-msaccent">0{i + 1}</span>
                {"  /  "}
                {getType(post.type)?.shortLabel}
              </p>
              <p className="font-ptsans text-lg font-bold uppercase leading-tight tracking-tight text-white/90 transition-colors group-hover:text-white">
                {post.title}
              </p>
              <p className="mt-auto text-[11px] font-light uppercase tracking-[0.2em] text-white/40">
                {formatDate(post.date)} &middot; {post.readingTime} min read
              </p>
            </Link>
          ))}
        </div>

        {/* Zone 2 — Brand + link columns */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src="/aisc.svg" alt="AISC" className="h-7 w-auto" />
            <p className="mt-3 font-ptsans text-lg tracking-wider text-white/60">
              AI STAKEHOLDER CHALLENGE
            </p>
            <p className="mt-3 max-w-xs text-sm font-light leading-relaxed text-lilac/60">
              A 7-day leadership challenge for the seat where the decision
              stops.
            </p>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
              Program
            </p>
            <ul className="flex flex-col gap-2">
              <FooterLink href="/#curriculum">Curriculum</FooterLink>
              <FooterLink href="/#pricing">Pricing</FooterLink>
              <FooterLink href="/#faq">FAQ</FooterLink>
              <FooterLink href="/#coaching">Coaching</FooterLink>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
              Explore
            </p>
            <ul className="flex flex-col gap-2">
              <FooterLink href="/awakening">The Awakening</FooterLink>
              <FooterLink href="/personalize">Find your path</FooterLink>
              <FooterLink href="/awakening/feed.xml">RSS feed</FooterLink>
              <FooterLink
                href="https://intelligence.michaelsteve.com/form/inquiry?src=AISC"
                external
              >
                Contact
              </FooterLink>
            </ul>
          </div>
        </div>

        {/* Zone 3 — Legal */}
        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-lilac/50">
          © {new Date().getFullYear()} Michael Steve Clarity Studio. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
