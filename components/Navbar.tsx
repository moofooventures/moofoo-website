"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/public/logo.png";
import Button from "@/components/Button";
import { navLinks } from "@/lib/nav";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "nav-glass" : "border-transparent bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src={logo}
            alt="MooFoo Ventures shark-fin logo"
            className="h-auto w-[120px] md:w-[150px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue ${
                  active ? "text-blue" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" className="px-5 py-2.5 text-xs">
            Partner With Us
          </Button>
        </div>

        <button
          type="button"
          className="flex items-center justify-center md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-6 w-6 text-ink" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6 text-ink" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line bg-white px-6 py-4 md:hidden">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm font-medium ${active ? "text-blue" : "text-ink"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button href="/contact" className="mt-3 w-full">
            Partner With Us
          </Button>
        </nav>
      )}
    </header>
  );
}
