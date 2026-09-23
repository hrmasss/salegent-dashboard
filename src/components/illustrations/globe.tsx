/* Wireframe globe for the High-Intent Leads tile. */
export function Globe({ className }: { className?: string }) {
  return (
    <svg className={className} width="110" height="96" viewBox="0 0 110 96" fill="none" stroke="rgba(255,255,255,.9)" strokeWidth="1.1" aria-hidden="true">
      <ellipse cx="55" cy="50" rx="52" ry="44" />
      <ellipse cx="55" cy="50" rx="36" ry="44" />
      <ellipse cx="55" cy="50" rx="19" ry="44" />
      <path d="M55 6v88" />
      <ellipse cx="55" cy="50" rx="52" ry="12" />
      <ellipse cx="55" cy="28" rx="41" ry="6" opacity=".6" />
      <circle cx="55" cy="50" r="4" fill="#fff" stroke="none" />
    </svg>
  )
}
