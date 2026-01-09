import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/src/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "ghost" | "outline"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 leading-none"

    const variants = {
      default: "bg-charcoal text-ivory hover:bg-charcoal",
      primary: "bg-primary-green text-ivory hover:bg-primary-green shadow-md hover:shadow-lg",
      secondary: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory",
      ghost: "text-charcoal hover:bg-charcoal",
      outline: "border border-charcoal bg-transparent hover:bg-charcoal"
    }

    const sizes = {
      default: "h-10 px-6 py-2.5",
      sm: "h-9 px-4 py-2 text-sm",
      lg: "h-12 px-8 py-3 text-lg"
    }

    return (
      <Comp
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
