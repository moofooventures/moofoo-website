function ConsumerIntentIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <circle cx="17" cy="17" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="17" r="4" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="17" cy="17" r="1.2" fill="currentColor" />
      <path d="M24.5 24.5 32 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function TransparentMeasurementIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path
        d="M8 30V22M17 30V15M26 30V9M32 30H6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12H32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 3"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

function AiOptimizationIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <circle cx="20" cy="20" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M20 24v-8M20 16l-3.5 3.5M20 16l3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="14" r="1.8" fill="currentColor" opacity="0.5" />
      <circle cx="8" cy="26" r="1.8" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function LongTermInfrastructureIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <rect x="10" y="24" width="20" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13" y="16" width="14" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
      <rect x="16" y="8" width="8" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

export type Differentiator = {
  slug: string;
  icon: "intent" | "measurement" | "optimization" | "infrastructure";
  title: string;
  description: string;
};

const icons = {
  intent: ConsumerIntentIcon,
  measurement: TransparentMeasurementIcon,
  optimization: AiOptimizationIcon,
  infrastructure: LongTermInfrastructureIcon,
};

export default function DifferentiatorCard({ item }: { item: Differentiator }) {
  const Icon = icons[item.icon];

  return (
    <div className="group rounded-2xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-xl hover:shadow-ink/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-soft text-blue transition-all duration-300 group-hover:scale-110 group-hover:bg-blue group-hover:text-white">
        <Icon />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-ink">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
    </div>
  );
}
