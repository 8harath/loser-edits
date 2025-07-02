"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

interface Poster {
  id: number
  title: string
  description: string
  image: string
  dominantColor: string
  year: string
  category: string
}

const posters: Poster[] = [
  {
    id: 1,
    title: "The Hateful 8",
    description:
      `Poster name : The hateful 8\n\nThis poster visually encapsulates the essence of the film, using symbolism to hint at the narrative without revealing it outright. At the core of the composition are seven guns—each representing one of the seven main characters who ultimately turn on one another. The bullets falling from the top right corner signify innocent bloodshed, symbolizing casualties like the van and wagon drivers—those caught in the crossfire. Among the seven guns, two are positioned in direct contrast: one pointing down, the other in reverse. These represent the duality between two central figures—Major Wallace and the man who arrives to rescue the captured woman. Though the story avoids a clear-cut hero-villain dynamic, it thrives on character contrast. The red tones signify blood and violence, while the snowy backdrop alludes to the film's cold, unforgiving setting. The overall aesthetic leans into a retro-western style, reflecting the film's 1890s setting. This design aims to tell the story in a single frame, embracing the spirit of classic western posters with modern narrative depth.`,
    image: "/Posters/Poster (1).jpg",
    dominantColor: "crimson-red",
    year: "2024",
    category: "Typography",
  },
  {
    id: 2,
    title: "HUNTER",
    description:
      "Dynamic composition featuring vibrant orange gradients and textural elements inspired by urban street art.",
    image: "/Posters/Poster (2).jpg",
    dominantColor: "burnt-orange",
    year: "2024",
    category: "Poster Design",
  },
  {
    id: 3,
    title: "NEON DREAMS",
    description: "Electric purple-dominated design exploring the intersection of digital and analog aesthetics.",
    image: "/Posters/Poster (3).jpg",
    dominantColor: "electric-purple",
    year: "2024",
    category: "Digital Art",
  },
  {
    id: 4,
    title: "FOREST ECHO",
    description: "Nature-inspired composition using deep greens and organic textures to create visual harmony.",
    image: "/Posters/Poster (4).jpg",
    dominantColor: "forest-green",
    year: "2023",
    category: "Environmental",
  },
  {
    id: 5,
    title: "GOLDEN HOUR",
    description: "Warm yellow tones capturing the essence of transition and transformation through layered typography.",
    image: "/Posters/Poster (5).jpg",
    dominantColor: "golden-yellow",
    year: "2023",
    category: "Typography",
  },
  {
    id: 6,
    title: "REBEL SPIRIT",
    description: "High-contrast design embodying rebellion and creative freedom through distressed visual elements.",
    image: "/Posters/Poster (6).jpg",
    dominantColor: "crimson-red",
    year: "2024",
    category: "Poster Design",
  },
  {
    id: 7,
    title: "URBAN PULSE",
    description: "City-inspired composition featuring bold geometric shapes and vibrant color combinations.",
    image: "/Posters/Poster (7).jpg",
    dominantColor: "burnt-orange",
    year: "2023",
    category: "Urban Art",
  },
  {
    id: 8,
    title: "MYSTIC VOID",
    description: "Abstract exploration of space and mystery using purple gradients and ethereal textures.",
    image: "/Posters/Poster (8).jpg",
    dominantColor: "electric-purple",
    year: "2024",
    category: "Abstract",
  },
  {
    id: 9,
    title: "EARTH TONE",
    description: "Grounded design celebrating natural elements through earthy color palettes and organic forms.",
    image: "/Posters/Poster (9).jpg",
    dominantColor: "forest-green",
    year: "2023",
    category: "Environmental",
  },
  {
    id: 10,
    title: "SOLAR FLARE",
    description: "Energetic composition capturing the power of the sun through dynamic typography and warm colors.",
    image: "/Posters/Poster (10).jpg",
    dominantColor: "golden-yellow",
    year: "2024",
    category: "Typography",
  },
  {
    id: 11,
    title: "CRIMSON TIDE",
    description:
      "Powerful red-dominated design exploring themes of passion and intensity through bold visual language.",
    image: "/Posters/Poster (11).jpg",
    dominantColor: "crimson-red",
    year: "2023",
    category: "Poster Design",
  },
  {
    id: 12,
    title: "COPPER DREAMS",
    description: "Metallic-inspired design featuring copper tones and industrial textures for a modern aesthetic.",
    image: "/Posters/Poster (12).jpg",
    dominantColor: "burnt-orange",
    year: "2024",
    category: "Industrial",
  },
  {
    id: 13,
    title: "VIOLET STORM",
    description: "Dynamic purple composition representing creative energy and artistic transformation.",
    image: "/Posters/Poster (13).jpg",
    dominantColor: "electric-purple",
    year: "2024",
    category: "Abstract",
  },
]

export default function PosterGallery() {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = [
    "All",
    "Typography",
    "Poster Design",
    "Digital Art",
    "Environmental",
    "Urban Art",
    "Abstract",
    "Industrial",
  ]

  const filteredPosters = filter === "All" ? posters : posters.filter((poster) => poster.category === filter)

  return (
    <section id="gallery" className="py-20 px-4 bg-paper-white">
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
            POSTER GALLERY
          </h2>
          <p className="text-xl text-dust-grey max-w-3xl mx-auto">
            A collection of bold visual narratives exploring typography, color, and texture through the lens of
            contemporary poster design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 font-medium tracking-wide transition-all duration-200 ${
                filter === category
                  ? "bg-crimson-red text-paper-white"
                  : "bg-transparent text-charcoal-black hover:bg-dust-grey/20"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Poster Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" layout>
          <AnimatePresence>
            {filteredPosters.map((poster, index) => (
              <motion.div
                key={poster.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
                whileHover={{ y: -10 }}
                onClick={() => setSelectedPoster(poster)}
              >
                {/* Poster Card */}
                <div className="relative bg-white shadow-lg overflow-hidden aspect-[210/297] group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={poster.image || "/placeholder.svg"}
                    alt={poster.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-${poster.dominantColor}/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}
                  >
                    <div className="text-center text-paper-white p-4">
                      <h3 className="text-2xl font-anton font-bold mb-2 tracking-wider">{poster.title}</h3>
                      <p className="text-sm opacity-90">{poster.category}</p>
                      <p className="text-xs opacity-75 mt-1">{poster.year}</p>
                    </div>
                  </div>

                  {/* Texture overlay */}
                  <div className="absolute inset-0 bg-noise-texture opacity-20 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPoster && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPoster(null)}
          >
            {/* Backdrop */}
            <div className={`absolute inset-0 bg-${selectedPoster.dominantColor}/20 backdrop-blur-md`} />

            {/* Modal Content */}
            <motion.div
              className="relative bg-paper-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-1/2 aspect-[210/297] relative">
                  <Image
                    src={selectedPoster.image || "/placeholder.svg"}
                    alt={selectedPoster.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-4xl font-anton font-bold text-charcoal-black mb-4 tracking-wider">
                    {selectedPoster.title}
                  </h3>
                  <p className="text-dust-grey mb-6 leading-relaxed">{selectedPoster.description}</p>
                  <div className="flex items-center gap-4 text-sm text-dust-grey">
                    <span className="bg-dust-grey/20 px-3 py-1 rounded">{selectedPoster.category}</span>
                    <span>{selectedPoster.year}</span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-charcoal-black hover:text-crimson-red transition-colors"
                onClick={() => setSelectedPoster(null)}
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
