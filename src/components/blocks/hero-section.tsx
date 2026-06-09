"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"

const components = [
  "Hero Sections",
  "Features",
  "Pricing",
  "Cards",
  "Tabs",
  "Marquee",
  "Accordions",
  "Inputs",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:pt-36">
      <div className="lab-grid subtle-mask absolute inset-x-0 top-0 h-[34rem] opacity-60" />
      <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-foreground/5 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border bg-background/80 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          Copy-paste components for React and Tailwind
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="max-w-5xl text-balance text-5xl font-semibold leading-[0.96] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Build interfaces that feel considered.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-6 max-w-2xl text-balance text-base leading-7 text-muted-foreground sm:text-lg"
        >
          Impic UI is a focused component library with clean defaults, quiet motion,
          and documentation that keeps design and code close together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
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
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.24 }}
          className="preview-shell mt-16 w-full overflow-hidden rounded-2xl p-2"
        >
          <div className="ink-panel overflow-hidden rounded-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="font-mono text-xs text-white/60">impic-ui/registry</div>
              <div className="hidden font-mono text-xs text-white/40 sm:block">
                npx impic-ui add hero-section
              </div>
            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-[0.82fr_1.18fr]">
              <div className="bg-black/40 p-6 text-left sm:p-8">
                <div className="mb-16 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                  live preview
                </div>
                <div className="max-w-sm">
                  <div className="mb-4 h-3 w-24 rounded-full bg-white/20" />
                  <div className="h-9 w-full rounded bg-white/90" />
                  <div className="mt-3 h-9 w-9/12 rounded bg-white/70" />
                  <div className="mt-5 space-y-2">
                    <div className="h-2 w-full rounded bg-white/20" />
                    <div className="h-2 w-8/12 rounded bg-white/20" />
                  </div>
                  <div className="mt-7 flex gap-2">
                    <div className="h-9 w-28 rounded-lg bg-white" />
                    <div className="h-9 w-24 rounded-lg border border-white/15" />
                  </div>
                </div>
              </div>

              <div className="bg-black/30 p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {components.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/[0.035] p-4 text-left transition-colors hover:bg-white/[0.07]"
                    >
                      <div className="mb-8 h-2 w-8 rounded-full bg-white/20" />
                      <div className="text-sm font-medium text-white">{item}</div>
                      <div className="mt-2 h-2 w-10 rounded-full bg-white/15" />
                      <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/35">
                        0{(index % 4) + 1}
                      </div>
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
