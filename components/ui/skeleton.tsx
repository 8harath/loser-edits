import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

function FullPageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-paper-white">
      <motion.div
        className="relative flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Animated logo or icon */}
        <motion.div
          className="w-20 h-20 rounded-full bg-gradient-to-tr from-crimson-red via-burnt-orange to-electric-purple flex items-center justify-center shadow-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
            boxShadow: [
              "0 0 0px #ff4d6d",
              "0 8px 32px #a259ff55",
              "0 0 0px #ff4d6d"
            ]
          }}
          transition={{
            repeat: Infinity,
            duration: 2.2,
            ease: "easeInOut"
          }}
        >
          <span className="text-4xl font-anton font-black text-paper-white drop-shadow-lg tracking-wider">K</span>
        </motion.div>
        {/* Creative text below */}
        <motion.div
          className="mt-6 text-lg font-anton tracking-widest text-charcoal-black color-shift"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Loading Portfolio…
        </motion.div>
      </motion.div>
    </div>
  )
}

export { Skeleton, FullPageLoader }
