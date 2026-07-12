/**
 * Single source of truth for The Awakening blog taxonomy.
 *
 * Every entry: { id, label, shortLabel, description, seo: { title, description }, blurb }
 * - `seo` feeds generateMetadata on the category landing page
 * - `blurb` is the on-page intro under the category heading
 *
 * IDs appear in URLs and in article frontmatter. Never rename an id without
 * adding a redirect; add new entries freely.
 */

export const INDUSTRIES = {
  business: {
    id: "business",
    label: "Business & Corporate",
    shortLabel: "Business",
    description:
      "Executives and owners leading companies through the AI transition.",
    seo: {
      title: "AI Leadership for Business & Corporate Leaders",
      description:
        "Briefings for executives and business owners on leading with AI: clarity, governance, and the territory opening in your market before your competitors claim it.",
    },
    blurb:
      "Your competitors are not waiting for clarity. These briefings cover what AI means for the businesses you run, the people you lead, and the decisions only you can make.",
  },
  faith: {
    id: "faith",
    label: "Faith & Ministry",
    shortLabel: "Faith",
    description:
      "Pastors, bishops, and ministry leaders stewarding communities through the AI era.",
    seo: {
      title: "AI Leadership for Faith & Ministry Leaders",
      description:
        "Briefings for pastors and ministry leaders on AI: protecting your people from what is coming, redeeming your time, and leading your community with clarity.",
    },
    blurb:
      "Your congregation will meet AI with or without your guidance. These briefings help you lead that encounter instead of reacting to it.",
  },
  government: {
    id: "government",
    label: "Government & Politics",
    shortLabel: "Government",
    description:
      "Public officials, policy leaders, and campaign teams navigating AI in the public sphere.",
    seo: {
      title: "AI Leadership for Government & Public Sector Leaders",
      description:
        "Briefings for public officials and policy leaders on AI governance, public trust, and the decisions the public sphere cannot delegate to vendors.",
    },
    blurb:
      "The public sphere is where ungoverned AI does its most visible damage. These briefings cover the judgment calls that cannot be outsourced.",
  },
  creators: {
    id: "creators",
    label: "Creator Economy & Media",
    shortLabel: "Creators",
    description:
      "Influencers, media leaders, and creators whose platform is their institution.",
    seo: {
      title: "AI Leadership for Creators & Media Leaders",
      description:
        "Briefings for creators and media leaders on AI: protecting your voice, multiplying your output, and claiming territory in a market AI just reopened.",
    },
    blurb:
      "AI made content abundant, which made a trusted voice scarce. These briefings are about leading your audience, not just feeding it.",
  },
  healthcare: {
    id: "healthcare",
    label: "Healthcare",
    shortLabel: "Healthcare",
    description:
      "Healthcare executives and clinical leaders balancing AI's promise against its risk.",
    seo: {
      title: "AI Leadership for Healthcare Leaders",
      description:
        "Briefings for healthcare executives on AI: governance where the stakes are human, time redeemed from administration, and leading clinicians through the transition.",
    },
    blurb:
      "Nowhere are the stakes of ungoverned AI higher than where patients are involved. These briefings cover leading the transition safely.",
  },
  education: {
    id: "education",
    label: "Education",
    shortLabel: "Education",
    description:
      "School leaders, administrators, and academic executives leading institutions through AI.",
    seo: {
      title: "AI Leadership for Education Leaders",
      description:
        "Briefings for education leaders on AI: policy your institution actually needs, faculty who are already using it, and preparing students for what is coming.",
    },
    blurb:
      "Your students and faculty adopted AI before your institution wrote a policy. These briefings help you lead from in front of that reality.",
  },
  nonprofit: {
    id: "nonprofit",
    label: "Nonprofit",
    shortLabel: "Nonprofit",
    description:
      "Nonprofit executives doing more mission with fewer resources through AI.",
    seo: {
      title: "AI Leadership for Nonprofit Leaders",
      description:
        "Briefings for nonprofit executives on AI: multiplying limited teams, protecting donor trust, and claiming the leverage AI offers mission-driven work.",
    },
    blurb:
      "No sector benefits more from abundance of intelligence than the one that never had abundance of anything. These briefings cover the leverage.",
  },
  finance: {
    id: "finance",
    label: "Finance",
    shortLabel: "Finance",
    description:
      "Financial services leaders navigating AI under regulation and fiduciary duty.",
    seo: {
      title: "AI Leadership for Finance Leaders",
      description:
        "Briefings for financial services leaders on AI: fiduciary-grade governance, regulatory exposure, and the advantage that goes to the first fluent leadership team.",
    },
    blurb:
      "In finance, AI is both the largest opportunity on the board agenda and the largest unpriced risk. These briefings cover both sides.",
  },
};

export const AUDIENCES = {
  chiefs: {
    id: "chiefs",
    seatId: "chief",
    label: "Chiefs",
    shortLabel: "Chiefs",
    description:
      "Leaders with responsibility, influence, and resources. CEOs, founders, senior pastors, public leaders.",
    seo: {
      title: "AI Briefings for Chiefs & C-Suite Leaders",
      description:
        "Executive briefings on AI for leaders who own the decision: clarity without the jargon, governance before the exposure, and the mandate your seat requires.",
    },
    blurb:
      "You do not need to understand AI like an engineer. You need to understand it like a leader. These briefings are written for the seat where the decision stops.",
  },
  "leaders-of-leaders": {
    id: "leaders-of-leaders",
    seatId: "leader_of_leaders",
    label: "Leaders of Leaders",
    shortLabel: "Leaders of Leaders",
    description:
      "VPs, directors, and owners of small teams. Squeezed between the mandate above and the team below.",
    seo: {
      title: "AI Briefings for Leaders of Leaders",
      description:
        "Briefings for VPs, directors, and team owners on AI: frameworks to execute with, language to translate upward, and clarity to lead downward.",
    },
    blurb:
      "You translate strategy downward and reality upward, and AI just changed both directions. These briefings give you the framework, not the hype.",
  },
  "emerging-leaders": {
    id: "emerging-leaders",
    seatId: "emerging",
    label: "Emerging Leaders",
    shortLabel: "Emerging",
    description:
      "Junior managers, early founders, and rising leaders building influence before the title arrives.",
    seo: {
      title: "AI Briefings for Emerging Leaders",
      description:
        "Briefings for rising leaders on AI: become the most fluent person in the room, earn influence before the title, and claim territory early.",
    },
    blurb:
      "The fastest route to influence you do not yet have is fluency the room does not yet have. These briefings are your head start.",
  },
};

// Formats map one-to-one onto the AISC pillars:
// insight -> AI Clarity, guide -> AI Fluency, value -> AI Value.
// The "article" format was retired 2026-07 (folded into insight).
export const TYPES = {
  insight: {
    id: "insight",
    label: "Insights",
    shortLabel: "Insight",
    pillar: "AI Clarity",
    description:
      "Pieces that deliver AI Clarity: an honest picture of AI, the exposure of waiting, and what the moment asks of your seat.",
    seo: {
      title: "AI Insights for Leaders | Clarity Without the Hype",
      description:
        "Thought-provoking insights that deliver AI Clarity: what AI actually is, the cost of ungoverned adoption, and what this moment asks of leaders.",
    },
    blurb:
      "The clarity pieces. Each insight changes how you see AI, your exposure, and your moment, so your position is one you built rather than borrowed.",
  },
  guide: {
    id: "guide",
    label: "Guides",
    shortLabel: "Guide",
    pillar: "AI Fluency",
    description:
      "Playbooks that build AI Fluency: working with AI deliberately, in ways that are effective, efficient, ethical, and safe.",
    seo: {
      title: "Practical AI Guides for Leaders | Build Fluency",
      description:
        "Step-by-step guides that build AI Fluency: first moves, working frameworks, and playbooks a leader can run this week.",
    },
    blurb:
      "The fluency pieces. Playbooks, not theory: each guide is a sequence of moves a leader can run this week to work with AI deliberately.",
  },
  value: {
    id: "value",
    label: "Value",
    shortLabel: "Value",
    pillar: "AI Value",
    description:
      "Pieces that deliver AI Value: how to spot the money AI opens in your world and claim it before anyone else does.",
    seo: {
      title: "AI Value for Leaders | Turn AI Into Money and Margin",
      description:
        "Value briefings for leaders: how to spot where AI turns into revenue, margin, and new offers in your world, and how to claim that ground first.",
    },
    blurb:
      "The money pieces. Nobody knows your world better than you, so each one trains you to spot the value AI just opened in it, and to claim it deliberately.",
  },
};

export const ALL_INDUSTRY_IDS = Object.keys(INDUSTRIES);
export const ALL_AUDIENCE_IDS = Object.keys(AUDIENCES);
export const ALL_TYPE_IDS = Object.keys(TYPES);

export function getIndustry(id) {
  return INDUSTRIES[id] ?? null;
}

export function getAudience(id) {
  return AUDIENCES[id] ?? null;
}

export function getType(id) {
  return TYPES[id] ?? null;
}
