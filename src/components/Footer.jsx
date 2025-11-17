import React from 'react'

export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} RANY • AI Image Studio</p>
        <div className="text-xs text-gray-500">
          Crafted with a focus on creativity and clarity.
        </div>
      </div>
    </footer>
  )
}
