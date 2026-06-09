"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for side projects and personal use.",
    features: ["Up to 3 projects", "Core components", "Community support", "MIT license"],
  },
  {
    name: "Pro",
    price: "$19",
    description: "For professional developers and small teams.",
    features: ["Unlimited projects", "All components + blocks", "Premium support", "Early access"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    description: "For large teams and production applications.",
    features: ["Everything in Pro", "Custom components", "Priority support", "SLA guarantee"],
  },
]

export function PricingSection() {
  return (
    <section className="w-full px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center rounded-full border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
              Pricing
            </span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple pricing</h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
            Choose the plan that fits your needs.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`relative rounded-xl border bg-card p-6 ${
                plan.popular
                  ? "shadow-[0_20px_60px_hsl(var(--foreground)/0.08)]"
                  : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full border bg-background px-3 py-0.5 text-[10px] font-medium text-muted-foreground shadow-sm">
                  Popular
                </span>
              )}
              <h3 className="font-semibold">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-semibold">{plan.price}</span>
                {plan.price !== "Free" && <span className="text-xs text-muted-foreground">/month</span>}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "default" : "outline"}
                className="mt-6 w-full"
                size="sm"
              >
                Get started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
