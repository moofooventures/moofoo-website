import type { Metadata } from "next";
import {
  Radar,
  PhoneCall,
  LayoutTemplate,
  Search,
  Waypoints,
  Sparkles,
  BarChart3,
  PhoneIncoming,
  Eye,
  Gauge,
  BrainCog,
  Boxes,
  Lock,
  Cpu,
  TrendingUp,
} from "lucide-react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import DifferentiatorCard, { type Differentiator } from "@/components/DifferentiatorCard";
import RoadmapCards from "@/components/RoadmapCards";
import FaqItem from "@/components/FaqItem";

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

const differentiators: Differentiator[] = [
  {
    slug: "intent",
    icon: "intent",
    title: "Consumer Intent First",
    description:
      "We focus on consumers actively seeking solutions instead of interruption marketing.",
  },
  {
    slug: "measurement",
    icon: "measurement",
    title: "Transparent Measurement",
    description:
      "Every qualified opportunity is measurable from source through routing.",
  },
  {
    slug: "optimization",
    icon: "optimization",
    title: "AI-Assisted Optimization",
    description:
      "Artificial intelligence supports analysis, workflows, and operational efficiency while strategic decisions remain human-directed.",
  },
  {
    slug: "infrastructure",
    icon: "infrastructure",
    title: "Long-Term Infrastructure",
    description: "We build scalable acquisition systems rather than one-off campaigns.",
  },
];

const principles = [
  { icon: Eye, title: "Designed Around Transparency" },
  { icon: Gauge, title: "Built for Measurement" },
  { icon: BrainCog, title: "Human Directed AI" },
  { icon: Boxes, title: "Scalable Infrastructure" },
  { icon: Lock, title: "Privacy Conscious" },
  { icon: TrendingUp, title: "Performance Focused" },
];

const callouts = [
  { icon: PhoneIncoming, label: "Consumer-Initiated" },
  { icon: Sparkles, label: "AI-Assisted" },
  { icon: Eye, label: "Transparent" },
  { icon: Gauge, label: "Measured" },
  { icon: Boxes, label: "Scalable" },
  { icon: TrendingUp, label: "Performance Focused" },
  { icon: Lock, label: "Privacy Conscious" },
  { icon: Cpu, label: "Technology Driven" },
];

const faqs = [
  {
    question: "Are you a marketing agency?",
    answer:
      "No. MooFoo Ventures builds and operates its own digital properties and acquisition infrastructure — we're not an agency running campaigns on behalf of outside clients.",
  },
  {
    question: "Do you generate outbound calls?",
    answer:
      "No. All consumer interactions are consumer-initiated. MooFoo Ventures does not use robocalling, purchased cold-call lists, or unsolicited outbound contact.",
  },
  {
    question: "Do you sell consumer data?",
    answer:
      "No. Consumer information is used to route and fulfill a specific inquiry — it is not sold as a standalone data product.",
  },
  {
    question: "Who do you partner with?",
    answer:
      "We work with affiliate networks, direct advertisers, technology providers, and strategic partners in approved, high-intent consumer categories.",
  },
  {
    question: "How do you measure campaign performance?",
    answer:
      "Every inquiry is tracked from source through qualification and routing, with outcome data reviewed to improve future performance.",
  },
  {
    question: "Can you work with affiliate networks?",
    answer:
      "Yes. We're actively building relationships with reputable affiliate networks that value transparent traffic sources and measurable call quality.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Solutions() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <Reveal>
            <p className="accent-underline w-fit text-xs font-medium tracking-[0.25em] text-blue uppercase">
              Solutions
            </p>
            <h1 className="mt-8 max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-ink md:text-balance md:text-6xl">
              Full-stack inbound acquisition, built for accountability.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-balance">
              From search traffic to call routing to reporting, every
              solution is designed around measurable performance.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="border-b border-line bg-gray-50 py-8">
        <Reveal className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 md:px-10">
          {callouts.map((callout) => (
            <span key={callout.label} className="flex items-center gap-2 text-xs font-medium tracking-[0.05em] text-muted uppercase">
              <callout.icon className="h-4 w-4 text-blue" strokeWidth={1.75} aria-hidden="true" />
              {callout.label}
            </span>
          ))}
        </Reveal>
      </div>

      <section className="border-b border-line bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Platform Architecture
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              How demand becomes a qualified connection.
            </h2>
          </Reveal>

          <Reveal className="mt-14">
            <ArchitectureDiagram />
          </Reveal>
        </div>
      </section>

      <section className="bg-gray-50 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              What We Build
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              The building blocks of every campaign.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
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
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {item.title}
                </h3>
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
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Why MooFoo Is Different
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Built as infrastructure, not a campaign.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, i) => (
              <Reveal key={item.slug} delay={i * 80}>
                <DifferentiatorCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-gray-50 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Current Focus
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Where we are, and where we&apos;re headed.
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-16">
            <RoadmapCards />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Technology Principles
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              The standard every system is held to.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 60} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-soft text-blue">
                  <principle.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-ink">{principle.title}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-gray-50 py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal className="text-center">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Frequently Asked Questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Questions we get from partners.
            </h2>
          </Reveal>

          <div className="mt-14 flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 60}>
                <FaqItem question={faq.question} answer={faq.answer} />
              </Reveal>
            ))}
          </div>
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
