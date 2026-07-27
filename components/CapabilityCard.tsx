import type { Capability } from "@/lib/capabilities";

function AcquisitionIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
      <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
      <circle cx="20" cy="6" r="2.5" fill="currentColor" />
    </svg>
  );
}

function PayPerCallIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path
        d="M12 14c0-1.1.9-2 2-2h2l2 5-2 2c1 3 3 5 6 6l2-2 5 2v2c0 1.1-.9 2-2 2-8-1-14-7-15-15z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M25 10c2 1 3.5 2.5 4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M27 6c3 1.5 5 4 6.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

function LeadGenerationIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path
        d="M9 9h20l-7.5 10.5v7.5l-5 2.5v-10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M27 13 33 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M27 7h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AiSoftwareIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <rect x="12" y="12" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
      <path
        d="M20 6v4M20 30v4M6 20h4M30 20h4M9 9l3 3M28 28l3 3M31 9l-3 3M12 28l-3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const icons = {
  acquisition: AcquisitionIcon,
  "pay-per-call": PayPerCallIcon,
  "lead-generation": LeadGenerationIcon,
  "ai-software": AiSoftwareIcon,
};

export default function CapabilityCard({ capability }: { capability: Capability }) {
  const Icon = icons[capability.icon];

  return (
    <div className="group rounded-2xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-xl hover:shadow-ink/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-soft text-blue transition-all duration-300 group-hover:scale-110 group-hover:bg-blue group-hover:text-white">
        <Icon />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-ink">{capability.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {capability.description}
      </p>
    </div>
  );
}
