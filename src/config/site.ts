export const site = {
  name: "Salegent",
  title: "AI Sales Agent Dashboard",
  tagline: "Smarter conversations. More pipelines. Higher revenue.",
  description: "Salegent: a responsive AI sales agent dashboard built with Next.js and shadcn/ui.",
} as const

/* Top navigation. `x` is the label's left offset inside the 666px pill. */
export const navigation = [
  { label: "Overview", href: "#", x: 6, active: true },
  { label: "AI Agent", href: "#", x: 136 },
  { label: "Leads", href: "#", x: 237 },
  { label: "Conversations", href: "#", x: 322 },
  { label: "Analysis", href: "#", x: 460 },
  { label: "Automations", href: "#", x: 559 },
] as const
