import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/private/'
      ],
    },
    sitemap: 'https://otavaayi-design.com/sitemap.xml',
    host: 'https://otavaayi-design.com'
  }
}
