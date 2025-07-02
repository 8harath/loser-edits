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
  extraDescription?: string
}

const posters: Poster[] = [
  {
    id: 1,
    title: "Kaasu Illa Maame",
    description: "Built around a striking frame captured from a video song, this poster embraces a minimal edit approach to preserve the raw, cinematic quality of the original shot. A subtle glow effect enhances the atmosphere, while bold red typography adds visual contrast and energy. By resisting the urge to overdesign, the composition maintains its authentic, unfiltered emotion—letting the frame speak for itself.",
    image: "/Posters/Low-Quality/Kaasu Illa Maame.jpg",
    dominantColor: "gray",
    year: "",
    category: "",
    extraDescription: "",
  },
  {
    id: 2,
    title: "Kuruma",
    description: "Inspired by the aesthetics of a 'wanted' poster, Kurma is a layered, detail-rich composition that blends cultural references with visual storytelling. The piece features three central figures—Tony, Sam, and a third artist—each embedded with personalized elements: a Dolo 650 strip behind Tony nods to his debut, while a retro digital camera placed behind Sam hints at his passion for visual media. The chain element, extending toward the viewer and looping back, adds dynamic depth and controlled chaos to the layout. A reference to Dina Malar grounds the design in local culture, while the overall composition mirrors the group's playful take on fame and recognition following their song release.", 
    image: "/Posters/Low-Quality/Kuruma.jpg",
    dominantColor: "gray",
    year: "",
    category: "",
    extraDescription: "",
  },
  {
    id: 3,
    title: "She Was",
    description: "Created for the track 'Oru Last Time' by 8C Records and Reo, this poster explores the emotional complexity of love and loss through a neon, glow-heavy visual language. Rather than relying on literal cues, the design conveys mood through contrast—pairing words like Hope and Pain for Lord X Rio and Love and Hate for Tony to mirror the song's emotional tension. A female figure on the left anchors the narrative, while abstract scribbles, circles, and timestamps evoke a chaotic, introspective mindset. Every element—from type placement to symbolic shapes—was chosen to express emotional duality and temporal fragmentation.",
    image: "/Posters/Low-Quality/She Was.jpg",
    dominantColor: "gray",
    year: "",
    category: "",
    extraDescription: "",
  },
  {
    id: 4,
    title: "Paadai",
    description: " Designed for the upcoming track 'Padai', this poster draws from Tamil cultural rituals associated with death, blending personal photography with symbolic storytelling. The central image—a CD deck photographed during the artist's college days—anchors the composition, finally finding purpose in this evocative visual. Details like \"Tony Sam 8C Records\" inscribed in the corner and the vertical \"Releasing Soon\" text beside the title deepen its narrative layers. A hidden Tamil phrase, Padai Ethiralam Ah (\"Shall we begin the ritual?\"), adds cultural texture. With retro elements like vintage typography, radios, and haunting eyes, the poster channels an old-school aesthetic to mirror the song's solemn, reflective tone.",
    image: "/Posters/Low-Quality/Paadai.jpg",
    dominantColor: "gray",
    year: "",
    category: "",
    extraDescription: "",
  },
  {
    id: 5,
    title: "The Hatefull 8",
    description: " This poster distills the film's tension and character dynamics into a symbolic, retro-western composition. Seven guns form the visual core—each representing a principal character—while falling bullets in the corner hint at collateral damage and innocent bloodshed. Two guns are purposefully contrasted in orientation, symbolizing the moral duality between Major Marquis Warren and the man attempting a rescue, capturing the film's lack of a definitive hero or villain. Red tones evoke violence and betrayal, while the snowy backdrop reflects the story's cold, isolated setting. Designed to echo vintage western posters, the piece offers a layered visual narrative in a single frame.",
    image: "/Posters/Low-Quality/The Hatefull 8.jpg",
    dominantColor: "gray",
    year: "",
    category: "",
    extraDescription: "",
  },
  {
    id: 6,
    title: "Jocker",
    description: "This poster explores the fragmented psychology of the Joker through intentional disarray in both form and typography. Scattered, dissolving text elements convey a sense of mental instability and visual disconnection, mirroring the character's perception of reality. Avoiding structured design norms, the composition embraces a broken, drifting aesthetic with phrases like \"A Film by Todd Phillips,\" \"Otavaayi Designs,\" and \"Joker\" subtly embedded. A bold and unconventional color palette—considered unsuitable for fashion—proves unexpectedly effective in this context, reinforcing the design's experimental tone. The result is a concept-driven, emotionally raw piece that embraces chaos as a design language.",
    image: "/Posters/Low-Quality/Jocker.jpg",
    dominantColor: "gray",
    year: "",
    category: "",
    extraDescription: "",
  },
  {
    id: 7,
    title: "Knife In the Water",
    description: " A tribute to Roman Polanski's debut film, this poster channels a dark, psychological atmosphere through a moody palette of green and deep blue tones, reminiscent of Joker-style aesthetics. The right side of the composition captures the pivotal moment when the characters prepare to board the boat—marking the film's tonal shift—while the left side reflects the emotional consequences of the escalating tension. Central to the narrative is a symbolic pose of a character lying down, representing ego collapse and emotional unraveling. The design visually frames the power dynamics between the two men and the woman at the story's core, using layered imagery and boat-text placement to guide the viewer through its emotional arc.",
    image: "/Posters/Low-Quality/Knife In the Water.jpg",
    dominantColor: "gray",
    year: "",
    category: "",
    extraDescription: "",
  },
  {
    id: 8,
    title: "Ford",
    description: "A tribute to personal memory, this green-themed poster features a model car captured through a custom green-screen setup and carefully composed using layered textures and typography. Subtle design choices—like the muted wheel highlights and a discreetly embedded logo near the tire—enhance the visual balance without distracting from the subject. With its understated complexity and grain-rich detailing, this piece blends emotional significance with a textured, analog aesthetic.",
    image: "/Posters/Low-Quality/Ford.jpg",
    dominantColor: "gray",
    year: "",
    category: "",
    extraDescription: "",
  },
  {
    id: 9,
    title: "Maaveeran",
    description: "A minimalist yet striking composition, this poster was built around a cut-out of the main subject, set against a bold solid background to amplify visual impact. Featuring the official Maaveeran title logo and framed using a custom texture overlay, the design embraces a raw, gritty aesthetic with only 3–4 layers.",
    image: "/Posters/Low-Quality/Maaveeran.jpg",
    dominantColor: "gray",
    year: "",
    category: "",
    extraDescription: "",
  },
  {
    id: 10,
    title: "Retro",
    description: "Poster: Retro",
    image: "/Posters/Low-Quality/Retro.jpg",
    dominantColor: "gray",
    year: "",
    category: "",
    extraDescription: "",
  },
  {
    id: 11,
    title: "GTA",
    description: "Poster: GTA",
    image: "/Posters/Low-Quality/GTA.jpg",
    dominantColor: "gray",
    year: "",
    category: "",
    extraDescription: "",
  },
  {
    id: 12,
    title: "GOAT",
    description: " This fan art poster, inspired by the Tamil film GOAT, reimagines the official first-look image with a textured, comic-book aesthetic. A halftone effect, red overlay, and signature rusty textures give the piece a raw, print-like character, while grain and threshold effects enhance its 2D stylization. Additional elements—sourced from Flickr and processed into high-contrast black-and-white layers—add depth without overwhelming the composition. Built with around 10 carefully arranged layers, the design balances minimalism with mood, staying true to the artist's gritty and restrained visual style.",
    image: "/Posters/Low-Quality/GOAT.jpg",
    dominantColor: "gray",
    year: "",
    category: "",
    extraDescription: "",
  },
  {
    id: 13,
    title: "Hunter",
    description: "Poster: Hunter",
    image: "/Posters/Low-Quality/Hunter.jpg",
    dominantColor: "gray",
    year: "",
    category: "",
    extraDescription: "",
  },
]

export default function PosterGallery() {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = ["All"]

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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Content - Side by Side Layout, Scrollable */}
            <motion.div
              className="relative w-full max-w-4xl mx-auto rounded-3xl shadow-2xl bg-white/30 backdrop-blur-2xl border border-white/20 p-0 flex flex-row items-stretch overflow-hidden max-h-[90vh] m-4"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button - floating top right */}
              <button
                className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-charcoal-black hover:text-crimson-red transition-colors rounded-full p-2 shadow-lg text-2xl"
                onClick={() => setSelectedPoster(null)}
                aria-label="Close"
              >
                <X size={28} />
              </button>
              {/* Left: Poster Image */}
              <div className="flex-1 min-w-0 flex items-center justify-center bg-white/80 p-6 overflow-auto">
                <img
                  src={selectedPoster.image || "/placeholder.svg"}
                  alt={selectedPoster.title}
                  className="max-h-[60vh] w-auto rounded-2xl shadow-xl object-contain border border-white/30"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                />
              </div>
              {/* Right: Text Content, Scrollable if needed */}
              <div className="flex-1 min-w-0 flex flex-col justify-start bg-white/95 p-10 overflow-y-auto min-h-0">
                <div className="pt-2">
                  <h3 className="text-3xl md:text-4xl font-anton font-bold text-crimson-red mb-6 mt-2 tracking-wide text-left leading-tight px-2">
                    {selectedPoster.title}
                  </h3>
                  <p className="text-dust-grey text-lg leading-relaxed whitespace-pre-line text-left mb-6 px-2">
                    {selectedPoster.description}
                  </p>
                  {/* Extra Description Paragraph */}
                  {selectedPoster.extraDescription && (
                    <p className="text-charcoal-black text-base leading-relaxed whitespace-pre-line text-left mb-4 font-medium px-2">
                      {selectedPoster.extraDescription}
                    </p>
                  )}
                  <div className="px-2">
                    <a
                      href={selectedPoster.image}
                      download
                      className="inline-block bg-crimson-red text-paper-white px-8 py-2 rounded-full font-bold shadow hover:bg-charcoal-black transition-colors text-lg mt-2 w-fit"
                    >
                      Download Poster
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
