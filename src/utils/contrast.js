import chroma from 'chroma-js'

export function wcagRatio(c1, c2) {
  try { return Math.round(chroma.contrast(c1, c2) * 10) / 10 }
  catch { return 1 }
}

export function wcagLevel(ratio) {
  if (ratio >= 7)   return { label: 'AAA', color: '#4ade80' }
  if (ratio >= 4.5) return { label: 'AA',  color: '#a3e635' }
  if (ratio >= 3)   return { label: 'AA*', color: '#facc15' }
  return              { label: 'Fail', color: '#f87171' }
}

export function getPaletteContrasts(palette) {
  const pairs = []
  for (let i = 0; i < palette.length - 1; i++) {
    const ratio = wcagRatio(palette[i], palette[i + 1])
    pairs.push({ a: palette[i], b: palette[i + 1], ratio, level: wcagLevel(ratio) })
  }
  return pairs
}
