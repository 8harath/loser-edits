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
    category: "Music Poster",
    extraDescription: "",
  },
  {
    id: 2,
    title: "Kuruma",
    description: "Inspired by the aesthetics of a 'wanted' poster, Kurma is a layered, detail-rich composition that blends cultural references with visual storytelling. The piece features three central figures—Tony, Sam, and a third artist—each embedded with personalized elements: a Dolo 650 strip behind Tony nods to his debut, while a retro digital camera placed behind Sam hints at his passion for visual media. The chain element, extending toward the viewer and looping back, adds dynamic depth and controlled chaos to the layout. A reference to Dina Malar grounds the design in local culture, while the overall composition mirrors the group's playful take on fame and recognition following their song release.",
    image: "/Posters/Low-Quality/Kuruma.jpg",
    dominantColor: "gray",
    year: "",
    category: "Music Poster",
    extraDescription: "",
  },
  {
    id: 3,
    title: "She Was",
    description: "Created for the track 'Oru Last Time' by 8C Records and Reo, this poster explores the emotional complexity of love and loss through a neon, glow-heavy visual language. Rather than relying on literal cues, the design conveys mood through contrast—pairing words like Hope and Pain for Lord X Rio and Love and Hate for Tony to mirror the song's emotional tension. A female figure on the left anchors the narrative, while abstract scribbles, circles, and timestamps evoke a chaotic, introspective mindset. Every element—from type placement to symbolic shapes—was chosen to express emotional duality and temporal fragmentation.",
    image: "/Posters/Low-Quality/She Was.jpg",
    dominantColor: "gray",
    year: "",
    category: "Music Poster",
    extraDescription: "",
  },
  {
    id: 4,
    title: "Paadai",
    description: " Designed for the upcoming track 'Padai', this poster draws from Tamil cultural rituals associated with death, blending personal photography with symbolic storytelling. The central image—a CD deck photographed during the artist's college days—anchors the composition, finally finding purpose in this evocative visual. Details like \"Tony Sam 8C Records\" inscribed in the corner and the vertical \"Releasing Soon\" text beside the title deepen its narrative layers. A hidden Tamil phrase, Padai Ethiralam Ah (\"Shall we begin the ritual?\"), adds cultural texture. With retro elements like vintage typography, radios, and haunting eyes, the poster channels an old-school aesthetic to mirror the song's solemn, reflective tone.",
    image: "/Posters/Low-Quality/Paadai.jpg",
    dominantColor: "gray",
    year: "",
    category: "Music Poster",
    extraDescription: "",
  },
  {
    id: 5,
    title: "The Hatefull 8",
    description: " This poster distills the film's tension and character dynamics into a symbolic, retro-western composition. Seven guns form the visual core—each representing a principal character—while falling bullets in the corner hint at collateral damage and innocent bloodshed. Two guns are purposefully contrasted in orientation, symbolizing the moral duality between Major Marquis Warren and the man attempting a rescue, capturing the film's lack of a definitive hero or villain. Red tones evoke violence and betrayal, while the snowy backdrop reflects the story's cold, isolated setting. Designed to echo vintage western posters, the piece offers a layered visual narrative in a single frame.",
    image: "/Posters/Low-Quality/The Hatefull 8.jpg",
    dominantColor: "gray",
    year: "",
    category: "Film Poster",
    extraDescription: "",
  },
  {
    id: 6,
    title: "Joker",
    description: "This poster explores the fragmented psychology of the Joker through intentional disarray in both form and typography. Scattered, dissolving text elements convey a sense of mental instability and visual disconnection, mirroring the character's perception of reality. Avoiding structured design norms, the composition embraces a broken, drifting aesthetic with phrases like \"A Film by Todd Phillips,\" \"Otavaayi Designs,\" and \"Joker\" subtly embedded. A bold and unconventional color palette—considered unsuitable for fashion—proves unexpectedly effective in this context, reinforcing the design's experimental tone. The result is a concept-driven, emotionally raw piece that embraces chaos as a design language.",
    image: "/Posters/Low-Quality/Joker.jpg",
    dominantColor: "gray",
    year: "",
    category: "Fan Art",
    extraDescription: "",
  },
  {
    id: 7,
    title: "Knife In the Water",
    description: " A tribute to Roman Polanski's debut film, this poster channels a dark, psychological atmosphere through a moody palette of green and deep blue tones, reminiscent of Joker-style aesthetics. The right side of the composition captures the pivotal moment when the characters prepare to board the boat—marking the film's tonal shift—while the left side reflects the emotional consequences of the escalating tension. Central to the narrative is a symbolic pose of a character lying down, representing ego collapse and emotional unraveling. The design visually frames the power dynamics between the two men and the woman at the story's core, using layered imagery and boat-text placement to guide the viewer through its emotional arc.",
    image: "/Posters/Low-Quality/Knife In the Water.jpg",
    dominantColor: "gray",
    year: "",
    category: "Film Poster",
    extraDescription: "",
  },
  {
    id: 8,
    title: "Ford",
    description: "A tribute to personal memory, this green-themed poster features a model car captured through a custom green-screen setup and carefully composed using layered textures and typography. Subtle design choices—like the muted wheel highlights and a discreetly embedded logo near the tire—enhance the visual balance without distracting from the subject. With its understated complexity and grain-rich detailing, this piece blends emotional significance with a textured, analog aesthetic.",
    image: "/Posters/Low-Quality/Ford.jpg",
    dominantColor: "gray",
    year: "",
    category: "Fan Art",
    extraDescription: "",
  },
  {
    id: 9,
    title: "Maaveeran",
    description: "A minimalist yet striking composition, this poster was built around a cut-out of the main subject, set against a bold solid background to amplify visual impact. Featuring the official Maaveeran title logo and framed using a custom texture overlay, the design embraces a raw, gritty aesthetic with only 3–4 layers.",
    image: "/Posters/Low-Quality/Maaveeran.jpg",
    dominantColor: "gray",
    year: "",
    category: "Film Poster",
    extraDescription: "",
  },
  {
    id: 10,
    title: "Retro",
    description: "Featuring actor Suriya, Retro channels the visual language of vintage Tamil cinema through a gritty monochrome palette of yellow-orange and bold blacks. Structured in a stylized grid layout reminiscent of comic panels, the poster captures fragments of the character's emotional and narrative arc—from aggression and introspection to moments of calm. The central frame, with Suriya seated and gripping a weapon, anchors the design with intensity and raw emotion. Complemented by the tagline \"A laughter, a war, a love awaits for the one!!\", the poster hints at a genre-blending storyline. With retro typography and cinematic framing, the piece pays homage to old-school aesthetics while reflecting themes of conflict, nostalgia, and classic heroism under Karthik Subbaraj's direction.",
    image: "/Posters/Low-Quality/Retro.jpg",
    dominantColor: "gray",
    year: "",
    category: "Film Poster",
    extraDescription: "",
  },
  {
    id: 11,
    title: "GTA",
    description: "Set against a retro neon-orange and purple palette, this collage-style poster captures the sun-soaked grit of Vice City through a series of cinematic snapshots. Centered on protagonists Lucia and Jason, each frame reflects a facet of the game's world—from chaotic chases and street confrontations to quieter, character-driven moments. Visual elements like palm trees, vintage cars, firearms, and nightlife scenes ground the design in the game's Miami-inspired setting. A grainy texture evokes the feel of an old crime comic or VHS-era film, while the Grand Theft Auto logo anchors the piece within the iconic franchise. The poster distills GTA VI's tone: fast, raw, and deeply embedded in the pulse of modern culture.",
    image: "/Posters/Low-Quality/GTA.jpg",
    dominantColor: "gray",
    year: "",
    category: "Fan Art",
    extraDescription: "",
  },
  {
    id: 12,
    title: "GOAT",
    description: " This fan art poster, inspired by the Tamil film GOAT, reimagines the official first-look image with a textured, comic-book aesthetic. A halftone effect, red overlay, and signature rusty textures give the piece a raw, print-like character, while grain and threshold effects enhance its 2D stylization. Additional elements—sourced from Flickr and processed into high-contrast black-and-white layers—add depth without overwhelming the composition. Built with around 10 carefully arranged layers, the design balances minimalism with mood, staying true to the artist's gritty and restrained visual style.",
    image: "/Posters/Low-Quality/GOAT.jpg",
    dominantColor: "gray",
    year: "",
    category: "Fan Art",
    extraDescription: "",
  },
  {
    id: 13,
    title: "Hunter",
    description: "This poster for the Royal Enfield Hunter 350 blends retro aesthetics with urban energy, using a bold orange-and-black palette and dynamic, warped typography to evoke speed and motion. Centered around a clean, angled shot of the motorcycle, the design showcases its compact form and street-ready appeal. A brief highlight section emphasizes the Hunter's 349cc engine, agile geometry, shorter wheelbase, and lightweight build—ideal for navigating city streets. Balancing vintage poster flair with modern design sensibilities, the composition captures the Hunter 350's identity as a stylish, high-performance machine built for the urban rider.",
    image: "/Posters/Low-Quality/Hunter.jpg",
    dominantColor: "gray",
    year: "",
    category: "Fan Art",
    extraDescription: "",
  },
  {
    id: 14,
    title: "Kaal Mela Kaalu",
    description: "Information yet to be added",
    image: "/Posters/Low-Quality/kaal mela kaalu final.jpg",
    dominantColor: "gray",
    year: "",
    category: "Music Poster",
    extraDescription: "",
  },
]

const categories = ["All", "Film Poster", "Music Poster", "Fan Art"];

export default function PosterGallery() {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null)
  const [filter, setFilter] = useState("All")
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  const filteredPosters = filter === "All" ? posters : posters.filter((poster) => poster.category === filter)

  // Handle initial load animation
  useEffect(() => {
    if (isInitialLoad) {
      const timer = setTimeout(() => setIsInitialLoad(false), 100)
      return () => clearTimeout(timer)
    }
  }, [])

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
          <h2 className="text-5xl md:text-7xl font-jersey25 font-black text-charcoal-black mb-6 tracking-tighter">
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
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 font-medium tracking-wide transition-all duration-150 ${
                filter === category
                  ? "bg-crimson-red text-paper-white"
                  : "bg-transparent text-charcoal-black hover:bg-dust-grey/20"
              }`}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.15 }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                type: "spring",
                stiffness: 400,
                damping: 25
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Poster Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence mode="wait">
            {filteredPosters.map((poster, index) => (
              <motion.div
                key={poster.id}
                className="group cursor-pointer"
                initial={{ 
                  opacity: 0, 
                  y: isInitialLoad ? 50 : 30, 
                  rotateX: isInitialLoad ? -20 : -15,
                  scale: isInitialLoad ? 0.9 : 1
                }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.9,
                  rotateY: 90,
                  transition: { duration: 0.2 }
                }}
                transition={{ 
                  duration: isInitialLoad ? 0.5 : 0.3, 
                  delay: isInitialLoad ? index * 0.08 : index * 0.03,
                  type: "spring",
                  stiffness: isInitialLoad ? 300 : 400,
                  damping: 25
                }}
                viewport={{ once: true }}
                layout
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  rotateX: 5,
                  transition: { duration: 0.2 }
                }}
                onClick={() => setSelectedPoster(poster)}
                animate={{ 
                  opacity: filter === "All" || poster.category === filter ? 1 : 0,
                  scale: filter === "All" || poster.category === filter ? 1 : 0.8,
                  y: filter === "All" || poster.category === filter ? 0 : 20,
                  transition: {
                    duration: 0.25,
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }
                }}
                style={{ 
                  pointerEvents: filter === "All" || poster.category === filter ? "auto" : "none",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Poster Card */}
                <div className="relative bg-white shadow-lg overflow-hidden aspect-[210/297] group-hover:shadow-2xl transition-shadow duration-200">
                  <Image
                    src={poster.image || "/placeholder.svg"}
                    alt={poster.title}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-${poster.dominantColor}/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center`}
                  >
                    <motion.div 
                      className="text-center text-paper-white p-4"
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.05 }}
                    >
                      <h3 className="text-2xl font-anton font-bold mb-2 tracking-wider">{poster.title}</h3>
                      <p className="text-sm opacity-90">{poster.category}</p>
                      <p className="text-xs opacity-75 mt-1">{poster.year}</p>
                    </motion.div>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPoster(null)}
          >
            {/* Modal Content - Redesigned Layout */}
            <motion.div
              className="relative w-full max-w-6xl max-h-[95vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Header with Close Button */}
              <div className="bg-crimson-red text-white p-4 flex items-center justify-end">
                <button
                  className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
                  onClick={() => setSelectedPoster(null)}
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content Area */}
              <div className="flex flex-1 min-h-0 flex-col md:flex-row">
                {/* Left: Poster Image */}
                <div className="flex-1 bg-gray-50 flex items-center justify-center p-4 md:p-8">
                  <img
                    src={selectedPoster.image || "/placeholder.svg"}
                    alt={selectedPoster.title}
                    className="max-h-60 md:max-h-full max-w-full object-contain rounded-lg shadow-lg"
                  />
                </div>

                {/* Right: Description */}
                <div className="flex-1 bg-white p-4 md:p-8 overflow-y-auto">
                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <h3 className="text-xl md:text-3xl font-anton font-bold text-crimson-red tracking-wide mb-4">
                        {selectedPoster.title}
                      </h3>
                    </div>
                    
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-charcoal-black mb-3">About This Poster</h4>
                      <p className="text-dust-grey text-sm md:text-base leading-relaxed whitespace-pre-line">
                        {selectedPoster.description}
                      </p>
                    </div>
                    
                    {selectedPoster.extraDescription && (
                      <div>
                        <p className="text-charcoal-black text-sm md:text-base leading-relaxed whitespace-pre-line">
                          {selectedPoster.extraDescription}
                        </p>
                      </div>
                    )}
                    
                    <div className="pt-2 md:pt-4">
                      <a
                        href={selectedPoster.image}
                        download
                        className="inline-flex items-center bg-crimson-red text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-charcoal-black transition-colors shadow-lg text-sm md:text-base"
                      >
                        Download High Quality
                      </a>
                    </div>
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
