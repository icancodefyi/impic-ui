import { cn } from "@/lib/utils"

const badgeVariants = {
  default:
    "bg-primary text-primary-foreground",
  outline:
    "border border-border text-foreground bg-transparent",
  secondary:
    "bg-secondary text-secondary-foreground",
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof badgeVariants
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wider uppercase",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
