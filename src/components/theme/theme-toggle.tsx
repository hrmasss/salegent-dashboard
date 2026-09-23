"use client"

import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

import { MoonIcon, SunIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"

const subscribe = () => () => {}

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)
  const dark = mounted && resolvedTheme === "dark"

  return (
    <Button
      variant="tool"
      className={className}
      aria-pressed={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(dark ? "light" : "dark")}
    >
      {/* Icons swap in CSS so the right one shows before hydration */}
      <MoonIcon className="dark:hidden" />
      <SunIcon className="hidden dark:block" />
    </Button>
  )
}
