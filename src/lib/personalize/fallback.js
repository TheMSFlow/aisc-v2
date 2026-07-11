// Deterministic recommendation used when the AI call is unavailable or fails.
// Keyed off the one structured answer (the seat). Reasoning is hand-written
// in brand voice: no dashes, no jargon, no forbidden phrases.

const FALLBACKS = {
  chief: {
    headline: "Clarity, delivered on your calendar",
    primary: {
      offerId: "vvip",
      subPath: null,
      reasoning:
        "You set direction, and your time is the scarcest resource in the room. The full 7-day experience delivered privately, one on one, scheduled around your calendar, is the path built for the seat you hold.",
    },
    alternate: {
      offerId: "coaching",
      subPath: null,
      reasoning:
        "If you want a guide alongside you for the months that follow, coaching walks with you through the full 6-month plan and includes the complete challenge at no additional fee. It starts with a 15-minute discovery call.",
    },
    awakeningNote: null,
    confidence: "low",
  },
  leader_of_leaders: {
    headline: "A framework you can stand on in both directions",
    primary: {
      offerId: "vip",
      subPath: null,
      reasoning:
        "You answer upward for results and downward for direction. VIP keeps the facilitator close to your specific situation at the moments that matter most, with written feedback on your milestone work. It is capped at 10 seats for exactly that reason.",
    },
    alternate: {
      offerId: "ga",
      subPath: null,
      reasoning:
        "If you would rather drive the work yourself, General Admission is the complete 7-day experience, every session, every tool, and the full 6-month plan included.",
    },
    awakeningNote: null,
    confidence: "low",
  },
  emerging: {
    headline: "The position you build before anyone asks for it",
    primary: {
      offerId: "ga",
      subPath: null,
      reasoning:
        "You carry real responsibility and you are building your influence. General Admission gives you the complete 7-day experience and a declared AI position, the kind of clarity that earns trust before anyone above you has thought to look for it.",
    },
    alternate: {
      offerId: "vip",
      subPath: null,
      reasoning:
        "If you want the facilitator's eyes on your specific work, VIP adds direct written feedback on your milestone task and two extra live sessions. Ten seats, no more.",
    },
    awakeningNote: null,
    confidence: "low",
  },
  individual: {
    headline: "Start where the full experience starts",
    primary: {
      offerId: "ga",
      subPath: null,
      reasoning:
        "The open cohort is where you start. General Admission is the complete 7-day experience, and nothing about it is reduced. You leave with clarity on where you stand with AI and a plan for the six months that follow.",
    },
    alternate: {
      offerId: "vip",
      subPath: null,
      reasoning:
        "If you want direct guidance on your own situation during the week, VIP puts the facilitator's feedback on your work. It is capped at 10 seats.",
    },
    awakeningNote: null,
    confidence: "low",
  },
};

export function fallbackResult(seat) {
  return FALLBACKS[seat] || FALLBACKS.individual;
}
