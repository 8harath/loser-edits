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
  title: "Kishore K - Visual Storyteller | Graphic Designer & Developer",
  description:
    "Computer Science student and independent graphic designer crafting bold visual narratives. Specializing in poster design, branding, and digital experiences.",
  keywords: ["graphic design", "poster design", "visual identity", "branding", "web design", "creative direction"],
  authors: [{ name: "Kishore K" }],
  creator: "Kishore K",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Kishore K - Visual Storyteller",
    description: "Bold visual narratives that bridge technical precision and creative expression",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kishore K - Visual Storyteller",
    description: "Bold visual narratives that bridge technical precision and creative expression",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
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
