"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const navItems = [
    { name: "Work", href: "#gallery" },
    { name: "Videos", href: "#videos" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  // Handler for mobile tap
  const handleLogoClick = () => {
    if (isMobile) setIsOpen((prev) => !prev)
  }

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col items-end">
      {/* Logo Button */}
      <motion.div
        className="bg-charcoal-black/80 rounded-full shadow-lg flex items-center justify-center cursor-pointer border-2 border-white/10"
        style={{ width: 56, height: 56 }}
        whileHover={!isMobile ? { scale: 1.08, boxShadow: "0 0 24px #ff4d6d" } : {}}
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        onMouseLeave={() => !isMobile && setIsOpen(false)}
        onClick={handleLogoClick}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <span className="text-2xl font-bold text-paper-white font-anton tracking-wider select-none px-4">K</span>
      </motion.div>
      {/* Expandable Nav */}
      <AnimatePresence>
        {(isOpen || (isMobile && isOpen)) && (
          <motion.div
            className="mt-2 bg-charcoal-black/95 rounded-xl shadow-2xl border border-white/10 flex flex-col items-end overflow-hidden"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            style={{ minWidth: 160 }}
            onMouseEnter={() => !isMobile && setIsOpen(true)}
            onMouseLeave={() => !isMobile && setIsOpen(false)}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block px-6 py-3 text-paper-white hover:text-crimson-red text-base font-medium tracking-wide transition-colors duration-200 w-full text-right"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.05 * index }}
                onClick={() => isMobile && setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
