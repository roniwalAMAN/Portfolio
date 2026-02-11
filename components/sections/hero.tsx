"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LinkButton } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col-reverse gap-10 px-4 py-14 lg:flex-row lg:items-center lg:py-20">
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/70 px-3 py-1 text-sm text-muted">
          <Sparkles className="h-4 w-4 text-accent" />
          Full Stack Web Developer · Real-time Systems · WebRTC
        </div>
        <div className="space-y-4">
          <motion.h1
            className="text-4xl font-semibold leading-tight sm:text-5xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Building scalable full-stack products with{" "}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              real-time experiences.
            </span>
          </motion.h1>
          <p className="max-w-2xl text-lg text-muted sm:text-xl">
            I'm Aman Roniwal, a Full Stack Web Developer building secure, scalable web applications with real-time collaboration, video calling, and low-latency systems using React, Next.js, WebRTC, Stream SDK, Clerk, and Convex.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <LinkButton href="#projects">
            View projects <ArrowRight className="h-4 w-4" />
          </LinkButton>
          <LinkButton href="/Aman_Roniwal_Full_Stack_Web_Developer.pdf" variant="secondary">
            Download Resume
          </LinkButton>
          <LinkButton
            href="#contact"
            variant="ghost"
            className="px-0 text-muted hover:text-foreground"
          >
            Let’s talk
          </LinkButton>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-row sm:items-center sm:gap-6">
          {[
            "3+ Years Experience",
            "99.9% Production Uptime",
            "<150ms Real-time Latency",
          ].map((text) => (
            <div key={text} className="rounded-xl border border-border/70 bg-surface/70 px-4 py-3">
              <p className="text-lg font-semibold text-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex w-full max-w-md justify-center lg:max-w-lg">
        <motion.div
          className="relative aspect-square w-full max-w-sm overflow-hidden rounded-[28px] border border-border/80 bg-surface/80 shadow-2xl shadow-accent/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent-2/25 blur-3xl" />
          <Image
            src="/globe.png"
            alt="Aman Roniwal"
            fill
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%)]" />
        </motion.div>
      </div>
    </section>
  );
}

