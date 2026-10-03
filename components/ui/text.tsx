import type { ComponentPropsWithoutRef, ElementType } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "font-heading text-4xl font-semibold tracking-tight lg:text-5xl",
      h2: "font-heading text-3xl font-semibold tracking-tight",
      h3: "font-heading text-2xl font-semibold tracking-tight",
      h4: "font-heading text-xl font-semibold tracking-tight",
      h5: "font-heading text-lg font-medium",
      h6: "font-heading text-base font-medium",

      p: "text-base leading-7",

      lead: "text-xl leading-8 text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm leading-none font-medium",
      muted: "text-sm text-muted-foreground",
      label: "text-sm font-medium",

      blockquote: "border-l-2 pl-6 italic",

      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",

      kbd: "rounded border bg-muted px-1.5 py-0.5 font-mono text-xs",
    },

    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
    },

    weight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },

    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },

    leading: {
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },

    tracking: {
      tighter: "tracking-tighter",
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
      wider: "tracking-wider",
      widest: "tracking-widest",
    },
  },

  defaultVariants: {
    variant: "p",
  },
})

const responsiveSizeClass = {
  base: {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
  },

  sm: {
    xs: "sm:text-xs",
    sm: "sm:text-sm",
    base: "sm:text-base",
    lg: "sm:text-lg",
    xl: "sm:text-xl",
    "2xl": "sm:text-2xl",
    "3xl": "sm:text-3xl",
    "4xl": "sm:text-4xl",
    "5xl": "sm:text-5xl",
    "6xl": "sm:text-6xl",
    "7xl": "sm:text-7xl",
    "8xl": "sm:text-8xl",
  },

  md: {
    xs: "md:text-xs",
    sm: "md:text-sm",
    base: "md:text-base",
    lg: "md:text-lg",
    xl: "md:text-xl",
    "2xl": "md:text-2xl",
    "3xl": "md:text-3xl",
    "4xl": "md:text-4xl",
    "5xl": "md:text-5xl",
    "6xl": "md:text-6xl",
    "7xl": "md:text-7xl",
    "8xl": "md:text-8xl",
  },

  lg: {
    xs: "lg:text-xs",
    sm: "lg:text-sm",
    base: "lg:text-base",
    lg: "lg:text-lg",
    xl: "lg:text-xl",
    "2xl": "lg:text-2xl",
    "3xl": "lg:text-3xl",
    "4xl": "lg:text-4xl",
    "5xl": "lg:text-5xl",
    "6xl": "lg:text-6xl",
    "7xl": "lg:text-7xl",
    "8xl": "lg:text-8xl",
  },

  xl: {
    xs: "xl:text-xs",
    sm: "xl:text-sm",
    base: "xl:text-base",
    lg: "xl:text-lg",
    xl: "xl:text-xl",
    "2xl": "xl:text-2xl",
    "3xl": "xl:text-3xl",
    "4xl": "xl:text-4xl",
    "5xl": "xl:text-5xl",
    "6xl": "xl:text-6xl",
    "7xl": "xl:text-7xl",
    "8xl": "xl:text-8xl",
  },

  "2xl": {
    xs: "2xl:text-xs",
    sm: "2xl:text-sm",
    base: "2xl:text-base",
    lg: "2xl:text-lg",
    xl: "2xl:text-xl",
    "2xl": "2xl:text-2xl",
    "3xl": "2xl:text-3xl",
    "4xl": "2xl:text-4xl",
    "5xl": "2xl:text-5xl",
    "6xl": "2xl:text-6xl",
    "7xl": "2xl:text-7xl",
    "8xl": "2xl:text-8xl",
  },
} as const

type TextSize = keyof typeof responsiveSizeClass.base
type TextBreakpoint = keyof typeof responsiveSizeClass

type ResponsiveSize = TextSize | Partial<Record<TextBreakpoint, TextSize>>

const textElements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  lead: "p",
  large: "p",
  small: "small",
  muted: "p",
  label: "label",
  blockquote: "blockquote",
  code: "code",
  kbd: "kbd",
} as const

type TextVariant = keyof typeof textElements

function responsiveSizeClasses(size: ResponsiveSize | null | undefined) {
  if (!size || typeof size === "string") {
    return undefined
  }

  return (Object.entries(size) as [TextBreakpoint, TextSize | undefined][]).map(
    ([breakpoint, value]) => {
      if (!value) return undefined

      return responsiveSizeClass[breakpoint][value]
    }
  )
}

type TextProps<T extends ElementType = "p"> = {
  as?: T
  variant?: TextVariant
  size?: ResponsiveSize | null
} & Omit<ComponentPropsWithoutRef<T>, "color" | "size"> &
  Omit<VariantProps<typeof textVariants>, "variant" | "size">

function Text<T extends ElementType = "p">({
  as,
  variant = "p",
  size,
  weight,
  align,
  leading,
  tracking,
  className,
  ...props
}: TextProps<T>) {
  const Component = as ?? textElements[variant]

  return (
    <Component
      data-slot="text"
      className={cn(
        textVariants({
          variant,
          size: typeof size === "string" ? size : undefined,
          weight,
          align,
          leading,
          tracking,
        }),
        responsiveSizeClasses(size),
        className
      )}
      {...props}
    />
  )
}

export { Text, textVariants }
