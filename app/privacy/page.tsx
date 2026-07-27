import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | MooFoo Ventures",
  description: "How MooFoo Ventures LLC collects, uses, and protects information.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <p className="accent-underline w-fit text-xs font-medium tracking-[0.25em] text-blue uppercase">
          Legal
        </p>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-ink">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated: July 2026</p>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-muted">
          <p>
            This Privacy Policy explains how {siteConfig.legalName} (&ldquo;MooFoo
            Ventures,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects, uses, and
            protects information in connection with our websites and inbound
            marketing properties. This document is written in plain language for
            general informational purposes and has not been reviewed by an
            attorney.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-ink">Information We Collect</h2>
            <p className="mt-3">
              We collect information you provide directly, such as your name,
              email address, company, and message when you submit a contact
              form. If our properties include inbound call campaigns, we may
              also collect information through call tracking, including phone
              numbers and, where legally permitted and disclosed, call
              recordings.
            </p>
            <p className="mt-3">
              We also collect limited technical information automatically,
              such as browser type, device information, and general usage
              data, typically through cookies or similar tracking
              technologies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">How We Use Information</h2>
            <p className="mt-3">
              We use information to respond to inquiries, operate and improve
              our marketing properties, measure campaign performance and call
              quality, route qualified inquiries to participating providers,
              and meet legal and compliance obligations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Cookies &amp; Tracking</h2>
            <p className="mt-3">
              Our properties may use cookies, pixels, and call-tracking
              technology to measure traffic sources, attribute conversions,
              and evaluate campaign performance. You can control cookies
              through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Third-Party Service Providers</h2>
            <p className="mt-3">
              We may share information with service providers that support
              our operations &mdash; including hosting, call tracking,
              analytics, and email delivery &mdash; solely to help us provide
              and improve our services. We do not sell personal information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Your Choices</h2>
            <p className="mt-3">
              You may contact us at any time to ask what information we hold
              about you, request corrections, or request deletion, subject to
              applicable law and legitimate business needs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Children&apos;s Privacy</h2>
            <p className="mt-3">
              Our properties are not directed to children under 13, and we do
              not knowingly collect information from children.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Changes
              will be reflected by an updated &ldquo;Last updated&rdquo; date
              above.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Contact Us</h2>
            <p className="mt-3">
              Questions about this policy can be sent to{" "}
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
