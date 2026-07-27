import { Radar, PhoneCall, LineChart, Sparkles } from "lucide-react";
import type { Capability } from "@/lib/capabilities";

const icons = { Radar, PhoneCall, LineChart, Sparkles };

export default function CapabilityCard({ capability }: { capability: Capability }) {
  const Icon = icons[capability.icon];

  return (
    <div className="group rounded-2xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-xl hover:shadow-ink/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-soft text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-ink">{capability.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {capability.description}
      </p>
    </div>
  );
}
