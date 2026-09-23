import { DealForecast } from "@/components/dashboard/deal-forecast"
import { PageHeader } from "@/components/dashboard/page-header"
import { SalesActivity } from "@/components/dashboard/sales-activity"
import { SalesPerformance } from "@/components/dashboard/sales-performance"
import { SalesPipeline } from "@/components/dashboard/sales-pipeline"
import { AiEfficiency, DealsAtRisk, HighIntentLeads, LeadNumber } from "@/components/dashboard/tiles"
import { TopBar } from "@/components/dashboard/top-bar"

/*
 * Page composition. Card placement lives here and only here; each card owns
 * its internal layout and fills the width it is given.
 *
 *   < md     one column: performance, pipeline, metric tiles, insight tiles,
 *            activity, forecast
 *   md - xl  two columns, pipeline on the right spanning two rows, forecast
 *            full width at the bottom
 *   xl +     three columns in fixed proportions; from 2xl (1536px) the
 *            columns take their full width and the layout stops growing
 *
 * Below xl the three column wrappers are `display: contents`, so their cards
 * are placed directly by the grid's named areas.
 */
const grid = [
  "grid grid-cols-1 gap-4 [grid-template-areas:'sp'_'pipe'_'metrics'_'risk'_'act'_'fc']",
  "md:grid-cols-2 md:gap-5 md:[grid-template-areas:'sp_pipe'_'risk_pipe'_'metrics_act'_'fc_fc']",
  "xl:grid-cols-[450fr_419fr_458fr] xl:items-start xl:[grid-template-areas:none]",
  "2xl:grid-cols-[450px_419px_458px] 2xl:gap-x-[20px]",
].join(" ")

const column = "contents xl:flex xl:flex-col xl:gap-[18px]"

export function Dashboard() {
  return (
    <div className="surface-bgfx theme-transition relative min-h-dvh overflow-clip text-ink 2xl:min-h-[max(100dvh,1024px)]">
      <div className="mx-auto max-w-[1536px] px-4 pt-6 pb-12 sm:px-6 md:px-8 md:pt-10 xl:px-10 2xl:pt-[90px] 2xl:pr-[80px] 2xl:pb-0 2xl:pl-[88px]">
        <TopBar />

        <div className="mt-8 2xl:mt-[40px]">
          <PageHeader />
        </div>

        <main className={`mt-8 2xl:mt-[24px] ${grid}`}>
          <div className={`${column} xl:mt-[6px]`}>
            <SalesPerformance className="[grid-area:sp]" />
            <div className="grid grid-cols-2 gap-4 [grid-area:risk] 2xl:grid-cols-[219px_213px] 2xl:gap-[17px]">
              <HighIntentLeads />
              <DealsAtRisk />
            </div>
          </div>

          <div className={column}>
            <SalesPipeline className="[grid-area:pipe]" />
          </div>

          <div className={`${column} 2xl:-mr-px 2xl:ml-px`}>
            <div className="grid grid-cols-2 gap-4 [grid-area:metrics] 2xl:grid-cols-[222px_220px]">
              <LeadNumber />
              <AiEfficiency />
            </div>
            <SalesActivity className="[grid-area:act]" />
            <DealForecast className="[grid-area:fc]" />
          </div>
        </main>
      </div>
    </div>
  )
}
