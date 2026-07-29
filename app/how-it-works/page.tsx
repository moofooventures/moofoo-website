import type { Metadata } from "next";
import { PhoneOff, ListX, MessageSquareOff, UserX, MapPinOff, ShieldAlert } from "lucide-react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import PlatformCard, { type PlatformPillar } from "@/components/PlatformCard";
import ConsumerJourney from "@/components/ConsumerJourney";
import QualificationEngineDiagram from "@/components/QualificationEngineDiagram";
import TechnologyStack from "@/components/TechnologyStack";

export const metadata: Metadata = {
  title: "How It Works | MooFoo Ventures",
  description:
    "How MooFoo Ventures' inbound lead-generation model works: consumers search independently, tracking connects them with participating providers, and no unsolicited outreach is involved.",
  alternates: { canonical: "/how-it-works" },
};

const pillars: PlatformPillar[] = [
  {
    slug: "properties",
    icon: "properties",
    title: "Digital Properties",
    description: "Purpose-built websites designed around consumer search intent.",
  },
  {
    slug: "qualification",
    icon: "qualification",
    title: "Qualification Logic",
    description: "Campaign rules evaluate every inquiry using predefined criteria.",
  },
  {
    slug: "routing",
    icon: "routing",
    title: "Routing Infrastructure",
    description: "Qualified opportunities move through intelligent routing systems.",
  },
  {
    slug: "measurement",
    icon: "measurement",
    title: "Performance Measurement",
    description: "Source attribution and reporting improve campaign quality over time.",
  },
];

const wontDo = [
  { icon: PhoneOff, label: "No robocalling" },
  { icon: ListX, label: "No purchased cold-call lists" },
  { icon: MessageSquareOff, label: "No unsolicited SMS campaigns" },
  { icon: UserX, label: "No impersonation of service providers" },
  { icon: MapPinOff, label: "No fabricated local offices" },
  { icon: ShieldAlert, label: "No misleading claims" },
];

export default function HowItWorks() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 md:px-10 md:py-6">
          <Reveal>
            <p className="accent-underline w-fit text-xs font-medium tracking-[0.25em] text-blue uppercase">
              How It Works
            </p>
            <h1 className="mt-8 max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-ink md:text-balance md:text-6xl">
              A legitimate, consumer-initiated model.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-balance">
              Every inquiry starts with a consumer who is already looking for
              help. Here is exactly how it moves from there.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-gray-50 py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Interactive Acquisition Workflow
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

      <section className="border-b border-line bg-white py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Behind the Platform
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              The infrastructure behind every inquiry.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, i) => (
              <Reveal key={item.slug} delay={i * 80}>
                <PlatformCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-gray-50 py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Consumer Journey
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              What the consumer actually experiences.
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-16">
            <ConsumerJourney />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-white py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Qualification Engine
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Every inquiry is evaluated before it ever routes.
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-14 flex justify-center">
            <QualificationEngineDiagram />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-gray-50 py-4 md:py-6">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Technology Layers
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              A stack built for accountability.
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-14">
            <TechnologyStack />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-white py-4 md:py-6">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Reveal className="text-center">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              What We Don&apos;t Do
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Compliance is not optional.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {wontDo.map((item, i) => (
              <Reveal
                key={item.label}
                delay={i * 60}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:bg-white hover:shadow-xl hover:shadow-ink/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-muted transition-colors duration-300 group-hover:text-blue">
                  <item.icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-ink">{item.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-4 md:py-6">
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
