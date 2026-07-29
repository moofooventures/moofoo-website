import { ChevronDown } from "lucide-react";

export default function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-2xl border border-line bg-white p-6 open:border-blue/40">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink marker:content-none">
        {question}
        <ChevronDown
          className="h-4 w-4 shrink-0 text-blue transition-transform duration-300 group-open:rotate-180"
          strokeWidth={2}
          aria-hidden="true"
        />
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-muted">{answer}</p>
    </details>
  );
}
