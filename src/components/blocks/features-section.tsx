"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "Quiet motion",
    description: "Animations are used to clarify state and hierarchy, not to decorate every corner.",
    className: "md:col-span-2",
  },
  {
    title: "Copy-paste friendly",
    description: "Small APIs and readable component files keep adoption simple.",
  },
  {
    title: "Docs beside previews",
    description: "Every component page keeps the visual result, install steps, props, and usage in one flow.",
  },
  {
    title: "Consistent surfaces",
    description: "One border system, one radius, one neutral palette, and one typography rhythm.",
    className: "md:col-span-2",
  },
]

export function FeaturesSection() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Library principles
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Everything follows the same visual grammar.
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            The system is intentionally plain in the best way: monochrome,
            spacious, readable, and built around previews that look like real UI.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-2xl border bg-border md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
              className={cn(
                "group min-h-64 bg-card p-6 transition-colors hover:bg-muted/45",
                "border-b border-r last:border-r-0 md:border-b-0",
                feature.className
              )}
            >
              <div className="mb-16 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-10 bg-border transition-all group-hover:w-16 group-hover:bg-foreground" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{feature.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
