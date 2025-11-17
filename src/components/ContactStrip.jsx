import React from 'react'
import { MessageCircle, Send } from 'lucide-react'

export default function ContactStrip() {
  const whatsappHref = 'https://wa.me/972526418828?text=Hi%20Rany%2C%20I%27d%20like%20AI-generated%20images%20for%20my%20business.'
  const telegramHref = 'https://t.me/RANY777'

  return (
    <section className="bg-black text-white py-6">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center sm:text-left text-sm sm:text-base opacity-90">
          Ready to get started? Message me now and tell me what you need.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <a
            href={telegramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold shadow"
          >
            <Send className="w-4 h-4" /> Telegram
          </a>
        </div>
      </div>
    </section>
  )
}
