import { GRADIENT_PRESETS } from '../data/presets'
import { buildGradientCSS } from '../utils/colors'
import styles from './GradientPresets.module.css'

export function GradientPresets({ onApply }) {
  return (
    <section className={styles.wrap} aria-label="Presets de gradiente">
      <span className={styles.label}>Presets</span>
      <div className={styles.list} role="list">
        {GRADIENT_PRESETS.map(preset => (
          <button
            key={preset.name}
            role="listitem"
            className={styles.item}
            style={{ background: buildGradientCSS(preset) }}
            onClick={() => onApply(preset)}
            aria-label={`Aplicar preset ${preset.name}`}
          >
            <span className={styles.name}>{preset.name}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
