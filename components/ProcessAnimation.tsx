const CORE = { x: 550, y: 130 };

const origins = [
  { x: 50, y: 50, r: 4, delay: "0s" },
  { x: 85, y: 95, r: 3, delay: "0.6s" },
  { x: 45, y: 140, r: 5, delay: "1.2s" },
  { x: 90, y: 185, r: 3.5, delay: "1.8s" },
  { x: 55, y: 225, r: 4, delay: "2.4s" },
];

const intake = { x: 300, y: 130 };

const lanes = [
  {
    id: "lane1",
    d: "M645,130 C780,130 850,60 1060,55",
    delay: "0s",
    status: "qualified" as const,
    dest: { x: 1060, y: 55 },
  },
  {
    id: "lane2",
    d: "M645,130 C740,130 780,110 800,100",
    delay: "0.5s",
    status: "filtered" as const,
  },
  {
    id: "lane3",
    d: "M645,130 C800,130 900,130 1060,130",
    delay: "1s",
    status: "qualified" as const,
    dest: { x: 1060, y: 130 },
  },
  {
    id: "lane4",
    d: "M645,130 C740,130 780,150 800,160",
    delay: "1.5s",
    status: "filtered" as const,
  },
  {
    id: "lane5",
    d: "M645,130 C780,130 850,200 1060,210",
    delay: "2s",
    status: "qualified" as const,
    dest: { x: 1060, y: 210 },
  },
];

export default function ProcessAnimation() {
  return (
    <svg
      viewBox="0 0 1100 260"
      preserveAspectRatio="xMidYMid meet"
      className="h-auto w-full max-w-5xl"
      role="img"
      aria-label="Animated system diagram: scattered consumer demand signals converge into an AI qualification core, which routes qualified demand onward while filtering out non-qualified inquiries"
    >
      <defs>
        <pattern id="dot-grid" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx={2} cy={2} r={1} fill="var(--color-metal)" opacity={0.5} />
        </pattern>
        <filter id="core-blur-2" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      <rect x={0} y={0} width={1100} height={260} fill="url(#dot-grid)" />

      {/* Demand cluster converging toward the intake point */}
      {origins.map((o, i) => (
        <path
          key={`conv-${i}`}
          d={`M${o.x},${o.y} Q${intake.x - 60},${o.y} ${intake.x},${intake.y}`}
          fill="none"
          stroke="var(--color-ink)"
          strokeOpacity={0.1}
          strokeWidth={1.25}
        />
      ))}

      {origins.map((o, i) => (
        <g key={`origin-${i}`}>
          <circle cx={o.x} cy={o.y} r={o.r + 6} fill="none" stroke="var(--color-blue)" strokeOpacity={0.3} strokeWidth={1.25} className="animate-signal-ping" style={{ animationDelay: o.delay }} />
          <circle cx={o.x} cy={o.y} r={o.r} fill="var(--color-metal)" />
        </g>
      ))}

      {/* Intake -> core */}
      <path d={`M${intake.x},${intake.y} C${intake.x + 100},${intake.y} ${CORE.x - 130},${CORE.y} ${CORE.x - 95},${CORE.y}`} fill="none" stroke="var(--color-ink)" strokeOpacity={0.12} strokeWidth={1.5} />
      <circle
        r={3.5}
        fill="var(--color-blue)"
        style={{
          offsetPath: `path('M${intake.x},${intake.y} C${intake.x + 100},${intake.y} ${CORE.x - 130},${CORE.y} ${CORE.x - 95},${CORE.y}')`,
          animation: "connection-flow 3s ease-in-out infinite",
        }}
      />

      {/* Qualification gate */}
      <line x1={760} y1={40} x2={760} y2={220} stroke="var(--color-ink)" strokeOpacity={0.14} strokeWidth={1.25} strokeDasharray="2 7" />

      {/* Output lanes */}
      {lanes.map((lane) => (
        <path key={`${lane.id}-line`} d={lane.d} fill="none" stroke="var(--color-ink)" strokeOpacity={0.1} strokeWidth={1.25} />
      ))}
      {lanes.map((lane) => (
        <circle
          key={`${lane.id}-dot`}
          r={3.5}
          fill={lane.status === "qualified" ? "var(--color-blue)" : "var(--color-metal)"}
          style={{
            offsetPath: `path('${lane.d}')`,
            animation: `connection-flow ${lane.status === "qualified" ? "4.2s" : "2.4s"} ease-in-out ${lane.delay} infinite`,
          }}
        />
      ))}

      {/* Destination nodes + arrival ripple + growth tick, qualified lanes only */}
      {lanes
        .filter((lane) => lane.status === "qualified" && lane.dest)
        .map((lane) => (
          <g key={`${lane.id}-dest`}>
            <circle cx={lane.dest!.x} cy={lane.dest!.y} r={6} fill="none" stroke="var(--color-blue)" strokeOpacity={0.35} strokeWidth={1.25} className="animate-arrival-ripple" style={{ animationDelay: lane.delay }} />
            <circle cx={lane.dest!.x} cy={lane.dest!.y} r={5} fill="var(--color-blue)" />
            <path
              d={`M${lane.dest!.x + 14},${lane.dest!.y + 3} l4,-4 l4,4`}
              fill="none"
              stroke="var(--color-blue)"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animation: "rise-fade 2.6s ease-out infinite", animationDelay: lane.delay }}
            />
          </g>
        ))}

      {/* Layered AI core */}
      <circle cx={CORE.x} cy={CORE.y} r={100} fill="var(--color-blue)" opacity={0.14} filter="url(#core-blur-2)" className="animate-glow-breathe" />
      <circle cx={CORE.x} cy={CORE.y} r={92} fill="none" stroke="var(--color-ink)" strokeOpacity={0.16} strokeWidth={1.25} strokeDasharray="1 9" className="animate-spin-slow" />
      <circle cx={CORE.x} cy={CORE.y} r={66} fill="none" stroke="var(--color-blue)" strokeOpacity={0.3} strokeWidth={1.25} strokeDasharray="2 6" className="animate-spin-slow" style={{ animationDuration: "20s", animationDirection: "reverse" }} />

      <g style={{ transformOrigin: `${CORE.x}px ${CORE.y}px`, animation: "spin-slow 7s linear infinite" }}>
        <circle cx={CORE.x + 40} cy={CORE.y} r={3.5} fill="var(--color-blue)" />
      </g>
      <g style={{ transformOrigin: `${CORE.x}px ${CORE.y}px`, animation: "spin-slow 11s linear infinite reverse" }}>
        <circle cx={CORE.x + 55} cy={CORE.y} r={2.5} fill="var(--color-ink)" opacity={0.6} />
      </g>

      <circle cx={CORE.x} cy={CORE.y} r={24} fill="var(--color-ink)" />
      <circle cx={CORE.x} cy={CORE.y} r={8} fill="var(--color-blue)" />
    </svg>
  );
}
