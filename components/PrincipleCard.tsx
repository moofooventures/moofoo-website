function TransparencyIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path
        d="M4 20c4-7 10-10.5 16-10.5S32 13 36 20c-4 7-10 10.5-16 10.5S8 27 4 20z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

function InnovationIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path
        d="M20 6c-6 0-10 4.5-10 10 0 4 2 6.5 4 8.5.8.8 1 1.5 1 2.5v2h10v-2c0-1 .2-1.7 1-2.5 2-2 4-4.5 4-8.5 0-5.5-4-10-10-10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M17 33h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 6V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function TechnologyIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <rect x="13" y="13" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <path d="M20 6v5M20 29v5M6 20h5M29 20h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MeasurementIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M8 28a12 12 0 1 1 24 0" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 28V17M20 28l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="28" r="1.8" fill="currentColor" />
    </svg>
  );
}

function LongTermIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <circle cx="20" cy="22" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="22" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="20" cy="22" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path d="M20 8V4M20 4l-3 3M20 4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PartnershipIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <circle cx="15" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <circle cx="25" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export type Principle = {
  slug: string;
  icon: "transparency" | "innovation" | "technology" | "measurement" | "longterm" | "partnership";
  title: string;
  description: string;
};

const icons = {
  transparency: TransparencyIcon,
  innovation: InnovationIcon,
  technology: TechnologyIcon,
  measurement: MeasurementIcon,
  longterm: LongTermIcon,
  partnership: PartnershipIcon,
};

export default function PrincipleCard({ item }: { item: Principle }) {
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
