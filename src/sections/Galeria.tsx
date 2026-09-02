import { useState } from 'react'
import { Lightbox } from '../components/Lightbox'
import { Reveal } from '../components/Reveal'
import { gallery } from '../content'

const spanClass: Record<(typeof gallery)[number]['span'], string> = {
  wide: 'md:col-span-2 aspect-[16/10]',
  tall: 'aspect-[4/5] md:row-span-2 md:aspect-auto md:min-h-[28rem]',
  square: 'aspect-[4/5] md:aspect-square',
}

export function Galeria() {
  const [active, setActive] = useState<(typeof gallery)[number] | null>(null)

  return (
    <section id="galeria" className="bg-[#080808] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <Reveal className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker">Galeria</p>
            <h2 className="display mt-5 text-4xl text-[#faf8f4] md:text-5xl">Atmosfera.</h2>
          </div>
          <p className="max-w-sm text-[0.85rem] leading-relaxed text-[#8a8680]">
            Imagens de referência cinematográfica. O acervo está preparado para receber as
            fotografias reais do empreendimento.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
          {gallery.map((item, i) => (
            <Reveal
              key={item.src}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className={spanClass[item.span]}
            >
              <button
                type="button"
                onClick={() => setActive(item)}
                className="img-zoom group relative h-full w-full cursor-zoom-in"
                aria-label={`Ampliar: ${item.alt}`}
              >
                <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
                <span className="pointer-events-none absolute inset-0 bg-[#080808]/0 transition-colors duration-500 group-hover:bg-[#080808]/25" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {active && <Lightbox src={active.src} alt={active.alt} onClose={() => setActive(null)} />}
    </section>
  )
}
