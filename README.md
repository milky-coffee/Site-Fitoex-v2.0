# FitoEx — Site Institucional

Site expositivo/institucional da FitoEx, startup de ciência e tecnologia
focada em fitoquímica, cromatografia, espectrometria de massas e
valorização da biodiversidade da flora da Caatinga.

## Stack

- **React 18 + Vite** — build rápido e SPA fluida com âncoras.
- **Tailwind CSS** — estilização com tokens de design customizados
  (`tailwind.config.js`) para o conceito "Ciência & Caatinga".
- **Framer Motion** — animações de entrada, transições de aba e o
  elemento de assinatura `SpectralTrace` (traço espectral que percorre
  a página conforme o scroll).
- **Lucide React** — ícones.

## Como rodar

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

Para gerar o build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  App.jsx                    # composição das seções + definição dos "picos" do traço espectral
  index.css                  # tokens globais, grão, grid de laboratório, acessibilidade
  components/
    Header.jsx                # navegação fixa + menu mobile
    Hero.jsx                  # seção de impacto inicial
    ChromatogramArt.jsx       # arte SVG animada (cromatograma + molécula) do Hero
    SpectralTrace.jsx         # elemento de assinatura: traço espectral fixo lateral
    AboutStartup.jsx          # seção "A Startup"
    Caatinga.jsx               # seção "A Caatinga como Fonte de Inovação"
    CoreScience.jsx           # abas: Fitoquímica / Cromatografia / Espectrometria
    Gallery.jsx                # galeria de "Ativos em Destaque" com modal de detalhe
    Sustainability.jsx        # seção "Sustentabilidade e Impacto"
    Footer.jsx                 # rodapé com formulário de contato
    ui/Reveal.jsx              # wrapper reutilizável de animação de revelação
```

## Identidade visual

- **Fundo**: `#0f1410` (grafite profundo) — "modo escuro científico".
- **Destaques**: terracota `#c86d51` (Caatinga), verde `#34d399` (Sertão/Cacto),
  ciano `#22d3ee` (dados analíticos / espectrometria).
- **Tipografia**: Plus Jakarta Sans (títulos), Inter (corpo), JetBrains Mono
  (dados de laboratório, rótulos m/z, métricas).

Todos os tokens de cor e fonte estão centralizados em `tailwind.config.js`,
facilitando ajustes de marca sem tocar nos componentes.

## Conteúdo

Os textos e dados de espécies (umbuzeiro, mandacaru, jurema-preta, pau-ferro,
catingueira, aroeira-do-sertão) são ilustrativos, escritos para fins
expositivos, e devem ser substituídos por dados científicos reais da FitoEx
antes da publicação.
