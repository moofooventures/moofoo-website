import type { Metadata } from "next";
import { Filter, MapPin, ShieldCheck, Handshake, Radar, BarChart3 } from "lucide-react";
import IndustryDetailCard from "@/components/IndustryDetailCard";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import PlatformHubDiagram from "@/components/PlatformHubDiagram";
import PlatformCapabilitiesStack from "@/components/PlatformCapabilitiesStack";
import IndustryWorkflow from "@/components/IndustryWorkflow";
import FaqItem from "@/components/FaqItem";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries | MooFoo Ventures",
  description:
    "Industries and consumer categories MooFoo Ventures evaluates for inbound lead generation and pay-per-call campaigns, including home services, insurance, legal, and financial services.",
  alternates: { canonical: "/industries" },
};

const considerations = [
  { icon: Filter, title: "Qualification Logic" },
  { icon: MapPin, title: "Geographic Rules" },
  { icon: ShieldCheck, title: "Compliance Requirements" },
  { icon: Handshake, title: "Partner Availability" },
  { icon: Radar, title: "Consumer Intent" },
  { icon: BarChart3, title: "Performance Measurement" },
];

const faqs = [
  {
    question: "Which industries are currently supported?",
    answer:
      "We currently focus on Home Services, Insurance, Legal Services, and Consumer Financial Services, with additional categories under evaluation.",
  },
  {
    question: "Can additional industries be added?",
    answer:
      "Yes. The platform is built to support new verticals as advertiser and network relationships develop.",
  },
  {
    question: "How does routing differ between industries?",
    answer:
      "Each industry has its own qualification rules — such as geography, licensing, or service type — but all run on the same underlying routing infrastructure.",
  },
  {
    question: "How are campaigns measured?",
    answer:
      "Every inquiry is tracked from source through qualification and routing, with outcome data reviewed to improve future performance.",
  },
  {
    question: "Who can partner with MooFoo?",
    answer:
      "We work with affiliate networks, direct advertisers, and technology partners in approved, high-intent consumer categories.",
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

export default function Industries() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 md:px-10 md:py-6">
          <Reveal>
            <p className="accent-underline w-fit text-xs font-medium tracking-[0.25em] text-blue uppercase">
              Industries
            </p>
            <h1 className="mt-8 max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-ink md:text-balance md:text-6xl">
              One platform. Multiple industries.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-balance">
              These are areas of focus for current and future development
              &mdash; not a guarantee of active campaigns, client
              relationships, or coverage in every category.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-16 flex justify-center">
            <PlatformHubDiagram />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-gray-50 py-4 md:py-6">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Industry Overview
            </p>
            <p className="mt-4 text-balance text-lg leading-relaxed text-ink md:text-xl">
              Although every industry has unique requirements, MooFoo&apos;s
              customer acquisition platform provides a consistent framework
              for consumer intent, qualification, routing, attribution, and
              reporting.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-white py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={i * 80}>
                <IndustryDetailCard industry={industry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-gray-50 py-4 md:py-6">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Shared Platform Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              One technology stack, every industry.
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-14">
            <PlatformCapabilitiesStack />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-white py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Industry Workflow
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              The same journey, shaped for every category.
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-14">
            <IndustryWorkflow />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-gray-50 py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Designed to Adapt
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              One platform supporting every market.
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-14 flex justify-center">
            <PlatformHubDiagram showStack />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-white py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Industry Considerations
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              What varies from one category to the next.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {considerations.map((item, i) => (
              <Reveal key={item.title} delay={i * 60} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-soft text-blue">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-gray-50 py-4 md:py-6">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal className="text-center">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Frequently Asked Questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Questions about industry coverage.
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

      <section className="bg-white py-4 md:py-6">
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
