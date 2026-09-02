import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { copy, nav, whatsappUrl } from '../content'
import { GoldButton } from './Buttons'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-[#080808]/88 backdrop-blur-md border-b border-white/6'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-14">
        <a href="#topo" className="group flex flex-col leading-none">
          <span className="font-[family-name:var(--font-display)] text-[1.35rem] tracking-[0.18em] text-[#f4f1ea] uppercase">
            {copy.brand}
          </span>
          <span className="mt-1 text-[0.55rem] tracking-[0.38em] text-[#c4a574] uppercase">
            Hangar · Petrolina
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link text-[0.68rem] tracking-[0.22em] text-[#f4f1ea]/78 uppercase transition-colors hover:text-[#f4f1ea]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <GoldButton href={whatsappUrl()} className="hidden !px-5 !py-2.5 md:inline-flex" external>
            {copy.ctaConsultant}
          </GoldButton>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-[#f4f1ea] lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} strokeWidth={1.25} /> : <Menu size={20} strokeWidth={1.25} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="menu-panel fixed inset-0 top-[4.5rem] z-40 bg-[#080808]/96 backdrop-blur-md lg:hidden">
          <nav className="flex h-full flex-col items-center justify-center gap-8 px-8 pb-24">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-[family-name:var(--font-display)] text-3xl text-[#f4f1ea]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <GoldButton href={whatsappUrl()} className="mt-4" external>
              {copy.ctaConsultant}
            </GoldButton>
          </nav>
        </div>
      )}
    </header>
  )
}
