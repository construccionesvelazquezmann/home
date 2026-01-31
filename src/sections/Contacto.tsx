import { Phone, MapPin, Mail, Clock, MessageCircle } from 'lucide-react'

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
  const whatsappNumber = '5491140289266';
  const whatsappMessage = 'Hola! Me interesa obtener información sobre sus servicios de construcción.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
            Contactanos directamente y te asesoraremos sobre tu proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* WhatsApp CTA (Replaces Form) */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center items-center text-center space-y-6">
             <div className="p-6 bg-green-100 rounded-full">
                <MessageCircle className="w-16 h-16 text-green-600" />
             </div>
             <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ¡Hablemos por WhatsApp!
                </h3>
                <p className="text-gray-600 max-w-sm mx-auto">
                  La forma más rápida y directa de comunicarte con nosotros. Escribinos para coordinar una visita o pedir tu presupuesto.
                </p>
             </div>
             
             <a 
               href={whatsappUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-bold text-lg rounded-full hover:bg-green-600 transition-all hover:scale-105 shadow-md"
             >
                <MessageCircle className="w-6 h-6" />
                Enviar Mensaje
             </a>
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
