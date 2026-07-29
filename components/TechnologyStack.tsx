import { Waypoints, Filter, Route, BarChart3, TrendingUp } from "lucide-react";

const layers = [
  {
    icon: Waypoints,
    title: "Tracking",
    description: "Every inquiry is tracked from the moment it originates.",
  },
  {
    icon: Filter,
    title: "Qualification",
    description: "Campaign rules evaluate each inquiry against defined criteria.",
  },
  {
    icon: Route,
    title: "Routing",
    description: "Qualified demand is directed to the right destination.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Source and outcome data are captured for every inquiry.",
  },
  {
    icon: TrendingUp,
    title: "Optimization",
    description: "Performance data informs ongoing campaign refinement.",
  },
];

export default function TechnologyStack() {
  return (
    <div className="relative flex flex-col gap-4">
      <div className="absolute top-6 bottom-6 left-[27px] hidden w-px bg-line sm:block" aria-hidden="true" />

      {layers.map((layer) => (
        <div
          key={layer.title}
          className="group relative flex items-center gap-6 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-xl hover:shadow-ink/5"
        >
          <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-white text-blue transition-all duration-300 group-hover:border-blue/40 group-hover:bg-blue-soft">
            <layer.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-ink">{layer.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{layer.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
