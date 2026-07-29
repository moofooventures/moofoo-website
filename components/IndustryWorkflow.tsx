import { Search, Layout, ListChecks, Waypoints, Handshake, BarChart3, ChevronRight } from "lucide-react";

const stages = [
  {
    icon: Search,
    title: "Consumer Search",
    description: "A consumer searches for help in a specific category.",
  },
  {
    icon: Layout,
    title: "Industry Landing Page",
    description: "They land on a page built around that category's intent.",
  },
  {
    icon: ListChecks,
    title: "Qualification",
    description: "Industry-specific rules evaluate the inquiry.",
  },
  {
    icon: Waypoints,
    title: "Routing",
    description: "Qualified demand is directed to the right destination.",
  },
  {
    icon: Handshake,
    title: "Partner",
    description: "A participating advertiser or network receives it.",
  },
  {
    icon: BarChart3,
    title: "Performance Reporting",
    description: "Outcome data feeds back into future decisions.",
  },
];

export default function IndustryWorkflow() {
  return (
    <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {stages.map((stage, i) => (
        <div key={stage.title} className="flex shrink-0 snap-start items-center gap-3">
          <div className="group w-[190px] rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-xl hover:shadow-ink/5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-soft text-blue transition-all duration-300 group-hover:scale-110 group-hover:bg-blue group-hover:text-white">
              <stage.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <p className="mt-4 text-sm font-semibold text-ink">{stage.title}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">{stage.description}</p>
          </div>

          {i < stages.length - 1 && (
            <ChevronRight
              className="h-4 w-4 shrink-0 animate-pulse text-blue/50"
              strokeWidth={2}
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}
