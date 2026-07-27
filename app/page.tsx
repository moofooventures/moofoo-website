import type { Metadata } from "next";
import {
  Search,
  MousePointerClick,
  PhoneCall,
  Route,
  Target,
  BadgeCheck,
  BarChart3,
  Gauge,
  Ruler,
  BrainCog,
  ShieldCheck,
} from "lucide-react";
import Button from "@/components/Button";
import HeroImage from "@/components/HeroImage";
import MarketingMarquee from "@/components/MarketingMarquee";
import CapabilityCard from "@/components/CapabilityCard";
import IndustryCard from "@/components/IndustryCard";
import Reveal from "@/components/Reveal";
import { capabilities } from "@/lib/capabilities";
import { industries } from "@/lib/industries";

const steps = [
  {
    title: "Capture high-intent demand",
    description: "Consumers actively searching for help find our digital properties.",
  },
  {
    title: "Route inquiries through approved tracking systems",
    description: "Every inquiry passes through compliant call tracking and attribution.",
  },
  {
    title: "Connect consumers with participating providers",
    description: "Qualified inquiries are routed to independent service providers.",
  },
  {
    title: "Measure quality and performance",
    description: "Call quality and conversion data inform every campaign decision.",
  },
];

const techItems = [
  { icon: Search, label: "Search-Intent Analysis" },
  { icon: MousePointerClick, label: "Landing-Page Optimization" },
  { icon: PhoneCall, label: "Call Tracking & Attribution" },
  { icon: Route, label: "Geographic Routing" },
  { icon: Target, label: "Conversion Measurement" },
  { icon: BadgeCheck, label: "Quality Monitoring" },
  { icon: BarChart3, label: "AI-Assisted Reporting" },
];

const whyItems = [
  {
    icon: Gauge,
    title: "Performance Focused",
    description: "Campaigns are built around measurable outcomes, not vanity metrics.",
  },
  {
    icon: Ruler,
    title: "Built for Measurability",
    description: "Every inquiry is tracked, attributed, and evaluated for quality.",
  },
  {
    icon: BrainCog,
    title: "AI Assisted, Human Directed",
    description: "AI supports our workflows; people make the decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Conscious",
    description: "Campaigns are built with consumer protection and compliance in mind.",
  },
];

export const metadata: Metadata = {
  title: "MooFoo Ventures | AI-Powered Lead Generation and Performance Marketing",
  description:
    "MooFoo Ventures builds AI-assisted lead generation platforms, pay-per-call campaigns, and performance marketing systems that connect consumers with service providers.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-navy">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pt-8 pb-20 md:grid-cols-[1fr_1.6fr] md:px-10 md:pt-10 md:pb-28">
          <div>
            <p className="accent-underline w-fit text-xs font-medium tracking-[0.25em] text-blue-soft/80 uppercase">
              AI-Powered Performance Marketing
            </p>
            <h1 className="mt-8 text-balance text-3xl leading-[1.1] font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              Building Digital Systems That Generate Qualified Customers.
            </h1>
            <p className="mt-7 max-w-lg text-balance text-lg leading-relaxed text-white/70">
              MooFoo Ventures develops inbound lead-generation platforms,
              performance marketing campaigns, and AI-assisted digital
              businesses that connect consumers with trusted service
              providers.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/capabilities" className="!bg-white !text-ink hover:!bg-blue-soft">
                Explore Our Capabilities
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="!border-white/30 !text-white hover:!border-blue hover:!text-blue-soft"
              >
                Partner With Us
              </Button>
            </div>
            <p className="mt-8 text-xs font-medium tracking-[0.1em] text-white/50 uppercase">
              Inbound Lead Generation &bull; Pay Per Call &bull; Performance
              Marketing &bull; AI Automation
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroImage />
          </div>
        </div>
      </section>

      <MarketingMarquee />

      <section className="border-t border-line bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              What we build.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, i) => (
              <Reveal key={capability.slug} delay={i * 80}>
                <CapabilityCard capability={capability} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-gray-50 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              How It Works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              A straightforward, compliant model.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100} className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 border-t border-line pt-8 text-sm leading-relaxed text-muted">
            MooFoo Ventures operates independent marketing properties and may
            connect consumers with third-party service providers. We do not
            directly perform the underlying services.
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Industries
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Markets we evaluate.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Areas of focus for current and future development &mdash; not a
              guarantee of active campaigns in every category.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={i * 60}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-gray-50 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Technology &amp; Measurement
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              How campaigns are operated.
            </h2>
          </Reveal>

          <Reveal className="mt-14 rounded-2xl border border-line bg-white p-8 md:p-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {techItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-ink">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Why MooFoo Ventures
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <item.icon
                  className="h-6 w-6 text-blue"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-blue-soft/80 uppercase">
              Partnership
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Building relationships that scale.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Reveal className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-semibold text-white">
                For Networks and Advertisers
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                We are building compliant inbound acquisition properties and
                seek relationships with reputable networks and advertisers
                that value transparent traffic sources and measurable call
                quality.
              </p>
            </Reveal>
            <Reveal delay={100} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-semibold text-white">
                For Technology and Business Partners
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                We collaborate with platforms and operators that strengthen
                tracking, routing, analytics, automation, and customer
                acquisition.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150} className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="outline" className="!border-white/30 !text-white hover:!border-blue hover:!text-blue">
              Discuss a Partnership
            </Button>
            <Button href="/contact">Contact MooFoo Ventures</Button>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-white py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              About
            </p>
            <p className="mt-6 text-balance text-xl leading-relaxed text-ink md:text-2xl">
              MooFoo Ventures LLC is a New Jersey-based technology and
              performance marketing company building AI-assisted digital
              businesses and consumer acquisition systems.
            </p>
            <Button href="/about" variant="outline" className="mx-auto mt-8">
              Learn More
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-gray-50 py-28 md:py-36">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center md:px-10">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Let&apos;s Build Measurable Growth.
            </h2>
            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted md:text-lg">
              We are interested in relationships with reputable networks,
              advertisers, technology providers, and operators in high-intent
              consumer markets.
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
