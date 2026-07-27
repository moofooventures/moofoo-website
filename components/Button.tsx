import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline";

const base =
  "inline-flex w-fit items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:-translate-y-0.5 hover:bg-blue-deep hover:shadow-lg hover:shadow-blue/10",
  outline:
    "border border-line text-ink hover:-translate-y-0.5 hover:border-blue hover:text-blue",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function SubmitButton({
  children,
  variant = "primary",
  className = "",
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
