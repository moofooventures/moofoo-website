const stages = [
  { label: "Today", active: true },
  { label: "Pay Per Call", active: true },
  { label: "Lead Generation", active: true },
  { label: "AI Software", active: true },
  { label: "SaaS", active: false },
  { label: "Future Ventures", active: false },
];

export default function Timeline() {
  return (
    <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:gap-0">
      <div className="absolute top-2.5 right-4 left-4 hidden h-px bg-line md:block" aria-hidden="true" />

      {stages.map((stage) => (
        <div key={stage.label} className="relative flex flex-1 items-center gap-3 md:flex-col md:px-3 md:text-center">
          <span
            className={`z-10 h-5 w-5 shrink-0 rounded-full border-2 ${
              stage.active ? "border-blue bg-blue" : "border-line bg-white"
            }`}
            aria-hidden="true"
          />
          <span className={`text-sm font-medium md:mt-4 ${stage.active ? "text-ink" : "text-muted"}`}>
            {stage.label}
          </span>
        </div>
      ))}
    </div>
  );
}
