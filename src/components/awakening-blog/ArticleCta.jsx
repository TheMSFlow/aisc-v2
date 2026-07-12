"use client";

import { Sparkles } from "lucide-react";
import Button from "../global/Button";
import { trackEvent } from "@/lib/analytics";

/**
 * The briefing-to-challenge CTA. Default renders as a framed dark panel for
 * placement inside light article bodies; `unframed` drops the panel chrome
 * for use on surfaces that are already dark (e.g. BriefingsFooter).
 */
export default function ArticleCta({ unframed = false }) {
  const placement = unframed ? "briefings_footer" : "article_body";
  return (
    <aside
      className={
        unframed
          ? ""
          : "my-14 rounded-(--radius) bg-dark-blue px-6 py-10 sm:px-10"
      }
    >
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
        The AI Stakeholder Challenge
      </p>
      <h2 className="font-ptsans text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl">
        Awareness is where it starts. It is not where it ends.
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
        The AI Stakeholder Challenge is 7 days and 4 live sessions that move
        you from reading briefings to leading with them: clarity, governance,
        and a 6-month roadmap built around your seat.
      </p>
      <div className="mt-7 flex flex-wrap items-center gap-4">
        <Button
          to="/personalize"
          variant="primary"
          iconLeft={Sparkles}
          onClick={() =>
            trackEvent("cta_click", { placement, destination: "personalize" })
          }
        >
          Find your path
        </Button>
        <Button
          to="/#pricing"
          variant="secondary"
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
