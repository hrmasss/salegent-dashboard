import { salesPipeline } from "@/data/dashboard"

type Props = Pick<typeof salesPipeline, "yTicks" | "xTicks"> & { className?: string }

const MAIN_CURVE = "M64 395 C 150 394, 205 392, 232 372 C 256 352, 268 300, 282 233"

/*
 * Pipeline growth chart. Drawn in a 419 x 460 space whose x axis matches the
 * card's width; only the plot band (y 180 to 450) is shown. The SVG scales
 * uniformly with the card. The hatch band behind the upper half is a sibling
 * div (see SalesPipeline).
 */
export const PIPELINE_VIEW = { y: 180, width: 419, height: 270 } as const

export function PipelineChart({ yTicks, xTicks, className }: Props) {
  return (
    <svg className={className} viewBox={`0 ${PIPELINE_VIEW.y} ${PIPELINE_VIEW.width} ${PIPELINE_VIEW.height}`} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="pipeline-curve" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".85" />
          <stop offset=".7" stopColor="#ffe2ff" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <filter id="pipeline-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
      </defs>

      <g className="font-sans" fontSize="12" fill="rgba(255,255,255,.85)" textAnchor="end">
        {yTicks.map((t) => (
          <text key={t.label} x={t.x} y={t.y}>
            {t.label}
          </text>
        ))}
      </g>

      {/* axes */}
      <path d="M64 199V415" stroke="rgba(255,255,255,.35)" />
      <path d="M64 276H398" stroke="rgba(255,255,255,.4)" />
      <path d="M64 415H398" stroke="rgba(255,255,255,.25)" />
      {/* target */}
      <path d="M64 341H398" stroke="rgba(255,255,255,.9)" strokeWidth="1.5" strokeDasharray="8 6" />
      {/* comparison curves */}
      <path d="M64 402 C 170 402, 205 400, 230 360 S 290 230, 320 199" stroke="rgba(255,255,255,.45)" strokeWidth="1.2" />
      <path d="M64 410 C 190 410, 235 408, 262 370 S 318 250, 345 200" stroke="rgba(255,255,255,.35)" strokeWidth="1.2" />
      <path d="M140 404 C 250 404, 268 400, 290 360 S 330 260, 356 214" stroke="rgba(255,255,255,.25)" strokeWidth="1" />
      {/* main curve: glow + stroke */}
      <path d={MAIN_CURVE} stroke="#f2b6ff" strokeWidth="7" opacity=".55" filter="url(#pipeline-glow)" />
      <path d={MAIN_CURVE} stroke="url(#pipeline-curve)" strokeWidth="3" strokeLinecap="round" />
      {/* marker */}
      <path d="M124 341V415" stroke="#fff" strokeWidth="1.6" />
      <circle cx="124" cy="341" r="4.2" fill="#fff" />

      <g className="font-sans" fontSize="12" fill="rgba(255,255,255,.85)" textAnchor="middle">
        {xTicks.map((t) => (
          <text key={t.label} x={t.x} y={435}>
            {t.label}
          </text>
        ))}
      </g>
    </svg>
  )
}
