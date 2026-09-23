import { salesPerformance } from "@/data/dashboard"

const STEP = 6.6
const RADIUS = 2.35
const BASELINE = 36

type DotGroup = (typeof salesPerformance.dotGroups)[number]

/* Stacked-dot histogram. Every third column tops out with a softer dot. */
export function DotMatrix({ groups, className }: { groups: DotGroup[]; className?: string }) {
  return (
    <svg className={className} width="290" height="42" viewBox="0 0 290 42" aria-hidden="true">
      {groups.flatMap((g) =>
        g.h.flatMap((h, i) =>
          Array.from({ length: h }, (_, j) => {
            const faint = j === h - 1 && h > 1 && i % 3 === 1
            return (
              <circle
                key={`${g.x0}-${i}-${j}`}
                cx={g.x0 + i * STEP}
                cy={BASELINE - j * STEP}
                r={RADIUS}
                style={{ fill: faint ? g.soft : g.color }}
              />
            )
          })
        )
      )}
    </svg>
  )
}
