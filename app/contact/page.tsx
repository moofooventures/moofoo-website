import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact | MooFoo Ventures",
  description:
    "Get in touch with MooFoo Ventures LLC to discuss an affiliate network application, advertiser relationship, technology partnership, or general inquiry.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <p className="accent-underline w-fit text-xs font-medium tracking-[0.25em] text-blue uppercase">
            Contact
          </p>
          <h1 className="mt-8 max-w-2xl text-balance text-4xl leading-tight font-semibold tracking-tight text-ink md:text-5xl">
            Let&apos;s talk about a partnership.
          </h1>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="text-base leading-relaxed text-muted">
              Whether you represent an affiliate network, an advertiser, a
              technology platform, or you&apos;re exploring a business
              partnership, we&apos;d like to hear from you.
            </p>

            <div className="mt-10 border-t border-line pt-8">
              <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-lg text-ink transition-colors hover:text-blue"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="mt-8 border-t border-line pt-8">
              <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
                Company
              </p>
              <p className="mt-2 text-lg text-ink">{siteConfig.legalName}</p>
            </div>
          </Reveal>

          <Reveal delay={100} className="rounded-2xl border border-line bg-gray-50 p-8 md:p-10">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
