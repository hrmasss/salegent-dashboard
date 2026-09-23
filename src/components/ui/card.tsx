import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

/*
 * shadcn/ui Card, restyled. A card is a fluid surface: it fills the width its
 * grid cell gives it and lays its content out in normal flow. Corner actions
 * anchor themselves with absolute positioning. The surface recipes live in
 * styles/tokens.css.
 */
const cardVariants = cva("relative z-[1] min-w-0", {
  variants: {
    surface: {
      glass: "surface-glass theme-transition border border-[var(--navBorder)] text-ink",
      pipeline: "surface-pipeline overflow-hidden text-white",
      pink: "surface-pink overflow-hidden text-white",
      sky: "surface-sky overflow-hidden text-white",
      mint: "surface-mint overflow-hidden",
      magenta: "surface-magenta overflow-hidden",
    },
    radius: {
      lg: "rounded-[22px]",
      md: "rounded-[20px]",
    },
  },
  defaultVariants: {
    surface: "glass",
    radius: "md",
  },
})

function Card({
  className,
  surface,
  radius,
  ...props
}: React.ComponentProps<"section"> & VariantProps<typeof cardVariants>) {
  return (
    <section
      data-slot="card"
      className={cn(cardVariants({ surface, radius }), className)}
      {...props}
    />
  )
}

function CardTitle({
  className,
  as: Tag = "h3",
  ...props
}: React.ComponentProps<"h3"> & { as?: "h2" | "h3" }) {
  return <Tag data-slot="card-title" className={className} {...props} />
}

export { Card, CardTitle, cardVariants }
