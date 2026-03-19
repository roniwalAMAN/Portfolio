import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/profile";
import { Github, Link2 } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="Systems that blend performant frontends with reliable, observable backends."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex h-full flex-col p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {project.type && (
                  <span className="mt-1 inline-flex rounded-full border border-border/60 bg-surface/80 px-2 py-0.5 text-xs text-muted">
                    {project.type}
                  </span>
                )}
                <p className="mt-2 text-sm text-muted">{project.description}</p>
              </div>
            </div>
            {project.highlights && Array.isArray(project.highlights) ? (
              <ul className="mt-3 grid gap-2">
                {project.highlights.map((h: string) => (
                  <li key={h} className="text-sm text-foreground">• {h}</li>
                ))}
              </ul>
            ) : null}

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/60 bg-surface/80 px-3 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3 text-sm font-medium">
              {project.links?.live ? (
                <Link
                  href={project.links.live}
                  className="flex items-center gap-1 text-accent hover:underline"
                >
                  <Link2 className="h-4 w-4" />
                  Live
                </Link>
              ) : null}
              {project.links?.github ? (
                <Link
                  href={project.links.github}
                  className="flex items-center gap-1 text-muted hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

