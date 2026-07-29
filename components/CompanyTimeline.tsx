import { Flag, Cpu, Layout, Sparkles, Layers, TrendingUp } from "lucide-react";

const stages = [
  {
    icon: Flag,
    title: "Founded",
    status: "Live",
    active: true,
    description: "MooFoo Ventures LLC is established as a technology and performance marketing company.",
  },
  {
    icon: Cpu,
    title: "Platform Development",
    status: "Live",
    active: true,
    description: "Core acquisition infrastructure — tracking, qualification, and routing — is built.",
  },
  {
    icon: Layout,
    title: "Digital Properties",
    status: "Live",
    active: true,
    description: "Industry-specific properties capture consumer demand.",
  },
  {
    icon: Sparkles,
    title: "AI Infrastructure",
    status: "In Progress",
    active: true,
    description: "AI-assisted tooling supports routing, qualification, and reporting.",
  },
  {
    icon: Layers,
    title: "Future SaaS",
    status: "Planned",
    active: false,
    description: "Packaging our infrastructure for outside operators.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth",
    status: "Planned",
    active: false,
    description: "Expanding technology and market reach over time.",
  },
];

export default function CompanyTimeline() {
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
