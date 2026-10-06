import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import AboutStartup from './components/AboutStartup.jsx'
import Caatinga from './components/Caatinga.jsx'
import CoreScience from './components/CoreScience.jsx'
import Gallery from './components/Gallery.jsx'
import Sustainability from './components/Sustainability.jsx'
import Footer from './components/Footer.jsx'
import SpectralTrace from './components/SpectralTrace.jsx'

// Define os "picos" do traço espectral — um por seção da página,
// com um rótulo tipo dado de laboratório (m/z simulado).
const SECTIONS = [
  { id: 'top', tag: 'Início · m/z 0.0' },
  { id: 'startup', tag: 'A Startup · m/z 84.2' },
  { id: 'caatinga', tag: 'A Caatinga · m/z 156.7' },
  { id: 'ciencia', tag: 'A Ciência · m/z 233.4' },
  { id: 'galeria', tag: 'Ativos · m/z 310.9' },
  { id: 'impacto', tag: 'Impacto · m/z 388.1' },
  { id: 'contato', tag: 'Contato · m/z 460.5' },
]

export default function App() {
  return (
    <div className="relative">
      <SpectralTrace sections={SECTIONS} />
      <Header />
      <main>
        <Hero />
        <AboutStartup />
        <Caatinga />
        <CoreScience />
        <Gallery />
        <Sustainability />
      </main>
      <Footer />
    </div>
  )
}
