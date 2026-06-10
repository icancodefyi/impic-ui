"use client"

import { motion } from "motion/react"

const features = [
  {
    title: "Copy-paste friendly",
    description: "Use the components directly in your app without extra setup or wrapper code.",
  },
  {
    title: "Built for React",
    description: "Each block is structured for modern React and works cleanly with the app router.",
  },
  {
    title: "Minimal dependencies",
    description: "Keep your stack lean with a small surface area and predictable implementation details.",
  },
  {
    title: "Polished defaults",
    description: "Typography, spacing, and motion are tuned to feel deliberate out of the box.",
  },
  {
    title: "Accessible patterns",
    description: "The UI keeps semantics and contrast in mind so the result stays practical.",
  },
  {
    title: "Composable sections",
    description: "Mix and match blocks to build a landing page without redesigning each piece.",
  },
]

export function FeaturesSection() {
  return (
    <section className="w-full px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
              Features
            </span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to move fast</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
            A compact set of blocks and primitives that stay easy to read, easy to reuse, and easy to ship.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-2xl border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 h-10 w-10 rounded-xl border bg-background" />
              <h3 className="text-base font-semibold tracking-tight">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}