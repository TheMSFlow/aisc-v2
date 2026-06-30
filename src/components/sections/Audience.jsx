import Section from "@/components/layout/Section";

const AUDIENCES = [
  {
    tier: "Chief",
    qualifier: "Responsibility · Influence · Resources",
    who: "You set the direction. You do not need to run AI tasks yourself. You need to know what AI means for your domain, where the profit is, and what to tell the people who will build it for you. AISC gives you that clarity, that mandate, and the knowledge to monitor and govern what your team does with it.",
    dark: true,
  },
  {
    tier: "Leader of Leaders",
    qualifier: "Responsibility · Influence",
    who: "You are accountable in both directions. Above you, someone wants results. Below you, a team needs direction, and many of them are already using AI in ways you have not yet structured. AISC is where you get your hands on the tools, run the real tasks, and leave with a framework you can implement immediately and teach to the people who execute for you.",
    dark: false,
  },
  {
    tier: "Emerging Leader",
    qualifier: "Responsibility · Building toward influence",
    who: "You are doing the work. You often see what others above you are missing when it comes to AI. But no one has handed you the authority to lead it yet. AI Fluency is a career asset, the kind that earns trust, positions you for the roles you actually want, and gives you a foundation to build something worth noticing. AISC gives you the clarity, the fluency, and a declared AI position before anyone above you has thought to look for it.",
    dark: false,
  },
];

export default function Audience() {
  return (
    <div className="bg-[#f4f5ff]">
      <Section id="audience" spacing="compact">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-dark-blue/40">
          This challenge is for
        </p>
        <h2 className="font-ptsans text-3xl font-bold uppercase leading-tight tracking-tight text-dark-blue sm:text-4xl lg:text-5xl">
          Leaders with responsibility,
          <br />
          influence, and access to resources.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-dark-blue/55">
          Responsibility means you have initiative and accountability. Influence
          means you have people who listen to you. Resources — or access to
          them, directly or indirectly — means you have the wherewithal to act
          on the highest level of value this challenge provides.
        </p>

        <div className="mt-12 grid gap-px bg-dark-blue/10 lg:grid-cols-3">
          {AUDIENCES.map((a) => (
            <div
              key={a.tier}
              className={`flex flex-col gap-7 p-8 lg:p-10 ${
                a.dark ? "bg-dark-blue" : "bg-white"
              }`}
            >
              <div>
                <p
                  className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${
                    a.dark ? "text-white/35" : "text-dark-blue/35"
                  }`}
                >
                  {a.qualifier}
                </p>
                <h3
                  className={`mt-3 font-ptsans text-2xl font-bold uppercase tracking-tight ${
                    a.dark ? "text-white" : "text-dark-blue"
                  }`}
                >
                  {a.tier}
                </h3>
              </div>

              <p
                className={`text-sm leading-relaxed ${
                  a.dark ? "text-white/55" : "text-dark-blue/55"
                }`}
              >
                {a.who}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
