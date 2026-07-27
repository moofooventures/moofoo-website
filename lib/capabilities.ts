export type Capability = {
  slug: string;
  icon: "acquisition" | "pay-per-call" | "lead-generation" | "ai-software";
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    slug: "ai-customer-acquisition",
    icon: "acquisition",
    title: "AI Customer Acquisition",
    description: "Intelligent systems that identify, qualify, and convert customer demand.",
  },
  {
    slug: "pay-per-call",
    icon: "pay-per-call",
    title: "Pay Per Call",
    description: "Compliant inbound call campaigns built around qualified consumer intent.",
  },
  {
    slug: "lead-generation",
    icon: "lead-generation",
    title: "Lead Generation",
    description: "Digital properties engineered to capture high-intent consumer demand.",
  },
  {
    slug: "ai-software",
    icon: "ai-software",
    title: "AI Software",
    description: "AI-assisted tools that power research, routing, and performance reporting.",
  },
];
