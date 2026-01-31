import { useState } from 'react'
import { Phone, MapPin, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Teléfono',
    content: '+54 9 11 4028-9266',
    href: 'tel:+5491140289266',
  },
  {
    icon: MapPin,
    title: 'Dirección',
    content: 'Sardi 136, Monte Grande, Buenos Aires',
    href: 'https://maps.google.com/?q=Sardi+136+Monte+Grande+Buenos+Aires',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@construccionesvelazquezmann.com',
    href: 'mailto:info@construccionesvelazquezmann.com',
  },
  {
    icon: Clock,
    title: 'Horario',
    content: 'Lun - Vie: 8:00 - 18:00',
    href: null,
  },
]

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoObra: '',
    mensaje: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        tipoObra: '',
        mensaje: '',
      })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Solicitá tu <span className="text-orange-500">Presupuesto</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Completá el formulario y nos pondremos en contacto con vos a la brevedad 
            para asesorarte sobre tu proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="p-4 bg-green-100 rounded-full mb-4">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-gray-600 text-center">
                  Gracias por contactarnos. Te responderemos a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="+54 9 11 XXXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de obra *
                  </label>
                  <select
                    name="tipoObra"
                    value={formData.tipoObra}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Seleccioná el tipo de obra</option>
                    <option value="vivienda">Construcción de vivienda</option>
                    <option value="remodelacion">Remodelación</option>
                    <option value="comercial">Obra comercial</option>
                    <option value="piscina">Piscina / Exterior</option>
                    <option value="instalaciones">Instalaciones</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                    placeholder="Contanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5" />
                  Enviar Consulta
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href || '#'}
                target={info.href?.startsWith('http') ? '_blank' : undefined}
                rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all ${
                  info.href ? 'hover:bg-orange-50' : ''
                }`}
              >
                <div className="p-4 bg-orange-100 rounded-xl">
                  <info.icon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <span className="block text-sm text-gray-500">{info.title}</span>
                  <span className="block text-lg font-semibold text-gray-900">
                    {info.content}
                  </span>
                </div>
              </a>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.0!2d-58.4667!3d-34.8167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ5JzAwLjAiUyA1OMKwMjgnMDAuMCJX!5e0!3m2!1ses!2sar!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
