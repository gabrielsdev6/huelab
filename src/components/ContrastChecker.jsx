import { getPaletteContrasts } from '../utils/contrast'
import styles from './ContrastChecker.module.css'

export function ContrastChecker({ palette }) {
  const pairs = getPaletteContrasts(palette)

  return (
    <div className={styles.wrap}>
      <span className={styles.title}>Contraste WCAG</span>
      <div className={styles.list}>
        {pairs.map(({ a, b, ratio, level }, i) => (
          <div key={i} className={styles.row} aria-label={`Contraste entre cor ${i+1} e ${i+2}: ${ratio}:1, nível ${level.label}`}>
            <div className={styles.swatches}>
              <span className={styles.dot} style={{ background: a }} />
              <span className={styles.dot} style={{ background: b }} />
            </div>
            <span className={styles.ratio}>{ratio}:1</span>
            <span className={styles.badge} style={{ color: level.color, borderColor: level.color }}>
              {level.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
