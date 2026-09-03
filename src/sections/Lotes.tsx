import { GoldButton } from '../components/Buttons'
import { Reveal } from '../components/Reveal'
import { copy, images, whatsappUrl } from '../content'

export function Lotes() {
  return (
    <section className="bg-[#080808] py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-16 lg:px-14">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="kicker">{copy.lotesKicker}</p>
            <h2 className="display mt-6 max-w-[14ch] text-4xl text-[#faf8f4] md:text-5xl">
              {copy.lotesHeadline}
            </h2>
            <p className="mt-8 text-[0.98rem] leading-[1.75] text-[#f4f1ea]/74">{copy.lotesLead}</p>
            <p className="mt-5 text-[0.95rem] leading-[1.75] text-[#f4f1ea]/62">{copy.lotesBody}</p>
            <div className="mt-10 flex items-end gap-4 border-l border-[#c4a574]/40 pl-6">
              <p className="font-[family-name:var(--font-display)] text-5xl text-[#faf8f4] md:text-6xl">
                {copy.lotesSpec}
              </p>
              <p className="mb-2 text-[0.65rem] tracking-[0.32em] text-[#c4a574] uppercase">
                {copy.lotesSpecLabel}
              </p>
            </div>
            <GoldButton href={whatsappUrl()} className="mt-10" external>
              {copy.ctaAvailability}
            </GoldButton>
          </Reveal>
        </div>
        <Reveal delay={1} className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="img-zoom col-span-2 aspect-[16/9]">
              <img
                src={images.lote}
                alt="Área de estar do hangar residencial"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="img-zoom aspect-[4/5]">
              <img
                src={images.interior}
                alt="Cozinha e interior do hangar residencial"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="img-zoom aspect-[4/5]">
              <img
                src={images.contemporaneo}
                alt="Lounge do hangar residencial"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
