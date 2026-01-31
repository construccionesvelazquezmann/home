import { Award, Users, Building, CheckCircle } from 'lucide-react'

const stats = [
  { icon: Building, value: '200+', label: 'Obras Completadas' },
  { icon: Users, value: '50+', label: 'Clientes Satisfechos' },
  { icon: Award, value: '20+', label: 'Años de Experiencia' },
]

const valores = [
  {
    title: 'Calidad',
    description: 'Utilizamos materiales de primera calidad y técnicas constructivas probadas.',
  },
  {
    title: 'Compromiso',
    description: 'Cumplimos con los plazos acordados y mantenemos una comunicación constante.',
  },
  {
    title: 'Profesionalismo',
    description: 'Equipo capacitado y certificado para todo tipo de obras.',
  },
  {
    title: 'Garantía',
    description: 'Ofrecemos garantía en todos nuestros trabajos de construcción.',
  },
]

const SobreNosotros = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 text-sm font-semibold rounded-full mb-6">
              Sobre Nosotros
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Construyendo <span className="text-orange-500">Confianza</span> desde{' '}
              <span className="text-orange-500">2004</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Construcciones Velazquez Mann es una empresa familiar con más de 20 años de 
              experiencia en el sector de la construcción en Buenos Aires. Nos especializamos 
              en obras residenciales, comerciales e industriales, brindando un servicio 
              integral que abarca desde el diseño hasta la entrega final.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Nuestro equipo de profesionales altamente capacitados está comprometido con 
              la excelencia, utilizando materiales de primera calidad y las últimas 
              tecnologías constructivas para garantizar resultados superadores.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {valores.map((valor, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">{valor.title}</h4>
                    <p className="text-sm text-gray-400">{valor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-6 p-6 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-colors"
              >
                <div className="p-4 bg-orange-500 rounded-xl">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="block text-4xl font-bold text-orange-500">
                    {stat.value}
                  </span>
                  <span className="text-gray-400">{stat.label}</span>
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <div className="p-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                ¿Listo para comenzar tu proyecto?
              </h3>
              <p className="text-orange-100 mb-4">
                Contáctanos hoy mismo para una consulta gratuita y presupuesto sin compromiso.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Solicitar Presupuesto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreNosotros
