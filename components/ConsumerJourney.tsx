import { Search, Eye, PhoneCall, ListChecks, Waypoints, BarChart3 } from "lucide-react";

const stages = [
  { icon: Search, label: "Searching", description: "A consumer looks for help with a specific need." },
  { icon: Eye, label: "Discovering", description: "They find a MooFoo-operated digital property." },
  { icon: PhoneCall, label: "Connecting", description: "They voluntarily call or submit an inquiry." },
  { icon: ListChecks, label: "Qualifying", description: "Campaign rules evaluate the inquiry." },
  { icon: Waypoints, label: "Routing", description: "Qualified demand reaches the right destination." },
  { icon: BarChart3, label: "Measuring", description: "Outcome data informs future performance." },
];

export default function ConsumerJourney() {
  return (
    <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:gap-0">
      <div className="absolute top-6 right-6 left-6 hidden h-px bg-line md:block" aria-hidden="true" />

      {stages.map((stage) => (
        <div
          key={stage.label}
          className="group relative flex flex-1 flex-col items-start md:items-center md:px-3 md:text-center"
        >
          <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-white text-blue transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue/40 group-hover:shadow-lg group-hover:shadow-ink/5">
            <stage.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <h3 className="mt-4 text-sm font-semibold text-ink">{stage.label}</h3>
          <p className="mt-1.5 max-w-[160px] text-xs leading-relaxed text-muted">
            {stage.description}
          </p>
        </div>
      ))}
    </div>
  );
}
