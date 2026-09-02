import { Reveal } from '../components/Reveal'
import { copy, images } from '../content'

export function Exclusividade() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[70svh]">
          <img
            src={images.asa}
            alt="Asa de aeronave sobre as nuvens, atmosfera de aviação executiva"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#080808]/25" />
        </div>
        <div className="flex min-h-[70svh] flex-col justify-center bg-[#121212] px-5 py-20 md:px-14 lg:px-16">
          <Reveal>
            <p className="kicker">{copy.exclusividadeKicker}</p>
            <h2 className="display mt-6 max-w-[14ch] text-4xl text-[#faf8f4] md:text-5xl lg:text-[3.5rem]">
              {copy.exclusividadeHeadline}
            </h2>
            <p className="mt-8 max-w-[34rem] text-[0.98rem] leading-[1.75] text-[#f4f1ea]/74">
              {copy.exclusividadeLead}
            </p>
            <div className="mt-10 h-px w-16 bg-[#c4a574]/50" />
            <p className="mt-6 max-w-[30rem] text-[0.82rem] leading-relaxed text-[#8a8680]">
              {copy.exclusividadeNote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
