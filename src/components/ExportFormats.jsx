import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import styles from './ExportFormats.module.css'

const FORMATS = ['CSS', 'Tailwind', 'Vars', 'JS']

function buildOutput(format, css, colors, type, angle) {
  if (format === 'CSS') return `background: ${css};`

  if (format === 'Tailwind') {
    const stops = colors.map((c, i) => {
      if (i === 0) return `from-[${c}]`
      if (i === colors.length - 1) return `to-[${c}]`
      return `via-[${c}]`
    }).join(' ')
    return `bg-gradient-to-br ${stops}`
  }

  if (format === 'Vars') {
    const vars = colors.map((c, i) => `  --gradient-color-${i + 1}: ${c};`).join('\n')
    return `:root {\n${vars}\n  --gradient: ${css};\n}`
  }

  if (format === 'JS') {
    return `const gradient = {\n  colors: ${JSON.stringify(colors)},\n  type: '${type}',\n  angle: ${angle},\n  css: '${css}',\n}`
  }

  return css
}

export function ExportFormats({ css, colors, type, angle }) {
  const [format, setFormat] = useState('CSS')
  const [copied, setCopied] = useState(false)

  const output = buildOutput(format, css, colors, type, angle)

  function copy() {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <span className={styles.label}>Exportar como</span>
        <div className={styles.tabs} role="group" aria-label="Formato de exportação">
          {FORMATS.map(f => (
            <button
              key={f}
              className={`${styles.tab} ${format === f ? styles.active : ''}`}
              onClick={() => setFormat(f)}
              aria-pressed={format === f}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.codeBlock}>
        <pre className={styles.code}>{output}</pre>
        <button className={`${styles.copyBtn} ${copied ? styles.copied : ''}`} onClick={copy} aria-label="Copiar código">
          {copied ? <Check size={13} aria-hidden="true" /> : <Copy size={13} aria-hidden="true" />}
        </button>
      </div>
    </div>
  )
}
