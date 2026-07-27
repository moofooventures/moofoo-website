export type Industry = {
  slug: string;
  icon: "HeartPulse" | "Scale" | "ShieldCheck" | "Home" | "Landmark" | "Car" | "Plane" | "LayoutGrid";
  title: string;
  description: string;
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    icon: "HeartPulse",
    title: "Healthcare",
    description: "Consumers researching providers, treatments, and care options.",
  },
  {
    slug: "legal",
    icon: "Scale",
    title: "Legal",
    description: "Consumers seeking qualified legal representation.",
  },
  {
    slug: "insurance",
    icon: "ShieldCheck",
    title: "Insurance",
    description: "High-intent shoppers comparing coverage and providers.",
  },
  {
    slug: "home-services",
    icon: "Home",
    title: "Home Services",
    description: "Consumers searching for trusted home repair and improvement help.",
  },
  {
    slug: "financial",
    icon: "Landmark",
    title: "Financial",
    description: "Consumers evaluating financial products and services.",
  },
  {
    slug: "automotive",
    icon: "Car",
    title: "Automotive",
    description: "Consumers researching vehicles, service, and financing.",
  },
  {
    slug: "travel",
    icon: "Plane",
    title: "Travel",
    description: "Consumers planning trips and comparing travel options.",
  },
  {
    slug: "more-coming",
    icon: "LayoutGrid",
    title: "More Coming",
    description: "Additional consumer verticals we evaluate for future development.",
  },
];
