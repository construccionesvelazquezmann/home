import { useState } from 'react'
import { Menu, X, HardHat } from 'lucide-react'

interface NavbarProps {
  scrollY: number
}

const Navbar = ({ scrollY }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ]

  const isScrolled = scrollY > 50

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-orange-500' : 'bg-orange-500'}`}>
              <HardHat className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-lg font-bold leading-tight ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Construcciones
              </span>
              <span
                className={`text-sm font-semibold leading-tight ${
                  isScrolled ? 'text-orange-600' : 'text-orange-400'
                }`}
              >
                Velazquez Mann
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="px-5 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Cotizar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="block mx-4 mt-2 px-4 py-3 bg-orange-500 text-white text-center font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cotizar
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
