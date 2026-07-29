import { Home, ShieldCheck, Scale, Landmark, LayoutGrid, Cpu, Waypoints, Route, BarChart3, TrendingUp } from "lucide-react";

const HUB = { x: 450, y: 190 };

const branches = [
  { x: 80, y: 55, icon: Home, label: "Home Services" },
  { x: 265, y: 55, icon: ShieldCheck, label: "Insurance" },
  { x: 450, y: 40, icon: Scale, label: "Legal" },
  { x: 635, y: 55, icon: Landmark, label: "Consumer Financial Services" },
  { x: 820, y: 55, icon: LayoutGrid, label: "Future Markets" },
];

const stack = [
  { x: 260, icon: Waypoints, label: "Tracking" },
  { x: 390, icon: Route, label: "Routing" },
  { x: 510, icon: BarChart3, label: "Analytics" },
  { x: 640, icon: TrendingUp, label: "Optimization" },
];

const STACK_Y = 330;

export default function PlatformHubDiagram({ showStack = false }: { showStack?: boolean }) {
  return (
    <svg
      viewBox={showStack ? "0 0 900 400" : "0 0 900 260"}
      preserveAspectRatio="xMidYMid meet"
      className="h-auto w-full max-w-5xl overflow-visible"
      role="img"
      aria-label="Diagram showing the MooFoo Platform at the center, connected to Home Services, Insurance, Legal, Consumer Financial Services, and Future Markets"
    >
      <defs>
        <filter id="hub-blur" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      <circle cx={HUB.x} cy={HUB.y} r={90} fill="var(--color-blue)" opacity={0.14} filter="url(#hub-blur)" className="animate-glow-breathe" />

      {branches.map((b, i) => {
        const midY = (b.y + HUB.y) / 2;
        const d = `M${b.x},${b.y + 22} C${b.x},${midY} ${HUB.x},${midY} ${HUB.x},${HUB.y - 40}`;
        return (
          <g key={b.label}>
            <path d={d} fill="none" stroke="var(--color-ink)" strokeOpacity={0.12} strokeWidth={1.5} />
            <circle
              r={3.5}
              fill="var(--color-blue)"
              style={{ offsetPath: `path('${d}')`, animation: `connection-flow 4.2s ease-in-out ${i * 0.5}s infinite` }}
            />
            <circle cx={b.x} cy={b.y} r={22} fill="white" stroke="var(--color-line)" strokeWidth={1.5} />
            <foreignObject x={b.x - 13} y={b.y - 13} width={26} height={26}>
              <div className="flex h-[26px] w-[26px] items-center justify-center text-blue">
                <b.icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </div>
            </foreignObject>
            <foreignObject x={b.x - 70} y={b.y + 26} width={140} height={32}>
              <p className="text-center text-xs leading-tight font-medium text-ink">{b.label}</p>
            </foreignObject>
          </g>
        );
      })}

      {showStack &&
        stack.map((s, i) => {
          const midY = (STACK_Y + HUB.y) / 2;
          const d = `M${s.x},${STACK_Y - 18} C${s.x},${midY} ${HUB.x},${midY} ${HUB.x},${HUB.y + 40}`;
          return (
            <g key={s.label}>
              <path d={d} fill="none" stroke="var(--color-ink)" strokeOpacity={0.12} strokeWidth={1.5} />
              <circle
                r={3.5}
                fill="var(--color-blue)"
                style={{ offsetPath: `path('${d}')`, animation: `connection-flow 3.6s ease-in-out ${i * 0.5}s infinite` }}
              />
              <circle cx={s.x} cy={STACK_Y} r={18} fill="var(--color-gray-50)" stroke="var(--color-line)" strokeWidth={1.5} />
              <foreignObject x={s.x - 11} y={STACK_Y - 11} width={22} height={22}>
                <div className="flex h-[22px] w-[22px] items-center justify-center text-blue">
                  <s.icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                </div>
              </foreignObject>
              <foreignObject x={s.x - 50} y={STACK_Y + 22} width={100} height={20}>
                <p className="text-center text-[11px] font-medium text-muted">{s.label}</p>
              </foreignObject>
            </g>
          );
        })}

      <circle cx={HUB.x} cy={HUB.y} r={44} fill="none" stroke="var(--color-ink)" strokeOpacity={0.2} strokeWidth={1.5} strokeDasharray="1 8" strokeLinecap="round" className="animate-spin-slow" />
      <circle cx={HUB.x} cy={HUB.y} r={30} fill="var(--color-ink)" />
      <foreignObject x={HUB.x - 12} y={HUB.y - 12} width={24} height={24}>
        <div className="flex h-6 w-6 items-center justify-center text-blue-soft">
          <Cpu className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </div>
      </foreignObject>
      <foreignObject x={HUB.x - 70} y={HUB.y + 48} width={140} height={20}>
        <p className="text-center text-xs font-semibold tracking-wide text-ink">MooFoo Platform</p>
      </foreignObject>
    </svg>
  );
}
