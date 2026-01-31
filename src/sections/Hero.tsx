import { ArrowRight, Phone, MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-construccion.jpg"
          alt="Construcción profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-sm font-medium">
              Construcción de Calidad en Buenos Aires
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Construimos tus{' '}
            <span className="text-orange-500">sueños</span> con{' '}
            <span className="text-orange-500">excelencia</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            Más de 20 años de experiencia en construcción residencial, comercial e industrial. 
            Transformamos tus ideas en realidad con materiales de primera calidad y un equipo 
            profesional comprometido.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all hover:scale-105"
            >
              Solicitar Presupuesto
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/30"
            >
              Ver Proyectos
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
            <a
              href="tel:+5491140289266"
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <Phone className="w-5 h-5 text-orange-500" />
              <span>+54 9 11 4028-9266</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span>Sardi 136, Monte Grande, Buenos Aires</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-orange-500 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero
