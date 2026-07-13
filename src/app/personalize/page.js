import Link from "next/link";
import PersonalizeFlow from "@/components/personalize/PersonalizeFlow";

export const metadata = {
  title: "Find Your Path | AI Stakeholder Challenge",
  description:
    "A few honest answers about your seat, your world, and what brought you here. Then the path into the AI Stakeholder Challenge that fits, with the reasoning to back it.",
  alternates: { canonical: "/personalize" },
};

export default function PersonalizePage() {
  return (
    <main className="flex min-h-screen flex-col bg-offwhite">
      <div className="px-5 py-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-ptsans text-lg tracking-wide text-dark-blue sm:text-xl"
        >
          AI STAKEHOLDER <span className="font-bold">CHALLENGE</span>
        </Link>
      </div>
      <PersonalizeFlow />
    </main>
  );
}
