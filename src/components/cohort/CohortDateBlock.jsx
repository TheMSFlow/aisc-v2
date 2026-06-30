"use client";

import { useCohort } from "@/context/CohortContext";
import { useCountdown } from "@/hooks/useCountdown";
import { formatCohortDates } from "@/utils/cohortFormat";

export default function CohortDateBlock() {
  const { openCohort, loading } = useCohort();
  const { label } = useCountdown(openCohort?.start_date ?? null);

  if (loading) {
    return <div className="text-sm text-lilac/60">Loading dates…</div>;
  }

  if (!openCohort) {
    return (
      <div className="space-y-1 text-sm text-lilac/60">
        <p>Dates coming soon</p>
        <p>Time to be announced</p>
      </div>
    );
  }

  const displayCohort = {
    ...openCohort,
    end_date: openCohort.final_date ?? openCohort.end_date,
  };
  const { dateRange, startTime } = formatCohortDates(displayCohort);

  return (
    <dl className="space-y-3">
      <div>
        <dt className="text-xs uppercase tracking-widest text-lilac/50">
          Dates
        </dt>
        <dd className="text-lg text-white">{dateRange}</dd>
      </div>
      <div>
        <dt className="text-xs uppercase tracking-widest text-lilac/50">
          Time
        </dt>
        <dd className="text-lg text-white">{startTime}</dd>
      </div>
      {label && (
        <p className="inline-flex items-center rounded-full bg-warning/15 px-3 py-1 text-sm font-medium text-warning">
          {label}
        </p>
      )}
    </dl>
  );
}
