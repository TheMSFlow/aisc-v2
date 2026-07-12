export default function Callout({ label, children }) {
  return (
    <aside className="my-10 border-l-2 border-msaccent bg-lilac/40 px-6 py-5">
      {label && (
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-dark-blue/50">
          {label}
        </p>
      )}
      <div className="text-base leading-relaxed text-dark-blue/80">
        {children}
      </div>
    </aside>
  );
}
