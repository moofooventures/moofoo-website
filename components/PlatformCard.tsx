function DigitalPropertiesIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <rect x="6" y="9" width="28" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 15h28" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10.5" cy="12" r="0.9" fill="currentColor" />
      <circle cx="14" cy="12" r="0.9" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function QualificationLogicIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path
        d="M7 8h26l-9 12v10l-8 4V20z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M23 28l2.5 2.5 5-5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RoutingInfrastructureIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <circle cx="12" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="28" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <circle cx="28" cy="20" r="2.2" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <circle cx="28" cy="30" r="2.2" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <path d="M15 19l10-8M15 20h10M15 21l10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PerformanceMeasurementIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M7 30V22M15 30V17M23 30V11M31 30v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 30h30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M24 10l7-1 1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export type PlatformPillar = {
  slug: string;
  icon: "properties" | "qualification" | "routing" | "measurement";
  title: string;
  description: string;
};

const icons = {
  properties: DigitalPropertiesIcon,
  qualification: QualificationLogicIcon,
  routing: RoutingInfrastructureIcon,
  measurement: PerformanceMeasurementIcon,
};

export default function PlatformCard({ item }: { item: PlatformPillar }) {
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
