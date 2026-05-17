const HARMONIES = ['complementar', 'análoga', 'triádica', 'monocromática']

export function parseUrlState() {
  const params = new URLSearchParams(window.location.search)
  const g = params.get('g')
  const p = params.get('p')

  let gradient = null
  let palette = null

  if (g) {
    try {
      const parts = g.split(',')
      const angle = parseInt(parts[parts.length - 1])
      const type = parts[parts.length - 2]
      const colors = parts.slice(0, -2).map(c => '#' + c)
      if (colors.length >= 2 && ['linear','radial','conic'].includes(type)) {
        gradient = { colors, type, angle: isNaN(angle) ? 135 : angle }
      }
    } catch {}
  }

  if (p) {
    try {
      const [base, harmonyIdx] = p.split(',')
      const harmony = HARMONIES[parseInt(harmonyIdx)] ?? HARMONIES[0]
      palette = { baseColor: '#' + base, harmony }
    } catch {}
  }

  return { gradient, palette }
}

export function buildUrl(gradient, palette) {
  const gStr = [
    ...gradient.colors.map(c => c.replace('#', '')),
    gradient.type,
    gradient.angle
  ].join(',')
  const pStr = [
    palette.baseColor.replace('#', ''),
    HARMONIES.indexOf(palette.harmony)
  ].join(',')
  const url = new URL(window.location.href)
  url.searchParams.set('g', gStr)
  url.searchParams.set('p', pStr)
  return url.toString()
}

export function pushState(gradient, palette) {
  window.history.replaceState({}, '', buildUrl(gradient, palette))
}
