"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Work", href: "#gallery" },
    { name: "Videos", href: "#videos" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled ? "bg-charcoal-black/70 shadow-xl" : "bg-charcoal-black/30"}
        backdrop-blur-lg border-b border-white/10
      `}
      style={{
        boxShadow: scrolled
          ? "0 4px 32px 0 rgba(0,0,0,0.18), 0 1.5px 0 0 #fff2 inset"
          : "0 2px 16px 0 rgba(0,0,0,0.10)",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
    >
      {/* Animated Gradient Border */}
      <motion.div
        className="absolute left-0 right-0 h-1"
        style={{
          bottom: 0,
          opacity: scrolled ? 1 : 0,
          pointerEvents: "none",
        }}
        animate={{
          opacity: scrolled ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-full bg-gradient-to-r from-crimson-red via-burnt-orange to-electric-purple animate-gradient-x" />
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4">
          {/* Logo with subtle scale/glow on scroll */}
          <motion.div
            className="text-2xl font-bold text-paper-white font-anton tracking-wider drop-shadow-lg"
            animate={scrolled ? { scale: 1.08, textShadow: "0 0 16px #ff4d6d" } : { scale: 1, textShadow: "none" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.12 }}
          >
            KISHORE K
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-paper-white hover:text-crimson-red transition-colors duration-200 font-medium tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 2.2 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-paper-white hover:text-crimson-red transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-charcoal-black/95 backdrop-blur-lg border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block text-paper-white hover:text-crimson-red transition-colors duration-200 font-medium text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
