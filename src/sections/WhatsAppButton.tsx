import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const phoneNumber = '5491140289266'
  const message = 'Hola! Me interesa obtener información sobre sus servicios de construcción.'
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-white text-gray-800 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        ¡Chateá con nosotros!
        <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white" />
      </div>

      {/* Button */}
      <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 hover:shadow-2xl">
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </div>

      {/* Pulse Animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
    </a>
  )
}

export default WhatsAppButton
