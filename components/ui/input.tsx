import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        data-slot="input"
        className={cn(
          "h-10 w-full min-w-0 rounded-lg border border-white/10 bg-transparent px-3 text-sm text-cream outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/20 disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
