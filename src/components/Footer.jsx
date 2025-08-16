import { motion } from 'framer-motion'
import { TelescopeIcon, Mail, MapPin, Star, Rocket, Globe } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Especialidades', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  const specialties = [
    'Telescópios Profissionais',
    'Sistemas de Análise',
    'Consultoria Especializada',
    'Observatórios Portáteis'
  ]

  const contact = [
    { icon: Mail, text: 'contato@iurigagari.com' },
    { icon: MapPin, text: 'São Paulo, Brasil' }
  ]

  return (
    <footer className="bg-primary-900 text-white relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-gradient-cosmic opacity-50"></div>
      
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 text-white/5"
      >
        <Star size={100} />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-40 left-20 text-white/5"
      >
        <TelescopeIcon size={120} />
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/3"
      >
        <Rocket size={80} />
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-16 pb-12"
        >
          <div className="grid lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 mb-6 cursor-pointer"
                onClick={() => scrollToSection('hero')}
              >
                <div className="p-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full">
                  <TelescopeIcon className="w-8 h-8 text-white" />
                </div>
                <span className="text-3xl font-bold">Iuri Gagari</span>
              </motion.div>

              <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-md">
                Astronauta especialista em telescópios, dedicado a tornar a exploração 
                espacial acessível através de tecnologias avançadas e conhecimento científico.
              </p>

              <div className="flex space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-white/10 backdrop-blur-lg p-3 rounded-full"
                >
                  <Star className="w-6 h-6 text-accent-300" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="bg-white/10 backdrop-blur-lg p-3 rounded-full"
                >
                  <Globe className="w-6 h-6 text-accent-300" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-white/10 backdrop-blur-lg p-3 rounded-full"
                >
                  <Rocket className="w-6 h-6 text-accent-300" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-6 text-accent-300">
                Navegação
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      whileHover={{ x: 10, color: '#fbbf24' }}
                      onClick={() => scrollToSection(link.id)}
                      className="text-white/80 hover:text-accent-300 transition-colors duration-300 block"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl font-bold mb-6 text-accent-300">
                Especialidades
              </h4>
              <ul className="space-y-3">
                {specialties.map((specialty, index) => (
                  <li key={index}>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="text-white/80 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      {specialty}
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-6 text-accent-300">
                  Entre em Contato
                </h4>
                <div className="space-y-4">
                  {contact.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-3 text-white/80 hover:text-white transition-all duration-300"
                    >
                      <item.icon className="w-5 h-5 text-accent-300" />
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6 text-accent-300">
                  Missão
                </h4>
                <p className="text-white/80 leading-relaxed">
                  Democratizar o acesso ao conhecimento espacial e inspirar a próxima 
                  geração de exploradores através de tecnologias de telescópio inovadoras.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-white/20 text-center"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60">
                © 2024 Iuri Gagari. Todos os direitos reservados.
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-white/60"
              >
                Criado com{' '}
                <a
                  href="https://papum.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic hover:text-accent-300 transition-colors duration-300"
                >
                  Papum
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}