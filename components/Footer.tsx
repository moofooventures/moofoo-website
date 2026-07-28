import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { navLinks, legalLinks } from "@/lib/nav";
import { siteConfig } from "@/lib/site";

const companyLinks = navLinks.filter((l) => ["/about", "/contact"].includes(l.href));
const exploreLinks = navLinks.filter((l) => !companyLinks.includes(l));

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Image
              src={logo}
              alt="MooFoo Ventures shark-fin logo"
              className="h-auto w-[130px]"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              AI-assisted lead generation and performance marketing systems.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.15em] text-muted uppercase">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink transition-colors hover:text-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.15em] text-muted uppercase">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink transition-colors hover:text-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.15em] text-muted uppercase">
              Legal
            </p>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink transition-colors hover:text-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-muted md:flex-row md:items-center">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-blue">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
