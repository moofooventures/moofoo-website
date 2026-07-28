import type { Metadata } from "next";
import {
  Radar,
  PhoneCall,
  LayoutTemplate,
  Search,
  Waypoints,
  Sparkles,
  BarChart3,
} from "lucide-react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Solutions | MooFoo Ventures",
  description:
    "Inbound lead generation, pay-per-call campaign development, landing-page development, search traffic acquisition, call tracking, AI-assisted analysis, and performance reporting.",
  alternates: { canonical: "/solutions" },
};

const items = [
  {
    icon: Radar,
    title: "Inbound Lead Generation",
    description:
      "Digital properties built to capture consumers actively searching for services, structured for compliant, transparent traffic acquisition.",
  },
  {
    icon: PhoneCall,
    title: "Pay-Per-Call Campaign Development",
    description:
      "Inbound call campaigns built around qualified consumer intent, with clear routing and performance tracking.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing-Page Development",
    description:
      "Purpose-built landing experiences designed for clarity, compliance, and conversion.",
  },
  {
    icon: Search,
    title: "Search Traffic Acquisition",
    description: "Search-driven strategies focused on high-intent consumer demand.",
  },
  {
    icon: Waypoints,
    title: "Call Tracking and Attribution",
    description:
      "Every inquiry is tracked and attributed so campaign performance can be measured accurately.",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Analysis",
    description:
      "AI supports research, reporting, and quality analysis, with human oversight on every decision.",
  },
  {
    icon: BarChart3,
    title: "Performance Reporting",
    description:
      "Clear, structured reporting built around the metrics that matter to advertisers and partners.",
  },
];

export default function Solutions() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <Reveal>
            <p className="accent-underline w-fit text-xs font-medium tracking-[0.25em] text-blue uppercase">
              Solutions
            </p>
            <h1 className="mt-8 max-w-3xl text-balance text-4xl leading-tight font-semibold tracking-tight text-ink md:text-6xl">
              Full-stack inbound acquisition, built for accountability.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted">
              From search traffic to call routing to reporting, every
              solution is designed around measurable performance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-gray-50 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {items.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 60}
                className="rounded-2xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-xl hover:shadow-ink/5"
              >
                <item.icon
                  className="h-6 w-6 text-blue"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h2 className="mt-5 text-lg font-semibold text-ink">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 border-t border-line pt-8 text-sm leading-relaxed text-muted">
            Campaign availability and traffic methods depend on advertiser
            and network approval.
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-white py-28 md:py-36">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center md:px-10">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Interested in working with us?
            </h2>
            <Button href="/contact" className="mx-auto mt-8">
              Discuss a Partnership
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
