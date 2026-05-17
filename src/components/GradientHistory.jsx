import styles from './GradientHistory.module.css'

export function GradientHistory({ history, onRestore }) {
  if (history.length === 0) return null

  return (
    <section className={styles.wrap} aria-label="Histórico de gradientes">
      <span className={styles.label}>Histórico</span>
      <div className={styles.list} role="list">
        {history.map((entry, i) => (
          <button
            key={i}
            role="listitem"
            className={styles.item}
            style={{ background: entry.css }}
            onClick={() => onRestore(entry)}
            aria-label={`Restaurar gradiente ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
