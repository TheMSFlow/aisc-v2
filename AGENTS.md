<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Frontend Design — Always Do First

**Before writing any frontend or design code, every session, no exceptions:**

1. Invoke the `frontend-design` skill (`frontend-design:frontend-design`)
2. Read `agent-guides/DESIGN_GUIDE.md` and `agent-guides/AISC_BRIEF.md`
3. State your design plan — palette, type pairing, layout concept, and one signature element — before touching any component

**Screenshot comparison loop (mandatory for all design tasks):**

- Dev server runs at `http://localhost:3000` via `npm run dev` — never start a second instance
- Take screenshots with: `node screenshot.mjs` (saves to `./screenshots/` with auto-increment)
- Optional label: `node screenshot.mjs http://localhost:3000 hero`
- After each change: screenshot → read the PNG → compare against intent → fix mismatches → re-screenshot
- Do **at least 2 comparison rounds**. Stop only when no visible gaps remain or the user says so
- When comparing, be specific: "heading tracking is too loose", "card border is dark-blue/10 but should be dark-blue/15"

---

# AISC Agent System

This project is the landing page for the **AI Stakeholder Challenge (AISC)** — a premium 7-day leadership program by Michael Steve. Before working on any copy, design, or content task, read the relevant guide below.

## Guides

- **`agent-guides/AISC_BRIEF.md`** — Start here. The definitive AISC foundation: what it is, who it's for, the 7-day journey, pricing, three audience tiers, key brand reframes, and what AISC is NOT.

- **`agent-guides/COPY_GUIDE.md`** — For copywriting tasks. Brand voice, audience-specific angles and hooks, section-by-section copy direction, forbidden phrases, and CTA principles.

- **`agent-guides/DESIGN_GUIDE.md`** — For design and frontend tasks. v2 visual direction (premium/editorial), color and typography guidance, section architecture, component reuse notes from v1, and screenshot references.

## When to read which guide

| Task type | Read |
|-----------|------|
| Writing hero, headlines, or section copy | AISC_BRIEF + COPY_GUIDE |
| Redesigning or rebuilding a section | AISC_BRIEF + DESIGN_GUIDE |
| Building a new component | AISC_BRIEF + DESIGN_GUIDE |
| Refining pricing, FAQ, or curriculum | AISC_BRIEF + COPY_GUIDE + DESIGN_GUIDE |
| Any task involving AI Governance or Day 7 content | AISC_BRIEF — note this is the closing capstone session |

## Source context (read-only reference)

The `website-context/` directory contains raw source material:
- `website-context/aisc_resources/` — Program resources from each day (documents, worksheets, session notes)
- `website-context/learning center/` — Learning center pages, tools, and screenshots from inside the challenge
- `website-context/v1/` — Previous version of the landing page (React/Vite). Components and content are directly reusable reference material.

Do not modify anything in `website-context/`.

## Audience priority

Lead all copy and hero-level design decisions toward the **Chief (C-suite)** audience first. Secondary: Leaders of Leaders. Tertiary: Emerging Leaders. See `COPY_GUIDE.md` for audience profiles.
