import { useState } from 'react'
import { MapPin, Calendar, Maximize2, X } from 'lucide-react'

const proyectos = [
  {
    id: 1,
    title: 'Casa Moderna en Monte Grande',
    category: 'Residencial',
    location: 'Monte Grande, Buenos Aires',
    year: '2024',
    area: '280 m²',
    description: 'Construcción completa de vivienda unifamiliar de dos plantas con diseño contemporáneo, jardín y piscina.',
    image: '/proyecto-casa1.jpg',
  },
  {
    id: 2,
    title: 'Edificio de Departamentos',
    category: 'Comercial',
    location: 'Canning, Buenos Aires',
    year: '2023',
    area: '1.200 m²',
    description: 'Construcción de edificio residencial de 6 pisos con 12 unidades de departamentos.',
    image: '/proyecto-edificio.jpg',
  },
  {
    id: 3,
    title: 'Remodelación de Interior',
    category: 'Remodelación',
    location: 'El Jagüel, Buenos Aires',
    year: '2024',
    area: '150 m²',
    description: 'Remodelación integral de interior con diseño industrial, ladrillo visto y ampliación de espacios.',
    image: '/proyecto-interior.jpg',
  },
  {
    id: 4,
    title: 'Cocina Moderna',
    category: 'Remodelación',
    location: 'Ezeiza, Buenos Aires',
    year: '2024',
    area: '35 m²',
    description: 'Remodelación de cocina con acabados de lujo, isla central y equipamiento de última generación.',
    image: '/servicio-remodelacion.jpg',
  },
  {
    id: 5,
    title: 'Piscina Residencial',
    category: 'Exterior',
    location: 'Canning, Buenos Aires',
    year: '2023',
    area: '45 m²',
    description: 'Construcción de piscina de hormigón con sistema de filtrado, iluminación LED y deck de madera.',
    image: '/servicio-piscina.jpg',
  },
  {
    id: 6,
    title: 'Instalación Eléctrica Completa',
    category: 'Instalaciones',
    location: 'Monte Grande, Buenos Aires',
    year: '2024',
    area: '200 m²',
    description: 'Instalación eléctrica completa para vivienda unifamiliar con tablero inteligente.',
    image: '/servicio-electricidad.jpg',
  },
]

const categories = ['Todos', ...new Set(proyectos.map((p) => p.category))]

const Proyectos = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedProject, setSelectedProject] = useState<typeof proyectos[0] | null>(null)

  const filteredProyectos =
    selectedCategory === 'Todos'
      ? proyectos
      : proyectos.filter((p) => p.category === selectedCategory)

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
            Nuestros Trabajos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Proyectos <span className="text-orange-500">Realizados</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce algunos de nuestros trabajos más destacados. Cada proyecto 
            refleja nuestro compromiso con la calidad y la satisfacción del cliente.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(proyecto)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={proyecto.image}
                  alt={proyecto.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full mb-2">
                      {proyecto.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {proyecto.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-300 text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {proyecto.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 p-3 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Maximize2 className="w-5 h-5 text-gray-900" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full mb-2">
                  {proyecto.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {proyecto.title}
                </h3>
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {proyecto.year}
                  </span>
                  <span>{proyecto.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-8">
              <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
                {selectedProject.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl">
                <div>
                  <span className="block text-gray-500 text-sm mb-1">Ubicación</span>
                  <span className="flex items-center gap-1 text-gray-900 font-medium">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    {selectedProject.location}
                  </span>
                </div>
                <div>
                  <span className="block text-gray-500 text-sm mb-1">Año</span>
                  <span className="flex items-center gap-1 text-gray-900 font-medium">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    {selectedProject.year}
                  </span>
                </div>
                <div>
                  <span className="block text-gray-500 text-sm mb-1">Superficie</span>
                  <span className="text-gray-900 font-medium">{selectedProject.area}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Proyectos
