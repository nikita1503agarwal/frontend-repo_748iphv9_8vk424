import React from 'react'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import ContactStrip from './components/ContactStrip'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Hero />
      <Pricing />
      <ContactStrip />
      <Footer />
    </div>
  )
}

export default App
