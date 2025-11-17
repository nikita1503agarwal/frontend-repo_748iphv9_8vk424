import React from 'react'

const Card = ({ title, price, description }) => (
  <div className="group rounded-2xl border border-white/20 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-xl transition-all">
    <div className="flex items-baseline justify-between">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <div className="text-2xl font-extrabold text-gray-900">{price}</div>
    </div>
    {description && (
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    )}
    <ul className="mt-4 space-y-2 text-sm text-gray-700">
      <li>• High-resolution export</li>
      <li>• 2 style variations</li>
      <li>• Minor edits included</li>
      <li>• 24–48h delivery</li>
    </ul>
  </div>
)

export default function Pricing() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Transparent Pricing</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Pick exactly what you need. Fair, simple rates in ILS.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Business Icon" price="500 ILS" description="Crisp avatar/logo-style icon for profiles and apps." />
          <Card title="Business Cover Photo" price="400 ILS" description="Wide banner image for pages, profiles or headers." />
          <Card title="Business Advertisement Image" price="300 ILS" description="Scroll-stopping visual optimized for campaigns." />
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">Custom bundles available on request.</p>
      </div>
    </section>
  )
}
