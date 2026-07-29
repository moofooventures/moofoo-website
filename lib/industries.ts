export type Industry = {
  slug: string;
  icon: "Home" | "ShieldCheck" | "Scale" | "Landmark";
  title: string;
  description: string;
  consumerNeed: string;
  routingConsideration: string;
};

export const industries: Industry[] = [
  {
    slug: "home-services",
    icon: "Home",
    title: "Home Services",
    description:
      "Inbound consumer demand across repair, replacement and property-improvement categories. Campaigns may use service-specific qualification, location-based routing and provider-availability rules.",
    consumerNeed: "A homeowner needs a repair or installation completed quickly.",
    routingConsideration: "Routed by service type, location, and provider availability.",
  },
  {
    slug: "insurance",
    icon: "ShieldCheck",
    title: "Insurance",
    description:
      "Consumer acquisition opportunities built around people actively researching coverage options. Campaign development depends on carrier, agency, licensing and network requirements.",
    consumerNeed: "A consumer is comparing coverage options for a specific policy type.",
    routingConsideration: "Routed by coverage type, carrier appetite, and licensing.",
  },
  {
    slug: "legal-services",
    icon: "Scale",
    title: "Legal Services",
    description:
      "Consumer-initiated inquiries in approved practice areas, supported by transparent advertising disclosures and campaign-specific qualification criteria.",
    consumerNeed: "A consumer needs representation in a specific practice area.",
    routingConsideration: "Routed by practice area and jurisdiction.",
  },
  {
    slug: "consumer-financial-services",
    icon: "Landmark",
    title: "Consumer Financial Services",
    description:
      "Demand-generation opportunities for approved financial products and services, subject to advertiser requirements and applicable marketing regulations.",
    consumerNeed: "A consumer is evaluating a specific financial product or service.",
    routingConsideration: "Routed by product type and advertiser eligibility rules.",
  },
];
