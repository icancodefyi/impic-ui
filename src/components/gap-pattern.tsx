type GapPatternProps = {
  className?: string
}

export function GapPattern({ className = "" }: GapPatternProps) {
  return <div aria-hidden className={`pointer-events-none bg-[repeating-linear-gradient(135deg,var(--grid-color)_0px_1px,transparent_1px_10px)] ${className}`} />
}