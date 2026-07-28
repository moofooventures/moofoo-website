"use client";

import { useEffect, useRef, useState } from "react";
import { Search, PhoneCall, Filter, Route, TrendingUp } from "lucide-react";

const stages = [
  {
    icon: Search,
    number: "01",
    label: "Capture Demand",
    description:
      "Consumers discover a MooFoo-operated property while independently researching a service or solution.",
  },
  {
    icon: PhoneCall,
    number: "02",
    label: "Collect Intent",
    description:
      "The consumer voluntarily places a call or submits an inquiry requesting information or assistance.",
  },
  {
    icon: Filter,
    number: "03",
    label: "Evaluate the Inquiry",
    description:
      "Campaign rules evaluate factors such as location, requested service, timing and demonstrated intent.",
  },
  {
    icon: Route,
    number: "04",
    label: "Route Qualified Demand",
    description:
      "Eligible inquiries are routed through approved technology to participating networks, advertisers or providers.",
  },
  {
    icon: TrendingUp,
    number: "05",
    label: "Measure and Improve",
    description:
      "Source, quality and conversion data are reviewed to improve campaign performance and consumer experience.",
  },
];

export default function JourneyFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setProgress(entry.intersectionRatio),
      { threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1] },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const activeStages = Math.min(stages.length, Math.floor(progress * (stages.length + 1)));

  return (
    <div ref={ref}>
      <div className="relative flex flex-col gap-10 md:flex-row md:items-start md:gap-6">
        <div
          className="absolute top-6 right-6 left-6 hidden h-px bg-line md:block"
          aria-hidden="true"
        >
          <div
            className="h-full bg-blue transition-[width] duration-300 ease-out"
            style={{ width: `${(progress / 0.9) * 100}%` }}
          />
        </div>

        {stages.map((stage, i) => {
          const isActive = i < activeStages;
          return (
            <div key={stage.label} className="relative flex flex-1 flex-col items-start md:items-center md:text-center">
              <div
                className={`z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${
                  isActive ? "border-blue bg-ink text-white" : "border-line bg-white text-muted"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <stage.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">
                <span className="text-blue">{stage.number}</span> &mdash; {stage.label}
              </h3>
              <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-muted">
                {stage.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
