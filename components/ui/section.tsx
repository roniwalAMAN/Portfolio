import clsx from "clsx";
import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative mx-auto w-full max-w-6xl px-4 py-12 md:py-16",
        className
      )}
    >
      <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          {eyebrow && (
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {eyebrow}
            </div>
          )}
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="mt-2 max-w-3xl text-sm text-muted sm:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}

