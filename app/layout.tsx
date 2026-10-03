import "./globals.css"

import { DM_Sans, Geist_Mono, Manrope, Outfit } from "next/font/google"

import Header from "@/components/layout/header"
import SplashScreen from "@/components/layout/splash-screen"
import { Providers } from "@/components/provider"
import { cn } from "@/lib/utils"

const outfitHeading = Outfit({ subsets: ["latin"], variable: "--font-heading" })

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        dmSans.variable,
        outfitHeading.variable,
        manrope.variable
      )}
    >
      <body>
        <Header />
        <SplashScreen />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
