const nodes = [40, 200, 360, 520];

export default function ConnectionAccent() {
  const path = `M${nodes[0]},20 L${nodes[3]},20`;

  return (
    <svg viewBox="0 0 560 40" className="h-8 w-full max-w-md" role="presentation" aria-hidden="true">
      <path d={path} stroke="var(--color-line)" strokeWidth={1.5} />
      {nodes.map((x, i) => (
        <circle key={x} cx={x} cy={20} r={4} fill={i === 0 || i === nodes.length - 1 ? "var(--color-blue)" : "var(--color-white)"} stroke="var(--color-blue)" strokeWidth={1.5} />
      ))}
      <circle
        r={3}
        fill="var(--color-blue)"
        style={{ offsetPath: `path('${path}')`, animation: "connection-flow 3.5s ease-in-out infinite" }}
      />
    </svg>
  );
}
