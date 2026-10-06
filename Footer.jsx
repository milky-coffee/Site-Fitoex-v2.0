import { useState } from 'react'
import { FlaskConical, Mail, MapPin, Linkedin, Instagram, ArrowRight, Check } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'

export default function Footer() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Em produção: integrar com endpoint real (ex: API própria, Formspree, etc.)
    setSent(true)
  }

  return (
    <footer id="contato" className="relative border-t border-line bg-panel bg-noise">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
          {/* Coluna institucional */}
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-spectra">
              Contato
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-bone sm:text-4xl">
              Vamos transformar biodiversidade em conhecimento aplicado.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-sand">
              Pesquisadores, instituições e empresas interessadas em parcerias
              científicas, licenciamento de tecnologia ou coinvestigação são
              bem-vindos a entrar em contato.
            </p>

            <div className="mt-10 space-y-4 font-mono text-sm">
              <div className="flex items-center gap-3 text-sand">
                <Mail size={16} className="text-cactus" />
                contato@fitoex.com.br
              </div>
              <div className="flex items-start gap-3 text-sand">
                <MapPin size={16} className="mt-0.5 shrink-0 text-cactus" />
                Polo Tecnológico do Recife (Porto Digital) — Recife, PE, Brasil
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn da FitoEx"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-sand transition-colors hover:border-cactus/50 hover:text-cactus"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="#"
                aria-label="Instagram da FitoEx"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-sand transition-colors hover:border-cactus/50 hover:text-cactus"
              >
                <Instagram size={17} />
              </a>
            </div>
          </Reveal>

          {/* Formulário de contato */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-void/60 p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cactus/15 text-cactus">
                    <Check size={22} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-bone">
                    Mensagem enviada
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-sand">
                    Obrigado pelo contato. Nossa equipe científica responderá em
                    até 2 dias úteis.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted">
                        Nome
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full rounded-lg border border-line bg-panel px-4 py-3 text-sm text-bone placeholder:text-muted focus:border-cactus/50"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="org" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted">
                        Instituição
                      </label>
                      <input
                        id="org"
                        type="text"
                        className="w-full rounded-lg border border-line bg-panel px-4 py-3 text-sm text-bone placeholder:text-muted focus:border-cactus/50"
                        placeholder="Universidade / empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted">
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-line bg-panel px-4 py-3 text-sm text-bone placeholder:text-muted focus:border-cactus/50"
                      placeholder="voce@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full resize-none rounded-lg border border-line bg-panel px-4 py-3 text-sm text-bone placeholder:text-muted focus:border-cactus/50"
                      placeholder="Conte um pouco sobre a parceria ou pesquisa que você tem em mente"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cactus px-5 py-3.5 text-sm font-semibold text-void transition-transform hover:scale-[1.01]"
                  >
                    Enviar mensagem
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Linha inferior institucional */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-line pt-8 sm:flex-row">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-cactus/40 bg-cactus/10 text-cactus">
              <FlaskConical size={14} />
            </span>
            <span className="font-display text-sm font-bold text-bone">
              Fito<span className="text-cactus">Ex</span>
            </span>
          </a>
          <p className="text-center text-xs text-muted sm:text-left">
            © {new Date().getFullYear()} FitoEx Ciência e Tecnologia Ltda. Todos os direitos reservados.
            Coletas e pesquisas conduzidas em conformidade com a legislação brasileira de acesso ao
            patrimônio genético (Lei nº 13.123/2015).
          </p>
        </div>
      </div>
    </footer>
  )
}
