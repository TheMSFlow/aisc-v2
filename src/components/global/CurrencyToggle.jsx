"use client";

import { useLocation } from "@/context/LocationContext";

export default function CurrencyToggle({ className = "", dark = true }) {
  const { currency, setCurrency, ready } = useLocation();

  if (!ready) return null;

  return (
    <div
      className={`inline-flex border p-1 ${
        dark ? "border-white/15" : "border-dark-blue/15"
      } ${className}`}
      role="group"
      aria-label="Currency"
    >
      {["USD", "NGN"].map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => setCurrency(c)}
          aria-pressed={currency === c}
          className={`px-3 py-1 text-xs font-medium transition-colors ${
            currency === c
              ? dark
                ? "bg-white text-dark-blue"
                : "bg-dark-blue text-white"
              : dark
                ? "text-white/50 hover:text-white"
                : "text-dark-blue/50 hover:text-dark-blue"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
