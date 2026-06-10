"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const stats = [
  ["08", "blocks"],
  ["12+", "ui primitives"],
  ["100%", "copy-paste"],
]

const notes = [
  "Editorial typography",
  "Quiet borders",
  "Low-noise surfaces",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,hsl(var(--foreground)/0.045),transparent_28%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--muted)/0.08))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[linear-gradient(to_right,hsl(var(--border)/0.38)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.38)_1px,transparent_1px)] bg-size-[5rem_5rem] mask-[radial-gradient(ellipse_at_center,black,transparent_72%)] opacity-25" />
     


      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:gap-14">
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            <span>Hero section</span>
            <span className="text-foreground/40">·</span>
            <span>refined layout</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.03 }}
            className="max-w-3xl text-balance text-5xl font-semibold leading-[0.92] tracking-tight sm:text-6xl lg:text-[4.75rem]"
          >
            Build interfaces that feel calm, sharp, and deliberate.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-5 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg"
          >
            Impic UI keeps the hero simple on purpose: strong type, controlled
            spacing, and a visual rhythm that feels designed instead of
            assembled.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/components">
              <Button size="lg" className="w-full sm:w-auto">
                Browse components
              </Button>
            </Link>
            <Link href="/docs">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Read documentation
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
          >
            <span className="text-foreground">Designed for</span>
            {notes.map((note) => (
              <Badge key={note} variant="outline" className="rounded-full px-3 py-1 font-normal">
                {note}
              </Badge>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-border/70 bg-card/80 px-4 py-4 shadow-sm">
                <div className="text-2xl font-semibold tracking-tight">{value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-full bg-foreground/5 blur-3xl" />
          <div className="relative overflow-hidden rounded-4xl border border-border/70 bg-card/90 shadow-[0_24px_90px_hsl(var(--foreground)/0.08)]">
            <div className="flex items-center justify-between border-b border-border/70 bg-background/90 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="flex h-3 w-3 rounded-full bg-red-500" />
                <span className="flex h-3 w-3 rounded-full bg-amber-400" />
                <span className="flex h-3 w-3 rounded-full bg-emerald-500" />
                <span className="ml-3 text-muted-foreground">Preview</span>
              </div>
              <div className="hidden text-xs text-muted-foreground sm:block">
                compact editorial shell
              </div>
            </div>

            <div className="grid gap-px bg-border/70 md:grid-cols-[1.05fr_0.95fr]">
              <div className="bg-background p-6 sm:p-7">
                <div className="mb-8 flex items-center justify-between">
                  <Badge variant="outline" className="rounded-full px-3 py-1 font-normal">
                    live preview
                  </Badge>
                  <span className="text-xs text-muted-foreground">focus first</span>
                </div>

                <div className="max-w-sm">
                  <div className="h-2.5 w-24 rounded-full bg-foreground/10" />
                  <div className="mt-4 h-10 w-full rounded-2xl border border-border/70 bg-card" />
                  <div className="mt-3 h-10 w-[88%] rounded-2xl border border-border/70 bg-card" />
                  <div className="mt-5 space-y-2.5">
                    <div className="h-2.5 w-full rounded-full bg-foreground/10" />
                    <div className="h-2.5 w-[82%] rounded-full bg-foreground/10" />
                    <div className="h-2.5 w-[66%] rounded-full bg-foreground/10" />
                  </div>
                  <div className="mt-7 flex gap-2">
                    <div className="h-9 w-28 rounded-full bg-foreground" />
                    <div className="h-9 w-24 rounded-full border border-border/70 bg-background" />
                  </div>
                </div>
              </div>

              <div className="bg-[linear-gradient(180deg,hsl(var(--muted)/0.1),hsl(var(--background)))] p-5 sm:p-6">
                <div className="mb-4 flex justify-center">
                  <Image
                    src="https://assets.aceternity.com/components/mountains-snow.webp"
                    alt="Snowy mountains"
                    width={520}
                    height={320}
                    className="rounded-2xl object-cover shadow-sm"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3">
                  {[
                    ["Typography", "Large type, tighter copy, less noise."],
                    ["Spacing", "Clear rhythm with enough air around content."],
                    ["Surfaces", "Quiet blocks that feel intentional."],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-border/70 bg-card px-4 py-4">
                      <div className="text-sm font-medium">{title}</div>
                      <div className="mt-1 text-sm leading-6 text-muted-foreground">{text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
