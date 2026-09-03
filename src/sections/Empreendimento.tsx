import { Reveal } from '../components/Reveal'
import { copy, images } from '../content'

export function Empreendimento() {
  return (
    <section id="empreendimento" className="bg-[#080808] py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-20 lg:px-14">
        <Reveal className="lg:col-span-6">
          <div className="img-zoom relative aspect-[4/5] md:aspect-[5/6]">
            <img
              src={images.arquitetura}
              alt="Arquitetura contemporânea de alto padrão, referência visual do empreendimento"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/50 to-transparent" />
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal>
            <p className="kicker">{copy.empreendimentoKicker}</p>
            <h2 className="display mt-6 max-w-[16ch] text-4xl text-[#faf8f4] md:text-5xl lg:text-[3.35rem]">
              {copy.empreendimentoHeadline}
            </h2>
          </Reveal>
          <Reveal delay={1} className="mt-8 space-y-5">
            <p className="max-w-[38rem] text-[0.98rem] leading-[1.75] text-[#f4f1ea]/78">
              {copy.empreendimentoLead}
            </p>
            <p className="max-w-[38rem] text-[0.98rem] leading-[1.75] text-[#f4f1ea]/68">
              {copy.empreendimentoBody}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
