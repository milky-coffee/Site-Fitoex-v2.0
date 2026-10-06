import { motion } from 'framer-motion'
import { ArrowRight, MoveDown } from 'lucide-react'
import ChromatogramArt from './ChromatogramArt.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-void lab-grid pt-24">
      {/* Vinheta radial para dar profundidade ao fundo escuro */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,0.08),transparent_45%),radial-gradient(circle_at_85%_60%,rgba(200,109,81,0.10),transparent_40%)]" />

      {/* Arte de cromatograma + moléculas, à direita, esmaecendo à esquerda */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-70 lg:w-2/3">
        <ChromatogramArt />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-cactus"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cactus" />
            Ciência analítica · Semiárido do Nordeste
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-bone sm:text-5xl lg:text-6xl"
          >
            Decifrando a biodiversidade da{' '}
            <span className="bg-gradient-to-r from-cactus via-spectra to-clay-soft bg-clip-text text-transparent">
              Caatinga
            </span>{' '}
            com precisão analítica de ponta.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-sand"
          >
            Conectamos fitoquímica avançada, cromatografia de alta resolução e
            espectrometria de massas para transformar compostos nativos do
            semiárido brasileiro em bioativos e bioprodutos de valor científico
            e econômico.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#ciencia"
              className="group inline-flex items-center gap-2 rounded-full bg-cactus px-6 py-3.5 text-sm font-semibold text-void transition-transform hover:scale-[1.03] hover:shadow-glow"
            >
              Explorar a Tecnologia
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#galeria"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-bone transition-colors hover:border-spectra/60 hover:text-spectra"
            >
              Nossas Pesquisas
            </a>
          </motion.div>

          {/* Indicadores tipo "painel de dados" */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8 font-mono"
          >
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted">Espécies em estudo</dt>
              <dd className="mt-1 text-2xl font-semibold text-bone">120+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted">Metabólitos mapeados</dt>
              <dd className="mt-1 text-2xl font-semibold text-bone">840</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted">Resolução analítica</dt>
              <dd className="mt-1 text-2xl font-semibold text-cactus">ppm</dd>
            </div>
          </motion.dl>
        </div>
      </div>

      <motion.a
        href="#startup"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-cactus"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <MoveDown size={22} />
      </motion.a>
    </section>
  )
}
