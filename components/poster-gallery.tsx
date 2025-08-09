"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Search, Download, Share2, Heart, Eye } from "lucide-react"
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
  tags?: string[]
  slug?: string
  views?: number
  likes?: number
}

const posters: Poster[] = [
  {
    id: 1,
    title: "Kaasu Illa Maame",
    description: "Built around a striking frame captured from a video song, this poster embraces a minimal edit approach to preserve the raw, cinematic quality of the original shot. A subtle glow effect enhances the atmosphere, while bold red typography adds visual contrast and energy. By resisting the urge to overdesign, the composition maintains its authentic, unfiltered emotion—letting the frame speak for itself.",
    image: "/Posters/Low-Quality/Kaasu Illa Maame.jpg",
    dominantColor: "gray",
    year: "2024",
    category: "Music Poster",
    extraDescription: "",
    tags: ["Tamil music", "8C Records", "minimal design", "typography", "Otavaayi Design"],
    slug: "kaasu-illa-maame-music-poster",
    views: 1250,
    likes: 89
  },
  {
    id: 2,
    title: "Kuruma",
    description: "Inspired by the aesthetics of a 'wanted' poster, Kurma is a layered, detail-rich composition that blends cultural references with visual storytelling. The piece features three central figures—Tony, Sam, and a third artist—each embedded with personalized elements: a Dolo 650 strip behind Tony nods to his debut, while a retro digital camera placed behind Sam hints at his passion for visual media. The chain element, extending toward the viewer and looping back, adds dynamic depth and controlled chaos to the layout. A reference to Dina Malar grounds the design in local culture, while the overall composition mirrors the group's playful take on fame and recognition following their song release.",
    image: "/Posters/Low-Quality/Kuruma.jpg",
    dominantColor: "gray",
    year: "2024",
    category: "Music Poster",
    extraDescription: "",
    tags: ["wanted poster", "Tamil culture", "8C Records", "Tony Sam", "layered design", "Kishore Designer"],
    slug: "kuruma-wanted-poster-design",
    views: 980,
    likes: 76
  },
  {
    id: 3,
    title: "She Was",
    description: "Created for the track 'Oru Last Time' by 8C Records and Reo, this poster explores the emotional complexity of love and loss through a neon, glow-heavy visual language. Rather than relying on literal cues, the design conveys mood through contrast—pairing words like Hope and Pain for Lord X Rio and Love and Hate for Tony to mirror the song's emotional tension. A female figure on the left anchors the narrative, while abstract scribbles, circles, and timestamps evoke a chaotic, introspective mindset. Every element—from type placement to symbolic shapes—was chosen to express emotional duality and temporal fragmentation.",
    image: "/Posters/Low-Quality/She Was.jpg",
    dominantColor: "gray",
    year: "2024",
    category: "Music Poster",
    extraDescription: "",
    tags: ["neon design", "emotional design", "8C Records", "Reo", "typography", "Otavaayi Design"],
    slug: "she-was-oru-last-time-poster",
    views: 1156,
    likes: 102
  },
  {
    id: 4,
    title: "Paadai",
    description: " Designed for the upcoming track 'Padai', this poster draws from Tamil cultural rituals associated with death, blending personal photography with symbolic storytelling. The central image—a CD deck photographed during the artist's college days—anchors the composition, finally finding purpose in this evocative visual. Details like \"Tony Sam 8C Records\" inscribed in the corner and the vertical \"Releasing Soon\" text beside the title deepen its narrative layers. A hidden Tamil phrase, Padai Ethiralam Ah (\"Shall we begin the ritual?\"), adds cultural texture. With retro elements like vintage typography, radios, and haunting eyes, the poster channels an old-school aesthetic to mirror the song's solemn, reflective tone.",
    image: "/Posters/Low-Quality/Paadai.jpg",
    dominantColor: "gray",
    year: "2024",
    category: "Music Poster",
    extraDescription: "",
    tags: ["Tamil rituals", "vintage design", "Tony Sam", "retro typography", "cultural design", "Kishore K"],
    slug: "paadai-tamil-ritual-poster",
    views: 887,
    likes: 65
  },
  {
    id: 5,
    title: "The Hatefull 8",
    description: " This poster distills the film's tension and character dynamics into a symbolic, retro-western composition. Seven guns form the visual core—each representing a principal character—while falling bullets in the corner hint at collateral damage and innocent bloodshed. Two guns are purposefully contrasted in orientation, symbolizing the moral duality between Major Marquis Warren and the man attempting a rescue, capturing the film's lack of a definitive hero or villain. Red tones evoke violence and betrayal, while the snowy backdrop reflects the story's cold, isolated setting. Designed to echo vintage western posters, the piece offers a layered visual narrative in a single frame.",
    image: "/Posters/Low-Quality/The Hatefull 8.jpg",
    dominantColor: "gray",
    year: "2023",
    category: "Film Poster",
    extraDescription: "",
    tags: ["Quentin Tarantino", "western poster", "film poster design", "symbolic design", "Otavaayi Design"],
    slug: "hateful-8-western-film-poster",
    views: 1789,
    likes: 145
  },
  {
    id: 6,
    title: "Joker",
    description: "This poster explores the fragmented psychology of the Joker through intentional disarray in both form and typography. Scattered, dissolving text elements convey a sense of mental instability and visual disconnection, mirroring the character's perception of reality. Avoiding structured design norms, the composition embraces a broken, drifting aesthetic with phrases like \"A Film by Todd Phillips,\" \"Otavaayi Designs,\" and \"Joker\" subtly embedded. A bold and unconventional color palette—considered unsuitable for fashion—proves unexpectedly effective in this context, reinforcing the design's experimental tone. The result is a concept-driven, emotionally raw piece that embraces chaos as a design language.",
    image: "/Posters/Low-Quality/Joker.jpg",
    dominantColor: "gray",
    year: "2023",
    category: "Fan Art",
    extraDescription: "",
    tags: ["DC Comics", "Joaquin Phoenix", "Todd Phillips", "psychological design", "chaos design", "Kishore Designer"],
    slug: "joker-psychological-fan-art-poster",
    views: 2341,
    likes: 198
  },
  {
    id: 7,
    title: "Knife In the Water",
    description: " A tribute to Roman Polanski's debut film, this poster channels a dark, psychological atmosphere through a moody palette of green and deep blue tones, reminiscent of Joker-style aesthetics. The right side of the composition captures the pivotal moment when the characters prepare to board the boat—marking the film's tonal shift—while the left side reflects the emotional consequences of the escalating tension. Central to the narrative is a symbolic pose of a character lying down, representing ego collapse and emotional unraveling. The design visually frames the power dynamics between the two men and the woman at the story's core, using layered imagery and boat-text placement to guide the viewer through its emotional arc.",
    image: "/Posters/Low-Quality/Knife In the Water.jpg",
    dominantColor: "gray",
    year: "2023",
    category: "Film Poster",
    extraDescription: "",
    tags: ["Roman Polanski", "psychological thriller", "film poster", "moody design", "Otavaayi Design"],
    slug: "knife-in-water-polanski-poster",
    views: 967,
    likes: 78
  },
  {
    id: 8,
    title: "Ford",
    description: "A tribute to personal memory, this green-themed poster features a model car captured through a custom green-screen setup and carefully composed using layered textures and typography. Subtle design choices—like the muted wheel highlights and a discreetly embedded logo near the tire—enhance the visual balance without distracting from the subject. With its understated complexity and grain-rich detailing, this piece blends emotional significance with a textured, analog aesthetic.",
    image: "/Posters/Low-Quality/Ford.jpg",
    dominantColor: "gray",
    year: "2023",
    category: "Fan Art",
    extraDescription: "",
    tags: ["Ford car", "automotive design", "green screen", "texture design", "personal project", "Kishore K"],
    slug: "ford-car-tribute-poster",
    views: 654,
    likes: 45
  },
  {
    id: 9,
    title: "Maaveeran",
    description: "A minimalist yet striking composition, this poster was built around a cut-out of the main subject, set against a bold solid background to amplify visual impact. Featuring the official Maaveeran title logo and framed using a custom texture overlay, the design embraces a raw, gritty aesthetic with only 3–4 layers.",
    image: "/Posters/Low-Quality/Maaveeran.jpg",
    dominantColor: "gray",
    year: "2023",
    category: "Film Poster",
    extraDescription: "",
    tags: ["Tamil cinema", "Sivakarthikeyan", "minimalist design", "film poster", "Otavaayi Design"],
    slug: "maaveeran-tamil-film-poster",
    views: 1432,
    likes: 112
  },
  {
    id: 10,
    title: "Retro",
    description: "Featuring actor Suriya, Retro channels the visual language of vintage Tamil cinema through a gritty monochrome palette of yellow-orange and bold blacks. Structured in a stylized grid layout reminiscent of comic panels, the poster captures fragments of the character's emotional and narrative arc—from aggression and introspection to moments of calm. The central frame, with Suriya seated and gripping a weapon, anchors the design with intensity and raw emotion. Complemented by the tagline \"A laughter, a war, a love awaits for the one!!\", the poster hints at a genre-blending storyline. With retro typography and cinematic framing, the piece pays homage to old-school aesthetics while reflecting themes of conflict, nostalgia, and classic heroism under Karthik Subbaraj's direction.",
    image: "/Posters/Low-Quality/Retro.jpg",
    dominantColor: "gray",
    year: "2023",
    category: "Film Poster",
    extraDescription: "",
    tags: ["Suriya", "Karthik Subbaraj", "Tamil cinema", "retro design", "vintage poster", "Kishore Designer"],
    slug: "retro-suriya-vintage-poster",
    views: 1876,
    likes: 156
  },
  {
    id: 11,
    title: "GTA",
    description: "Set against a retro neon-orange and purple palette, this collage-style poster captures the sun-soaked grit of Vice City through a series of cinematic snapshots. Centered on protagonists Lucia and Jason, each frame reflects a facet of the game's world—from chaotic chases and street confrontations to quieter, character-driven moments. Visual elements like palm trees, vintage cars, firearms, and nightlife scenes ground the design in the game's Miami-inspired setting. A grainy texture evokes the feel of an old crime comic or VHS-era film, while the Grand Theft Auto logo anchors the piece within the iconic franchise. The poster distills GTA VI's tone: fast, raw, and deeply embedded in the pulse of modern culture.",
    image: "/Posters/Low-Quality/GTA.jpg",
    dominantColor: "gray",
    year: "2023",
    category: "Fan Art",
    extraDescription: "",
    tags: ["GTA VI", "Rockstar Games", "Vice City", "gaming poster", "neon design", "Otavaayi Design"],
    slug: "gta-vi-vice-city-poster",
    views: 2156,
    likes: 189
  },
  {
    id: 12,
    title: "GOAT",
    description: " This fan art poster, inspired by the Tamil film GOAT, reimagines the official first-look image with a textured, comic-book aesthetic. A halftone effect, red overlay, and signature rusty textures give the piece a raw, print-like character, while grain and threshold effects enhance its 2D stylization. Additional elements—sourced from Flickr and processed into high-contrast black-and-white layers—add depth without overwhelming the composition. Built with around 10 carefully arranged layers, the design balances minimalism with mood, staying true to the artist's gritty and restrained visual style.",
    image: "/Posters/Low-Quality/GOAT.jpg",
    dominantColor: "gray",
    year: "2024",
    category: "Fan Art",
    extraDescription: "",
    tags: ["Thalapathy Vijay", "GOAT film", "comic book style", "halftone effect", "Tamil cinema", "Kishore K"],
    slug: "goat-vijay-comic-style-poster",
    views: 1789,
    likes: 134
  },
  {
    id: 13,
    title: "Hunter",
    description: "This poster for the Royal Enfield Hunter 350 blends retro aesthetics with urban energy, using a bold orange-and-black palette and dynamic, warped typography to evoke speed and motion. Centered around a clean, angled shot of the motorcycle, the design showcases its compact form and street-ready appeal. A brief highlight section emphasizes the Hunter's 349cc engine, agile geometry, shorter wheelbase, and lightweight build—ideal for navigating city streets. Balancing vintage poster flair with modern design sensibilities, the composition captures the Hunter 350's identity as a stylish, high-performance machine built for the urban rider.",
    image: "/Posters/Low-Quality/Hunter.jpg",
    dominantColor: "gray",
    year: "2023",
    category: "Fan Art",
    extraDescription: "",
    tags: ["Royal Enfield", "Hunter 350", "motorcycle poster", "automotive design", "urban design", "Otavaayi Design"],
    slug: "royal-enfield-hunter-350-poster",
    views: 876,
    likes: 67
  },
  {
    id: 14,
    title: "Kaal Mela Kaalu",
    description: "A bold exploration of Tamil street culture and urban aesthetics, this poster represents the raw energy of contemporary Tamil music. The design captures the essence of street-level storytelling through gritty textures and authentic visual elements that resonate with the local audience.",
    image: "/Posters/Low-Quality/kaal mela kaalu final.jpg",
    dominantColor: "gray",
    year: "2024",
    category: "Music Poster",
    extraDescription: "",
    tags: ["Tamil street culture", "urban design", "music poster", "contemporary design", "Kishore Designer"],
    slug: "kaal-mela-kaalu-street-poster",
    views: 543,
    likes: 38
  },
]

const categories = ["All", "Film Poster", "Music Poster", "Fan Art"];

export default function PosterGallery() {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null)
  const [filter, setFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [favorites, setFavorites] = useState<number[]>([])
  const [sortBy, setSortBy] = useState<"newest" | "popular" | "title">("newest")

  // Enhanced filtering with search
  const filteredPosters = useMemo(() => {
    let filtered = filter === "All" ? posters : posters.filter((poster) => poster.category === filter)
    
    if (searchTerm) {
      filtered = filtered.filter((poster) =>
        poster.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        poster.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        poster.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        poster.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Sort posters
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return (b.views || 0) - (a.views || 0)
        case "title":
          return a.title.localeCompare(b.title)
        case "newest":
        default:
          return parseInt(b.year || "0") - parseInt(a.year || "0")
      }
    })

    return filtered
  }, [filter, searchTerm, sortBy])

  // Share functionality
  const sharePost = async (poster: Poster) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${poster.title} - Kishore K Design Portfolio`,
          text: `Check out this amazing poster design: ${poster.title} by Kishore K from Otavaayi Design`,
          url: `${window.location.origin}/#gallery`
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(`${window.location.origin}/#gallery`)
      alert('Link copied to clipboard!')
    }
  }

  // Toggle favorites
  const toggleFavorite = (posterId: number) => {
    setFavorites(prev => 
      prev.includes(posterId) 
        ? prev.filter(id => id !== posterId)
        : [...prev, posterId]
    )
  }

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
        {/* Section Header with SEO-optimized content */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-7xl font-jersey25 font-black text-charcoal-black mb-6 tracking-tighter">
            POSTER GALLERY
          </h1>
          <h2 className="text-2xl md:text-3xl font-anton text-crimson-red mb-4">
            Kishore K - Visual Storyteller | Otavaayi Design
          </h2>
          <p className="text-xl text-dust-grey max-w-3xl mx-auto">
            Explore Kishore K's collection of bold visual narratives featuring Tamil cinema posters, music album artwork, 
            and fan art designs. Independent graphic designer at Otavaayi Design crafting compelling poster designs 
            that blend typography, color, and cultural storytelling.
          </p>
          <div className="mt-4 text-sm text-dust-grey">
            <span className="font-medium">Keywords:</span> Tamil cinema posters, music poster design, graphic design portfolio, 
            Kishore Designer, Otavaayi Design, visual storytelling, poster art
          </div>
        </motion.div>

        {/* Search and Sort Controls */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
        >
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dust-grey w-4 h-4" />
            <input
              type="search"
              placeholder="Search posters, tags, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-dust-grey/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson-red/50 w-80"
              aria-label="Search poster gallery"
            />
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "newest" | "popular" | "title")}
            className="px-4 py-2 border border-dust-grey/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson-red/50"
            aria-label="Sort posters"
          >
            <option value="newest">Newest First</option>
            <option value="popular">Most Popular</option>
            <option value="title">Alphabetical</option>
          </select>
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

        {/* Results Count */}
        {searchTerm && (
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-dust-grey">
              Found {filteredPosters.length} poster{filteredPosters.length !== 1 ? 's' : ''} 
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </motion.div>
        )}

        {/* No Results */}
        {filteredPosters.length === 0 && searchTerm && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-dust-grey mb-4">
              No posters found matching "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="bg-crimson-red text-white px-6 py-2 rounded-lg hover:bg-charcoal-black transition-colors"
            >
              Clear Search
            </button>
          </motion.div>
        )}

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
                <article className="relative bg-white shadow-lg overflow-hidden aspect-[210/297] group-hover:shadow-2xl transition-shadow duration-200">
                  <Image
                    src={poster.image || "/placeholder.svg"}
                    alt={`${poster.title} - ${poster.category} designed by Kishore K at Otavaayi Design`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                    priority={index < 6}
                    loading={index < 6 ? "eager" : "lazy"}
                  />

                  {/* Action Buttons */}
                  <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(poster.id)
                      }}
                      className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                        favorites.includes(poster.id) 
                          ? 'bg-crimson-red text-white' 
                          : 'bg-white/80 text-charcoal-black hover:bg-crimson-red hover:text-white'
                      }`}
                      aria-label={`${favorites.includes(poster.id) ? 'Remove from' : 'Add to'} favorites`}
                    >
                      <Heart className="w-4 h-4" fill={favorites.includes(poster.id) ? 'currentColor' : 'none'} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        sharePost(poster)
                      }}
                      className="p-2 rounded-full bg-white/80 text-charcoal-black hover:bg-crimson-red hover:text-white backdrop-blur-sm transition-colors"
                      aria-label="Share poster"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-2 left-2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="flex items-center gap-1 bg-black/60 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
                      <Eye className="w-3 h-3" />
                      <span>{poster.views}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/60 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
                      <Heart className="w-3 h-3" fill="currentColor" />
                      <span>{poster.likes}</span>
                    </div>
                  </div>

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
                      {poster.tags && (
                        <div className="mt-2 flex flex-wrap gap-1 justify-center">
                          {poster.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-white/20 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Texture overlay */}
                  <div className="absolute inset-0 bg-noise-texture opacity-20 pointer-events-none" />
                </article>
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

                {/* Right: Description with Enhanced Content */}
                <div className="flex-1 bg-white p-4 md:p-8 overflow-y-auto">
                  <div className="space-y-6">
                    {/* Title and Meta */}
                    <header>
                      <h2 className="text-xl md:text-3xl font-anton font-bold text-crimson-red tracking-wide mb-2">
                        {selectedPoster.title}
                      </h2>
                      <div className="flex flex-wrap gap-2 text-sm text-dust-grey mb-4">
                        <span className="bg-dust-grey/20 px-2 py-1 rounded">{selectedPoster.category}</span>
                        <span className="bg-dust-grey/20 px-2 py-1 rounded">{selectedPoster.year}</span>
                        <span className="bg-dust-grey/20 px-2 py-1 rounded">By Kishore K</span>
                        <span className="bg-dust-grey/20 px-2 py-1 rounded">Otavaayi Design</span>
                      </div>
                    </header>
                    
                    {/* Stats */}
                    <div className="flex gap-4 text-sm text-dust-grey border-b border-dust-grey/20 pb-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{selectedPoster.views} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" fill="currentColor" />
                        <span>{selectedPoster.likes} likes</span>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    {selectedPoster.tags && (
                      <div>
                        <h4 className="text-sm font-bold text-charcoal-black mb-2">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedPoster.tags.map((tag, index) => (
                            <span key={index} className="bg-crimson-red/10 text-crimson-red px-2 py-1 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Description */}
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-charcoal-black mb-3">About This Poster</h3>
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
                    
                    {/* Action Buttons */}
                    <div className="pt-2 md:pt-4 flex flex-wrap gap-3">
                      <a
                        href={selectedPoster.image.replace('/Low-Quality/', '/High-Quality/')}
                        download={`${selectedPoster.title}-Kishore-K-Otavaayi-Design.jpg`}
                        className="inline-flex items-center gap-2 bg-crimson-red text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-charcoal-black transition-colors shadow-lg text-sm md:text-base"
                      >
                        <Download className="w-4 h-4" />
                        Download High Quality
                      </a>
                      <button
                        onClick={() => sharePost(selectedPoster)}
                        className="inline-flex items-center gap-2 bg-dust-grey text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-charcoal-black transition-colors shadow-lg text-sm md:text-base"
                      >
                        <Share2 className="w-4 h-4" />
                        Share
                      </button>
                      <button
                        onClick={() => toggleFavorite(selectedPoster.id)}
                        className={`inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-colors shadow-lg text-sm md:text-base ${
                          favorites.includes(selectedPoster.id)
                            ? 'bg-crimson-red text-white'
                            : 'bg-white border border-dust-grey text-charcoal-black hover:bg-dust-grey/20'
                        }`}
                      >
                        <Heart className="w-4 h-4" fill={favorites.includes(selectedPoster.id) ? 'currentColor' : 'none'} />
                        {favorites.includes(selectedPoster.id) ? 'Favorited' : 'Add to Favorites'}
                      </button>
                    </div>

                    {/* SEO Rich Content */}
                    <div className="pt-4 border-t border-dust-grey/20 text-xs text-dust-grey">
                      <p>
                        <strong>Artist:</strong> Kishore K | <strong>Studio:</strong> Otavaayi Design | 
                        <strong> Category:</strong> {selectedPoster.category} | <strong>Year:</strong> {selectedPoster.year}
                      </p>
                      <p className="mt-1">
                        Professional poster design services available. Contact Kishore K at Otavaayi Design for custom graphic design projects.
                      </p>
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
