import { ForecastChart } from "@/components/charts/forecast-chart"
import { Glowing, NEUTRAL_GLOW } from "@/components/dashboard/glow"
import { ArrowUpRightIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
import { dealForecast as d } from "@/data/dashboard"

export function DealForecast({ className }: { className?: string }) {
  return (
    <Glowing
      base={[458, 199]}
      glows={[{ x: 14, y: 24, w: 430, h: 195, color: "var(--glow-neutral-2)", opacity: NEUTRAL_GLOW }]}
      className={className}
    >
      <Card surface="glass" className="flex flex-1 flex-col overflow-hidden pt-[19px] 2xl:h-[199px] 2xl:flex-none">
        <CardTitle className="pl-[22px] text-[18px] leading-[23px] font-medium">
          {d.title[0]}
          <br />
          {d.title[1]}
        </CardTitle>
        <Button variant="chip" className="absolute top-[17px] right-[16px]" aria-label="Open forecast">
          <ArrowUpRightIcon />
        </Button>
        <div className="min-h-[19px] flex-1" />
        <ForecastChart today={d.today} baseline={d.baseline} segments={d.segments} className="w-[calc(100%+2px)] shrink-0" />
      </Card>
    </Glowing>
  )
}
