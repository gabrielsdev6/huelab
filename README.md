# 🎨 HueLab — Gradient & Palette Generator

A interactive tool for designers and developers to generate gradients and color palettes with real-time preview — ready for production use.

**[Live Demo →](https://huelab.vercel.app)**

---

## Features

- **Gradient Generator** — Linear, radial and conic gradients with 2–4 colors, angle control and randomize
- **Palette Generator** — 5 harmonic colors from a base color with 4 harmony types (complementary, analogous, triadic, monochromatic)
- **Live Preview** — See colors applied on real UI components (navbar, hero, card, buttons) with dark/light toggle
- **Multiple Export Formats** — Copy as plain CSS, CSS custom properties, Tailwind classes or JavaScript object
- **WCAG Contrast Checker** — Automatic accessibility rating (AA / AAA / Fail) for every color pair
- **Shareable URL** — Every combination generates a unique URL to share your design
- **Preset Gallery** — 12 handcrafted gradient presets for quick inspiration
- **Session History** — Last 6 generated gradients saved as thumbnails, click to restore

## Tech Stack

| | |
|---|---|
| Framework | React 18 + Vite |
| Color logic | chroma.js |
| Icons | Lucide React |
| Styling | CSS Modules |
| Deploy | Vercel |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/gabrielsdev6/huelab.git
cd huelab

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/        # UI components
│   ├── GradientGenerator
│   ├── PaletteGenerator
│   ├── LivePreview
│   ├── ExportFormats
│   ├── ContrastChecker
│   ├── GradientPresets
│   ├── GradientHistory
│   └── AboutSection
├── hooks/             # useGradient, usePalette
├── utils/             # colors, contrast, url helpers
└── data/              # gradient presets
```

## Author

**Gabriel Pereira** — [@gabrielsdev6](https://github.com/gabrielsdev6)

---

*Built with React + chroma.js*
