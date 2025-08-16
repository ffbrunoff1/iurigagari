import { motion } from 'framer-motion'
import { Star, Eye, Rocket, Globe } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const floatingElements = [
    { icon: Star, delay: 0, x: 10, y: 15 },
    { icon: Eye, delay: 2, x: 90, y: 20 },
    { icon: Rocket, delay: 4, x: 20, y: 80 },
    { icon: Globe, delay: 1, x: 85, y: 75 }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-cosmic">
      <div className="absolute inset-0 bg-gradient-stars opacity-30"></div>
      
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-white/20"
          style={{ left: `${element.x}%`, top: `${element.y}%` }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <element.icon size={40} />
        </motion.div>
      ))}

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 mb-6"
            >
              <Rocket className="w-5 h-5 text-accent-300 mr-2" />
              <span className="text-white font-medium">Astronauta Especialista</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Explore o
              <span className="block bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                Universo
              </span>
              Comigo
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl"
            >
              Sou Iuri Gagari, astronauta especializado em telescópios e observação espacial. 
              Descubra os segredos do cosmos com equipamentos de última geração e conhecimento 
              científico de ponta.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
                className="btn-primary text-lg"
              >
                Descobrir Telescópios
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
                className="btn-secondary bg-white/10 backdrop-blur-lg text-white border-white/30 hover:bg-white hover:text-primary-800 text-lg"
              >
                Conhecer Minha História
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center justify-center lg:justify-start gap-8 mt-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-white/70">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/70">Observações Espaciais</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-white/70">Missões Concluídas</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-white/10 w-96 h-96"
            ></motion.div>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-accent-300/30 w-80 h-80"
            ></motion.div>

            <motion.div
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <div className="text-center">
                <Eye className="w-32 h-32 text-accent-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Telescópio Avançado</h3>
                <p className="text-white/80">
                  Equipamentos de alta precisão para exploração espacial profissional
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
          className="text-white/70 hover:text-white transition-colors duration-300"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Role para baixo</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </motion.button>
      </motion.div>
    </section>
  )
}