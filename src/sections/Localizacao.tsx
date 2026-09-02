import { MapPin } from 'lucide-react'
import { GhostButton } from '../components/Buttons'
import { Reveal } from '../components/Reveal'
import { contacts, copy, images, mapsUrl } from '../content'

export function Localizacao() {
  return (
    <section id="localizacao" className="bg-[#0d0d0d] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="kicker">{copy.localKicker}</p>
            <h2 className="display mt-6 max-w-[16ch] text-4xl text-[#faf8f4] md:text-5xl lg:text-[3.4rem]">
              {copy.localHeadline}
            </h2>
          </Reveal>
          <Reveal delay={1} className="lg:col-span-5">
            <p className="text-[0.98rem] leading-[1.75] text-[#f4f1ea]/72">{copy.localLead}</p>
            <p className="mt-6 inline-flex items-center gap-2 text-[0.75rem] tracking-[0.22em] text-[#c4a574] uppercase">
              <MapPin size={14} strokeWidth={1.4} />
              {copy.localPlace}
            </p>
            <div className="mt-8">
              <GhostButton href={mapsUrl()} external>
                {copy.ctaArrive}
              </GhostButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2} className="mt-14 grid gap-3 md:grid-cols-5 md:gap-4">
          <div className="img-zoom relative hidden min-h-[280px] overflow-hidden md:col-span-2 md:block">
            <img
              src={images.vale}
              alt="Paisagem de sertão e horizonte, referência visual do Vale do São Francisco"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#080808]/20" />
          </div>
          <div className="overflow-hidden border border-white/8 md:col-span-3">
            <div className="relative aspect-[16/9] min-h-[280px] w-full grayscale contrast-[1.05] md:aspect-auto md:h-full">
              <iframe
                title="Mapa de Petrolina, Pernambuco"
                src={contacts.mapsEmbed}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 bg-[#c4a574]/8 mix-blend-multiply" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
