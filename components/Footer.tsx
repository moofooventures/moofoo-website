import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Image
              src={logo}
              alt="MooFoo Ventures"
              className="h-auto w-[110px] md:w-[180px]"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              MooFoo Ventures builds AI-driven lead generation systems,
              performance marketing platforms, and digital businesses that
              connect customers with trusted companies.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-gold-deep uppercase">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-gold-deep"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-gold-deep uppercase">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href="mailto:hello@moofooventures.com"
                  className="transition-colors hover:text-gold-deep"
                >
                  hello@moofooventures.com
                </a>
              </li>
              <li>MooFoo Ventures LLC</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-muted/70 md:flex-row md:items-center">
          <p>&copy; {year} MooFoo Ventures LLC. All rights reserved.</p>
          <p className="tracking-[0.15em] uppercase">
            AI Software &middot; SaaS &middot; E-commerce &middot; Lead
            Generation
          </p>
        </div>
      </div>
    </footer>
  );
}
