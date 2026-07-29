import { MapPin, Layers, FileText, Clock, Radar, Handshake, Cpu } from "lucide-react";

const HUB = { x: 560, y: 205 };

const inputs = [
  { y: 30, icon: MapPin, label: "Location" },
  { y: 100, icon: Layers, label: "Service Type" },
  { y: 170, icon: FileText, label: "Campaign Rules" },
  { y: 240, icon: Clock, label: "Availability" },
  { y: 310, icon: Radar, label: "Intent Signals" },
  { y: 380, icon: Handshake, label: "Partner Requirements" },
];

export default function QualificationEngineDiagram() {
  return (
    <svg
      viewBox="0 0 900 420"
      preserveAspectRatio="xMidYMid meet"
      className="h-auto w-full max-w-4xl overflow-visible"
      role="img"
      aria-label="Diagram showing location, service type, campaign rules, availability, intent signals, and partner requirements feeding into a central qualification engine"
    >
      <defs>
        <filter id="qe-blur" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      <circle cx={HUB.x} cy={HUB.y} r={85} fill="var(--color-blue)" opacity={0.15} filter="url(#qe-blur)" className="animate-glow-breathe" />

      {inputs.map((input) => {
        const d = `M110,${input.y} C320,${input.y} 320,${HUB.y} ${HUB.x - 60},${HUB.y}`;
        return (
          <g key={input.label}>
            <path d={d} fill="none" stroke="var(--color-ink)" strokeOpacity={0.12} strokeWidth={1.5} />
            <circle
              r={3.5}
              fill="var(--color-blue)"
              style={{ offsetPath: `path('${d}')`, animation: `connection-flow 4s ease-in-out ${(input.y / 380) * 2}s infinite` }}
            />
            <circle cx={90} cy={input.y} r={20} fill="white" stroke="var(--color-line)" strokeWidth={1.5} />
            <foreignObject x={90 - 12} y={input.y - 12} width={24} height={24}>
              <div className="flex h-6 w-6 items-center justify-center text-blue">
                <input.icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </div>
            </foreignObject>
            <foreignObject x={118} y={input.y - 11} width={170} height={24}>
              <span className="text-xs font-medium text-ink">{input.label}</span>
            </foreignObject>
          </g>
        );
      })}

      <circle cx={HUB.x} cy={HUB.y} r={60} fill="none" stroke="var(--color-ink)" strokeOpacity={0.18} strokeWidth={1.5} strokeDasharray="1 8" strokeLinecap="round" className="animate-spin-slow" />
      <circle cx={HUB.x} cy={HUB.y} r={44} fill="var(--color-ink)" />
      <foreignObject x={HUB.x - 16} y={HUB.y - 16} width={32} height={32}>
        <div className="flex h-8 w-8 items-center justify-center text-blue-soft">
          <Cpu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </div>
      </foreignObject>
      <foreignObject x={HUB.x - 70} y={HUB.y + 55} width={140} height={40}>
        <p className="text-center text-xs font-semibold tracking-wide text-ink">Qualification Engine</p>
      </foreignObject>
    </svg>
  );
}
