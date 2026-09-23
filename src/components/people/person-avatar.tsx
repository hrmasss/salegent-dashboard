import type { CSSProperties } from "react"

import { Avatar } from "@/components/ui/avatar"
import { people, type Person, type PersonId } from "@/data/dashboard"
import { cn } from "@/lib/utils"

/* Flat illustrated portrait, drawn inline so nothing loads from the network. */
export function Portrait({ id }: { id: PersonId }) {
  const p: Person = people[id]
  return (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <rect width="40" height="40" fill={p.bg} />
      {p.long && <path d="M9 34 C8 18 12 8 20 8 S32 18 31 34 Z" fill={p.hair} />}
      <path d="M5 42 C6 32 12 28 20 28 S34 32 35 42 Z" fill={p.shirt} />
      <rect x="17" y="22" width="6" height="7" rx="2" fill={p.skin} />
      <ellipse cx="20" cy="18" rx="7.2" ry="8.4" fill={p.skin} />
      {p.curly ? (
        <path
          d="M11 18 C9 8 16 5 20 6 C26 5 32 9 29 18 C28 13 25 11 20 11 C15 11 12 13 11 18 Z"
          fill={p.hair}
          stroke={p.hair}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      ) : (
        <path d="M12.6 16 C12 9 16 7 20.5 7 S28 9.5 27.4 16 C26 12.5 23 11.5 20 11.5 S14 12.5 12.6 16 Z" fill={p.hair} />
      )}
      {p.beard && (
        <path
          d="M13.4 20 C14 26 17 27.5 20 27.5 S26 26 26.6 20 C25 23.5 22.5 24 20 24 S15 23.5 13.4 20 Z"
          fill={p.hair}
          opacity=".85"
        />
      )}
    </svg>
  )
}

export function PersonAvatar({
  id,
  className,
  style,
  ringed,
}: {
  id: PersonId
  className?: string
  style?: CSSProperties
  ringed?: boolean
}) {
  // A 0px white ring offset lightens the ring's anti-aliased edge in dark mode.
  return (
    <Avatar
      className={cn(ringed && "ring-2 ring-avatar-ring ring-offset-0 ring-offset-white", className)}
      style={style}
    >
      <Portrait id={id} />
    </Avatar>
  )
}
