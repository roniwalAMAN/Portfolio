"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { bio } from "@/data/profile";
import { Mail, Send } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Email is invalid"),
  message: z.string().min(10, "Message is too short"),
});

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
};

export function Contact() {
  const [formState, setFormState] = useState<FormState>({ status: "idle" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState({ status: "idle", message: undefined });

    const parsed = schema.safeParse(formData);
    if (!parsed.success) {
      setFormState({
        status: "error",
        message: parsed.error.issues[0]?.message ?? "Invalid input",
      });
      return;
    }

    setFormState({ status: "loading" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }
      setFormState({
        status: "success",
        message: "Thanks! I’ll get back to you shortly.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setFormState({
        status: "error",
        message: "Could not send message. Please retry.",
      });
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s collaborate"
      description="Tell me about the product or system you want to build, and we’ll design the fastest path to production."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-muted">Email</p>
              <p className="font-medium text-foreground">{bio.email}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">
            Prefer async? Send an email with your goals and constraints—latency
            budgets, SLAs, or integration requirements.
          </p>
          <div className="mt-4 space-y-2 text-sm text-muted">
            {bio.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="block text-foreground transition hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label className="text-sm text-muted">Name</label>
              <input
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-xl border border-border/60 bg-surface px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-muted">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="rounded-xl border border-border/60 bg-surface px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="you@example.com"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-muted">Project details</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="rounded-xl border border-border/60 bg-surface px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="What are you building? Timelines, team, constraints?"
              />
            </div>
            {formState.message && (
              <p
                className={`text-sm ${
                  formState.status === "error" ? "text-red-400" : "text-accent"
                }`}
              >
                {formState.message}
              </p>
            )}
            <Button
              type="submit"
              disabled={formState.status === "loading"}
              className="w-full justify-center"
            >
              {formState.status === "loading" ? (
                "Sending..."
              ) : (
                <>
                  Send message <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}

