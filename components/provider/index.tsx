"use client"

import { ThemeProvider } from "@/components/provider/theme-provider"

function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}

export { Providers }
