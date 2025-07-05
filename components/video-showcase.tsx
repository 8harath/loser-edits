"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Video {
  id: number
  title: string
  description: string
  thumbnail: string
  youtubeId: string
  duration: string
  category: string
}

const videos: Video[] = [
  {
    id: 1,
    title: "MOTION GRAPHICS REEL",
    description:
      "A dynamic showcase of motion graphics work featuring bold typography animations and color transitions.",
    thumbnail: "https://img.youtube.com/vi/YgXdoat3NcQ/maxresdefault.jpg",
    youtubeId: "YgXdoat3NcQ",
    duration: "2:34",
    category: "Motion Graphics",
  },
  {
    id: 2,
    title: "POSTER DESIGN PROCESS",
    description: "Behind-the-scenes look at the creative process of designing impactful poster compositions.",
    thumbnail: "https://img.youtube.com/vi/HVIfVvEIvMI/maxresdefault.jpg",
    youtubeId: "HVIfVvEIvMI",
    duration: "4:12",
    category: "Process",
  },
  {
    id: 3,
    title: "BRAND IDENTITY SHOWCASE",
    description: "Comprehensive brand identity project featuring logo design, color systems, and visual applications.",
    thumbnail: "https://img.youtube.com/vi/JCqyi9GjKZk/maxresdefault.jpg",
    youtubeId: "JCqyi9GjKZk",
    duration: "3:45",
    category: "Branding",
  },
]

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  return (
    <section id="videos" className="py-20 px-4 bg-charcoal-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-jersey25 font-black text-paper-white mb-6 tracking-tighter">
            MOTION WORKS
          </h2>
          <p className="text-xl text-dust-grey max-w-3xl mx-auto">
            Bringing static designs to life through motion graphics, process documentation, and creative storytelling.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-dust-grey/20 overflow-hidden">
                {activeVideo === video.id ? (
                  // YouTube Embed
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  // Thumbnail with Play Button
                  <div className="relative w-full h-full cursor-pointer group" onClick={() => setActiveVideo(video.id)}>
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-charcoal-black/40 group-hover:bg-charcoal-black/20 transition-colors duration-300" />

                    {/* Play Button */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="bg-crimson-red/90 rounded-full p-6 group-hover:bg-crimson-red transition-colors duration-300">
                        <Play className="text-paper-white" size={32} fill="currentColor" />
                      </div>
                    </motion.div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4 bg-charcoal-black/80 text-paper-white px-2 py-1 text-sm font-medium">
                      {video.duration}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-electric-purple/90 text-paper-white px-3 py-1 text-xs font-medium tracking-wide">
                      {video.category}
                    </div>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="mt-6">
                <h3 className="text-2xl font-anton font-bold text-paper-white mb-3 tracking-wider group-hover:text-crimson-red transition-colors duration-200">
                  {video.title}
                </h3>
                <p className="text-dust-grey leading-relaxed">{video.description}</p>

                {/* External Link */}
                <motion.a
                  href={`https://youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-burnt-orange hover:text-electric-purple transition-colors duration-200 font-medium"
                  whileHover={{ x: 5 }}
                >
                  Watch on YouTube
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
