import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Beaker } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'

// Gera um caminho de "pico" pseudo-aleatório determinístico por seed,
// simulando um perfil cromatográfico/espectral único por espécie.
function generateTrace(seed) {
  const rand = (n) => {
    const x = Math.sin(seed * 999 + n * 37.13) * 10000
    return x - Math.floor(x)
  }
  let d = 'M 0 60'
  for (let i = 1; i <= 8; i++) {
    const x = i * 25
    const y = 60 - rand(i) * 48
    d += ` L ${x} ${y.toFixed(1)}`
  }
  d += ' L 200 60'
  return d
}

const ASSETS = [
  {
    id: 'umbu',
    species: 'Spondias tuberosa',
    common: 'Umbuzeiro',
    compound: 'Flavonoides & ácidos fenólicos',
    application: 'Potencial antioxidante e nutracêutico',
    seed: 3,
  },
  {
    id: 'mandacaru',
    species: 'Cereus jamacaru',
    common: 'Mandacaru',
    compound: 'Alcaloides indólicos',
    application: 'Prospecção farmacológica preliminar',
    seed: 7,
  },
  {
    id: 'jurema',
    species: 'Mimosa tenuiflora',
    common: 'Jurema-preta',
    compound: 'Taninos condensados',
    application: 'Atividade cicatrizante e anti-inflamatória',
    seed: 11,
  },
  {
    id: 'pauferro',
    species: 'Libidibia ferrea',
    common: 'Pau-ferro',
    compound: 'Terpenoides & taninos',
    application: 'Bioatividade antimicrobiana estudada',
    seed: 5,
  },
  {
    id: 'catingueira',
    species: 'Poincianella pyramidalis',
    common: 'Catingueira',
    compound: 'Compostos fenólicos voláteis',
    application: 'Perfil de óleo essencial em análise',
    seed: 9,
  },
  {
    id: 'aroeira',
    species: 'Myracrodruon urundeuva',
    common: 'Aroeira-do-sertão',
    compound: 'Triterpenos & resinas',
    application: 'Estudo de metabólitos de defesa',
    seed: 13,
  },
]

function MiniTrace({ seed, active }) {
  return (
    <svg viewBox="0 0 200 70" className="h-16 w-full">
      <motion.path
        d={generateTrace(seed)}
        fill="none"
        stroke={active ? '#34d399' : '#4a564c'}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      />
    </svg>
  )
}

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="galeria" className="relative bg-panel py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-clay-soft">
            Galeria Expositiva
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-bone sm:text-4xl">
            Ativos em destaque da flora do semiárido.
          </h2>
          <p className="mt-6 leading-relaxed text-sand">
            Uma amostra dos perfis analíticos que orientam nossas linhas de
            pesquisa. Cada traço abaixo representa, de forma ilustrativa, o
            tipo de sinal cromatográfico observado em cada espécie estudada.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ASSETS.map((a, i) => (
            <Reveal key={a.id} delay={(i % 3) * 0.08}>
              <button
                onClick={() => setSelected(a)}
                className="group w-full rounded-2xl border border-line bg-void/60 p-6 text-left transition-all hover:-translate-y-1 hover:border-cactus/40 hover:shadow-glow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-bone">
                      {a.common}
                    </h3>
                    <p className="font-mono text-xs italic text-muted">{a.species}</p>
                  </div>
                  <Beaker size={16} className="text-clay-soft opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <div className="mt-4">
                  <MiniTrace seed={a.seed} />
                </div>

                <p className="mt-3 text-sm text-sand">{a.compound}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal de detalhe do ativo selecionado */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-void/80 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl border border-line bg-panel2 p-8"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-bone">
                    {selected.common}
                  </h3>
                  <p className="font-mono text-sm italic text-muted">{selected.species}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-muted hover:text-bone"
                  aria-label="Fechar"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-6">
                <MiniTrace seed={selected.seed} active />
              </div>

              <dl className="mt-6 space-y-4 border-t border-line pt-6">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                    Classe química de interesse
                  </dt>
                  <dd className="mt-1 text-sand">{selected.compound}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                    Linha de investigação
                  </dt>
                  <dd className="mt-1 text-sand">{selected.application}</dd>
                </div>
              </dl>

              <p className="mt-6 text-xs leading-relaxed text-muted">
                Dados ilustrativos com fins expositivos, representando o tipo de
                achado científico que orienta as pesquisas da FitoEx.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
