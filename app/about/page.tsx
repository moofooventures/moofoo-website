import type { Metadata } from "next";
import { Gauge, ShieldCheck, Sparkles, Eye } from "lucide-react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About | MooFoo Ventures",
  description:
    "MooFoo Ventures LLC is a technology and performance marketing company building AI-assisted digital businesses and consumer acquisition systems.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: Gauge,
    title: "Performance over promises",
    description: "We build toward measurable outcomes, not exaggerated claims.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance by default",
    description:
      "Every campaign is built with consumer protection and applicable regulations in mind.",
  },
  {
    icon: Sparkles,
    title: "Craft in execution",
    description: "From landing pages to tracking systems, execution is held to a high standard.",
  },
  {
    icon: Eye,
    title: "Transparency with partners",
    description: "Networks, advertisers, and partners can expect clear, honest reporting.",
  },
];

export default function About() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <Reveal>
            <p className="accent-underline w-fit text-xs font-medium tracking-[0.25em] text-blue uppercase">
              About
            </p>
            <h1 className="mt-8 max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-ink md:text-balance md:text-6xl">
              A technology and performance marketing company.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-balance">
              MooFoo Ventures LLC is a technology and performance marketing
              company building AI-assisted digital businesses and consumer
              acquisition systems.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-gray-50 py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-10">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Mission
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Inbound acquisition, done honestly.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We build systems that connect consumers who are already looking
              for help with providers who can offer it &mdash; measured and
              compliant at every step.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Responsible Use of AI
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              AI assists. People decide.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              AI supports research, content development, reporting, and
              quality analysis across our campaigns. Every AI-assisted
              output is reviewed and directed by our team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Operating Principles
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              What guides our work.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 80}>
                <principle.icon
                  className="h-6 w-6 text-blue"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-base font-semibold text-ink">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {principle.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-gray-50 py-28 md:py-36">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center md:px-10">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Transparency
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Trust is built on disclosure.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              We disclose how our model works, how compensation is earned,
              and where our traffic comes from &mdash; because durable
              partnerships depend on it.
            </p>
            <Button href="/contact" className="mx-auto mt-8">
              Get in Touch
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
