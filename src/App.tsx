import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Servicios from './sections/Servicios'
import Proyectos from './sections/Proyectos'
import SobreNosotros from './sections/SobreNosotros'
import Contacto from './sections/Contacto'
import Footer from './sections/Footer'
import WhatsAppButton from './sections/WhatsAppButton'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrollY={scrollY} />
      <Hero />
      <Servicios />
      <Proyectos />
      <SobreNosotros />
      <Contacto />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
