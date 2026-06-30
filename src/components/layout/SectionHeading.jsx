export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  dark = true,
  className = "",
}) {
  const wrap =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <div className={`${wrap} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] ${
            dark ? "text-white/40" : "text-dark-blue/40"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-ptsans text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-dark-blue"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            dark ? "text-white/60" : "text-dark-blue/60"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
