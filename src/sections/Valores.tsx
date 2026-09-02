import { Reveal } from '../components/Reveal'

const values = [
  'Exclusividade',
  'Aviação',
  'Privacidade',
  'Patrimônio',
  'Infraestrutura',
  'Prestígio',
]

export function Valores() {
  return (
    <section className="border-y border-white/8 bg-[#0a0a0a] py-10 md:py-14" aria-label="Pilares do empreendimento">
      <Reveal>
        <ul className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-8 gap-y-4 px-5 md:gap-x-12 md:px-10">
          {values.map((value) => (
            <li
              key={value}
              className="text-[0.62rem] tracking-[0.38em] text-[#c4a574]/80 uppercase"
            >
              {value}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
