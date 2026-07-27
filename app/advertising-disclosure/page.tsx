import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Advertising Disclosure | MooFoo Ventures",
  description:
    "How MooFoo Ventures LLC's inbound marketing properties work, including compensation and third-party provider relationships.",
  alternates: { canonical: "/advertising-disclosure" },
};

export default function AdvertisingDisclosure() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <p className="accent-underline w-fit text-xs font-medium tracking-[0.25em] text-blue uppercase">
          Legal
        </p>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-ink">
          Advertising Disclosure
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated: July 2026</p>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-muted">
          <p>
            This disclosure explains how {siteConfig.legalName} operates its
            inbound marketing properties. This document is written in plain
            language for general informational purposes and has not been
            reviewed by an attorney.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-ink">Independent Marketing Properties</h2>
            <p className="mt-3">
              MooFoo Ventures operates independent websites and digital
              properties designed to help consumers who are searching for
              services. We are a marketing company, not a provider of
              plumbing, roofing, HVAC, legal, insurance, medical, or other
              underlying services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Connections to Third-Party Providers</h2>
            <p className="mt-3">
              When you submit an inquiry or place a call through one of our
              properties, you may be connected with an independent
              third-party service provider. That provider, not MooFoo
              Ventures, is responsible for the service you ultimately
              receive.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Compensation</h2>
            <p className="mt-3">
              MooFoo Ventures may receive compensation from advertisers or
              networks for qualified calls or inquiries generated through
              our properties. This compensation does not affect the
              information presented to you, but it is the basis of our
              business model.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">No Guarantees</h2>
            <p className="mt-3">
              Service availability varies by location, category, and
              provider capacity. MooFoo Ventures does not guarantee the
              availability, pricing, licensing, or outcomes of any provider
              you are connected with. We encourage you to independently
              evaluate any provider &mdash; including their licensing,
              reviews, and pricing &mdash; before engaging their services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Questions</h2>
            <p className="mt-3">
              If you have questions about how a specific property or
              campaign works, contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-blue hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
