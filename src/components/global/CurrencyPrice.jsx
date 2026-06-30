"use client";

import { useLocation } from "@/context/LocationContext";

const formatters = {
  USD: new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  }),
  NGN: new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  }),
};

// Usage: <CurrencyPrice {...PRICING.vip} />
export default function CurrencyPrice({
  usd,
  ngn,
  className = "",
  placeholder = "\u2014",
}) {
  const { currency, ready } = useLocation();

  // Avoid the USD->NGN flicker before detection settles.
  if (!ready) {
    return (
      <span className={className} aria-hidden="true">
        {placeholder}
      </span>
    );
  }

  const amount = currency === "NGN" ? ngn : usd;
  return (
    <span className={className}>{formatters[currency].format(amount)}</span>
  );
}
