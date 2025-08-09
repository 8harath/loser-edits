import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://otavaayi-design.com'
  
  // Generate poster URLs
  const posterUrls = [
    'kaasu-illa-maame-music-poster',
    'kuruma-wanted-poster-design', 
    'she-was-oru-last-time-poster',
    'paadai-tamil-ritual-poster',
    'hateful-8-western-film-poster',
    'joker-psychological-fan-art-poster',
    'knife-in-water-polanski-poster',
    'ford-car-tribute-poster',
    'maaveeran-tamil-film-poster',
    'retro-suriya-vintage-poster',
    'gta-vi-vice-city-poster',
    'goat-vijay-comic-style-poster',
    'royal-enfield-hunter-350-poster',
    'kaal-mela-kaalu-street-poster'
  ].map(slug => ({
    url: `${baseUrl}/poster/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...posterUrls
  ]
}
