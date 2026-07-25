import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About | MooFoo Ventures",
  description:
    "MooFoo Ventures LLC is a venture studio and investment firm building and backing exceptional software and consumer brands.",
};

const values = [
  {
    index: "01",
    title: "Build with conviction",
    description:
      "We commit fully to the companies we start and the founders we back, rather than spreading thin across everything at once.",
  },
  {
    index: "02",
    title: "Operate for the long term",
    description:
      "We favor durable, compounding businesses over short-term wins, and we build teams and products to match.",
  },
  {
    index: "03",
    title: "Craft is not optional",
    description:
      "From product to brand to the smallest details, we hold everything we ship to a premium standard.",
  },
  {
    index: "04",
    title: "Discipline over hype",
    description:
      "We move deliberately, make decisions with rigor, and let results speak instead of noise.",
  },
];

export default function About() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <p className="gold-underline w-fit text-xs tracking-[0.3em] text-gold-deep uppercase">
            About
          </p>
          <h1 className="mt-8 max-w-3xl text-balance font-serif-display text-4xl leading-tight text-black md:text-5xl">
            A venture studio and investment firm, built to last.
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted md:text-lg">
            MooFoo Ventures LLC exists to build and back companies with real
            staying power &mdash; in AI software, SaaS, e-commerce, and
            beyond. We combine the discipline of an investment firm with the
            hands-on execution of an operating studio.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.2em] text-gold-deep uppercase">
              Our Mission
            </p>
            <h2 className="mt-4 font-serif-display text-3xl text-black">
              Build enduring companies, not fleeting trends.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We believe the best businesses are built deliberately: sound
              fundamentals, distinctive brand, and a relentless focus on the
              customer. MooFoo Ventures brings capital, operating experience,
              and hands-on craft to every company we touch.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-gold-deep uppercase">
              Our Approach
            </p>
            <h2 className="mt-4 font-serif-display text-3xl text-black">
              Studio and capital, under one roof.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Some companies we build from the ground up inside our own
              studio. Others we back with capital and operating support as
              outside investors. In both cases, our standard for quality
              does not change.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <p className="text-xs tracking-[0.2em] text-gold-deep uppercase">
            What We Value
          </p>
          <h2 className="mt-4 max-w-xl font-serif-display text-3xl text-black md:text-4xl">
            Principles that guide every decision.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.index} className="flex gap-6">
                <span className="font-serif-display text-lg text-gold">
                  {value.index}
                </span>
                <div>
                  <h3 className="font-serif-display text-xl text-black">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center md:px-10">
          <h2 className="max-w-xl font-serif-display text-3xl text-white md:text-4xl">
            Want to know more about how we work?
          </h2>
          <Button href="/contact" variant="gold">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
