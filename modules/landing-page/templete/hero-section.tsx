"use client"

import { Play, Star } from "lucide-react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { SparklesCore } from "@/components/ui/sparkles"
import { Text } from "@/components/ui/text"

import CornerGlow from "../component/corner-glow"

const TextMotion = motion(Text)
const ButtonMotion = motion(HoverBorderGradient)

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 2.6,
      staggerChildren: 0.15,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.6,
      duration: 0.8,
    },
  },
}

export default function HeroSection() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 h-83.75 overflow-visible select-none">
        <CornerGlow side="left" />
        <CornerGlow side="right" />
      </div>

      <div className="relative z-10 container mx-auto flex flex-1 flex-col items-center px-4 pt-32">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col items-center"
        >
          <ButtonMotion
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0 },
            }}
            containerClassName="rounded-full"
            as="div"
            className="flex items-center gap-2 bg-[#0f0f10] px-3 py-1.5"
          >
            <span className="flex -space-x-2">
              {["bg-orange-400", "bg-rose-400", "bg-amber-300"].map((bg) => (
                <span
                  key={bg}
                  className={`size-6 rounded-full ${bg} ring-2 ring-black`}
                />
              ))}
            </span>
            <Text
              variant="p"
              size="lg"
              weight="semibold"
              className="text-white"
            >
              Proudly Serving 1,200+ Clients
            </Text>
          </ButtonMotion>

          <TextMotion
            variants={heroItem}
            variant="h1"
            size={{
              base: "3xl",
              md: "5xl",
              lg: "6xl",
            }}
            className="mt-8 max-w-4xl text-center"
          >
            Launch Smarter with Strategic
            <br />
            Design That Performs
          </TextMotion>

          <TextMotion
            variants={heroItem}
            variant="p"
            size="lg"
            weight="normal"
            className="mt-4 max-w-xl text-center text-white/55"
          >
            Design should feel good and do good. We blend creativity with intent
            to build brands that are both beautiful and effective.
          </TextMotion>

          <motion.div variants={heroItem} className="mt-8">
            <Button className="h-11 rounded-full px-6 text-white">
              Start Your Free Trial
            </Button>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="mt-5 flex items-center gap-2 text-sm text-white/70"
          >
            <Star className="size-3.5 text-primary" />
            <span>Trusted by 1500+ companies worldwide</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={heroItem}
          initial="hidden"
          animate="visible"
          className="relative mt-16 w-full max-w-5xl"
        >
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
            <button
              type="button"
              aria-label="Play video"
              className="absolute top-1/2 left-1/2 flex size-14 -translate-1/2 items-center justify-center rounded-full bg-primary shadow-lg"
            >
              <Play className="ml-0.5 size-6 text-white" />
            </button>
          </div>
          <SparklesCore
            id="hero-sparkles"
            className="absolute inset-0 size-full mix-blend-screen"
            background="#000000"
            particleColor="#59168b"
            particleDensity={50}
            minSize={0.4}
            maxSize={1.4}
            speed={1.5}
          />
        </motion.div>
      </div>
    </section>
  )
}
