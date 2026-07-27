export type Industry = {
  slug: string;
  icon: "Home" | "ShieldCheck" | "Scale" | "Landmark" | "HeartPulse" | "LayoutGrid";
  title: string;
  description: string;
};

export const industries: Industry[] = [
  {
    slug: "home-services",
    icon: "Home",
    title: "Home Services",
    description: "Consumers searching for trusted home repair and improvement help.",
  },
  {
    slug: "insurance",
    icon: "ShieldCheck",
    title: "Insurance",
    description: "High-intent shoppers comparing coverage and providers.",
  },
  {
    slug: "legal",
    icon: "Scale",
    title: "Legal",
    description: "Consumers seeking qualified legal representation.",
  },
  {
    slug: "financial-services",
    icon: "Landmark",
    title: "Financial Services",
    description: "Consumers evaluating financial products and services.",
  },
  {
    slug: "senior-services",
    icon: "HeartPulse",
    title: "Senior Services",
    description: "Families researching care and support options for aging loved ones.",
  },
  {
    slug: "other-categories",
    icon: "LayoutGrid",
    title: "Other High-Intent Categories",
    description: "Additional consumer verticals we evaluate for future development.",
  },
];
