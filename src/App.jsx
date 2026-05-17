import { useEffect, useRef, useState } from 'react'
import { Palette, Share2, Check } from 'lucide-react'
import { useGradient } from './hooks/useGradient'
import { usePalette } from './hooks/usePalette'
import { GradientGenerator } from './components/GradientGenerator'
import { PaletteGenerator } from './components/PaletteGenerator'
import { LivePreview } from './components/LivePreview'
import { GradientPresets } from './components/GradientPresets'
import { GradientHistory } from './components/GradientHistory'
import { AboutHero, AboutFeatures } from './components/AboutSection'
import { parseUrlState, pushState } from './utils/url'
import styles from './App.module.css'

const MAX_HISTORY = 6

export default function App() {
  const urlState = useRef(parseUrlState())
  const gradient = useGradient(urlState.current.gradient ?? {})
  const palette  = usePalette(urlState.current.palette ?? {})

  const [history, setHistory]   = useState([])
  const [shareCopied, setShareCopied] = useState(false)

  // Sync URL and history on state change
  useEffect(() => {
    pushState(gradient, palette)
    setHistory(prev => {
      const entry = { css: gradient.css, colors: gradient.colors, type: gradient.type, angle: gradient.angle }
      const filtered = prev.filter(h => h.css !== entry.css)
      return [entry, ...filtered].slice(0, MAX_HISTORY)
    })
  }, [gradient.css, palette.baseColor, palette.harmony])

  function applyPreset(preset) {
    gradient.applyPreset(preset)
  }

  function restoreHistory(entry) {
    gradient.applyPreset(entry)
  }

  function shareUrl() {
    navigator.clipboard.writeText(window.location.href)
    setShareCopied(true)
    setTimeout(() => setShareCopied(false), 2000)
  }

  return (
    <div className={styles.root}>
      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>

      <header className={styles.header}>
        <div className={styles.logoRow}>
          <span className={styles.logoIcon} aria-hidden="true">
            <Palette size={28} strokeWidth={2} />
          </span>
          <h1 className={styles.logo}>HueLab</h1>
        </div>
        <p className={styles.tagline}>Gradient &amp; Palette Generator</p>

        <button
          className={`${styles.shareBtn} ${shareCopied ? styles.copied : ''}`}
          onClick={shareUrl}
          aria-label="Copiar link para compartilhar"
        >
          {shareCopied
            ? <><Check size={14} aria-hidden="true" /> Link copiado!</>
            : <><Share2 size={14} aria-hidden="true" /> Compartilhar</>
          }
        </button>
      </header>

      <AboutHero />

      <GradientPresets onApply={applyPreset} />

      <main id="main-content" className={styles.grid}>
        <GradientGenerator {...gradient} />
        <PaletteGenerator  {...palette} />
        <LivePreview gradientCss={gradient.css} palette={palette.palette} />
      </main>

      <GradientHistory history={history} onRestore={restoreHistory} />

      <AboutFeatures />

      <footer className={styles.footer}>
        Desenvolvido por{' '}
        <a
          href="https://github.com/gabrielsdev6"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Gabriel Pereira
        </a>
        {' '}· React + chroma.js
      </footer>
    </div>
  )
}
