import { site } from "@/config/site"
import { cn } from "@/lib/utils"

export function LogoMark({ className, size = 42 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 42 42" aria-hidden="true">
      <defs>
        <linearGradient id="logo-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b83ff" />
          <stop offset=".55" stopColor="#6366f1" />
          <stop offset="1" stopColor="#4338ca" />
        </linearGradient>
        <linearGradient id="logo-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".35" />
          <stop offset=".5" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="42" height="42" rx="12" fill="url(#logo-bg)" />
      <rect width="42" height="42" rx="12" fill="url(#logo-shine)" />
      <path
        d="M28.5 13.5H18a4.25 4.25 0 000 8.5h6a4.25 4.25 0 010 8.5H13.5"
        fill="none"
        stroke="#fff"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30.5" cy="30.5" r="2.3" fill="#c7f9dd" />
    </svg>
  )
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <div className={cn("text-[30px] leading-[34px] font-semibold tracking-[-0.01em]", className)}>
      {site.name}
    </div>
  )
}
