import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kishore K Portfolio - Otavaayi Design',
    short_name: 'Otavaayi Design',
    description: 'Professional graphic design portfolio by Kishore K featuring Tamil cinema posters, music artwork, and visual storytelling',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F6F0',
    theme_color: '#C41E3A',
    orientation: 'portrait',
    scope: '/',
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/favicon.png',
        sizes: '512x512', 
        type: 'image/png',
        purpose: 'any'
      }
    ],
    categories: ['design', 'portfolio', 'art'],
    lang: 'en-US',
    dir: 'ltr'
  }
}
