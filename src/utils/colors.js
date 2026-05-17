export function randomHex() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')
}

export function buildGradientCSS({ colors, type, angle }) {
  const stops = colors.join(', ')
  if (type === 'radial') return `radial-gradient(circle, ${stops})`
  if (type === 'conic') return `conic-gradient(from ${angle}deg, ${stops})`
  return `linear-gradient(${angle}deg, ${stops})`
}
