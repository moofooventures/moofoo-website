import type { Metadata } from "next";
import IndustryCard from "@/components/IndustryCard";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries | MooFoo Ventures",
  description:
    "Industries and consumer categories MooFoo Ventures evaluates for inbound lead generation and pay-per-call campaigns, including home services, insurance, legal, and financial services.",
  alternates: { canonical: "/industries" },
};

export default function Industries() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <Reveal>
            <p className="accent-underline w-fit text-xs font-medium tracking-[0.25em] text-blue uppercase">
              Industries
            </p>
            <h1 className="mt-8 max-w-3xl text-balance text-4xl leading-tight font-semibold tracking-tight text-ink md:text-6xl">
              Markets we evaluate.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted">
              These are areas of focus for current and future development
              &mdash; not a guarantee of active campaigns, client
              relationships, or coverage in every category.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-gray-50 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={i * 60}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white py-28 md:py-36">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center md:px-10">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Evaluating a new category?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We&apos;re open to conversations with advertisers and networks
              in adjacent high-intent consumer markets.
            </p>
            <Button href="/contact" className="mx-auto mt-8">
              Start a Conversation
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
