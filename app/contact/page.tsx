import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | MooFoo Ventures",
  description:
    "Get in touch with MooFoo Ventures LLC to discuss a partnership, project, or idea.",
};

export default function Contact() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <p className="gold-underline w-fit text-xs tracking-[0.3em] text-gold-deep uppercase">
          Contact
        </p>
        <h1 className="mt-8 max-w-2xl text-balance font-serif-display text-4xl leading-tight text-black md:text-5xl">
          Let&apos;s talk about what you&apos;re building.
        </h1>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-base leading-relaxed text-muted">
              Whether you&apos;re looking for a growth partner, exploring a
              project, or have an idea worth building, we&apos;d like to
              hear from you.
            </p>

            <div className="mt-10 border-t border-line pt-8">
              <p className="text-xs tracking-[0.2em] text-gold-deep uppercase">
                Email
              </p>
              <a
                href="mailto:hello@moofooventures.com"
                className="mt-2 block text-lg text-black transition-colors hover:text-gold-deep"
              >
                hello@moofooventures.com
              </a>
            </div>

            <div className="mt-8 border-t border-line pt-8">
              <p className="text-xs tracking-[0.2em] text-gold-deep uppercase">
                Company
              </p>
              <p className="mt-2 text-lg text-black">MooFoo Ventures LLC</p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
