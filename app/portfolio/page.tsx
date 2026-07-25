import type { Metadata } from "next";
import Button from "@/components/Button";
import { categories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Portfolio | MooFoo Ventures",
  description:
    "MooFoo Ventures builds and backs companies across AI software, SaaS products, e-commerce brands, investments, and future companies.",
};

export default function Portfolio() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <p className="gold-underline w-fit text-xs tracking-[0.3em] text-gold-deep uppercase">
            Portfolio
          </p>
          <h1 className="mt-8 max-w-3xl text-balance font-serif-display text-4xl leading-tight text-black md:text-5xl">
            Five verticals. One standard of craft.
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted md:text-lg">
            Our portfolio spans companies we&apos;ve built in-house and
            founders we back as investors. Company profiles are being added
            as they are announced.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="divide-y divide-line">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="grid grid-cols-1 gap-6 py-14 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-16"
            >
              <span className="font-serif-display text-2xl text-gold">
                {category.index}
              </span>
              <div>
                <h2 className="font-serif-display text-2xl text-black md:text-3xl">
                  {category.title}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  {category.description}
                </p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 border border-gold/40 px-4 py-1.5 text-[11px] tracking-[0.15em] text-gold-deep uppercase md:justify-self-end">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center md:px-10">
          <h2 className="max-w-xl font-serif-display text-3xl text-white md:text-4xl">
            Building something that belongs here?
          </h2>
          <Button href="/contact" variant="gold">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
