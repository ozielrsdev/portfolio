import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

// Prévia de link (LinkedIn, WhatsApp, X...). Cores fixas em hex porque o renderizador do next/og não lê CSS variables;
// os valores espelham os tokens do tema escuro (DESIGN_SYSTEM.md).
const COLORS = {
  background: '#0c0a09',
  card: '#1c1917',
  foreground: '#fafaf9',
  muted: '#a8a29e',
  primary: '#4ade80',
  highlight: '#facc15',
  border: '#292524',
}

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_ALT = 'Oziel Sousa, desenvolvedor full-stack: React, Node.js e TypeScript'

const asset = (path: string) => readFile(join(process.cwd(), 'src/assets', path))

// Lidos uma vez no carregamento do módulo; não dependem da requisição.
const [condensedBold, regular, semiBold, photo] = await Promise.all([
  asset('fonts/BarlowCondensed-Bold.ttf'),
  asset('fonts/Barlow-Regular.ttf'),
  asset('fonts/Barlow-SemiBold.ttf'),
  asset('oziel-sousa.jpg'),
])
const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: COLORS.background,
          color: COLORS.foreground,
          fontFamily: 'Barlow',
        }}
      >
        <div
          style={{
            height: 18,
            width: '100%',
            backgroundImage: `repeating-linear-gradient(-45deg, ${COLORS.highlight} 0 22px, ${COLORS.background} 22px 44px)`,
          }}
        />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 80px', gap: 64 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 28, color: COLORS.muted }}>
              <div style={{ width: 48, height: 6, borderRadius: 3, background: COLORS.highlight }} />
              DESENVOLVEDOR FULL-STACK · GOIÂNIA, GO
            </div>
            <div
              style={{
                fontFamily: 'Barlow Condensed',
                fontSize: 148,
                lineHeight: 0.95,
                marginTop: 18,
                textTransform: 'uppercase',
              }}
            >
              Oziel Sousa
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: 38, fontWeight: 600, lineHeight: 1.25, marginTop: 24 }}>
              <span>Crio software que tira o trabalho repetitivo do caminho.</span>
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
              {['React', 'Node.js', 'TypeScript'].map((tech) => (
                <div
                  key={tech}
                  style={{
                    display: 'flex',
                    fontSize: 26,
                    padding: '8px 18px',
                    borderRadius: 8,
                    border: `2px solid ${COLORS.border}`,
                    background: COLORS.card,
                  }}
                >
                  {tech}
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', fontSize: 26, color: COLORS.primary, marginLeft: 12 }}>
                ozieldev.vercel.app
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', position: 'relative', width: 300, height: 300 }}>
            <div
              style={{
                position: 'absolute',
                top: 16,
                left: 16,
                width: 300,
                height: 300,
                borderRadius: 24,
                background: COLORS.highlight,
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element -- next/og só aceita <img> */}
            <img src={photoSrc} width={300} height={300} alt="" style={{ borderRadius: 24, objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: 'Barlow Condensed', data: condensedBold, weight: 700, style: 'normal' },
        { name: 'Barlow', data: regular, weight: 400, style: 'normal' },
        { name: 'Barlow', data: semiBold, weight: 600, style: 'normal' },
      ],
    },
  )
}
