import Section from "@/components/layout/Section";

const TESTIMONIALS = [
  {
    quote:
      "I walked out of Day 3 knowing exactly what AI means for my business. The plan I left with was mine, not borrowed from a consultant. The territory I declared on Day 3 is now generating real revenue six months later.",
    name: "Amara O.",
    role: "Founder & CEO",
    world: "Financial Services",
  },
  {
    quote:
      "What surprised me most was how my team changed the moment I came back from the challenge. They started bringing AI questions to me. That shift, from being the one asking to being the one answering, is exactly what AISC promised.",
    name: "Pastor D. Mensah",
    role: "Senior Pastor",
    world: "Faith Community · 12,000 members",
  },
];

export default function Proof() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-dark-blue text-white">
      <Section id="proof" spacing="compact">
        <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/35">
          From the field
        </p>

        <div className="flex flex-col gap-9">
          <div className="max-w-3xl">
            <p className="text-xl italic leading-snug text-white/85 sm:text-2xl lg:text-3xl">
              &ldquo;{TESTIMONIALS[0].quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-6">
              <div className="h-px flex-1 bg-white/10" />
              <div className="shrink-0 text-right">
                <p className="text-sm font-semibold text-white">
                  {TESTIMONIALS[0].name}
                </p>
                <p className="text-xs text-white/35">
                  {TESTIMONIALS[0].role} · {TESTIMONIALS[0].world}
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl border-l-2 border-white/12 pl-7">
            <p className="text-base italic leading-snug text-white/55">
              &ldquo;{TESTIMONIALS[1].quote}&rdquo;
            </p>
            <div className="mt-4">
              <p className="text-sm font-semibold text-white/75">
                {TESTIMONIALS[1].name}
              </p>
              <p className="text-xs text-white/35">
                {TESTIMONIALS[1].role} · {TESTIMONIALS[1].world}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
