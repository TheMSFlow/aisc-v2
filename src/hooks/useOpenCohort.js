"use client";

import { useEffect, useState } from "react";

export function useOpenCohort(challengeSlug = "aisc") {
  const [openCohort, setOpenCohort] = useState(null);
  const [activeCohort, setActiveCohort] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchCohorts() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `/api/cohorts?challenge_slug=${encodeURIComponent(challengeSlug)}`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch cohorts");
        }

        const data = await res.json();

        if (!cancelled) {
          setOpenCohort(data.open ?? null);
          setActiveCohort(data.active ?? null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unknown error");
          setOpenCohort(null);
          setActiveCohort(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchCohorts();

    return () => {
      cancelled = true;
    };
  }, [challengeSlug]);

  return { openCohort, activeCohort, loading, error };
}
