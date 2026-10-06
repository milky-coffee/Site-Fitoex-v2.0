import { Leaf, Droplets, ShieldHalf } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'

const FACTS = [
  {
    icon: Leaf,
    title: 'Bioma exclusivamente brasileiro',
    text: 'A Caatinga é o único bioma inteiramente restrito ao território nacional, com altíssimo grau de endemismo — espécies que não existem em nenhum outro lugar do mundo.',
  },
  {
    icon: Droplets,
    title: 'Metabólitos de defesa',
    text: 'A escassez hídrica e a radiação intensa do semiárido pressionam as plantas a produzirem metabólitos secundários complexos — compostos de defesa com potencial farmacológico notável.',
  },
  {
    icon: ShieldHalf,
    title: 'Sub-representação científica',
    text: 'Apesar da riqueza química, a Caatinga permanece entre os biomas brasileiros menos estudados analiticamente — uma lacuna que orienta diretamente a atuação da FitoEx.',
  },
]

export default function Caatinga() {
  return (
    <section id="caatinga" className="relative overflow-hidden bg-panel py-28 lg:py-36">
      {/* Textura de fundo remetendo a solo/argila rachada */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="crack" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M0 60 L40 40 L60 70 L120 50" stroke="#c86d51" strokeWidth="1" fill="none" />
              <path d="M20 0 L40 40 L20 120" stroke="#c86d51" strokeWidth="1" fill="none" />
              <path d="M80 0 L60 70 L100 120" stroke="#c86d51" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crack)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-cactus">
            A Caatinga como Fonte de Inovação
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-bone sm:text-4xl">
            Um laboratório vivo, moldado por 800 mm de chuva ao ano.
          </h2>
          <p className="mt-6 leading-relaxed text-sand">
            Espécies como o umbuzeiro, o mandacaru, a jurema-preta e o pau-ferro
            desenvolveram estratégias bioquímicas sofisticadas para sobreviver
            à seca extrema, à alta insolação e a solos pobres. Essa pressão
            evolutiva é exatamente o que torna a flora da Caatinga um repositório
            singular de moléculas ainda pouco descritas na literatura científica.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {FACTS.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.12}>
              <div className="h-full rounded-2xl border border-line bg-void/60 p-7">
                <f.icon size={22} className="text-clay-soft" strokeWidth={2} />
                <h3 className="mt-5 font-display text-base font-semibold text-bone">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sand">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
