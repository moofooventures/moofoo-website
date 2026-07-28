import type { Metadata } from "next";
import Image from "next/image";
import footerImage from "@/public/footerimage.png";
import {
  Fingerprint,
  CheckCircle2,
  Route,
  RefreshCcw,
  Gauge,
  Ruler,
  BrainCog,
  ShieldCheck,
  Handshake,
  Network,
  Megaphone,
  Cpu,
  Compass,
  Shield,
  Target,
  BarChart3,
  Lock,
  ArrowRight,
  Calendar,
  Users,
} from "lucide-react";
import Button from "@/components/Button";
import HeroImage from "@/components/HeroImage";
import MarketingMarquee from "@/components/MarketingMarquee";
import IndustryCard from "@/components/IndustryCard";
import Reveal from "@/components/Reveal";
import JourneyFlow from "@/components/JourneyFlow";
import ProcessAnimation from "@/components/ProcessAnimation";
import PipelineSchematic from "@/components/PipelineSchematic";
import Timeline from "@/components/Timeline";
import { industries } from "@/lib/industries";

const metricCards = [
  {
    icon: Fingerprint,
    title: "Source Attribution",
    status: "Tracked",
    description: "Every inquiry is tied back to its originating source.",
  },
  {
    icon: CheckCircle2,
    title: "Qualification Status",
    status: "Rules Applied",
    description: "Inquiries are evaluated against campaign-specific criteria.",
  },
  {
    icon: Route,
    title: "Routing Outcome",
    status: "Routed",
    description: "Qualified demand is directed to the appropriate destination.",
  },
  {
    icon: RefreshCcw,
    title: "Conversion Feedback",
    status: "Reporting",
    description: "Outcome data flows back to refine future campaigns.",
  },
];

const partners = [
  {
    icon: Network,
    title: "Affiliate Networks",
    description:
      "We develop independent consumer acquisition properties that can support approved pay-per-call and lead-generation campaigns.",
  },
  {
    icon: Megaphone,
    title: "Direct Advertisers",
    description:
      "We help advertisers reach consumers who are actively researching and requesting relevant services.",
  },
  {
    icon: Cpu,
    title: "Technology Platforms",
    description:
      "We work with call-tracking, routing, analytics, hosting and automation providers that strengthen acquisition infrastructure.",
  },
  {
    icon: Compass,
    title: "Strategic Partners",
    description:
      "We are open to joint ventures, distribution relationships and technology partnerships in high-intent consumer markets.",
  },
];

const trustBadges = [
  { icon: Shield, label: "Compliant and Ethical" },
  { icon: Target, label: "Consumer Intent Focused" },
  { icon: BarChart3, label: "Measurable Performance" },
  { icon: Lock, label: "Transparent and Secure" },
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
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 pt-4 pb-4 md:grid-cols-[1.4fr_1.6fr] md:px-10 md:pt-6 md:pb-6">
          <div>
            <p className="accent-underline w-fit text-xs font-medium tracking-[0.25em] text-blue-soft/80 uppercase">
              Intelligent Customer Acquisition
            </p>
            <h1 className="mt-6 text-balance text-2xl leading-[1.15] font-semibold tracking-tight text-white md:text-3xl lg:text-4xl">
              We Build Digital Properties That Turn Consumer Intent Into
              Qualified Calls and Leads.
            </h1>
            <p className="mt-5 text-balance text-sm leading-normal text-white/70 md:text-base">
              MooFoo Ventures develops AI-assisted customer acquisition
              systems for high-intent consumer markets. We build the
              digital properties, tracking infrastructure, qualification
              logic and routing systems that connect consumers with
              participating advertisers and service providers.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" className="!bg-white !text-ink hover:!bg-blue-soft">
                Get In Touch
              </Button>
              <Button
                href="#how-it-works"
                variant="outline"
                className="!border-white/30 !text-white hover:!border-blue hover:!text-blue-soft"
              >
                How It Works
              </Button>
            </div>
            <p className="mt-6 text-xs font-medium tracking-[0.1em] text-white/50 uppercase">
              Pay Per Call &bull; Inbound Lead Generation &bull; AI-Assisted
              Qualification &bull; Call Tracking &bull; Geographic Routing
            </p>
          </div>

          <div className="flex justify-center overflow-visible md:justify-start">
            <HeroImage />
          </div>
        </div>
      </section>

      <MarketingMarquee />

      <section className="border-t border-line bg-gray-50 pt-4 pb-4 md:pt-6 md:pb-6">
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          <Reveal className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Who We Work With
            </p>
            <div className="mt-4 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-soft text-blue">
                <Handshake className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  Built for Performance-Based Partnerships
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  MooFoo Ventures works with organizations that value
                  transparent acquisition, measurable customer intent and
                  clearly defined qualification standards.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner, i) => (
              <Reveal key={partner.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-xl hover:shadow-ink/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-soft text-blue transition-all duration-300 group-hover:scale-110 group-hover:bg-blue group-hover:text-white">
                    <partner.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-ink">{partner.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {partner.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 border-t border-line bg-gray-50 pt-4 pb-4 md:pt-6 md:pb-6">
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          <Reveal className="flex justify-center">
            <ProcessAnimation />
          </Reveal>

          <Reveal className="mt-10 max-w-2xl mx-auto text-center sm:mx-0 sm:text-left">
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              How MooFoo Ventures Works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Demand becomes growth, systematically.
            </h2>
          </Reveal>

          <div className="mt-16">
            <JourneyFlow />
          </div>

          <Reveal className="mt-14 flex items-start gap-4 rounded-2xl bg-ink p-6 md:p-8">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-soft" strokeWidth={1.75} aria-hidden="true" />
            <p className="text-sm leading-relaxed text-white/80">
              <span className="font-semibold text-white">Consumer-initiated by design.</span>{" "}
              MooFoo Ventures does not use robocalling, purchased cold-call
              lists or unsolicited text-message campaigns.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-white py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          <Reveal className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
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
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={i * 60}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-hero-navy py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          <Reveal className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
            <p className="text-xs font-medium tracking-[0.2em] text-blue-soft/80 uppercase">
              Technology &amp; Measurement
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              How campaigns are operated.
            </h2>
          </Reveal>

          <Reveal className="mt-14 flex justify-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-10">
            <PipelineSchematic />
          </Reveal>

          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {metricCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 80} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <card.icon className="h-4 w-4 shrink-0 text-blue-soft" strokeWidth={1.75} aria-hidden="true" />
                  <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                </div>
                <span className="mt-3 inline-block rounded-full bg-blue-soft px-2.5 py-1 text-xs font-medium text-blue">
                  {card.status}
                </span>
                <p className="mt-3 text-xs leading-relaxed text-white/70">
                  {card.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          <Reveal className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
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

      <section className="border-t border-line bg-gray-50 py-4 md:py-6">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-10">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Future Vision
            </p>
            <h2 className="mt-4 text-balance text-2xl leading-snug font-semibold tracking-tight text-ink md:text-3xl">
              We build intelligent technology companies that transform
              customer demand into measurable business growth.
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-16">
            <Timeline />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-ink py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          <Reveal className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
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

      <section className="border-t border-line bg-white py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="accent-underline w-fit text-xs font-medium tracking-[0.25em] text-blue uppercase">
                Partnerships That Perform
              </p>
              <h2 className="mt-6 text-balance text-4xl leading-tight font-bold tracking-tight md:text-5xl">
                <span className="text-ink">Let&apos;s Build</span>
                <br />
                <span className="bg-gradient-to-r from-blue to-blue-soft bg-clip-text text-transparent">
                  Measurable Growth.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted md:text-lg">
                We partner with reputable networks, advertisers, technology
                providers, and operators to deliver qualified customers
                through compliant, AI-assisted acquisition systems that
                drive real results.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
                {trustBadges.map((badge) => (
                  <div key={badge.label} className="flex items-start gap-2.5">
                    <badge.icon className="mt-0.5 h-5 w-5 shrink-0 text-blue" strokeWidth={1.75} aria-hidden="true" />
                    <span className="text-sm font-medium text-ink">{badge.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" className="gap-2.5">
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                </Button>
                <Button href="/contact" variant="outline" className="gap-2.5">
                  <Calendar className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  Schedule a Call
                </Button>
              </div>

              <p className="mt-5 flex items-center gap-2 text-xs text-muted">
                <Lock className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                We respect your time. No spam, just real opportunities.
              </p>
            </Reveal>

            <Reveal delay={100} className="flex flex-col gap-6">
              <div className="w-full overflow-hidden rounded-3xl border border-line bg-white">
                <Image
                  src={footerImage}
                  alt="MooFoo Ventures AI-powered robotic shark, representing the intelligent systems behind our partnerships"
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 45vw, 90vw"
                />
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-line bg-gray-50 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-soft text-blue">
                  <Users className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">We&apos;re stronger together.</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    Whether you&apos;re an advertiser, network, or technology
                    provider, let&apos;s create a partnership that scales.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-16 flex items-center justify-center gap-2 border-t border-line pt-10 text-center text-sm text-muted">
            <ShieldCheck className="h-4 w-4 shrink-0 text-blue" strokeWidth={1.75} aria-hidden="true" />
            <span>
              Built on <span className="font-semibold text-blue">trust</span>. Driven by{" "}
              <span className="font-semibold text-blue">data</span>. Focused on{" "}
              <span className="font-semibold text-blue">results</span>.
            </span>
          </Reveal>
        </div>
      </section>
    </>
  );
}
