import { motion } from 'framer-motion'

/**
 * ChromatogramArt — composição visual abstrata que combina:
 * 1) uma curva cromatográfica animada (picos de intensidade x tempo de retenção)
 * 2) nós moleculares conectados por ligações, lembrando estruturas de metabólitos secundários
 *
 * Usado como pano de fundo do Hero, sobre a textura escura "laboratorial".
 */
export default function ChromatogramArt() {
  const molecules = [
    { cx: 620, cy: 90 }, { cx: 690, cy: 60 }, { cx: 750, cy: 110 },
    { cx: 700, cy: 170 }, { cx: 630, cy: 160 }, { cx: 560, cy: 130 },
  ]
  const bonds = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[3,2]]

  return (
    <svg
      viewBox="0 0 800 420"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="peak-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="peak-fill-2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Linha de base do cromatograma */}
      <line x1="20" y1="360" x2="780" y2="360" stroke="#2a342b" strokeWidth="1" />

      {/* Curva cromatográfica principal — vários picos de resolução */}
      <motion.path
        d="M 20 360 C 80 358, 110 355, 140 350
           C 170 340, 185 260, 210 260
           C 235 260, 250 340, 280 355
           C 320 358, 340 356, 360 350
           C 385 330, 400 150, 425 150
           C 450 150, 465 330, 500 353
           C 540 357, 560 354, 590 340
           C 610 320, 622 200, 640 200
           C 658 200, 668 320, 690 348
           C 715 356, 740 358, 780 360"
        fill="none"
        stroke="#34d399"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: 'easeOut' }}
      />

      {/* Preenchimento suave sob o pico principal (destaque analítico) */}
      <motion.path
        d="M 360 350 C 385 330, 400 150, 425 150 C 450 150, 465 330, 500 353 L 500 360 L 360 360 Z"
        fill="url(#peak-fill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      />
      <motion.path
        d="M 590 340 C 610 320, 622 200, 640 200 C 658 200, 668 320, 690 348 L 690 360 L 590 360 Z"
        fill="url(#peak-fill-2)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />

      {/* Rótulos tipo dado de laboratório */}
      <text x="418" y="135" fontSize="9" fill="#7d8577" fontFamily="JetBrains Mono, monospace">
        Rt 8.42 · m/z 342.1
      </text>
      <text x="630" y="185" fontSize="9" fill="#7d8577" fontFamily="JetBrains Mono, monospace">
        Rt 12.07 · m/z 194.6
      </text>

      {/* Estrutura molecular estilizada (nós + ligações) flutuando no canto */}
      <g>
        {bonds.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={molecules[a].cx} y1={molecules[a].cy}
            x2={molecules[b].cx} y2={molecules[b].cy}
            stroke="#c86d51"
            strokeWidth="1.4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55 }}
            transition={{ delay: 1.6 + i * 0.08, duration: 0.6 }}
          />
        ))}
        {molecules.map((m, i) => (
          <motion.circle
            key={i}
            cx={m.cx} cy={m.cy} r={i % 2 === 0 ? 5 : 3.5}
            fill={i % 2 === 0 ? '#c86d51' : '#f2ede2'}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 + i * 0.08, duration: 0.4 }}
          />
        ))}
      </g>
    </svg>
  )
}
