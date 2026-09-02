import { X } from 'lucide-react'
import { useEffect } from 'react'

type Props = {
  src: string
  alt: string
  onClose: () => void
}

export function Lightbox({ src, alt, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[#080808]/94 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 text-[#f4f1ea]/80 transition-colors hover:text-[#c4a574]"
        aria-label="Fechar"
      >
        <X size={22} strokeWidth={1.25} />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[88vh] max-w-[92vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}
