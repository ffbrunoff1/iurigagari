import { motion } from 'framer-motion'
import { Eye, Star, Wifi, Microscope, Rocket, Globe, Target, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Eye,
      title: "Telescópios Profissionais",
      description: "Equipamentos de alta precisão para observação espacial profissional e descobertas astronômicas.",
      features: ["Lentes de última geração", "Sistemas de rastreamento automático", "Conectividade digital avançada"],
      highlight: "Mais Vendido"
    },
    {
      icon: Star,
      title: "Telescópios para Iniciantes",
      description: "Soluções acessíveis e fáceis de usar para quem está começando na observação espacial.",
      features: ["Interface intuitiva", "Guias de observação inclusos", "Suporte técnico completo"],
      highlight: "Recomendado"
    },
    {
      icon: Wifi,
      title: "Telescópios Espaciais",
      description: "Tecnologia orbital para observação sem interferência atmosférica e máxima precisão.",
      features: ["Eliminação de distorção atmosférica", "Resolução ultra-alta", "Transmissão em tempo real"],
      highlight: "Exclusivo"
    },
    {
      icon: Microscope,
      title: "Sistemas de Análise",
      description: "Ferramentas avançadas para análise e processamento de dados astronômicos coletados.",
      features: ["Processamento de imagem IA", "Análise espectral automatizada", "Relatórios detalhados"],
      highlight: null
    },
    {
      icon: Rocket,
      title: "Consultoria Especializada",
      description: "Orientação personalizada para projetos de observação e pesquisa astronômica.",
      features: ["Planejamento de missões", "Seleção de equipamentos", "Treinamento técnico"],
      highlight: null
    },
    {
      icon: Globe,
      title: "Observatórios Portáteis",
      description: "Estações móveis completas para observação em qualquer localização do planeta.",
      features: ["Montagem rápida", "Resistente a intempéries", "Sistema de energia autônomo"],
      highlight: "Inovação"
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
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
            <Target className="w-5 h-5 mr-2" />
            <span className="font-medium">Especialidades</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-primary-800 mb-6">
            Telescópios de
            <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Alta Performance
            </span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Descubra nossa linha completa de telescópios e sistemas de observação 
            espacial desenvolvidos com tecnologia de ponta
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100 flex flex-col"
            >
              {service.highlight && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-accent-400 to-accent-600 text-white px-4 py-1 rounded-full text-sm font-semibold"
                >
                  {service.highlight}
                </motion.div>
              )}

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-primary-100 to-secondary-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              >
                <service.icon className="w-8 h-8 text-primary-600" />
              </motion.div>

              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                {service.title}
              </h3>

              <p className="text-primary-600 mb-6 flex-grow">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.1 }}
                    className="flex items-center text-primary-700"
                  >
                    <Zap className="w-4 h-4 text-accent-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-300 mt-auto"
              >
                Saber Mais
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-cosmic rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 text-white/10"
          >
            <Star size={60} />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 text-white/10"
          >
            <Telescope size={80} />
          </motion.div>

          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-white mb-6">
              Pronto para Explorar o Universo?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra qual telescópio é perfeito para suas 
              necessidades de observação espacial. Consultoria personalizada inclusa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-white text-primary-800 font-semibold py-4 px-8 rounded-full hover:bg-accent-100 transition-all duration-300 shadow-lg"
              >
                Falar com Especialista
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-white/20 backdrop-blur-lg text-white font-semibold py-4 px-8 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                Ver Catálogo Completo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}