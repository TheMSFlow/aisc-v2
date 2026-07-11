"use client";

export default function OptionCard({ label, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`w-full rounded-[8px] border p-5 text-left text-sm leading-relaxed transition-colors sm:text-base ${
        selected
          ? "border-msaccent bg-lilac/60 text-dark-blue"
          : "border-dark-blue/10 bg-white text-dark-blue/75 hover:border-msaccent/40 hover:text-dark-blue"
      }`}
    >
      {label}
    </button>
  );
}
