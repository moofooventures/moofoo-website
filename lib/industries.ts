export type Industry = {
  slug: string;
  icon: "Home" | "ShieldCheck" | "Scale" | "Landmark";
  title: string;
  description: string;
};

export const industries: Industry[] = [
  {
    slug: "home-services",
    icon: "Home",
    title: "Home Services",
    description:
      "Inbound consumer demand across repair, replacement and property-improvement categories. Campaigns may use service-specific qualification, location-based routing and provider-availability rules.",
  },
  {
    slug: "insurance",
    icon: "ShieldCheck",
    title: "Insurance",
    description:
      "Consumer acquisition opportunities built around people actively researching coverage options. Campaign development depends on carrier, agency, licensing and network requirements.",
  },
  {
    slug: "legal-services",
    icon: "Scale",
    title: "Legal Services",
    description:
      "Consumer-initiated inquiries in approved practice areas, supported by transparent advertising disclosures and campaign-specific qualification criteria.",
  },
  {
    slug: "consumer-financial-services",
    icon: "Landmark",
    title: "Consumer Financial Services",
    description:
      "Demand-generation opportunities for approved financial products and services, subject to advertiser requirements and applicable marketing regulations.",
  },
];
