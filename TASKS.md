# Setup Tasks — The Awakening blog + pending features

> Single source of truth for what remains before the blog system (and personalize) is fully operational.
> Maintained by the `tasks` agent. Tasks are in **exact execution order** — do the first unchecked one.
> Owner key: **[You]** = only Michael can do it · **[Claude]** = ask Claude to do it · **[You→Claude]** = you provide something, then Claude builds.
>
> Last updated: 2026-07-13

## Phase 0 — This week (time-sensitive or blocking everything else)

- [ ] 3. **[You→Claude] Merge `dev` → `main` and deploy.**
  The entire blog exists only on the `dev` branch. Nothing else on this list matters publicly until it ships. Ask Claude to prepare the merge/PR when ready.

- [ ] 6. **[You] Google Search Console.** *(blocked by #3)*
  Verify the domain, submit `https://<domain>/sitemap.xml`. This is the "what are people actually searching" data source — it needs months of accumulation, which is why it starts now and not at post 100.

## Phase 1 — Foundations for leads (next 2–3 weeks)

- [ ] 7. **[You→Claude] Finish personalize email with Resend.**
  Still pending from the original personalize build. Create a Resend account + API key (`RESEND_API_KEY`), then ask Claude to build the send path (email the personalized recommendation to the user).

- [ ] 8. **[You→Claude] Blog email capture — the "briefing list".** *(after #7, reuses Resend)*
  A subscribe block on the blog (footer and/or end of articles). A first-time SEO visitor rarely buys a $99–$1,099 program on that visit; the list is where unconverted readers go instead of vanishing.

- [ ] 9. **[You] Establish the distribution habit.**
  Decide the per-briefing routine: each published piece becomes at least one LinkedIn post from Michael + one email to the list. For months 1–6, owned channels — not SEO — are where visitors come from.

## Phase 2 — Production run (ongoing from now)

- [ ] 10. **[Claude] Publish the banked pipeline at 3/week (Mon/Wed/Fri).**
  Drafting DONE 2026-07-12: all 25 briefings banked as `draft: true`. First drip SHIPPED Mon 2026-07-13 (`what-ai-actually-is-for-the-seat-where-decisions-stop`) → now **8 published + 24 banked = 32 in ledger**. Remaining work is the publish routine per post: Michael reviews → flip `draft: false` → set `date` to actual publish day → ledger row to Published → clean `npm run blog:links --write` → distribute per #9. Next drip: Wed 2026-07-15. Bank lasts ~8 weeks; refill comes from cohort exhaust (#14) and Search Console (#12), never invented topics.

- [ ] 11. **[You] Log the Jul 30 – Aug 5 cohort into the capture doc.** *(uses #1)*
  Every live session. Repeat for every future cohort — this becomes standing practice, not a one-off.

## Phase 3 — Data-informed expansion (at ~40 published briefings)

- [ ] 12. **[You→Claude] Data checkpoint + keyword-research agent.**
  With months of Search Console + GA conversion data, ask Claude to build the keyword-research agent guide (`agent-guides/blog/KEYWORD_GUIDE.md` + workflow): mine Search Console queries, find winnable long-tail seat/world intents, feed the ledger pipeline.

- [ ] 13. **[Claude] Expand toward 100 — data picks the topics.**
  Next ~60 briefings chosen from what converts and what Search Console shows, not from guesswork. Refresh cycle begins: ~30% of effort updates proven pieces (`updated` field) instead of writing new ones.

## Phase 4 — The river (never run out)

- [ ] 14. **[You→Claude] Cohort-exhaust production.**
  The capture doc (accumulating since #1) becomes a briefing source: anonymized questions, objections, and stories from real cohorts — 5–10 unique briefing seeds per cohort that no competitor can copy.

- [ ] 15. **[You] Backlink/authority push.**
  Podcast appearances, guest pieces, and cohort alumni sharing briefings. A young domain needs inbound links for the SEO flywheel to spin; content alone doesn't move domain authority.

---

## Done

- [x] Conversion events wired and verified end-to-end: `cta_click` (placement, destination), `personalize_start`, `personalize_complete` (seat); helper at `src/lib/analytics.js` — 2026-07-12
- [x] GA4 property created, `NEXT_PUBLIC_GA_ID` set — 2026-07-12
- [x] Production env vars confirmed (`NEXT_PUBLIC_SITE_URL`, `ANTHROPIC_API_KEY`) — 2026-07-12
- [x] Cohort-exhaust capture doc created in Google Drive: "AISC Cohort Exhaust — Capture Doc" (section per live session for the Jul 30 – Aug 5 cohort; Claude can read it via the Drive connector) — 2026-07-12
- [x] Blog system at /awakening (routes, MDX engine, taxonomy, SEO layer, RSS, sitemap) — 2026-07-11
- [x] Agent guide set at `agent-guides/blog/` (BLOG_BRIEF, CONTENT_GUIDE, RESEARCH_GUIDE, SEO_GUIDE) — 2026-07-11
- [x] 6 published briefings; every category page has content — 2026-07-11
- [x] Formats = pillars (insight/guide/value), `article` retired — 2026-07-11
- [x] Briefings footer + footer entry card; CTA removed from post bodies — 2026-07-11
- [x] TOPIC_LEDGER + link-graph script (`npm run blog:links`), graph clean — 2026-07-11
- [x] GA4 scaffold (env-gated) in root layout — 2026-07-11
