import type { ReactNode } from "react"

import { Sparkline } from "@/components/charts/sparkline"
import { Glowing, type GlowSpec } from "@/components/dashboard/glow"
import { ArrowUpRightIcon } from "@/components/icons"
import { Globe } from "@/components/illustrations/globe"
import { Funnel } from "@/components/illustrations/funnel"
import { Card, CardTitle } from "@/components/ui/card"
import { insightTiles, metricTiles } from "@/data/dashboard"
import { cn } from "@/lib/utils"

type Surface = "mint" | "magenta" | "pink" | "sky"

/*
 * Colored tile: fixed height, fluid width. Two-line title top left, arrow top
 * right, artwork centered below. `base` is the tile's reference size in px.
 */
function Tile({
  surface,
  title,
  titleClass,
  arrowRight,
  base,
  glow,
  className,
  children,
}: {
  surface: Surface
  title: readonly string[]
  titleClass: string
  arrowRight: number
  base: [number, number]
  glow: GlowSpec
  className?: string
  children: ReactNode
}) {
  return (
    <Glowing base={base} glows={[glow]} className={className}>
      <Card surface={surface} className="shrink-0" style={{ height: base[1] }}>
        <CardTitle className={cn("text-[17px] text-white/90", titleClass)}>
          {title[0]}
          <br />
          {title[1]}
        </CardTitle>
        <ArrowUpRightIcon className="absolute top-[25px]" style={{ right: arrowRight }} stroke="rgba(255,255,255,.85)" />
        {children}
      </Card>
    </Glowing>
  )
}

export function HighIntentLeads({ className }: { className?: string }) {
  return (
    <Tile
      surface="mint"
      title={insightTiles.highIntent.title}
      titleClass="pt-[18px] pl-[22px] leading-[21px]"
      arrowRight={25}
      base={[219, 194]}
      glow={{ x: 4, y: 21, w: 212, h: 200, color: "var(--glow-mint)", opacity: 0.7 }}
      className={className}
    >
      <Globe className="absolute top-[86px] left-[calc(50%-54.5px)]" />
    </Tile>
  )
}

export function DealsAtRisk({ className }: { className?: string }) {
  return (
    <Tile
      surface="magenta"
      title={insightTiles.atRisk.title}
      titleClass="pt-[18px] pl-[21px] leading-[21px]"
      arrowRight={25}
      base={[213, 194]}
      glow={{ x: 4, y: 21, w: 206, h: 200, color: "var(--glow-magenta)", opacity: 0.7 }}
      className={className}
    >
      <Funnel className="absolute top-[78px] left-[calc(50%-44.5px)]" />
    </Tile>
  )
}

function MetricValue({ children }: { children: ReactNode }) {
  return <div className="absolute top-[86px] left-0 w-full text-center text-[32px] leading-[38px] font-normal">{children}</div>
}

export function LeadNumber({ className }: { className?: string }) {
  return (
    <Tile
      surface="pink"
      title={metricTiles.leadNumber.title}
      titleClass="pt-[19px] pl-[21px] leading-[22px]"
      arrowRight={26}
      base={[222, 207]}
      glow={{ x: 6, y: 20, w: 212, h: 210, color: "var(--glow-pink)", opacity: 0.75 }}
      className={className}
    >
      <MetricValue>{metricTiles.leadNumber.value}</MetricValue>
      <Sparkline
        className="absolute top-[140px] left-0 h-auto w-full"
        width={222}
        targetY={17}
        path="M20 25 C 45 26, 55 34, 70 30 S 95 18, 111 18 S 140 24, 158 22 S 185 12, 202 16"
      >
        <circle cx="55" cy="31" r="2.6" fill="none" stroke="#fff" strokeWidth="1.2" />
        <circle cx="111" cy="18" r="6" fill="rgba(255,255,255,.35)" />
        <circle cx="111" cy="18" r="3.6" fill="#fff" />
      </Sparkline>
    </Tile>
  )
}

export function AiEfficiency({ className }: { className?: string }) {
  return (
    <Tile
      surface="sky"
      title={metricTiles.aiEfficiency.title}
      titleClass="pt-[19px] pl-[21px] leading-[22px]"
      arrowRight={26}
      base={[220, 207]}
      glow={{ x: 6, y: 20, w: 210, h: 210, color: "var(--glow-sky)", opacity: 0.75 }}
      className={className}
    >
      <MetricValue>{metricTiles.aiEfficiency.value}</MetricValue>
      <Sparkline
        className="absolute top-[140px] left-0 h-auto w-full"
        width={220}
        targetY={19}
        path="M20 30 C 35 36, 45 36, 52 33 S 75 24, 90 22 S 102 16, 110 18 S 135 30, 150 28 S 180 16, 200 19"
      >
        <circle cx="51" cy="34" r="2.4" fill="none" stroke="#fff" strokeWidth="1.2" />
        <circle cx="108" cy="18" r="3.6" fill="#fff" />
      </Sparkline>
    </Tile>
  )
}
