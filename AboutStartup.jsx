import { Target, Microscope, Globe2 } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'

const PILLARS = [
  {
    icon: Target,
    title: 'Missão',
    text: 'Traduzir a riqueza química da flora nativa do semiárido em conhecimento validado cientificamente e em ativos de alto valor agregado.',
  },
  {
    icon: Microscope,
    title: 'Método',
    text: 'Integrar fitoquímica, cromatografia e espectrometria de massas em um fluxo analítico próprio, do campo à molécula.',
  },
  {
    icon: Globe2,
    title: 'Território',
    text: 'Atuar a partir do Nordeste brasileiro, com base em polos tecnológicos regionais e rede de pesquisadores locais.',
  },
]

export default function AboutStartup() {
  return (
    <section id="startup" className="relative bg-void py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-clay-soft">
              A Startup
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-bone sm:text-4xl">
              Ciência de origem, precisão de laboratório.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-sand">
              A FitoEx nasce no cruzamento entre a bioquímica vegetal e a
              instrumentação analítica de ponta. Somos uma startup de ciência e
              tecnologia dedicada a pesquisar, caracterizar e valorizar os
              compostos bioativos únicos da Caatinga — o bioma semiárido mais
              biodiverso do planeta e um dos menos explorados cientificamente.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-1">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group flex gap-5 rounded-2xl border border-line bg-panel/60 p-6 transition-colors hover:border-cactus/40 hover:bg-panel2">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cactus/30 bg-cactus/10 text-cactus">
                    <p.icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-bone">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-sand">
                      {p.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
