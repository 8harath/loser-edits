"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroSection from "@/components/hero-section"
import PosterGallery from "@/components/poster-gallery"
import VideoShowcase from "@/components/video-showcase"
// import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-paper-white overflow-x-hidden">
      {/* Animated background texture */}
      <motion.div className="fixed inset-0 opacity-10 pointer-events-none" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-noise-texture" />
      </motion.div>

      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <PosterGallery />
        <VideoShowcase />
        {/* <ProjectsSection /> */}
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  )
}
