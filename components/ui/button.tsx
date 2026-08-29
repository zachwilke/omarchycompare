import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "omarchy-button",
  {
    variants: {
      variant: {
        default: "",
        outline: "",
        secondary: "",
        ghost: "",
        destructive: "",
        link: "omarchy-link border-0 bg-transparent shadow-none",
      },
      size: {
        default: "",
        xs: "",
        sm: "",
        lg: "",
        icon: "",
        "icon-xs": "",
        "icon-sm": "",
        "icon-lg": "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
