import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { CtaFinal } from './sections/CtaFinal'
import { Empreendimento } from './sections/Empreendimento'
import { Exclusividade } from './sections/Exclusividade'
import { Experiencia } from './sections/Experiencia'
import { Galeria } from './sections/Galeria'
import { Hero } from './sections/Hero'
import { Infraestrutura } from './sections/Infraestrutura'
import { Localizacao } from './sections/Localizacao'
import { Lotes } from './sections/Lotes'
import { Valores } from './sections/Valores'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Valores />
        <Empreendimento />
        <Experiencia />
        <Infraestrutura />
        <Exclusividade />
        <Localizacao />
        <Lotes />
        <Galeria />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
