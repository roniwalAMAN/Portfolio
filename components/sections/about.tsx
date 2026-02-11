import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { bio, stats } from "@/data/profile";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineer focused on performance and resiliency"
      description={bio.summary}
    >
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="col-span-2 p-6">
          <div className="flex flex-col gap-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-surface/70 px-3 py-1 text-sm text-muted">
              {bio.location}
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {bio.interests.map((interest) => (
                <li key={interest} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                  <span className="text-foreground">{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <div className="grid gap-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-xl border border-border/50 bg-surface/60 p-4">
                <p className="text-xs uppercase tracking-wide text-muted">
                  {item.label}
                </p>
                <p className="text-xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

