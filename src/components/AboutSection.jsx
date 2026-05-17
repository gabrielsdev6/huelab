import { Blend, Palette, Eye, Link, Download, ShieldCheck, ArrowDown } from 'lucide-react'
import styles from './AboutSection.module.css'

const FEATURES = [
  { icon: Blend,       title: 'Gerador de Gradiente', desc: 'Linear, radial e cônico com até 4 cores, controle de ângulo e geração aleatória.' },
  { icon: Palette,     title: 'Paleta de Cores',       desc: 'Gere 5 cores harmônicas a partir de uma cor base com 4 tipos de harmonia.' },
  { icon: Eye,         title: 'Preview ao Vivo',        desc: 'Veja suas cores aplicadas em componentes reais: navbar, card e botão.' },
  { icon: Download,    title: 'Múltiplos Formatos',     desc: 'Exporte como CSS puro, variáveis CSS, classes Tailwind ou objeto JavaScript.' },
  { icon: ShieldCheck, title: 'Contraste WCAG',         desc: 'Checagem automática de acessibilidade com ratings AA, AAA e Fail.' },
  { icon: Link,        title: 'URL Compartilhável',     desc: 'Cada combinação gera uma URL única para compartilhar seu design com qualquer pessoa.' },
]

const STACK = ['React 18', 'Vite', 'chroma.js', 'Lucide Icons', 'CSS Modules']

export function AboutHero() {
  return (
    <section className={styles.intro} aria-label="Introdução">
      <p className={styles.eyebrow}>Ferramenta open-source para devs e designers</p>
      <h2 className={styles.heading}>Crie paletas e gradientes prontos para produção</h2>
      <p className={styles.text}>
        Gere, visualize e exporte gradientes e paletas de cores em tempo real.
        Tudo roda no browser — sem backend, sem conta, sem dados salvos.
      </p>
      <a href="#main-content" className={styles.cta} aria-label="Começar a usar a ferramenta">
        Começar agora <ArrowDown size={16} aria-hidden="true" />
      </a>
    </section>
  )
}

export function AboutFeatures() {
  return (
    <section className={styles.wrap} aria-label="Funcionalidades">
      <div className={styles.grid}>
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <div key={title} className={styles.card}>
            <span className={styles.iconWrap} aria-hidden="true">
              <Icon size={20} strokeWidth={1.8} />
            </span>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{desc}</p>
          </div>
        ))}
      </div>

      <div className={styles.stack}>
        <span className={styles.stackLabel}>Feito com</span>
        {STACK.map(s => (
          <span key={s} className={styles.badge}>{s}</span>
        ))}
      </div>
    </section>
  )
}
