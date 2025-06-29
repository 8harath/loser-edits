"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tools: string[]
  category: string
  link?: string
  github?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Identity System",
    description:
      "Complete brand identity development for a tech startup, including logo design, color systems, typography guidelines, and brand applications across digital and print media.",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["Illustrator", "Photoshop", "InDesign", "Figma"],
    category: "Branding",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Music Festival Poster Series",
    description:
      "A series of promotional posters for an electronic music festival, featuring bold typography, vibrant gradients, and experimental layouts that capture the energy of electronic music.",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["Photoshop", "Illustrator", "After Effects"],
    category: "Poster Design",
    link: "#",
    featured: true,
  },
  {
    id: 3,
    title: "E-commerce UI/UX Design",
    description:
      "Modern e-commerce platform design focusing on user experience, conversion optimization, and mobile-first approach. Includes wireframes, prototypes, and final designs.",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["Figma", "Photoshop", "Principle"],
    category: "UI/UX",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Album Cover Design",
    description:
      "Conceptual album cover design for an indie rock band, incorporating hand-drawn elements with digital composition to create a unique visual identity.",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["Photoshop", "Illustrator", "Procreate"],
    category: "Album Art",
    link: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Corporate Annual Report",
    description:
      "Design and layout of a comprehensive annual report featuring infographics, data visualization, and cohesive visual storytelling across 60+ pages.",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["InDesign", "Illustrator", "Photoshop"],
    category: "Editorial",
    link: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Mobile App Interface",
    description:
      "Clean and intuitive mobile app interface design for a fitness tracking application, focusing on usability and motivational design elements.",
    image: "/placeholder.svg?height=400&width=600",
    tools: ["Figma", "Sketch", "Principle"],
    category: "Mobile Design",
    link: "#",
    featured: false,
  },
]

const toolIcons: { [key: string]: string } = {
  Photoshop: "🎨",
  Illustrator: "✏️",
  InDesign: "📄",
  Figma: "🎯",
  "After Effects": "🎬",
  Sketch: "💎",
  Principle: "⚡",
  Procreate: "🖌️",
}

export default function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 px-4 bg-paper-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-anton font-black text-charcoal-black mb-6 tracking-tighter">
            SELECTED PROJECTS
          </h2>
          <p className="text-xl text-dust-grey max-w-3xl mx-auto">
            A curated selection of creative projects spanning branding, digital design, and visual communication across
            various industries and mediums.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-anton font-bold text-charcoal-black mb-12 tracking-wider"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            FEATURED WORK
          </motion.h3>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <motion.div
                    className="relative aspect-[3/2] overflow-hidden bg-dust-grey/20 group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="lg:w-1/2">
                  <div className="mb-4">
                    <span className="inline-block bg-crimson-red text-paper-white px-4 py-1 text-sm font-medium tracking-wide mb-4">
                      {project.category}
                    </span>
                  </div>

                  <h4 className="text-3xl md:text-4xl font-anton font-bold text-charcoal-black mb-6 tracking-wider">
                    {project.title}
                  </h4>

                  <p className="text-dust-grey leading-relaxed mb-8 text-lg">{project.description}</p>

                  {/* Tools */}
                  <div className="mb-8">
                    <h5 className="text-sm font-medium text-charcoal-black mb-3 tracking-wide">TOOLS USED</h5>
                    <div className="flex flex-wrap gap-3">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="flex items-center gap-2 bg-dust-grey/20 px-3 py-2 text-sm font-medium text-charcoal-black"
                        >
                          <span>{toolIcons[tool]}</span>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        className="inline-flex items-center gap-2 bg-burnt-orange text-paper-white px-6 py-3 font-medium tracking-wide hover:bg-electric-purple transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        className="inline-flex items-center gap-2 border-2 border-charcoal-black text-charcoal-black px-6 py-3 font-medium tracking-wide hover:bg-charcoal-black hover:text-paper-white transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <motion.h3
            className="text-3xl font-anton font-bold text-charcoal-black mb-12 tracking-wider"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            MORE PROJECTS
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  {/* Project Image */}
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        className="text-paper-white text-center"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                      >
                        <p className="font-medium">View Project</p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block bg-electric-purple text-paper-white px-3 py-1 text-xs font-medium tracking-wide">
                        {project.category}
                      </span>
                    </div>

                    <h4 className="text-xl font-anton font-bold text-charcoal-black mb-3 tracking-wider">
                      {project.title}
                    </h4>

                    <p className="text-dust-grey text-sm leading-relaxed mb-4">
                      {project.description.substring(0, 120)}...
                    </p>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(0, 3).map((tool) => (
                        <span key={tool} className="text-xs bg-dust-grey/20 px-2 py-1 text-charcoal-black">
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="text-xs text-dust-grey">+{project.tools.length - 3} more</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
