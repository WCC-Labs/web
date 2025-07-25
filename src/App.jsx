import React from 'react'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Courses from './components/sections/Courses'
import Features from './components/sections/Features'
import Testimonials from './components/sections/Testimonials'
import Placements from './components/sections/Placements'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        <Features />
        <Courses />
        <Placements />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
