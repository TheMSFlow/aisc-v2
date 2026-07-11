"use client";

import OptionCard from "./OptionCard";

export default function QuestionStep({ question, value, onSelect }) {
  return (
    <div>
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-dark-blue/40">
        {question.eyebrow}
      </p>
      <h1 className="font-ptsans text-3xl font-bold uppercase leading-none tracking-tight text-dark-blue sm:text-4xl lg:text-5xl">
        {question.question}
      </h1>
      <div className="mt-10 flex flex-col gap-3">
        {question.options.map((o) => (
          <OptionCard
            key={o.id}
            label={o.label}
            selected={value === o.id}
            onSelect={() => onSelect(o.id)}
          />
        ))}
      </div>
    </div>
  );
}
