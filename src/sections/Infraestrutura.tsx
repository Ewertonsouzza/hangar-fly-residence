import { Reveal } from '../components/Reveal'
import { copy } from '../content'

export function Infraestrutura() {
  return (
    <section id="estrutura" className="bg-[#0d0d0d] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <Reveal className="max-w-3xl">
          <p className="kicker">{copy.infraKicker}</p>
          <h2 className="display mt-6 text-4xl text-[#faf8f4] md:text-5xl lg:text-[3.4rem]">
            {copy.infraHeadline}
          </h2>
          <p className="mt-7 max-w-[38rem] text-[0.98rem] leading-[1.75] text-[#f4f1ea]/72">
            {copy.infraLead}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px bg-white/6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.infraItems.map((item, i) => (
            <Reveal
              key={item.title}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="bg-[#0d0d0d] p-8 md:p-10"
            >
              <p className="text-[0.62rem] tracking-[0.36em] text-[#c4a574] uppercase">{item.code}</p>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-[1.65rem] text-[#faf8f4]">
                {item.title}
              </h3>
              <p className="mt-4 max-w-[28rem] text-[0.88rem] leading-relaxed text-[#f4f1ea]/62">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
