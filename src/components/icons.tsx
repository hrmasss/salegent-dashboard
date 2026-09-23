import type { SVGProps } from "react"

/*
 * The dashboard's own icon set: small inline SVGs on a 24px grid, stroked
 * with currentColor so they follow the theme.
 */
type IconProps = SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }

const GEAR =
  "M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"

function base({ size = 16, strokeWidth = 2, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    ...props,
  }
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.6-3.6" />
    </svg>
  )
}

export function BellIcon(props: IconProps) {
  return (
    <svg {...base(props)} strokeLinejoin="round">
      <path d="M6 16V11a6 6 0 1112 0v5l1.5 2h-15z" />
      <path d="M10 21h4" />
    </svg>
  )
}

export function GearIcon(props: IconProps) {
  return (
    <svg {...base(props)} strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d={GEAR} />
    </svg>
  )
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base(props)} strokeLinejoin="round">
      <path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z" />
    </svg>
  )
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base(props)} strokeLinecap="butt" strokeLinejoin="round">
      <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
    </svg>
  )
}

export function ShareIcon(props: IconProps) {
  return (
    <svg {...base(props)} strokeLinejoin="round">
      <path d="M12 15V3M7 8l5-5 5 5M4 14v5a2 2 0 002 2h12a2 2 0 002-2v-5" />
    </svg>
  )
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg {...base(props)} strokeLinejoin="round">
      <path d="M12 20V4M5 11l7-7 7 7" />
    </svg>
  )
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <svg {...base(props)} strokeLinejoin="round">
      <path d="M12 4v16M5 13l7 7 7-7" />
    </svg>
  )
}

/* The diagonal "open" arrow used on every card */
export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base({ size: 18, strokeWidth: 1.8, ...props })}>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  )
}
