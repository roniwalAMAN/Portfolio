import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-border/70 backdrop-blur-xl bg-surface/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-background shadow-lg shadow-accent/30">
            AR
          </div>
          <div className="leading-tight">
            <p className="text-sm text-muted">Full Stack Developer</p>
            <p className="text-base text-foreground">Aman Roniwal</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/roniwalAMAN"
            className="rounded-full border border-border/60 p-2 text-muted transition hover:border-accent hover:text-accent"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aman-roniwal-73b22528a/"
            className="rounded-full border border-border/60 p-2 text-muted transition hover:border-accent hover:text-accent"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:amanroniwal10@gmail.com"
            className="rounded-full border border-border/60 p-2 text-muted transition hover:border-accent hover:text-accent"
          >
            <Mail className="h-4 w-4" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

