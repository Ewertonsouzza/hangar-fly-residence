import { contacts, copy, nav, whatsappUrl } from '../content'

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#080808]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:px-14">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl tracking-[0.18em] text-[#f4f1ea] uppercase">
              {copy.brand}
            </p>
            <p className="mt-3 text-[0.7rem] tracking-[0.22em] text-[#8a8680] uppercase">
              {copy.footerLine}
            </p>
          </div>
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[0.72rem] tracking-[0.18em] text-[#f4f1ea]/70 uppercase transition-colors hover:text-[#c4a574]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-4 text-[0.8rem] text-[#f4f1ea]/70">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-[0.08em] transition-colors hover:text-[#c4a574]"
            >
              WhatsApp {contacts.whatsappDisplay}
            </a>
            <a
              href={contacts.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 tracking-[0.08em] transition-colors hover:text-[#c4a574]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" />
              </svg>
              {contacts.instagramHandle}
            </a>
            <p className="tracking-[0.08em]">Petrolina/PE</p>
          </div>
        </div>
        <div className="mt-14 hairline" />
        <p className="mt-8 text-center text-[0.65rem] tracking-[0.28em] text-[#8a8680] uppercase">
          Hangar Fly Residence · Petrolina/PE
        </p>
      </div>
    </footer>
  )
}
