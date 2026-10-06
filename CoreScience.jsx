import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, SplitSquareVertical, Atom, ArrowRight } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'

const TABS = [
  {
    id: 'fito',
    icon: Leaf,
    label: 'Fitoquímica',
    kicker: 'Etapa 01 · Prospecção',
    title: 'Extração e prospecção de compostos bioativos',
    text: 'Prospectamos extratos vegetais a partir de coleta ética e manejo controlado, aplicando métodos de extração seletiva (maceração, ultrassom, fluido supercrítico) para concentrar classes de metabólitos — flavonoides, alcaloides, terpenos e taninos — antes da etapa analítica.',
    metric: { label: 'Classes fitoquímicas triadas', value: '12' },
  },
  {
    id: 'cromato',
    icon: SplitSquareVertical,
    label: 'Cromatografia',
    kicker: 'Etapa 02 · Separação',
    title: 'Separação e purificação de alta resolução',
    text: 'Utilizamos HPLC (cromatografia líquida de alta eficiência) e GC (cromatografia gasosa) para isolar cada composto individual da matriz vegetal, gerando perfis de retenção precisos que permitem comparar amostras e rastrear compostos-alvo com reprodutibilidade científica.',
    metric: { label: 'Resolução cromatográfica', value: '< 0.02 min' },
  },
  {
    id: 'espectro',
    icon: Atom,
    label: 'Espectrometria de Massas',
    kicker: 'Etapa 03 · Identificação',
    title: 'Identificação molecular e elucidação estrutural',
    text: 'Acoplada à cromatografia (LC-MS / GC-MS), a espectrometria de massas fragmenta e pesa cada molécula com precisão, permitindo elucidar sua estrutura química e confirmar identidade frente a bancos de dados espectrais internacionais.',
    metric: { label: 'Precisão de massa', value: 'ppm' },
  },
]

export default function CoreScience() {
  const [active, setActive] = useState(TABS[0].id)
  const current = TABS.find((t) => t.id === active)

  return (
    <section id="ciencia" className="relative bg-void py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-spectra">
            O Core Científico
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-bone sm:text-4xl">
            Três pilares técnicos, um único fluxo analítico.
          </h2>
          <p className="mt-6 leading-relaxed text-sand">
            Da planta à molécula caracterizada: cada amostra percorre um
            pipeline rigoroso que combina química vegetal clássica com
            instrumentação analítica de última geração.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-[340px_1fr]">
          {/* Seletor de abas */}
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {TABS.map((tab) => {
              const isActive = tab.id === active
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`group flex min-w-[240px] items-center gap-4 rounded-xl border p-4 text-left transition-all lg:min-w-0 ${
                    isActive
                      ? 'border-cactus/50 bg-panel2 shadow-glow'
                      : 'border-line bg-panel/50 hover:border-line hover:bg-panel2/60'
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                      isActive
                        ? 'border-cactus/40 bg-cactus/15 text-cactus'
                        : 'border-line bg-void text-muted group-hover:text-sand'
                    }`}
                  >
                    <tab.icon size={18} strokeWidth={2} />
                  </span>
                  <span>
                    <span className={`block text-sm font-semibold ${isActive ? 'text-bone' : 'text-sand'}`}>
                      {tab.label}
                    </span>
                    <span className="block text-xs text-muted">{tab.kicker}</span>
                  </span>
                </button>
              )
            })}
          </div>

          {/* Painel de conteúdo da aba ativa */}
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-line bg-panel/50 p-8 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <span className="font-mono text-xs uppercase tracking-widest text-cactus">
                  {current.kicker}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-bone sm:text-3xl">
                  {current.title}
                </h3>
                <p className="mt-5 max-w-xl leading-relaxed text-sand">
                  {current.text}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-8 border-t border-line pt-6">
                  <div className="font-mono">
                    <div className="text-xs uppercase tracking-wide text-muted">
                      {current.metric.label}
                    </div>
                    <div className="mt-1 text-2xl font-semibold text-spectra">
                      {current.metric.value}
                    </div>
                  </div>
                  <a
                    href="#galeria"
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-bone hover:text-cactus"
                  >
                    Ver aplicação prática
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mini traço decorativo de fundo, remete ao sinal analítico */}
            <svg
              className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-64 opacity-20"
              viewBox="0 0 200 100"
            >
              <path
                d="M0 80 C 30 78, 40 20, 60 20 C 80 20, 85 80, 110 80 C 130 80, 140 40, 160 40 C 175 40, 180 80, 200 80"
                fill="none"
                stroke="#34d399"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
