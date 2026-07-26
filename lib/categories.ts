export type Category = {
  slug: string;
  index: string;
  title: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "ai-software",
    index: "01",
    title: "AI Software",
    description:
      "Applied artificial intelligence products that give teams and consumers real leverage. Details on this vertical are coming soon.",
  },
  {
    slug: "saas-products",
    index: "02",
    title: "SaaS Products",
    description:
      "Subscription software built for durable, recurring value across the businesses we build and operate. Details coming soon.",
  },
  {
    slug: "ecommerce-brands",
    index: "03",
    title: "E-commerce Brands",
    description:
      "Direct-to-consumer and marketplace brands engineered for growth and brand equity. Details coming soon.",
  },
  {
    slug: "lead-generation",
    index: "04",
    title: "Lead Generation & Performance Marketing",
    description:
      "Data-driven customer acquisition and performance marketing systems engineered to generate measurable, scalable growth. Details coming soon.",
  },
  {
    slug: "future-companies",
    index: "05",
    title: "Future Companies",
    description:
      "New ventures currently in development inside the MooFoo studio. Announcements coming soon.",
  },
];
