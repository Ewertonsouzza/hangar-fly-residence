import { Reveal } from '../components/Reveal'
import { copy, images } from '../content'

export function Experiencia() {
  return (
    <section id="experiencia" className="relative min-h-[90svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.experiencia}
          alt="Aeronave e pista ao entardecer, atmosfera de aviação privada"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#080808]/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-[#080808]/35" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-[1440px] flex-col justify-center px-5 py-24 md:px-10 lg:px-14">
        <Reveal>
          <p className="kicker">{copy.experienciaKicker}</p>
          <h2 className="display mt-6 max-w-[14ch] text-4xl text-[#faf8f4] md:text-6xl lg:text-[4.1rem]">
            {copy.experienciaHeadline}
          </h2>
          <p className="mt-8 max-w-[36rem] text-[0.98rem] leading-[1.75] text-[#f4f1ea]/78">
            {copy.experienciaLead}
          </p>
        </Reveal>

        <div className="mt-16 grid max-w-4xl gap-10 sm:grid-cols-3">
          {copy.experienciaPoints.map((point, i) => (
            <Reveal key={point.title} delay={(i + 1) as 1 | 2 | 3}>
              <p className="text-[0.62rem] tracking-[0.32em] text-[#c4a574] uppercase">
                0{i + 1}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[#faf8f4]">
                {point.title}
              </h3>
              <p className="mt-3 text-[0.88rem] leading-relaxed text-[#f4f1ea]/68">{point.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
