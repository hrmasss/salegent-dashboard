import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

/* shadcn/ui Badge, restyled: a small status pill. */
const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-[5px] overflow-hidden rounded-full whitespace-nowrap [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        success: "bg-ok-bg text-ok font-medium",
        frost: "border border-white/30 bg-white/25 text-white backdrop-blur-xs",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
)

function Badge({
  className,
  variant = "success",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
