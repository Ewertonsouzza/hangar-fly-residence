import { MessageCircle } from 'lucide-react'
import { contacts, whatsappUrl } from '../content'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar no WhatsApp ${contacts.whatsappDisplay}`}
      className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#c4a574] text-[#080808] shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:scale-105 md:right-8 md:bottom-8"
    >
      <MessageCircle size={22} strokeWidth={1.5} />
    </a>
  )
}
