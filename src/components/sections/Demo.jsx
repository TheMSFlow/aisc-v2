"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const PANELS = [
  {
    id: "guides",
    index: "01",
    label: "RESOURCE",
    name: "Guides, Frameworks & Templates",
    headline: "The sessions give you direction. These make sure your team gets it too.",
    body: "Not everything lands fully in a live session. These guides let you re-enter any concept from Days 1, 2, and 3 at your own depth and go further. As you execute your roadmap, you will reach for the AI Value Map, the Task Delegation Guide, the Mandate and Ethics framework. When your team needs direction, these are what you hand them.",
    type: "triple",
    images: [
      { src: "/demo/day-1.png", alt: "Day 1 inside the AISC Learning Center" },
      { src: "/demo/day-2.png", alt: "Day 2 inside the AISC Learning Center" },
      { src: "/demo/day-3.png", alt: "Day 3 inside the AISC Learning Center" },
    ],
  },
  {
    id: "mini-apps",
    index: "02",
    label: "TOOLS",
    name: "Mini Apps",
    headline: "Rate every task. Recover every hour. Declare your territory.",
    body: "Three tools built for the decisions the challenge produces. The Delegation Tool rates your tasks for AI fit and human judgment required. The Margin Calculator records the time you recover and compounds it across the week, quarter, and year. The Territory Builder maps your friction points and sharpens your declaration into a PDF. All three are reusable long after Day 7.",
    type: "triple",
    images: [
      { src: "/demo/delegation-matrix.png", alt: "The Delegation Tool" },
      { src: "/demo/margin-calculator.png", alt: "The Margin Calculator" },
      { src: "/demo/territory.png", alt: "The Territory Builder" },
    ],
  },
  {
    id: "roadmap",
    index: "03",
    label: "RESOURCE",
    name: "Roadmap",
    headline: "Day 6 unlocks it. The next six months run on it.",
    body: "The 6-Month AI Stakeholder Roadmap carries your territory through three phases over 180 days: proving you can execute, applying your leverage and building the relationships that matter, then extending your authority. Along the way it names your capability gaps, maps who you need in your corner, and sets the personal standards you'll hold yourself to. Reusable every six months as your direction compounds.",
    type: "single",
    image: { src: "/demo/roadmap.png", alt: "The 6-Month AI Stakeholder Roadmap" },
  },
  {
    id: "ai-labs",
    index: "04",
    label: "RESOURCE",
    name: "AI Labs",
    headline: "Built for leaders who direct AI. Not engineers who build it.",
    body: "A dedicated platform with leadership-focused instruction on AI setup, direction, and domain application. Where the fluency you built during the challenge keeps compounding as you execute your roadmap. Six months of free access, included.",
    type: "editorial",
    modules: [
      "AI setup from a leader's perspective",
      "The Description-Discernment Loop in practice",
      "Domain application across industries and roles",
      "Fluency that compounds as you execute your roadmap",
    ],
  },
]

export default function Demo() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => Math.max(0, i - 1))
  const next = () => setActive((i) => Math.min(PANELS.length - 1, i + 1))

  return (
    <section
      id="demo"
      className="relative flex flex-col bg-dark-blue overflow-hidden"
      style={{ height: "100dvh" }}
    >
      {/* ── Header ── */}
      <div className="shrink-0 px-6 sm:px-10 lg:px-14 pt-5 sm:pt-10 lg:pt-14 pb-3 sm:pb-5 lg:pb-7 flex items-center justify-between gap-4 border-b border-white/6">
        <div>
          <p className="mb-1.5 sm:mb-2.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/35">
            The Toolbox
          </p>
          <h2 className="font-ptsans text-sm sm:text-3xl lg:text-[2.5rem] font-bold uppercase leading-none tracking-tight text-white">
            The challenge ends on Day 7.{" "}
            <br className="hidden sm:block" />
            Your support doesn't.
          </h2>
        </div>

        {/* Counter + arrows */}
        <div className="shrink-0 flex flex-col items-end gap-2 sm:gap-3">
          <span className="hidden sm:block text-[11px] font-semibold tabular-nums tracking-widest text-white/30">
            {String(active + 1).padStart(2, "0")} / {String(PANELS.length).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={active === 0}
              aria-label="Previous panel"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-150"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              disabled={active === PANELS.length - 1}
              aria-label="Next panel"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-150"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Panel track ── */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {PANELS.map((panel) => (
            <div key={panel.id} className="w-full shrink-0 h-full flex flex-col lg:flex-row">

              {/* Left — copy */}
              <div className="lg:w-[40%] shrink-0 flex flex-col justify-center px-6 sm:px-10 lg:px-14 pt-4 sm:pt-6 lg:pt-0 pb-3 sm:pb-6 lg:pb-14">
                <div className="flex items-center gap-3 mb-3 sm:mb-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/35">
                    {panel.label}
                  </span>
                  <span className="w-px h-3 bg-white/15" aria-hidden />
                  <span className="text-[9px] font-semibold tabular-nums text-white/20">
                    {panel.index}
                  </span>
                </div>

                <p className="hidden sm:block font-ptsans text-[11px] font-bold uppercase tracking-widest text-white/35 mb-3">
                  {panel.name}
                </p>

                <h3 className="font-ptsans text-[1.25rem] sm:text-2xl lg:text-[1.75rem] font-bold uppercase leading-none tracking-tight text-white mb-3 sm:mb-5">
                  {panel.headline}
                </h3>

                <p className="text-sm lg:text-[0.9rem] leading-relaxed text-white/55 max-w-md line-clamp-3 sm:line-clamp-none">
                  {panel.body}
                </p>
              </div>

              {/* Right — visual */}
              <div
                className={`flex-1 min-w-0 min-h-0 overflow-hidden flex pl-6 sm:pl-10 lg:pl-0 pr-6 sm:pr-10 lg:pr-14 ${
                  panel.type === "single"
                    ? "lg:pl-0"
                    : panel.type === "editorial"
                    ? "items-start sm:items-stretch pt-3 pb-5 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12"
                    : "items-center pb-5 sm:pb-10 lg:pb-14"
                }`}
              >
                {panel.type === "triple" && <TripleShots images={panel.images} />}
                {panel.type === "single" && <SingleShot image={panel.image} />}
                {panel.type === "editorial" && <AILabsCard modules={panel.modules} />}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ── Dot indicator ── */}
      <div className="shrink-0 flex justify-center gap-2 pb-3 sm:pb-5 lg:pb-6" aria-hidden>
        {PANELS.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-white/60" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

/* ── Visual sub-components ── */

function TripleShots({ images }) {
  return (
    <div className="relative w-full h-full">
      {/* Mobile: front image as full-fill cover */}
      <div className="lg:hidden w-full h-full rounded-xl overflow-hidden border border-white/[0.09] shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[0].src}
          alt={images[0].alt}
          loading="eager"
          className="w-full h-full object-cover object-top"
        />
      </div>
      {/* Desktop: cascading stack */}
      {images.map((img, i) => (
        <div
          key={i}
          className="hidden lg:block absolute rounded-xl overflow-hidden border border-white/[0.09] shadow-2xl"
          style={{
            width: "82%",
            top: `${2 + i * 15}%`,
            left: `${i * 9}%`,
            zIndex: i + 1,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            loading="eager"
            className="w-full h-auto block"
          />
        </div>
      ))}
    </div>
  )
}

function SingleShot({ image }) {
  return (
    <div className="w-full h-full rounded-xl lg:rounded-tl-xl lg:rounded-bl-xl lg:rounded-tr-none lg:rounded-br-none overflow-hidden border border-white/[0.09] shadow-2xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt}
        loading="eager"
        className="w-full h-full object-cover object-top"
      />
    </div>
  )
}

function AILabsCard({ modules }) {
  return (
    <div className="w-full max-w-xl h-full flex flex-col">
      <div className="flex-1 rounded-2xl border border-white/[0.12] bg-white/[0.05] overflow-hidden flex flex-col">
        {/* Top — access badge */}
        <div className="px-6 sm:px-10 pt-5 sm:pt-10 pb-4 sm:pb-8 border-b border-white/[0.08] shrink-0">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/35 mb-3 sm:mb-5">
            Free Access · Starts After Day 7
          </p>
          <div className="flex items-baseline gap-3">
            <span className="font-ptsans text-[5rem] sm:text-[8rem] font-bold leading-none text-white/[0.14] select-none">
              6
            </span>
            <span className="font-ptsans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white/30">
              months
            </span>
          </div>
        </div>

        {/* Bottom — module list */}
        <div className="flex-1 px-6 sm:px-10 py-5 sm:py-8 flex flex-col">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/30 mb-4 sm:mb-6">
            What it covers
          </p>
          <ul className="space-y-3 sm:space-y-5">
            {modules.map((m, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[10px] font-semibold tabular-nums text-white/25 mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-snug text-white/65">{m}</span>
              </li>
            ))}
          </ul>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/20 mt-auto pt-5 sm:pt-8">
            Included with all tiers
          </p>
        </div>
      </div>
    </div>
  )
}
