import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Independent Projects"
      description="Focused on building production-grade full-stack and real-time systems through personal projects."
    >
      <div className="grid gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Briefcase className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">Independent Projects</p>
              <p className="text-sm text-muted">
                Focused on building production-grade full-stack and real-time systems through personal projects.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}

