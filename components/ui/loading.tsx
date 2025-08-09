"use client"

import { motion } from "framer-motion"

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-paper-white">
      <div className="text-center">
        {/* Logo/Brand */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-jersey25 font-black text-charcoal-black mb-2">
            OTAVAAYI DESIGN
          </h1>
          <p className="text-dust-grey font-medium">Kishore K - Visual Storyteller</p>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          className="flex space-x-2 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-crimson-red rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                backgroundColor: [
                  "var(--crimson-red)",
                  "var(--burnt-orange)", 
                  "var(--electric-purple)",
                  "var(--crimson-red)"
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="mt-6 text-dust-grey text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Loading portfolio...
        </motion.p>
      </div>
    </div>
  )
}

export function PosterCardSkeleton() {
  return (
    <div className="relative bg-white shadow-lg overflow-hidden aspect-[210/297] animate-pulse">
      <div className="w-full h-full bg-dust-grey/20" />
      <div className="absolute bottom-4 left-4 right-4">
        <div className="h-4 bg-dust-grey/30 rounded mb-2" />
        <div className="h-3 bg-dust-grey/20 rounded w-2/3" />
      </div>
    </div>
  )
}

export function ModalSkeleton() {
  return (
    <div className="relative w-full max-w-6xl max-h-[95vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-pulse">
      <div className="bg-dust-grey/20 p-4 flex items-center justify-end">
        <div className="w-10 h-10 bg-dust-grey/30 rounded-full" />
      </div>
      <div className="flex flex-1 min-h-0 flex-col md:flex-row">
        <div className="flex-1 bg-dust-grey/10 flex items-center justify-center p-8">
          <div className="w-full max-h-96 bg-dust-grey/20 rounded-lg aspect-[210/297]" />
        </div>
        <div className="flex-1 bg-white p-8 space-y-4">
          <div className="h-8 bg-dust-grey/30 rounded w-3/4" />
          <div className="h-4 bg-dust-grey/20 rounded w-1/2" />
          <div className="space-y-2">
            <div className="h-4 bg-dust-grey/20 rounded" />
            <div className="h-4 bg-dust-grey/20 rounded" />
            <div className="h-4 bg-dust-grey/20 rounded w-5/6" />
          </div>
          <div className="h-12 bg-dust-grey/30 rounded w-1/3" />
        </div>
      </div>
    </div>
  )
}
