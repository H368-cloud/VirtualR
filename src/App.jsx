import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-6 px-6">
         <Hero />
         <Features />
         <Workflow />
         <Pricing />
      </div>
    </div>
  )
}

export default App
