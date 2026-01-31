import { HardHat, Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ]

  const services = [
    { name: 'Construcción de Viviendas', href: '#servicios' },
    { name: 'Obras Comerciales', href: '#servicios' },
    { name: 'Remodelaciones', href: '#servicios' },
    { name: 'Piscinas', href: '#servicios' },
    { name: 'Instalaciones', href: '#servicios' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-orange-500 rounded-lg">
                <HardHat className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Construcciones</span>
                <span className="text-sm font-semibold leading-tight text-orange-500">
                  Velazquez Mann
                </span>
              </div>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Más de 20 años de experiencia construyendo sueños en Buenos Aires. 
              Calidad, compromiso y profesionalismo en cada obra.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-orange-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-orange-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5491140289266"
                  className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <Phone className="w-5 h-5 text-orange-500" />
                  +54 9 11 4028-9266
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@construccionesvelazquezmann.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <Mail className="w-5 h-5 text-orange-500" />
                  info@construccionesvelazquezmann.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Sardi 136, Monte Grande, Buenos Aires</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Construcciones Velazquez Mann. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Diseñado con ❤️ en Buenos Aires, Argentina
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
