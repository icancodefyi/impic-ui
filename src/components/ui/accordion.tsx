"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

interface AccordionItem {
  title: string
  content: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={cn("w-full divide-y", className)}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between py-3 text-sm font-medium text-left"
          >
            {item.title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={cn("transition-transform duration-200", openIndex === i && "rotate-180")}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="pb-3 text-xs text-muted-foreground">{item.content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
