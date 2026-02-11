import clsx from "clsx";
import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "secondary";

const baseStyles =
  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent to-accent-2 text-background shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30",
  secondary:
    "border border-border bg-surface text-foreground hover:border-accent hover:text-accent",
  ghost: "text-muted hover:text-foreground hover:bg-border/20",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={clsx(baseStyles, variants[variant], className)}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}

