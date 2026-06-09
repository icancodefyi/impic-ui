"use client"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  repeat?: number
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  repeat = 4,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--duration:40s] [--gap:1rem] gap-(--gap)",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around gap-(--gap)",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
