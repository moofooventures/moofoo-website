import Link from "next/link";
import type { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "gold";
}) {
  const base =
    "inline-flex w-fit items-center gap-2 px-7 py-3 text-xs tracking-[0.2em] uppercase transition-colors";
  const variants = {
    solid: "bg-black text-white hover:bg-gold hover:text-black",
    outline:
      "border border-black text-black hover:border-gold hover:text-gold-deep",
    gold: "bg-gold text-black hover:bg-white",
  };
  const styles = variants[variant];

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
