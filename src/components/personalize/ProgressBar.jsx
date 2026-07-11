"use client";

export default function ProgressBar({ step, total }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-dark-blue/40">
        {step} of {total}
      </p>
      <div className="mt-3 h-px w-full bg-dark-blue/10">
        <div
          className="h-px bg-msaccent transition-all duration-500"
          style={{ width: `${(step / total) * 100}%` }}
        />
      </div>
    </div>
  );
}
