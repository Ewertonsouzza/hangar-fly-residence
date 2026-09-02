import { ChevronDown } from 'lucide-react'
import { GoldButton, GhostButton } from '../components/Buttons'
import { copy, images, whatsappUrl } from '../content'

export function Hero() {
  return (
    <section id="topo" className="relative h-svh min-h-[720px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Aeronave em voo cinematográfico sobre horizonte aberto"
          className="hero-kenburns h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/55 via-[#080808]/40 to-[#080808]" />
        <div className="absolute inset-0 bg-[#080808]/25" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-24 md:px-10 md:pb-28 lg:px-14">
        <p className="hero-enter kicker" style={{ animationDelay: '0.15s' }}>
          {copy.kicker}
        </p>
        <p
          className="hero-enter mt-5 font-[family-name:var(--font-display)] text-[0.95rem] tracking-[0.42em] text-[#f4f1ea] uppercase md:text-base"
          style={{ animationDelay: '0.28s' }}
        >
          Hangar Fly Residence
        </p>
        <h1
          className="hero-enter display mt-6 max-w-[18ch] text-[2.65rem] text-[#faf8f4] md:text-6xl lg:text-[4.4rem]"
          style={{ animationDelay: '0.4s' }}
        >
          {copy.heroHeadline}
        </h1>
        <p
          className="hero-enter mt-6 max-w-[38rem] text-[0.95rem] leading-relaxed text-[#f4f1ea]/78 md:text-base"
          style={{ animationDelay: '0.55s' }}
        >
          {copy.heroLead}
        </p>
        <div
          className="hero-enter mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: '0.7s' }}
        >
          <GoldButton href="#empreendimento">{copy.ctaPrimary}</GoldButton>
          <GhostButton href={whatsappUrl()} external>
            {copy.ctaConsultant}
          </GhostButton>
        </div>
      </div>

      <a
        href="#empreendimento"
        className="scroll-hint absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[#f4f1ea]/55"
        aria-label="Rolar para o empreendimento"
      >
        <span className="text-[0.58rem] tracking-[0.32em] uppercase">Explorar</span>
        <ChevronDown size={16} strokeWidth={1.2} />
      </a>
    </section>
  )
}
