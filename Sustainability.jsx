import { ScanLine, Handshake, Sprout } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'

const COMMITMENTS = [
  {
    icon: ScanLine,
    title: 'Biopirataria zero',
    text: 'Toda coleta segue protocolos formais de acesso ao patrimônio genético, com registro, rastreabilidade e conformidade junto aos órgãos ambientais competentes.',
  },
  {
    icon: Sprout,
    title: 'Manejo ético',
    text: 'Trabalhamos com extrativismo de baixo impacto e parcerias com produtores locais, priorizando a regeneração das espécies nativas sobre a exploração intensiva.',
  },
  {
    icon: Handshake,
    title: 'Bioeconomia local',
    text: 'Parte do valor gerado retorna às comunidades do semiárido por meio de capacitação técnica, geração de renda e repartição justa de benefícios.',
  },
]

export default function Sustainability() {
  return (
    <section id="impacto" className="relative bg-void py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-cactus">
              Sustentabilidade e Impacto
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-bone sm:text-4xl">
              Ciência que devolve valor ao território que a origina.
            </h2>
            <p className="mt-6 leading-relaxed text-sand">
              Acreditamos que a valorização científica da Caatinga só é
              legítima quando caminha junto da sua conservação e da dignidade
              econômica de quem vive nela. Cada etapa do nosso processo é
              desenhada para equilibrar rigor analítico, responsabilidade
              ambiental e retorno social.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 font-mono sm:max-w-sm">
              <div>
                <div className="text-2xl font-semibold text-cactus">0</div>
                <div className="text-xs uppercase tracking-wide text-muted">
                  Ocorrências de biopirataria
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-clay-soft">100%</div>
                <div className="text-xs uppercase tracking-wide text-muted">
                  Coletas com registro formal
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            {COMMITMENTS.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="flex gap-5 rounded-2xl border border-line bg-panel/50 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-void text-cactus">
                    <c.icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-bone">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-sand">
                      {c.text}
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
