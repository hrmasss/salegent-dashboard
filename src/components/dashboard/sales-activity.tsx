import { ACTIVITY_W, ActivityBars } from "@/components/charts/activity-bars"
import { Glowing, NEUTRAL_GLOW } from "@/components/dashboard/glow"
import { ArrowUpRightIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
import { salesActivity as d } from "@/data/dashboard"

/* Hour labels are placed in card px; the chart starts 20px in from the card edge. */
const CHART_X = 20

export function SalesActivity({ className }: { className?: string }) {
  return (
    <Glowing
      base={[458, 210]}
      glows={[{ x: 14, y: 22, w: 430, h: 205, color: "var(--glow-neutral-2)", opacity: NEUTRAL_GLOW }]}
      className={className}
    >
      <Card surface="glass" className="flex flex-1 flex-col pt-[20px] pr-[16px] pb-[18px] pl-[20px] 2xl:h-[210px] 2xl:flex-none">
        <CardTitle className="ml-px text-[18px] leading-[23px] font-medium">
          {d.title[0]}
          <br />
          {d.title[1]}
        </CardTitle>
        <div className="absolute top-[47px] left-[46.27%] text-[30px] leading-[36px] font-medium tracking-[-0.01em]">{d.total}</div>
        <Button variant="chip" className="absolute top-[19px] right-[16px]" aria-label="Open activity">
          <ArrowUpRightIcon />
        </Button>

        <div className="min-h-[36px] flex-1" />
        <div className="relative">
          <ActivityBars gaps={d.gaps} clusters={d.clusters} className="block" />
          <div className="relative mt-[12px] h-[16px] text-[12.5px] leading-[16px] text-sub">
            {d.hours.map((h) => (
              <span key={h.label} className="absolute" style={{ left: `${((h.x - CHART_X) / ACTIVITY_W) * 100}%` }}>
                {h.label}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Glowing>
  )
}
