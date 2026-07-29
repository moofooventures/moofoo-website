import { Cpu, Radar, BarChart3 } from "lucide-react";

const panels = [
  { x: 40, y: 40, icon: Radar, label: "Consumer Intent" },
  { x: 250, y: 10, icon: Cpu, label: "AI Infrastructure" },
  { x: 190, y: 190, icon: BarChart3, label: "Measurable Outcomes" },
];

export default function AboutHeroVisual() {
  return (
    <svg
      viewBox="0 0 460 280"
      preserveAspectRatio="xMidYMid meet"
      className="h-auto w-full max-w-md overflow-visible"
      role="img"
      aria-label="Abstract illustration of MooFoo Ventures' technology infrastructure: consumer intent, AI infrastructure, and measurable outcomes"
    >
      <defs>
        <filter id="about-hero-blur" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>

      <circle cx={230} cy={140} r={110} fill="var(--color-blue)" opacity={0.12} filter="url(#about-hero-blur)" className="animate-glow-breathe" />

      <path d="M75,75 C130,100 160,120 195,155" stroke="var(--color-ink)" strokeOpacity={0.15} strokeWidth={1.5} fill="none" />
      <path d="M285,55 C260,90 240,115 225,150" stroke="var(--color-ink)" strokeOpacity={0.15} strokeWidth={1.5} fill="none" />
      <path d="M100,70 C180,40 260,45 275,55" stroke="var(--color-ink)" strokeOpacity={0.15} strokeWidth={1.5} fill="none" />

      {panels.map((p) => (
        <g key={p.label}>
          <rect
            x={p.x}
            y={p.y}
            width={140}
            height={60}
            rx={14}
            fill="white"
            fillOpacity={0.85}
            stroke="var(--color-line)"
            strokeWidth={1.5}
          />
          <foreignObject x={p.x + 14} y={p.y + 12} width={36} height={36}>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-soft text-blue">
              <p.icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            </div>
          </foreignObject>
          <foreignObject x={p.x + 58} y={p.y + 18} width={78} height={30}>
            <p className="text-xs leading-tight font-medium text-ink">{p.label}</p>
          </foreignObject>
        </g>
      ))}
    </svg>
  );
}
