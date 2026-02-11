import clsx from "clsx";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "glass relative overflow-hidden rounded-2xl border border-border/80 bg-surface/70 backdrop-blur",
        "shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20",
        className
      )}
    >
      {children}
    </div>
  );
}

