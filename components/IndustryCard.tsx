import { Home, ShieldCheck, Scale, Landmark } from "lucide-react";
import type { Industry } from "@/lib/industries";

const icons = { Home, ShieldCheck, Scale, Landmark };

export default function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = icons[industry.icon];

  return (
    <div className="group rounded-2xl border border-line bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:bg-white hover:shadow-xl hover:shadow-ink/5">
      <Icon
        className="h-6 w-6 text-blue transition-transform duration-300 group-hover:scale-110"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <h3 className="mt-5 text-base font-semibold text-ink">{industry.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{industry.description}</p>
    </div>
  );
}
