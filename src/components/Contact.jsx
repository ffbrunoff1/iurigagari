import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Eye, Star, TelescopeIcon } from 'lucide-react'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    
    const whatsappMessage = `Olá Iuri! Meu nome é ${name}. ${message}`
    const phoneNumber = "5511999999999"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
    
    window.open(whatsappUrl, '_blank')
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@iurigagari.com",
      description: "Resposta em até 24 horas"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+55 (11) 99999-9999",
      description: "Atendimento imediato"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, Brasil",
      description: "Atendimento presencial"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 text-primary-100"
      >
        <Star size={60} />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 text-secondary-100"
      >
        <TelescopeIcon size={80} />
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-full mb-6"
          >
            <Send className="w-5 h-5 mr-2" />
            <span className="font-medium">Entre em Contato</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-primary-800 mb-6">
            Vamos Explorar o
            <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Universo Juntos
            </span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Pronto para começar sua jornada de descobertas espaciais? 
            Entre em contato e descubra como posso ajudar você a alcançar as estrelas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-primary-800 mb-6">
                Informações de Contato
              </h3>
              <p className="text-lg text-primary-600 mb-8">
                Estou sempre disponível para discutir projetos espaciais, 
                consultorias em telescópios ou simplesmente conversar sobre 
                as maravilhas do universo.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-4 rounded-full">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-800 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-primary-700 font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-primary-500 text-sm">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 text-white"
            >
              <TelescopeIcon className="w-16 h-16 mb-6" />
              <h4 className="text-2xl font-bold mb-4">
                Consultoria Especializada
              </h4>
              <p className="text-white/90 mb-6">
                Oferecemos consultoria personalizada para projetos de observação 
                espacial, seleção de equipamentos e treinamento técnico.
              </p>
              <div className="flex items-center text-accent-300">
                <Star className="w-5 h-5 mr-2" />
                <span className="font-medium">Primeira consulta gratuita</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-primary-800 mb-8 text-center">
                Enviar Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-primary-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-primary-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-primary-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Conte-me sobre seu interesse em telescópios ou observação espacial..."
                  ></textarea>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar via WhatsApp
                </motion.button>
              </form>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6 text-center text-sm text-primary-500"
              >
                Ao enviar, você será redirecionado para o WhatsApp
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-primary-800 mb-6">
              Vamos Começar Sua Jornada Espacial
            </h3>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Seja para adquirir seu primeiro telescópio ou desenvolver um 
              observatório completo, estou aqui para guiá-lo em cada passo 
              da sua exploração do universo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}