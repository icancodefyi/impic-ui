import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const buttonVariants = {
  default:
    "bg-primary text-primary-foreground shadow-sm hover:bg-primary/85 active:bg-primary/90",
  outline:
    "border border-border bg-card/50 hover:bg-accent hover:text-accent-foreground",
  ghost:
    "hover:bg-accent hover:text-accent-foreground",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
}

const buttonSizes = {
  sm: "h-8 px-3 text-xs rounded-lg",
  md: "h-9 px-4 text-sm rounded-lg",
  lg: "h-10 px-6 text-sm rounded-xl",
  icon: "h-9 w-9 rounded-lg",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants
  size?: keyof typeof buttonSizes
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
