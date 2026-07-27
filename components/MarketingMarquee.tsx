import {
  Radar,
  PhoneCall,
  LineChart,
  Sparkles,
  Waypoints,
  Route,
  Target,
  BarChart3,
} from "lucide-react";

const items = [
  { icon: Radar, label: "Inbound Lead Generation" },
  { icon: PhoneCall, label: "Pay Per Call" },
  { icon: LineChart, label: "Performance Marketing" },
  { icon: Sparkles, label: "AI Automation" },
  { icon: Waypoints, label: "Call Tracking & Attribution" },
  { icon: Route, label: "Geographic Routing" },
  { icon: Target, label: "Conversion Measurement" },
  { icon: BarChart3, label: "Campaign Reporting" },
];

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-16 pr-16">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2.5 whitespace-nowrap">
          <item.icon className="h-4 w-4 text-blue" strokeWidth={1.75} aria-hidden="true" />
          <span className="text-sm font-medium text-ink">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function MarketingMarquee() {
  return (
    <div className="overflow-hidden border-y border-line bg-gray-50 py-6">
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        <Track />
        <Track />
      </div>
    </div>
  );
}
