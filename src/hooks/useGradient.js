import { useState } from 'react'
import { randomHex, buildGradientCSS } from '../utils/colors'

const DEFAULT = { colors: ['#6366f1', '#ec4899'], type: 'linear', angle: 135 }

export function useGradient(initial = {}) {
  const [colors, setColors] = useState(initial.colors ?? DEFAULT.colors)
  const [type,   setType]   = useState(initial.type   ?? DEFAULT.type)
  const [angle,  setAngle]  = useState(initial.angle  ?? DEFAULT.angle)

  const css = buildGradientCSS({ colors, type, angle })

  function updateColor(index, value) {
    setColors(prev => prev.map((c, i) => (i === index ? value : c)))
  }

  function addColor() {
    if (colors.length >= 4) return
    setColors(prev => [...prev, randomHex()])
  }

  function removeColor(index) {
    if (colors.length <= 2) return
    setColors(prev => prev.filter((_, i) => i !== index))
  }

  function applyPreset({ colors: c, type: t, angle: a }) {
    setColors(c)
    setType(t)
    setAngle(a)
  }

  function randomize() {
    const count = Math.floor(Math.random() * 3) + 2
    setColors(Array.from({ length: count }, randomHex))
    setAngle(Math.floor(Math.random() * 360))
    setType(['linear', 'radial', 'conic'][Math.floor(Math.random() * 3)])
  }

  return { colors, type, angle, css, updateColor, addColor, removeColor, setType, setAngle, randomize, applyPreset }
}
