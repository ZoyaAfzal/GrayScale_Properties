import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center px-7 py-3 text-sm uppercase tracking-wider font-semibold transition-colors rounded-sm";
const styles: Record<Variant, string> = {
  primary: "bg-gold text-slate-brand hover:bg-slate-brand hover:text-gold border border-gold",
  secondary: "border border-stone-brand text-stone-brand hover:bg-stone-brand hover:text-slate-brand",
};

export function BrandLink({
  to,
  children,
  variant = "primary",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link to={to} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function BrandButton({
  children,
  variant = "primary",
  className = "",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
