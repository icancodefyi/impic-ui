"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface TabsProps {
  tabs: { label: string; content: React.ReactNode }[]
  className?: string
}

export function Tabs({ tabs, className }: TabsProps) {
  const [active, setActive] = useState(0)

  return (
    <div className={cn("w-full", className)}>
      <div className="flex gap-0 border-b">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            className={cn(
              "px-4 py-2 text-xs font-medium transition-colors border-b-2",
              active === i
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pt-4">{tabs[active]?.content}</div>
    </div>
  )
}
