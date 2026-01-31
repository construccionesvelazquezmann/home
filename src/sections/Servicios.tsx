import { Home, Building2, Wrench, Droplets, Zap, Hammer } from 'lucide-react'

const servicios = [
  {
    icon: Home,
    title: 'Construcción de Viviendas',
    description: 'Diseñamos y construimos la casa de tus sueños, desde la fundación hasta los últimos detalles de terminación.',
    image: `${import.meta.env.BASE_URL}proyecto-casa1.jpg`,
  },
  {
    icon: Building2,
    title: 'Obras Comerciales',
    description: 'Construcción de locales comerciales, oficinas y edificios con los más altos estándares de calidad.',
    image: `${import.meta.env.BASE_URL}proyecto-edificio.jpg`,
  },
  {
    icon: Wrench,
    title: 'Remodelaciones',
    description: 'Transformamos y modernizamos espacios existentes para darles nueva vida y funcionalidad.',
    image: `${import.meta.env.BASE_URL}servicio-remodelacion.jpg`,
  },
  {
    icon: Droplets,
    title: 'Piscinas y Espacios Verde',
    description: 'Construcción de piscinas, quinchos y áreas de esparcimiento para disfrutar al aire libre.',
    image: `${import.meta.env.BASE_URL}servicio-piscina.jpg`,
  },
  {
    icon: Zap,
    title: 'Instalaciones Eléctricas',
    description: 'Instalaciones eléctricas completas, tanto para obras nuevas como remodelaciones.',
    image: `${import.meta.env.BASE_URL}servicio-electricidad.jpg`,
  },
  {
    icon: Hammer,
    title: 'Albañilería General',
    description: 'Trabajos de albañilería, mampostería, revoques y todo tipo de construcción en seco.',
    image: `${import.meta.env.BASE_URL}servicio-albanileria.jpg`,
  },
]

const Servicios = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Soluciones de Construcción{' '}
            <span className="text-orange-500">Integrales</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de construcción para satisfacer
            todas tus necesidades, desde proyectos residenciales hasta obras comerciales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={servicio.image}
                  alt={servicio.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="p-3 bg-orange-500 rounded-xl">
                    <servicio.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {servicio.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {servicio.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios
