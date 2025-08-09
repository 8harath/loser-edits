import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Kishore K - Visual Storyteller | Otavaayi Design Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #F8F6F0 0%, #C41E3A 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '80px',
        }}
      >
        {/* Main Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: '#1C1C1C',
            marginBottom: 20,
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          KISHORE K
        </div>
        
        {/* Subtitle */}
        <div
          style={{
            fontSize: 36,
            color: '#C41E3A',
            fontWeight: 700,
            marginBottom: 30,
          }}
        >
          VISUAL STORYTELLER
        </div>
        
        {/* Brand */}
        <div
          style={{
            fontSize: 28,
            color: '#8B8680',
            fontWeight: 600,
            marginBottom: 40,
          }}
        >
          OTAVAAYI DESIGN
        </div>
        
        {/* Specializations */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 15,
            justifyContent: 'center',
            maxWidth: 800,
          }}
        >
          {['Tamil Cinema Posters', 'Music Album Artwork', 'Visual Storytelling'].map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: 'rgba(196, 30, 58, 0.1)',
                color: '#C41E3A',
                padding: '8px 16px',
                borderRadius: 20,
                fontSize: 18,
                fontWeight: 500,
                border: '1px solid rgba(196, 30, 58, 0.3)',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
