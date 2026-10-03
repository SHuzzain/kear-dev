import * as motion from "motion/react-client"

import Logo from "./logo"

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex size-full items-center justify-center bg-background"
      initial={{ translateY: 0 }}
      animate={{ translateY: "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 2.5 }}
    >
      <Logo
        motionProps={{
          initial: {
            pathLength: 0,
            fillOpacity: 0,
          },
          animate: {
            pathLength: 1,
            fillOpacity: 1,
          },
          transition: {
            pathLength: {
              duration: 2,
              ease: "easeInOut",
            },
            fillOpacity: {
              delay: 2,
              duration: 0.4,
              ease: "easeOut",
            },
          },
        }}
      />
    </motion.div>
  )
}
