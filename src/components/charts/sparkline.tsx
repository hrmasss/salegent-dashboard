import type { ReactNode } from "react"

/* Small white trend line over a dotted target, used on the colored metric tiles. */
export function Sparkline({
  width,
  targetY,
  path,
  children,
  className,
}: {
  width: number
  targetY: number
  path: string
  children?: ReactNode
  className?: string
}) {
  return (
    <svg className={className} width={width} height="40" viewBox={`0 0 ${width} 40`} fill="none" aria-hidden="true">
      <path d={`M20 ${targetY}H${width - 20}`} stroke="rgba(255,255,255,.75)" strokeWidth="1" strokeDasharray="2 3" />
      <path d={path} stroke="rgba(255,255,255,.85)" strokeWidth="1.3" />
      {children}
    </svg>
  )
}
