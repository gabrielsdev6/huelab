import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import styles from './LivePreview.module.css'

export function LivePreview({ gradientCss, palette }) {
  const [dark, setDark] = useState(true)

  const navBg      = palette[0] ?? '#1E293B'
  const accent     = palette[2] ?? '#22C55E'
  const chip1      = palette[1] ?? '#6366f1'
  const chip2      = palette[3] ?? '#ec4899'
  const cardHeader = `linear-gradient(135deg, ${palette[0] ?? '#6366f1'}, ${palette[4] ?? '#ec4899'})`

  const bodyBg    = dark ? 'rgba(0,0,0,0.4)' : '#f1f5f9'
  const cardBg    = dark ? 'rgba(255,255,255,0.05)' : '#ffffff'
  const cardBorder= dark ? 'rgba(255,255,255,0.08)' : '#e2e8f0'
  const titleColor= dark ? '#f1f0ff' : '#0f172a'
  const textColor = dark ? '#a09cc0'  : '#64748b'

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Preview ao Vivo</h2>
        <button
          className={styles.toggleBtn}
          onClick={() => setDark(d => !d)}
          aria-label={dark ? 'Mudar para fundo claro' : 'Mudar para fundo escuro'}
        >
          {dark
            ? <Sun size={15} aria-hidden="true" />
            : <Moon size={15} aria-hidden="true" />
          }
          {dark ? 'Claro' : 'Escuro'}
        </button>
      </div>

      <div className={styles.mockup}>
        <div className={styles.navbar} style={{ background: navBg }}>
          <span className={styles.navBrand}>MyApp</span>
          <div className={styles.navLinks}>
            <span>Início</span>
            <span>Sobre</span>
            <span>Contato</span>
          </div>
        </div>

        <div className={styles.body} style={{ background: bodyBg }}>
          <div className={styles.heroStrip} style={{ background: gradientCss }}>
            <p className={styles.heroText}>Bem-vindo</p>
            <button className={styles.heroBtn} style={{ background: accent, color: '#07060f' }}>
              Começar
            </button>
          </div>

          <div className={styles.chips}>
            <span className={styles.chip} style={{ background: chip1 }}>Design</span>
            <span className={styles.chip} style={{ background: chip2 }}>Cores</span>
            <span className={styles.chip} style={{ background: accent, color: '#07060f' }}>UI</span>
          </div>

          <div className={styles.mockCard} style={{ background: cardBg, borderColor: cardBorder }}>
            <div className={styles.mockCardHeader} style={{ background: cardHeader }} />
            <div className={styles.mockCardBody}>
              <p className={styles.mockCardTitle} style={{ color: titleColor }}>Componente Real</p>
              <p className={styles.mockCardText} style={{ color: textColor }}>
                Veja como seu gradiente e paleta ficam em elementos de UI.
              </p>
              <button className={styles.mockBtn} style={{ background: accent, color: '#07060f' }}>
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
