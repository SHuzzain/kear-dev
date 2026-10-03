import { cn } from "@/lib/utils"

function LineScreen({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 mask-radial-to-60% mask-radial-at-top-right opacity-35",
        className
      )}
      style={{
        backgroundImage: `
          linear-gradient(to right, #333 1px, transparent 1px),
          linear-gradient(to bottom, #333 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
  )
}

function Gradient({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className
      )}
    ></div>
  )
}

export { Gradient, LineScreen }
