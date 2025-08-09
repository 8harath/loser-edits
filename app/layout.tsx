import type React from "react"
import type { Metadata } from "next"
import { Inter, Anton, Roboto_Condensed, Roboto_Mono, Jersey_25 } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import "../styles/globals.css"
import { LoaderProvider } from "@/components/ui/loader-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
})

const robotoCondensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
})

const jersey25 = Jersey_25({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jersey25",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kishore K - Visual Storyteller | Otavaayi Design | Graphic Designer Portfolio",
  description:
    "Kishore K, Computer Science student and independent graphic designer at Otavaayi Design. Specializing in Tamil cinema posters, music album artwork, fan art, and bold visual narratives. Explore my poster gallery featuring film posters, music posters, and creative designs.",
  keywords: [
    "Kishore K", 
    "Kishore Designer", 
    "Otavaayi Design", 
    "graphic design", 
    "poster design", 
    "Tamil cinema posters",
    "music poster design",
    "film poster design", 
    "fan art posters",
    "visual storyteller",
    "Tamil movie posters",
    "album artwork",
    "creative design portfolio",
    "independent graphic designer",
    "poster gallery",
    "visual identity",
    "branding design",
    "typography design",
    "cinema poster art"
  ],
  authors: [{ name: "Kishore K", url: "https://otavaayi-design.com" }],
  creator: "Kishore K - Otavaayi Design",
  publisher: "Otavaayi Design",
  applicationName: "Kishore K Portfolio - Otavaayi Design",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Kishore K - Visual Storyteller | Otavaayi Design Portfolio",
    description: "Explore Kishore K's poster gallery featuring Tamil cinema posters, music album artwork, and bold visual narratives. Independent graphic designer crafting compelling visual stories.",
    type: "website",
    locale: "en_US",
    siteName: "Kishore K Portfolio - Otavaayi Design",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kishore K - Otavaayi Design Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kishore K - Visual Storyteller | Otavaayi Design",
    description: "Independent graphic designer specializing in Tamil cinema posters, music artwork, and bold visual narratives",
    images: ["/twitter-image.jpg"],
    creator: "@otavaayi_design"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code"
    }
  },
  category: "Design Portfolio",
  classification: "Graphic Design Portfolio"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kishore K",
    "jobTitle": "Graphic Designer & Visual Storyteller",
    "worksFor": {
      "@type": "Organization",
      "name": "Otavaayi Design"
    },
    "url": "https://otavaayi-design.com",
    "sameAs": [
      "https://instagram.com/otavaayi_design",
      "https://behance.net/kishoredesigner"
    ],
    "knowsAbout": [
      "Graphic Design",
      "Poster Design", 
      "Tamil Cinema Posters",
      "Music Album Artwork",
      "Visual Storytelling",
      "Typography Design"
    ],
    "description": "Independent graphic designer specializing in Tamil cinema posters, music album artwork, and bold visual narratives"
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="canonical" href="https://otavaayi-design.com" />
        <meta name="theme-color" content="#C41E3A" />
        <meta name="msapplication-TileColor" content="#C41E3A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${anton.variable} ${robotoCondensed.variable} ${robotoMono.variable} ${jersey25.variable} font-inter antialiased`}
      >
        <LoaderProvider>
          {children}
        </LoaderProvider>
        <Toaster />
      </body>
    </html>
  )
}
