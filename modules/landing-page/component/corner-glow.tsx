import Image from "next/image"

import { SparklesCore } from "@/components/ui/sparkles"
import { cn } from "@/lib/utils"
const glowImage = "/landing-page/purple-sparkle-v2.png"

export default function CornerGlow({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -top-8.75 aspect-[.891253] w-1/4 overflow-visible",
        side === "left" ? "-left-8.75" : "-right-8.75"
      )}
    >
      <Image
        src={glowImage}
        alt={`sparkles-${side}`}
        fill
        priority
        sizes="46vw"
        className={cn(
          "z-2 mask-[linear-gradient(to_bottom,black_-60%,transparent)] object-cover object-top",
          side === "right" && "-scale-x-100"
        )}
      />
      <SparklesCore
        id={`hero-sparkles-${side}`}
        className={cn(
          "absolute z-1 size-full mix-blend-screen [clip-path:polygon(0_29%,27%_0,97%_51%,69%_87%)]",
          side === "left" ? "-left-8.75" : "-right-8.75 rotate-90"
        )}
        background="#000000"
        particleColor="#59168b"
        particleDensity={50}
        minSize={0.4}
        maxSize={1.4}
        speed={1.5}
      />
    </div>
  )
}
