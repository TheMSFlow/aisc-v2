// The Awakening — 13 slides. Canvas: 1280×720. All font sizes are for
// full-screen viewing; SlideShow.jsx CSS-transforms these to any container.

const C = {
  darkBlue: "#00034C",
  msblue: "#010579",
  warning: "#870571",
  msaccent: "#6368DA",
  lilac: "#E9EAFF",
  white: "#FFFFFF",
};

export const TOTAL = 13;

// ── Typography primitives ────────────────────────────────────────────────────

function H({ children, size = 54, color, style = {} }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-ptsans)",
        fontSize: size,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "-0.01em",
        lineHeight: 1.0,
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Body({ children, color, size = 22, style = {} }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-inter)",
        fontSize: size,
        fontWeight: 300,
        lineHeight: 1.6,
        color,
        margin: 0,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

function Lbl({ children, color, size = 12, tracking = "0.22em", style = {} }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-ptsans)",
        fontSize: size,
        fontWeight: 400,
        letterSpacing: tracking,
        textTransform: "uppercase",
        color,
        display: "block",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

// ── Base frame ────────────────────────────────────────────────────────────────

function Frame({ number, label, dark = true, children }) {
  const bg = dark ? C.darkBlue : C.white;
  const text = dark ? C.white : C.darkBlue;
  const muted = dark ? "rgba(255,255,255,0.22)" : "rgba(0,3,76,0.22)";
  const bdr = dark ? "rgba(255,255,255,0.08)" : "rgba(0,3,76,0.08)";

  return (
    <div
      style={{
        width: 1280,
        height: 720,
        backgroundColor: bg,
        color: text,
        display: "flex",
        fontFamily: "var(--font-inter)",
        overflow: "hidden",
      }}
    >
      {/* Left rail */}
      <div
        style={{
          width: 160,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "36px 0 24px",
        }}
      >
        <Lbl color={muted} size={11} tracking="0.18em">
          {String(number).padStart(2, "0")}
        </Lbl>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-ptsans)",
              fontSize: 10,
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: muted,
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>
        </div>
      </div>

      {/* Signature rule */}
      <div
        style={{
          width: 1,
          backgroundColor: C.warning,
          opacity: 0.5,
          flexShrink: 0,
          alignSelf: "stretch",
        }}
      />

      {/* Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "40px 60px 0 60px",
          minWidth: 0,
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {children}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 10,
            paddingBottom: 18,
            borderTop: `1px solid ${bdr}`,
          }}
        >
          <Lbl color={muted} size={10} tracking="0.25em">
            The Awakening
          </Lbl>
          <Lbl color={muted} size={10} tracking="0.15em">
            {number} / {TOTAL}
          </Lbl>
        </div>
      </div>
    </div>
  );
}

// ── Slide 01 — Title ──────────────────────────────────────────────────────────

function S01() {
  return (
    <div
      style={{
        width: 1280,
        height: 720,
        backgroundColor: C.darkBlue,
        color: C.white,
        display: "flex",
        flexDirection: "column",
        padding: "44px 80px",
        fontFamily: "var(--font-inter)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Lbl color="rgba(255,255,255,0.25)" tracking="0.28em" size={11}>
          An Executive Briefing · Michael Steve Clarity Studio
        </Lbl>
        <Lbl color="rgba(255,255,255,0.15)" tracking="0.18em" size={11}>
          1 / {TOTAL}
        </Lbl>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <div style={{ width: "100%" }}>
          <div
            style={{
              fontFamily: "var(--font-ptsans)",
              fontSize: 148,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 0.87,
              color: C.white,
            }}
          >
            The
            <br />
            Awakening
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              margin: "36px 0 28px",
            }}
          >
            <div style={{ width: 80, height: 2, backgroundColor: C.warning }} />
          </div>
          <Body
            color="rgba(255,255,255,0.48)"
            size={22}
            style={{ maxWidth: 580 }}
          >
            For leaders who feel the shift but haven't yet decided what to do
            about it.
          </Body>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Lbl color="rgba(255,255,255,0.12)" size={10} tracking="0.28em">
          The Awakening
        </Lbl>
        <Lbl color="rgba(255,255,255,0.12)" size={10} tracking="0.15em">
          Navigate with arrow keys or click →
        </Lbl>
      </div>
    </div>
  );
}

// ── Slide 02 — Identity ───────────────────────────────────────────────────────

function S02() {
  return (
    <Frame number={2} label="Identity" dark={false}>
      <H
        size={68}
        color={C.darkBlue}
        style={{ marginBottom: 20, lineHeight: 1.0 }}
      >
        You built
        <br />
        something real.
      </H>
      <Body color="rgba(0,3,76,0.5)" size={22} style={{ marginBottom: 32 }}>
        Years of experience. Hard-won credibility. A reputation that took a long
        time to build.
        <br />
        But if you still ask any of these, even once, this briefing is
        for you.
      </Body>

      <div
        style={{
          flex: 1,
          borderLeft: `3px solid ${C.warning}`,
          paddingLeft: 28,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {[
          '"Am I still relevant?"',
          '"Is this the moment I get left behind?"',
          '"Should I already know more than I do?"',
        ].map((q) => (
          <p
            key={q}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 26,
              fontWeight: 300,
              fontStyle: "italic",
              color: C.darkBlue,
              margin: 0,
              lineHeight: 1.35,
            }}
          >
            {q}
          </p>
        ))}
      </div>
    </Frame>
  );
}

// ── Slide 03 — The Promise ────────────────────────────────────────────────────

function S03() {
  const pillars = [
    {
      tag: "Show you why",
      body: "AI proficiency is now a leadership layer, not a technical one. Ignoring it is no longer a neutral choice. It is a position, and it carries consequences for your organisation and your authority.",
    },
    {
      tag: "Show you how",
      body: "Engage with AI as a leader and a decision-maker, not as a bystander. The right mindset, the right clarity, and the right fluency are all learnable. None of them require you to write a line of code.",
    },
    {
      tag: "Show you what",
      body: "A specific, structured path that takes you from where you are today to where the AI era expects you to be, as the person responsible for direction, people, and execution.",
    },
  ];
  return (
    <Frame number={3} label="The Promise" dark>
      <Body
        color="rgba(255,255,255,0.42)"
        size={20}
        style={{ marginBottom: 14 }}
      >
        The aim of The Awakening is to wake you up.
      </Body>
      <H
        size={56}
        color={C.white}
        style={{ marginBottom: 28, lineHeight: 1.1 }}
      >
        Not to overwhelm you.
        <br />
        Not to scare you.
        <br />
        But to...
      </H>
      <div style={{ flex: 1, display: "flex", gap: 0 }}>
        {pillars.map(({ tag, body }, i) => (
          <div
            key={tag}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              paddingLeft: i > 0 ? 32 : 0,
              marginLeft: i > 0 ? 32 : 0,
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
              borderTop: `2px solid ${i === 0 ? C.warning : "rgba(255,255,255,0.15)"}`,
              paddingTop: 22,
            }}
          >
            <Lbl
              color={i === 0 ? C.warning : "rgba(255,255,255,0.35)"}
              size={12}
              tracking="0.2em"
              style={{ marginBottom: 18 }}
            >
              {tag}
            </Lbl>
            <Body color="rgba(255,255,255,0.65)" size={21}>
              {body}
            </Body>
          </div>
        ))}
      </div>
    </Frame>
  );
}

// ── Slide 04 — Obligation ─────────────────────────────────────────────────────

function S04() {
  const pillars = [
    {
      title: "Direction",
      body: "Where the organisation goes. The vision, the priorities, the bets you make about the future. These are the decisions that only you can make.",
      impact:
        "AI changes the information that informs these decisions: the speed of signals, the quality of forecasts, the visibility into risk. You still decide. AI makes the picture sharper.",
    },
    {
      title: "People",
      body: "Who does the work, how they grow, what they are capable of, and what expectations look like in a role. These are leadership responsibilities.",
      impact:
        "AI changes what people can produce, what skills become critical, and what roles evolve into. You define the standard. AI reshapes the playing field.",
    },
    {
      title: "Execution",
      body: "How work gets done: the systems, processes, quality standards, and pace of delivery that define your organisation's operating model.",
      impact:
        "AI automates layers of execution that previously required teams. The manager who does not understand this will not know what to redesign, or what to hold onto.",
    },
  ];
  return (
    <Frame number={4} label="Responsibility" dark>
      <Lbl
        color={C.msaccent}
        size={12}
        tracking="0.22em"
        style={{ marginBottom: 16 }}
      >
        Why you need to take AI seriously
      </Lbl>
      <H
        size={58}
        color={C.white}
        style={{ marginBottom: 24, lineHeight: 1.1 }}
      >
        Your obligation
        <br />
        as a leader.
      </H>
      <div style={{ flex: 1, display: "flex", gap: 0 }}>
        {pillars.map(({ title, body, impact }, i) => (
          <div
            key={title}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              paddingLeft: i > 0 ? 32 : 0,
              marginLeft: i > 0 ? 32 : 0,
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
              borderTop: "2px solid rgba(255,255,255,0.16)",
              paddingTop: 20,
            }}
          >
            <H size={24} color={C.white} style={{ marginBottom: 14 }}>
              {title}
            </H>
            <Body
              color="rgba(255,255,255,0.55)"
              size={19}
              style={{ marginBottom: 16 }}
            >
              {body}
            </Body>
            <div
              style={{
                width: 28,
                height: 1,
                backgroundColor: "rgba(255,255,255,0.12)",
                marginBottom: 14,
              }}
            />
            <Body
              color="rgba(255,255,255,0.35)"
              size={18}
              style={{ fontStyle: "italic" }}
            >
              {impact}
            </Body>
          </div>
        ))}
      </div>
    </Frame>
  );
}

// ── Slide 05 — Capability ─────────────────────────────────────────────────────

function S05() {
  const items = [
    {
      num: "01",
      title: "Automation",
      body: "Executes structured, repetitive work at a scale and speed no human team can match. Reduces cost, increases consistency, and frees capacity for higher-value work.",
    },
    {
      num: "02",
      title: "Augmentation",
      body: "Strengthens human judgment with better information, faster analysis, and pattern recognition across vast data. Smarter, faster, more confident decisions.",
    },
    {
      num: "03",
      title: "Analysis",
      body: "Surfaces insights hidden in data that would take teams weeks to uncover. Reveals opportunities, risks, and signals before they become obvious to everyone.",
    },
    {
      num: "04",
      title: "Action",
      body: "Operates autonomously within defined boundaries, monitoring, deciding, and executing in real time, escalating only when human judgment is required.",
    },
  ];
  return (
    <Frame number={5} label="Capability" dark={false}>
      <Lbl
        color="rgba(0,3,76,0.32)"
        size={12}
        tracking="0.22em"
        style={{ marginBottom: 16 }}
      >
        Why you need to take AI seriously
      </Lbl>
      <H size={54} color={C.darkBlue} style={{ marginBottom: 72 }}>
        What AI can actually do.
      </H>
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "20px 48px",
        }}
      >
        {items.map(({ num, title, body }) => (
          <div
            key={num}
            style={{ display: "flex", gap: 18, alignItems: "flex-start" }}
          >
            <span
              style={{
                fontFamily: "var(--font-ptsans)",
                fontSize: 40,
                fontWeight: 700,
                color: C.warning,
                lineHeight: 1,
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              {num}
            </span>
            <div>
              <H size={22} color={C.darkBlue} style={{ marginBottom: 8 }}>
                {title}
              </H>
              <Body color="rgba(0,3,76,0.52)" size={18}>
                {body}
              </Body>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

// ── Slide 06 — Capacity ───────────────────────────────────────────────────────

function S06() {
  const without = [
    "Reviewing reports",
    "Chasing updates",
    "Formatting & compiling documents",
    "Handling routine questions",
    "Repeating past decisions",
  ];
  const withAI = [
    "Setting strategy & direction",
    "Making complex decisions",
    "Building relationships & influence",
    "Defining governance & standards",
    "Focusing on what only you can do",
  ];
  return (
    <Frame number={6} label="Capacity" dark>
      <Lbl
        color={C.msaccent}
        size={12}
        tracking="0.22em"
        style={{ marginBottom: 16 }}
      >
        Why you need to take AI seriously
      </Lbl>
      <H size={52} color={C.white} style={{ marginBottom: 12 }}>
        It gives you your leadership back.
      </H>
      <Body
        color="rgba(255,255,255,0.45)"
        size={18}
        style={{ marginBottom: 48 }}
      >
        Most leaders are spending judgment-level energy on attention-level work.
        AI removes the second category entirely.
      </Body>
      <div style={{ flex: 1, display: "flex", gap: 12 }}>
        <div
          style={{
            flex: 1,
            padding: "20px 24px",
            backgroundColor: "rgba(255,255,255,0.04)",
            borderTop: "2px solid rgba(255,255,255,0.14)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Lbl
            color="rgba(255,255,255,0.35)"
            size={11}
            tracking="0.2em"
            style={{ marginBottom: 18 }}
          >
            Without AI
          </Lbl>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            {without.map((item) => (
              <div
                key={item}
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.22)",
                    flexShrink: 0,
                  }}
                />
                <Body
                  color="rgba(255,255,255,0.45)"
                  size={18}
                  style={{ margin: 0 }}
                >
                  {item}
                </Body>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            flex: 1,
            padding: "20px 24px",
            backgroundColor: "rgba(99,104,218,0.15)",
            borderTop: `2px solid ${C.msaccent}`,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Lbl
            color={C.msaccent}
            size={11}
            tracking="0.2em"
            style={{ marginBottom: 18 }}
          >
            With AI
          </Lbl>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            {withAI.map((item) => (
              <div
                key={item}
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: C.msaccent,
                    flexShrink: 0,
                  }}
                />
                <Body
                  color="rgba(255,255,255,0.78)"
                  size={18}
                  style={{ margin: 0 }}
                >
                  {item}
                </Body>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

// ── Slide 07 — Utility ────────────────────────────────────────────────────────

function S07() {
  return (
    <Frame number={7} label="Utility" dark={false}>
      <Lbl
        color="rgba(0,3,76,0.32)"
        size={12}
        tracking="0.22em"
        style={{ marginBottom: 16 }}
      >
        Why you need to take AI seriously
      </Lbl>
      <H
        size={46}
        color={C.darkBlue}
        style={{ marginBottom: 28, lineHeight: 1.1, maxWidth: 700 }}
      >
        AI is no longer a tool. It is fast becoming an infrastructure.
      </H>
      <div
        style={{ flex: 1, display: "flex", alignItems: "flex-start", gap: 56 }}
      >
        <div style={{ flexShrink: 0 }}>
          <div
            style={{
              fontFamily: "var(--font-ptsans)",
              fontSize: 104,
              fontWeight: 700,
              color: C.darkBlue,
              lineHeight: 0.88,
            }}
          >
            $400B+
          </div>
          <Body
            color="rgba(0,3,76,0.42)"
            size={17}
            style={{ maxWidth: 270, marginTop: 14, lineHeight: 1.5 }}
          >
            Invested by major corporations in AI infrastructure, a commitment
            that accelerates every quarter.
          </Body>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignSelf: "stretch",
            paddingTop: 6,
          }}
        >
          <div>
            <H size={20} color={C.darkBlue} style={{ marginBottom: 10 }}>
              Utility
            </H>
            <Body color="rgba(0,3,76,0.55)" size={20}>
              People now subscribe to AI the way they subscribe to electricity
              or internet. Monthly, essential, always on.
            </Body>
          </div>
          <div
            style={{ borderTop: "1px solid rgba(0,3,76,0.08)", paddingTop: 24 }}
          >
            <H size={20} color={C.darkBlue} style={{ marginBottom: 10 }}>
              Layer
            </H>
            <Body color="rgba(0,3,76,0.55)" size={20}>
              AI is not a department or a product. It is a horizontal layer
              across every function of every business.
            </Body>
          </div>
          <div
            style={{ borderTop: "1px solid rgba(0,3,76,0.08)", paddingTop: 20 }}
          >
            <Body
              color="rgba(0,3,76,0.35)"
              size={18}
              style={{ fontStyle: "italic", marginBottom: 24 }}
            >
              You don't debate whether to use electricity. You ask how to use it
              well. AI has crossed that threshold.
            </Body>
          </div>
        </div>
      </div>
    </Frame>
  );
}

// ── Slide 08 — Consequence ────────────────────────────────────────────────────

function S08() {
  return (
    <Frame number={8} label="Consequence" dark>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 26,
        }}
      >
        <Lbl color="rgba(255,255,255,0.3)" size={12} tracking="0.22em">
          What happens if you don't act
        </Lbl>
        <Body color="rgba(255,255,255,0.52)" size={30}>
          The risk is not that you'll fail.
        </Body>
        <H
          size={64}
          color={C.white}
          style={{ letterSpacing: "-0.02em", lineHeight: 1.1 }}
        >
          The risk is that you'll
          <br />
          become irrelevant slowly
          <br />
          while still showing up
          <br />
          every day.
        </H>
        <Body
          color="rgba(255,255,255,0.38)"
          size={20}
          style={{ maxWidth: 600, paddingTop: 4 }}
        >
          Decisions move around you. Conversations happen in rooms you're not
          in. Your authority stays on paper, while the ground underneath
          shifts.
        </Body>
      </div>
    </Frame>
  );
}

// ── Slide 09 — Mentality ──────────────────────────────────────────────────────

function S09() {
  const consumer = [
    "Asks: what can AI do for me?",
    "Uses AI occasionally, not intentionally",
    "Optimizes tasks, not outcomes",
    "Sees AI as something external",
  ];
  const stakeholder = [
    "Asks: where should intelligence be embedded?",
    "Designs how AI is used across the business",
    "Builds systems that improve over time",
    "Treats AI as a core leadership mandate",
  ];
  return (
    <Frame number={9} label="Mentality" dark={false}>
      <Lbl
        color="rgba(0,3,76,0.32)"
        size={12}
        tracking="0.22em"
        style={{ marginBottom: 16 }}
      >
        How to take AI seriously
      </Lbl>
      <H size={54} color={C.darkBlue} style={{ marginBottom: 8 }}>
        It starts with how you frame it.
      </H>
      <Body color="rgba(0,3,76,0.4)" size={19} style={{ marginBottom: 48 }}>
        If the why landed, the shift has already begun.
      </Body>
      <div style={{ flex: 1, display: "flex", gap: 0 }}>
        <div
          style={{
            flex: 1,
            paddingRight: 36,
            borderRight: "1px solid rgba(0,3,76,0.08)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Lbl
            color="rgba(0,3,76,0.38)"
            size={11}
            tracking="0.2em"
            style={{ marginBottom: 0 }}
          >
            Consumer mindset
          </Lbl>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            {consumer.map((item) => (
              <div
                key={item}
                style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "rgba(0,3,76,0.22)", flexShrink: 0, marginTop: 8 }} />
                <Body color="rgba(0,3,76,0.5)" size={20} style={{ margin: 0 }}>
                  {item}
                </Body>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            flex: 1,
            paddingLeft: 36,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Lbl
            color={C.msblue}
            size={11}
            tracking="0.2em"
            style={{ marginBottom: 0 }}
          >
            Stakeholder mindset
          </Lbl>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            {stakeholder.map((item) => (
              <div
                key={item}
                style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: C.msaccent, flexShrink: 0, marginTop: 8 }} />
                <Body
                  color={C.darkBlue}
                  size={20}
                  style={{ margin: 0, fontWeight: 400 }}
                >
                  {item}
                </Body>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

// ── Slide 10 — Clarity ────────────────────────────────────────────────────────

function S10() {
  const defs = [
    {
      title: "What AI is",
      body: "A technology that learns from patterns in data and uses that learning to generate outputs, decisions, or actions.",
    },
    {
      title: "What AI can't do",
      body: "Replace judgment. Set values. Take accountability. Understand context the way a human with lived experience can.",
    },
    {
      title: "Where it applies",
      body: "Specifically in your domain, your industry, and the responsibilities you carry as a leader.",
    },
  ];
  return (
    <Frame number={10} label="Clarity" dark={false}>
      <Lbl
        color="rgba(0,3,76,0.32)"
        size={12}
        tracking="0.22em"
        style={{ marginBottom: 16 }}
      >
        How to take AI seriously
      </Lbl>
      <H
        size={52}
        color={C.darkBlue}
        style={{ marginBottom: 6, lineHeight: 1.1 }}
      >
        Understand it well enough
        <br />
        to lead it.
      </H>
      <Body color="rgba(0,3,76,0.35)" size={18} style={{ marginBottom: 84 }}>
        Not necessarily well enough to build it.
      </Body>
      <div style={{ flex: 1, display: "flex", gap: 0 }}>
        {defs.map(({ title, body }, i) => (
          <div
            key={title}
            style={{
              flex: 1,
              paddingLeft: i > 0 ? 32 : 0,
              marginLeft: i > 0 ? 32 : 0,
              borderLeft: i > 0 ? "1px solid rgba(0,3,76,0.08)" : "none",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <H size={20} color={C.darkBlue}>
              {title}
            </H>
            <Body color="rgba(0,3,76,0.55)" size={19}>
              {body}
            </Body>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 24,
          padding: "18px 22px",
          borderLeft: "2px solid rgba(0,3,76,0.15)",
        }}
      >
        <Body
          color="rgba(0,3,76,0.48)"
          size={19}
          style={{ fontStyle: "italic" }}
        >
          You don't need to understand combustion physics to decide where the
          car goes. But you do need to know the route, and what the car can and
          cannot do.
        </Body>
      </div>
      <Lbl
        color={C.warning}
        size={13}
        tracking="0.18em"
        style={{ marginTop: 14, marginBottom: 24 }}
      >
        AI Clarity is strategic, not technical.
      </Lbl>
    </Frame>
  );
}

// ── Slide 11 — Fluency ────────────────────────────────────────────────────────

function S11() {
  const dims = [
    {
      title: "Effective",
      lbl: "01",
      body: "You get outputs that actually solve the problem. Your briefs are clear, your standards are explicit, and the AI works in service of a defined outcome, not a vague prompt.",
    },
    {
      title: "Efficient",
      lbl: "02",
      body: "AI is not adding to your workload. It is removing from it. You are not spending more time managing AI than the task would have taken. The return is measurable.",
    },
    {
      title: "Ethical",
      lbl: "03",
      body: "You have considered who is affected by AI-assisted decisions and upheld your responsibility to them. Fluency includes knowing where AI should not go.",
    },
    {
      title: "Safe",
      lbl: "04",
      body: "You know which data can and cannot be used. You have set the boundaries, briefed your team, and govern what AI produces in your organisation.",
    },
  ];
  return (
    <Frame number={11} label="Fluency" dark>
      <Lbl
        color={C.msaccent}
        size={12}
        tracking="0.22em"
        style={{ marginBottom: 16 }}
      >
        How to take AI seriously
      </Lbl>
      <H
        size={50}
        color={C.white}
        style={{ marginBottom: 48, lineHeight: 1.2 }}
      >
        Working with AI: effectively,
        <br />
        efficiently, ethically, and safely.
      </H>
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "16px 40px",
        }}
      >
        {dims.map(({ title, lbl, body }) => (
          <div
            key={title}
            style={{
              display: "flex",
              flexDirection: "column",
              borderTop: "1px solid rgba(255,255,255,0.15)",
              paddingTop: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 12,
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-ptsans)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.2)",
                  letterSpacing: "0.1em",
                }}
              >
                {lbl}
              </span>
              <H size={24} color={C.white}>
                {title}
              </H>
            </div>
            <Body color="rgba(255,255,255,0.58)" size={20}>
              {body}
            </Body>
          </div>
        ))}
      </div>
    </Frame>
  );
}

// ── Slide 12 — Objections ─────────────────────────────────────────────────────

function S12() {
  const objections = [
    {
      q: '"I\'m not technical enough."',
      a: "You don't build AI. You direct it. Fluency is not technical expertise. It is leadership.",
    },
    {
      q: '"I\'ll let my team handle it."',
      a: "Your team can execute. Only you can set the standard, govern the outcomes, and take accountability for what AI produces.",
    },
    {
      q: '"I don\'t have time for one more thing."',
      a: "This is not adding to your plate. It is removing what drains you. This challenge returns more time than it costs, within the first month.",
    },
    {
      q: '"My industry isn\'t ready yet."',
      a: "Your industry is already using AI, with or without your guidance. The question is whether you are leading it.",
    },
  ];
  return (
    <Frame number={12} label="Obstacles" dark={false}>
      <Lbl
        color="rgba(0,3,76,0.32)"
        size={12}
        tracking="0.22em"
        style={{ marginBottom: 16 }}
      >
        Before we go further
      </Lbl>
      <H
        size={50}
        color={C.darkBlue}
        style={{ marginBottom: 48, lineHeight: 1.1 }}
      >
        What you're probably
        <br />
        thinking right now.
      </H>
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 16,
        }}
      >
        {objections.map(({ q, a }) => (
          <div
            key={q}
            style={{
              padding: "20px 24px",
              backgroundColor: "rgba(233,234,255,0.45)",
              borderTop: "2px solid rgba(0,3,76,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <Body
              color={C.darkBlue}
              size={18}
              style={{ fontWeight: 400, fontStyle: "italic" }}
            >
              {q}
            </Body>
            <Body color="rgba(0,3,76,0.6)" size={18}>
              {a}
            </Body>
          </div>
        ))}
      </div>
    </Frame>
  );
}

// ── Slide 13 — CTA ────────────────────────────────────────────────────────────

function S13() {
  return (
    <Frame number={13} label="What's Next" dark>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <H size={64} color={C.white} style={{ lineHeight: 1.0 }}>
          The briefing is done.
          <br />
          The next step is yours.
        </H>
        <div style={{ width: 64, height: 2, backgroundColor: C.warning }} />
        <Body
          color="rgba(255,255,255,0.55)"
          size={20}
          style={{ maxWidth: 620 }}
        >
          You've seen why AI matters for your leadership. You've seen the cost
          of waiting. You know what clarity, capacity, and the right mindset can
          build.
        </Body>
        <div
          style={{
            padding: "24px 28px",
            backgroundColor: "rgba(99,104,218,0.12)",
            borderLeft: `2px solid ${C.msaccent}`,
          }}
        >
          <Lbl
            color={C.msaccent}
            size={12}
            tracking="0.22em"
            style={{ marginBottom: 12 }}
          >
            The AI Stakeholder Challenge
          </Lbl>
          <Body color="rgba(255,255,255,0.72)" size={20}>
            7 days. 4 live sessions. 1 transformation to AI stakeholder status.
          </Body>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const nav = () =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" });
              if (document.fullscreenElement) {
                document.exitFullscreen().then(nav);
              } else {
                nav();
              }
            }}
            style={{
              padding: "14px 32px",
              backgroundColor: C.white,
              color: C.darkBlue,
              fontFamily: "var(--font-ptsans)",
              fontSize: 15,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Secure Your Spot
          </a>
        </div>
      </div>
    </Frame>
  );
}

// ── Export ────────────────────────────────────────────────────────────────────

export const SLIDES = [
  <S01 key="01" />,
  <S02 key="02" />,
  <S03 key="03" />,
  <S04 key="04" />,
  <S05 key="05" />,
  <S06 key="06" />,
  <S07 key="07" />,
  <S08 key="08" />,
  <S09 key="09" />,
  <S10 key="10" />,
  <S11 key="11" />,
  <S12 key="12" />,
  <S13 key="13" />,
];
