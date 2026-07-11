"use client";

export default function TextArea({
  value,
  onChange,
  maxLength = 600,
  placeholder = "",
  autoFocus = false,
  id,
}) {
  return (
    <div className="relative">
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, maxLength))}
        placeholder={placeholder}
        autoFocus={autoFocus}
        rows={5}
        className="w-full resize-none rounded-[8px] border border-dark-blue/15 bg-white p-4 pb-8 text-base leading-relaxed text-dark-blue placeholder:text-dark-blue/30 focus:border-msaccent focus:outline-none focus:ring-2 focus:ring-msaccent/30"
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-3 right-4 text-[10px] tracking-wider ${
          value.length > maxLength - 60 ? "text-warning/70" : "text-dark-blue/25"
        }`}
      >
        {value.length}/{maxLength}
      </span>
    </div>
  );
}
