import type { MotionProps } from "motion/react"
import * as motion from "motion/react-client"

import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  motionProps?: MotionProps
}

export default function Logo({ className, motionProps }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 119 117"
      fill="none"
      className={cn("size-32 lg:size-62", className)}
      aria-label="Kear Labs logo"
      role="img"
    >
      <motion.path
        d="M 0 0 L 0 115 L 70 11 L 91 11 L 92 13 L 60 59 L 92 101 L 69 102 L 52 73 L 46 88 L 63 116 L 118 116 L 79 60 L 117 0 L 58 0 L 15 62 L 14 12 L 29 11 L 36 0 Z"
        className={"fill-foreground stroke-foreground"}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...motionProps}
      />
    </svg>
  )
}
