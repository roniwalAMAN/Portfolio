import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { skills } from "@/data/profile";

const skillGroups = [
  { title: "Frontend", items: skills.frontend },
  { title: "Backend", items: skills.backend },
  { title: "Databases", items: skills.databases },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="End-to-end product builder"
      description="Delivering fast interfaces, stable APIs, and data pipelines built for scale."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <Card key={group.title} className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <span className="text-xs uppercase tracking-wide text-muted">
                {group.items.length} skills
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/60 bg-surface/70 px-3 py-1 text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

