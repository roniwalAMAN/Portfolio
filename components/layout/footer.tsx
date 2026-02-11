import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-surface/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">Aman Roniwal</p>
          <p className="text-sm text-muted">
            Building fast, resilient, and human-focused products.
          </p>
        </div>
        <div className="flex gap-4 text-sm text-muted">
          <Link href="#projects" className="hover:text-foreground">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-foreground">
            Contact
          </Link>
          <Link
            href="https://vercel.com"
            className="hover:text-foreground"
            target="_blank"
          >
            Deploy on Vercel
          </Link>
        </div>
      </div>
    </footer>
  );
}

