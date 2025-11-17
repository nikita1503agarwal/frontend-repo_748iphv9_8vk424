import React from 'react'
import Spline from '@splinetool/react-spline'
import { MessageCircle, Send } from 'lucide-react'

const CTAButton = ({ href, icon: Icon, label, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group inline-flex items-center gap-2 px-5 py-3 rounded-full text-white font-semibold shadow-lg transition transform hover:scale-[1.02] active:scale-95 ${color}`}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </a>
)

export default function Hero() {
  const whatsappHref = 'https://wa.me/972526418828?text=Hi%20Rany%2C%20I%27d%20like%20AI-generated%20images%20for%20my%20business.'
  const telegramHref = 'https://t.me/RANY777'

  return (
    <section className="relative w-full min-h-[86vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/10" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-white">
        <div className="max-w-2xl">
          <span className="inline-block mb-4 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs tracking-wider uppercase">AI Image Studio</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">
            Stand-out visuals for modern brands
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl">
            Request custom AI‑generated images for your business — icons, covers, ads and more. Fast turnaround, crisp aesthetics.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CTAButton
              href={whatsappHref}
              icon={MessageCircle}
              label="Contact on WhatsApp"
              color="bg-emerald-500 hover:bg-emerald-600"
            />
            <CTAButton
              href={telegramHref}
              icon={Send}
              label="Message on Telegram"
              color="bg-sky-500 hover:bg-sky-600"
            />
          </div>

          <p className="mt-3 text-xs sm:text-sm text-white/70">Prefer chatting first? I typically reply within minutes.</p>
        </div>
      </div>
    </section>
  )
}
