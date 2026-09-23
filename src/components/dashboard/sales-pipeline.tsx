import { PIPELINE_VIEW, PipelineChart } from "@/components/charts/pipeline-chart"
import { Glowing } from "@/components/dashboard/glow"
import { ArrowUpRightIcon } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
import { salesPipeline as d } from "@/data/dashboard"
import { cn } from "@/lib/utils"

/* Position inside the chart frame, as a percentage of its width or height. */
const px = (x: number) => `${(x / PIPELINE_VIEW.width) * 100}%`
const py = (y: number) => `${((y - PIPELINE_VIEW.y) / PIPELINE_VIEW.height) * 100}%`

function Stat({ value, label, align, valueClass, labelClass }: {
  value: string
  label: string
  align: "left" | "right"
  valueClass: string
  labelClass: string
}) {
  return (
    <div className={cn("flex flex-col", align === "left" ? "items-start" : "items-end")}>
      <div className={cn("font-normal tracking-[-0.01em]", valueClass)}>{value}</div>
      <div className={cn(align === "left" && "ml-px", labelClass)}>{label}</div>
    </div>
  )
}

export function SalesPipeline({ className }: { className?: string }) {
  return (
    <Glowing
      base={[419, 648]}
      glows={[
        { x: 8, y: 40, w: 402, h: 640, color: "var(--glow-pipeline)", opacity: 0.65 },
        { x: 122, y: 0, w: 290, h: 230, color: "var(--glow-pipeline-top)", opacity: 0.55 },
      ]}
      className={className}
    >
      <Card surface="pipeline" radius="lg" className="flex flex-1 flex-col pt-[23px] pb-[24px] 2xl:h-[648px] 2xl:flex-none">
        <Button variant="frost" className="absolute top-[21px] right-[18px]" aria-label="Open pipeline">
          <ArrowUpRightIcon stroke="#fff" />
        </Button>

        <div className="pr-[21px] pl-[23px]">
          <CardTitle as="h2" className="text-[19px] leading-[23px] font-normal text-white/95">
            {d.title[0]}
            <br />
            {d.title[1]}
          </CardTitle>
        </div>

        <div className="mt-[20px] flex items-start justify-between gap-4 pr-[21px] pl-[22px]">
          <Stat {...d.newLeads} align="left" valueClass="text-[39px] leading-[44px] mb-[8px]" labelClass="text-[17px] leading-[20px] text-white/90" />
          <Stat {...d.qualified} align="right" valueClass="mt-[4px] text-[36px] leading-[42px] mb-[6px]" labelClass="text-[17px] leading-[20px] text-white/90" />
        </div>

        <div className="relative mt-[19px] aspect-[419/270] w-full">
          <div className="surface-hatch absolute" style={{ left: px(64), top: py(199), width: px(334), height: `${(77 / PIPELINE_VIEW.height) * 100}%` }} />
          <PipelineChart yTicks={d.yTicks} xTicks={d.xTicks} className="absolute inset-0 size-full" />
          <Badge variant="frost" className="absolute h-[26px] w-[54px] text-[12.5px]" style={{ left: px(259), top: py(200) }}>
            {d.goalLabel}
          </Badge>
        </div>

        <div className="mt-[10px] mr-[31px] ml-[22px] flex h-[48px] overflow-hidden rounded-full border border-white/15 bg-white/20">
          <a href="#" className="flex h-[48px] flex-1 items-center justify-center pl-[2px] text-[16px] text-white">
            {d.cta}
          </a>
          <div className="flex h-[48px] w-[60px] items-center justify-center bg-white/10">
            <ArrowUpRightIcon stroke="#fff" />
          </div>
        </div>

        <div className="min-h-[24px] flex-1" />

        <div className="pr-[21px] pl-[23px] text-[16px] leading-[20px] text-white/95">{d.footerTitle}</div>
        <div className="mt-[11px] flex items-start justify-between gap-4 pr-[21px] pl-[22px]">
          <Stat {...d.activeDeals} align="left" valueClass="text-[32px] leading-[38px] mb-[3px]" labelClass="text-[16px] leading-[20px] text-white/70" />
          <Stat {...d.pipelineValue} align="right" valueClass="text-[32px] leading-[38px] mb-[3px]" labelClass="text-[16px] leading-[20px] text-white/80" />
        </div>
      </Card>
    </Glowing>
  )
}
