export type Capability = {
  slug: string;
  icon: "Radar" | "PhoneCall" | "LineChart" | "Sparkles";
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    slug: "inbound-lead-generation",
    icon: "Radar",
    title: "Inbound Lead Generation",
    description:
      "We build digital experiences that capture demand from consumers actively searching for services.",
  },
  {
    slug: "pay-per-call",
    icon: "PhoneCall",
    title: "Pay Per Call",
    description:
      "We develop compliant inbound call campaigns structured around qualified consumer intent and measurable performance.",
  },
  {
    slug: "performance-marketing",
    icon: "LineChart",
    title: "Performance Marketing",
    description:
      "Campaign decisions are guided by attribution, conversion data, call quality, and unit economics.",
  },
  {
    slug: "ai-assisted-operations",
    icon: "Sparkles",
    title: "AI-Assisted Operations",
    description:
      "AI supports research, content workflows, reporting, quality analysis, and campaign optimization while humans retain oversight.",
  },
];
