import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

/*
 * shadcn/ui Button, restyled for the dashboard.
 *
 * Every button in the dashboard is a pill or a 40px circle, so the variants are
 * named after the surfaces they sit on:
 *   tool  - frosted toolbar button (page header)
 *   chip  - soft chip inside glass cards
 *   frost - translucent white on colored cards
 *   brand - indigo gradient call to action
 */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full whitespace-nowrap outline-none select-none focus-visible:outline-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        tool: "theme-transition bg-tool text-ink shadow-soft",
        chip: "theme-transition bg-chip text-ink",
        frost: "bg-white/20 text-white",
        brand: "brand-gradient-alt text-[14px] font-medium text-white shadow-pill",
        ghost: "bg-transparent text-ink",
      },
      size: {
        icon: "size-[40px]",
        default: "h-[40px] gap-[7px] px-[16px]",
      },
    },
    defaultVariants: {
      variant: "tool",
      size: "icon",
    },
  }
)

function Button({
  className,
  variant = "tool",
  size = "icon",
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
