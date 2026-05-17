# 🎨 HueLab — Gerador de Gradientes e Paletas

Ferramenta interativa para designers e desenvolvedores criarem gradientes e paletas de cores com visualização em tempo real — pronto para uso em produção.

**[Ver Demo →](https://huelab.vercel.app)**

---

## Funcionalidades

- **Gerador de Gradiente** — Linear, radial e cônico com 2 a 4 cores, controle de ângulo e geração aleatória
- **Gerador de Paleta** — 5 cores harmônicas a partir de uma cor base com 4 tipos de harmonia (complementar, análoga, triádica, monocromática)
- **Preview ao Vivo** — Visualize as cores aplicadas em componentes reais (navbar, hero, card, botões) com toggle claro/escuro
- **Múltiplos Formatos de Export** — Copie como CSS puro, variáveis CSS, classes Tailwind ou objeto JavaScript
- **Verificador de Contraste WCAG** — Rating automático de acessibilidade (AA / AAA / Fail) para cada par de cores
- **URL Compartilhável** — Cada combinação gera uma URL única para compartilhar seu design
- **Galeria de Presets** — 12 gradientes prontos para inspiração rápida
- **Histórico de Sessão** — Últimos 6 gradientes gerados salvos como miniaturas, clique para restaurar

## Tecnologias

| | |
|---|---|
| Framework | React 18 + Vite |
| Lógica de cores | chroma.js |
| Ícones | Lucide React |
| Estilos | CSS Modules |
| Deploy | Vercel |

## Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/gabrielsdev6/huelab.git
cd huelab

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## Build para Produção

```bash
npm run build
```

## Estrutura do Projeto

```
src/
├── components/        # Componentes de UI
│   ├── GradientGenerator
│   ├── PaletteGenerator
│   ├── LivePreview
│   ├── ExportFormats
│   ├── ContrastChecker
│   ├── GradientPresets
│   ├── GradientHistory
│   └── AboutSection
├── hooks/             # useGradient, usePalette
├── utils/             # colors, contrast, url
└── data/              # presets de gradiente
```

## Autor

Desenvolvido por **Gabriel Pereira** — [@gabrielsdev6](https://github.com/gabrielsdev6)

---

*Feito com React + chroma.js*
