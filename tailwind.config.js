/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // --- Fundo: "modo escuro científico" ---
        void: '#0f1410',      // grafite profundo, fundo principal
        panel: '#151c16',     // painéis / cards
        panel2: '#1b241c',    // painéis elevados / hover
        line: '#2a342b',      // divisores sutis

        // --- Destaques: Ciência & Caatinga ---
        clay: '#c86d51',      // terracota / argila do sertão
        'clay-soft': '#e0937a',
        cactus: '#34d399',    // verde sertão / cacto
        'cactus-deep': '#0f7a5c',
        spectra: '#22d3ee',   // ciano neon — espectrometria / dados

        // --- Texto ---
        bone: '#f2ede2',      // branco quente
        sand: '#c9c2b2',      // texto secundário
        muted: '#7d8577',     // texto terciário / legendas
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(52, 211, 153, 0.35)',
        'glow-clay': '0 0 40px -10px rgba(200, 109, 81, 0.35)',
      },
    },
  },
  plugins: [],
}
