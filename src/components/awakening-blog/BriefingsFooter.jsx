import Link from "next/link";
import ArticleCta from "./ArticleCta";
import { AUDIENCES } from "@/lib/blog/taxonomy";

function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-lilac/70 transition-colors hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}

export default function BriefingsFooter() {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <ArticleCta unframed />

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
              Briefings by seat
            </p>
            <ul className="flex flex-col gap-2">
              {Object.values(AUDIENCES).map((audience) => (
                <FooterLink key={audience.id} href={`/awakening/for/${audience.id}`}>
                  For {audience.label}
                </FooterLink>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
              The challenge
            </p>
            <ul className="flex flex-col gap-2">
              <FooterLink href="/">AI Stakeholder Challenge</FooterLink>
              <FooterLink href="/#pricing">Pricing</FooterLink>
              <FooterLink href="/personalize">Find your path</FooterLink>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
              Follow
            </p>
            <ul className="flex flex-col gap-2">
              <FooterLink href="/awakening/feed.xml">RSS feed</FooterLink>
              <FooterLink href="/awakening">All briefings</FooterLink>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-xs text-lilac/50">
          © {new Date().getFullYear()} Michael Steve Clarity Studio. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
