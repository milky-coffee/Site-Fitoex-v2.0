import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * SpectralTrace — o elemento de assinatura visual da FitoEx.
 *
 * Em vez de um marcador decorativo (ex: barra de progresso genérica),
 * este componente é um traço de cromatograma/espectro de massas real:
 * uma linha vertical fixa na borda esquerda da tela cujo "sinal" (os picos)
 * corresponde exatamente às seções da página. Conforme o usuário rola,
 * o traço se desenha e um marcador percorre o eixo — como uma corrida
 * cromatográfica em tempo real, onde cada pico é um capítulo do conteúdo.
 *
 * As props `sections` definem rótulo (m/z ou Rt simulado) e âncora de cada pico.
 */
export default function SpectralTrace({ sections }) {
  const { scrollYProgress } = useScroll()
  const pathLength = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.3 })
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const handler = () => {
      const scrolled = window.scrollY
      const doc = document.documentElement
      const total = doc.scrollHeight - doc.clientHeight
      const progress = total > 0 ? scrolled / total : 0
      const idx = Math.min(
        sections.length - 1,
        Math.floor(progress * sections.length)
      )
      setActiveIndex(idx)
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [sections.length])

  // Gera um caminho SVG tipo "espectro" com um pico por seção
  const height = 100 // viewBox height (percentual, escalado por viewBox)
  const step = height / sections.length
  let d = `M 4 0`
  sections.forEach((_, i) => {
    const yBase = i * step
    const yPeakTop = yBase + step * 0.28
    const yPeakBottom = yBase + step * 0.62
    d += ` L 4 ${yPeakTop}`
    d += ` L 16 ${yBase + step * 0.42}`
    d += ` L 4 ${yPeakBottom}`
  })
  d += ` L 4 ${height}`

  return (
    <div
      ref={containerRef}
      className="fixed left-0 top-0 z-40 hidden h-screen w-14 lg:flex"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 20 100"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        {/* Trilho base (sinal completo, tênue) */}
        <path
          d={d}
          fill="none"
          stroke="#2a342b"
          strokeWidth="0.6"
          vectorEffect="non-scaling-stroke"
        />
        {/* Traço ativo — desenhado progressivamente conforme o scroll */}
        <motion.path
          d={d}
          fill="none"
          stroke="url(#spectral-gradient)"
          strokeWidth="1"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
        <defs>
          <linearGradient id="spectral-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#c86d51" />
          </linearGradient>
        </defs>

        {/* Marcadores de pico ativo com rótulo tipo m/z */}
        {sections.map((s, i) => {
          const y = i * step + step * 0.42
          const isActive = i === activeIndex
          return (
            <g key={s.id}>
              <motion.circle
                cx="16"
                cy={y}
                r={isActive ? 1.6 : 0.9}
                fill={isActive ? '#f2ede2' : '#7d8577'}
                animate={{ opacity: isActive ? 1 : 0.5 }}
              />
            </g>
          )
        })}
      </svg>

      {/* Rótulo textual do pico ativo, estilo dado de laboratório */}
      <div className="pointer-events-none absolute left-16 top-1/2 -translate-y-1/2">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="whitespace-nowrap font-mono text-[10px] uppercase tracking-widest text-muted"
        >
          {sections[activeIndex]?.tag}
        </motion.div>
      </div>
    </div>
  )
}
