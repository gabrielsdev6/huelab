import { useState } from 'react'
import { Copy, Check, Shuffle } from 'lucide-react'
import { ContrastChecker } from './ContrastChecker'
import styles from './PaletteGenerator.module.css'

export function PaletteGenerator({ baseColor, setBaseColor, harmony, setHarmony, palette, randomize, HARMONIES }) {
  const [copiedIndex, setCopiedIndex] = useState(null)

  function copyColor(hex, index) {
    navigator.clipboard.writeText(hex)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Paleta</h2>
        <button
          className={styles.iconBtn}
          onClick={randomize}
          aria-label="Gerar paleta aleatória"
        >
          <Shuffle size={16} aria-hidden="true" />
        </button>
      </div>

      <div className={styles.section}>
        <label className={styles.label} htmlFor="base-color">Cor base</label>
        <div className={styles.baseRow}>
          <input
            id="base-color"
            type="color"
            value={baseColor}
            onChange={e => setBaseColor(e.target.value)}
            className={styles.colorInput}
            aria-label={`Cor base: ${baseColor.toUpperCase()}`}
          />
          <span className={styles.hex} aria-hidden="true">{baseColor.toUpperCase()}</span>
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.label} id="harmony-label">Harmonia</span>
        <div className={styles.harmonyGroup} role="group" aria-labelledby="harmony-label">
          {HARMONIES.map(h => (
            <button
              key={h}
              className={`${styles.harmonyBtn} ${harmony === h ? styles.active : ''}`}
              onClick={() => setHarmony(h)}
              aria-pressed={harmony === h}
            >
              {h.charAt(0).toUpperCase() + h.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.label} id="swatches-label">Cores geradas</span>
        <div className={styles.swatchList} role="list" aria-labelledby="swatches-label">
          {palette.map((color, i) => (
            <button
              key={i}
              role="listitem"
              className={styles.swatch}
              style={{ background: color }}
              onClick={() => copyColor(color, i)}
              aria-label={`${copiedIndex === i ? 'Copiado' : 'Copiar'} cor ${color.toUpperCase()}`}
              aria-live="polite"
            >
              <span className={styles.swatchHex} aria-hidden="true">{color.toUpperCase()}</span>
              <span className={styles.swatchIcon} aria-hidden="true">
                {copiedIndex === i ? <Check size={12} /> : <Copy size={12} />}
              </span>
            </button>
          ))}
        </div>
      </div>

      <ContrastChecker palette={palette} />
    </div>
  )
}
