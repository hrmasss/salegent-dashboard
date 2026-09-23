import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/*
 * Soft color blooms behind a card. Each glow is measured against the card's
 * reference size (`base`, in px) and rendered in percentages, so it scales
 * with the card at every breakpoint. Glows sit at z-0, cards at z-[1].
 */
export type GlowSpec = { x: number; y: number; w: number; h: number; color: string; opacity: number | string }

export const NEUTRAL_GLOW = "var(--neutralGlow)"

export function Glowing({
  base: [W, H],
  glows,
  className,
  children,
}: {
  base: [number, number]
  glows: GlowSpec[]
  className?: string
  children: ReactNode
}) {
  return (
    <div className={cn("relative flex min-w-0 flex-col", className)}>
      {glows.map((g, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="glow z-0"
          style={{
            left: `${(g.x / W) * 100}%`,
            top: `${(g.y / H) * 100}%`,
            width: `${(g.w / W) * 100}%`,
            height: `${(g.h / H) * 100}%`,
            background: g.color,
            opacity: g.opacity,
          }}
        />
      ))}
      {children}
    </div>
  )
}
