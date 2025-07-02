"use client"

import { useState, useEffect } from "react"
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
    title: "Kaasu Illa Maame",
    description: "Low-Quality Poster: Kaasu Illa Maame",
    image: "/Posters/Low-Quality/Kaasu Illa Maame.jpg",
    dominantColor: "gray",
    year: "",
    category: "Low-Quality",
  },
  {
    id: 2,
    title: "Kuruma",
    description: "Low-Quality Poster: Kuruma",
    image: "/Posters/Low-Quality/Kuruma.jpg",
    dominantColor: "gray",
    year: "",
    category: "Low-Quality",
  },
  {
    id: 3,
    title: "She Was",
    description: "Low-Quality Poster: She Was",
    image: "/Posters/Low-Quality/She Was.jpg",
    dominantColor: "gray",
    year: "",
    category: "Low-Quality",
  },
  {
    id: 4,
    title: "Paadai",
    description: "Low-Quality Poster: Paadai",
    image: "/Posters/Low-Quality/Paadai.jpg",
    dominantColor: "gray",
    year: "",
    category: "Low-Quality",
  },
  {
    id: 5,
    title: "The Hatefull 8",
    description: "Low-Quality Poster: The Hatefull 8",
    image: "/Posters/Low-Quality/The Hatefull 8.jpg",
    dominantColor: "gray",
    year: "",
    category: "Low-Quality",
  },
  {
    id: 6,
    title: "Jocker",
    description: "Low-Quality Poster: Jocker",
    image: "/Posters/Low-Quality/Jocker.jpg",
    dominantColor: "gray",
    year: "",
    category: "Low-Quality",
  },
  {
    id: 7,
    title: "Knife In the Water",
    description: "Low-Quality Poster: Knife In the Water",
    image: "/Posters/Low-Quality/Knife In the Water.jpg",
    dominantColor: "gray",
    year: "",
    category: "Low-Quality",
  },
  {
    id: 8,
    title: "Ford",
    description: "Low-Quality Poster: Ford",
    image: "/Posters/Low-Quality/Ford.jpg",
    dominantColor: "gray",
    year: "",
    category: "Low-Quality",
  },
  {
    id: 9,
    title: "Maaveeran",
    description: "Low-Quality Poster: Maaveeran",
    image: "/Posters/Low-Quality/Maaveeran.jpg",
    dominantColor: "gray",
    year: "",
    category: "Low-Quality",
  },
  {
    id: 10,
    title: "Retro",
    description: "Low-Quality Poster: Retro",
    image: "/Posters/Low-Quality/Retro.jpg",
    dominantColor: "gray",
    year: "",
    category: "Low-Quality",
  },
  {
    id: 11,
    title: "GTA",
    description: "Low-Quality Poster: GTA",
    image: "/Posters/Low-Quality/GTA.jpg",
    dominantColor: "gray",
    year: "",
    category: "Low-Quality",
  },
  {
    id: 12,
    title: "GOAT",
    description: "Low-Quality Poster: GOAT",
    image: "/Posters/Low-Quality/GOAT.jpg",
    dominantColor: "gray",
    year: "",
    category: "Low-Quality",
  },
  {
    id: 13,
    title: "Hunter",
    description: "Low-Quality Poster: Hunter",
    image: "/Posters/Low-Quality/Hunter.jpg",
    dominantColor: "gray",
    year: "",
    category: "Low-Quality",
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

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedPoster) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedPoster])

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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Content */}
            <motion.div
              className="relative bg-paper-white rounded-lg shadow-2xl w-full h-full max-w-6xl max-h-[98vh] flex flex-col md:flex-row overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button - move to top-left */}
              <button
                className="absolute top-4 left-4 z-10 text-charcoal-black hover:text-crimson-red transition-colors bg-white/80 rounded-full p-2 shadow-lg text-2xl md:text-3xl"
                onClick={() => setSelectedPoster(null)}
                aria-label="Close"
              >
                <X size={32} />
              </button>
              {/* Image and Download */}
              <div className="flex-1 flex flex-col items-center justify-center bg-neutral-100 overflow-auto p-4 min-w-0">
                <img
                  src={selectedPoster.image || "/placeholder.svg"}
                  alt={selectedPoster.title}
                  className="max-h-[70vh] max-w-full w-auto h-auto rounded shadow-lg object-contain mb-4"
                  style={{ margin: '0 auto' }}
                />
                <a
                  href={selectedPoster.image}
                  download
                  className="inline-block bg-crimson-red text-paper-white px-6 py-2 rounded font-semibold shadow hover:bg-charcoal-black transition-colors text-center mb-4"
                >
                  Download Poster
                </a>
              </div>
              {/* Content */}
              <div className="flex-1 p-8 flex flex-col justify-center overflow-auto min-w-0 max-h-[90vh]">
                <h3 className="text-4xl font-anton font-bold text-charcoal-black mb-4 tracking-wider">
                  {selectedPoster.title}
                </h3>
                <p className="text-dust-grey mb-6 leading-relaxed whitespace-pre-line">
                  {selectedPoster.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-dust-grey mb-6">
                  <span className="bg-dust-grey/20 px-3 py-1 rounded">{selectedPoster.category}</span>
                  <span>{selectedPoster.year}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
