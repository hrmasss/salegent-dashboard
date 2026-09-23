import { DotMatrix } from "@/components/charts/dot-matrix"
import { Glowing, NEUTRAL_GLOW } from "@/components/dashboard/glow"
import { ArrowDownIcon, ArrowUpIcon } from "@/components/icons"
import { PersonAvatar } from "@/components/people/person-avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { salesPerformance as d } from "@/data/dashboard"

export function SalesPerformance({ className }: { className?: string }) {
  return (
    <Glowing
      base={[450, 430]}
      glows={[{ x: 16, y: 29, w: 420, h: 415, color: "var(--glow-neutral)", opacity: NEUTRAL_GLOW }]}
      className={className}
    >
      <Card surface="glass" radius="lg" className="flex flex-1 flex-col pt-[25px] [&>*]:shrink-0 pr-[20px] pb-[16px] pl-[26px] 2xl:h-[430px] 2xl:flex-none">
        <div className="absolute top-[24px] right-[20px] flex flex-col items-end gap-[3px]">
          <Badge variant="success" className="h-[25px] w-[84px] text-[14px]">
            <ArrowUpIcon size={12} strokeWidth={2.8} />
            {d.change}
          </Badge>
          <div className="mr-[2px] text-[13px] leading-[16px] text-muted">{d.period}</div>
        </div>

        <CardTitle as="h2" className="text-[20px] leading-[24px] font-medium">
          {d.title}
        </CardTitle>
        <div className="mt-[17px] -ml-px text-[41px] leading-[48px] font-semibold tracking-[-0.02em]">{d.total}</div>
        <div className="mt-[5px] text-[14px] leading-[18px] text-sub">{d.totalLabel}</div>
        <DotMatrix groups={d.dotGroups} className="mt-[9px] -ml-[2px] max-w-full" />

        <div className="mt-[21px] flex items-start justify-between gap-4">
          <p className="mt-[6px] max-w-[270px] min-w-0 text-[14px] leading-[21px] text-sub">{d.summary}</p>
          <div className="flex shrink-0 gap-[11px]">
            <Button variant="chip" aria-label="Up">
              <ArrowUpIcon strokeWidth={2.2} />
            </Button>
            <Button variant="chip" aria-label="Down">
              <ArrowDownIcon strokeWidth={2.2} />
            </Button>
          </div>
        </div>

        <Separator className="mt-[23px] h-px w-full" />

        <div className="mt-[19px] grid grid-cols-[198fr_1px_203fr]">
          <div className="min-w-0">
            <Stat value={d.qualifiedLeads.value} label={d.qualifiedLeads.label} />
            <div className="mt-[20px] flex gap-[13px]">
              {d.qualifiedLeads.people.map((id) => (
                <PersonAvatar key={id} id={id} className="size-[40px]" />
              ))}
            </div>
          </div>

          <Separator orientation="vertical" className="mt-[2px] h-[106px] w-px" />

          <div className="min-w-0 pl-[21px]">
            <Stat value={d.conversations.value} label={d.conversations.label} />
            <div className="mt-[19px] text-[13.5px] leading-[18px] text-sub">{d.conversations.status}</div>
            <div className="mt-px flex items-center gap-[8px] text-[13.5px] leading-[18px] text-sub">
              <span className="size-[7px] rounded-full bg-live" />
              {d.conversations.health}
            </div>
          </div>
        </div>
      </Card>
    </Glowing>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <>
      <div className="text-[28px] leading-[34px] font-medium tracking-[-0.01em]">{value}</div>
      <div className="mt-[2px] text-[14px] leading-[18px] text-sub">{label}</div>
    </>
  )
}
