import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif-display text-lg tracking-[0.15em]">
              MOOFOO <span className="text-gold">VENTURES</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              A venture studio and investment firm building and backing the
              next generation of software, commerce, and technology brands.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-gold uppercase">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-gold uppercase">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="mailto:hello@moofooventures.com"
                  className="transition-colors hover:text-gold"
                >
                  hello@moofooventures.com
                </a>
              </li>
              <li>MooFoo Ventures LLC</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center">
          <p>&copy; {year} MooFoo Ventures LLC. All rights reserved.</p>
          <p className="tracking-[0.15em] uppercase">
            AI Software &middot; SaaS &middot; E-commerce &middot;
            Investments
          </p>
        </div>
      </div>
    </footer>
  );
}
