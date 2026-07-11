import { z } from "zod";
import { SEAT_IDS } from "./questions";

const openAnswer = z.string().trim().max(600);

export const requestSchema = z.object({
  seat: z.enum(SEAT_IDS),
  leads: openAnswer.min(1),
  pressing: openAnswer.min(1),
  picture: openAnswer.optional().default(""),
  currency: z.enum(["USD", "NGN"]).optional().default("USD"),
  // Honeypot: real visitors never fill this.
  company: z.string().optional().default(""),
});

const offerEnum = z.enum([
  "ga",
  "vip",
  "vvip",
  "customCohort",
  "coaching",
  "awakening",
]);

const subPathEnum = z.enum(["briefing", "sponsor"]);

const pick = z.object({
  offerId: offerEnum,
  subPath: subPathEnum.nullable(),
  reasoning: z.string(),
});

export const resultSchema = z.object({
  headline: z.string(),
  primary: pick,
  alternate: pick,
  awakeningNote: z
    .object({ subPath: subPathEnum, reasoning: z.string() })
    .nullable(),
  confidence: z.enum(["high", "medium", "low"]),
});
