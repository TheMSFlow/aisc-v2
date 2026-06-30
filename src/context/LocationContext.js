"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const LocationContext = createContext(null);

const STORAGE_KEY = "aisc_currency"; // manual override
const GEO_COOKIE = "aisc_geo"; // set by middleware from the edge

function readCookie(name) {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="));
  return match ? decodeURIComponent(match.split("=")[1]) : null;
}

export function LocationProvider({ children }) {
  const [currency, setCurrencyState] = useState("USD"); // safe default for SSR
  const [country, setCountry] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // 1. A saved manual choice always wins.
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "NGN" || saved === "USD") {
        setCurrencyState(saved);
        setReady(true);
        return;
      }
    } catch {}

    // 2. Edge-detected currency from middleware (Vercel geo header).
    const geo = readCookie(GEO_COOKIE);
    if (geo === "NGN" || geo === "USD") {
      if (geo === "NGN") setCountry("NG");
      setCurrencyState(geo);
      setReady(true);
      return;
    }

    // 3. Local dev / non-Vercel fallback: browser timezone.
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz === "Africa/Lagos") {
        setCountry("NG");
        setCurrencyState("NGN");
      }
    } catch {}

    setReady(true);
  }, []);

  const setCurrency = useCallback((next) => {
    setCurrencyState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  const toggleCurrency = useCallback(() => {
    setCurrency(currency === "NGN" ? "USD" : "NGN");
  }, [currency, setCurrency]);

  // Pick the right value from a { usd, ngn } pair.
  // e.g. price({ usd: "$199", ngn: "\u20a6225,000" })
  const price = useCallback(
    ({ usd, ngn }) => (currency === "NGN" ? ngn : usd),
    [currency],
  );

  const value = {
    currency,
    country,
    ready,
    isNaira: currency === "NGN",
    setCurrency,
    toggleCurrency,
    price,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const ctx = useContext(LocationContext);
  if (!ctx) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return ctx;
}
