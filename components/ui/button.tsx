import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "font-medium bg-ferrariYellow text-white hover:bg-transparent hover:text-ferrariYellow border border-ferrariYellow",
        dark: "font-medium bg-dark text-white hover:bg-ferrariYellow hover:border hover:border-ferrariYellow",
        transparent: "font-medium text-white bg-transparent border border-ferrariYellow hover:bg-ferrariYellow hover:text-dark",
        white: "font-medium text-white hover:bg-dark hover:text-white border border-white hover:border-none",
      },
      size: {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-2 text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };