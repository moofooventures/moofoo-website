import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use | MooFoo Ventures",
  description: "Terms governing the use of MooFoo Ventures LLC websites and marketing properties.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <p className="accent-underline w-fit text-xs font-medium tracking-[0.25em] text-blue uppercase">
          Legal
        </p>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-ink">
          Terms of Use
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated: July 2026</p>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-muted">
          <p>
            These Terms of Use govern your access to and use of websites and
            digital properties operated by {siteConfig.legalName}
            (&ldquo;MooFoo Ventures,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;).
            By using our properties, you agree to these terms. This document
            is written in plain language for general informational purposes
            and has not been reviewed by an attorney.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-ink">Our Services</h2>
            <p className="mt-3">
              MooFoo Ventures operates independent inbound marketing
              properties that connect consumers searching for services with
              independent third-party service providers. We do not directly
              perform plumbing, roofing, HVAC, legal, insurance, medical, or
              other underlying services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Acceptable Use</h2>
            <p className="mt-3">
              You agree not to misuse our properties, including by
              submitting false information, attempting to disrupt our
              systems, or using our properties for any unlawful purpose.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Intellectual Property</h2>
            <p className="mt-3">
              All content, branding, and materials on our properties are
              owned by MooFoo Ventures or its licensors and may not be used
              without permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">No Guarantee of Outcomes</h2>
            <p className="mt-3">
              We do not guarantee the availability, pricing, licensing,
              quality, or outcomes of any third-party service provider we
              connect you with. Service availability varies by location and
              category. You should independently evaluate any provider
              before engaging their services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Disclaimers &amp; Limitation of Liability</h2>
            <p className="mt-3">
              Our properties are provided &ldquo;as is&rdquo; without
              warranties of any kind. To the fullest extent permitted by
              law, MooFoo Ventures is not liable for damages arising from
              your use of our properties or your interactions with any
              third-party provider.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Governing Law</h2>
            <p className="mt-3">
              These terms are governed by the laws of the State of New
              Jersey, without regard to conflict-of-law principles.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Changes to These Terms</h2>
            <p className="mt-3">
              We may update these Terms of Use from time to time. Continued
              use of our properties after changes constitutes acceptance of
              the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Contact Us</h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
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
