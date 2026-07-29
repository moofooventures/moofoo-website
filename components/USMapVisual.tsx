const US_OUTLINE =
  "M70,40 L65,200 L90,230 L150,235 L200,250 L230,295 L260,250 L330,270 L380,265 L430,290 L445,345 L420,300 L450,240 L470,190 L490,140 L505,120 L525,55 L450,45 L380,90 L340,50 L200,45 L100,50 Z";

const NJ = { x: 495, y: 135 };

const reachPoints = [
  { x: 150, y: 150, delay: "0s" },
  { x: 280, y: 150, delay: "0.7s" },
  { x: 250, y: 220, delay: "1.4s" },
  { x: 380, y: 220, delay: "2.1s" },
];

export default function USMapVisual() {
  return (
    <svg
      viewBox="0 0 600 360"
      preserveAspectRatio="xMidYMid meet"
      className="h-auto w-full max-w-2xl overflow-visible"
      role="img"
      aria-label="Stylized outline of the United States with New Jersey highlighted and connection lines extending nationwide"
    >
      <defs>
        <filter id="nj-blur" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      <path d={US_OUTLINE} fill="var(--color-gray-100)" stroke="var(--color-line)" strokeWidth={1.5} strokeLinejoin="round" />

      {reachPoints.map((p, i) => {
        const midX = (NJ.x + p.x) / 2;
        const d = `M${NJ.x},${NJ.y} C${midX},${NJ.y} ${midX},${p.y} ${p.x},${p.y}`;
        return (
          <g key={i}>
            <path d={d} fill="none" stroke="var(--color-blue)" strokeOpacity={0.25} strokeWidth={1.5} />
            <circle
              r={3}
              fill="var(--color-blue)"
              style={{ offsetPath: `path('${d}')`, animation: `connection-flow 3.6s ease-in-out ${p.delay} infinite` }}
            />
            <circle cx={p.x} cy={p.y} r={3} fill="var(--color-metal)" opacity={0.8} />
          </g>
        );
      })}

      <circle cx={NJ.x} cy={NJ.y} r={26} fill="var(--color-blue)" opacity={0.18} filter="url(#nj-blur)" className="animate-glow-breathe" />
      <circle cx={NJ.x} cy={NJ.y} r={6} fill="var(--color-blue)" stroke="white" strokeWidth={2} />
      <foreignObject x={NJ.x + 12} y={NJ.y - 12} width={110} height={24}>
        <p className="text-xs font-semibold whitespace-nowrap text-ink">New Jersey, HQ</p>
      </foreignObject>
    </svg>
  );
}
