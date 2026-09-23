import { salesActivity } from "@/data/dashboard"

export const ACTIVITY_H = 62
export const ACTIVITY_W = 420
const H = ACTIVITY_H
const WIDTH = ACTIVITY_W

type Props = Pick<typeof salesActivity, "gaps" | "clusters"> & { className?: string }

/*
 * Hourly activity: soft background columns in the gaps, dark bar clusters on
 * top. Height is fixed; the time axis stretches to the available width.
 */
export function ActivityBars({ gaps, clusters, className }: Props) {
  const columns: number[] = []
  for (let x = 0; x <= 418; x += 3) {
    if (gaps.some(([a, b]) => x > a + 2 && x < b - 2)) columns.push(x)
  }

  return (
    <svg className={className} width="100%" height={H} viewBox={`0 0 ${WIDTH} ${H}`} preserveAspectRatio="none" aria-hidden="true">
      {columns.map((x) => (
        <rect key={`bg-${x}`} x={x} y={H - 60} width={1.2} height={60} style={{ fill: "var(--barBg)" }} />
      ))}
      {clusters.flatMap((c) =>
        c.h.flatMap((h, i) => {
          const x = c.x + i * 3.1
          const bars = [
            <rect key={`fg-${c.x}-${i}`} x={x} y={H - h} width={1.5} height={h} style={{ fill: "var(--barFg)" }} />,
          ]
          if (i % 3 === 2) {
            bars.push(
              <rect
                key={`mid-${c.x}-${i}`}
                x={x + 1.55}
                y={H - h * 0.5}
                width={1.2}
                height={h * 0.5}
                style={{ fill: "var(--barMid)" }}
              />
            )
          }
          return bars
        })
      )}
    </svg>
  )
}
