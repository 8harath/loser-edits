"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const colors = ["crimson-red", "burnt-orange", "electric-purple", "forest-green"]
  const [currentColor, setCurrentColor] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % colors.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* SEO-friendly hidden content */}
      <div className="sr-only">
        <h1>Kishore K - Visual Storyteller and Graphic Designer at Otavaayi Design</h1>
        <p>Professional graphic design services specializing in Tamil cinema posters, music album artwork, and visual storytelling. Independent designer creating bold poster designs and brand identity solutions.</p>
        <p>Keywords: Kishore K, Kishore Designer, Otavaayi Design, Tamil cinema posters, music poster design, graphic design portfolio, visual storytelling, poster art, brand identity design</p>
      </div>

      {/* Dynamic background gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--${colors[currentColor]}) 0%, transparent 50%)`,
        }}
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--${colors[currentColor]}) 0%, transparent 50%)`,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Texture overlay */}
      <div className="absolute inset-0 bg-paper-texture opacity-30" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main headline with typewriter effect */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.h2
            className="text-6xl md:text-8xl lg:text-9xl font-jersey25 font-black text-charcoal-black leading-none tracking-tighter"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.span
              className="inline-block"
              animate={{ color: `var(--${colors[currentColor]})` }}
              transition={{ duration: 0.5 }}
            >
              VISUAL
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              STORYTELLER
            </motion.span>
          </motion.h2>
          
          {/* Brand Identity */}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <h3 className="text-2xl md:text-4xl font-anton text-crimson-red tracking-wider">
              KISHORE K | OTAVAAYI DESIGN
            </h3>
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-dust-grey font-medium mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          Computer Science Student & Independent Graphic Designer crafting bold visual narratives that bridge the gap
          between technical precision and creative expression. Specializing in Tamil cinema posters, music album artwork, and compelling visual storytelling.
        </motion.p>

        {/* Skills/Specializations */}
        <motion.div
          className="mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {["Tamil Cinema Posters", "Music Album Artwork", "Fan Art Design", "Visual Storytelling", "Typography Design"].map((skill, index) => (
              <span key={index} className="bg-crimson-red/10 text-crimson-red px-3 py-1 rounded-full border border-crimson-red/20">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <motion.a
            href="#gallery"
            className="inline-block bg-gradient-to-r from-crimson-red via-burnt-orange to-electric-purple text-paper-white font-bold text-lg px-12 py-4 rounded-none relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Explore Kishore K's poster gallery and design portfolio"
          >
            <span className="relative z-10 tracking-wider font-anton">EXPLORE PORTFOLIO</span>
            <motion.div
              className="absolute inset-0 bg-charcoal-black"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
