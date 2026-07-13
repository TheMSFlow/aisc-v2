"use client";

import { Sparkles } from "lucide-react";
import Button from "../global/Button";
import { trackEvent } from "@/lib/analytics";

/**
 * The briefing-to-challenge CTA, rendered as a white card. Used in the blog
 * footer (BriefingsFooter) and available to MDX article bodies.
 * `className` overrides the outer spacing; `placement` tags the analytics event.
 */
export default function ArticleCta({
  className = "my-14",
  placement = "article_body",
}) {
  return (
    <aside
      className={`rounded-3xl border border-dark-blue/10 bg-white px-6 py-10 shadow-[0_1px_2px_rgba(0,3,76,0.06),0_16px_50px_rgba(0,3,76,0.10)] sm:px-10 sm:py-12 ${className}`}
    >
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-dark-blue/40">
        The AI Stakeholder Challenge
      </p>
      <h2 className="max-w-2xl font-ptsans text-2xl font-bold uppercase leading-tight tracking-tight text-dark-blue sm:text-3xl">
        Awareness is where it starts. It is not where it ends.
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-dark-blue/60">
        The AI Stakeholder Challenge is 7 days and 4 live sessions that move you
        from reading briefings to leading with them: clarity, governance, and a
        6-month roadmap built around your seat.
      </p>
      <div className="mt-7 flex flex-wrap items-center gap-4">
        <Button
          to="/personalize"
          variant="dark"
          iconLeft={Sparkles}
          onClick={() =>
            trackEvent("cta_click", { placement, destination: "personalize" })
          }
        >
          Find your path
        </Button>
        <Button
          to="/#pricing"
          variant="secondary-light"
          onClick={() =>
            trackEvent("cta_click", { placement, destination: "pricing" })
          }
        >
          Secure Your Spot
        </Button>
      </div>
    </aside>
  );
}
