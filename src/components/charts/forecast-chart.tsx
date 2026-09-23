import { dealForecast } from "@/data/dashboard"
import { cn } from "@/lib/utils"

type Props = Pick<typeof dealForecast, "today" | "baseline" | "segments"> & { className?: string }

const W = 458
const H = 115
const DOT_R = 4.2
const DOT_Y = 51

/*
 * Step forecast: shaded history, vertical grid, baseline steps, forecast
 * segments, "today" crosshair. Height is fixed; the time axis stretches to the
 * available width. Strokes keep their width, and the "today" dot is an HTML
 * element so it stays round.
 */
export function ForecastChart({ today, baseline, segments, className }: Props) {
  const grid: number[] = []
  for (let x = 20; x <= 440; x += 7) grid.push(x)

  return (
    <div className={cn("relative", className)} style={{ height: H }} aria-hidden="true">
      <svg className="absolute inset-0" width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <rect x={20} y={5} width={today - 20} height={100} style={{ fill: "var(--fcShade)" }} />
        {grid.map((x) => (
          <rect key={x} x={x} y={5} width={1} height={100} style={{ fill: "var(--fcGrid)" }} />
        ))}
        <path d={baseline} style={{ stroke: "var(--fcBase)" }} strokeWidth={1.4} fill="none" vectorEffect="non-scaling-stroke" />
        {segments.map((s) => (
          <path
            key={`${s.x1}-${s.y}`}
            d={`M${s.x1} ${s.y}H${s.x2}`}
            style={{ stroke: "muted" in s && s.muted ? "var(--fcSeg2)" : "var(--fcSeg)" }}
            strokeWidth={2}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <path d={`M${today} 3V112`} style={{ stroke: "var(--fcCross)" }} strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
      </svg>
      <span
        className="absolute rounded-full"
        style={{
          left: `calc(${(today / W) * 100}% - ${DOT_R}px)`,
          top: DOT_Y - DOT_R,
          width: DOT_R * 2,
          height: DOT_R * 2,
          background: "var(--fcCross)",
        }}
      />
    </div>
  )
}
