/*
 * Mock data for the dashboard. Nothing here is real and nothing is fetched.
 * UI components read from this file only, so swapping in a real data source
 * means replacing these exports, not touching the components.
 */

/* ---------- People (inline SVG portraits, no remote images) ---------- */

export type Person = {
  bg: string
  skin: string
  hair: string
  shirt: string
  beard?: boolean
  long?: boolean
  curly?: boolean
}

export const people = {
  u0: { bg: "#3b82f6", skin: "#c68a64", hair: "#1f1a17", shirt: "#1e3a8a", beard: true },
  w1: { bg: "#fde2c8", skin: "#8a5a3c", hair: "#1b1411", shirt: "#b91c1c", long: true },
  m1: { bg: "#dbeafe", skin: "#b87a57", hair: "#1e1a18", shirt: "#334155" },
  m2: { bg: "#e0f2fe", skin: "#d9a17c", hair: "#3a2a20", shirt: "#0f766e" },
  m3: { bg: "#bfe3c9", skin: "#c48a64", hair: "#22190f", shirt: "#2563eb", beard: true },
  w2: { bg: "#8b5cf6", skin: "#7a4b31", hair: "#1a1210", shirt: "#f59e0b", curly: true },
  w3: { bg: "#fcd34d", skin: "#9a6444", hair: "#151010", shirt: "#dc2626", long: true },
} satisfies Record<string, Person>

export type PersonId = keyof typeof people

export const currentUser: PersonId = "u0"
export const collaborators: PersonId[] = ["w1", "m1", "m2"]

/* ---------- Sales Performance ---------- */

export const salesPerformance = {
  title: "Sales Performance",
  change: "+12.4%",
  period: "vs. last 30 days",
  total: "$294.6K",
  totalLabel: "KPI Totally",
  summary: "AI-powered sales performance based on your latest activity.",
  qualifiedLeads: { value: "286", label: "Qualified Leads", people: ["m3", "w2", "w3"] as PersonId[] },
  conversations: { value: "8.6K", label: "AI Conversations", status: "AI Performance", health: "Optimal" },
  /* Dot matrix: one column per entry in `h`, stacked `h` dots high. */
  dotGroups: [
    { x0: 7, h: [2, 3, 2, 4, 2, 2, 3, 2], color: "var(--dot-pink)", soft: "var(--dot-pink-soft)" },
    { x0: 72, h: [1, 2, 2, 3, 2, 3, 2, 2], color: "var(--dot-blue)", soft: "var(--dot-blue-soft)" },
    { x0: 143, h: [1, 2, 1, 2], color: "var(--dot-green)", soft: "var(--dot-green-soft)" },
    { x0: 188, h: [1, 2, 2, 3, 2, 3, 2, 4, 6, 4, 3, 3], color: "var(--dot-indigo)", soft: "var(--dot-indigo-soft)" },
  ],
}

/* ---------- Tiles ---------- */

export const insightTiles = {
  highIntent: { title: ["High-Intent", "Leads"] },
  atRisk: { title: ["Deals", "at Risk"] },
}

export const metricTiles = {
  leadNumber: { title: ["Lead", "Number"], value: "32.8%" },
  aiEfficiency: { title: ["AI", "Efficiency"], value: "94%" },
}

/* ---------- Sales Pipeline ---------- */

export const salesPipeline = {
  title: ["Sales", "Pipeline"],
  newLeads: { value: "1,294", label: "New Leads" },
  qualified: { value: "842", label: "Qualified" },
  goalLabel: "Goal",
  cta: "View Pipeline",
  footerTitle: "Water production",
  activeDeals: { value: "218", label: "Active Deals" },
  pipelineValue: { value: "$426K", label: "Pipeline Value" },
  /* Axis labels, positioned in the chart's 419 x 460 frame */
  yTicks: [
    { label: "100K", x: 51, y: 210 },
    { label: "75K", x: 48, y: 265 },
    { label: "50K", x: 48, y: 315 },
    { label: "25K", x: 48, y: 366 },
    { label: "0K", x: 48, y: 415 },
  ],
  xTicks: [
    { label: "Jan", x: 67 },
    { label: "Feb", x: 127 },
    { label: "Mar", x: 192 },
    { label: "Apr", x: 256 },
    { label: "May", x: 322 },
    { label: "Jun", x: 385 },
  ],
}

/* ---------- Sales Activity ---------- */

export const salesActivity = {
  title: ["Sales", "Activity"],
  total: "169",
  /* Soft background columns fill these x-ranges */
  gaps: [
    [22, 68],
    [100, 150],
    [180, 228],
    [260, 305],
    [340, 385],
  ] as [number, number][],
  /* Dark bar clusters: bar heights (px of 62) starting at x */
  clusters: [
    { x: 0, h: [38, 26, 44, 20, 34, 48, 30, 40] },
    { x: 72, h: [22, 44, 30, 60, 36, 26, 52, 40, 32] },
    { x: 152, h: [26, 34, 20, 46, 38, 56, 30, 24] },
    { x: 232, h: [30, 20, 38, 52, 28, 44, 58, 34] },
    { x: 310, h: [24, 40, 30, 52, 20, 46, 56, 36, 28] },
    { x: 388, h: [28, 38, 22, 46, 32, 40, 50, 36, 26, 42] },
  ],
  hours: [
    { label: "09:00", x: 19 },
    { label: "11:00", x: 92 },
    { label: "13:00", x: 171 },
    { label: "15:00", x: 250 },
    { label: "17:00", x: 329 },
    { label: "19:00", x: 408 },
  ],
}

/* ---------- Deal Forecast ---------- */

export const dealForecast = {
  title: ["Deal", "Forecast"],
  /* x where "today" sits; left of it is shaded history */
  today: 133,
  baseline: "M20 51H133 M133 51H170 V48 H260 V51 H300 V47 H440",
  /* [x1, x2, y] forecast segments; `muted` ones use the secondary tone */
  segments: [
    { x1: 64, x2: 132, y: 25 },
    { x1: 217, x2: 257, y: 26 },
    { x1: 264, x2: 332, y: 36 },
    { x1: 149, x2: 217, y: 68 },
    { x1: 322, x2: 374, y: 58 },
    { x1: 374, x2: 427, y: 69 },
    { x1: 180, x2: 250, y: 52, muted: true },
  ],
}
