import type { Metadata } from "next";
import {
  Radar,
  Cpu,
  Sparkles,
  Layout,
  Layers,
  Eye,
  TrendingUp,
  Boxes,
  Target,
  ChevronRight,
} from "lucide-react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import AboutHeroVisual from "@/components/AboutHeroVisual";
import PrincipleCard, { type Principle } from "@/components/PrincipleCard";
import CompanyTimeline from "@/components/CompanyTimeline";
import USMapVisual from "@/components/USMapVisual";

export const metadata: Metadata = {
  title: "About | MooFoo Ventures",
  description:
    "MooFoo Ventures LLC is a New Jersey-based technology and performance marketing company building AI-assisted digital businesses and consumer acquisition systems.",
  alternates: { canonical: "/about" },
};

const visionStages = [
  { icon: Radar, label: "Customer Acquisition" },
  { icon: Cpu, label: "AI Infrastructure" },
  { icon: Sparkles, label: "Automation" },
  { icon: Layout, label: "Software" },
  { icon: Layers, label: "Future SaaS Products" },
];

const principles: Principle[] = [
  {
    slug: "transparency",
    icon: "transparency",
    title: "Transparency",
    description:
      "Partners can see how our model works, how compensation is earned, and where traffic originates.",
  },
  {
    slug: "innovation",
    icon: "innovation",
    title: "Innovation",
    description: "We apply new tools and techniques where they genuinely improve outcomes.",
  },
  {
    slug: "technology",
    icon: "technology",
    title: "Technology",
    description: "We build platforms and systems, not one-off campaigns.",
  },
  {
    slug: "measurement",
    icon: "measurement",
    title: "Measurement",
    description: "Every decision is grounded in tracked, attributable outcomes.",
  },
  {
    slug: "longterm",
    icon: "longterm",
    title: "Long-Term Thinking",
    description: "We build for durability, not short-term wins.",
  },
  {
    slug: "partnership",
    icon: "partnership",
    title: "Partnership",
    description: "Networks, advertisers, and partners can expect clear, honest collaboration.",
  },
];

const differences = [
  {
    icon: Cpu,
    title: "Technology First",
    description: "We invest in platforms and systems that compound over time.",
  },
  {
    icon: Radar,
    title: "Consumer Intent",
    description: "Every interaction starts with a consumer who is already looking for help.",
  },
  {
    icon: Eye,
    title: "Transparent Infrastructure",
    description: "Source, routing, and outcome data are visible at every step.",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Workflows",
    description: "AI supports research, routing, and reporting across every campaign.",
  },
  {
    icon: TrendingUp,
    title: "Performance Focused",
    description: "Decisions are made around measurable outcomes, not vanity metrics.",
  },
  {
    icon: Boxes,
    title: "Built for Scale",
    description: "Infrastructure designed to support new markets as they develop.",
  },
];

const futureQuadrants = [
  { eyebrow: "Today's Focus", title: "Customer Acquisition" },
  { eyebrow: "Tomorrow", title: "AI Infrastructure" },
  { eyebrow: "Future", title: "Scalable Software Platforms" },
  { eyebrow: "Long-Term", title: "Enterprise Technology" },
];

export default function About() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 md:px-10 md:py-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <p className="accent-underline w-fit text-xs font-medium tracking-[0.25em] text-blue uppercase">
                About
              </p>
              <h1 className="mt-8 max-w-2xl text-4xl leading-tight font-semibold tracking-tight text-ink md:text-balance md:text-6xl">
                Building the Future of Customer Acquisition Technology.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-balance">
                MooFoo Ventures develops AI-assisted customer acquisition
                infrastructure that transforms consumer intent into
                measurable business opportunities through transparent,
                scalable technology.
              </p>
            </Reveal>
            <Reveal delay={100} className="flex justify-center lg:justify-end">
              <AboutHeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-gray-50 py-4 md:py-6">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Our Story
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Why we exist.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
              <p>
                Customer acquisition has long relied on volume over
                precision &mdash; broad campaigns, unclear sourcing, and
                limited accountability. MooFoo Ventures was built on a
                different premise: that acquisition should be built like
                infrastructure, not run like a campaign.
              </p>
              <p>
                We believe artificial intelligence has a real role to play
                in that shift &mdash; not replacing judgment, but supporting
                it. AI helps us process, route, and report with a level of
                consistency manual work can&apos;t match, while every
                meaningful decision stays with our team.
              </p>
              <p>
                Transparency is not an afterthought. Partners can see how
                our model works, how compensation is earned, and where
                traffic originates &mdash; because durable relationships
                depend on it.
              </p>
              <p>
                MooFoo Ventures LLC is headquartered in New Jersey, building
                technology and digital infrastructure for partners across
                the United States.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-line bg-white p-6">
            {["AI Assists", "Human Reviews", "Decision"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-full bg-blue-soft px-3 py-1.5 text-xs font-semibold text-blue">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <ChevronRight className="h-4 w-4 text-muted" strokeWidth={2} aria-hidden="true" />
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-white py-4 md:py-6">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <Reveal>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-soft text-blue">
              <Target className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <p className="mt-6 text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Our Mission
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Turn consumer intent into measurable, transparent outcomes.
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-base leading-relaxed text-muted">
              We build systems that connect consumers who are already
              looking for help with providers who can offer it &mdash;
              measured and compliant at every step.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-gray-50 py-4 md:py-6">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Our Vision
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              From acquisition to infrastructure.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Our long-term vision extends beyond individual campaigns
              toward reusable, scalable technology.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-12 flex flex-wrap items-center gap-3">
            {visionStages.map((stage, i) => (
              <div key={stage.label} className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5">
                  <stage.icon className="h-4 w-4 text-blue" strokeWidth={1.75} aria-hidden="true" />
                  <span className="text-xs font-medium whitespace-nowrap text-ink">{stage.label}</span>
                </div>
                {i < visionStages.length - 1 && (
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted" strokeWidth={2} aria-hidden="true" />
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-white py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Core Principles
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              What guides our work.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((item, i) => (
              <Reveal key={item.slug} delay={i * 60}>
                <PrincipleCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-gray-50 py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Company Timeline
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              A platform built in stages.
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-16">
            <CompanyTimeline />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-white py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              What Makes MooFoo Different
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Not an agency. An acquisition platform.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {differences.map((item, i) => (
              <Reveal key={item.title} delay={i * 60} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-soft text-blue">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-gray-50 py-4 md:py-6">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Where We Work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Headquartered in New Jersey. Built for Nationwide Growth.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              MooFoo Ventures develops digital customer acquisition
              infrastructure from New Jersey, supporting partners and
              consumers across the United States.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-12 flex justify-center">
            <USMapVisual />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-white py-4 md:py-6">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Building for the Future
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              A roadmap, not a finish line.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {futureQuadrants.map((q, i) => (
              <Reveal
                key={q.eyebrow}
                delay={i * 60}
                className="rounded-2xl border border-line bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:bg-white hover:shadow-xl hover:shadow-ink/5"
              >
                <p className="text-xs font-semibold tracking-[0.15em] text-blue uppercase">
                  {q.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{q.title}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-4 md:py-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center md:px-10">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Transparency
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Trust is built on disclosure.
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-base leading-relaxed text-muted">
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
