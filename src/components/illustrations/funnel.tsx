/* Stacked-ring funnel for the Deals at Risk tile. [cy, rx, ry] per ring. */
const RINGS: [number, number, number][] = [
  [12, 40, 8],
  [22, 34, 7],
  [31, 28, 6],
  [40, 23, 5],
  [48, 18, 4.2],
  [56, 14, 3.6],
  [63, 10.5, 3],
  [70, 7.5, 2.5],
  [76, 5, 2],
  [81, 3, 1.4],
]

export function Funnel({ className }: { className?: string }) {
  return (
    <svg className={className} width="90" height="102" viewBox="0 0 90 102" fill="none" stroke="rgba(255,255,255,.92)" strokeWidth="1.1" aria-hidden="true">
      {RINGS.map(([cy, rx, ry]) => (
        <ellipse key={cy} cx="45" cy={cy} rx={rx} ry={ry} />
      ))}
      <path d="M45 6v88" />
      <circle cx="45" cy="95" r="3.4" fill="#fff" stroke="none" />
    </svg>
  )
}
