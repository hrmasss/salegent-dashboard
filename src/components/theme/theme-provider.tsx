"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ReactNode } from "react"

/*
 * The choice is stored in localStorage under "theme" and written to
 * <html data-theme>; with no stored choice the system preference applies.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="data-theme" storageKey="theme" defaultTheme="system" enableSystem enableColorScheme={false}>
      {children}
    </NextThemesProvider>
  )
}
