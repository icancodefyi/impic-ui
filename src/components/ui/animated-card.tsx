"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
  variant?: "default" | "muted" | "strong"
}

export function AnimatedCard({
  icon,
  title,
  description,
  className,
  variant = "default",
}: AnimatedCardProps) {
  const borderColors = {
    default: "from-foreground/8 to-transparent",
    muted: "from-muted to-transparent",
    strong: "from-foreground/12 to-transparent",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-card p-5",
        "hover:bg-muted/40",
        "transition-all duration-300",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-gradient-to-br",
          borderColors[variant]
        )}
      />
      <div className="relative z-10">
        <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors group-hover:text-foreground">
          {icon}
        </div>
        <h3 className="font-medium text-sm group-hover:text-foreground transition-colors">{title}</h3>
        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
