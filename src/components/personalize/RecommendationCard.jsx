"use client";

import Button from "@/components/global/Button";
import CurrencyPrice from "@/components/global/CurrencyPrice";

function PriceLine({ offer, dark }) {
  const strong = dark ? "text-white" : "text-dark-blue";
  const quiet = dark ? "text-white/55" : "text-dark-blue/55";

  if (offer.priceKind === "fixed") {
    return (
      <CurrencyPrice
        {...offer.price}
        className={`font-ptsans text-4xl font-bold leading-none ${strong}`}
      />
    );
  }

  if (offer.priceKind === "plans") {
    return (
      <div className="flex flex-col gap-2">
        {offer.plans.map((p) => (
          <div key={p.label} className="flex items-baseline gap-3">
            <CurrencyPrice
              {...p.price}
              className={`font-ptsans text-xl font-bold leading-none ${strong}`}
            />
            <span className={`text-xs ${quiet}`}>
              {p.label}
              {p.note ? ` · ${p.note}` : ""}
            </span>
          </div>
        ))}
      </div>
    );
  }

  // custom / onRequest / free
  return (
    <p className={`font-ptsans text-2xl font-bold leading-none ${strong}`}>
      {offer.priceNote}
    </p>
  );
}

export default function RecommendationCard({ offer, reasoning, primary = false }) {
  const dark = primary;
  const buttonVariant =
    dark && offer.buttonVariant === "dark" ? "primary" : offer.buttonVariant;

  return (
    <div
      className={`flex flex-col gap-7 rounded-[8px] p-8 lg:p-10 ${
        dark
          ? "bg-dark-blue text-white"
          : "border border-dark-blue/10 bg-white text-dark-blue"
      }`}
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3
            className={`font-ptsans text-xl font-bold uppercase tracking-tight ${
              dark ? "text-white" : "text-dark-blue"
            }`}
          >
            {offer.name}
          </h3>
          {offer.badge && (
            <span
              className={`shrink-0 border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest ${
                dark
                  ? "border-white/20 text-white/45"
                  : "border-dark-blue/15 text-dark-blue/45"
              }`}
            >
              {offer.badge}
            </span>
          )}
        </div>

        <div className="mt-5">
          <PriceLine offer={offer} dark={dark} />
        </div>

        <p
          className={`mt-5 text-sm leading-relaxed sm:text-base ${
            dark ? "text-white/65" : "text-dark-blue/65"
          }`}
        >
          {reasoning}
        </p>
      </div>

      <div>
        <Button
          href={offer.href}
          variant={buttonVariant}
          className="w-full justify-center py-3 sm:w-auto sm:px-10"
        >
          {offer.cta}
        </Button>
        {offer.ctaNote && (
          <p
            className={`mt-3 text-xs ${dark ? "text-white/40" : "text-dark-blue/40"}`}
          >
            {offer.ctaNote}
          </p>
        )}
      </div>
    </div>
  );
}
