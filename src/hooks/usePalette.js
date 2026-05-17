import { useState, useMemo } from 'react'
import chroma from 'chroma-js'
import { randomHex } from '../utils/colors'

const HARMONIES = ['complementar', 'análoga', 'triádica', 'monocromática']

function generatePalette(baseColor, harmony) {
  try {
    const h = chroma(baseColor).hsl()[0] || 0
    const hues = {
      complementar:  [h, (h+180)%360, (h+30)%360, (h+210)%360, (h+60)%360],
      análoga:       [h, (h+30)%360,  (h+60)%360,  (h-30+360)%360, (h-60+360)%360],
      triádica:      [h, (h+120)%360, (h+240)%360, (h+60)%360, (h+180)%360],
      monocromática: [h, h, h, h, h],
    }
    const lightness = {
      complementar:  [0.55, 0.55, 0.65, 0.65, 0.45],
      análoga:       [0.55, 0.60, 0.65, 0.50, 0.45],
      triádica:      [0.55, 0.55, 0.55, 0.65, 0.45],
      monocromática: [0.30, 0.45, 0.55, 0.65, 0.78],
    }
    const sat = harmony === 'monocromática' ? 0.5 : 0.65
    return hues[harmony].map((hue, i) => chroma.hsl(hue, sat, lightness[harmony][i]).hex())
  } catch {
    return Array.from({ length: 5 }, randomHex)
  }
}

export function usePalette(initial = {}) {
  const [baseColor, setBaseColor] = useState(initial.baseColor ?? '#6366f1')
  const [harmony,   setHarmony]   = useState(initial.harmony   ?? 'complementar')

  const palette = useMemo(() => generatePalette(baseColor, harmony), [baseColor, harmony])

  function randomize() {
    setBaseColor(randomHex())
    setHarmony(HARMONIES[Math.floor(Math.random() * HARMONIES.length)])
  }

  return { baseColor, setBaseColor, harmony, setHarmony, palette, randomize, HARMONIES }
}
