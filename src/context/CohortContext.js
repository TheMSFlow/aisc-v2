"use client";

import { createContext, useContext } from "react";
import { useOpenCohort } from "@/hooks/useOpenCohort";

const CohortContext = createContext(null);

export function CohortProvider({ children, challengeSlug = "aisc" }) {
  const value = useOpenCohort(challengeSlug); // { openCohort, activeCohort, loading, error }
  return (
    <CohortContext.Provider value={value}>{children}</CohortContext.Provider>
  );
}

export function useCohort() {
  const ctx = useContext(CohortContext);
  if (!ctx) {
    throw new Error("useCohort must be used within a CohortProvider");
  }
  return ctx;
}
