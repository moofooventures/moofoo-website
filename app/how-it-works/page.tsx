import type { Metadata } from "next";
import { Search, PhoneCall, Route, ClipboardCheck, Banknote, X } from "lucide-react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How It Works | MooFoo Ventures",
  description:
    "How MooFoo Ventures' inbound lead-generation model works: consumers search independently, tracking connects them with participating providers, and no unsolicited outreach is involved.",
  alternates: { canonical: "/how-it-works" },
};

const model = [
  {
    icon: Search,
    title: "Consumers independently search for help",
    description:
      "Visitors arrive at our digital properties on their own, while researching a service they already need.",
  },
  {
    icon: PhoneCall,
    title: "They voluntarily call or submit information",
    description: "No outreach is initiated by us. Consumers choose to call or fill out a form.",
  },
  {
    icon: Route,
    title: "Tracking and routing connect them with participating providers",
    description:
      "Approved call-tracking and routing systems direct qualified inquiries to providers in our network.",
  },
  {
    icon: ClipboardCheck,
    title: "Campaign rules determine whether an inquiry qualifies",
    description:
      "Defined criteria — geography, service type, intent signals — determine what counts as a valid inquiry.",
  },
  {
    icon: Banknote,
    title: "MooFoo Ventures earns performance-based compensation where applicable",
    description:
      "Compensation is tied to qualified outcomes, not impressions or unqualified traffic.",
  },
];

const wontDo = [
  "No robocalling",
  "No purchased cold-call lists",
  "No unsolicited SMS campaigns",
  "No impersonation of service providers",
  "No fabricated local offices",
  "No misleading claims",
];

export default function HowItWorks() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <Reveal>
            <p className="accent-underline w-fit text-xs font-medium tracking-[0.25em] text-blue uppercase">
              How It Works
            </p>
            <h1 className="mt-8 max-w-3xl text-balance text-4xl leading-tight font-semibold tracking-tight text-ink md:text-6xl">
              A legitimate, consumer-initiated model.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted">
              Every inquiry starts with a consumer who is already looking for
              help. Here is exactly how it moves from there.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-gray-50 py-28 md:py-36">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="space-y-10">
            {model.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 80}
                className="flex gap-6 rounded-2xl border border-line bg-white p-8"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-soft text-blue">
                  <step.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-ink">{step.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white py-28 md:py-36">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Reveal className="text-center">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              What We Don&apos;t Do
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Compliance is not optional.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {wontDo.map((item, i) => (
              <Reveal
                key={item}
                delay={i * 60}
                className="flex items-center gap-3 rounded-xl border border-line bg-gray-50 px-5 py-4"
              >
                <X className="h-4 w-4 shrink-0 text-muted" strokeWidth={2} aria-hidden="true" />
                <span className="text-sm font-medium text-ink">{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-gray-50 py-28 md:py-36">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center md:px-10">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Questions about how a campaign qualifies?
            </h2>
            <Button href="/contact" className="mx-auto mt-8">
              Contact MooFoo Ventures
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
