import { GoldButton, GhostButton } from '../components/Buttons'
import { Reveal } from '../components/Reveal'
import { contacts, copy, images, whatsappUrl } from '../content'

export function CtaFinal() {
  return (
    <section id="contato" className="relative min-h-[80svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.cta}
          alt="Aeronave e céu ao entardecer, convite para o próximo destino"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#080808]/68" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-[#080808]/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80svh] max-w-[900px] flex-col items-center justify-center px-5 py-28 text-center">
        <Reveal>
          <p className="kicker">{copy.ctaKicker}</p>
          <h2 className="display mt-6 text-4xl text-[#faf8f4] md:text-6xl lg:text-[4rem]">
            {copy.ctaHeadline}
          </h2>
          <p className="mx-auto mt-7 max-w-[32rem] text-[0.98rem] leading-[1.75] text-[#f4f1ea]/74">
            {copy.ctaLead}
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <GoldButton href={whatsappUrl()} external>
              {copy.ctaConsultant}
            </GoldButton>
            <GhostButton href={contacts.instagramUrl} external>
              {copy.ctaInstagram}
            </GhostButton>
          </div>
          <a
            href={contacts.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block text-[0.68rem] tracking-[0.28em] text-[#c4a574] uppercase transition-opacity hover:opacity-80"
          >
            {copy.ctaKnowInstagram}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
