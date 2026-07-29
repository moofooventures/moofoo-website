import { PhoneCall, Radar, Cpu, Layers } from "lucide-react";

const stages = [
  {
    icon: PhoneCall,
    title: "Pay Per Call",
    status: "Live",
    active: true,
    description: "Compliant inbound call campaigns operating today.",
  },
  {
    icon: Radar,
    title: "Lead Generation",
    status: "Live",
    active: true,
    description: "Digital properties capturing high-intent consumer demand.",
  },
  {
    icon: Cpu,
    title: "AI Infrastructure",
    status: "In Progress",
    active: true,
    description: "Internal tooling for routing, qualification, and reporting.",
  },
  {
    icon: Layers,
    title: "Future SaaS",
    status: "Planned",
    active: false,
    description: "Packaging our infrastructure for outside operators.",
  },
];

export default function RoadmapCards() {
  return (
    <div className="relative flex flex-col gap-6 md:flex-row">
      <div className="absolute top-6 right-6 left-6 hidden h-px bg-line md:block" aria-hidden="true" />

      {stages.map((stage) => (
        <div key={stage.title} className="relative flex-1">
          <div
            className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border ${
              stage.active ? "border-blue bg-ink text-white" : "border-line bg-white text-muted"
            }`}
          >
            <stage.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          </div>

          <div className="mt-5 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-xl hover:shadow-ink/5">
            <span
              className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${
                stage.active ? "bg-blue-soft text-blue" : "bg-gray-100 text-muted"
              }`}
            >
              {stage.status}
            </span>
            <h3 className="mt-4 text-base font-semibold text-ink">{stage.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{stage.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
