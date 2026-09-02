import type { ReactNode } from 'react'

type Common = {
  href: string
  children: ReactNode
  className?: string
  external?: boolean
}

export function GoldButton({ href, children, className = '', external }: Common) {
  return (
    <a
      href={href}
      className={`gold-btn inline-flex items-center justify-center gap-2 bg-[#c4a574] px-7 py-3.5 text-[0.68rem] font-medium tracking-[0.28em] text-[#080808] uppercase transition-opacity hover:opacity-90 ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}

export function GhostButton({ href, children, className = '', external }: Common) {
  return (
    <a
      href={href}
      className={`ghost-btn inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.68rem] font-medium tracking-[0.28em] text-[#f4f1ea] uppercase ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
