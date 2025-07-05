"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Target, Heart, Coffee } from "lucide-react"

const skills = [
  { name: "Adobe Photoshop", level: 95, icon: "🎨" },
  { name: "Adobe Illustrator", level: 90, icon: "✏️" },
  { name: "Adobe InDesign", level: 85, icon: "📄" },
  { name: "After Effects", level: 75, icon: "🎬" },
  { name: "Typography", level: 92, icon: "📝" },
]

const timeline = [
  {
    year: "2025",
    title: "Visual Creator & Storyteller",
    description:
      "Refined a self-driven design identity through emotionally grounded poster work and cinematic-inspired edits; actively building a body of work that speaks before words do.",
  },
  {
    year: "2024",
    title: "Freelance Practice & College Internship",
    description:
      "Balanced design exploration with real-world data internship—honing discipline, detail orientation, and visual problem-solving through college projects and portfolio development.",
  },
  {
    year: "2023",
    title: "Cinema-Driven Design Journey",
    description:
      "Immersed in fan-made poster design, using movies as a canvas for creative reinterpretation. Built a consistent practice around Photoshop, composition, and visual tone.",
  },
  {
    year: "2022",
    title: "The Spark",
    description:
      "Fell in love with frames, fonts, and feeling. Began experimenting with design tools out of sheer interest—learning through observation, trial, and storytelling instincts.",
  },
]

const values = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Creative Excellence",
    description: "Pushing boundaries in visual design while maintaining aesthetic integrity.",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Technical Precision",
    description: "Combining artistic vision with technical expertise for optimal results.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Bold Innovation",
    description: "Embracing experimental approaches to create unique visual experiences.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Purpose-Driven",
    description: "Every design serves a purpose and tells a meaningful story.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-charcoal-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-anton font-black text-paper-white mb-6 tracking-tighter">
            ABOUT KISHORE
          </h2>
          <p className="text-xl text-dust-grey max-w-3xl mx-auto">
            Where technical precision meets creative rebellion—crafting visual narratives that challenge conventions and
            inspire action.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-anton font-bold text-paper-white mb-6 tracking-wider">THE STORY</h3>
            <div className="space-y-4 text-dust-grey leading-relaxed">
              <p>
                Hi, I'm Kishore — a curious mind drawn to visuals, stories, and the quiet power of design. What began as a simple love for movies soon turned into an obsession with frames, color, light, and emotion. I started editing scenes, designing posters, and slowly began to understand how a single image can hold an entire narrative.
              </p>
              <p>
                Graphic design, for me, isn't just about making things look good — it's about making people feel something. Whether it's a poster, a visual concept, or a rough idea taking shape, I try to approach each project with patience, honesty, and a desire to keep learning. I don't claim to know it all — in fact, I prefer being in that space where there's always more to explore.
              </p>
              <p>
                This website is a small archive of that exploration. A place to gather the work I've done, the pieces I'm proud of, and the experiments that didn't quite work — because they matter too. If something here speaks to you, then perhaps the design did its job.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-paper-white">
                <Coffee className="w-5 h-5 text-burnt-orange" />
                <span className="text-sm">Coffee Enthusiast</span>
              </div>
              <div className="flex items-center gap-3 text-paper-white">
                <Heart className="w-5 h-5 text-crimson-red" />
                <span className="text-sm">Design Perfectionist</span>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-anton font-bold text-paper-white mb-6 tracking-wider">EXPERTISE</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-paper-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-dust-grey text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dust-grey/30 h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-crimson-red via-burnt-orange to-electric-purple"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-anton font-bold text-paper-white mb-12 text-center tracking-wider">JOURNEY</h3>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex flex-col md:flex-row gap-8 mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/4">
                  <div className="text-4xl font-anton font-bold text-crimson-red">{item.year}</div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-bold text-paper-white mb-2">{item.title}</h4>
                  <p className="text-dust-grey leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-anton font-bold text-paper-white mb-12 text-center tracking-wider">
            CORE VALUES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="text-crimson-red mb-4 flex justify-center group-hover:text-electric-purple transition-colors duration-200">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-paper-white mb-3 tracking-wide">{value.title}</h4>
                <p className="text-dust-grey text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
