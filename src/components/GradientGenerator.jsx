import { useState } from 'react'
import { Plus, Trash2, Shuffle, Copy, Check } from 'lucide-react'
import { ExportFormats } from './ExportFormats'
import styles from './GradientGenerator.module.css'

export function GradientGenerator({ colors, type, angle, css, updateColor, addColor, removeColor, setType, setAngle, randomize }) {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(`background: ${css};`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Gradiente</h2>
        <button
          className={styles.iconBtn}
          onClick={randomize}
          aria-label="Gerar gradiente aleatório"
        >
          <Shuffle size={16} aria-hidden="true" />
        </button>
      </div>

      <div className={styles.preview} style={{ background: css }} aria-hidden="true" />

      <div className={styles.cssSnippet}>
        <code className={styles.cssCode}>background: {css};</code>
      </div>

      <div className={styles.section}>
        <span className={styles.label} id="colors-label">Cores</span>
        <div className={styles.colorList} role="list" aria-labelledby="colors-label">
          {colors.map((color, i) => (
            <div key={i} className={styles.colorRow} role="listitem">
              <input
                type="color"
                value={color}
                onChange={e => updateColor(i, e.target.value)}
                className={styles.colorInput}
                aria-label={`Cor ${i + 1}: ${color.toUpperCase()}`}
              />
              <span className={styles.hex} aria-hidden="true">{color.toUpperCase()}</span>
              {colors.length > 2 && (
                <button
                  className={styles.removeBtn}
                  onClick={() => removeColor(i)}
                  aria-label={`Remover cor ${i + 1}`}
                >
                  <Trash2 size={14} aria-hidden="true" />
                </button>
              )}
            </div>
          ))}
          {colors.length < 4 && (
            <button className={styles.addBtn} onClick={addColor}>
              <Plus size={14} aria-hidden="true" /> Adicionar cor
            </button>
          )}
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.label} id="type-label">Tipo</span>
        <div className={styles.typeGroup} role="group" aria-labelledby="type-label">
          {['linear', 'radial', 'conic'].map(t => (
            <button
              key={t}
              className={`${styles.typeBtn} ${type === t ? styles.active : ''}`}
              onClick={() => setType(t)}
              aria-pressed={type === t}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {type === 'linear' && (
        <div className={styles.section}>
          <label className={styles.label} htmlFor="angle-slider">Ângulo — {angle}°</label>
          <input
            id="angle-slider"
            type="range"
            min={0}
            max={360}
            value={angle}
            onChange={e => setAngle(Number(e.target.value))}
            className={styles.slider}
            aria-valuetext={`${angle} graus`}
          />
        </div>
      )}

      <button
        className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
        onClick={copy}
        aria-live="polite"
      >
        {copied
          ? <><Check size={15} aria-hidden="true" /> Copiado!</>
          : <><Copy size={15} aria-hidden="true" /> Copiar CSS</>
        }
      </button>

      <ExportFormats css={css} colors={colors} type={type} angle={angle} />
    </div>
  )
}
