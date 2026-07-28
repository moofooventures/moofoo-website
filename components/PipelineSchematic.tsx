import {
  Radar,
  Layout,
  PhoneCall,
  ListChecks,
  MapPinned,
  Building2,
  LineChart,
} from "lucide-react";

const nodes = [
  { x: 110, y: 90, icon: Radar, number: "01", label: "Traffic Source" },
  { x: 300, y: 270, icon: Layout, number: "02", label: "MooFoo Digital Property" },
  { x: 490, y: 90, icon: PhoneCall, number: "03", label: "Call/Form Tracking" },
  { x: 680, y: 270, icon: ListChecks, number: "04", label: "Qualification Rules" },
  { x: 870, y: 90, icon: MapPinned, number: "05", label: "Geographic and Campaign Routing" },
  { x: 1060, y: 270, icon: Building2, number: "06", label: "Advertiser or Network" },
  { x: 1250, y: 90, icon: LineChart, number: "07", label: "Performance Reporting" },
];

function buildPath() {
  let d = `M${nodes[0].x},${nodes[0].y}`;
  for (let i = 1; i < nodes.length; i++) {
    const a = nodes[i - 1];
    const b = nodes[i];
    const midX = (a.x + b.x) / 2;
    d += ` C${midX},${a.y} ${midX},${b.y} ${b.x},${b.y}`;
  }
  return d;
}

const path = buildPath();

export default function PipelineSchematic() {
  return (
    <svg
      viewBox="0 0 1360 380"
      preserveAspectRatio="xMidYMid meet"
      className="h-auto w-full max-w-6xl overflow-visible"
      role="img"
      aria-label="Pipeline schematic: traffic source flows through MooFoo's digital property, call and form tracking, qualification rules, geographic and campaign routing, to advertisers or networks, and back through performance reporting"
    >
      <path d={path} fill="none" stroke="var(--color-blue-soft)" strokeOpacity={0.3} strokeWidth={1.5} />

      {[0, 1].map((i) => (
        <circle
          key={i}
          r={4}
          fill="var(--color-blue-soft)"
          style={{
            offsetPath: `path('${path}')`,
            animation: `connection-flow 8s linear ${i * 4}s infinite`,
          }}
        />
      ))}

      {nodes.map((node) => (
        <foreignObject key={node.number} x={node.x - 75} y={node.y - 58} width={150} height={116}>
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-[10px] font-semibold tracking-[0.15em] text-blue-soft/70">
              {node.number}
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
              <node.icon className="h-5 w-5 text-white" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <span className="max-w-[130px] text-xs leading-tight font-medium text-white">
              {node.label}
            </span>
          </div>
        </foreignObject>
      ))}
    </svg>
  );
}
